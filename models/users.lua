--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--

local users	=	class('users')
local sql	=	nil
local data	=	{}
pagination	=	require('libraries.pagination')

function users:get_users(page)
	db:open()
	local records 	= db:get_var('select count(id_user) from users');
	pagination:set_page(page)
	pagination:conf({
		records		= records,
		limit		= 2,
		show_links	= 1,
		template	= {
			current = 'class="active"',
			link 	= '<li><a %s href="/users/page/%s">%s</a></li>'
		}
	})
	local pages = pagination:get_pagination()
	view:add_contents({pagination={pages}})

	self.sql  = [[select * from users
			order by id_user desc
		      limit %d offset %d]]
	self.data = db:get_results(self.sql,pages.limit,pages.offset)
	db:close()
	if ( not self.data ) then
		return {}
	end
	return self.data
end

function users:get_user(id_user)
	db:open()
	self.sql  = 'select * from users where id_user=%d'
	self.data = db:get_rows(self.sql, id_user)
	db:close()
	if (self.data[1]) then
		return self.data[1]
	end
	return false
end

local function save_ok(post)
	local fullname = post['fullname']
	local username = post['username']
	local password = post['password']
	local confirmp = post['confirmp']

	if (fullname == '') then
		view:add_message('Fullname es obligatorio')
		return false
	elseif (username == '') then
		view:add_message('Username es obligatorio')
		return false
	elseif (password == '') then
		view:add_message('Password es obligatorio')
		return false
	end
	if (password ~= confirmp) then
		view:add_message('Las contraseñas deben ser iguales')
		return false
	end
	return true
end

function users:save_user(post)
	if (not save_ok(post)) then
		return false
	end
	db:open()
	db:begin()
	self.sql = [[insert into users
			(fullname, username, password)
		     values(%s,%s,%s)]]
	local values = {
		post['fullname'],
		post['username'],
		auth:make_password(post['password'], 'sha256')
	}
	local ok, err = db:execute(self.sql, values)
	if (not ok) then
		view:add_message(err)
		db:rollback()
		db:close()
		return false
	end
	db:commit()
	db:close()
	return true
end

function users:update_user(post)
	if (not save_ok(post)) then
		return false
	end
	db:open()
	db:begin()
	self.sql = [[update users set fullname=%s,
			username=%s,password=%s
		     where id_user=%d]]
	local values = {
		post['fullname'],
		post['username'],
		auth:make_password(post['password'], 'sha256'),
		post['id_user']
	}
	local ok, err = db:execute(self.sql, values)
	if (not ok) then
		view:add_message(err)
		db:rollback()
		db:close()
		return false
	end
	db:commit()
	db:close()
	return true
end

return users

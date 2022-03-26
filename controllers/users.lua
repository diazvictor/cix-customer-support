--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local users	=	class('users');

function users:set_view()
	view:add_contents({
		js   = {
			("/js/themes/%s/common/jquery.js"):format(conf.theme.theme),
			("/js/themes/%s/common/script.js"):format(conf.theme.theme),
			("/js/themes/%s/private/users/users.js"):format(conf.theme.theme)
		},
		css  = {
			("/css/themes/%s/common/mustard-ui.min.css"):format(conf.theme.theme),
			("/css/themes/%s/common/style.css"):format(conf.theme.theme),
			("/css/themes/%s/private/users/users.css"):format(conf.theme.theme)
		},
	})
end

function users:show_form(info)
	view:add_content('user', info)
	self:set_view()
	local page   = template.new(
		"/private/users/form.html",
		"/private/page.html"
	)
	view:generate(page)
end

function users:show_main()
	view:add_content('title',"Luachi | Users")
	view:add_content('menu_users', 'selected')
	self:set_view()
	local page   = template.new(
		"/private/users/users.html",
		"/private/page.html"
	)
	view:generate(page)
end

function users:execute()
	view:add_content('username', SESSION['username'])
	local parameters = router.parameters
	if (ENV.REQUEST_METHOD == 'POST') then
		if (parameters) then
			if (parameters[1] == 'new') then
				if (FORM['fullname'] and FORM['username']) then
					if (model:save_user(FORM)) then
						http:header('Location: /users', 200)
						return
					end
					view:add_content('title',"New User")
					view:add_content('header',"Register a new user")
					view:add_content('menu_new_user', 'selected')
					self:show_form(FORM)
					return
				end
			elseif (parameters[1] == 'edit' and parameters[2]) then
				if (FORM['fullname'] and FORM['username']) then
					if (model:update_user(FORM)) then
						http:header('Location: /users', 200)
						return
					end
					view:add_content('title',"Edit User")
					view:add_content('header',"Edit User")
					view:add_content('menu_users', 'selected')
					self:show_form(FORM)
					return
				end
			end
		end
	end
	if (parameters) then
		if (parameters[1] == 'new') then
			view:add_content('title',"New User")
			view:add_content('header',"Register a new user")
			view:add_content('menu_new_user', 'selected')
			view:add_content('user', {})
			self:show_form()
			return
		elseif (parameters[1] == 'edit' and parameters[2]) then
			local info, err = model:get_user(parameters[2])
			if ( not info ) then
				view:add_message('User not found')
				self:show_main()
				return
			end
			view:add_content('title',"Edit User")
			view:add_content('header',"Edit User")
			view:add_content('menu_users', 'selected')
			self:show_form(info)
			return
		elseif (parameters[1] == 'page' and parameters[2]) then
			view:add_content('users', model:get_users(parameters[2]))
			self:show_main()
			return
		end
	end
	view:add_content('users', model:get_users())
	self:show_main()
end

return users

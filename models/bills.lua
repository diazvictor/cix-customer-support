--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--

local bills	=	class('bills')
local sql	=	nil
local data	=	{}

function bills:get_users()
	db:open()
	self.sql	= "select * from usuarios"
	self.data	= {}
	local result	= db:get_results(self.sql)
	db:close()
	for i,item in pairs(result) do
		table.insert(self.data,{
			usuario = item.usuario
		});
	end
	return self.data
end

return bills

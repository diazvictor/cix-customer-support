--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local MODULE	=	class('MODULE');

function MODULE:show_main()
	view:add_content('title',"Luachi, un framework web para Lua")
	view:add_contents({
		js   = {
			("/js/themes/%s/SCOPE/MODULE/MODULE.js"):format(conf.theme.theme)
		},
		css  = {
			("/css/themes/%s/SCOPE/MODULE/MODULE.css"):format(conf.theme.theme)
		},
		users= model:get_users()
	})
	local page   = template.new(
		"/SCOPE/MODULE/MODULE.html",
		"/SCOPE/page.html"
	)
	view:generate(page)
end

function MODULE:execute()
	if (ENV.REQUEST_METHOD == 'POST') then
		if ( POST['logOut'] == 'true' ) then
			local result = auth:logOut()
			if ( result == true) then
				http:header("Content-type: application/json; charset=utf-8",200)
				print(json:encode({ok=result}))
			end
			return
		end
	end
	self:show_main()
end

return MODULE

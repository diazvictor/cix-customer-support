--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local help	= class('help');
local theme = conf.theme.theme

-- Customized help

function help:show_main()
	view:add_content('title',"Cix Customer Support | Help")
	view:add_contents({
		js   = {
            ("/js/themes/%s/common/common.min.js"):format(theme),
			("/js/themes/%s/help/help.min.js"):format(theme)
		},
		css  = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/brands.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/help/help.css"):format(theme)
		},
		users= model:get_users(),
        year = os.date('%Y')
	})
	if( util:is_false(conf.luachi.production) )then
		view:add_content('js','//127.0.0.1:35729/livereload.js')
	end
	local page   = template.new(
		"/help/help.html",
		"/page.html"
	)
	view:generate(page)
end

function help:execute()
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

return help

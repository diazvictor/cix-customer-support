--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--

local nfound= class('index');
local theme = conf.theme.theme

function nfound:show()
	view:add_content('title',"Cix Customer Support | Page not found")
	view:add_contents({
		css = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/common/404/404.css"):format(theme)
		}
	})
	local page = template.new(
		"/common/404.html"
	)
	view:generate(page)
end

function nfound:execute()
	http:header("Status: 404")
	nfound:show()
end

return nfound

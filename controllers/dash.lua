--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local dash  = class('dash');
local theme = conf.theme.theme
--local date 	= require('vendor.date')

function dash:show_main()
	view:add_content('title',"Cix Customer Support | Dashboard")
	view:add_content('description',"Luachi, un framework web para Lua")
	view:add_contents({
		js  = {
			("/js/themes/%s/common/common.min.js"):format(theme),
			("/js/themes/%s/dash/dash.min.js"):format(theme)
		},
		css = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/common/leaflet.css"):format(theme),
			("/css/themes/%s/dash/dash.css"):format(theme)
		},
        year = os.date('%Y')
	})
	if( util:is_false(conf.luachi.production) )then
		view:add_content('js','//127.0.0.1:35729/livereload.js')
	end
	local page = template.new(
		"/dash/dash.html",
		"/page.html"
	)
	view:generate(page)
end

function dash:execute()
	view:add_content('username', SESSION['username'])
	self:show_main()
end

return dash

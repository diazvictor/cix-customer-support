--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local services	= class('services');
local theme     = conf.theme.theme

function services:set_page()
	view:add_contents({
		js   = {
            ("/js/themes/%s/common/common.min.js"):format(theme),
			("/js/themes/%s/services/services.min.js"):format(theme)
		},
		css  = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/brands.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/common/leaflet.css"):format(theme),
			("/css/themes/%s/services/services.css"):format(theme)
		},
		users= model:get_users(),
        year = os.date('%Y')
	})
	if( util:is_false(conf.luachi.production) )then
		view:add_content('js','//127.0.0.1:35729/livereload.js')
	end
end

function services:show_overview()
	view:add_content('title',"Cix Customer Support | Services")
	self:set_page()
	local page   = template.new(
		"/services/services.html",
		"/page.html"
	)
	view:generate(page)
end

function services:show_requests()
	view:add_content('title',"Cix Customer Support | Requests")
	self:set_page()
	local page   = template.new(
		"/services/requests.html",
		"/page.html"
	)
	view:generate(page)
end

function services:show_view()
	view:add_content('title',"Cix Customer Support | Services - View")
	self:set_page()
	view:add_contents({
		js = {
			("/js/themes/%s/services/view.min.js"):format(theme)
		},
		css = {
            ("/css/themes/%s/services/view.css"):format(theme),
		},
	})
	local page   = template.new(
		"/services/view.html",
		"/page.html"
	)
	view:generate(page)
end

function services:show_new()
	view:add_content('title',"Cix Customer Support | New Request")
	self:set_page()
	view:add_contents({
		js = {
            ("/js/themes/%s/common/steps.js"):format(theme),
            ("/js/themes/%s/common/tabs.js"):format(theme)
		},
		css = {
			("/css/themes/%s/services/new.css"):format(theme),
		}
	})
	local page   = template.new(
		"/services/new.html",
		"/page.html"
	)
	view:generate(page)
end


function services:execute()
	local parameters = router.parameters

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

	if ( parameters[1] ) then
		if (parameters[1] == 'new') then
			self:show_new()
			return
		elseif (parameters[1] == 'requests') then
			self:show_requests()
			return
		elseif (parameters[1] == 'view') then
			self:show_view()
			return
		end
	end

	self:show_overview()
end

return services

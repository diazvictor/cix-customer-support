--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--
local bills	= class('bills');
local theme = conf.theme.theme

function bills:set_page()
	view:add_contents({
		js   = {
            ("/js/themes/%s/common/common.min.js"):format(theme),
			("/js/themes/%s/bills/bills.min.js"):format(theme)
		},
		css  = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/brands.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/bills/bills.css"):format(conf.theme.theme)
		},
		users= model:get_users(),
        year = os.date('%Y')
	})
	if( util:is_false(conf.luachi.production) )then
		view:add_content('js','//127.0.0.1:35729/livereload.js')
	end
end

function bills:show_overview()
	view:add_content('title',"Cix Customer Support | Invoicings")
	self:set_page()
	local page   = template.new(
		"/bills/bills.html",
		"/page.html"
	)
	view:generate(page)
end

function bills:show_view()
	view:add_content('title',"Cix Customer Support | Invoicings - View")
	self:set_page()
	view:add_contents({
		css = {
            ("/css/themes/%s/bills/view.css"):format(theme),
		},
	})
	local page   = template.new(
		"/bills/view.html",
		"/page.html"
	)
	view:generate(page)
end

function bills:show_paynow()
	view:add_content('title',"Cix Customer Support | Invoicings - Pay Now")
	self:set_page()
	view:add_contents({
		css = {
            ("/css/themes/%s/bills/paynow.css"):format(theme),
		},
	})
	local page   = template.new(
		"/bills/paynow.html",
		"/page.html"
	)
	view:generate(page)
end

function bills:execute()
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
		if (parameters[1] == 'view' and not parameters[2]) then
			self:show_view()
			return
		elseif (parameters[1] == 'view' and parameters[2] == "paynow") then
			self:show_paynow()
			return
		end
	end

	self:show_overview()
end

return bills

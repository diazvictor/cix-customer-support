--[[
          _                     _     _
         | |   _   _  __ _  ___| |__ (_)
         | |  | | | |/ _` |/ __| '_ \| |
         | |__| |_| | (_| | (__| | | | |
         |_____\__,_|\__,_|\___|_| |_|_|
Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
<vitronic2@gmail.com>   <mastervitronic@vitronic.com.ve>
]]--

------------------------------------------------------------------------
-- login Luachi.
-- Esta modulo contiene el controlador para iniciar la sesion
-- @module login
-- @author Máster Vitronic
-- @license GPL
-- @copyright 2020  Díaz  Víctor  aka  (Máster Vitronic)
------------------------------------------------------------------------

local login	= class('login')
local theme = conf.theme.theme

function login:execute()
	http:header("Status: 401")
	if ( ENV.REQUEST_METHOD == 'POST' and FORM['logIn'] == 'true' ) then
		if( FORM['username'] ) then
			view:add_content('username',FORM['username'])
		end
	end
	view:add_content('title',"Cix Customer Support | Login")
	view:add_contents({
		css  = {
			("/css/themes/%s/%s.css"):format(theme,theme),
			("/css/themes/%s/common/fontawesome/fontawesome.css"):format(theme),
			("/css/themes/%s/common/fontawesome/brands.css"):format(theme),
			("/css/themes/%s/common/fontawesome/solid.css"):format(theme),
			("/css/themes/%s/common/fontawesome/regular.css"):format(theme),
			("/css/themes/%s/common/login.css"):format(conf.theme.theme)
		},
        year = os.date('%Y')
	})
	local page = template.new(
		"/login/login.html"
	)
	view:generate(page)
end

return login

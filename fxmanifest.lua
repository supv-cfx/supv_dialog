fx_version "cerulean"

description "Basic React (TypeScript) & Lua Game Scripts DialogAlert with boilerplate from Project Error"
author "SUP2Ak"
version '1.0'
repository ''

lua54 'yes'
use_experimental_fxv2_oal 'yes'

game 'gta5'

ui_page 'web/build/index.html'

client_script "client.lua"

files {
	'web/build/index.html',
	'web/build/**/*',
}
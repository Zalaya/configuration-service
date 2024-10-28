fx_version "cerulean"
game "gta5"

name "Zombie System Configuration Service"
description "Configuration Service module for the Zombie System"
author "Zalaya"
version "1.0.0"

shared_script "configuration.lua"

server_scripts {
    "@oxmysql/lib/MySQL.lua",
    "server/main.lua"
}

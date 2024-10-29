fx_version "cerulean"
game "gta5"

name "Configuration Service"
description "FiveM Configuration Service"
author "Zalaya"
version "1.0.0"
repository "https://github.com/Zalaya/configuration-service"

depends {
    "oxmysql"
}

server_scripts {
    "@oxmysql/lib/MySQL.lua",
    "server/main.lua"
}

server_only "yes"

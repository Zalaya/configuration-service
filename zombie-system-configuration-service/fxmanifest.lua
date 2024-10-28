fx_version "cerulean"
game "gta5"

name "Zombie System Configuration Service"
description "Configuration Service module for the Zombie System"
author "Zalaya"
version "1.0.0"

shared_script "configuration.lua"
server_script '@oxmysql/lib/MySQL.lua'

server_scripts {
    "controller/suscription_controller.lua",
    "services/properties_comparation_service.lua",
    "services/notification_service.lua",
    "scheduler/database_detection_scheduler.lua"
}

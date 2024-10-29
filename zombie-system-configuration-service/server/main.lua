local localProperties = {}
local subscribedModules = {}

TriggerEvent("zombie-system:configuration-service:subscribe", "configuration-service")

RegisterNetEvent("zombie-system:configuration-service:configuration-updated")
AddEventHandler("zombie-system:configuration-service:configuration-updated", function(remoteProperties)
    localProperties = remoteProperties
end)

RegisterNetEvent("zombie-system:configuration-service:subscribe")
AddEventHandler("zombie-system:configuration-service:subscribe", function(subscribedModule)
    if not subscribedModules[subscribedModule] then
        subscribedModules[subscribedModule] = true
    end

    TriggerEvent("zombie-system:" .. subscribedModule .. ":configuration-updated", localProperties)
end)

Citizen.CreateThread(function()
    while true do
        MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
            local remoteProperties = {}
            
            for _, remoteProperty in ipairs(results) do
                remoteProperties[remoteProperty.name] = tonumber(remoteProperty.value) or remoteProperty.value
            end

            if json.encode(localProperties) ~= json.encode(remoteProperties) then
                localProperties = remoteProperties

                for subscribedModule in pairs(subscribedModules) do
                    TriggerEvent("zombie-system:" .. subscribedModule .. ":configuration-updated", localProperties)
                end
            end
        end)    

        Citizen.Wait(localProperties["zombie-system.configuration-service.database-polling-interval"] or 5000)
    end
end)

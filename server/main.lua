local localProperties = {}
local subscribedModules = {}

RegisterNetEvent("configuration-service:subscribe")
AddEventHandler("configuration-service:subscribe", function(subscribedModule)
    if not subscribedModules[subscribedModule] then
        subscribedModules[subscribedModule] = true
    end

    TriggerEvent(subscribedModule .. ":properties-updated", localProperties)
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
                    TriggerEvent(subscribedModule .. ":properties-updated", localProperties)
                end
            end
        end)    

        Citizen.Wait(5000)
    end
end)

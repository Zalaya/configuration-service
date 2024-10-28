TriggerEvent("zombie-system:configuration-service:get-properties")

RegisterNetEvent("zombie-system:configuration-service:get-properties")
AddEventHandler("zombie-system:configuration-service:get-properties", function()
    MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
        TriggerEvent("zombie-system:configuration-service:set-properties", json.encode(results))                 
    end)
end)

RegisterNetEvent("zombie-system:configuration-service:set-properties")
AddEventHandler("zombie-system:configuration-service:set-properties", function(remoteProperties)
    localProperties = remoteProperties
end)

Citizen.CreateThread(function()
    while true do
        MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
            local remoteProperties = json.encode(results)

            if remoteProperties ~= localProperties then
                TriggerEvent("zombie-system:configuration-service:set-properties", remoteProperties)
            end                    
        end)

        Citizen.Wait(5000)
    end
end)


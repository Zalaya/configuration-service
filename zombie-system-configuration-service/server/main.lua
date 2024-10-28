TriggerEvent("zombie-system:configuration-service:get-properties")

RegisterNetEvent("zombie-system:configuration-service:get-properties")
AddEventHandler("zombie-system:configuration-service:get-properties", function()
    MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
        TriggerEvent("zombie-system:configuration-service:set-properties", json.encode(results))                 
    end)
end)

RegisterNetEvent("zombie-system:configuration-service:set-properties")
AddEventHandler("zombie-system:configuration-service:set-properties", function(remoteProperties)
    localProperties = toDictionary(json.decode(remoteProperties))
end)

function toDictionary(properties)
    local dictionary = {}
    
    for _, property in ipairs(properties) do
        dictionary[property.name] = tonumber(property.value) or property.value
    end

    return dictionary
end

Citizen.CreateThread(function()
    while true do
        MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
            local remoteProperties = toDictionary(results)

            if json.encode(localProperties) ~= json.encode(remoteProperties) then
                TriggerEvent("zombie-system:configuration-service:set-properties", json.encode(results))
            end                    
        end)

        Citizen.Wait(localProperties["zombie-system.configuration-service.database-polling-interval"] or 5000)
    end
end)


Citizen.CreateThread(function()
    while true do
        MySQL.Async.fetchAll("SELECT name, value FROM properties", {}, function(results)
            if hasPropertiesChanged(results) then
                updateProperties(results)
            end
        end)
        
        Citizen.Wait(5000)
    end
end)

local function updateProperties(result)
    localProperties = {}

    for _, row in ipairs(result) do
        localProperties[row.name] = row.value
    end

    notifySubscribedModules()
end
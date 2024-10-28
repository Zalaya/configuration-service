function notifySuscribedModules()
    for _, module in ipairs(subscribedModules) do
        TriggerClientEvent("zombie-system:configuration-service:update", module, localProperties)
    end
end
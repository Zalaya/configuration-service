RegisterNetEvent("zombie-system:configuration-service:subscribe")
AddEventHandler("zombie-system:configuration-service:subscribe", function(module)
    if #suscribedModules > 0 then
        for _, suscribedModule in ipairs(suscribedModules) do
            if suscribedModule == module then
                return
            end
        end
    end

    table.insert(suscribedModules, module)
end)

RegisterNetEvent("zombie-system:configuration-service:unsubscribe")
AddEventHandler("zombie-system:configuration-service:unsubscribe", function(module)
    if #suscribedModules > 0 then
        for i, suscribedModule in ipairs(suscribedModules) do
            if suscribedModule == module then
                table.remove(suscribedModules, i)
                return
            end
        end
    end
end)
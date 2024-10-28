function hasPropertiesChanged(remoteProperties)
    if hasPropertiesLengthChanged(remoteProperties) or hasPropertiesContentChanged(remoteProperties) then
        return true
    end

    return false
end

local function hasPropertiesLengthChanged(remoteProperties)
    return #localProperties ~= #remoteProperties
end

local function hasPropertiesContentChanged(remoteProperties)
    for _, row in ipairs(remoteProperties) do
        if localProperties[row.name] ~= row.value then
            return true
        end
    end

    return false
end
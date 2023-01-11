local test <const> = false 
local Promise, isOpen, Await <const> = nil, false, Citizen.Await

local function SendReactMessage(name, value)
    SendNUIMessage({
        action = name,
        data = value
    })
end

local function ToggleNuiFrame(bool)
    SetNuiFocus(bool, bool)
    SendReactMessage('setVisible', bool)
end

RegisterNUICallback('closeDialog', function(value, cb)
    if Promise then
        if value == 'validate' then
            Promise:resolve(true)
        else
            Promise:resolve(false)
        end
        Promise = nil
    end
    ToggleNuiFrame(false)
    isOpen = false
end)

local function CreateInteractDialog(title, description)
    if type(title) ~= 'string' and type(description) ~= 'string' then return end
    while isOpen do Wait(500) end
    Promise = promise.new()
    isOpen = true
  
    ToggleNuiFrame(true)
    SendReactMessage('myAction', {title = title, description = description})
    SetCursorLocation(0.50, 0.50)

    return Await(Promise)
end

exports('CreateInteractDialog', CreateInteractDialog)

if test then
    RegisterCommand('tt1', function()
        local handcuff = CreateInteractDialog("Menotter?", "Une personne souhaite vous menottez!")
        if handcuff then print(handcuff, 'if handcuff') else print(handcuff, 'else handcuff') end
    end, false)

    RegisterCommand('tt2', function()
        local chauve = CreateInteractDialog("Chauve?", "Une personne veut vous mettre la boule a zéro!")
        if chauve then print(chauve, 'if chauve') else print(chauve, 'else chauve') end
    end, false)
end

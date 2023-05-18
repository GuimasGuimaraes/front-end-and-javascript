local key = 34461 -- ID item ktorego ma uzywac na itemach 
local itemsIds = {8074, 32209, 32208, 821, } -- ID itemow na ktorych ma uzywac

macro(100, "Use Key On Loot", function()
  for i, itemId in pairs(itemsIds) do
    local item = findItem(itemId)
    if item then
      useWith(key, item)
      return
    end
  end
end)
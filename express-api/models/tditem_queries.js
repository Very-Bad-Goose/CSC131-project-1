const getItems = "select * from items";
const getComputers = "select * from items where category = 'computers'";
const getDocks = "select * from items where category = 'docks'";
const getMonitors = "select * from items where category = 'monitors'";
const getSoftware = "select * from items where category = 'software'";
const getItem = "select * from items WHERE id = @id";
const checkIDExists = "select * FROM items = @s WHERE s.id = @id";
const addItem = "insert into items archetype = @archetype, category = @category, manufacturer = @manufacturer, item_name = @item_name, imagepath = @imagepath, price = @price";
const deleteItem = "delete from items WHERE id = @id";
const updateItem = "update items set archetype = @archetype, category = @category, manufacturer = @manufacturer, item_name = @item_name, imagepath = @imagepath, price = @price WHERE id = @id";

const tdmeths = {
    getItems,
    getItem,
    getComputers,
    getDocks,
    getMonitors,
    getSoftware,
    checkIDExists,
    addItem,
    deleteItem,
    updateItem
};

export default tdmeths;
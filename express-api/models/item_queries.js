const getItems = "select * from items";
const getComputers = "select * from items where category = 'computers'";
const getDocks = "select * from items where category = 'docks'";
const getMonitors = "select * from items where category = 'monitors'";
const getSoftware = "select * from items where category = 'software'";
const getItem = "select * from items where id = $1";
const checkIDExists = "select * FROM items s where s.id = $1";
const addItem = "insert into items (archetype, category, manufacturer, item_name, imagepath, price) values ($1,$2,$3,$4,$5,$6)";
const deleteItem = "delete from items where id = $1";
const updateItem = "update items set archetype = $1, category = $2, manufacturer = $3, item_name = $4, imagepath = $5, price = $6 WHERE id = $7";

const meths = {
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

export default meths;
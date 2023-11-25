const getItems = "select * from items";
const getItem = "select * from items where id = $1";
const checkExists = "select * FROM items s where s.id = $1";
const addItem = "insert into items (archetype, category, manufacturer, item_name, imagepath, price) values ($1,$2,$3,$4,$5,$6)";
const deleteItem = "delete from items where id = $1";
const updateItem = "update items set archetype = $1, category = $2, manufacturer = $3, item_name = $4, imagepath = $5, price = $6 WHERE id = $7";

const meths = {
    getItems,
    getItem,
    checkExists,
    addItem,
    deleteItem,
    updateItem
};

export default meths;
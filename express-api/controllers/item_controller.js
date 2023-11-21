import { v4 as uuidv4 } from 'uuid';
let items = [
    {
        "archtype":"stuff",
        "category":"pc",
        "manufacturer":"Voyager Space",
        "name":"pic#1",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    },
    {
        "archtype":"stuff",
        "category":"monitor",
        "manufacturer":"Voyager Space",
        "name":"pic#2",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    },
    {
        "archtype":"stuff",
        "category":"misc",
        "manufacturer":"Voyager Space",
        "name":"pic#3",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    },
    {
        "archtype":"stuff",
        "category":"pens",
        "manufacturer":"Voyager Space",
        "name":"pic#4",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    },
    {
        "archtype":"stuff",
        "category":"office",
        "manufacturer":"Voyager Space",
        "name":"pic#5",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    },
    {
        "archtype":"stuff",
        "category":"desk",
        "manufacturer":"Voyager Space",
        "name":"pic#6",
        "imagepath":"https://picsum.photos/id/1/200/300",
        id:uuidv4()
    }
];

export const getItems = (req,res)=>{
    console.log('getting all items');
    res.send(items);
}

export const createItem = (req,res)=>{
    console.log('creating item');
    const item = req.body;
    items.push({...item, id:uuidv4()});
    res.send(`ticket ${item.id} created`);
};

export const getItem = (req,res)=>{
    const { id } = req.params;
    const foundItem = items.find((item)=>item.id==id);
    console.log(`finding ${req.params}`);
    res.send(foundItem);
}

export const updateItem = (req,res)=>{
    const { id } = req.params;
    const { category, archtype, name, imagepath, manufacturer } = req.body;
    const upItem = items.find((item)=>item.id==id);
    if(archtype){upItem.archtype = archtype;}
    if(category){
        upItem.category = category;
    }
    if(manufacturer){
        upItem.manufacturer = manufacturer;
    }
    if(name){
        upItem.name = name;
    }
    if(imagepath){
        upItem.imagepath = imagepath;
    }
    console.log(`${req.params} update`);
    res.send(`item ${id} updated with ${req.params}`);
}

export const deleteItem = (req,res)=>{
    const { id } = req.params;
    items = items.filter((item)=>item.id != id);
    console.log(req.params);
    res.send(`item ${id} deleted`);
}

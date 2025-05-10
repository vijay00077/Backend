const Item = require('../models/Item');

// Create a new item
exports.createItem = async (itemData) => {
  // Only pass the fields that are in our schema
  const { name, description, price } = itemData;
  return await Item.create({
    name,
    description,
    price
  });
};

// Get all items
exports.getAllItems = async () => {
  return await Item.find();
};

// Get item by ID
exports.getItemById = async (id) => {
  return await Item.findById(id);
};

// Update item
exports.updateItem = async (id, itemData) => {
  // Only update the fields that are in our schema
  const { name, description, price } = itemData;
  return await Item.findByIdAndUpdate(id, {
    name,
    description,
    price
  }, {
    new: true,
    runValidators: true
  });
};

// Delete item
exports.deleteItem = async (id) => {
  return await Item.findByIdAndDelete(id);
};

// Delete by ID (for deleteone controller)
exports.deleteById = async (id) => {
  return await Item.findByIdAndDelete(id);
};

// Delete all items
exports.Alldelete = async () => {
  return await Item.deleteMany({});
};
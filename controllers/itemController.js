const itemService = require('../services/itemService');

// Create Item
exports.createItem = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(req.params.id, req.body);
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Item
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await itemService.deleteItem(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletemany = async (req, res) => {
  try {
    const Alldelete = await itemService.Alldelete();
    res.status(200).json({ message : "deleted Successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteone = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await itemService.deleteById(id);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Item not found or already deleted'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item deleted successfully'
    });

  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid item ID format'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server error during deletion'
    });
  }
}; 
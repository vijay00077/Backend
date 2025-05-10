const mongoose = require('mongoose');

// Create a completely new schema without any auth fields
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: false,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  price: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Make sure we're using a different model name if there's a conflict
// This will create a new collection in MongoDB
module.exports = mongoose.model('ItemProduct', ItemSchema);
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill your name"],
    minlength: [4, "At least needed four letters"],
    maxlength: [20, "You reached the max character limit"],
    required: true
  },
    University: {
      type: String,
      required: [true, "Please fill your name"],
      minlength: [4, "At least needed four letters"],
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    rating: {
        type: String,
        required: true
    },
    Subjects: {
        type: Array,
        required: true
    }

},
{
  timestamps: true, 
});

module.exports = mongoose.model('dataInfo', dataSchema)
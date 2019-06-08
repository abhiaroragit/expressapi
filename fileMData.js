//fileMData.js
var mongoose = require("mongoose");
// Setup schema
var fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  filelocation: {
    type: String,
    required: true
  },
  uploadedBy: String,
  status: String,
  effective_date_from: {
    type: Date,
    default: Date.now
  },
  effective_date_to: {
    type: Date,
    default: Date.now
  },
  customF: [
    {
      k: String,
      v: String
    }
  ],
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export Contact model
var FileMData = (module.exports = mongoose.model("fileMData", fileSchema));
module.exports.get = function(callback, limit) {
  FileMData.find(callback).limit(limit);
};

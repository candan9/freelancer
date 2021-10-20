const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create photo schena
const ProjectSchema = new Schema({
  title: String,
  description: String,
  image : String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
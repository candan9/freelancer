const Project = require('../models/Project');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add');
};

exports.getContactPage = (req, res) => {
  res.render('contact');
};

exports.getEditPage = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  res.render('edit', {
    project,
  });
};

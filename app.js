const express = require('express');
const ejs = require('ejs');
const projectController = require('./controllers/projectController')
const pageController = require('./controllers/pageController')
const app = express();

const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');

//Connect MONGODB
mongoose.connect('mongodb://localhost:27017/freelancerdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('DB CONNECTED!')
}).catch((err)=>{
  console.log(err)
})

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLE WARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUT
app.get('/', projectController.getAllProjects);
app.post('/projects', projectController.createProject);   
app.get('/projects/:id', projectController.getProject);
app.put('/projects/:id', projectController.updateProject);
app.delete('/projects/:id', projectController.deleteProject );
app.get('/about', pageController.getAboutPage);
app.get('/contact', pageController.getContactPage);
app.get('/add', pageController.getAddPage);
app.get('/projects/edit/:id', pageController.getEditPage);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening port");
});

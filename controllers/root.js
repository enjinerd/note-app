//defining controller function

//user note models
const { getAll } = require('../models/note');

//when user acces homepage
async function index(req, res) {
  const notes =  await getAll();
  res.cookie('master', 'Yum!');
  res.render('index', { notes: notes });
}


module.exports = {
  index: index
};

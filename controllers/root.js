//defining controller function

//user note models
const { getAll } = require('../models/note');
const { isLogin } = require('../middlewares/check_login');

//when user acces homepage
async function index(req, res) {
  const notes =  await getAll();
  req.session.username = 'Annonymous';
  res.render('index', { 
    notes: notes,
    isLogin: isLogin(req,res)
   });
}


module.exports = {
  index: index
};

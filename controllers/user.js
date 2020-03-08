
const User = require('../models/user.js');

function register(req, res) {
  res.render('users/register');
}

async function add(req, res) {
  // TODO: Validate data
  const { email, password } = req.body;

  const user = {
    email,
    password
  };
 // Add to user table
 await User.add(user);
 // Loged in user
 res.redirect('/');
}

module.exports = {
 register: register,
 add: add
};


const User = require('../models/user.js');

function register(req, res) {
  res.render('users/register');
}

function login(req, res) {
  res.render('users/login')
}

async function add(req, res) {
  // TODO: Validate data
  const { email, password } = req.body;

  const user = {
    email,
    password
  };
 // Add to user table
 const newUser = await User.add(user);
 // Logged in user
 req.session.userId = newUser[0];
 res.redirect('/');
}

async function process_login(req, res) {
  const match = await User.login(req.body.email, req.body.password);
  if (match) {
    console.log('login sukses');
    req.session.userId = match.id;
    res.redirect('/');
  } else {
    console.log('login gagal');
    res.redirect('/');
  }
}

function process_logout(req, res) {
  req.session.destroy();
  res.redirect('/');
}


module.exports = {
 register: register,
 add: add,
 login: login,
 process_login: process_login,
 process_logout: process_logout
};

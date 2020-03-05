const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'];
const db = require('knex')(config);

function getAll() {
  try {
    return db.select()
          .from('note')
          .orderBy('created_at', 'desc')
          ;
  } catch (err) {
    console.error(err.message);
  }
}
function get(id) {
  return db
    .select()
    .from('note')
    .first();
}

function add(data) {
  try {
    return db('note').insert(data);
  } catch (err) {
    console.error(err.message);
  }
}

function update(id, data) {
  return db('note')
    .where({ id })
    .update(data);
}

function remove(id) {
  return db('note')
    .where({ id })
    .del();
}

module.exports = {
  getAll: getAll,
  get: get,
  add: add,
  update: update,
  remove: remove
};

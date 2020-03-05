const { formatRelative } = require('date-fns');

function noteAge(dateOfNote) {
  return formatRelative(dateOfNote, new Date());
}

module.exports = {
  noteAge: noteAge
};

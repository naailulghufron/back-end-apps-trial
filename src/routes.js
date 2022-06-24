const { 
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
deleteNoteByIdHandler,
editNoteByIdHandler
 } = require('./handler');
// const { nanoid } = require('nanoid');

const routes = [
{
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
},
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },
   {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },

  {
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler,
},
]
module.exports = routes;

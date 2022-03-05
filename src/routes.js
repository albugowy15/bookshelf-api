const {
  addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookbyIdHandler,
} = require('./handler');

const routes = [
  // menambahkan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // menampilkan seluruh buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },

  // menampilkan detail buku
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },

  // mengubah data buku
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  // menghapus buku
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookbyIdHandler,
  },
];

module.exports = routes;

let openRequest = indexedDB.open("storage", 1);

openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('books')) { // si no hay un almacén de libros ("books"),
      db.createObjectStore('books', {keyPath: 'id'}); // crearlo
    }
  };
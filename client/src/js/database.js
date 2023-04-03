// Import the 'idb' package to use with IndexedDB.
import { openDB } from 'idb';

// Create a function that can be used to start up the database.
const initdb = async () =>
// Create a database named jate and we will use version 1.
  openDB('jate', 1, {
     // Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create an object store for our data inside of the 'jate'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database -OK
export const putDb = async (content) => {
  console.log('Post to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
  //console.error('putDb not implemented')
};

// TODO: Add logic for a method that gets all the content from the database -OK
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
  //console.error('getDb not implemented')
};

// Call our database function.
initdb();

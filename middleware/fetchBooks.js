import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseInit';

const useFetchBooks = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        const booksArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLibraryBooks(booksArray);
      } catch (error) {
        console.error('Error getting books: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { libraryBooks, loading};
};

export default useFetchBooks;

import { useSelector } from 'react-redux';
import BooksContainer from './booksContainer';
import AddNewForm from './addNewForm';

function Books() {
  const mylist = useSelector((state) => state.booksReducer);

  return (
    <div className="booksPageContainer">
      <BooksContainer list={mylist} />
      <AddNewForm />
    </div>
  );
}

export default Books;

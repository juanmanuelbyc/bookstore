import BooksContainer from "./booksContainer";
import AddNewForm from "./addNewForm";

const booksInfo = [
  {
    cathegory: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progressPercentage: '64%',
    currentChapter: 'Chapter 17',
  },
  {
    cathegory: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progressPercentage: '8%',
    currentChapter: 'Chapter 3',
  },
  {
    cathegory: 'Econnomy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progressPercentage: '0%',
    currentChapter: 'Introduction',
  },
];

function Books() {

const mylist = booksInfo;

  return (
    <div className="booksPageContainer">
      <BooksContainer list={mylist}/>
      <AddNewForm />
    </div>
  );
}

export default Books;

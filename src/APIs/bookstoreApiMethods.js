const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A5GDRQZvCG2V2d0kMrXe/books';

export const postBook = async (data) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const deleteBook = async (bookId) => {
  await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
  });
};

export const getBooksList = async () => {
  const response = await fetch(url).then((response) => response.json())
    .then((response) => Object.entries(response));
  return response;
};

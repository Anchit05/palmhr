import axios from "axios";
const apiUrl = "https://www.googleapis.com/books/v1/volumes";

export async function handleSearch(searchQuery: string, filterCriteria: string) {
  const apiKey = process.env.API_KEY;

  // Define the query parameters
  const params = {
    q: filterCriteria ? `${filterCriteria}:${searchQuery}`  : searchQuery,
    maxResults: 20,
    startIndex: 0,
    key: apiKey,
  };

	try {
    const response = await axios.get(apiUrl, { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getBookDetails(bookId: string | undefined) {
	let url = `${apiUrl}/${bookId}`

	try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

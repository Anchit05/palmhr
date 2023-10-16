import axios from "axios";

export async function handleSearch(searchQuery: string) {
  const apiKey = process.env.API_KEY;
  const apiUrl = "https://www.googleapis.com/books/v1/volumes";

  // Define the query parameters
  const params = {
    q: searchQuery,
    maxResults: 20,
    startIndex: 1,
    key: apiKey,
  };

	try {
    const response = await axios.get(apiUrl, { params });
    return response;
  } catch (error) {
    throw error;
  }
}

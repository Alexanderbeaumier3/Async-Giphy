require('dotenv').config();

async function getImages(query) {
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=p0zJJHBzuOoFS7jg4dqLzA2LqlQeZymk&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

try {
const response = await fetch(endpoint);
const data = await response.json();

const imageUrl = data.data.image.original.url;

console.log("Image URL:", imageUrl);

return imageUrl;

} catch (error) {
console.error("Error fetching image:", error);
return null;
}
}


// Print out value of API key stored in .env file
console.log(ap.env.API_KEY)
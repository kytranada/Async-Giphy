require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImages(query){
   const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&${query}&${Math.random()*25}&offset=0&rating=g&lang=en`
   const res = await fetch(endpoint)
   const data = await res.json()
   console.log(data)
   return data
}

getImages('dogs')

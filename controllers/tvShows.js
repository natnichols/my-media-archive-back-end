import { TvShow } from '../models/tvShow.js'
import { Profile } from '../models/profile.js'

const tmdbUrl = `https://api.themoviedb.org/3`

export async function search(req, res) {
  try {
    // console.log(`Mulder it's me`)
    console.log(`${tmdbUrl}/search/tv?query=${req.body.query}&include_adult=false&language=en-US?api_key=${process.env.TMDB_API_KEY}`)
    const config = {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(req.body.query)
    }
    const apiResponse = await fetch(`${tmdbUrl}/search/tv?query=${req.body.query}&include_adult=false&language=en-US?api_key=${process.env.TMDB_API_KEY}`, config)
    console.log(apiResponse)
    const apiData = await apiResponse.json()
    res.json(apiData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


//* https://api.themoviedb.org/3/search/tv?query=archer&include_adult=false&language=en-US?api_key=da963c06cd357e5d7efb870b363ed798 
//! https://api.themoviedb.org/3/search/tv?query=archer&include_adult=false&language=en-US?api_key=da963c06cd357e5d7efb870b363ed798


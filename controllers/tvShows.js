import { TvShow } from '../models/tvShow.js'
import { Profile } from '../models/profile.js'

const tmdbUrl = `https://api.themoviedb.org/3`

export async function search(req, res) {
  try {
    // console.log(`${tmdbUrl}/search/tv?query=${req.body.query}&include_adult=false&language=en-US?api_key=${process.env.TMDB_API_KEY}`)
    const config = {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
    }
    const apiResponse = await fetch(`${tmdbUrl}/search/tv?query=${req.body.query}&include_adult=false&language=en-US?api_key=${process.env.TMDB_API_KEY}`, config)
    // console.log(apiResponse)
    const apiData = await apiResponse.json()
    res.json(apiData.results)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


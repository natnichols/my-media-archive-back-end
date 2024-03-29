import { TvShow } from '../models/tvShow.js'

export async function search(req, res) {
  console.log(req.body)
  res.json([{tvShowTitle: 'TEST' }, {tvShowTitle: 'TEST2' }])
}

export {

}
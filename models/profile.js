import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  tvShowsToWatch: [{type: Schema.Types.ObjectId, ref: 'TvShow'}],
  tvShowsWatchingNow: [{type: Schema.Types.ObjectId, ref: 'TvShow'}],
  watchedTvShows: [{type: Schema.Types.ObjectId, ref: 'TvShow'}],
  faveTvShows: [{type: Schema.Types.ObjectId, ref: 'TvShow'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }

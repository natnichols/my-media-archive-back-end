import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tvEpisodeSchema = new Schema({
  addedBy: {type: Schema.Types.ObjectId, ref: 'Profile'},
  tmdbId: Number,
  title: String,
  // airDate: Date,
  // season: Number,
  // episodeNum: Number,
  // description: String,
  watchDate: Date,
  watched: Number,
})

const tvShowSchema = new Schema({
  addedBy: {type: Schema.Types.ObjectId, ref: 'Profile'},
  tmdbId: Number,
  title: String,
  // airDate: Date,
  // description: String,
  watched: Number,
  episodes: [tvEpisodeSchema],
}, {
  timestamps: true,
})

const TvShow = mongoose.model('TvShow', tvShowSchema)

export { TvShow }
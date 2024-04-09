import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as tvShowsCtrl from '../controllers/tvShows.js'

const router = Router()


// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
// GET to localhost:3001/api/tvShows
router
// GET to localhost:3001/api/tvShows/:tmdbId
router.get('/:tmdbId', checkAuth, tvShowsCtrl.show)
// POST to localhost:3001/api/tvShows
router.post('/', checkAuth, tvShowsCtrl.create)
// POST to localhost:3001/api/tvShows/search
router.post('/search', checkAuth, tvShowsCtrl.search)
// // POST to localhost:3001/api/tvShows/:tmdbId/tmdbTasks

// PUT to localhost:3001/api/tvShows/:tmdbId

// // PUT to localhost:3001/api/tvShows/:tmdbId/tmdbTasks/:tmdbTaskId

// DELETE to localhost:3001/api/tvShows/:tmdbId

// // DELETE to localhost:3001/api/tvShows/:tmdbId/tmdbTasks/:tmdbTaskId


export { router }
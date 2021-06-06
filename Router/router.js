const express = require('express');
const router = express.Router();
const movieController = require('../controller/controller');

router.get('/movie', movieController.MovieList)
router.post('/movie/add', movieController.addMovies)
router.delete('/movie/delete/:moviename', movieController.deleteMovieByName)
router.get('/director', movieController.Directorlist);
router.post('/director/add', movieController.addDirector)
router.get('/director/search/:director', movieController.searchMovies)
router.get('/director/:director', movieController.searchDirector)
router.post('/director/add/', movieController.addDirector)
router.patch('/director/age/:name', movieController.updateAge)

module.exports = router;
const Movie = require('../modal/movieModal');
const Director = require('../modal/directorSchema');
const newDirector = require('../modal/dirschema');

//Movies Display

exports.MovieList = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
};

//Director Display

exports.Directorlist = async (req, res) => {
  try {
    const director = await Director.find();
    res.send(director);
  } catch (err) {
    res.send(err);
  }
};

//Movies Add

exports.addMovies = async (req, res) => {
  try {
    const newMovie = await Movie.create({
      moviename: req.body.moviename,
      img: req.body.img,
      boxofficeCollection: req.body.boxofficeCollection,
      director: req.body.director,
      dirimg: req.body.dirimg,
      rating: req.body.rating,
    });

    res.json({
      data: {
        movie: newMovie,
      },
    });
    res.send(newMovie);
    res.status(200).json({
      message: 'Successful',
    });
  } catch (err) {
    res.send(err);
  }
};

//Director Add

exports.addDirector = async (req, res) => {
  try {
    const newDirector = await Director.create({
      name: req.body.name,
      age: req.body.age,
      dirimg: req.body.dirimg,
      gender: req.body.gender,
      awardCount: req.body.awardCount,
    });

    res.json({
      data: {
        movie: newDirector,
      },
    });

    res.send(newDirector);
    res.status(200).json({
      message: 'Successful',
    });
  } catch (err) {
    res.send(err);
  }
};

//New Director Add

exports.addNewMovies = async (req, res) => {
  try { 
    
    const result =  await newDirector.findOneAndUpdate({name  : req.body.name}, {
      $push: { movies:req.body }
    });
    
  }catch(err) {
    res.send(404).json({
      status: err.message
    })
  }
}

exports.deleteMovieByName = async (req, res) => {
  try {
    const movie = await Movie.deleteOne({
      moviename: req.params.moviename,
    });
    res.send(movie);
    res.status(200).json({
      message: 'Successful',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: 'InvalidNameException',
    });
  }
};

exports.searchDirector = async (req, res) => {
  try {
    var director = req.params.director;
    console.log('director ', director);
    const res1 = await Movie.find({ director });
    if (!res1) {
      return res.status(404).send('Book Not');
    } else {
      // res.json({
      //     data: {
      //         movie: res1
      //     }
      // })
      res.send(res1);
      res.status(200).json({
        message: 'Successful',
      });
    }
  } catch (err) {
    res.status(400).send('Bad Request');
    console.log(err);
  }
};

exports.updateAge = async (req, res) => {
  try {
    let _id = req.params._id;
    const dir = await Director.findByIdAndUpdate(_id,  req.body );
    res.status(200).json({
      status: 'Updated',
    });
    res.send(dir)
  } catch (err) {
    console.log(err);
    res.status(400).send('err');
  }
};

exports.searchMovies = async (req, res) => {
  try {
    let dir = req.params;
    const movie = await Movie.find({ director: dir });
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
};

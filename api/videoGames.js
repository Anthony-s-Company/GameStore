const express = require("express");
const router = express.Router();

const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../db/videoGames");

// GET - /api/video-games - get all video games
router.get("/", async (req, res, next) => {
  try {
    const videoGames = await getAllVideoGames();
    console.log(videoGames);
    res.send(videoGames);
  } catch (error) {
    next(error);
  }
});

// GET - /api/video-games/:id - get a single video game by id
router.get("/:id", async (req, res, next) => {
  const gameID = req.params;
  try {
    const videoGame = await getVideoGameById(gameID.id);
    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// POST - /api/video-games - create a new video game
router.post("/", async (req, res, next) => {
  try {
    const newVideo = await createVideoGame(req.body);
    res.send(newVideo);
  } catch (error) {
    next(error);
  }
});

// PUT - /api/video-games/:id - update a single video game by id
router.put("/:id", async (req, res, next) => {
  const gameID = req.params;
  try {
    const newVideo = await updateVideoGame(gameID.id, req.body);
    res.send(newVideo);
  } catch (error) {
    next(error);
  }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete("/:id", async (req, res, next) => {
  const gameID = req.params;
  try {
    const newVideo = await deleteVideoGame(gameID.id);
    res.send(newVideo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

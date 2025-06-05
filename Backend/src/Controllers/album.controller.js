import { Album } from "../Models/album.model.js";

export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();

    res.status(200).json({ message: "Album received successfully!" }, albums);
  } catch (error) {
    next(error);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const { albumId } = req.params;

    const album = await Album.findById(albumId).populate("songs");

    if (!album) res.status(404).json({ error: "Error receiving the album" });

    res.status(200).json({ message: "album received successfully!" }, album);
  } catch (error) {
    next(error);
  }
};

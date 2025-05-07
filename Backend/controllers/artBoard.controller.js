require('dotenv').config();

const ArtBoard = require('../schemas/artboard.schema');

const ID = process.env.ARTBOARD_ID;


// Get all URLs from an art board
exports.getUrls = async (req, res) => {
  try {
    const artBoard = await ArtBoard.findById(ID).select('urls');
    if (!artBoard) return res.status(404).json({ error: 'ArtBoard not found' });
    res.json(artBoard.urls);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching URLs' });
  }
};

// Add a new URL to the urls array
exports.addUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const artBoard = await ArtBoard.findById(ID);
    if (!artBoard) return res.status(404).json({ error: 'ArtBoard not found' });

    artBoard.urls.push(url); // Add the new URL
    await artBoard.save();

    res.status(201).json({ message: 'URL added', urls: artBoard.urls });
  } catch (err) {
    res.status(500).json({ error: 'Error adding URL' });
  }
};

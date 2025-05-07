// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/artBoard.controller');

// GET /projects/:id/urls — get URLs
router.get('/urls', projectController.getUrls);

// POST /projects/:id/urls — add URL
router.post('/urls', projectController.addUrl);


module.exports = router;

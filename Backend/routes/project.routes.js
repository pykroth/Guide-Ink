// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
import { createProject } from '../controllers/project.controller';

// Create a new project
router.post('/', createProject);


module.exports = router;

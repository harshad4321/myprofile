var express = require('express');
var router = express.Router();
// const data = require("../middleware/middleware.js")

const fs = require('fs')
var path = require('path');
const yaml = require('js-yaml');



// Read the YML file
const projects = path.join('views', 'data', 'projects.yml');
const skill = path.join('views', 'data', 'skills-frameworks.yml');
const languages = path.join('views', 'data', 'skills-languages.yml');
const tolls = path.join('views', 'data', 'skills-tools.yml');
const timeline = path.join('views', 'data', 'timeline.yml');
const data = path.join('_config.yml');


console.log(data);


// Read the YML data files
const projectsData = yaml.load(fs.readFileSync(projects, 'utf8'));
const skillsData = yaml.load(fs.readFileSync(skill, 'utf8'));
const language = yaml.load(fs.readFileSync(languages, 'utf8'));
const tollss = yaml.load(fs.readFileSync(tolls, 'utf8'));
const timelines = yaml.load(fs.readFileSync(timeline, 'utf8'));
const Data = yaml.load(fs.readFileSync(data, 'utf8'));



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'My-Profile',
    projects: projectsData,
    skills: skillsData,
    languages: language,
    tolls: tollss,
    timeline: timelines,
    Data: Data
  });
});

module.exports = router;

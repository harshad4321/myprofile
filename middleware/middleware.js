// const fs = require('fs')
// var path = require('path');
// const yaml = require('js-yaml');



// // Read the YML file
// const projects = path.join('views', 'data', 'projects.yml');
// const skill = path.join('views', 'data', 'skills-frameworks.yml');
// const languages = path.join('views', 'data', 'skills-languages.yml');
// const tolls = path.join('views', 'data', 'skills-tools.yml');
// const timeline = path.join('views', 'data', 'timeline.yml');


// // Define an array of YML file paths
// const ymlFiles = [
//     projects,
//     skill,
//     languages,
//     tolls,
//     timeline
// ];

// console.log(ymlFiles)

// // Loop through the files and parse each one
// let data = ((req, res, next) => {

//     ymlFiles.forEach((file) => {
//         try {
//             data[file] = yaml.load(fs.readFileSync(file, 'utf8'));
//         } catch (e) {
//             console.error(e);
//         }
//     });

// });

module.exports = data
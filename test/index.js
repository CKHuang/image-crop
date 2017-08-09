var crop = require('../index.js');
const path = require('path');


var filepath = path.resolve(__dirname,'rx72.jpg'),
    distpath = path.resolve(__dirname,'./');

    var st = Date.now();
crop(filepath,distpath,300,300,300,800)
    .then(function(distfilepath){
        console.log('-->distfilepath',distfilepath,'waste',Date.now()-st);
    }).catch(function(err){
        console.log('-->err',err);
    });


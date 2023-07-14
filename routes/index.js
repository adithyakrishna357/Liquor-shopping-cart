var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"JACK DANIELS",
    category:"Liquior",
    description:"Tennessee Whiskey",
    Image:"https://c4.wallpaperflare.com/wallpaper/553/302/403/alcohol-daniels-jack-wallpaper-preview.jpg"
  },
  {
    name:"JOHNY WALKIER",
    category:"Liquior",
    description:"Blended Scottish whiskey",
    Image:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/e83a2193848751.5e6f9a3143128.jpg"
  },
  {
    name:"JIM BEAM",
    category:"Liquior",
    description:"bourbon whiskey",
    Image:"https://media.istockphoto.com/id/496712188/photo/bottle-of-jim-beam-bourbon.jpg?s=612x612&w=0&k=20&c=_emeDaKnYucooM-UIlIunn13cqdVFPuMUBJGAMwtAoI="
  },
  {
    name:"ABSOLUT VODKA",
    category:"Liquior",
    description:"Swedish vodka",
    Image:"https://cdn.wallpapersafari.com/29/12/SCVKUO.jpg"
  },
]
  res.render('index', {  products });
});

module.exports = router;

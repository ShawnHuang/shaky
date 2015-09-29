module.exports = function (){
    var Canvas = require('canvas');
      , Image = Canvas.Image
      , canvas = new Canvas(200, 200)
      , ctx = canvas.getContext('2d');
     
    ctx.font = '30px Impact';
    ctx.rotate(.1);
    ctx.fillText("Awesome!", 50, 100);
     
    var te = ctx.measureText('Awesome!');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + te.width, 102);
    ctx.stroke();

    var fs = require('fs')
      , out = fs.createWriteStream(__dirname + '/text.png')
      , stream = canvas.pngStream();
 
    stream.on('data', function(chunk){
      out.write(chunk);
    });
 
    stream.on('end', function(){
      console.log('saved png');
    });
}

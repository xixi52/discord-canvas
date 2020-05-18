const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register Burbank font
Canvas.registerFont(`${__dirname}/assets/fonts/Burbank-Big-Condensed-Bold-Font.otf`, { family: "Burbank" });

module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.FortniteShop = require('./src/fortnite/Shop');

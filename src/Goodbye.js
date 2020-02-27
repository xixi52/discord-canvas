const Canvas = require("canvas"),
  f = require("../utils/functions");
Canvas.registerFont(
  `${__dirname}/../assets/fonts/theboldfont.ttf`,
  {
    family: "Bold"
  }
);
Canvas.registerFont(
  `${__dirname}/../assets/fonts/SketchMatch.ttf`,
  {
    family: "SketchMatch"
  }
);
const applyText = (canvas, text, defaultFontSize) => {
  const ctx = canvas.getContext("2d");
  do {
    ctx.font = `${(defaultFontSize -= 10)}px Bold`;
  } while (ctx.measureText(text).width > 600);
  return ctx.font;
};

class Goodbye {
  constructor() {
    this.textTitle = "goodbye";
    this.colorTitle = "#df0909";
    this.colorTitleBorder = "#000000";
    this.avatar =
    `${__dirname}/../assets/img/default-avatar.png`;
    this.colorAvatar = "#df0909";
    this.username = "username";
    this.colorUsername = "#ffffff";
    this.colorUsernameBox = "#000000";
    this.opacityUsernameBox = "0.4";
    this.colorAshtag = "#ffffff";
    this.discriminator = "XXXX";
    this.colorDiscriminator = "#ffffff";
    this.opacityDiscriminatorBox = "0.4";
    this.colorDiscriminatorBox = "#000000";
    this.textMessage = "Leaving from {server}";
    this.server = "server";
    this.colorMessage = "#ffffff";
    this.opacityMessageBox = "0.4";
    this.colorMessageBox = "#000000";
    this.colorNumber = "#ffffff";
    this.number = "0";
    this.textNumber = "- {number}th member !";
    this.colorBackground = "#303136";
    this.backgroundIMG = `${__dirname}/../assets/img/1px.png`;
    this.opacityBorder = "0.4";
    this.colorBorder = "#000000";
  }

  setAvatar(value) {
    this.avatar = value;
    return this;
  }

  setDiscriminator(value) {
    this.discriminator = value;
    return this;
  }

  setUsername(value) {
    this.username = value;
    return this;
  }

  setServer(value) {
    this.server = value;
    return this;
  }

  setNumber(value) {
    this.number = value;
    return this;
  }

  setBackground(value) {
    this.backgroundIMG = value;
    return this;
  }

  setColor(variable, value) {
    const formattedVariable = f.formatVariable("color", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }
  
  setText(variable, value) {
    const formattedVariable = f.formatVariable("text", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  setOpacity(variable, value) {
    const formattedVariable = f.formatVariable("opacity", variable);
    if (this[formattedVariable]) this[formattedVariable] = value;
    return this;
  }

  async toAttachment() {

    let canvas = Canvas.createCanvas(1024, 450),
      ctx = canvas.getContext("2d"),
      text = this.textMessage.replace(/{server}/g, this.server),
      number = this.textNumber.replace(/{number}/g, this.number),
      title = this.textTitle.toUpperCase();

    // Background
    ctx.fillStyle = this.colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let background = await Canvas.loadImage(this.backgroundIMG);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Layer
    ctx.fillStyle = this.colorBorder;
    ctx.globalAlpha = this.opacityBorder;
    ctx.fillRect(0, 0, 25, canvas.height);
    ctx.fillRect(canvas.width - 25, 0, 25, canvas.height);
    ctx.fillRect(25, 0, canvas.width - 50, 25);
    ctx.fillRect(25, canvas.height - 25, canvas.width - 50, 25);
    ctx.fillStyle = this.colorUsernameBox;
    ctx.globalAlpha = this.opacityUsernameBox;
    ctx.fillRect(344, canvas.height - 296, 625, 65);
    ctx.fillStyle = this.colorDiscriminatorBox;
    ctx.globalAlpha = this.opacityDiscriminatorBox;
    ctx.fillRect(389, canvas.height - 225, 138, 65);
    ctx.fillStyle = this.colorMessageBox;
    ctx.globalAlpha = this.opacityMessageBox;
    ctx.fillRect(308, canvas.height - 110, 672, 65);

    // Draw username
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.colorUsername;
    ctx.font = applyText(canvas, this.username, 48);
    ctx.fillText(this.username, canvas.width - 660, canvas.height - 248);

    // Draw server name
    ctx.fillStyle = this.colorMessage;
    ctx.font = applyText(canvas, text, 53);
    ctx.fillText(text, canvas.width - 690, canvas.height - 62);

    // Draw discriminator
    ctx.fillStyle = this.colorDiscriminator;
    ctx.font = "40px Bold";
    ctx.fillText(this.discriminator, canvas.width - 623, canvas.height - 178);

    // Draw number
    ctx.fillStyle = this.colorNumber;
    ctx.font = "22px Bold";
    ctx.fillText(number, 40, canvas.height - 35);

    // Draw # for discriminator
    ctx.fillStyle = this.colorAshtag;
    ctx.font = "75px SketchMatch";
    ctx.fillText("#", canvas.width - 690, canvas.height - 165);

    // Draw Title
    ctx.font = "90px Bold";
    ctx.strokeStyle = this.colorTitleBorder;
    ctx.lineWidth = 15;
    ctx.strokeText(title, canvas.width - 620, canvas.height - 330);
    ctx.fillStyle = this.colorTitle;
    ctx.fillText(title, canvas.width - 620, canvas.height - 330);

    // Avatar circle
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.colorAvatar;
    ctx.arc(180, 225, 135, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    let avatar = await Canvas.loadImage(this.avatar);
    ctx.drawImage(avatar, 45, 90, 270, 270);

    return canvas;
  }
}

module.exports = Goodbye;

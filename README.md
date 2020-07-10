# discord-canvas

[![downloadsBadge](https://img.shields.io/npm/dt/discord-canvas?style=for-the-badge)](https://npmjs.com/discord-canvas)
[![versionBadge](https://img.shields.io/npm/v/discord-canvas?style=for-the-badge)](https://npmjs.com/discord-canvas)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://www.discord-canvas.net)

## Easy to use !!

You want to develop a discord bot using the Discord.js library and you want to integrate nice images in Canvas? discord-canvas is made for you! You can create great welcome images, goodbye images and other fun images fully customizable using the many easy-to-use features!

## Installation

```bash
$ npm install --save discord-canvas
```

## [Click here to see the documentation!](https://www.discord-canvas.net)

## Example GoodBye

```js
const Canvas = require("discord-canvas"),
  Discord = require("discord.js");

const image = await new Canvas.Goodbye()
  .setUsername("xixi52")
  .setDiscriminator("0001")
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://www.site.com/avatar.jpg")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://site.com/background.jpg")
  .toAttachment();

const attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/gh6Yp00.png" height="250"></img>

## Example Fortnite Shop

```js
const Canvas = require("discord-canvas"),
  Discord = require("discord.js");

const image = await shop
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .toAttachment();

let attachment = new Discord.Attachment(image, "FortniteShop.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/3qO81V8.jpg" height="600"></img>

## Example Fortnite Stats

```js
const canvas = require("discord-canvas"),
  stats = new canvas.FortniteStats();
  
const user = "CBRG xixi52 YT",
  platform = "pc";
  
let image = await stats
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .setUser(user)
  .setPlatform(platform)
  .toAttachment();

if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Please enter a valid platform")
if (!image) return message.channel.send("User not found")

let attachment = new Discord.Attachment(image.toBuffer(), "FortniteStats.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/xqnabX5.png" height="450"></img>

## Contributing

If you have a request for a new feature you can open an issue on Github. Pull requests are appreciated!

## Credits

Made by [xixi52](https://github.com/xixi52) with ❤️  
Thanks to [Androz2091](https://github.com/Androz2091) for his help !

---
description: Make a unique image that matches you!&
---

# Welcome

## Example

Here is an example of customisation possibilities:

![It&apos;s an example](../.gitbook/assets/welcome-image-2.png)

```javascript
const canvas = require("discord-canvas");

let image = await welcomeCanvas
  .setUsername("xixi52")
  .setDiscriminator("0001")
  .setNumber("140")
  .setServer("Server DEV")
  .setAvatar("https://cdn.craftburg.net/stockage/img/discord/avatar.jpg")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://cdn.craftburg.net/stockage/img/discord/background.jpg")
  .toAttachment();

let attachment = new Discord.Attachment(image.toBuffer(), "welcome-image.png");

message.channel.send(attachment);

```

{% hint style="success" %}
 You can of course enter your variables.

```javascript
.setUsername("xixi52")
```

You can use for example:

```javascript
.setUsername(message.author.username)
```
{% endhint %}

## Functions

Here is the complete list of available functions

### `.setUsername`

Displays the Discord username

```javascript
.setUsername(variable1)
```


---
description: Make a unique image that matches you!
---

# Goodbye

## Example

Here is an example of customisation possibilities:

![It&apos;s an example](../.gitbook/assets/welcome-image-3.png)

```javascript
const canvas = require("discord-canvas"),
  goodbyeCanvas = new canvas.Goodbye();

let image = await goodbyeCanvas
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
  
let attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");

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
.setUsername(variable)
```

### `.setDiscriminator`

Displays the Discord user discriminator

```javascript
.setDiscriminator(variable)
```

### `.setAvatar`

Displays the Discord user avatar, you need use an URL

```javascript
.setDiscriminator(URL)
```

### `.setNumber`

Discplays the number of users in guild

```javascript
.setDiscriminator(variable)
```

### `.setBackground` _\(optional\)_

Displays a background, you need use an URL

```javascript
.setBackground(URL)
```

### `.setText` _\(optional\)_

You can translate or modify the text

{% hint style="warning" %}
You must keep the {server} and {number} variables
{% endhint %}

```javascript
.setText("title", "goodbye")
.setText("message", "leaving from {server}")
.setText("number", "- {number}th")
```

### `.setColor` _\(optional\)_

You can modify the color of any part of the card

```javascript
.setColor("title", "#ffffff") // GOODBYE
.setColor("title-border", "#ffffff") // GOODBYE BORDER
.setColor("avatar", "#ffffff") // CIRCLE
.setColor("username", "#ffffff") // USER
.setColor("username-box", "#ffffff") // USER BACKGROUND
.setColor("ashtag", "#ffffff") // # COLOR
.setColor("discriminator", "#ffffff") // USER DISCRIMINATOR
.setColor("discriminator-box", "#ffffff") // DISCRIMINATOR BACKGROUND
.setColor("message", "#ffffff") // GOODBYE MESSAGE
.setColor("message-box", "#ffffff") // GOODBYE MESSAGE BACKGROUND
.setColor("number", "#ffffff") // NUMBER MESSAGE
.setColor("background", "#ffffff") // BACKGROUND COLOR
.setColor("border", "#ffffff") // BORDER COLOR
```

### `.setOpacity` _\(optional\)_

You can modify the opacity of blocks, you must enter a number between 0 and 1.

You can delete a block with opacity 0 

```javascript
.setOpacity("username-box", 0.4)
.setOpacity("discriminator-box", 0.4)
.setOpacity("message-box", 0.4)
.setOpacity("border", 1)
```


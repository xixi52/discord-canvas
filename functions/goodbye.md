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
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://www.site.com/avatar.jpg")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://www.site.com/background.jpg")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye-image.png");

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
.setAvatar(URL)
```

### `.setGuildName`

Discplays the name of the guild

```javascript
.setGuildName(variable)
```

### `.setMemberCount`

Discplays the number of users in guild

```javascript
.setMemberCount(variable)
```

### `.setBackground` _\(optional\)_

Displays a background, you need use an URL

```javascript
.setBackground(URL)
```

### `.setText` _\(optional\)_

You can translate or modify the text

{% hint style="warning" %}
You must keep the {server} and {count} variables
{% endhint %}

```javascript
.setText("title", "goodbye")
.setText("message", "leaving from {server}")
.setText("member-count", "- {count}th member")
```

### `.setColor` _\(optional\)_

You can modify the color of any part of the card

```javascript
.setColor("title", "#ffffff") // GOODBYE
.setColor("title-border", "#ffffff") // GOODBYE BORDER
.setColor("avatar", "#ffffff") // CIRCLE
.setColor("username", "#ffffff") // USER
.setColor("username-box", "#ffffff") // USER BACKGROUND
.setColor("hashtag", "#ffffff") // # COLOR
.setColor("discriminator", "#ffffff") // USER DISCRIMINATOR
.setColor("discriminator-box", "#ffffff") // DISCRIMINATOR BACKGROUND
.setColor("message", "#ffffff") // GOODBYE MESSAGE
.setColor("message-box", "#ffffff") // GOODBYE MESSAGE BACKGROUND
.setColor("member-count", "#ffffff") // MEMBERCOUNT MESSAGE
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


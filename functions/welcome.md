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

```javascript
.setText("title", "welcome")
.setText("message", "welcome in {server}")
.setText("number", "- {number}th")
```

### `.setColor` _\(optional\)_

You can modify the color of any part of the card

```javascript

```


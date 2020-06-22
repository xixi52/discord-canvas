---
description: Generate a Fortnite's stats image easily!
---

# FortniteStats

## Example

Here is an example of Fortnite's stats:

![It&apos;s an example](../.gitbook/assets/stat.png)

```javascript
const canvas = require("discord-canvas"),
  stat = new canvas.FortniteStats();
  
const user = "CBRG xixi52 YT",
  platform = "pc";
  
let image = await stat
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .setUser(user)
  .setPlatform(platform)
  .toAttachment();

if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Please enter a valid platform")
if (!image) return message.channel.send("User not found")

let attachment = new Discord.Attachment(image.toBuffer(), "FortniteStats.png");

message.channel.send(attachment);
```

## Functions

There is the complete list of available functions

### `.setToken`

Define your [fortnitetracker.com](https://fortnitetracker.com/site-api) token!

{% hint style="danger" %}
 You must have a fortnitetracker api access to use this module! 
{% endhint %}

```javascript
.setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
```

### `.setUser`

It's the epicgame username!

```javascript
.setuser("CBRG xixi52 YT")
```

### `.setPlatform`

Define the platform of the user \(pc, psn or xbl\)

```javascript
.setPlatform("pc")
```

### `.setText` _\(optional\)_

You can translate or modify the text

```javascript
.setText("averageKills", "KILLS/MATCH")
.setText("averageKill", "KILL/MATCH")
.setText("wPercent", "W%")
.setText("winPercent", "WIN%")
.setText("kD", "K/D")
.setText("wins", "WINS")
.setText("win", "WIN")
.setText("kils", "KILLS")
.setText("kill", "KILL")
.setText("matches", "MATCHES")
.setText("match", "MATCH")
.setText("footer", "Generated with discord-canvas - fortnitetracker.com")
```


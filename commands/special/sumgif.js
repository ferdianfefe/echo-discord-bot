const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const { color } = require("../../config.json");

module.exports = {
  name: "sumgif",
  description: "Sends a sus neko image",
  execute(msg) {
    const neko = new client();
    neko.nsfw.randomHentaiGif().then((neko) => {
      const embed = new MessageEmbed()
        .setTitle("Neko")
        .setImage(neko.url)
        .setColor(color);
      msg.channel.send({ embeds: [embed] });
    });
  },
};

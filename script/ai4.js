const axios = require('axios');
module.exports.config = {
  name: 'ai4',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Votre requête est comme un ordre de mon maître At......us`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(` Veuillez "${input} \npatientez ....💁"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-api.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(🅐︎🅣︎🅗︎_🅑︎🅞︎🅣︎😉 \n response + '\n\nhttps://www.facebook.com/profile.php?id=100090780957801\n', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('Erreur au niveau du recherches de ta question 🤧.', event.threadID, event.messageID);
  }
};

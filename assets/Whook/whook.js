function deleteWebhook() {
  const webhookUrl = document.getElementById("webhook-input").value;

  const webhookMessage = {
    username: "appolon.dev/webhook",
    avatar_url: "https://cdn.discordapp.com/attachments/1118656570042105887/1143474423345721465/icon.ico",
    embeds: [
      {
        type: "rich",
        title: "Hi from Appolon.dev",
        description: "Nice webhook ngl",
        color: 0x025858,
        image: {
          url: "https://cdn.discordapp.com/attachments/1118656570042105887/1143474423345721465/icon.ico",
          height: 0,
          width: 0
        },
        footer: {
          text: "Appolon.dev  |  sex.shop",
          icon_url: "https://cdn.discordapp.com/attachments/1118656570042105887/1143474423345721465/icon.ico"
        },
        url: "https://Appolon.dev",
        fields: [
          {
            name: "Appolon > you",
            value: "<a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935> <a:catdance:1022393582650404935>",
            inline: false
          }
        ]
      }
    ]
  };


  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(webhookMessage)

  })

  fetch(webhookUrl, {
    method: 'DELETE',
  })

  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    console.log('Success');
  })
  .catch(error => {
    console.error('Error', error);
  });
}

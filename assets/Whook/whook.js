function deleteWebhook() {
  // Replace the following variable with your own webhook URL
  const webhookUrl = document.getElementById("webhook-input").value;

  // Define the webhook message
  const webhookMessage = {
    username: "WebhookDeleter9000.appolon.dev",
    avatar_url: "https://cdn.discordapp.com/attachments/1063194194279145512/1084183202811355177/favicon.png",
    embeds: [
      {
        type: "rich",
        title: "Hi from Appolon.dev",
        description: "Nice webhook kid",
        color: 0x025858,
        image: {
          url: "https://cdn.discordapp.com/attachments/1063194194279145512/1086349400093241444/images.jpg",
          height: 0,
          width: 0
        },
        footer: {
          text: "Appolon.dev  |  Appolon#2523",
          icon_url: "https://cdn.discordapp.com/attachments/1063194194279145512/1084183202811355177/favicon.png"
        },
        url: "https://Appolon.dev",
        fields: [
          {
            name: "Appolon on top",
            value: "<a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935><a:catdance:1022393582650404935>",
            inline: false
          }
        ]
      }
    ]
  };



  // Send the webhook message using fetch
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
      throw new Error(`HTTP error ${response.status}`);
    }
    console.log('Webhook message sent successfully');
  })
  .catch(error => {
    console.error('Error sending webhook message:', error);
  });
}

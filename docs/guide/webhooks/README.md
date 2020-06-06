# Webhooks

Webhooks are a way to get messages/notifications through discord, about any changes made to a board. 

FIrst of all, [make sure that you Trello account has been connected](/guide/#authentication). In order to create a webhook, you must either have a role with the name `Trello`, or have administrator privileges.

To start creating a webhook, you can use the `T!addwebhook` command and select a board you want updates in. After you have selected a board, you can choose which webhook you want to use to send updates to or create one from scratch.

<MarkdownImage
  src="/images/addwebhook_example2.jpg"
  original="/images/addwebhook_example2_original.png" />

After selecting or creating a Discord webhook, you should get a confirmation message via the new webhook. After this, any new updates to your boards will be shown.

<MarkdownImage
  src="/images/addwebhook_example.jpg"
  original="/images/addwebhook_example_original.png" />

*For more information, head to the [Webhook Commands](/guide/commands/webhooks/) section where these commands are explained in greater detail.*
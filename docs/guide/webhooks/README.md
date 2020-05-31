# Webhooks

Webhooks are a way to get messages/notifications through discord, about any changes made to a board you have authorised on the bot (See [Authentication Page](/guide/auth/)). 

To get started, go to the settings for the channel you want to receive the messages in (click on the little gear icon next to the name), go to webhooks, then create a new webhook. 
At this point, feel free to update the name & profile picture of the webhook, then copy the webhook URL. 

You should also get your board ID for the board you would like to receive messages about: 

`https://trello.com/b/<board-id>/<board-name>`

Extract your board ID as shown below and then run 

`T!addwebhook <board-id> <webhook-url>`

You should now receive a confirmation message to show your webhook is set up. 

If you’d like to edit what updates you receive from your new webhook, you can use 

`T!editwebhook <board-id> <webhookbits|all>`

You can find a list of webhook bits with `T!webbits`, you can list as many or few as you want, and if you want to revert it to all events, put “all” in replace of them when running the command.

If you want to remove the webhook, just type `T!remwebhook <board-id>`.


For more information, head to the [Webhooks Command](/commands/webhooks/) section where these commands are explained in greater detail.

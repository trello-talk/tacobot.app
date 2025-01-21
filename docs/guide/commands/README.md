---
aliases:
- /commands/
- /cmds/
---

# Taco Bot Command List

## General
| Command     | Description |
| ----------- | ----------- |
| **`/auth`** | Get the [authentication link](/auth) to connect your Discord account to your Trello account. |
| **`/bot info`** | Get information about the bot. |
| **`/bot donate`** | Get the donation links ([Patreon](/patreon), [Ko-fi](/kofi)) for the developer. |
| **`/bot github`** | Sends the bot's [open source link](/source). |
| **`/bot invite`** | Sends the bot [invite link](/bot). |
| **`/bot support`** | Get the invite for the [support server](/support). |
| **`/user-settings locale`** *`["userset"|"serverset"] [locale]`* | Lets you set the locale for you or the server. Run with no arguments for a list of locales. |

## User Management
| Command     | Description |
| ----------- | ----------- |
| **`/me`** | View information about your Trello account. |
| **`/switch`** *`[boardID|boardName]`* | Selects a board to use for other commands. Use the `/boards` command to see what boards you can select. |
| **`/star`** *`[boardName|boardID]`* | Toggles starring a board. If no board is defined, the current board is used. Starred boards will show up at the top of your boards list on [Trello](https://trello.com/). |
| **`/watch-board`** *`[boardName|boardID]`* | Toggle watching a board. If no board is defined, the current board is used. Watched boards will give you update notifications on [Trello](https://trello.com/). |
| **`/watch-card`** *`[cardName|cardID]`* | Toggle watching a card. Watched cards will give you update notifications on [Trello](https://trello.com/). |
| **`/watch-list`** *`[listName|listID]`* | Toggle watching a list. Watched lists will give you update notifications on [Trello](https://trello.com/). |
| **`/clear-auth`** | Clears your Trello authorization. Do not run this unless you really need to. |
| **`/clear-data`** | Removes your user data from Taco. |

## Webhooks
| Command     | Description |
| ----------- | ----------- |
| **`/webhook add`** *`[boardID|boardName]`* | Creates a webhook on your server. |
| **`/webhook set <active|name|locale|filter_policy|style|filters|cards|lists|thread>`** *`<webhookID>`* | Edits a webhook's settings. |
| **`/webhook delete`** *`<webhookID>`* | Removes a webhook from your server. |
| **`/webhook view`** *`<webhookID>`* | Get information about a specific webhook. |
| **`/webhook list`** | Lists the webhooks on your server. |
| **`/webhook repair`** *`<webhookID>`* | Repairs a webhook on your server. |

## Viewing
| Command     | Description |
| ----------- | ----------- |
| **`/board`** | Gets information on the current board. |
| **`/boards`** | Lists all of the boards you can manage. |
| **`/card`** *`[cardName|cardID]`* | Gets information about a specific card. |
| **`/cards`** | Lists all the cards in the current board. You can see the card archive using the `filter` option |
| **`/attachments`** *`[cardName|cardID]`* | View a card's attachments. |
| **`/list`** *`[listName|listID]`* | Lists all cards in that list. |
| **`/lists`** | Lists all of the open lists on the current board. You can see the list archive using the `filter` option. |
| **`/label`** *`[labelName|labelID]`* | View cards that are assigned a given label. |
| **`/labels`** | Lists all of the labels on the current board. |


## Editing
| Command     | Description |
| ----------- | ----------- |
| **`/add-card`** *`[listName|listID] [name]`* | Creates a card. |
| **`/add-label`** *`[name]`* | Creates a label on the current board. |
| **`/add-list`** *`[name]`* | Creates a list on the current board. |
| **`/comment`** *`[cardName|cardID] [comment]`* | Comment on a card in the current board. |
| **`/delete-label`** *`[labelName|labelID]`* | Deletes a label. |
| **`/delete-card`** *`[cardName|cardID]`* | Deletes a card. |
| **`/edit-board`** | Edit the current board's properties. |
| **`/edit-card <attributes|move|labels|members>`** *`[cardName|cardID]`* | Edit a card's properties. |
| **`/edit-label`** *`[labelName|labelID] [subcommand] …`* | Edit a label's properties.  |
| **`/edit-list`** *`[listName|listID] [subcommand] …`* | Edit a list's properties. |
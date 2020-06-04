---
aliases:
- /commands/
- /cmds/
---

# Taco Bot Command List

## General
| Command     | Description |
| ----------- | ----------- |
| **`help`** *`[command]`* | Shows the help message and gives information on commands. |
| **`info`** | Get information about the bot. |
| **`auth`** | Get the [authentication link](/auth/) to connect your Discord account to your Trello account. |
| **`donate`** | Get the donation links ([Patreon](/patreon/), [Ko-fi](/kofi/)) for the developer. |
| **`github`** | Sends the bot's [open source link](/source/). |
| **`invite`** | Sends the bot [invite link](/bot/). |
| **`serverinvite`** | Get the invite for the [support server](/support/). |
| **`locale`** *`["userset"|"serverset"] [locale]`* | Lets you set the locale for you or the server. Run with no arguments for a list of locales. |
| **`ping`** | Pong! (Get the response time of the bot) |
| **`prefix`** *`["set"|"add"|"remove"] [prefix]`* | Lets you set the prefixes for you or the server. |
| **`shardinfo`** | Gives the stats for every shard. |

## User Management
| Command     | Description |
| ----------- | ----------- |
| **`me`** | View information about your Trello account. |
| **`switch`** *`[boardID|boardName]`* | Selects a board to use for other commands. Use the `T!boards` command to see what boards you can select. |
| **`star`** *`[boardName|boardID]`* | Toggles starring a board. If no board is defined, the current board is used. Starred boards will show up at the top of your boards list on [Trello](https://trello.com/). |
| **`watch`** *`[boardName|boardID]`* | Toggle watching a board. If no board is defined, the current board is used. Watched boards will give you update notifications on [Trello](https://trello.com/). |
| **`watchcard`** *`[cardName|cardID]`* | Toggle watching a card. Watched cards will give you update notifications on [Trello](https://trello.com/). |
| **`watchlist`** *`[listName|listID]`* | Toggle watching a list. Watched lists will give you update notifications on [Trello](https://trello.com/). |
| **`clearauth`** | Clears your Trello authorization. Do not run this unless you really need to. |
| **`cleardata`** | Removes your user data from Taco. |

## Webhooks
| Command     | Description |
| ----------- | ----------- |
| **`addwebhook`** *`[boardID|boardName]`* | Creates a webhook on your server. |
| **`editwebhook`** *`<webhookID> [subcommand]`* | Edits a webhook on your server. |
| **`remwebhook`** *`<webhookID>`* | Removes a webhook from your server. |
| **`webhook`** *`<webhookID>`* | Get information about a specific webhook. |
| **`webhooks`** *`[page]`* | Lists the webhooks on your server. |

## Viewing
| Command     | Description |
| ----------- | ----------- |
| **`board`** | Gets information on the current board. |
| **`boards`** *`[page]`* | Lists all of the boards you can manage. |
| **`card`** *`[cardName|cardID]`* | Gets information about a specific card. |
| **`cardarchive`** *`[page]`* | Lists all the archived cards in the current board. |
| **`list`** *`[listName|listID] [page]`* | Lists all cards in that list. |
| **`listarchive`** *`[page]`* | Lists all the archived lists in the current board. |
| **`lists`** *`[page]`* | Lists all of the open lists on the current board. You can see the list archive with `T!listarchive`. |


## Editing
| Command     | Description |
| ----------- | ----------- |
| **`addcard`** *`[listName|listID] [name]`* | Creates a card. |
| **`addlist`** *`[name]`* | Creates a list on the current board. |
| **`comment`** *`[cardName|cardID] [comment]`* | Comment on a card in the current board. |
| **`deletecard`** *`[cardName|cardID]`* | Deletes a card. |
| **`editboard`** *`[subcommand] …`* | Edit the current board's properties. |
| **`editcard`** *`[cardName|cardID] [subcommand] …`* | Edit a card's properties. |
| **`editlist`** *`[listName|listID] [subcommand] …`* | Edit a list's properties. |
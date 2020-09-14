---
sitemap:
  changefreq: daily
  priority: 0.8
---

# Introduction

::: tip QUICKLINKS
You can invite Taco using the [invite link](/bot).  
You can link your Trello account to your Discord account by going [here](/auth).  
If you have any questions or suggestions, make sure to join the [support server](/support).
:::

Taco is a Discord bot that connects your Trello account to your Discord account. From there, you can edit boards and cards directly from Discord and make actions on your board appear in a Discord channel live using webhooks.

## Getting Started

Before you can use Taco, you will need to [invite him](/bot) to your Discord server. Make sure you use commands in a channel that Taco can both **read** and **send** messages from.

In order to have the best user experience, Taco should have the following permissions:
- `Manage Webhooks`
- `Embed Links`
- `Manage Messages`
- `Add Reactions`

You can see the available commands you can use by typing `T!help` or going to the [commands list](/commands) on the website.

## The Trello Role (optional)

Certain commands such as the Webhook related commands are role limited. To restrict who can use these commands, the bot looks for a Trello role on a server or for a user with Administrator permissions. If a user doesn't have that role, they will be unable to run those commands. 
The role needs no permissions, so long as it has the name "Trello".


## Authentication
::: warning
Before authenticating, make sure that you use the right account to link to your Trello account. You must login to the [Discord website](https://discord.com) *(in `discord.com`, **not in PTB/Canary**)* and use the same account you intend to use Taco with.
:::
In order to interact with your Trello boards, you will need to authenticate with your Trello account. You can do so by going [here](/auth). The process takes less than a minute only needs two clicks. To verify that you have the right account and that you are authorized, you can use the `T!me` command.

::: tip
If you want to unlink your account, you can use the `T!clearauth` command in any channel.
:::


After this step, you can select a board with `T!switch` and you should be free to do any actions within the bot.

::: tip USECASE
The most common use for this bot is setting up webhooks to send Trello updates to a channel in Discord. To read how to quickly set this up, click the Webhooks link below, or click the Webhooks link under Getting Started on the sidebar.
:::

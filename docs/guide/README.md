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

You can see the available commands you can use by typing `/help` or going to the [commands list](/commands) on the website.

## Management Roles (optional)

Certain commands such as the Webhook related commands are role limited. To restrict who can use these commands, there are management roles that can be assigned by people with the `Manage Server` permission on the server. To set a role that can set webnhooks, run the `/server-settings role` command.

## User App Commands
You can now access your Trello boards from anywhere in Discord! You can [add Taco to your account](https://discord.com/oauth2/authorize?client_id=620126394390675466&integration_type=1&scope=applications.commands). This way, you can view boards and cards in any channel.

## Authentication
::: warning
Before authenticating, make sure that you use the right account to link to your Trello account. You must login to the [Discord website](https://discord.com) *(in `discord.com`, **not in PTB/Canary**)* and use the same account you intend to use Taco with.
:::
In order to interact with your Trello boards, you will need to authenticate with your Trello account. You can do so by going [here](/auth). The process takes less than a minute only needs two clicks. To verify that you have the right account and that you are authorized, you can use the `/me` command.

::: tip
If you want to unlink your account, you can use the `/clear-auth` command in any channel.
:::


After this step, you can select a board with `/switch` and you should be free to do any actions within the bot.

::: tip USECASE
The most common use for this bot is setting up webhooks to send Trello updates to a channel in Discord. To read how to quickly set this up, click the Webhooks link below, or click the Webhooks link under Getting Started on the sidebar.
:::

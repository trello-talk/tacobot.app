---
aliases:
- /privacy/
---

# Privacy Policy

By using [Taco](/) and its services, you agree to the following privacy policy, which applies to all versions of the Taco application and it's services. If you have any questions regarding policy, feel free to [contact us](/contact). **We reserve the right to change this without notifying our users.**

## When will data be stored?

Taco only stores data when a command that alters settings is ran (e.g. prefix, locale) or when you have authenticated your Trello account with your Discord account.

In the off-chance that a user has been caught abusing these services, their Discord user ID will be stored.

## What data is stored?

Taco stores the following for users:
- Discord user IDs
- Discord refresh/access tokens **(This is NOT the same as your regular Discord token.)**
- Trello user IDs
- Trello access tokens

Taco stores the following for servers:
- Discord server IDs

Taco stores the following for webhook objects:
- Discord server IDs
- Trello user IDs
- Discord webhook IDs and tokens
- Trello board IDs

Taco also **caches** message information in order to create interactable prompts and cooldowns.

Statistics (such as command usage) is anonymized and stored in a database only viewable to developers of Taco. This is to ensure the quality is up to standard.

## Why is this data stored?

Most of this data is required for Taco to function regularly. (such as user IDs and access tokens)
- User IDs are used to pair configrations (locales, prefixes, webhooks) to the respective user.
- Server IDs are used to pair locales and prefixes to the server to be used as a default prefix/locale.

## How long is this data stored for?

Stored data is stored indefinitely until requested for removal.  
Cooldown data (stores user IDs) gets stored until next reboot.  
Prompt data (caches user IDs, message IDs and channel IDs) is stored until the associated prompt has ended.

## Who gets to see this data?

Certain user data (user IDs, trello boards, etc.) will only be shown if the user themselves runs the command that shows such information. The exception is with webhooks, where server admins of the associated Discord guild can view the user who created the webhook, the Trello board's ID and the Discord webhook information.

## What data is shared with Trello?

Data shared with Trello includes request made on behalf of Discord users (e.g. creating cards, permissions to edit) and information such as various IDs that is paired with the request to do actions within Trello. (e.g. card creations will use board IDs and list IDs, etc.)

## How can I have my data removed?
You can remove your user data anywhere from Taco with the `/clear-data` command. If you want to remove a server's data from the database, you can [contact](/contact) for removal.

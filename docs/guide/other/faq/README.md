---
aliases:
- /faq/
scriptTypes:
  faq:
    - type: application/ld+json
    -
      - 
        - How do I self-host the bot?
        - You can look at the self-hosting instructions <a href="https://tacobot.app/guide/dev/self-host">here</a>.
      - 
        - How do I request deletion of my data from Trello Talk's services?
        - You can remove your user data from Taco with the <b>/clear-data</b> command. If you want to remove a specific server's data, you can go to the <a href="https://tacobot.app/support">support server</a>.
      - 
        - How can I get the best support?
        - For support on Taco, visit the <a href="https://tacobot.app/support">support server</a>.
      - 
        - How do I change which channel the webhook goes to?
        - You can do this by going into <b>Server Settings > Integrations > Webhooks</b> finding the webhook and changing the channel from there.
      - 
        - How do I make updates to my board send to a channel?
        - Run <b>/webhook add</b> with a given board and webhook name.
      - 
        - How do I change what sends to my webhook?
        - Use <b>/webhook set filters</b> to edit a webhook's filters.
      - 
        - Why did it say it couldn't find the card when I autocompleted it?
        - This boils down to a random Discord bug that enters the <b>name</b> of the option rather than the hidden <b>value</b>. Taco will warn you of this, and you can try again later.
---

# Frequently Asked Questions

Commmonly asked questions are addressed below. Others will be added as we encounter them. 

::: details How do I self-host the bot?
You can look at the self-hosting instructions [here](/guide/dev/self-host).
:::

::: details How do I request deletion of my data from Trello Talk's services?
You can remove your user data from Taco with the `/clear-data` command. If you want to remove a specific server's data, you can go to the [support server](/support).
:::

::: details How can I get the best support?
For support on Taco, visit the [support server](/support).
:::

::: details How do I change which channel the webhook goes to?
You can do this by going into `Server Settings > Integrations > Webhooks` finding the webhook and changing the channel from there.
:::

::: details How do I make updates to my board send to a channel?
Run `/webhook add` with a given board and webhook name.
:::

::: details How do I change what sends to my webhook?
Use `/webhook set filters` to edit a webhook's filters.
:::

::: details Why do I need to use slash commands now?
This is a requirement for verified bots in Discord that do not utilize incoming messages for more than just command handling.
:::

::: details Why are my autocomplete results failing?
In some cases, Taco may take longer to initially fetch your board's contents and may fail the first time autocomplete comes up. Any future searches should work after the board contents have been cached.
:::

::: details Why did it say it couldn't find the card when I autocompleted it?
This boils down to a random Discord bug that enters the **name** of the option rather than the hidden **value**. Taco will warn you of this, and you can try again later.
:::

::: details Why isn't new updates to cards/lists/etc. showing in commands?
Trello data within boards are cached for up to 2 minutes and may change depending on the commands you use. Card data is cached for 5 minutes.
:::
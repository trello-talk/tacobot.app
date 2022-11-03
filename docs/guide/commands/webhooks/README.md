# Webhook Management

::: warning
In order to manage webhooks, you must either have a role with the name `Trello`, or have administrator privileges.
:::

## Adding a webhook

You can start adding a webhook by using the `/webhook add` command. After selecting a board, you will be prompted to either link an existing Discord webhook or create one.

<MarkdownImage
  src="/images/addwebhook_example2.jpg"
  original="/images/addwebhook_example2_original.png" />

After creating a webhook, a message will be sent on the new webhook confirming the setup.

<MarkdownImage
  src="/images/addwebhook_example.jpg"
  original="/images/addwebhook_example_original.png" />

## Viewing webhooks
To see a list of webhooks on a server, use the `/webhooks` command in a Discord guild.

<MarkdownImage
  src="/images/webhooks_example.jpg"
  original="/images/webhooks_example_original.png" />

To view a webhook, use the `/webhook` command with the webhook's ID. (i.e. `/webhook view webhook:24`)

<MarkdownImage
  src="/images/webhook_example.jpg"
  original="/images/webhook_example_original.png" />

## Editing a webhook
::: tip
By default, there are 31 default filters for every newly created webhook. Not all events will show and will require you to manually turn them on.
::: details Default webhook filters
- ADD_CHECKLIST_TO_CARD
- ADD_LABEL_TO_CARD
- ADD_MEMBER_TO_BOARD
- ADD_MEMBER_TO_CARD
- COMMENT_CARD
- CREATE_LABEL
- CREATE_CARD
- CREATE_LIST
- DELETE_CARD
- DELETE_CHECK_ITEM
- DELETE_LABEL
- MAKE_ADMIN_OF_BOARD
- MAKE_NORMAL_MEMBER_OF_BOARD
- REMOVE_CHECKLIST_FROM_CARD
- REMOVE_LABEL_FROM_CARD
- REMOVE_MEMBER_FROM_BOARD
- REMOVE_MEMBER_FROM_CARD
- UPDATE_CHECK_ITEM_STATE_ON_CARD
- VOTE_ON_CARD
- CREATE_CHECK_ITEM
- DELETE_COMMENT
- UPDATE_COMMENT
- UPDATE_BOARD_NAME
- UPDATE_BOARD_CLOSED
- UPDATE_CARD_NAME
- UPDATE_CARD_LIST
- UPDATE_CARD_CLOSED
- UPDATE_CHECK_ITEM_NAME
- UPDATE_CHECKLIST_NAME
- UPDATE_LIST_NAME
- UPDATE_LIST_CLOSED
:::

You can change the way your webhook operates with the `/webhook set` command. From here you can change:
- Webhook filters
- The locale of the webhook
- Whether the webhook is actively sending events or not
- Filtered lists/cards
- Whether to use a whitelist or blacklist filter
- Repair a webhook

<MarkdownImage
  src="/images/editwebhook_example.jpg"
  original="/images/editwebhook_example_original.png" />

### Changing webhook filters
You can toggle certain filters for the webhook such as when a card gets moved, when a label gets added to a card and more.

<MarkdownImage
  src="/images/editwebhook_example2.jpg"
  original="/images/editwebhook_example2_original.png" />

To toggle a filter, type the number of the filter corresponding to it. Toggling filter category names will toggle the rest of the filters at once.

::: warning
Make sure to react with the checkmark or type `done` or else your changes will not be saved!
:::

### Repairing webhooks
The "repair webhook" option will fix the following:
- A Discord webhook linked to the webhook is deleted
- The internal webhook no longer exists
  - This can happen if the user who has created the webhook has removed their account from Taco.
- The internal webhook is not activated

## Removing a webhook
You can remove a webhook with the `/webhook delete` command followed by the ID of the webhook. (i.e. `/webhook delete webhook:24`)

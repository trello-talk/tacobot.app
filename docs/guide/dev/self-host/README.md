# Self Hosting

## Prerequisites
- [Node.JS](https://nodejs.org/) v12 or higher (use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md))
- [Yarn](https://yarnpkg.com/) ([install](https://yarnpkg.com/getting-started/install))
- [Redis](https://redis.io/) ([quickstart](https://redis.io/topics/quickstart))
- [PostgresSQL](https://www.postgresql.org/) ([download & install](https://www.postgresql.org/download/))

## Installation

### Node.JS
First you need to install [Node.JS](https://nodejs.org/). If you are on Linux or macOS, you can use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) to download and use the latest LTS version of Node. If you want nvm on Windows, [nvm-windows](https://github.com/coreybutler/nvm-windows) is a good alternative.
```sh
nvm install --lts
nvm alias default node
```

If you are on Windows you can [download and install Node.JS](https://nodejs.org/en/download/). If you still want nvm on Windows, nvm-windows is a good alternative.
::: warning
Make sure you download the LTS version! Using the latest version may have unintended side effects!
:::

### Yarn
After Node has been installed, you should have also gotten [NPM](https://www.npmjs.com/) with the installation. You can simply install yarn with one command.
```sh
npm install -g yarn
```
*See [yarnpkg.com > Getting Started > Install](https://yarnpkg.com/getting-started/install) for more information.*

Make sure to install the dependencies needed for the bot to run. You can install everything you need by running this in the project directory:
```
yarn install
```

### Redis
Redis is a database used for command cooldowns. This is better than using any other database since Redis can handle the traffic. You can follow the [quickstart](https://redis.io/topics/quickstart) to know how to install Redis.
::: tip
It is recommended that you set a password to the Redis database. You can do this by either [editing the configuration file](https://stackoverflow.com/questions/7537905/redis-set-a-password-for-redis#7548743) or adding one with the `--requirepass` flag to the `redis-server` command.
:::

### PostgresSQL
PostgresSQL is where long-term data will stay. This is where information like user settings and webhook data reside. You can install PostgresSQL [here](https://www.postgresql.org/download/). After that is installed and it has started, you can connect to it with the `postgres` user using this command:
```
sudo -u postgres psql
```

This should take you to the interactive terminal. From here you can modify the database. It is best to create a new user (with a password) and database. To do this, you can type this:
```
CREATE USER tacobot WITH PASSWORD 'someOrdinaryPassword';
CREATE DATABASE trello;
GRANT ALL PRIVILEGES ON DATABASE trello to tacobot;
```
After this, you type `\q` to exit the interactive terminal. Any table creation will be handled on the first start of the bot.
::: tip
If you need to change the password of the user, you can run this:
```
sudo -u postgres psql
\password tacobot
```
:::

## Starting the bot
Before you start the bot, make sure to clone every file from the `.Config` folder into a new `Config` folder. From there, there should be documentation on every value in every configuration file. Make sure all the required values are filled out before running the bot.

After this, you can finally run the bot:
```
yarn start
```

::: tip
If you want to run the bot in the background, you can install [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) and run this command:
```
pm2 start pm2.json
```
:::

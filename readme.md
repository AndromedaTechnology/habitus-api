<h1 align="center">Habitus API - Healthiest version of you</h1>
<p align="center">
  <a href="https://habitus.today"><img src="https://habitus.today/img/icons/logo.png"  alt="Habitus Logo" /></a>
  <br />
  <br />
  <a href="https://habitus.today">Gamified Tracker and Journal - Emotions, Habits, Thoughts</a>
  <br />
  <a href="https://habitus.today">habitus.today</a>
  <br />
  <br />
  <a href="https://habitus.today"><img src="https://heroku-badge.herokuapp.com/?app=habitus-api&style=flat&svg=1&root=api"  alt="Habitus Heroku" /></a>
</p>

API for [**Habitus App**](https://habitus.today) ([Github - Frontend](https://github.com/AndromedaTechnology/habitus)).

**Habitus App** is Unobtrusive and Easy to use Habit tracker.

Anonymous and Open-Source.

## Technology

- TypeScript
- Koa.js
- Database: MongoDB: Mongoose
- Config: Dotenv, Joi
- Testing: Jest: SuperTest, MongoDBMemoryServer
- Docker: MongoDB

## Features

- Emotion CRUD
- Habit CRUD
- JWT auth for Admin actions

## Run

**Docker**

Runs `MongoDB` container.

```
cd docker
cp .env.example .env
docker-compose up -d
```

**Application**

```
# Return to root
cd ..
cp .env.example .env
npm i
npm run dev
```

## Tests

Using `Jest` Testing Framework.

Jest uses `SuperTest` and `MongoDBMemoryServer`.

```
npm run test
```

## Postman

Check out [Postman Documentation](https://documenter.getpostman.com/view/97483/TzY4faNK).

Pre-set environment variables:

- `host`
- `admin_password`

Dynamic environment variables,
automatically set in tests:

- `access_token`
- `habit_id`

## Protected Routes [Admin access]

Few routes are protected with `jwtCheck` middleware.

Requests going to these routes require `Authorization: Bearer {token}` header.

**Protected Routes**

- [Emotion,Habit][create,update,delete]

**Getting access token**

Endpoint: `POST /auth/token`.

Body: `{ password: ADMIN_PASSWORD }`.

**Admin password**

`ADMIN_PASSWORD` is defined in `.env` file.

It defaults to `secret`.

## Habitus Frontend

Written in `TypeScript`,

using `Vue.js` and `Vuetify`.

Join the open-source development [here](https://github.com/AndromedaTechnology/habitus).

Check the live version at [habitus.today](https://habitus.today).

## Social

Habitus

- [Medium](https://medium.com/@habitus.today)
- [Twitter](https://twitter.com/HabitusToday)

<br/>
<h3 align="center">
  Crafted with ❤️ <br />
  by contributors around the 🌍 World and <a href="https://andromeda.technology/">🌌 Andromeda</a>.
</h3>

<h1 align="center">Habitus API - Healthiest version of you</h1>
<p align="center">
  <a href="https://habitus.today"><img src="https://habitus.today/img/icons/logo.png"  alt="Habitus Logo" /></a>
  <br />
  <br />
  <a href="https://habitus.today">Gamified Tracker and Journal</a>
  <br />
  <a href="https://habitus.today">Emotions, Habits, Thoughts</a>
  <br />
  <br />
  <a href="https://habitus.today"><img src="https://heroku-badge.herokuapp.com/?app=habitus-api&style=flat&svg=1&root=api"  alt="Heroku" /></a>
  <br />
  <img src="https://badges.aleen42.com/src/node.svg" alt="Node" />
  <img src="https://badges.aleen42.com/src/typescript.svg" alt="TypeScript" />
  <img src="https://badges.aleen42.com/src/docker.svg" alt="Docker" />
  <img src="https://badges.aleen42.com/src/jest_1.svg" alt="Jest" />
  <br />
  <a href="https://medium.com/@habitus.today"><img src="https://badges.aleen42.com/src/medium.svg" alt="Medium" /></a>
  <a href="https://twitter.com/HabitusToday"><img src="https://badges.aleen42.com/src/twitter.svg" alt="Twitter" /></a>
  <a href="https://www.patreon.com/moltouni"><img src="https://badges.aleen42.com/src/patreon.svg" alt="Patreon" /></a>
  <a href="https://www.buymeacoffee.com/moltouni"><img src="https://badges.aleen42.com/src/buymeacoffee.svg" alt="Buymeacoffee" /></a>
  <br />
  <br />
</p>

API for [**Habitus App**](https://habitus.today) [[Github - Frontend](https://github.com/AndromedaTechnology/habitus)].

```
Habitus App is Unobtrusive and Easy to use Habit tracker.

Anonymous and Open-Source.
```

# 1. Technology

- TypeScript
- Koa.js
- Database: MongoDB: Mongoose
- Config: Dotenv, Joi
- Testing: Jest: SuperTest, MongoDBMemoryServer
- Docker: MongoDB

# 2. Features

- 🥰 Emotion CRUD
- 💪 Habit CRUD
- 🆕 🏷 Tag CRUD
- 🔐 JWT auth for Admin actions

# 3. Run

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

# 4. Tests

Using `Jest` Testing Framework.

Jest uses `SuperTest` and `MongoDBMemoryServer`.

```
npm run test
```

# 5. Postman

Check out [Postman Documentation](https://documenter.getpostman.com/view/97483/TzY4faNK).

Pre-set environment variables:

- `host`
- `admin_password`

Dynamic environment variables,
automatically set in tests:

- `access_token`
- `habit_id`

# 6. Protected Routes [Admin access]

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

# 7. Habitus Frontend

Written in `TypeScript`,

using `Vue.js` and `Vuetify`.

**Join the open-source development - [Github - Habitus App - Frontend](https://github.com/AndromedaTechnology/habitus)**.

Check the live version at [habitus.today](https://habitus.today).

## 7. 1. Frontend preview

![User page](https://i.imgur.com/v8HgZjy.png)

[Check the gallery](https://imgur.com/gallery/9X7WC6U).

# 8. Social

Habitus

- [Medium](https://medium.com/@habitus.today)
- [Twitter](https://twitter.com/HabitusToday)

<br/>
<h3 align="center">
  Crafted with ❤️ <br />
  by contributors around the 🌍 World and <a href="https://andromeda.technology/">🌌 Andromeda</a>.
</h3>

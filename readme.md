<h1 align="center">Habitus API - Healthiest version of you</h1>
<p align="center">
  <a href="https://habitus.today"><img src="https://habitus.today/img/icons/logo.png"  alt="Habitus Logo" /></a>
  <br />
  <br />
  <a href="https://habitus.today">Gamified Habit Tracker and Journal</a>
  <br />
  <a href="https://habitus.today">https://habitus.today</a>
</p>

API for **Habitus App**.

**Habitus App** is Unobtrusive and Easy to use Habit tracker.

Anonymous and Open-Source.

## Technology

- TypeScript
- Koa.js
- Database: MongoDB: Mongoose
- Config: Dotenv, Joi
- Testing: Jest: SuperTest, MongoDBMemoryServer
- Docker: MongoDB

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
cp .env.example .env
npm i
npm run start
```

## Tests

Using `Jest` Testing Framework.

Jest uses `SuperTest` and `MongoDBMemoryServer`.

```
npm run test
```

## Frontend

- [GUI (habitus.today)](https://habitus.today)
- [GitHub](https://github.com/AndromedaTechnology/habitus)
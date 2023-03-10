# store-front API

an api for a store built as a udacity project.

#### Packages

- express
- db-migrate
- typescript
- cors
- bcrypt
- jsonwebtoken
- supertest
- jasmine
- nodemon

### 1. Database setup and connection

- connect to the default postgres database as the server's root user `psql -U postgres`
- first run below code to create a user:
  - `CREATE USER shopping_user WITH PASSWORD 'password123';`
- second run below code to create the dev and test:
  - `CREATE DATABASE shopping;`
  - `CREATE DATABASE shopping_test;`
- Connect to the dev and test db, and then grant all privileges to the created user:
  - `\c shopping`
  - `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;`
  - `\c shopping_test`
  - `GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user;`

#### Migrate Database

Navigate to the root directory and run the command below to migrate the database

- create tables
  `npx db-migrate up` for dev (default)  
  `npx db-migrate up -e test` for test
- drop tables
  `npx db-migrate down` for dev (default)
  `npx db-migrate down -e test` for test

#### contents of the .env file

```
DB_NAME=shopping
DB_TEST_NAME=shopping_test
DB_PASS=password123
DB_HOST=127.0.0.1
DB_USER=shopping_user
SALT_ROUNDS=10
BCRYPT_PASSWORD=yaser123
TOKEN_SECRET=ys
TOKEN_TEST=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo4NSwiZmlyc3RuYW1lIjoiQW1tYXIiLCJsYXN0bmFtZSI6Iklzc2EiLCJwYXNzd29yZCI6IiQyYiQxMCROQTV6LzRlMFhIcTk3YkVFM2hha2dlWnlJZmU3dWpjZFMyY29XVHJnR0drU0hTdExLODRPaSJ9LCJpYXQiOjE2NzU2MTUxNDV9.hFOmSOFEyuPlSc7_ZwD5pQWLypvC0YOOYLXvL9MegLQ
```

### 2. PORTS

- backend PORT `3000`
- datbase PORT

### 3. Package Installation

- run `npm i` in the terminal.

### 4. Start App

`npm run watch`

#### Testing

- Run test with `npm test`

#### Endpoint Access

- All endpoints are described in the REQUIREMENT.md file.

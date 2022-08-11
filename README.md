# 🗣Chatrr

Chatrr is a cross platform social media app mainly for my personal practice but is a bit extra ambitious. This repo is a monorepo that should contain everything required to run the project. It is divided into the following folders.
- Backend => Contains the backend for the project
    - Node
- Extra => Contains anything extra for the project that isn't used by the source code.
- Frontends => Contains the frontends for the project.
    - Web

## Technologies Used
- Sveltekit - Web frontend for the project
- MongoDB - Main Database for project
- Firebase - Authentication

## Project Setup
### Installation
Run `pnpm -r i` in your terminal to install dependencies.
### Backend/Node
This runs the backend for the project which must be running to build the project.
Make a copy of the example.env file and name it .env and replace its values with your values.
- PORT => Port which you want the server to run on. Could be any port except 3000 which the sveltekit frontend runs on.
- MONGO_URL => Your link for your MongoDB database.
- JWT_KEY => Your Secret key for generating and decrypting user JWT tokens.
- JWT_RESET_KEY => Your Secret key for generating and decrypting reset links.
- MAILER => Email address from which mails are sent.
- MAILER_PASS => Mailer Password.
- MAILER_SERVICE => Email Service Provider.
- BASE_URL => URL for frontend.
### Frontends/Web
This frontend is build on sveltekit and runs on default port 3000.
Make a copy of the example.env file and name it .env and replace its values with your values.
- API_URL => Your link for your API.
### Running the Project
Run `pnpm -r run start` to run the frontend on port 3000 and the server locally with nodemon on the PORT you defined.
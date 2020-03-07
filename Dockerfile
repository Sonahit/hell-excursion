FROM node:buster-slim

WORKDIR /usr/src/app
COPY packege.json ./
RUN npm i

COPY . .

CMD ["npm start"]

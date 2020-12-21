FROM node:12.13-alpine

ENV PORT 80

COPY . .

RUN npm install
RUN npm install pm2 -g

EXPOSE 80

CMD pm2-runtime --json config/deploy/pm2.json
FROM node:12.13-alpine

ENV PORT 8080
ENV BASE_URL http://localhost:3000

COPY . .

RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "--json", "config/deploy/pm2.json"]
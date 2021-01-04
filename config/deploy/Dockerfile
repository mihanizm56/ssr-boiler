FROM node:12.13-alpine

ENV PORT 8080
# ENV I18N_ENDPOINT http://localhost:5001/i18N
# ENV POKEMON_ENDPOINT http://localhost:5002

COPY . .

RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "--json", "config/deploy/pm2.json"]
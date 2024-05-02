FROM node:20-slim as build

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app

COPY . .

COPY package.json ./

RUN yarn install

RUN yarn build /app

FROM node:20-slim as prod

ENV PATH $PATH:/app/node_modules/.bin

EXPOSE 3001/tcp

WORKDIR /app

COPY --from=build /app/node_modules node_modules
COPY --from=build /app/.next .next
COPY --from=build /app/public public

ENTRYPOINT ["next", "start"]
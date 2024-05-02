FROM node:20-slim as build

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app

COPY . .

COPY package.json ./

RUN yarn install
RUN yarn add sharp --ignore-engines

RUN export NEXT_SHARP_PATH=/app/node_modules/sharp && \
    yarn build /app

FROM node:20-slim as prod

ENV PATH $PATH:/app/node_modules/.bin

EXPOSE 3001/tcp

WORKDIR /app

COPY --from=build /app/node_modules node_modules
COPY --from=build /app/.next .next

ENTRYPOINT ["next", "start" "-p", "3001"]
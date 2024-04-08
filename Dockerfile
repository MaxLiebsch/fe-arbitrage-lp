FROM node:20 as build

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app

COPY . .
# COPY [".env", "/app"]

RUN yarn

RUN echo `node -v`
RUN echo `ls /app/node_modules`

RUN yarn build /app

FROM node:20-alpine as prod

ENV PATH $PATH:/app/node_modules/.bin
ENV NODE_ENV=production

EXPOSE 3000/tcp

WORKDIR /app

COPY --from=build /app/node_modules node_modules
COPY --from=build /app/next.config.js ./
COPY --from=build /app/.next .next
COPY --from=build /app/public public

ENTRYPOINT ["next", "start", "-p", "3000"]
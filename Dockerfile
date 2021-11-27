FROM node:alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN cd /app

RUN yarn install --pure-lockfile

COPY . .

RUN yarn run build

FROM nginx:alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
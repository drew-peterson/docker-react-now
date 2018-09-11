
# Multi step build
# FROM node:alpine as builder
# WORKDIR '/app'
# COPY package*.json ./
# COPY yarn*.lock ./
# RUN yarn install
# COPY . .
# RUN yarn build

# FROM nginx
# EXPOSE 80 
# COPY --from=builder /app/build /usr/share/nginx/html

FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
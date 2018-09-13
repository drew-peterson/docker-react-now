FROM node:alpine
WORKDIR '/app'
COPY './package.json' ./
COPY './yarn.lock' ./
RUN yarn install
COPY . .
ARG NOW_TEST
ENV API_ENV_TEST="docker file test" 
CMD ["yarn", "start"]
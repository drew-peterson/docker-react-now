FROM node:alpine
WORKDIR '/app'
COPY './package.json' ./
COPY './yarn.lock' ./
RUN yarn install
COPY . .
ENV API_ENV_TEST_2=$API_ENV_TEST_2 API_ENV_DREW="docker file test"
CMD ["yarn", "start"]
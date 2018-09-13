FROM node:alpine
WORKDIR '/app'
COPY './package.json' ./
COPY './yarn.lock' ./
RUN yarn install
COPY . .
ENV API_ENV_TEST="docker file test" REACT_APP_TRAVIS_2=${REACT_APP_TRAVIS}
CMD ["yarn", "start"]
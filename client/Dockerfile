FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
ENV REACT_APP_TRAVIS_2=$REACT_APP_TRAVIS_2 REACT_APP_DREW="docker file test"
RUN yarn build

FROM nginx
EXPOSE 80 
COPY --from=builder /app/build /usr/share/nginx/html

# AWS looks for port 80 so if we are doing reverse proxy out front we use port 80
# now port 80 is already taken so we expose port 3000 and let client nginx accept requests
# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html


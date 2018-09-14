FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .

# from now.json will be added to react client
ARG REACT_APP_NOW_ENV 
ARG REACT_APP_SECRET 
ENV REACT_APP_TEST="hello from dockerfile"
RUN yarn build

FROM nginx
# look into Cloud v2 deployment now
# https://zeit.co/docs/getting-started/deployment#now.json
#  And scaling
# EXPOSE 80 
COPY --from=builder /app/build /usr/share/nginx/html




# AWS looks for port 80 so if we are doing reverse proxy out front we use port 80
# now port 80 is already taken so we expose port 3000 and let client nginx accept requests
# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html


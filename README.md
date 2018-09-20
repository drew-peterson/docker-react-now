## docker-react-now

## have to create local graphcool cluster

1. graphcool local up
2. copy simple uri into .env.development

## other commands

- graphcool local down
- graphcool local up
- docker-compose up

## other

{
"name": "docker-react-now",
"alias": "drew-prod"
}

now ./client --docker --public --token $NOW_TOKEN &&
now alias -A ./client/now.json --token $NOW_TOKEN
now ./api --docker --public --token $NOW_TOKEN &&
now alias -A ./api/now.json --token $NOW_TOKEN &&
now alias drew-prod.now.sh -r rules.json --token $NOW_TOKEN

### look into microservices

- https://zeit.co/docs/features/path-aliases

## look into GraphCMS or contenful for CMS

## look into .dockerignore

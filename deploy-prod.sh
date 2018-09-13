

# this worked -- though you might have to alias one manually first
now ./client --docker --public --token $NOW_TOKEN
now alias -A ./client/now.json --token $NOW_TOKEN
now ./api --docker --public --token $NOW_TOKEN
now alias -A ./api/now.json --token $NOW_TOKEN
now alias drew-prod.now.sh -r rules.json --token $NOW_TOKEN
# now rm docker-react-now --safe --yes --token $NOW_TOKEN

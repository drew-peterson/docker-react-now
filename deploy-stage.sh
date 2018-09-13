echo 'DEPLOYING TO STAGE'
now ./client --docker --public --token $NOW_TOKEN
now alias -A ./client/now.stage.json --token $NOW_TOKEN
now ./api --docker --public --token $NOW_TOKEN
now alias -A ./api/now.stage.json --token $NOW_TOKEN
now alias drew-stage.now.sh -r rules.stage.json --token $NOW_TOKEN
now rm drew-client --safe --yes --token $NOW_TOKEN
now rm drew-api --safe --yes --token $NOW_TOKEN
# this worked -- though you might have to alias one manually first
# or comment out previous travis above

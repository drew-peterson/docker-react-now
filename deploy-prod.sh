# now ./client --docker --public --token $NOW_TOKEN
# now alias -A ./client/now.json --token $NOW_TOKEN
# now ./api --docker --public --token $NOW_TOKEN &&
# now alias  --token $NOW_TOKEN &&
# now alias drew-prod.now.sh -r rules.json --token $NOW_TOKEN
    
now ./client --docker --public --token $NOW_TOKEN && now alias drew-prod-client.now.sh --token $NOW_TOKEN

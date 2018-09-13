# now ./client --docker --public --token $NOW_TOKEN
# now alias -A ./client/now.json --token $NOW_TOKEN
# now ./api --docker --public --token $NOW_TOKEN &&
# now alias  --token $NOW_TOKEN &&
# now alias drew-prod.now.sh -r rules.json --token $NOW_TOKEN
    
cd client
now --docker --public --token $NOW_TOKEN
now alias -A now.json --token $NOW_TOKEN

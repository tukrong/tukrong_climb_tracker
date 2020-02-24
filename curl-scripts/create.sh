#!/bin/bash

curl "https://tukrong-climb-api.herokuapp.com/climbs" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "climb": {
      "route_name": "'"${RNAME}"'",
      "route_grade": "'"${RGRADE}"'",
      "number_of_tries": "'"${NUMTRY}"'",
      "did_send": "'"${SEND}"'"
    }
  }'

echo

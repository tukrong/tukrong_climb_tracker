# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tukrong-climb-api.herokuapp.com/" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
}'

echo

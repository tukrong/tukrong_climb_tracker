# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tukrong-climb-api.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo

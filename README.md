# and-digital-test
This is a test using node and express to retrevie a phone book customers<br>
To run the project just check it out from github, in the root directory of the project then type<br>
* npm install
* npm start

for the test just type *npm test*


API description:
retrieve a list of customers
--
API endpoint:
GET localhost:4000/telecom/get

API description:
retrieve a customer phone number
--
API endpoint:
GET localhost:4000/telecom/get/Andy Halwin

API description:
activate a customer phone number
--
API endpoint:
GET localhost:4000/telecom/Andy Halwin/update

API description:
retrieve a list of customers with and active phone number
--
API endpoint:
GET localhost:4000/telecom/active

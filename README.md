## Mongoose Express Boilerplate

     This is an open source project to create boiler plate code set up for a simple Node JS server.
     
        * Swagger has also been implemented for easier documentation.
        * Jest set up is also there to support testing.
        * Docker set up has been made to make life easier.
        * Inputs to REST API can be validated here using ajv.
        * Mongoose is here to help you with the database schema and connection.

## What is this repository for?

    Stock Exchange Interface.

    Version:- 1.0
    Git clone :-https://github.com/debrajpaul/stock-market.git

## How do I get set up?

    Set up all dependencies mentioned below
    Summary of set up:- Clone the file from repository and follow the "deployment instructions".

## Server Configuration:-

    Node 10 software (Ubuntu 18.04, Link:- https://nodejs.org/en/)

## Dependencies

    All dependencies are listed in package.json file
    * In terminal go to your project directory
    * In terminal type "npm i" to add all dependencies.

## .env file

```
## Basic data
PORT=7021
PROTOCOL=http

## DB connection
MONGO_HOST = 127.0.0.1
MONGO_PORT = 27017
MONGO_USERNAME=""
MONGO_PASSWORD=""
MONGO_DB=test_db

###### Stock Exchange data
BASE_URL= https://www.alphavantage.co
API_KEY= XXXXXXXXXXXXXXXXXXX
FUNCTION_TYPE=TIME_SERIES_INTRADAY
SYMBOL_TYPE=MSFT
```

## Deployment instructions:-

    In terminal go to your project directory
    * copy the .env file to the project root directory near package.json
    * Type "npm run watch"

## UNIT TEST SUITE

    In terminal go to your project directory
    * copy the .env file to the project root directory near package.json
    * Type "npm run test"

## STOCK API DOCUMENTATION

    Go to your default browser or chrome & paste this URL
    * http://localhost:7021/swagger-ui/

## curl http call

```
curl --location --request GET 'http://localhost:7021/stock-service/stock/30'
```
## How to Contribute

Find any typos? Have another resource you think should be included? Contributions are welcome!

First, fork this repository.

![Fork Icon](images/fork-icon.png)

Next, clone this repository to your desktop to make changes.

```sh
$ git clone {YOUR_REPOSITORY_CLONE_URL}
$ cd mongoose-express-boilerplate
```

Once you've pushed changes to your local repository, you can issue a pull request by clicking on the green pull request icon.

![Pull Request Icon](images/pull-request-icon.png)

Instead of cloning the repository to your desktop, you can also go to `README.md` in your fork on GitHub.com, hit the Edit button (the button with the pencil) to edit the file in your browser, then hit the `Propose file change` button, and finally make a pull request.

## Who do I talk to?

    Debraj Paul
    contact info:- pauldebraj7@gmail.com
    LinkedIn:- https://www.linkedin.com/in/debraj-paul

## License

        Apache License

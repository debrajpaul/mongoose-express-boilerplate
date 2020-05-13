## Stock Market

This is a stock exchange project for rest applications using Node.js, Express.js and Docker.

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

###### Stock Exchange data
BASE_URL= https://www.alphavantage.co
API_KEY= C32DAOMV7UEQ7VRK
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

## Who do I talk to?

    Debraj Paul
    contact info:- pauldebraj7@gmail.com
    LinkedIn:- https://www.linkedin.com/in/debraj-paul

## License

        Apache License

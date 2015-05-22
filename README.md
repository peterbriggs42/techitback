### Setting up TechItBack

## Install modules
`npm install node-sass-middleware --save`

`npm install dotenv keystone underscore`

## Grab secret keys, credentials, etc.

 Go to TechItBack's google drive here: https://drive.google.com/drive/u/1/folders/0Bxg7pwnbhXwcZWdmaUdDRlRZemM/0B4mRh9Gt-1ejfnhRb3Mza044UVZ4ZVk0MmIyMjZXZTg5YzJpN2Znbk85cTIzZGd0cEZ4Z3M and download the files.
   1. Put them in the same directory as `keystone.js`
   2. Rename `env` to `.env`
  
## Start mongo
`npm install node-sass-middleware --save`

## Set up database
TODO

## Starting local server
`node keystone.js`

## Making changes to server
`ssh -i techitback.pem ubuntu@52.0.15.47`

`cd techitback/techitback`

Pull in changes from git repo:

`bash pull.sh`

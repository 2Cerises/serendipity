# SerendipityFE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Create Resources on AWS 

make sure to have you AWS account credentials configured on your terminal

Run `sam deploy --template-file sam-template.yaml --guided` 

## Deploy the app on AWS S3 

replace the place holder userPoolId and **userPoolClientId** in app.module.ts with your userPoolId and **userPoolClientId** 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## AWS build

build the app  using `ng build` which will create the folder dist/serendipity-fe

run the command `aws s3 sync dist/serendipity-fe s3://dev-serendipity-static-site` which will deploy the static file on AWS S3 bucket



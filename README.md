# App Screenshot Generator

Auto generate app screenshot for App Store & Google Play.

Support sizes supported:

- `3.5'`: iPhone 4/4S
- `4'`: iPhone 5/5S
- `4.7'`: iPhone 6/6S
- `5.5'`: iPhone 6+/6S+/Android

# Preview

![Sample Preview](assets/sample.png)

# How it works

This project consists of three parts:

1. The NodeJS web service who hosts styled app screenshots
2. [PhantomJS](http://phantomjs.org/) who captures the styled app screenshots to png files
3. A `sh` file who executes `phantomjs` command for all sizes required

# How to use

1. Capture screenshots of your app
2. Setup `config.json`
3. Install dependencies by `npm install`
4. Run the web service by `node app.js`
5. Generate beautiful screenshots by `sh build.sh YOUR_APP_NAME`

Checkout the sample folder `/public/images/Sample`.

# TODO

- Support multi themes

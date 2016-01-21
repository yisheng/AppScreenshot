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

This project consists of 3 parts:

1. The NodeJS web service who hosts styled app screenshots
2. [PhantomJS](http://phantomjs.org/) who captures the styled app screenshots to png files
3. A `sh` file who executes `phantomjs` command for all sizes required

# How to use

> Checkout the sample folder in `public/images/Sample`.

1. Capture screenshots of your app, and copy them to `public/images/`
2. Setup titles in `config.json`
3. Install dependencies by `npm install`
4. Run the web service by `node app.js`
5. Generate beautiful screenshots by `sh build.sh YOUR_APP_NAME`

# Sample

> To try this sample, you should run `node app.js` first

- Path: `public/images/Sample`
- Preview styled screenshots: `http://localhost:3000/?app=Sample&device=5.5&index=1` (Of couse, you could change `device` and `index`)
- Generate styled screenshots: `sh build.sh Sample`


# TODO

- Support multi themes

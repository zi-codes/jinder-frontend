# [Jinder:tm: - Job Tinder](http://www.jinder.work/)

![swiping gif](https://media.giphy.com/media/Mcn1MGtoavUdVuMnc3/giphy.gif)

A full stack web app that allows employers to match with candidates and vice versa. Made with React.js for the frontend and [Rails API backend](https://github.com/hemser1/jinder-backend).

One of two repositories made by 4 Makers bootcamp students in their 11th & 12th weeks of learning to code.

## Techs Used

- React frontend
- Rails API backend with Devise
- Circle CI for CI/CD
- Heroku for main website deployment and AWS S3 for image database
- Google Maps API for geolocation and Google Vision API for Machine Learning safe image detection

## Run this repo
In terminal:
Requires yarn. Alternatively packages can be installed with "npm install" and the server run with the command "npm start", should you prefer.

```sh
$ git clone https://github.com/zi-codes/jinder-frontend
$ cd jinder-frontend
$ yarn
$ yarn start
```
You should then be able to view the website in browser.

## Features
- Signing up and logging in as a candidate or an employer
- Creating a profile as a candidate or an employer
- Swiping through profiles of candidates/employers
- Filtering by location/industry/skills/personality
- Instant notification when you get a match
- Viewing all your matches (releases contact details to each other)
- Safe image detection to check you are uploading an appropriate image
- Geolocation to prevent user providing fake location details
- Responsive design to accomodate mobile users
- Protected routes


## Teamwork & Methodology
See [original README](https://github.com/hjdr/jinder-frontend/)

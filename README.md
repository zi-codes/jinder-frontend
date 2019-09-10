# [Jinder](http://www.jinder.work/):tm:
![Jinder2](https://user-images.githubusercontent.com/42152431/64133475-22a97a00-cdce-11e9-812b-f6a4924d397f.png)

**_Makers Academy Final Project by June2019 Cohort. For this project, we designed a web application using Ruby on Rails, React, RSpec and Jest, PostgreSQL and Active Record. Deployment - Heroku._**

## Goals :star2:

**_Product & Teamwork_**

**_Have Fun_**

**_Learn Something New (e.g. new tech, project management, teamworking)_**

**_Learn From Each Other_**

**_Build Something Cool :sunglasses:_**

**_[PLEASE VISIT OUR BACKEND README FOR MORE INFORMATION ABOUT TECH PROCESS, DATABASE SETUP AND INSTALLATION](https://github.com/hemser1/jinder-backend)_**

## Getting Started :runner:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Project Governance :hourglass_flowing_sand:

- Pairing
- Solo (when required)

### 9:30am StandUp :coffee:

- Emotional check-in: 1/10 or weather check
- What I did yesterday / what I'm doing today / any blockers 
- [XP Values](http://www.extremeprogramming.org/values.html)

### Product Build & Retrospective :raised_hands:

 - Every 2 days (inc. standup)

### Product Process & Code Quality :100:

 - No pushes to master unless peer reviewed
 - Pushes frequent & often
 - Clear commits
 - Testing Approach:
    - [ ] 95% or greater test coverage.
    - [ ] Unit tests:
       - [ ] test one piece of logic.
       - [ ] __fail__ if that logic breaks.
       - [ ] __pass__ if it that logic produces the expected result.
    - [ ] Can articulate why any test exists (or does not exist).
    - [ ] Every feature is tested from the user's perspective.

### Tools :hammer:

- CircleCI & Firebase
- Git & Github with [FE](https://github.com/hjdr/jinder-frontend) & [BE](https://github.com/hemser1/jinder-backend) repos
- Slack
- [Trello](https://trello.com/b/bKBmXk0L/%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5)
- [Instagram](https://www.instagram.com/jinderteam/)

### Tech Stack :computer:

- Ruby on Rails (Backend)
  - Devise
- React (Frontend)
  - Material UI / Bootstrap
- RSpec & Jest
- PostgreSQL
- Active Record
- Heroku
- CircleCI

## User Stories :notebook_with_decorative_cover:

```
Given I am a job hunter,
When I sign up,
Then I can create a profile.

Given I am a signed-up job hunter,
When I sign up,
Then I have access to my account.

Given I am a job hunter,
When I am signed up,
I can log in.

Given I am an employer,
When I visit the website without logging in,
I can see a wall of job huters with contact details (e.g. email).

Given I am an employer,
When I sign up,
I can search for profiles with keywords.

Given I am an employer,
When I am logged in,
I can upload jobs.

Given I am a job hunter,
When I finish with the search,
I can log out.
```

### MVP (Deadline: Wednesday 4.09) :squirrel:

```
* Job hunter can sign up
* Job hunter can sign in
* Job hunter can upload profile inc. bio, skills & personality
* There is a wall of job hunters
```

#### Further Requirements :octocat:

```
* Employers can sign up
* Employers can only see job hunters
* Employers can search profiles
* Employers can upload jobs
* Job hunters can add what type of jobs they want
* There is a matching algorithm based on Employer & JH
```

# Day-to-Day Progress :bar_chart:

## Monday (02.09.19) :chart_with_upwards_trend:
- User Stories ✅ 
- MVP features ✅
- Schedule ✅
- BE Framework Setup (Ruby on Rails) ✅
- Deployment on Heroku ✅
- CircleCI ✅
- FE Framework Setup (React & Bootstrap) ✅
- Trello ✅

## Tuesday (03.09.19) :chart_with_upwards_trend:
- BE sign in ✅
- FE sing in page ✅
- FE sign up page ✅
- FE profiles: created forms and will finish on on Wednesday ✅
## Wednesday (04.09.19) :chart_with_upwards_trend:
- FE profiles
- FE contact us / about us page
- MVP done
## Thursday (05.09.19) :chart_with_upwards_trend:
StandUp:coffee:![Image from iOS](https://user-images.githubusercontent.com/42152431/64423325-26732000-d09e-11e9-80cf-d1a6eef383f5.jpg)

- **Zi - sunny :sunny:**
  - Blockers - swipey swipe (will get rid of ‘transparency feature’)
  - Worries: image upload (will pair on this with AB)
  
- **Harry - sunny:sunny:**
  - Finished upload profile form - input name, email, industry, skills
  - Navigation bar
  - FE Tests
  - Routes

- **Josh - very sunny :sunny::sunny::sunny:**
  - Auth. token, set up profile link to user id, started employers BE
  - Blockers - devise (but figured it out yay). Possibly will have an issue with devise later on.
  - BE README (will pair with AB)

- **Anastasiia - sunny/stormy :sunny:/:tornado:**
  - Blockers: learning React and Bootstrap frustratingly takes too long
  - Added logo to ‘/’, ‘/login’, ‘/aboutus’
  - AboutUs, image upload, README
## Friday (06.09.19) :chart_with_upwards_trend:
StandUp:coffee: **_What car are you today?_**
- **Harry**
  - ![ferrari_sf90_stradale_assetto_fiorano_0](https://user-images.githubusercontent.com/42152431/64422849-f5deb680-d09c-11e9-8e75-f7097fb76c4b.jpg)
  - Nav bar, set up cypress, 3 tests
  - Blocker - one fails on the profile
  - Today - merge to master, employer sigh up and sign in, routing.
- **Zi**
  - ![d37dcfb7e4ad9dfe45ad9e2cf3cec2a2](https://user-images.githubusercontent.com/42152431/64422852-f6774d00-d09c-11e9-9c46-bce60cc09616.jpg)
  - Image uploads 
  - Concern: deployment
  - Today: finishing off the image uploads
- **Anastasiia**
  - ![gle-coupe-zw-11_720x540](https://user-images.githubusercontent.com/42152431/64422896-1444b200-d09d-11e9-89a6-833ab8e8d76b.jpg)
   - About page: created the layout 
     - ![IMG_C9559B25FA72-1](https://user-images.githubusercontent.com/42152431/64423230-e7dd6580-d09d-11e9-8c9d-375a2fc11e3d.jpeg)
   - Blockers: takes a long time to get everything to look cool and work properly.
   - Issue: after mergening Nav Bar branch - loooots of debuging was required for About Us branch. It's all ok now. Yay!
   - Today: Finish off about us - add some animation hopefully, update READMEs (FE and BE), 
- **Josh**
  - ![The-all-electric-version-of-the-iconic-double-decker-London-red-bus-crosses-Westminster-bridge-as-a-part-of-the-vehicles-lauch-event-image-courtesy-of-BYD (1)](https://user-images.githubusercontent.com/42152431/64422851-f6774d00-d09c-11e9-8cf0-3f9ea05c2d56.jpg)
   - Employers images
   - Started testing - blocker
   - Today - finish the BE, matching logic

## Monday (09.09.19) :chart_with_upwards_trend:

Team Jinder breakfast :heart:
![Facetune_09-09-2019-11-10-35](https://user-images.githubusercontent.com/42152431/64522707-8235e700-d2f2-11e9-9d2d-a32a55b8c22e.JPG)

StandUp :coffee::coffee::coffee: :one:/:one::zero:

- **Harry 8.5/10**
  - Routes: changed url paths
  - Homepage **done**
  - No blockers today
  - Today: - link the homepage
           - authentication with Josh

- **Anastasiia 6.7/10**
  - About page: clean up
  - BE REDME with Josh
  - Blockers: weekend merge nightmare, all done now
  - Update FE and BE READMEs
  - Instagram - create, put up pictures

- **Zi 7/10**
  - BE with Josh matches - working now
  - Basic FE for the matches
  - Image checking - only works locally at the moment
  - Password matching works
  - Today: tidy up all the forms - a version that’s fully functional

- **Josh 9/10**
  - Matching BE with Zi
  - All live and pushed - works great
  - Today: authentication on React and help with anything that is needed
  - Add Personality functionality - challenge
  - BE README with Anastasiia

- _Match notification_
- _Add other non-software skills_

## Tuesday (10.09.19) :chart_with_upwards_trend:
- **Zi - :sunny:**
  - Yesterday: spent way too long on API keys but now it’s all done
  - Fixing image form 
  - Matching - instant confirmation done
  - Today: clean up candidate route with Anastasiia
  - Today: adding a company’s name form with Anastasiia

- **Josh - :sunny: with level thin clouds**
  - Employer session 
  - Edge case - if employees and user use the same email and password - will return user session
  - Blocker: not yet - personaluit
  - Today - personality quiz into profile section


- **Harry - :sunny: with a bit of :fog: :fog: :fog:  in a form of Josh**
  - Yesterday: authentification - fixed this morning
  - Profile - personality profile



- **Anastasiia - :sunny: but :snowflake:**
  - Yesterday: about page done - need text
  - Instagram: created and added pictures
  - Blockers: merged origin master - nothing loading (update: the route was missing from App.js, all fixed now). Merged to master
  - Readme Update (FE) 
  - Clean up 
  - Trello update

- **ADD BIO TO USERS**
- **ADD COMPANY NAME TO EMPLOYERS**

TOMORROW COLOUR: BLUEEEEEEE :blue_heart: :blue_heart: :blue_heart: :blue_heart: 
-
## Wednesday (11.09.19) :chart_with_upwards_trend:
- Feauture Freeze :snowflake:
## Thursday (12.09.19) :chart_with_upwards_trend:
-
## Friday (13.09.19) :chart_with_upwards_trend:
- **DEMO DAY** :mega:

# Authors :trophy:

- [**Anastasiia Blaha**](https://github.com/AnastasiiaBlaha)
- [**Zi Deng**](https://github.com/zi-codes)
- [**Josh Hemsley**](https://github.com/hemser1)
- [**Harry Riley**](https://github.com/hjdr)

# Acknowledgments :clap:

* Thanks to :coffee::coffee::coffee::coffee::coffee::coffee::coffee::coffee::coffee:
* Inspiration ........................

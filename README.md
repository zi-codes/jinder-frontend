# Jinder:tm:
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
 
### Kanban & Given / When / Then . ????????????????????????

### Tools :hammer:

- CircleCI & Firebase
- Git & Github with [FE](https://github.com/hjdr/jinder-frontend) & [BE](https://github.com/hemser1/jinder-backend) repos
- Slack
- [Trello](https://trello.com/b/bKBmXk0L/%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5)
- Instagram

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
StandUp:coffee:
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
![ferrari_sf90_stradale_assetto_fiorano_0,50%](https://user-images.githubusercontent.com/42152431/64420483-4eab5080-d097-11e9-9ab1-7f6737c2b7de.jpg){:height="50%" width="50%"}
  - Nav bar, set up cypress, 3 tests
  - Blocker - one fails on the profile
  - Today - merge to master, employer sigh up and sign in, routing.
- **Zi**
![d37dcfb7e4ad9dfe45ad9e2cf3cec2a2,50%](https://user-images.githubusercontent.com/42152431/64420561-76021d80-d097-11e9-8c74-8f093835dc94.jpg)
  - Image uploads 
  - Concern: deployment
  - Today: finishing off the image uploads
- **Anastasiia**
![gle-coupe-zw-11_720x540,50%](https://user-images.githubusercontent.com/42152431/64420482-4eab5080-d097-11e9-808b-13bdbfb3f846.jpg)
   - About page: created the layout ![IMG_C9559B25FA72-1,60%](https://user-images.githubusercontent.com/42152431/64421035-8961b880-d098-11e9-88c3-188b0ef69b6b.jpeg)
   - Blockers: takes a long time to get everything to look cool and work properly.
   - Issue: after mergening Nav Bar branch - loooots of debuging was required for About Us branch. It's all ok now. Yay!
   - Today: Finish off about us - add some animation hopefully, update READMEs (FE and BE), 
- **Josh**
![The-all-electric-version-of-the-iconic-double-decker-London-red-bus-crosses-Westminster-bridge-as-a-part-of-the-vehicles-lauch-event-image-courtesy-of-BYD,50%](https://user-images.githubusercontent.com/42152431/64420484-4f43e700-d097-11e9-835d-fe2de64b707e.jpg)
   - Employers images
   - Started testing - blocker
   - Today - finish the BE, matching logic

## Monday (09.09.19) :chart_with_upwards_trend:
 - 
## Tuesday (10.09.19) :chart_with_upwards_trend:
- 
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

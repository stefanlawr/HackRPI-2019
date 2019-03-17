![HackRPI 2019](https://i.imgur.com/X89Vj4n.png)

# College Hub

College Hub is an application designed to act as a dashboard for clubs, jobs, scholarships and various other activities around campus. The application will support multiple schools as long as they are registered for the service.

## Tech Stack

- Our application is built using a Python-Flask back end with a PostgreSQL database, and an Angular 7 front end. We utilized Bootstrap 4 and SCSS for styling.

## Collaborators

- [Stefan Strauch](mailto:%20sstrauc1@ramapo.edu) - Frontend developer

- [Daniel Schnoll](mailto:%20schnod@rpi.edu) - Backend and Database developer

## Domain.com Challenge
- [Is Toby the Scranton Strangler?](http://istobythescrantonstrangler.com)

## What we learned
- Daniel: How to create a RESTFUL API in Flask that serves endpoints for the front end, Database administration

- Stefan: Angular Components interacting with aforementioned RESTFUL API

## Accomplishments that we're proud of
- Scalability of the application and the main dashboard
- Successfully displaying information pulled from the database via RESTFUL API

## Challenges we encountered
- Successfully displaying information pulled from the database via RESTFUL API. Initially we were serving it to the front end via a python dictionary, which proved too difficult to parse in Angular. So we switched it to a JSONified python list and we were able to successfully display information

## What's Next for CollegeHub?
There are a multitude of future features for this app. This project is mainly a proof of concept/MVP to demonstrate the potential usefulness of CollegeHub. Features we plan on adding include but are not limited to:

#### Homepage for CollegeHub.io
- Front end user-auth handling with existing flask routes
- Account creation page

#### Dashboard Improvements
- Dynamically load components for the main dashboard
- Better styling? More images, maybe a news feed?
- Event creation page/modal

#### User profile
- Update users table to have user profile picture link
- Update users table to have a description
- Dynamically pull all user information to populate a profile page

#### User tiering
- Register new campuses if school doesn't exist in the table
- Campus ambassador/admins approve the posting of a new event

# Mongo Associations with Referenced Documents

## Objectives

- Be able to find Mongo documents from multiple collections in succession

## Setup

Fork and clone.

```
npm install
node seeds.js
nodemon
```

## Set the stage

Go through https://github.com/gSchool/asynchronous-js-nested-callbacks if you haven't yet.

_Why?_: Being able to program associations is the final step to being able to build apps with complex domains.

_What?_: Follow the activities below:

## Activities

After you've run `seeds.js`, go to a mongo shell and look at the collections and documents:

```
mongo mongo-associations-lesson
show collections
db.meetups.find().pretty()
// repeat for each collection
```

On a whiteboard, draw out the data model.

**#1 Set up a basic `/meetups/:id` route**

# Mongo Associations with Referenced Documents

## Objectives

By the end of this lesson you should be able to:

- Find Mongo documents from multiple collections in succession
- Use `$in` to search for values in arrays of Mongo documents

## Setup

Fork and clone.

```
npm install
node seeds.js
nodemon --harmony
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

**#1 - Set up a basic `/meetups/:id` route**

When a user goes to the homepage and clicks on a meetup, they should see the meetup name and description.

Get this working then commit.

**#2 - Display location data**

On the show page, display the meetup's location's name and address.  Use a nested callback to make this work.

The view code should look like this:

```hbs
<p>
  {{location.name}}
</p>
```

Question:  Where does the `res.render` line go in the route?  Why?

**#3 - Display member data**

On the show page, display a list of all users who are members of the meetup (just their names).

See the `inex.hbs` page if you need a syntax hint for how to do an `each` loop in Handlebars.

See http://docs.mongodb.org/manual/reference/operator/query/in/ for how to form the correct query.

**#4 - Display follower data**

On the show page, display a list of users who follow the meetup.

**#5 - Meetups followed by followers**

On the show page, show a unique list of all the meetups that all of the members follow, and that the followers follow, except the current meetup.

NOTE: you may need to write some non-framework JavaScript to make this happen.  If you are looking for a specific Mongo operator that does exactly what's described above, you probably won't find it :)

The view code might look like:

```hbs
<h2>You may be interested in...</h2>

{{#each otherMeetups}}
  <section>
    <h1><a href="/meetups/{{_id}}">{{name}}</a></h1>
    <p>{{description}}</p>
  </section>
{{/each}}
```

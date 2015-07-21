index.js:

```js
router.get('/meetups/:id', function(req, res, next) {
  meetups.findOne({_id: req.params.id}, function (err, meetup) {
    if(err) throw err
    locations.findOne({_id: meetup.locationId}, function (err, location) {
      if(err) throw err
      users.find({_id: {$in: meetup.memberIds}}, function (err, members) {
        if(err) throw err
        users.find({follows: {$in: [meetup._id]}}, function (err, followers) {
          if(err) throw err

          var otherMeetupIds = members.concat(followers).reduce(function(result, user){
            return result.concat(user.follows)
          }, []).filter(function (meetupId) {
            return meetupId.toString() !== req.params.id
          });

          meetups.find({_id: {$in: otherMeetupIds}}, function (err, otherMeetups) {
            if(err) throw err
            res.render('show', {
              meetup: meetup,
              location: location,
              members: members,
              followers: followers,
              otherMeetups: otherMeetups
            });
          })
        })
      })
    })
  })
});
```

show.hbs

```hbs
<h1>{{meetup.name}}</h1>
<p>
  {{location.name}}
</p>

<h2>Members</h2>

{{#each members}}
  <p>
    {{name}}
  </p>
{{/each}}

<h2>Followers</h2>

{{#each followers}}
  <p>
    {{name}}
  </p>
{{/each}}

<h2>You may be interested in...</h2>

{{#each otherMeetups}}
  <section>
    <h1><a href="/meetups/{{_id}}">{{name}}</a></h1>
    <p>{{description}}</p>
  </section>
{{/each}}
```

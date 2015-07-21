var db = require('monk')('localhost/mongo-associations-lesson')

var meetups = db.get('meetups')

Promise.all([
  meetups.remove({}),
  meetups.insert({name: 'NodeJS', description: 'Learn all the scripts!'}),
  meetups.insert({name: 'Ruby', description: 'What a gem!'}),
  meetups.insert({name: 'PHP', description: 'And oldy but a goodie!'}),
  meetups.insert({name: 'Python', description: 'Get your data on!'}),
]).then(function () {
  db.close()
})

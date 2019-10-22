import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    // Show newest tasks at the top
  return Tasks.find({}, { sort: { createdAt: -1 } });
},
});

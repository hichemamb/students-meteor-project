import { Template } from 'meteor/templating';

import { List } from '../database/list.js';

import './body.html';

Template.body.helpers({
    lists() {
        return List.find({});
    },
});

Template.body.events({
    'submit .new-list'(event) {

        event.preventDefault();

        const target = event.target;
        const firstname = target.firstname.value;
        const name= target.name.value;
        const github = target.github.value;


        List.insert({
            firstname,
            name,
            github,
        });

        target.firstname.value = '';
        target.name.value = '';
        target.github.value = '';
    },
});
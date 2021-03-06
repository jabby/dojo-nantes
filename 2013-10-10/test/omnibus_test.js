var vows = require("vows"),
    Omnibus = require("../src/omnibus.js"),
    assert = require('assert');


vows.describe("controlleur de l'omnibus").addBatch({
    'when omnibus is asked for nextCommand': {
        topic: function () {
            var omnibus = new Omnibus();
            return omnibus.nextCommand();
        },

        'it opens the door': function (topic) {
            assert.equal(topic, "OPEN");
        }
    },

    'when omnibus is asked for nextCommand twice': {
        topic: function () {
            var omnibus = new Omnibus();
            omnibus.nextCommand();
            return omnibus.nextCommand();
        },

        'it opens then close the door': function (topic) {
            assert.equal(topic, "CLOSE");
        }
    },

    'when omnibus is asked for nextCommand three times': {
        topic: function () {
            var omnibus = new Omnibus();
            omnibus.nextCommand();
            omnibus.nextCommand();
            return omnibus.nextCommand();
        },

        'it ends up going up': function (topic) {
            assert.equal(topic, "UP");
        }
    },

    'when omnibus is asked for nextCommand four times': {
        topic: function () {
            var omnibus = new Omnibus();
            omnibus.nextCommand();
            omnibus.nextCommand();
            omnibus.nextCommand();
            return omnibus.nextCommand();
        },

        'it opens the door': function (topic) {
            assert.equal(topic, "OPEN");
        }
    },

    'when omnibus reaches fiveth floor': {
        topic: function () {
            var omnibus = new Omnibus();
            for (var i = 0; i < 17; i++) {
                omnibus.nextCommand();
            }
            return omnibus.nextCommand();
        },

        'it goes down': function (topic) {
            assert.equal(topic, "DOWN");
        }
    },
    'when omnibus goes from 5th to 4t floor': {
        topic: function () {
            var omnibus = new Omnibus();
            for (var i = 0; i < 20; i++) {
                omnibus.nextCommand();
            }
            return omnibus.nextCommand();
        },

        'it goes down': function (topic) {
            assert.equal(topic, "DOWN");
        }
    }


}).run();

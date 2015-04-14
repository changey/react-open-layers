'use strict';

var keyMirror = require('react/lib/keyMirror');

module.exports = {
    ActionTypes: keyMirror({
      //  RECEIVE_PRODUCTS: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};

'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');
var WebAPIUtils = require('../utils/WebAPIUtils');
var AppConstants = require('../constants/AppConstants');

var Actions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.CREATE,
      text: text
    });
  },

  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DESTROY,
      id: id
    })
  }
};

module.exports = Actions;

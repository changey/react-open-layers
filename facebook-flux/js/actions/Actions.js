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
    AppDispatcher.dispatch({
      actionType: AppConstants.DESTROY,
      id: id
    })
  }
};


var LayerActions = {
  selectFeature: function(id) {
    AppDispatcher.dispatch({
      actionType: AppConstants.UPDATE,
      id: id
    });
  }
}

export default { Actions, LayerActions };

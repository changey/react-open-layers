var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _selectedFeature = null;

function update(id) {
  _selectedFeature = id;
}

var SelectedFeatureStore = assign({}, EventEmitter.prototype, {
  getSelectedFeature: function() {
    return _selectedFeature;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.UPDATE:
      update(action.id);
      SelectedFeatureStore.emitChange();
      break;
  }
});

module.exports = SelectedFeatureStore;

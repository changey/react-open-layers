'use strict';

// import alt from '../alt';

export default class LayerActions {
  selectFeature(featureId) {
    this.dispatch(featureId);
  }

  createFeature() {
    debugger
    this.dispatch("blah");
  }

  removeFeature(featureId) {
    this.dispatch(featureId);
  }
}

// export default alt.createActions(LayerActions);

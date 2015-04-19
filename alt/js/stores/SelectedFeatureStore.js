// import flux from '../flux';
// import alt from '../alt';

export default class SelectedFeatureStore {
  constructor(flux) {
    const actions = flux.getActions('layer');
    this.bindAction(actions.SELECT_FEATURE, this.handleSelectFeature);

    this.selectedFeatureId = null;
  }

  handleSelectFeature(id) {
    this.selectedFeatureId = id;
  }

  getSelectedFeatureId() {
    return this.selectedFeatureId;
  }
}

// export default alt.createStore(SelectedFeatureStore, 'SelectedFeatureStore');

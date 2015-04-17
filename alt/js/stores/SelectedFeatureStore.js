// import flux from '../flux';
// import alt from '../alt';

class SelectedFeatureStore {
  constructor(flux) {
    const actions = this.flux.getActions('layer');
    this.bindAction(actions.selectFeature, this.handleSelectFeature);

    this.selectedFeatureId = null
  }

  handleSelectFeature({id}) {
    this.selectedFeatureId = id;
  }

  getSelectedFeatureId() {
    return this.selectedFeatureId;
  }
}

// export default alt.createStore(SelectedFeatureStore, 'SelectedFeatureStore');

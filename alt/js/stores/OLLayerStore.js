// import flux from '../flux';
// import alt from '../alt'

class FeatureStore {
  constructor(flux) {
    const actions = this.flux.getActions('layer');
    this.bindAction(actions.createFeature, this.createFeature);
    this.bindAction(actions.removeFeature, this.removeFeature);

    this.features = [];
  }

  createFeature() {
    debugger
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const feature = {
      id: id,
      position: Math.floor((Math.random() * 3)),
      x: 14975000 + (Math.floor((Math.random() * 10)) - 5) * 400000,
      y: 4268330 + (Math.floor((Math.random() * 6) - 3) * 400000)
    };

    this.features[id] = feature;
  }

  removeFeature({id}) {
    delete this.features[id];
  }

  getFeatures() {
    return this.features;
  }
}

// export default alt.createStore(FeatureStore, 'FeatureStore');

// import flux from '../flux';
// import alt from '../alt'

export default class FeatureStore {
  constructor(flux) {
    const actions = flux.getActions('layer');
    this.bindAction(actions.createFeature, this.onCreateFeature);
    this.bindAction(actions.REMOVE_FEATURE, this.removeFeature);

    this.features = {};
  }

  onCreateFeature() {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const feature = {
      id: id,
      position: Math.floor((Math.random() * 3)),
      x: 14975000 + (Math.floor((Math.random() * 10)) - 5) * 400000,
      y: 4268330 + (Math.floor((Math.random() * 6) - 3) * 400000)
    };

    this.features[id] = feature;
  }

  removeFeature(id) {
    delete this.features[id];
  }

  getFeatures() {
    return this.features;
  }
}

// module.exports =  alt.createStore(FeatureStore, 'FeatureStore');

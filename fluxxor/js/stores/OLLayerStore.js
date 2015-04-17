import { Store } from 'flummox';

export default class FeatureStore extends Store {
  constructor(flux) {
    super();

    const layerActionIds = flux.getActionIds('layer');
    this.register(layerActionIds.createFeature, this.createFeature);
    this.register(layerActionIds.removeFeature, this.removeFeature);

    this.state = {
      features: []
    }
  }

  createFeature() {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const feature = {
      id: id,
      position: Math.floor((Math.random() * 3)),
      x: 14975000 + (Math.floor((Math.random() * 10)) - 5) * 400000,
      y: 4268330 + (Math.floor((Math.random() * 6) - 3) * 400000)
    };

    let features = this.state.features;
    features[id] = feature;
    this.setState({features});
  }

  removeFeature({id}) {
    let features = this.state.features;
    delete features[id];

    this.setState({features})
  }

  getFeatures() {
    return this.state.features;
  }
}

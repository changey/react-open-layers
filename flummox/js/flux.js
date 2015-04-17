import { Flummox } from 'flummox';
import LayerActions from './actions/Actions';
import FeatureStore from './stores/OLLayerStore';
import SelectedFeatureStore from './stores/SelectedFeatureStore';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('layer', LayerActions);

    this.createStore('features', FeatureStore, this);
    this.createStore('selectedFeature', SelectedFeatureStore, this);
  }
}

// const flux = new Flux();

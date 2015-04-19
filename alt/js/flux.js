import Alt from 'alt';

import LayerActions from './actions/Actions';
import FeatureStore from './stores/OLLayerStore';
import SelectedFeatureStore from './stores/SelectedFeatureStore';

class Flux extends Alt {
  constructor() {
    super();

    this.addActions('layer', LayerActions);

    this.addStore('features', FeatureStore);
    this.addStore('selectedFeature', SelectedFeatureStore);
    
    this.dispatcher.register(function (payload) {
      console.log(payload);
    });
  }
}



// const flux = new Flux();
export default Flux;

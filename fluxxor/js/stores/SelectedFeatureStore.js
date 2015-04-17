import { Store } from 'flummox';

export default class SelectedFeatureStore extends Store {
  constructor(flux) {
    super();

    const layerActionIds = flux.getActionIds('layer');
    this.register(layerActionIds.selectFeature, this.handleSelectFeature);

    this.state = {
      selectedFeatureId: null
    }
  }

  handleSelectFeature({id}) {
    this.setState({
      selectedFeatureId: id
    })
  }

  getSelectedFeatureId() {
    return this.state.selectedFeatureId;
  }
}

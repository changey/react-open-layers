'use strict';

import { Actions } from 'flummox';

export default class LayerActions extends Actions {
  selectFeature(featureId) {
    return { id: featureId };
  }

  createFeature() {
    return {}
  }

  removeFeature(featureId) {
    return { id: featureId }
  }
}

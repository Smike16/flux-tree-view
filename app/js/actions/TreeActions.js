'use strict';

import { dispatch } from 'dispatcher';
import * as Actions from 'constants';
import { generateData } from 'utils/Tree';

const TreeActions = {
  fetchChildren(id, ids) {
    /**
     * Эти данные получим от сервера.
     * Потом не будет смысла передавать сюда
     * список айдишников.
     */
    const fetchedData = generateData(ids);

    this.updateChild(id, { loading: true, toggled: true });

    setTimeout(() => {
      this.updateChild(id, { loading: false });
      this.receiveChildren(fetchedData);
    }, 2000);
  },

  receiveChildren(children) {
    dispatch(Actions.TREE_ADD_CHILD, { children });
  },

  updateChild(id, data) {
    dispatch(Actions.TREE_UPDATE_CHILD, { id, data })
  }
};

export default TreeActions;

'use strict';

import Store from 'utils/Store';
import * as Actions from 'constants';
import { register } from 'dispatcher';
import { generateTree } from 'utils/Tree';

/**
 * An Initial Tree
 */
let tree = {
  0: {
    id: 0,
    title: 'Root',
    childIds: [1, 2, 3, 4, 5, 6],
    toggled: true
  }
};

/**
 * @param {Number} - ID ноды, которую хотим обновить
 * @param {Object} - Данные, кот. мерджим с начальными
 */
const updateChild = (id, data) => {
  tree[id] = Object.assign({}, tree[id], data);
};

/**
 * @param {Object} - Объект с детьми
 */
const addChildren = (children) => {
  tree = Object.assign({}, tree, children);
};

const TreeStore = new Store({
  getTree() {
    return tree;
  }
});

register(action => {
  const { type, payload } = action;

  switch (type) {
    case Actions.TREE_ADD_CHILD:
      addChildren(payload.children);
      break;

    case Actions.TREE_UPDATE_CHILD:
      updateChild(payload.id, payload.data);
      break;

    default:
      return true;
  }

  TreeStore.emitChange();

  return true;
});

export default TreeStore;

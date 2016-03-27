'use strict';

import React, { Component } from 'react';
import TreeStore from 'stores/TreeStore';
import TreeActions from 'actions/TreeActions';
import Node from 'components/Node';
import { generateData } from 'utils/Tree';

const getTreeState = () => {
  console.log({
    tree: TreeStore.getTree()
  });
  return {
    tree: TreeStore.getTree()
  };
};

class App extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);

    this.state = getTreeState();
  }

  componentDidMount() {
    TreeStore.listen(this._onChange);

    TreeActions.receiveChildren(generateData([1,2,3,4,5,6,7,8,9]));
  }

  componentWillUnmount() {
    TreeStore.unlisten(this._onChange);
  }

  _onChange() {
    this.setState(getTreeState());
  }

  render() {
    const { tree } = this.state;
    const rootNode = tree[0];

    return (
      <div>
        <Node {...rootNode} tree={tree} />
      </div>
    );
  }
}

export default App;

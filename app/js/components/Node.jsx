'use strict';

import React, { Component } from 'react';
import TreeActions from 'actions/TreeActions';

class Node extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const props = this.props;
    const { id, toggled, childIds, loading } = props;

    /**
     * Загружаем данные, если их нет.
     * Если в пропсах нет свойства 'loading', то мы еще не грузили
     *
     * Либо просто открываем/закрываем детей.
     */
    if (childIds && !('loading' in props)) {
      TreeActions.fetchChildren(id, childIds);
    } else {
      TreeActions.updateChild(id, { toggled: !toggled });
    }
  }

  render() {
    const { tree, id, childIds, title, toggled, loading } = this.props;

    let children, button, loader;

    /**
     * Если есть дети и это не рутовый элемент
     */
    if (childIds && id !== 0) {
      button = <button onClick={this.handleClick}>{toggled ? 'close' : 'open'}</button>;
    }

    if (toggled) {
      if (loading) {
        children = <div>loading...</div>;
      } else {
        children = childIds.map(child =>
          <Node key={child} {...tree[child]} tree={tree} />
        );
      }
    }

    return (
      <li>
        {button}
        <div>{title}</div>
        <ul>{children}</ul>
      </li>
    );
  }
};

export default Node;

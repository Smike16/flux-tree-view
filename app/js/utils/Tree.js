'use strict';

export function generateData(ids) {
  return ids.reduce((data, item) => {
    data[item] = {
      id: item,
      title: `Title ${(Math.random() * 1000).toFixed()}`,
      childIds: [1, 2, 3, 4, 5].map(item => (item * Math.random() * 1000).toFixed())
    };

    return data;
  }, {});
}

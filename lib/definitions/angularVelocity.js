var angularVelocity;

angularVelocity = {
  // 'deg/s': {
  //   name: {
  //     singular: 'degree per second'
  //   , plural: 'degrees per second'
  //   }
  // , to_anchor: 1
  // },
  // 'deg/min': {
  //   name: {
  //     singular: 'degree per minute'
  //   , plural: 'degrees per minutes'
  //   }
  // , to_anchor: 0.016666667
  // }
};

module.exports = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg/s'
    , ratio: 1
    }
  }
};

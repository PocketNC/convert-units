var metric
  , imperial;

metric = {
  'mm/s': {
    name: {
      singular: "Millimeter per second",
      plural: "Millimeters per second",
      plural_2: "Millimeters / second"
    },
    to_anchor: 0.0036
  },
  'mm/min': {
    name: {
      singular: "Millimeter per minute",
      plural: "Millimeters per minute",
      plural_2: "Millimeters / minute"
    },
    to_anchor: 0.00006
  },
  'cm/s': {
    name: {
      singular: "Centimeter per minute",
      plural: "Centimeters per minute",
      plural_2: "Centimeters / minute"
    },
    to_anchor: 0.036
  },
  'cm/min': {
    name: {
      singular: "Centimeter per minute",
      plural: "Centimeter per minute",
      plural_2: "Centimeters / minute"
    },
    to_anchor: 0.0006
  },
  'm/s': {
    name: {
      singular: 'Metre per second'
    , plural: 'Metres per second'
    , plural_2: 'Metres / second'
    }
  , to_anchor: 3.6
  },
  'm/min': {
    name: {
      singular: 'Metre per minute'
    , plural: 'Metres per minute'
    , plural_2: 'Metres / minute'
    }
  , to_anchor: 0.06
  }
, 'km/h': {
    name: {
      singular: 'Kilometre per hour'
    , plural: 'Kilometres per hour'
    }
  , to_anchor: 1
  }
}

  imperial = {
    'in/s': {
      name: {
        singular: "Inch per second",
        plural: "Inches per second",
        plural_2: "Inches / second"
      },
      to_anchor: 0.0568182
    },
    'in/min': {
      name: {
        singular: "Inch per minute",
        plural: "Inches per minute",
        plural_2: "Inches / minute",
      },
      to_anchor: 0.00094697
    },
    'm/h': {
      name: {
        singular: 'Mile per hour'
      , plural: 'Miles per hour'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Knot'
      , plural: 'Knots'
      }
    , to_anchor: 1.150779
    }
  , 'ft/s': {
      name: {
        singular: 'Foot per second'
      , plural: 'Feet per second'
      , plural_2: 'Feet / second'
      }
    , to_anchor: 0.681818
      }
    , 'ft/min': {
      name: {
        singular: 'Foot per minute'
      , plural: 'Feet per minute'
      , plural_2: 'Feet / minute'
      }
    , to_anchor: 0.0113636
      }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'm/h'
    , ratio: 1.609344
    }
  }
};

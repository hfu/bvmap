export const skeletonLayers = [
  {
    id: "background",
    type: "background",
    paint: {
      "background-color": "rgba(255,255,255,1)"
    }
  },
  {
    id: "行政区画",
    type: "fill",
    source: "v",
    "source-layer": "AdmArea",
    paint: {
      "fill-color": "rgba(255,255,255,0)"
    }
  },
  {
    id: "水域",
    maxzoom: 17,
    type: "fill",
    source: "v",
    "source-layer": "WA",
    paint: {
      "fill-color": "rgba(0,0,0,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "地形表記面",
    type: "fill",
    source: "v",
    maxzoom: 17,
    "source-layer": "TpgphArea",
    paint: {
      "fill-color": "rgba(0,0,0,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "海岸線",
    type: "line",
    source: "v",
    "source-layer": "Cstline",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "河川_線",
    type: "line",
    source: "v",
    "source-layer": "RvrCL",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "水部表記線polygon",
    type: "fill",
    source: "v",
    "source-layer": "WRltLine",
    filter: [
      "==",
      [
        "geometry-type"
      ],
      "Polygon"
    ],
    paint: {
      "fill-color": "rgba(255,255,255,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "水部表記線line",
    type: "line",
    source: "v",
    "source-layer": "WRltLine",
    filter: [
      "==",
      [
        "geometry-type"
      ],
      "LineString"
    ],
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "水部表記線point",
    type: "symbol",
    source: "v",
    "source-layer": "WRltLine",
    filter: [
      "==",
      [
        "geometry-type"
      ],
      "Point"
    ],
    layout: {
      "icon-allow-overlap": true,
      "icon-image": "流水方向",
      "icon-size": 1.2,
      "icon-rotate": [
        "get",
        "vt_angle"
      ],
      "icon-rotation-alignment": "map"
    }
  },
  {
    id: "地形表記面2",
    type: "fill",
    source: "v",
    "source-layer": "TpgphArea",
    minzoom: 17,
    filter: [
      "in",
      [
        "get",
        "vt_flag17"
      ],
      [
        "literal",
        [
          1,
          2
        ]
      ]
    ],
    paint: {
      "fill-color": "rgba(0,0,0,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "水涯線",
    type: "line",
    source: "v",
    "source-layer": "WL",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "行政区画界線",
    type: "line",
    source: "v",
    "source-layer": "AdmBdry",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "等高線",
    type: "line",
    source: "v",
    "source-layer": "Cntr",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "等高線数値部",
    type: "symbol",
    source: "v",
    "source-layer": "Cntr",
    filter: [
      "==",
      [
        "get",
        "vt_code"
      ],
      7352
    ],
    layout: {
      "text-allow-overlap": true,
      "text-ignore-placement": true,
      "symbol-placement": "line-center",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-size": 10,
      "text-font": [
        "NotoSansJP-Regular"
      ],
      "text-max-angle": 360,
      "text-field": [
        "get",
        "vt_alti"
      ]
    },
    paint: {
      "text-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "等深線",
    type: "line",
    source: "v",
    "source-layer": "Isbt",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "等深線数値部",
    type: "symbol",
    source: "v",
    "source-layer": "Isbt",
    filter: [
      "==",
      [
        "get",
        "vt_code"
      ],
      7372
    ],
    layout: {
      "text-allow-overlap": true,
      "text-ignore-placement": true,
      "symbol-placement": "line-center",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-size": 13,
      "text-font": [
        "NotoSansJP-Regular"
      ],
      "text-max-angle": 360,
      "text-field": [
        "get",
        "vt_depth"
      ]
    },
    paint: {
      "text-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "地形表記線",
    type: "line",
    source: "v",
    "source-layer": "TpgphLine",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "水部構造物面",
    type: "fill",
    source: "v",
    "source-layer": "WStrA",
    paint: {
      "fill-color": "rgba(0,0,0,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "水部構造物線",
    type: "line",
    source: "v",
    "source-layer": "WStrL",
    maxzoom: 17,
    filter: [
      "any",
      [
        "!",
        [
          "has",
          "vt_flag17"
        ]
      ],
      [
        "in",
        [
          "get",
          "vt_flag17"
        ],
        [
          "literal",
          [
            0,
            1
          ]
        ]
      ]
    ],
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "水部構造物線2",
    type: "line",
    source: "v",
    "source-layer": "WStrL",
    minzoom: 17,
    filter: [
      "in",
      [
        "get",
        "vt_flag17"
      ],
      [
        "literal",
        [
          1,
          2
        ]
      ]
    ],
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "道路_線",
    type: "line",
    source: "v",
    "source-layer": "RdCL",
    maxzoom: 17,
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "道路_線2",
    type: "line",
    source: "v",
    "source-layer": "RdCL",
    minzoom: 17,
    filter: [
      "all",
      [
        "in",
        [
          "get",
          "vt_flag17"
        ],
        [
          "literal",
          [
            1,
            2
          ]
        ]
      ]
    ],
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "鉄道_線",
    type: "line",
    source: "v",
    "source-layer": "RailCL",
    maxzoom: 17,
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "鉄道_線2",
    type: "line",
    source: "v",
    "source-layer": "RailCL",
    minzoom: 17,
    filter: [
      "all",
      [
        "in",
        [
          "get",
          "vt_flag17"
        ],
        [
          "literal",
          [
            1,
            2
          ]
        ]
      ]
    ],
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "建築物_外周線",
    type: "line",
    source: "v",
    "source-layer": "BldA",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "道路縁",
    minzoom: 17,
    type: "line",
    source: "v",
    "source-layer": "RdEdg",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "道路構成線",
    minzoom: 17,
    type: "line",
    source: "v",
    "source-layer": "RdCompt",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "軌道_線",
    minzoom: 17,
    type: "line",
    source: "v",
    "source-layer": "RailTrCL",
    layout: {
      "line-sort-key": [
        "get",
        "vt_drworder"
      ]
    },
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "特定地区界",
    type: "line",
    source: "v",
    "source-layer": "SpcfArea",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "構造物面",
    type: "fill",
    source: "v",
    "source-layer": "StrctArea",
    paint: {
      "fill-color": "rgba(0,0,0,0)",
      "fill-outline-color": "rgba(0,0,0,1)"
    }
  },
  {
    id: "構造物面の外周線",
    type: "line",
    source: "v",
    "source-layer": "StrctArea",
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  },
  {
    id: "構造物線",
    type: "line",
    source: "v",
    "source-layer": "StrctLine",
    minzoom: 17,
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  }
];

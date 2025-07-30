export const colorfulLayers = [
  {
    id: "background",
    type: "background",
    paint: {
      "background-color": [
        "step",
        ["zoom"],
        "#eeeeee",
        17,
        "#FFFFFF"
      ]
    }
  },
  {
    id: "行政区画",
    type: "fill",
    source: "v",
    "source-layer": "AdmArea",
    paint: {
      "fill-color": "#eeeeee"
    }
  },
  {
    id: "等高線",
    type: "line",
    source: "v",
    "source-layer": "Cntr",
    paint: {
      "line-color": "#8B4513",
      "line-width": 1
    }
  },
  {
    id: "水域",
    maxzoom: 17,
    type: "fill",
    source: "v",
    "source-layer": "WA",
    paint: {
      "fill-color": "#ADD8E6"
    }
  },
  {
    id: "地形表記面",
    type: "fill",
    source: "v",
    "source-layer": "TpgphArea",
    paint: {
      "fill-color": "#E0E0E0",
      "fill-outline-color": "#B0B0B0"
    }
  },
  {
    id: "海岸線",
    type: "line",
    source: "v",
    "source-layer": "Cstline",
    paint: {
      "line-color": "#000000",
      "line-width": 1
    }
  },
  {
    id: "河川_線",
    type: "line",
    source: "v",
    "source-layer": "RvrCL",
    paint: {
      "line-color": "#87CEEB",
      "line-width": 1
    }
  },
  {
    id: "道路_線",
    type: "line",
    source: "v",
    "source-layer": "RdCL",
    paint: {
      "line-color": [
        "step",
        ["zoom"],
        "#FFD700",
        16,
        "#FFFACD"
      ],
      "line-width": 1
    }
  },
  {
    id: "鉄道_線",
    type: "line",
    source: "v",
    "source-layer": "RailCL",
    paint: {
      "line-color": "#8B0000",
      "line-width": 1
    }
  },
  {
    id: "建築物",
    type: "fill-extrusion",
    source: "v",
    "source-layer": "BldA",
    paint: {
      "fill-extrusion-color": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12, "#FFE4B5",
        16, "rgba(200, 200, 200, 1)"
      ],
      "fill-extrusion-height": 3,
      "fill-extrusion-base": 0
    }
  },
  {
    id: "水涯線",
    type: "line",
    source: "v",
    "source-layer": "WL",
    paint: {
      "line-color": "#4682B4",
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
      ["geometry-type"],
      "Polygon"
    ],
    paint: {
      "fill-color": "#ADD8E6",
      "fill-outline-color": "#0000FF"
    }
  },
  {
    id: "水部表記線line",
    type: "line",
    source: "v",
    "source-layer": "WRltLine",
    filter: [
      "==",
      ["geometry-type"],
      "LineString"
    ],
    paint: {
      "line-color": "#0000FF",
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
      ["geometry-type"],
      "Point"
    ],
    layout: {
      "icon-image": "流水方向",
      "icon-size": 1.2
    }
  },
  {
    id: "等高線数値部",
    type: "symbol",
    source: "v",
    "source-layer": "Cntr",
    filter: [
      "==",
      ["get", "vt_code"],
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
      "text-field": ["get", "vt_alti"]
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
      "line-color": "#4682B4",
      "line-width": 1
    }
  },
  {
    id: "等深線数値部",
    type: "symbol",
    source: "v",
    "source-layer": "Isbt",
    layout: {
      "text-field": "{vt_depth}",
      "text-size": 10,
      "text-font": [
        "NotoSansJP-Regular"
      ]
    },
    paint: {
      "text-color": "#0000FF"
    }
  },
  {
    id: "道路縁",
    type: "line",
    source: "v",
    "source-layer": "RdEdg",
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
    paint: {
      "line-color": "#8B0000",
      "line-width": 1
    }
  },
  {
    id: "構造物面",
    type: "fill",
    source: "v",
    "source-layer": "StrctArea",
    paint: {
      "fill-color": "#D3D3D3",
      "fill-outline-color": "#A9A9A9"
    }
  },
  {
    id: "構造物線",
    type: "line",
    source: "v",
    "source-layer": "StrctLine",
    paint: {
      "line-color": "#A9A9A9",
      "line-width": 1
    }
  },
  {
    id: "送電線",
    type: "line",
    source: "v",
    "source-layer": "PwrTrnsmL",
    paint: {
      "line-color": "#FFD700",
      "line-width": 1
    }
  },
  {
    id: "注記",
    type: "symbol",
    source: "v",
    "source-layer": "Anno",
    layout: {
      "text-field": "{vt_text}",
      "text-size": 12,
      "text-font": [
        "NotoSansJP-Regular"
      ]
    },
    paint: {
      "text-color": "#333333"
    }
  },
  {
    id: "注記2",
    type: "symbol",
    source: "v",
    "source-layer": "Anno",
    layout: {
      "text-field": "{vt_text}",
      "text-size": 10,
      "text-font": [
        "NotoSansJP-Regular"
      ]
    },
    paint: {
      "text-color": "#444444"
    }
  },
  {
    id: "注記3",
    type: "symbol",
    source: "v",
    "source-layer": "Anno",
    layout: {
      "text-field": "{vt_text}",
      "text-size": 8,
      "text-font": [
        "NotoSansJP-Regular"
      ]
    },
    paint: {
      "text-color": "#555555"
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
    id: "道路構成線",
    type: "line",
    source: "v",
    "source-layer": "RdCompt",
    paint: {
      "line-color": "#FFD700",
      "line-width": 1
    }
  },
  {
    id: "軌道_線",
    type: "line",
    source: "v",
    "source-layer": "RailTrCL",
    paint: {
      "line-color": "#8B0000",
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
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
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
    id: "水部構造物線2",
    type: "line",
    source: "v",
    "source-layer": "WStrL",
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
    paint: {
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1
    }
  }
];

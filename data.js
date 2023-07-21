var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.518967665485139,
        "pitch": 0.2134842517906268,
        "fov": 1.5732443059885721
      },
      "linkHotspots": [
        {
          "yaw": -0.7445552502413868,
          "pitch": 0.21343229880858416,
          "rotation": 5.497787143782138,
          "target": "1-unterm-baum"
        },
        {
          "yaw": 0.45999723455970276,
          "pitch": 0.6164499284765341,
          "rotation": 0.7853981633974483,
          "target": "2-schirm-bar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.978557049430119,
          "pitch": 0.47265254503788867,
          "title": "Aktuelles",
          "text": "Text"
        },
        {
          "yaw": 0.6207546960049335,
          "pitch": 0.5228210006361245,
          "title": "Da entlang!",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-unterm-baum",
      "name": "Unterm Baum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.29442864689415416,
        "pitch": 0.026925941667283126,
        "fov": 1.5732443059885721
      },
      "linkHotspots": [
        {
          "yaw": 0.49220285126801144,
          "pitch": 0.31956522117277864,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": -1.2149071537689018,
          "pitch": 0.30816591038337293,
          "rotation": 0,
          "target": "3-seitliche-tische"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6639319821345602,
          "pitch": 0.034356084785892804,
          "title": "Essen",
          "text": "Text"
        },
        {
          "yaw": -2.420761620832394,
          "pitch": 0.014622460555216321,
          "title": "Toiletten",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-schirm-bar",
      "name": "Schirm-Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9665960665377336,
          "pitch": 0.30337620844323965,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": 0.03415608192517361,
          "pitch": 0.1968939205098792,
          "rotation": 0,
          "target": "4-schirm-mitte"
        },
        {
          "yaw": -1.515334472891972,
          "pitch": 0.3967774758975189,
          "rotation": 5.497787143782138,
          "target": "3-seitliche-tische"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.822321149552506,
          "pitch": 0.011044920175674378,
          "title": "Zu Trinken bestellen",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-seitliche-tische",
      "name": "Seitliche Tische",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.07435066840761806,
        "pitch": 0.0019232815476595277,
        "fov": 1.5732443059885721
      },
      "linkHotspots": [
        {
          "yaw": 0.902233237146806,
          "pitch": 0.38936178310858693,
          "rotation": 0.7853981633974483,
          "target": "2-schirm-bar"
        },
        {
          "yaw": -0.2568521535263919,
          "pitch": 0.1721284475965401,
          "rotation": 0,
          "target": "5-aussicht"
        },
        {
          "yaw": 2.6418590258795653,
          "pitch": 0.31971581136441607,
          "rotation": 0,
          "target": "1-unterm-baum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-schirm-mitte",
      "name": "Schirm-Mitte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07807489205437079,
          "pitch": 0.1566295348057487,
          "rotation": 0,
          "target": "2-schirm-bar"
        },
        {
          "yaw": -3.1284170242457083,
          "pitch": 0.20948152022632982,
          "rotation": 0,
          "target": "5-aussicht"
        },
        {
          "yaw": 0.8698272311730442,
          "pitch": 0.16015008127514108,
          "rotation": 7.0685834705770345,
          "target": "3-seitliche-tische"
        },
        {
          "yaw": -0.44956421480247144,
          "pitch": 0.13004687148522365,
          "rotation": 5.497787143782138,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-aussicht",
      "name": "Aussicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.6468003306037993,
        "pitch": -0.020881342517474977,
        "fov": 1.5732443059885721
      },
      "linkHotspots": [
        {
          "yaw": 0.19598104340289701,
          "pitch": 0.12199805451605172,
          "rotation": 0,
          "target": "4-schirm-mitte"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.023161875038392,
          "pitch": 0.21392459913219675,
          "title": "Parkplatz",
          "text": "Text"
        },
        {
          "yaw": 1.8513326228307934,
          "pitch": -0.09379895608540245,
          "title": "Affenbaum",
          "text": "Text"
        },
        {
          "yaw": -1.9257273614048813,
          "pitch": -0.22010594607683664,
          "title": "Deutsches Weintor",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

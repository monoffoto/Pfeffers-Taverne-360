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
          "yaw": -0.7445550871856881,
          "pitch": 0.21343232927226552,
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
          "text": "Aktuelle Highlights der Speisekarte&nbsp;"
        },
        {
          "yaw": 0.6207546804948798,
          "pitch": 0.5228210356643679,
          "title": "Da entlang!",
          "text": "Bitte beachte: Selbstbedienung"
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
          "yaw": -1.6639319631368092,
          "pitch": 0.03435607990666867,
          "title": "Essen",
          "text": "Selbstbedienung.<br>Bitte Geschirr hier wieder zurück!"
        },
        {
          "yaw": -2.42076163965055,
          "pitch": 0.014622458410162409,
          "title": "Toiletten",
          "text": "Nur für Gäste!<br>Kein öffentliches WC!"
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
          "yaw": 1.9665960690515316,
          "pitch": 0.303376205931988,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": 0.034156091241928976,
          "pitch": 0.19689389786705647,
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
          "yaw": -2.8223211829222805,
          "pitch": 0.011044882481602514,
          "title": "Zu Trinken bestellen",
          "text": "Empfehlung: B-Fresh !<br><div>Leere Gläserer bitte hier zurück !</div>"
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
          "yaw": 0.9022332229344023,
          "pitch": 0.38936179734052523,
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
          "text": "Genug Platz für alle!"
        },
        {
          "yaw": 1.8513326228307934,
          "pitch": -0.09379895608540245,
          "title": "Affenbaum",
          "text": "Text"
        },
        {
          "yaw": -1.9257028514363341,
          "pitch": -0.22180553627704214,
          "title": "Deutsches Weintor",
          "text": "Immer mit der Ruhe, es rennt nicht weg ;)"
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

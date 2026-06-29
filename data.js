var APP_DATA = {
  "scenes": [
    {
      "id": "0-3rd_floor_foyer",
      "name": "3rd_floor_foyer",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.254831706761232,
        "pitch": 0.223885845919769,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.1093478972423867,
          "pitch": 0.20780756645136478,
          "rotation": 0,
          "target": "1-stacks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0,
          "pitch": 0.0,
          "title": "Watch Video",
          "text": "<iframe width='100%' height='200' src='https://www.youtube.com/embed/G51MmepmAQA?si=FHc5dpqzIkPiTpY_' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
        }
      ]
    },
    {
      "id": "1-stacks",
      "name": "stacks",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.08513912071843421,
        "pitch": 0.21663855426846723,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.0273447996503986,
          "pitch": 0.18638862239372678,
          "rotation": 0,
          "target": "2-dsc_entry"
        },
        {
          "yaw": -3.0912811892228884,
          "pitch": 0.15062072529518744,
          "rotation": 0,
          "target": "0-3rd_floor_foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dsc_entry",
      "name": "dsc_entry",
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
        }
      ],
      "faceSize": 672,
      "initialViewParameters": {
        "yaw": -0.8667934295802642,
        "pitch": 0.3211785197204229,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.93074936850945,
          "pitch": 0.19109062217176742,
          "rotation": 0,
          "target": "1-stacks"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

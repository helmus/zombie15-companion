angular.module('myApp').factory('scenarios', function () {
  'use strict';

  var scenarios = [
    {
      "id": 1,
      "tiles": [
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "17b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 5,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 4,
          "tile": {
            "id": "14a",
            "roads": [
              true,
              false,
              false,
              false
            ]
          }
        },
        {
          "row": 4,
          "column": 3,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "13b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 3,
          "column": 6,
          "tile": {
            "id": "23b",
            "roads": [
              true,
              false,
              true,
              false
            ]
          }
        },
        {
          "row": 3,
          "column": 5,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 4,
          "tile": {
            "id": "26b",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "9b",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "19b",
            "roads": [
              true,
              false,
              false,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "12b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "1b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "15b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "16b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "24a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 4,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        }
      ]
    },
    {
      "id": 2,
      "tiles": [
        {
          "row": 0,
          "column": 4,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 4,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "24a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "16b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "15b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "1b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "12b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "19b",
            "roads": [
              true,
              false,
              false,
              true
            ]
          }
        },
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "9b",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 4,
          "tile": {
            "id": "26b",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 3,
          "column": 5,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 6,
          "tile": {
            "id": "23b",
            "roads": [
              true,
              false,
              true,
              false
            ]
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "13b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 4,
          "column": 3,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 4,
          "tile": {
            "id": "14a",
            "roads": [
              true,
              false,
              false,
              false
            ]
          }
        },
        {
          "row": 4,
          "column": 5,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "17b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 3
          }
        }
      ]
    },
    {
      "id": 3,
      "tiles": [
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 4,
          "tile": {
            "id": "14b",
            "roads": [
              false,
              false,
              true,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "17b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "18b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "6b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "15b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "16b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "20b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 7,
          "tile": {
            "id": "7a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "13b",
            "roads": [
              true,
              true,
              false,
              false
            ]
          }
        },
        {
          "row": 3,
          "column": 4,
          "tile": {
            "id": "5b",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 3,
          "column": 5,
          "tile": {
            "id": "4b",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 3,
          "column": 6,
          "tile": {
            "id": "12b",
            "roads": [
              true,
              true,
              false,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 3,
          "tile": {
            "id": "1b",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 4,
          "column": 4,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 5,
          "tile": {
            "id": "3b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ]
          }
        }
      ]
    }
  ];
  window.scenarios = scenarios;
  return scenarios;
});
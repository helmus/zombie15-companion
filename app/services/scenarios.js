angular.module('myApp').factory('scenarios', function () {
  'use strict';

  var scenarios = [
    {
      "id": 1,
      "tiles": [
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
        }
      ],
      "nextTiles": []
    },
    {
      "id": 2,
      "tiles": [
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
        }
      ],
      "nextTiles": []
    },
    {
      "id": 3,
      "tiles": [
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
        }
      ],
      "nextTiles": []
    },
    {
      "id": 4,
      "tiles": [
        {
          "row": 4,
          "column": 2,
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
          "column": 3,
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
          "column": 4,
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
          "row": 3,
          "column": 4,
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
          "column": 3,
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
          "column": 2,
          "tile": {
            "id": "6b",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "7a",
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
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 1,
          "tile": {
            "id": "11a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 5,
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
          "row": 2,
          "column": 7,
          "tile": {
            "id": "13a",
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
          "row": 1,
          "column": 3,
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
            "rotation": 1
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
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 1,
          "tile": {
            "id": "17b",
            "roads": [
              true,
              true,
              false,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "18b",
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
          "row": 4,
          "column": 5,
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
          "column": 6,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 4,
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
          "row": 1,
          "column": 5,
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
          "column": 5,
          "tile": {
            "id": "27a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 1,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ],
            "rotation": 0
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 5,
      "tiles": [
        {
          "row": 2,
          "column": 5,
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
          "row": 3,
          "column": 6,
          "tile": {
            "id": "3b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "9b",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 4,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 4,
          "column": 1,
          "tile": {
            "id": "11a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 2,
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
          "column": 2,
          "tile": {
            "id": "13a",
            "roads": [
              true,
              false,
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
          "row": 5,
          "column": 3,
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
          "row": 5,
          "column": 4,
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
          "row": 3,
          "column": 4,
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
          "column": 2,
          "tile": {
            "id": "18a",
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
          "column": 4,
          "tile": {
            "id": "19b",
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
          "row": 3,
          "column": 3,
          "tile": {
            "id": "21a",
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
          "row": 4,
          "column": 5,
          "tile": {
            "id": "23b",
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
          "row": 3,
          "column": 5,
          "tile": {
            "id": "24a",
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
          "row": 2,
          "column": 3,
          "tile": {
            "id": "25a",
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
          "column": 7,
          "tile": {
            "id": "26a",
            "roads": [
              false,
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
            "id": "27a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "28a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 6,
      "tiles": [
        {
          "row": 3,
          "column": 3,
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
          "row": 2,
          "column": 6,
          "tile": {
            "id": "3a",
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
          "row": 1,
          "column": 2,
          "tile": {
            "id": "4a",
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
            "id": "5a",
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
          "column": 6,
          "tile": {
            "id": "6a",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 6,
          "tile": {
            "id": "7a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 5,
          "column": 6,
          "tile": {
            "id": "8b",
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
          "row": 2,
          "column": 3,
          "tile": {
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 5,
          "column": 4,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 7,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ]
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "12a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 7,
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
          "row": 5,
          "column": 3,
          "tile": {
            "id": "16a",
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
          "row": 4,
          "column": 5,
          "tile": {
            "id": "17a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 3,
          "tile": {
            "id": "18a",
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
          "row": 1,
          "column": 4,
          "tile": {
            "id": "19b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "21b",
            "roads": [
              true,
              true,
              false,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "22a",
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
          "row": 1,
          "column": 3,
          "tile": {
            "id": "23a",
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
          "row": 4,
          "column": 4,
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
          "row": 5,
          "column": 7,
          "tile": {
            "id": "25a",
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
          "row": 0,
          "column": 2,
          "tile": {
            "id": "27b",
            "roads": [
              false,
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
            "id": "28a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 3,
          "column": 7,
          "tile": {
            "id": "29a",
            "roads": [
              null,
              true,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 5,
          "column": 5,
          "tile": {
            "id": "30a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 7,
      "tiles": [
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "3b",
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
          "column": 4,
          "tile": {
            "id": "4b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 3,
          "column": 6,
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
          "row": 4,
          "column": 1,
          "tile": {
            "id": "7a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 1,
          "column": 4,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ]
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ]
          }
        },
        {
          "row": 4,
          "column": 3,
          "tile": {
            "id": "11b",
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
          "column": 3,
          "tile": {
            "id": "14a",
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
          "column": 6,
          "tile": {
            "id": "15a",
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
          "column": 7,
          "tile": {
            "id": "16b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 2,
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
          "row": 2,
          "column": 7,
          "tile": {
            "id": "18b",
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
          "column": 7,
          "tile": {
            "id": "19b",
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
          "row": 4,
          "column": 7,
          "tile": {
            "id": "20b",
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
          "row": 4,
          "column": 4,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
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
          "row": 1,
          "column": 3,
          "tile": {
            "id": "23a",
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
          "column": 8,
          "tile": {
            "id": "24b",
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
          "row": 2,
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
          "row": 1,
          "column": 5,
          "tile": {
            "id": "27b",
            "roads": [
              false,
              false,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "28b",
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
          "row": 2,
          "column": 3,
          "tile": {
            "id": "29a",
            "roads": [
              null,
              true,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "30a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 5,
          "tile": {
            "id": "31b",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 8,
      "tiles": [
        {
          "row": 1,
          "column": 1,
          "tile": {
            "id": "1a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "2a",
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
          "row": 2,
          "column": 4,
          "tile": {
            "id": "3a",
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
            "id": "4a",
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
          "column": 3,
          "tile": {
            "id": "5a",
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
            "id": "6a",
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
          "column": 8,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 6,
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
          "row": 1,
          "column": 0,
          "tile": {
            "id": "10a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "12b",
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
          "column": 7,
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
          "column": 7,
          "tile": {
            "id": "14b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 2,
          "column": 1,
          "tile": {
            "id": "16a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "18a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "19a",
            "roads": [
              true,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "20a",
            "roads": [
              false,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "21a",
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
          "column": 1,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 4,
          "column": 1,
          "tile": {
            "id": "23a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 1,
          "column": 4,
          "tile": {
            "id": "24a",
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
          "column": 2,
          "tile": {
            "id": "25b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 2,
          "column": 7,
          "tile": {
            "id": "26a",
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
          "row": 4,
          "column": 2,
          "tile": {
            "id": "30b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 9,
      "tiles": [
        {
          "row": 0,
          "column": 0,
          "tile": {
            "id": "23a",
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
          "row": 0,
          "column": 1,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 0,
          "column": 2,
          "tile": {
            "id": "7b",
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
          "row": 0,
          "column": 3,
          "tile": {
            "id": "1a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 0,
          "column": 4,
          "tile": {
            "id": "16a",
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
          "column": 0,
          "tile": {
            "id": "30b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 1,
          "tile": {
            "id": "12b",
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
          "row": 1,
          "column": 2,
          "tile": {
            "id": "13b",
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
          "column": 3,
          "tile": {
            "id": "2a",
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
          "row": 1,
          "column": 4,
          "tile": {
            "id": "10a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "22b",
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
          "row": 1,
          "column": 6,
          "tile": {
            "id": "21b",
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
          "column": 2,
          "tile": {
            "id": "8b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "17a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "20b",
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
          "column": 5,
          "tile": {
            "id": "25b",
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
          "column": 6,
          "tile": {
            "id": "6a",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 3,
          "column": 1,
          "tile": {
            "id": "18b",
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
          "row": 3,
          "column": 2,
          "tile": {
            "id": "14b",
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
          "row": 3,
          "column": 3,
          "tile": {
            "id": "3a",
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
          "column": 4,
          "tile": {
            "id": "26a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 5,
          "tile": {
            "id": "29a",
            "roads": [
              null,
              true,
              true,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
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
          "row": 4,
          "column": 1,
          "tile": {
            "id": "27a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "24a",
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
          "row": 4,
          "column": 3,
          "tile": {
            "id": "15a",
            "roads": [
              true,
              true,
              false,
              false
            ]
          }
        },
        {
          "row": 4,
          "column": 4,
          "tile": {
            "id": "4a",
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
          "column": 5,
          "tile": {
            "id": "5a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 10,
      "tiles": [
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "20b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 1,
          "column": 4,
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
          "column": 5,
          "tile": {
            "id": "6b",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 1,
          "column": 6,
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
          "row": 1,
          "column": 7,
          "tile": {
            "id": "17b",
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
          "column": 2,
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
          "row": 2,
          "column": 3,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
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
          "row": 2,
          "column": 5,
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
          "row": 2,
          "column": 6,
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
          "column": 7,
          "tile": {
            "id": "7a",
            "roads": [
              true,
              false,
              false,
              false
            ]
          }
        },
        {
          "row": 3,
          "column": 1,
          "tile": {
            "id": "31a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 3,
          "column": 3,
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
          "row": 3,
          "column": 4,
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
          "column": 6,
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
          "row": 3,
          "column": 7,
          "tile": {
            "id": "24b",
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
          "row": 4,
          "column": 2,
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
          "row": 4,
          "column": 3,
          "tile": {
            "id": "13b",
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
          "column": 4,
          "tile": {
            "id": "14b",
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
          "row": 4,
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
          "row": 4,
          "column": 6,
          "tile": {
            "id": "32a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 3
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 11,
      "tiles": [
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "24b",
            "roads": [
              true,
              false,
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
            "id": "18a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 7,
          "tile": {
            "id": "25b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 8,
          "tile": {
            "id": "19b",
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
            "id": "15b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "4a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "5a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 7,
          "tile": {
            "id": "6a",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 2,
          "column": 8,
          "tile": {
            "id": "16a",
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
          "row": 3,
          "column": 4,
          "tile": {
            "id": "27a",
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
          "column": 5,
          "tile": {
            "id": "23b",
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
          "row": 3,
          "column": 6,
          "tile": {
            "id": "13b",
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
          "column": 4,
          "tile": {
            "id": "14b",
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
          "row": 4,
          "column": 5,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 7,
          "tile": {
            "id": "9b",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 4,
          "column": 8,
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
          "row": 5,
          "column": 1,
          "tile": {
            "id": "32a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 5,
          "column": 2,
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
          "row": 5,
          "column": 3,
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
          "row": 5,
          "column": 4,
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
          "row": 5,
          "column": 5,
          "tile": {
            "id": "7b",
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
          "row": 5,
          "column": 6,
          "tile": {
            "id": "8b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 5,
          "column": 7,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 5,
          "column": 8,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ]
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 12,
      "tiles": [
        {
          "row": 1,
          "column": 3,
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
          "row": 1,
          "column": 4,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "3b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "4b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
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
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 5,
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
          "row": 4,
          "column": 4,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "10a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 0,
          "column": 3,
          "tile": {
            "id": "11a",
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
          "row": 4,
          "column": 3,
          "tile": {
            "id": "12a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 0,
          "column": 5,
          "tile": {
            "id": "13a",
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
          "column": 2,
          "tile": {
            "id": "17b",
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
          "row": 1,
          "column": 1,
          "tile": {
            "id": "18b",
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
          "row": 3,
          "column": 6,
          "tile": {
            "id": "19b",
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
          "row": 3,
          "column": 7,
          "tile": {
            "id": "20b",
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
          "row": 0,
          "column": 4,
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
          "row": 2,
          "column": 1,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "23a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
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
          "column": 7,
          "tile": {
            "id": "25a",
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
          "row": 2,
          "column": 2,
          "tile": {
            "id": "27a",
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
          "row": 4,
          "column": 5,
          "tile": {
            "id": "28b",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "29a",
            "roads": [
              null,
              true,
              true,
              true
            ],
            "rotation": 1
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 13,
      "tiles": [
        {
          "row": 1,
          "column": 3,
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
          "row": 1,
          "column": 4,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
          "column": 5,
          "tile": {
            "id": "3b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "4b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
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
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 5,
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
          "row": 4,
          "column": 4,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "10a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 0,
          "column": 3,
          "tile": {
            "id": "11a",
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
          "row": 4,
          "column": 3,
          "tile": {
            "id": "12a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 3,
          "column": 2,
          "tile": {
            "id": "14b",
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
          "row": 3,
          "column": 1,
          "tile": {
            "id": "15b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "16b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "17a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
          "column": 1,
          "tile": {
            "id": "18b",
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
            "id": "19b",
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
          "row": 3,
          "column": 7,
          "tile": {
            "id": "20b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 0,
          "column": 4,
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
          "row": 2,
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
          "row": 2,
          "column": 2,
          "tile": {
            "id": "27a",
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
          "row": 4,
          "column": 5,
          "tile": {
            "id": "28b",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 1,
          "column": 7,
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
          "row": 2,
          "column": 6,
          "tile": {
            "id": "30a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 0,
          "column": 5,
          "tile": {
            "id": "31a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 2
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 14,
      "tiles": [
        {
          "row": 0,
          "column": 1,
          "tile": {
            "id": "1b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 0,
          "column": 2,
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
          "row": 0,
          "column": 3,
          "tile": {
            "id": "3b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 0,
          "column": 4,
          "tile": {
            "id": "4b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
          "column": 8,
          "tile": {
            "id": "5b",
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
          "column": 7,
          "tile": {
            "id": "6b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "7b",
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
          "row": 0,
          "column": 8,
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
          "row": 2,
          "column": 6,
          "tile": {
            "id": "9a",
            "roads": [
              true,
              true,
              true,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 1,
          "tile": {
            "id": "10a",
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
          "column": 0,
          "tile": {
            "id": "11a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 8,
          "tile": {
            "id": "12b",
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
          "row": 1,
          "column": 4,
          "tile": {
            "id": "13b",
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
          "column": 5,
          "tile": {
            "id": "14b",
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
          "column": 3,
          "tile": {
            "id": "15a",
            "roads": [
              true,
              true,
              false,
              false
            ]
          }
        },
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "16a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 1,
          "column": 2,
          "tile": {
            "id": "17a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 0,
          "column": 0,
          "tile": {
            "id": "18b",
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
          "column": 0,
          "tile": {
            "id": "19b",
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
          "row": 0,
          "column": 5,
          "tile": {
            "id": "20b",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 4,
          "column": 2,
          "tile": {
            "id": "21a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 3,
          "column": 3,
          "tile": {
            "id": "22a",
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
          "column": 6,
          "tile": {
            "id": "23a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 0
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
          "column": 0,
          "tile": {
            "id": "25a",
            "roads": [
              true,
              false,
              false,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 2,
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
          "row": 2,
          "column": 4,
          "tile": {
            "id": "27a",
            "roads": [
              true,
              false,
              true,
              true
            ],
            "rotation": 1
          }
        },
        {
          "row": 3,
          "column": 1,
          "tile": {
            "id": "28a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 1,
          "tile": {
            "id": "29b",
            "roads": [
              false,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "30b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 2
          }
        }
      ],
      "nextTiles": []
    },
    {
      "id": 15,
      "tiles": [
        {
          "row": 0,
          "column": 0,
          "tile": {
            "id": "24b",
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
          "row": 0,
          "column": 1,
          "tile": {
            "id": "16a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 0,
          "column": 2,
          "tile": {
            "id": "17a",
            "roads": [
              false,
              false,
              true,
              true
            ],
            "rotation": 0
          }
        },
        {
          "row": 0,
          "column": 3,
          "tile": {
            "id": "23a",
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
          "column": 0,
          "tile": {
            "id": "21b",
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
          "row": 1,
          "column": 1,
          "tile": {
            "id": "20b",
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
          "row": 1,
          "column": 2,
          "tile": {
            "id": "6b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 3,
          "tile": {
            "id": "25b",
            "roads": [
              false,
              true,
              false,
              true
            ],
            "rotation": 3
          }
        },
        {
          "row": 1,
          "column": 6,
          "tile": {
            "id": "26a",
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
          "column": 7,
          "tile": {
            "id": "13b",
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
          "column": 8,
          "tile": {
            "id": "8a",
            "roads": [
              false,
              false,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 2,
          "tile": {
            "id": "7b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 2,
          "column": 3,
          "tile": {
            "id": "10b",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 0
          }
        },
        {
          "row": 2,
          "column": 4,
          "tile": {
            "id": "18a",
            "roads": [
              true,
              true,
              true,
              false
            ],
            "rotation": 1
          }
        },
        {
          "row": 2,
          "column": 5,
          "tile": {
            "id": "4a",
            "roads": [
              false,
              true,
              false,
              true
            ]
          }
        },
        {
          "row": 2,
          "column": 6,
          "tile": {
            "id": "30b",
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
          "row": 2,
          "column": 7,
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
          "row": 3,
          "column": 2,
          "tile": {
            "id": "19b",
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
          "row": 3,
          "column": 3,
          "tile": {
            "id": "14b",
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
          "row": 3,
          "column": 4,
          "tile": {
            "id": "22a",
            "roads": [
              true,
              false,
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
            "id": "5b",
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
          "row": 3,
          "column": 7,
          "tile": {
            "id": "2b",
            "roads": [
              true,
              false,
              true,
              false
            ],
            "rotation": 2
          }
        },
        {
          "row": 4,
          "column": 6,
          "tile": {
            "id": "12b",
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
          "column": 7,
          "tile": {
            "id": "11b",
            "roads": [
              true,
              false,
              false,
              true
            ],
            "rotation": 0
          }
        }
      ],
      "nextTiles": []
    }
  ];
  window.scenarios = scenarios;
  return scenarios;
});
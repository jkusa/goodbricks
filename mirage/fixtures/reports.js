/**
 * Copyright 2017, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
export default [
  {
    id: 1,
    title: 'Count By Brick',
    createdOn: '1992-08-27 00:00:00',
    updatedOn: '2017-04-28 00:00:00',
    authorId: 'navi_user',
    visualization: {
      type: 'line-chart',
      version: 1,
      metadata: {
        axis: {
          y: {
            series: {
              type: 'dimension',
              config: {}
            }
          }
        }
      }
    },
    request: {
      logicalTable: {
        table: 'mario',
        timeGrain: 'day'
      },
      metrics: [{ metric: 'wins' }, { metric: 'timeSpent' }],
      dimensions: [{ dimension: 'character' }],
      filters: [],
      sort: [
        {
          metric: 'wins',
          direction: 'asc'
        }
      ],
      intervals: [
        {
          end: 'current',
          start: 'P7D'
        }
      ],
      bardVersion: 'v1',
      requestVersion: 'v1'
    }
  },
  {
    id: 2,
    title: 'Top Played Games',
    createdOn: '1992-08-27 00:00:00',
    updatedOn: '2017-04-28 00:00:00',
    authorId: 'navi_user',
    visualization: {
      type: 'line-chart',
      version: 1,
      metadata: {
        axis: {
          y: {
            series: {
              type: 'dimension',
              config: {}
            }
          }
        }
      }
    },
    request: {
      logicalTable: {
        table: 'mario',
        timeGrain: 'day'
      },
      metrics: [{ metric: 'timeSpent' }],
      dimensions: [{ dimension: 'game' }],
      filters: [],
      intervals: [
        {
          end: 'current',
          start: 'P7D'
        }
      ],
      bardVersion: 'v1',
      requestVersion: 'v1'
    }
  },
  {
    id: 4,
    title: 'Coin Counts',
    createdOn: '1992-08-27 00:00:00',
    updatedOn: '2017-04-28 00:00:00',
    authorId: 'navi_user',
    visualization: {
      type: 'line-chart',
      version: 1,
      metadata: {
        axis: {
          y: {
            series: {
              type: 'dimension',
              config: {}
            }
          }
        }
      }
    },
    request: {
      logicalTable: {
        table: 'mario',
        timeGrain: 'day'
      },
      metrics: [{ metric: 'coins' }],
      dimensions: [{ dimension: 'platform' }, { dimension: 'game' }],
      filters: [],
      intervals: [
        {
          end: 'current',
          start: 'P30D'
        }
      ],
      bardVersion: 'v1',
      requestVersion: 'v1'
    }
  },
  {
    "id": "5",
    "visualization": {
      "type": "table",
      "version": 1,
      "metadata": {
        "columns": [
          {
            "type": "dimension",
            "attributes": {
              "name": "part"
            },
            "displayName": "Part Number"
          },
          {
            "type": "metric",
            "displayName": "Brick Count",
            "attributes": {
              "name": "bricks",
              "parameters": {},
              "format": ""
            }
          }
        ]
      }
    },
    "title": "Brick Count",
    "request": {
      "logicalTable": {
        "table": "bricks",
        "timeGrain": "all"
      },
      "metrics": [
        {
          "metric": "bricks"
        }
      ],
      "dimensions": [
        {
          "dimension": "part"
        }
      ],
      "filters": [],
      "having": [],
      "sort": [],
      "intervals": [
        {
          "start": "2019-01-01",
          "end": "2019-01-31"
        }
      ],
      "bardVersion": "v1",
      "requestVersion": "v1"
    }
  }
];

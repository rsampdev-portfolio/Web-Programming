let rawTransactionsData = [
    {
        "date": "2020-01-01T05:00:00.000Z",
        "amount": 9.03,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-01-02T05:00:00.000Z",
        "amount": 86.8,
        "reason": 'savings'
    },
    {
        "date": "2020-01-03T05:00:00.000Z",
        "amount": 1.67,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-04T05:00:00.000Z",
        "amount": 62.94,
        "reason": 'home needs'
    },
    {
        "date": "2020-01-05T05:00:00.000Z",
        "amount": 52.9,
        "reason": 'order out'
    },
    {
        "date": "2020-01-06T05:00:00.000Z",
        "amount": 24.45,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-01-07T05:00:00.000Z",
        "amount": 75.61,
        "reason": 'savings'
    },
    {
        "date": "2020-01-08T05:00:00.000Z",
        "amount": 8.81,
        "reason": 'order out'
    },
    {
        "date": "2020-01-09T05:00:00.000Z",
        "amount": 60.3,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-10T05:00:00.000Z",
        "amount": 70.83,
        "reason": 'order out'
    },
    {
        "date": "2020-01-11T05:00:00.000Z",
        "amount": 39.08,
        "reason": 'home needs'
    },
    {
        "date": "2020-01-12T05:00:00.000Z",
        "amount": 27.24,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-01-13T05:00:00.000Z",
        "amount": 14,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-14T05:00:00.000Z",
        "amount": 12.53,
        "reason": 'savings'
    },
    {
        "date": "2020-01-15T05:00:00.000Z",
        "amount": 49.06,
        "reason": 'home needs'
    },
    {
        "date": "2020-01-16T05:00:00.000Z",
        "amount": 74.46,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-17T05:00:00.000Z",
        "amount": 20.16,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-18T05:00:00.000Z",
        "amount": 9.68,
        "reason": 'savings'
    },
    {
        "date": "2020-01-19T05:00:00.000Z",
        "amount": 4.55,
        "reason": 'savings'
    },
    {
        "date": "2020-01-20T05:00:00.000Z",
        "amount": 94.97,
        "reason": 'order out'
    },
    {
        "date": "2020-01-21T05:00:00.000Z",
        "amount": 61.64,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-01-22T05:00:00.000Z",
        "amount": 62,
        "reason": 'home needs'
    },
    {
        "date": "2020-01-23T05:00:00.000Z",
        "amount": 63.08,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-24T05:00:00.000Z",
        "amount": 7.95,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-01-25T05:00:00.000Z",
        "amount": 41.99,
        "reason": 'order out'
    },
    {
        "date": "2020-01-26T05:00:00.000Z",
        "amount": 66.77,
        "reason": 'order out'
    },
    {
        "date": "2020-01-27T05:00:00.000Z",
        "amount": 11.56,
        "reason": 'savings'
    },
    {
        "date": "2020-01-28T05:00:00.000Z",
        "amount": 84.59,
        "reason": 'savings'
    },
    {
        "date": "2020-01-29T05:00:00.000Z",
        "amount": 10.08,
        "reason": 'home needs'
    },
    {
        "date": "2020-01-30T05:00:00.000Z",
        "amount": 83.7,
        "reason": 'grocery'
    },
    {
        "date": "2020-01-31T05:00:00.000Z",
        "amount": 22.19,
        "reason": 'home needs'
    },
    {
        "date": "2020-02-01T05:00:00.000Z",
        "amount": 79.71,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-02T05:00:00.000Z",
        "amount": 6.25,
        "reason": 'order out'
    },
    {
        "date": "2020-02-03T05:00:00.000Z",
        "amount": 52.02,
        "reason": 'home needs'
    },
    {
        "date": "2020-02-04T05:00:00.000Z",
        "amount": 39.17,
        "reason": 'savings'
    },
    {
        "date": "2020-02-05T05:00:00.000Z",
        "amount": 75.25,
        "reason": 'order out'
    },
    {
        "date": "2020-02-06T05:00:00.000Z",
        "amount": 24.97,
        "reason": 'savings'
    },
    {
        "date": "2020-02-07T05:00:00.000Z",
        "amount": 53.46,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-08T05:00:00.000Z",
        "amount": 33.9,
        "reason": 'home needs'
    },
    {
        "date": "2020-02-09T05:00:00.000Z",
        "amount": 90.07,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-10T05:00:00.000Z",
        "amount": 54.58,
        "reason": 'order out'
    },
    {
        "date": "2020-02-11T05:00:00.000Z",
        "amount": 100.23,
        "reason": 'order out'
    },
    {
        "date": "2020-02-12T05:00:00.000Z",
        "amount": 51.9,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-13T05:00:00.000Z",
        "amount": 49.95,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-14T05:00:00.000Z",
        "amount": 5.57,
        "reason": 'savings'
    },
    {
        "date": "2020-02-15T05:00:00.000Z",
        "amount": 58.15,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-16T05:00:00.000Z",
        "amount": 62.69,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-17T05:00:00.000Z",
        "amount": 58.72,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-18T05:00:00.000Z",
        "amount": 91.8,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-19T05:00:00.000Z",
        "amount": 9.25,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-20T05:00:00.000Z",
        "amount": 96.5,
        "reason": 'savings'
    },
    {
        "date": "2020-02-21T05:00:00.000Z",
        "amount": 51.33,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-22T05:00:00.000Z",
        "amount": 24.91,
        "reason": 'grocery'
    },
    {
        "date": "2020-02-23T05:00:00.000Z",
        "amount": 70.16,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-02-24T05:00:00.000Z",
        "amount": 42.67,
        "reason": 'order out'
    },
    {
        "date": "2020-02-25T05:00:00.000Z",
        "amount": 2.2,
        "reason": 'home needs'
    },
    {
        "date": "2020-02-26T05:00:00.000Z",
        "amount": 32.13,
        "reason": 'savings'
    },
    {
        "date": "2020-02-27T05:00:00.000Z",
        "amount": 47.93,
        "reason": 'home needs'
    },
    {
        "date": "2020-02-28T05:00:00.000Z",
        "amount": 90.79,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-01T05:00:00.000Z",
        "amount": 23.17,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-02T05:00:00.000Z",
        "amount": 53.26,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-03T05:00:00.000Z",
        "amount": 30.99,
        "reason": 'savings'
    },
    {
        "date": "2020-03-04T05:00:00.000Z",
        "amount": 18.71,
        "reason": 'order out'
    },
    {
        "date": "2020-03-05T05:00:00.000Z",
        "amount": 64.3,
        "reason": 'savings'
    },
    {
        "date": "2020-03-06T05:00:00.000Z",
        "amount": 49.52,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-07T05:00:00.000Z",
        "amount": 73.61,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-08T05:00:00.000Z",
        "amount": 4.04,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-09T05:00:00.000Z",
        "amount": 44.86,
        "reason": 'savings'
    },
    {
        "date": "2020-03-10T05:00:00.000Z",
        "amount": 66.93,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-11T05:00:00.000Z",
        "amount": 49.15,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-12T05:00:00.000Z",
        "amount": 93.9,
        "reason": 'savings'
    },
    {
        "date": "2020-03-13T05:00:00.000Z",
        "amount": 68,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-14T05:00:00.000Z",
        "amount": 71.53,
        "reason": 'savings'
    },
    {
        "date": "2020-03-15T04:00:00.000Z",
        "amount": 61.12,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-16T04:00:00.000Z",
        "amount": 28.55,
        "reason": 'savings'
    },
    {
        "date": "2020-03-17T04:00:00.000Z",
        "amount": 36.41,
        "reason": 'order out'
    },
    {
        "date": "2020-03-18T04:00:00.000Z",
        "amount": 14.73,
        "reason": 'order out'
    },
    {
        "date": "2020-03-19T04:00:00.000Z",
        "amount": 64.01,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-20T04:00:00.000Z",
        "amount": 62.77,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-21T04:00:00.000Z",
        "amount": 70.04,
        "reason": 'savings'
    },
    {
        "date": "2020-03-22T04:00:00.000Z",
        "amount": 94.77,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-23T04:00:00.000Z",
        "amount": 1.33,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-24T04:00:00.000Z",
        "amount": 18.72,
        "reason": 'savings'
    },
    {
        "date": "2020-03-25T04:00:00.000Z",
        "amount": 91.47,
        "reason": 'savings'
    },
    {
        "date": "2020-03-26T04:00:00.000Z",
        "amount": 36.34,
        "reason": 'grocery'
    },
    {
        "date": "2020-03-27T04:00:00.000Z",
        "amount": 46.83,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-28T04:00:00.000Z",
        "amount": 5.9,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-29T04:00:00.000Z",
        "amount": 8.64,
        "reason": 'home needs'
    },
    {
        "date": "2020-03-30T04:00:00.000Z",
        "amount": 64.45,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-03-31T04:00:00.000Z",
        "amount": 1.07,
        "reason": 'savings'
    },
    {
        "date": "2020-04-01T04:00:00.000Z",
        "amount": 59.86,
        "reason": 'savings'
    },
    {
        "date": "2020-04-02T04:00:00.000Z",
        "amount": 4.34,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-04-03T04:00:00.000Z",
        "amount": 70.78,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-04-04T04:00:00.000Z",
        "amount": 8.56,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-04-05T04:00:00.000Z",
        "amount": 31.23,
        "reason": 'order out'
    },
    {
        "date": "2020-04-06T04:00:00.000Z",
        "amount": 19.88,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-07T04:00:00.000Z",
        "amount": 95.98,
        "reason": 'grocery'
    },
    {
        "date": "2020-04-08T04:00:00.000Z",
        "amount": 56.41,
        "reason": 'grocery'
    },
    {
        "date": "2020-04-09T04:00:00.000Z",
        "amount": 93.42,
        "reason": 'order out'
    },
    {
        "date": "2020-04-10T04:00:00.000Z",
        "amount": 47.47,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-11T04:00:00.000Z",
        "amount": 92.46,
        "reason": 'savings'
    },
    {
        "date": "2020-04-12T04:00:00.000Z",
        "amount": 68.26,
        "reason": 'order out'
    },
    {
        "date": "2020-04-13T04:00:00.000Z",
        "amount": 77.54,
        "reason": 'order out'
    },
    {
        "date": "2020-04-14T04:00:00.000Z",
        "amount": 8.69,
        "reason": 'grocery'
    },
    {
        "date": "2020-04-15T04:00:00.000Z",
        "amount": 65.62,
        "reason": 'order out'
    },
    {
        "date": "2020-04-16T04:00:00.000Z",
        "amount": 74.01,
        "reason": 'order out'
    },
    {
        "date": "2020-04-17T04:00:00.000Z",
        "amount": 84.49,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-18T04:00:00.000Z",
        "amount": 81.13,
        "reason": 'grocery'
    },
    {
        "date": "2020-04-19T04:00:00.000Z",
        "amount": 38.57,
        "reason": 'order out'
    },
    {
        "date": "2020-04-20T04:00:00.000Z",
        "amount": 28.91,
        "reason": 'grocery'
    },
    {
        "date": "2020-04-21T04:00:00.000Z",
        "amount": 18.61,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-04-22T04:00:00.000Z",
        "amount": 84.38,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-23T04:00:00.000Z",
        "amount": 11.01,
        "reason": 'savings'
    },
    {
        "date": "2020-04-24T04:00:00.000Z",
        "amount": 49.54,
        "reason": 'order out'
    },
    {
        "date": "2020-04-25T04:00:00.000Z",
        "amount": 98.92,
        "reason": 'savings'
    },
    {
        "date": "2020-04-26T04:00:00.000Z",
        "amount": 40.2,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-27T04:00:00.000Z",
        "amount": 66.32,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-04-28T04:00:00.000Z",
        "amount": 23.07,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-29T04:00:00.000Z",
        "amount": 29.51,
        "reason": 'home needs'
    },
    {
        "date": "2020-04-30T04:00:00.000Z",
        "amount": 78.72,
        "reason": 'home needs'
    },
    {
        "date": "2020-05-01T04:00:00.000Z",
        "amount": 69.17,
        "reason": 'order out'
    },
    {
        "date": "2020-05-02T04:00:00.000Z",
        "amount": 67.51,
        "reason": 'savings'
    },
    {
        "date": "2020-05-03T04:00:00.000Z",
        "amount": 60.91,
        "reason": 'grocery'
    },
    {
        "date": "2020-05-04T04:00:00.000Z",
        "amount": 14.04,
        "reason": 'order out'
    },
    {
        "date": "2020-05-05T04:00:00.000Z",
        "amount": 1.8,
        "reason": 'order out'
    },
    {
        "date": "2020-05-06T04:00:00.000Z",
        "amount": 56.9,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-07T04:00:00.000Z",
        "amount": 67.7,
        "reason": 'savings'
    },
    {
        "date": "2020-05-08T04:00:00.000Z",
        "amount": 41.21,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-09T04:00:00.000Z",
        "amount": 98.17,
        "reason": 'grocery'
    },
    {
        "date": "2020-05-10T04:00:00.000Z",
        "amount": 89.33,
        "reason": 'home needs'
    },
    {
        "date": "2020-05-11T04:00:00.000Z",
        "amount": 13.29,
        "reason": 'home needs'
    },
    {
        "date": "2020-05-12T04:00:00.000Z",
        "amount": 87.79,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-13T04:00:00.000Z",
        "amount": 18.87,
        "reason": 'grocery'
    },
    {
        "date": "2020-05-14T04:00:00.000Z",
        "amount": 74.92,
        "reason": 'savings'
    },
    {
        "date": "2020-05-15T04:00:00.000Z",
        "amount": 16.96,
        "reason": 'savings'
    },
    {
        "date": "2020-05-16T04:00:00.000Z",
        "amount": 79.59,
        "reason": 'home needs'
    },
    {
        "date": "2020-05-17T04:00:00.000Z",
        "amount": 86.17,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-18T04:00:00.000Z",
        "amount": 30.66,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-19T04:00:00.000Z",
        "amount": 43.87,
        "reason": 'savings'
    },
    {
        "date": "2020-05-20T04:00:00.000Z",
        "amount": 2.15,
        "reason": 'order out'
    },
    {
        "date": "2020-05-21T04:00:00.000Z",
        "amount": 11.52,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-22T04:00:00.000Z",
        "amount": 83.76,
        "reason": 'savings'
    },
    {
        "date": "2020-05-23T04:00:00.000Z",
        "amount": 76.64,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-24T04:00:00.000Z",
        "amount": 73.34,
        "reason": 'grocery'
    },
    {
        "date": "2020-05-25T04:00:00.000Z",
        "amount": 42.49,
        "reason": 'home needs'
    },
    {
        "date": "2020-05-26T04:00:00.000Z",
        "amount": 89.4,
        "reason": 'savings'
    },
    {
        "date": "2020-05-27T04:00:00.000Z",
        "amount": 54.21,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-28T04:00:00.000Z",
        "amount": 15.65,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-05-29T04:00:00.000Z",
        "amount": 24.74,
        "reason": 'grocery'
    },
    {
        "date": "2020-05-30T04:00:00.000Z",
        "amount": 12.27,
        "reason": 'order out'
    },
    {
        "date": "2020-05-31T04:00:00.000Z",
        "amount": 76.06,
        "reason": 'savings'
    },
    {
        "date": "2020-06-01T04:00:00.000Z",
        "amount": 29.75,
        "reason": 'savings'
    },
    {
        "date": "2020-06-02T04:00:00.000Z",
        "amount": 17.81,
        "reason": 'savings'
    },
    {
        "date": "2020-06-03T04:00:00.000Z",
        "amount": 75.54,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-04T04:00:00.000Z",
        "amount": 38.18,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-05T04:00:00.000Z",
        "amount": 70.53,
        "reason": 'savings'
    },
    {
        "date": "2020-06-06T04:00:00.000Z",
        "amount": 57.3,
        "reason": 'order out'
    },
    {
        "date": "2020-06-07T04:00:00.000Z",
        "amount": 49.53,
        "reason": 'savings'
    },
    {
        "date": "2020-06-08T04:00:00.000Z",
        "amount": 16.11,
        "reason": 'savings'
    },
    {
        "date": "2020-06-09T04:00:00.000Z",
        "amount": 52,
        "reason": 'grocery'
    },
    {
        "date": "2020-06-10T04:00:00.000Z",
        "amount": 96.74,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-11T04:00:00.000Z",
        "amount": 70.43,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-12T04:00:00.000Z",
        "amount": 90.58,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-13T04:00:00.000Z",
        "amount": 1.3,
        "reason": 'savings'
    },
    {
        "date": "2020-06-14T04:00:00.000Z",
        "amount": 88.6,
        "reason": 'order out'
    },
    {
        "date": "2020-06-15T04:00:00.000Z",
        "amount": 67.85,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-16T04:00:00.000Z",
        "amount": 4.11,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-17T04:00:00.000Z",
        "amount": 17.81,
        "reason": 'savings'
    },
    {
        "date": "2020-06-18T04:00:00.000Z",
        "amount": 12.4,
        "reason": 'savings'
    },
    {
        "date": "2020-06-19T04:00:00.000Z",
        "amount": 34.14,
        "reason": 'savings'
    },
    {
        "date": "2020-06-20T04:00:00.000Z",
        "amount": 72.68,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-21T04:00:00.000Z",
        "amount": 22.69,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-22T04:00:00.000Z",
        "amount": 41.27,
        "reason": 'grocery'
    },
    {
        "date": "2020-06-23T04:00:00.000Z",
        "amount": 58.65,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-24T04:00:00.000Z",
        "amount": 27.27,
        "reason": 'order out'
    },
    {
        "date": "2020-06-25T04:00:00.000Z",
        "amount": 31.3,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-06-26T04:00:00.000Z",
        "amount": 29.31,
        "reason": 'order out'
    },
    {
        "date": "2020-06-27T04:00:00.000Z",
        "amount": 81.55,
        "reason": 'home needs'
    },
    {
        "date": "2020-06-28T04:00:00.000Z",
        "amount": 4.77,
        "reason": 'savings'
    },
    {
        "date": "2020-06-29T04:00:00.000Z",
        "amount": 88.16,
        "reason": 'savings'
    },
    {
        "date": "2020-06-30T04:00:00.000Z",
        "amount": 21.45,
        "reason": 'home needs'
    },
    {
        "date": "2020-07-01T04:00:00.000Z",
        "amount": 70.71,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-02T04:00:00.000Z",
        "amount": 9.99,
        "reason": 'order out'
    },
    {
        "date": "2020-07-03T04:00:00.000Z",
        "amount": 41.02,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-04T04:00:00.000Z",
        "amount": 75.77,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-05T04:00:00.000Z",
        "amount": 14,
        "reason": 'savings'
    },
    {
        "date": "2020-07-06T04:00:00.000Z",
        "amount": 86.53,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-07T04:00:00.000Z",
        "amount": 18.02,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-08T04:00:00.000Z",
        "amount": 61.29,
        "reason": 'savings'
    },
    {
        "date": "2020-07-09T04:00:00.000Z",
        "amount": 7.55,
        "reason": 'savings'
    },
    {
        "date": "2020-07-10T04:00:00.000Z",
        "amount": 4.72,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-11T04:00:00.000Z",
        "amount": 33.01,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-12T04:00:00.000Z",
        "amount": 72.84,
        "reason": 'home needs'
    },
    {
        "date": "2020-07-13T04:00:00.000Z",
        "amount": 55.35,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-14T04:00:00.000Z",
        "amount": 18.99,
        "reason": 'order out'
    },
    {
        "date": "2020-07-15T04:00:00.000Z",
        "amount": 12.92,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-16T04:00:00.000Z",
        "amount": 16.88,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-17T04:00:00.000Z",
        "amount": 83.5,
        "reason": 'order out'
    },
    {
        "date": "2020-07-18T04:00:00.000Z",
        "amount": 12.18,
        "reason": 'order out'
    },
    {
        "date": "2020-07-19T04:00:00.000Z",
        "amount": 29.9,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-20T04:00:00.000Z",
        "amount": 95.69,
        "reason": 'order out'
    },
    {
        "date": "2020-07-21T04:00:00.000Z",
        "amount": 81.27,
        "reason": 'order out'
    },
    {
        "date": "2020-07-22T04:00:00.000Z",
        "amount": 82.44,
        "reason": 'savings'
    },
    {
        "date": "2020-07-23T04:00:00.000Z",
        "amount": 59.02,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-24T04:00:00.000Z",
        "amount": 99.85,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-25T04:00:00.000Z",
        "amount": 40.34,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-26T04:00:00.000Z",
        "amount": 15.15,
        "reason": 'savings'
    },
    {
        "date": "2020-07-27T04:00:00.000Z",
        "amount": 71.58,
        "reason": 'grocery'
    },
    {
        "date": "2020-07-28T04:00:00.000Z",
        "amount": 54.03,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-29T04:00:00.000Z",
        "amount": 90.61,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-07-30T04:00:00.000Z",
        "amount": 54.92,
        "reason": 'savings'
    },
    {
        "date": "2020-07-31T04:00:00.000Z",
        "amount": 46.22,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-01T04:00:00.000Z",
        "amount": 55.3,
        "reason": 'grocery'
    },
    {
        "date": "2020-08-02T04:00:00.000Z",
        "amount": 76.84,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-03T04:00:00.000Z",
        "amount": 88.15,
        "reason": 'savings'
    },
    {
        "date": "2020-08-04T04:00:00.000Z",
        "amount": 58.22,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-05T04:00:00.000Z",
        "amount": 65.24,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-06T04:00:00.000Z",
        "amount": 64.73,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-07T04:00:00.000Z",
        "amount": 45.65,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-08T04:00:00.000Z",
        "amount": 58.68,
        "reason": 'order out'
    },
    {
        "date": "2020-08-09T04:00:00.000Z",
        "amount": 92.91,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-10T04:00:00.000Z",
        "amount": 30.77,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-11T04:00:00.000Z",
        "amount": 62.53,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-12T04:00:00.000Z",
        "amount": 46.79,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-13T04:00:00.000Z",
        "amount": 55.05,
        "reason": 'order out'
    },
    {
        "date": "2020-08-14T04:00:00.000Z",
        "amount": 89.54,
        "reason": 'savings'
    },
    {
        "date": "2020-08-15T04:00:00.000Z",
        "amount": 70.31,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-16T04:00:00.000Z",
        "amount": 18.79,
        "reason": 'order out'
    },
    {
        "date": "2020-08-17T04:00:00.000Z",
        "amount": 37.06,
        "reason": 'order out'
    },
    {
        "date": "2020-08-18T04:00:00.000Z",
        "amount": 30.49,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-19T04:00:00.000Z",
        "amount": 18.14,
        "reason": 'savings'
    },
    {
        "date": "2020-08-20T04:00:00.000Z",
        "amount": 71.55,
        "reason": 'savings'
    },
    {
        "date": "2020-08-21T04:00:00.000Z",
        "amount": 24.37,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-22T04:00:00.000Z",
        "amount": 28.38,
        "reason": 'grocery'
    },
    {
        "date": "2020-08-23T04:00:00.000Z",
        "amount": 33.85,
        "reason": 'order out'
    },
    {
        "date": "2020-08-24T04:00:00.000Z",
        "amount": 21.93,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-25T04:00:00.000Z",
        "amount": 83.5,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-26T04:00:00.000Z",
        "amount": 35.46,
        "reason": 'savings'
    },
    {
        "date": "2020-08-27T04:00:00.000Z",
        "amount": 16.17,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-08-28T04:00:00.000Z",
        "amount": 5.6,
        "reason": 'savings'
    },
    {
        "date": "2020-08-29T04:00:00.000Z",
        "amount": 38.4,
        "reason": 'home needs'
    },
    {
        "date": "2020-08-30T04:00:00.000Z",
        "amount": 9.78,
        "reason": 'grocery'
    },
    {
        "date": "2020-08-31T04:00:00.000Z",
        "amount": 77.96,
        "reason": 'savings'
    },
    {
        "date": "2020-09-01T04:00:00.000Z",
        "amount": 46.31,
        "reason": 'home needs'
    },
    {
        "date": "2020-09-02T04:00:00.000Z",
        "amount": 1.5,
        "reason": 'order out'
    },
    {
        "date": "2020-09-03T04:00:00.000Z",
        "amount": 91.26,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-04T04:00:00.000Z",
        "amount": 51.16,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-09-05T04:00:00.000Z",
        "amount": 26.57,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-09-06T04:00:00.000Z",
        "amount": 46.19,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-09-07T04:00:00.000Z",
        "amount": 99.58,
        "reason": 'order out'
    },
    {
        "date": "2020-09-08T04:00:00.000Z",
        "amount": 36.8,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-09T04:00:00.000Z",
        "amount": 28.9,
        "reason": 'order out'
    },
    {
        "date": "2020-09-10T04:00:00.000Z",
        "amount": 85.53,
        "reason": 'order out'
    },
    {
        "date": "2020-09-11T04:00:00.000Z",
        "amount": 41.91,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-12T04:00:00.000Z",
        "amount": 77.15,
        "reason": 'savings'
    },
    {
        "date": "2020-09-13T04:00:00.000Z",
        "amount": 69.71,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-14T04:00:00.000Z",
        "amount": 90.49,
        "reason": 'order out'
    },
    {
        "date": "2020-09-15T04:00:00.000Z",
        "amount": 28.9,
        "reason": 'order out'
    },
    {
        "date": "2020-09-16T04:00:00.000Z",
        "amount": 46.78,
        "reason": 'home needs'
    },
    {
        "date": "2020-09-17T04:00:00.000Z",
        "amount": 13.56,
        "reason": 'home needs'
    },
    {
        "date": "2020-09-18T04:00:00.000Z",
        "amount": 52.46,
        "reason": 'order out'
    },
    {
        "date": "2020-09-19T04:00:00.000Z",
        "amount": 39.05,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-20T04:00:00.000Z",
        "amount": 61.11,
        "reason": 'savings'
    },
    {
        "date": "2020-09-21T04:00:00.000Z",
        "amount": 15.41,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-22T04:00:00.000Z",
        "amount": 29.02,
        "reason": 'savings'
    },
    {
        "date": "2020-09-23T04:00:00.000Z",
        "amount": 48.33,
        "reason": 'order out'
    },
    {
        "date": "2020-09-24T04:00:00.000Z",
        "amount": 63.74,
        "reason": 'home needs'
    },
    {
        "date": "2020-09-25T04:00:00.000Z",
        "amount": 73.27,
        "reason": 'order out'
    },
    {
        "date": "2020-09-26T04:00:00.000Z",
        "amount": 17.47,
        "reason": 'savings'
    },
    {
        "date": "2020-09-27T04:00:00.000Z",
        "amount": 58.02,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-28T04:00:00.000Z",
        "amount": 3.38,
        "reason": 'order out'
    },
    {
        "date": "2020-09-29T04:00:00.000Z",
        "amount": 30.56,
        "reason": 'grocery'
    },
    {
        "date": "2020-09-30T04:00:00.000Z",
        "amount": 38.94,
        "reason": 'savings'
    },
    {
        "date": "2020-10-01T04:00:00.000Z",
        "amount": 93.13,
        "reason": 'order out'
    },
    {
        "date": "2020-10-02T04:00:00.000Z",
        "amount": 93.38,
        "reason": 'order out'
    },
    {
        "date": "2020-10-03T04:00:00.000Z",
        "amount": 74.69,
        "reason": 'savings'
    },
    {
        "date": "2020-10-04T04:00:00.000Z",
        "amount": 34.27,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-05T04:00:00.000Z",
        "amount": 48.52,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-06T04:00:00.000Z",
        "amount": 77.79,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-07T04:00:00.000Z",
        "amount": 40.74,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-08T04:00:00.000Z",
        "amount": 62.46,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-09T04:00:00.000Z",
        "amount": 90.57,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-10T04:00:00.000Z",
        "amount": 97.72,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-11T04:00:00.000Z",
        "amount": 24.87,
        "reason": 'order out'
    },
    {
        "date": "2020-10-12T04:00:00.000Z",
        "amount": 53.37,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-13T04:00:00.000Z",
        "amount": 44.93,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-14T04:00:00.000Z",
        "amount": 89.47,
        "reason": 'order out'
    },
    {
        "date": "2020-10-15T04:00:00.000Z",
        "amount": 17.24,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-16T04:00:00.000Z",
        "amount": 54.74,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-17T04:00:00.000Z",
        "amount": 45.76,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-18T04:00:00.000Z",
        "amount": 95.64,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-19T04:00:00.000Z",
        "amount": 7.57,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-20T04:00:00.000Z",
        "amount": 41.63,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-21T04:00:00.000Z",
        "amount": 23.07,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-22T04:00:00.000Z",
        "amount": 57.68,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-23T04:00:00.000Z",
        "amount": 72.07,
        "reason": 'home needs'
    },
    {
        "date": "2020-10-24T04:00:00.000Z",
        "amount": 12.87,
        "reason": 'savings'
    },
    {
        "date": "2020-10-25T04:00:00.000Z",
        "amount": 37.42,
        "reason": 'order out'
    },
    {
        "date": "2020-10-26T04:00:00.000Z",
        "amount": 17.07,
        "reason": 'grocery'
    },
    {
        "date": "2020-10-27T04:00:00.000Z",
        "amount": 26.41,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-10-28T04:00:00.000Z",
        "amount": 91.41,
        "reason": 'order out'
    },
    {
        "date": "2020-10-29T04:00:00.000Z",
        "amount": 34.63,
        "reason": 'savings'
    },
    {
        "date": "2020-10-30T04:00:00.000Z",
        "amount": 53.41,
        "reason": 'order out'
    },
    {
        "date": "2020-10-31T04:00:00.000Z",
        "amount": 67.6,
        "reason": 'order out'
    },
    {
        "date": "2020-11-01T04:00:00.000Z",
        "amount": 5.15,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-02T05:00:00.000Z",
        "amount": 21.78,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-03T05:00:00.000Z",
        "amount": 78.79,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-04T05:00:00.000Z",
        "amount": 74.14,
        "reason": 'order out'
    },
    {
        "date": "2020-11-05T05:00:00.000Z",
        "amount": 93.98,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-11-06T05:00:00.000Z",
        "amount": 58.77,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-07T05:00:00.000Z",
        "amount": 18.79,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-08T05:00:00.000Z",
        "amount": 59.58,
        "reason": 'order out'
    },
    {
        "date": "2020-11-09T05:00:00.000Z",
        "amount": 42.33,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-10T05:00:00.000Z",
        "amount": 86.66,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-11T05:00:00.000Z",
        "amount": 12.65,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-12T05:00:00.000Z",
        "amount": 42.4,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-13T05:00:00.000Z",
        "amount": 8.41,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-11-14T05:00:00.000Z",
        "amount": 84.74,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-15T05:00:00.000Z",
        "amount": 48.64,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-16T05:00:00.000Z",
        "amount": 11.33,
        "reason": 'order out'
    },
    {
        "date": "2020-11-17T05:00:00.000Z",
        "amount": 31.18,
        "reason": 'order out'
    },
    {
        "date": "2020-11-18T05:00:00.000Z",
        "amount": 22.68,
        "reason": 'savings'
    },
    {
        "date": "2020-11-19T05:00:00.000Z",
        "amount": 49.14,
        "reason": 'savings'
    },
    {
        "date": "2020-11-20T05:00:00.000Z",
        "amount": 55.74,
        "reason": 'savings'
    },
    {
        "date": "2020-11-21T05:00:00.000Z",
        "amount": 38.22,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-22T05:00:00.000Z",
        "amount": 58.9,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-23T05:00:00.000Z",
        "amount": 10,
        "reason": 'savings'
    },
    {
        "date": "2020-11-24T05:00:00.000Z",
        "amount": 10.94,
        "reason": 'home needs'
    },
    {
        "date": "2020-11-25T05:00:00.000Z",
        "amount": 31.56,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-26T05:00:00.000Z",
        "amount": 91.99,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-11-27T05:00:00.000Z",
        "amount": 37.72,
        "reason": 'grocery'
    },
    {
        "date": "2020-11-28T05:00:00.000Z",
        "amount": 46.38,
        "reason": 'savings'
    },
    {
        "date": "2020-11-29T05:00:00.000Z",
        "amount": 14.19,
        "reason": 'order out'
    },
    {
        "date": "2020-11-30T05:00:00.000Z",
        "amount": 72.21,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-01T05:00:00.000Z",
        "amount": 2.3,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-02T05:00:00.000Z",
        "amount": 93.79,
        "reason": 'order out'
    },
    {
        "date": "2020-12-03T05:00:00.000Z",
        "amount": 48.61,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-04T05:00:00.000Z",
        "amount": 12.64,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-05T05:00:00.000Z",
        "amount": 19.46,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-06T05:00:00.000Z",
        "amount": 29.75,
        "reason": 'order out'
    },
    {
        "date": "2020-12-07T05:00:00.000Z",
        "amount": 63.06,
        "reason": 'savings'
    },
    {
        "date": "2020-12-08T05:00:00.000Z",
        "amount": 38.75,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-09T05:00:00.000Z",
        "amount": 24.62,
        "reason": 'order out'
    },
    {
        "date": "2020-12-10T05:00:00.000Z",
        "amount": 82.08,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-11T05:00:00.000Z",
        "amount": 62.69,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-12T05:00:00.000Z",
        "amount": 49.09,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-13T05:00:00.000Z",
        "amount": 70.65,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-14T05:00:00.000Z",
        "amount": 45.71,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-15T05:00:00.000Z",
        "amount": 81.8,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-16T05:00:00.000Z",
        "amount": 21.84,
        "reason": 'order out'
    },
    {
        "date": "2020-12-17T05:00:00.000Z",
        "amount": 33.88,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-18T05:00:00.000Z",
        "amount": 88.73,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-19T05:00:00.000Z",
        "amount": 25.63,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-20T05:00:00.000Z",
        "amount": 6.91,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-21T05:00:00.000Z",
        "amount": 23.57,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-22T05:00:00.000Z",
        "amount": 62.13,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-23T05:00:00.000Z",
        "amount": 81.61,
        "reason": 'order out'
    },
    {
        "date": "2020-12-24T05:00:00.000Z",
        "amount": 95.01,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-25T05:00:00.000Z",
        "amount": 36.93,
        "reason": 'rent/mortgage'
    },
    {
        "date": "2020-12-26T05:00:00.000Z",
        "amount": 15.72,
        "reason": 'home needs'
    },
    {
        "date": "2020-12-27T05:00:00.000Z",
        "amount": 78.9,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-28T05:00:00.000Z",
        "amount": 53.83,
        "reason": 'order out'
    },
    {
        "date": "2020-12-29T05:00:00.000Z",
        "amount": 16.91,
        "reason": 'order out'
    },
    {
        "date": "2020-12-30T05:00:00.000Z",
        "amount": 6.38,
        "reason": 'grocery'
    },
    {
        "date": "2020-12-31T05:00:00.000Z",
        "amount": 7.37,
        "reason": 'order out'
    }
];

class Transaction {
    constructor(date, amount, reason) {
        this.date = date;
        this.amount = amount;
        this.reason = reason;
    }
}
class ReasonPercentage {
    constructor(reason, percentage) {
        this.reason = reason;
        this.percentage = percentage;
    }
}

class MonthlyReport {
    constructor(month, transactionAmountSum, transactionReasonPercentages) {
        this.month = month;
        this.transactionAmountSum = transactionAmountSum;
        this.transactionReasonPercentages = transactionReasonPercentages;
    }
}

function createReasonCache(originalAmount) {
    let reasonCache = new Map();
    
    return {
        cache: reason => {
            if (reasonCache.has(reason)) {
                reasonCache.set(reason, reasonCache.get(reason) + 1);
            } else {
                reasonCache.set(reason, 1);
            }
        },
        reduce: () => {
            let values = [];

            reasonCache.forEach((count, reason) => {
                values.push(new ReasonPercentage(reason, (count / originalAmount).toFixed(2)));
            });

            return values;
        }
    }
}

function calculateReasonPercentages(monthlyTransactions) {
    let cache = createReasonCache(monthlyTransactions.length);

    for (let i = 0; i < monthlyTransactions.length; i++) {
        cache.cache(monthlyTransactions[i].reason);
    }

    return cache.reduce();
}

function parseOutMonthlyTransactionsReport(rawTransactionsData) {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const transactions = rawTransactionsData.map(transaction => {
        return new Transaction(new Date(transaction.date), transaction.amount, transaction.reason);
    });

    let monthlyReports = [];

    for (let month = 0; month < months.length; month++) {
        let monthlyTransactions = transactions.filter(transaction => transaction.date.getMonth() == month);
        let reasonPercentages = calculateReasonPercentages(monthlyTransactions);
        let monthlyAmmountSum = monthlyTransactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
        monthlyReports.push(new MonthlyReport(months[month], monthlyAmmountSum, reasonPercentages));
    }

    return { "months": monthlyReports };
}

let report = parseOutMonthlyTransactionsReport(rawTransactionsData);
let jsonReport = JSON.stringify(report.months, null, 2);

console.log(jsonReport);
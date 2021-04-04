const budgets = [
    {
        "timings": [
            {
                "metric": "first-contentful-paint",
                "budget": 2000
            },
            {
                "metric": "first-cpu-idle",
                "budget": 2000
            },
            {
                "metric": "interactive",
                "budget": 3800
            },
            {
                "metric": "first-meaningful-paint",
                "budget": 2000
            }, {
                "metric": "max-potential-fid",
                "budget": 1300
            }, {
                "metric": "estimated-input-latency",
                "budget": 5000
            }, {
                "metric": "total-blocking-time",
                "budget": 5000
            }, {
                "metric": "speed-index",
                "budget": 4300
            }, {
                "metric": "largest-contentful-paint",
                "budget": 2500
            }, {
                "metric": "cumulative-layout-shift",
                "budget": 0.1
            }
        ],
        "resourceSizes": [
            {
                "resourceType": "document",
                "budget": 10
            },
            {
                "resourceType": "font",
                "budget": 10
            },
            {
                "resourceType": "image",
                "budget": 10
            },
            {
                "resourceType": "media",
                "budget": 10
            },
            {
                "resourceType": "other",
                "budget": 10
            },
            {
                "resourceType": "script",
                "budget": 10
            },
            {
                "resourceType": "stylesheet",
                "budget": 10
            },
            {
                "resourceType": "third-party",
                "budget": 10
            },
            {
                "resourceType": "total",
                "budget": 10
            },
        ],
        "resourceCounts": [
            {
                "resourceType": "document",
                "budget": 10
            },
            {
                "resourceType": "font",
                "budget": 10
            },
            {
                "resourceType": "image",
                "budget": 10
            },
            {
                "resourceType": "media",
                "budget": 10
            },
            {
                "resourceType": "other",
                "budget": 10
            },
            {
                "resourceType": "script",
                "budget": 10
            },
            {
                "resourceType": "stylesheet",
                "budget": 10
            },
            {
                "resourceType": "third-party",
                "budget": 10
            },
            {
                "resourceType": "total",
                "budget": 10
            },

        ]
    }
];

module.exports = budgets;
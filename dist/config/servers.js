module.exports = {
    'development': {
        'connector': [
            {
                'id': 'connector-server-1',
                'host': '127.0.0.1',
                'port': 4050,
                'clientPort': 3050,
                'frontend': true,
                'args': '--inspect=10001'
            }
        ],
        'gate': [
            {
                'id': 'gate-server-1',
                'host': '127.0.0.1',
                'clientPort': 3014,
                'frontend': true,
                'args': '--inspect=10003'
            }
        ],
        "game": [
            { "zone": "cn", "id": "game-server-1", "host": "127.0.0.1", "port": 5170, "auto-restart": true, 'args': '--inspect=10004' }
        ],
        "http": [
            { "zone": "cn", "id": "http-server-1", "host": "127.0.0.1", "port": 6170, "auto-restart": true, 'args': '--inspect=10005' }
        ],
        "name": [
            { "zone": "cn", "id": "name-server-1", "host": "127.0.0.1", "port": 7170, "auto-restart": true, 'args': '--inspect=10006' }
        ]
    },
    'production': {
        'connector': [
            { 'id': 'connector-server-1', 'host': '127.0.0.1', 'port': 4050, 'clientPort': 3050, 'frontend': true }
        ],
        'gate': [
            { 'id': 'gate-server-1', 'host': '127.0.0.1', 'clientPort': 3014, 'frontend': true }
        ],
        "game": [
            { "zone": "cn", "id": "game-server-1", "host": "127.0.0.1", "port": 5170, "auto-restart": true }
        ],
        "http": [
            { "zone": "cn", "id": "http-server-1", "host": "127.0.0.1", "port": 6170, "auto-restart": true }
        ],
        "name": [
            { "zone": "cn", "id": "name-server-1", "host": "127.0.0.1", "port": 7170, "auto-restart": true }
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9zZXJ2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixhQUFhLEVBQUU7UUFDWCxXQUFXLEVBQUU7WUFDVDtnQkFDSSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixNQUFNLEVBQUUsaUJBQWlCO2FBQzVCO1NBQ0o7UUFDRCxNQUFNLEVBQUU7WUFDSjtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsTUFBTSxFQUFFLGlCQUFpQjthQUM1QjtTQUNKO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1NBQzNIO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1NBQzNIO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1NBQzNIO0tBQ0o7SUFDRCxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUU7WUFDVCxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1NBQ3hHO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1NBQ3JGO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUU7U0FDakc7UUFDRCxNQUFNLEVBQUU7WUFDSixFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRTtTQUNqRztRQUNELE1BQU0sRUFBRTtZQUNKLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFO1NBQ2pHO0tBQ0o7Q0FDSixDQUFDIn0=
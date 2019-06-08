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
            {"zone":"cn", "id": "game-server-1", "host": "127.0.0.1", "port": 5170, "auto-restart": true ,'args': '--inspect=10004'}
        ],
        "http": [
            {"zone":"cn", "id": "http-server-1", "host": "127.0.0.1", "port": 6170, "auto-restart": true ,'args': '--inspect=10005'}
        ],
        "name": [
            {"zone":"cn", "id": "name-server-1", "host": "127.0.0.1", "port": 7170, "auto-restart": true ,'args': '--inspect=10006'}
        ]
    },
    'production': {
        'connector': [
            {'id': 'connector-server-1', 'host': '127.0.0.1', 'port': 4050, 'clientPort': 3050, 'frontend': true}
        ],
        'gate': [
            {'id': 'gate-server-1', 'host': '127.0.0.1', 'clientPort': 3014, 'frontend': true}
        ],
        "game": [
            {"zone":"cn", "id": "game-server-1", "host": "127.0.0.1", "port": 5170, "auto-restart": true }
        ],
        "http": [
            {"zone":"cn", "id": "http-server-1", "host": "127.0.0.1", "port": 6170, "auto-restart": true }
        ],
        "name": [
            {"zone":"cn", "id": "name-server-1", "host": "127.0.0.1", "port": 7170, "auto-restart": true }
        ]
    }
};

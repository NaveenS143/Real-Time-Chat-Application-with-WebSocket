from flask import Flask
from flask_socketio import SocketIO, join_room, leave_room, send

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('join_room')
def handle_join_room(data):
    room = data
    join_room(room)
    print(f"User joined room {room}")
    send({'msg': f'User joined {room}', 'room': room}, to=room)

@socketio.on('leave_room')
def handle_leave_room(data):
    room = data
    leave_room(room)
    print(f"User left room {room}")
    send({'msg': f'User left {room}', 'room': room}, to=room)

@socketio.on('send_message')
def handle_send_message(data):
    room = data['room']
    message = data['message']
    username = data['username']
    print(f"Backend received message for room {room}: {message}")
    # Broadcast message to the room
    send({'msg': message, 'room': room, 'username': username}, to=room)
    print(f"Broadcasted message to room {room}: {message}")

if __name__ == '__main__':
    socketio.run(app, debug=True)

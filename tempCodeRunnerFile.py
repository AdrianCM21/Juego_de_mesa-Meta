@socketio.on('prueba')
def prueba(prue):
    print('estamos ready '+ prue)
    emit('cliente','FUNCIONAAAAA')
    
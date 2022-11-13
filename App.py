from flask import Flask,render_template
from flask_mysqldb import MySQL
from flask_socketio import SocketIO,emit 
import random
app=Flask(__name__)
app.config['SECRET_KEY']="ADRIAN123"
socketio=SocketIO(app)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='meta'

mysql = MySQL(app)

@app.route("/")
def prueba():
    return render_template('player.html')
    
@socketio.on('servidor')
def servidor(id):
    n=str(random.randint(1, 12))
    cur = mysql.connection.cursor()
    cur.execute('SELECT id,pregunta,respuestaa,respuestab,respuestac,correcta FROM preguntas WHERE id=%s'%(n))
    datos = cur.fetchall()
    cur.close()
    socketio.emit('cliente',datos)

if __name__=='__main__':
    app.run(debug=True)
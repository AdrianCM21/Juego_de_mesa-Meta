from flask import Flask,render_template
# from flask_socketio import SocketIO,emit 

app=Flask(__name__)
app.config['SECRET_KEY']="ADRIAN123"
# socketio=SocketIO(app)

@app.route("/")
def prueba():
    return render_template('player.html')
    

if __name__=='__main__':
    app.run(debug=True)
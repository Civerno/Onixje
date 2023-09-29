from flask import Flask, render_template, request, session
from flask_mysqldb import MySQL,MySQLdb

app = Flask(__name__, template_folder='template')

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'Dilan'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'bd_onix'      
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


@app.route('/login')
def login1():
    return render_template('login.html')

@app.route('/')
def home():
    return render_template('Indexhomepage.html')


@app.route('/indexdashboard')
def indexdashboard():
    return render_template('indexdashboard.html')

@app.route('/RegistrarProveedor.html')
def RegistrarProveedor():
    return render_template('RegistrarProveedor.html')

#FUNCION LOGEO
@app.route('/acceso_login', methods=["GET","POST"])
def login():

    if request.method == 'POST' and 'txtCorreo' in request.form and 'txtContraseña'in request.form:
        _correroUsuario = request.form['txtCorreo']
        _contrasenaUsuario = request.form['txtContraseña']

        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM usuario WHERE correroUsuario = %s AND contrasenaUsuario = %s' , (_correroUsuario,_contrasenaUsuario,))
        account = cur.fetchone()

        if account:
            session['logueado'] = True
            session['idUsuario'] = account ['idUsuario']
            session['rol_idRol'] = account['rol_idRol']

            if session['rol_idRol']==1:
                return render_template("indexdashboard.html")
            elif session['rol_idRol']==2:
                return render_template("indexdashboard2.html")
        else:
            return render_template('login.html',mensaje="Usuario o Contraseña Incorrecta")

if __name__ == '__main__':
    app.secret_key = "dilan"
    app.run(debug=True, host='0.0.0.0', port=5001, threaded=True)
from flask import Flask, render_template, request, session, redirect, url_for, flash
from flask_mysqldb import MySQL,MySQLdb

app = Flask(__name__, template_folder='template')

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'Dilan'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'bd_onix'      
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/indexdashboard')
def indexdashboard():
    return render_template('indexdashboard.html')

@app.route('/')
def proveedor():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM proveedor')
    data = cur.fetchall()
    print(data)
    return render_template('RegistrarProveedor.html', contacts = data)


@app.route('/agregarproveedor', methods=["GET","POST"])
def agregarproveedor():
    if request.method == 'POST':
        nombreProveedor = request.form['nombreProveedor']
        tipoDocumentoProveedor = request.form['tipoDocumentoProveedor']
        numeroDocumento = request.form['numeroDocumento']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO proveedor (nombreProveedor, tipoDocumentoProveedor, numeroDocumento) VALUES (%s, %s, %s)' , (nombreProveedor, tipoDocumentoProveedor, numeroDocumento))
        mysql.connection.commit()
        flash('Proveedor agrgado')
        return redirect(url_for('proveedor'))



@app.route('/editarproveedor/<id>', methods=["GET","POST"])
def editarproveedor(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM proveedor WHERE idProveedor = %s', (id,))
    data = cur.fetchall()
    return render_template('editarproveedor.html', contact = data[0])

@app.route('/actualizar/<id>', methods=["GET", "POST"])
def actualizar(id):
    if request.method == 'POST':
        nombreProveedor = request.form['nombreProveedor']
        tipoDocumentoProveedor = request.form['tipoDocumentoProveedor']
        numeroDocumento = request.form['numeroDocumento']
        cur = mysql.connection.cursor()
        cur.execute("""
        UPDATE proveedor
        SET nombreProveedor = %s,
            tipoDocumentoProveedor = %s,
            numeroDocumento = %s
        WHERE idProveedor = %s
        """, (nombreProveedor, tipoDocumentoProveedor, numeroDocumento, id))
        mysql.connection.commit()
        flash('Informacion del proveedor actualizado')
        return redirect(url_for('proveedor'))




@app.route('/eliminarproveedor/<string:id>', methods=["GET","POST"])
def eliminarproveedor(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM proveedor WHERE idProveedor = %s', (id,))
    mysql.connection.commit()
    flash('Proveedor Eliminado')
    return redirect(url_for('proveedor'))


if __name__ == '__main__':
    app.secret_key = "dilan"
    app.run(debug=True, host='0.0.0.0', port=5001, threaded=True)
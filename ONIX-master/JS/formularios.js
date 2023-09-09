const formulario=document.getElementById("formulario")


// variables menu
const fGenerarVenta=document.getElementById("fGenerarVenta")
const fCancelarVenta=document.getElementById("fCancelarVenta")
const fActuInventario=document.getElementById("fCancelarVenta")
const fRealizarCompra=document.getElementById("fRealizarCompra")
const fCancelarCompra=document.getElementById("fCancelarVenta")
const menuitem=document.getElementsByClassName("menuitem")


// funcion generar venta
fGenerarVenta.addEventListener("click", ()=>{
    formulario.innerHTML= `<div class="col-12 col-sm-7 col-md-6 m-auto">
<div class="card border-0 shadow">
  <div class="card-body">
    <form action="">
    <div class="form-group col-md-4">
    <label for="inputCity">N°</label>
    <input type="text" class="form-control" id="inputCity" placeholder="N° Facrura">
  </div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4">NOMBRE</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Nombres">
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4">APELLIDO</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Apellidos">
  </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">C.C/NIT</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Documento">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">TEL</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Telefono">
    </div>
  </div>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Correo</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Dirreción</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Dirreción">
    </div>
  </div>
<div class="form-row">
    <div class="form-group col-md-2">
      <label for="inputEmail4">CANT</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Cantidad">
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">DESCRIPCIÓN</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Descripción">
    </div>
    <div class="form-group col-md-3">
        <label for="inputPassword4">VR.UNIT</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Unitario">
      </div>
      <div class="form-group col-md-3">
        <label for="inputPassword4">VR.TOTAL</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Total">
      </div>
</div>
<button type="submit" class="btn btn-primary">Imprimir Factura</button>
    </form>
  </div>
</div>
</div>
</div>
</div>`
})

// funcion cancelar venta
fCancelarVenta.addEventListener("click", ()=>{
    formulario.innerHTML= `<div class="col-12 col-sm-7 col-md-6 m-auto">
    <div class="card border-0 shadow">
      <div class="card-body">
        <form action="">
        <div class="form-group col-md-4">
        <label for="inputCity">N°</label>
        <input type="text" class="form-control" id="inputCity" placeholder="N° Facrura">
      </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">NOMBRE</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder="Nombres">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">APELLIDO</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder="Apellidos">
      </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">C.C/NIT</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Documento">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">TEL</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Telefono">
        </div>
      </div>
              <div class="form-row">
        <div class="form-group col-md-12">
          <label for="inputEmail4">MOTIVO DE DEVOLUCION</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Motivo">

    <div class="form-row">
        <div class="form-group col-md-2">
          <label for="inputEmail4">CANT</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Cantidad">
        </div>
        <div class="form-group col-md-4">
          <label for="inputPassword4">DESCRIPCIÓN</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Descripción">
        </div>
        <div class="form-group col-md-3">
            <label for="inputPassword4">VR.UNIT</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Unitario">
          </div>
          <div class="form-group col-md-3">
            <label for="inputPassword4">VR.TOTAL</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Total">
          </div>
    </div>
    <button type="submit" class="btn btn-primary">Cancelar venta</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>`
})

//funcion realizar compra
fRealizarCompra.addEventListener("click",()=>{
    formulario.innerHTML=`<div class="col-12 col-sm-7 col-md-6 m-auto">
    <div class="card border-0 shadow">
      <div class="card-body">
        <form action="">
        <div class="form-group col-md-4">
        <label for="inputCity">N°</label>
        <input type="text" class="form-control" id="inputCity" placeholder="N° Facrura">
      </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <label for="inputEmail4">NOMBRE DEL PROVEEDOR</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder="Nombres">
    <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">NIT</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Documento">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">TEL</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Telefono">
        </div>
      </div>
              <div class="form-row">
        <div class="form-group col-md-12">
          <label for="inputEmail4">DESCRIPCION COMPLETA DEL PRODUCTO</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Describa">

    <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputEmail4">CANT</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Cantidad">
        </div>
        <div class="form-group col-md-4">
            <label for="inputPassword4">VR.UNIT</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Unitario">
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">VR.TOTAL</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Total">
          </div>
    </div>
    <button type="submit" class="btn btn-primary">Imprimir Factura</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>`
})

function redirectToPage(url) {
  window.location.href = url;
}
// function loguear() {
//     let user = document.getElementById("correo").value;
//     let pass = document.getElementById("contraseña").value;

//     if (user != "" && pass != "") {
//         window.location.href = "../DASHBOARD/indexdashboard.html";
//     } else {
//         alert("Gracias por loguearse");
//     }
// }

const entrar = document.getElementById("login-button");
addEventListener("click",(evento) => {
    let user = document.getElementById("correo");
    let pass = document.getElementById("contraseña");
    if (evento.target === entrar){
        if (user.value !=""  &&  pass.value !=""){
            evento.preventDefault();
            window.location.href= "../DASHBOARD/indexdashboard.html";
        }
        else{
            alert("Gracias por loguearse");
        }
    }
})
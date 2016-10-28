//para comprobar que el usuario no se haya registrado anteriormente
function Cusuario(){              
    
    var usuario = $("#usuario").val();
     if(validaTexto("usuario")==true){
     $.ajax({
          type: "POST",
          url: "comprobar.php",
          data:("dato="+usuario+"&caso=usuario"),
          dataType: "html",
          beforeSend: function(){
                 
                  $("#iconousuario").remove(); $("#usuario").parent().children("span").html('<font class="sombra">Verificando</font> <img class="loader" src="media/ajax.gif"/>').show();
                                },
          success: function(data){    
                     
                  $("#iconousuario").remove();
                  $("#usuario").parent().parent().removeClass("has-error");
                  $("#usuario").parent().parent().addClass("has-success has-feedback"); $("#usuario").parent().children("span").html('').hide();
                  $("#usuario").parent().append("<span id='iconousuario' class='glyphicon glyphicon-ok form-control-feedback'></span>"); 
              
        if(data == "1"){       
                  $("#iconousuario").remove();
                  $("#usuario").parent().parent().addClass("has-error has-feedback");
                  $("#usuario").parent().children("span").html('El nombre de usuario ya existe.').show();
                  $("#usuario").parent().append("<span id='iconousuario' class='glyphicon glyphicon-remove form-control-feedback'></span>"); 
           document.getElementById("usuario").value = "";
                  $("#usuario").focus();
                 }
                        }
             });     
     }
}

//comprueba que el correo introducido no se haya registrado anteriormente
function Ccorreo(){
    if(validaMail("correo")==true){
    var email = $("#correo").val();
            $.ajax({
                type: "POST",
                url: "comprobar.php",
                data: ("dato="+email+"&caso=mail"),
                beforeSend: function(){
                    
                  $("#iconocorreo").remove(); $("#correo").parent().children("span").html('<font class="sombra">Verificando</font> <img class="loader" src="media/ajax.gif"/>').show();
                },
        success: function(data){         
                  $("#iconocorreo").remove();
                  $("#correo").parent().parent().removeClass("has-error");
                  $("#correo").parent().parent().addClass("has-success has-feedback"); $("#correo").parent().children("span").html('').hide();
                  $("#correo").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-ok form-control-feedback'></span>"); 
                    
                  if(data == "2"){    
                                        
                  $("#iconocorreo").remove();
                  $("#correo").parent().parent().addClass("has-error has-feedback");
                  $("#correo").parent().children("span").html('El correo usado ya existe.').show();
                  $("#correo").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>"); 
            document.getElementById("correo").value = ""; $("#correo").focus();
                          }
                              }
            });
    }
    }   

  //comprobamos si el password introducido coincide con la comprobacion
function repass(e) {
        var pass = $("#pass").val();
        var re_pass=$("#repass").val();
   if(pass != re_pass)
        {
                  $("#iconorepass").remove();
                  $("#repass").parent().parent().addClass("has-error has-feedback");
                  $("#repass").parent().children("span").html('las contraseÃ±as no coinciden').show();
                  $("#repass").parent().append("<span id='iconorepass' class='glyphicon glyphicon-remove form-control-feedback'></span>");  
            return false;
        }
        else if(pass == re_pass)
        {    
                  $("#iconorepass").remove();
                  $("#repass").parent().parent().removeClass("has-error has-feedback");
                  $("#repass").parent().parent().addClass("has-success has-feedback");
                  $("#repass").parent().children("span").html('').show();
                  $("#repass").parent().append("<span id='iconorepass' class='glyphicon glyphicon-ok form-control-feedback'></span>");  
            return true; 
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
        
        }
    }//fin keyup repass


  //esta validacion es para el formulario de registro de usuarios
function contras() {
        var pass = $("#pass").val();
        var re_pass=$("#repass").val();
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    TyC = document.getElementById("contrato");
    
        if( $("#correo").val() == "" || !emailreg.test($("#correo").val()) )
        {
            $('#msgMail').html("<span style='color:#f00'>Ingrese un email correcto</span>");
      document.getElementById("correo").focus();
      return false;
    }else if(pass != re_pass)
        {
            $("#repass").css({"background":"#F22" }); //El input se pone rojo
        $("#mensaje4").fadeIn("slow");
      document.getElementById("repass").focus();
            return false;
        }else if(!TyC.checked) {
          $("#mensajeTer").html("<span style='color:red;'>Debe aceptar los terminos.</span>"); 
            return false;
    }
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
            return true;

}

//funcion para loguearnos 
function ingreso(){              
    
    var email = $("#email").val();
    var pass = $("#cont").val();
     if(email!="" && pass!=""){
     $.ajax({
          type: "POST",
          url: "funciones.php",
          data:("user="+email+"&pass="+pass),
          dataType: "html",
          beforeSend: function(){
                 
                  $("#emailIcon").remove(); $("#email").parent().children("span").html('<font class="sombra">Verificando</font> <img class="loader" src="media/ajax.gif"/>').show();
                  $("#contIcon").remove(); $("#cont").parent().children("span").html('<font class="sombra">Verificando</font> <img "loader" src="media/ajax.gif"/>').show();
                                },
          success: function(data){    
                     
                  $("#iconousuario").remove();
                  $("#usuario").parent().parent().removeClass("has-error");
                  $("#usuario").parent().parent().addClass("has-success has-feedback"); $("#usuario").parent().children("span").html('').hide();
                  $("#usuario").parent().append("<span id='iconousuario' class='glyphicon glyphicon-ok form-control-feedback'></span>"); 
              
        if(data == "1"){       
                  $("#iconousuario").remove();
                  $("#usuario").parent().parent().addClass("has-error has-feedback");
                  $("#usuario").parent().children("span").html('El nombre de usuario ya existe.').show();
                  $("#usuario").parent().append("<span id='iconousuario' class='glyphicon glyphicon-remove form-control-feedback'></span>"); 
           document.getElementById("usuario").value = "";
                  $("#usuario").focus();
                 }
                        }
             });     
     }
}


//funciones que dan aviso sobre que se va a restablecer la contraseÃ±a
function aviso(){
  document.getElementById("Rventana").style.visibility="visible";
        var correo = $("#mail").val();
    $("#Mail").html("<span style='color:red;'> "+correo+"</span>"); 
}
function Caviso(){
  document.getElementById("Rventana").style.visibility="hidden";
}

//funciones que dan aviso sobre los terminos y condiciones
function Atermi(){
  document.getElementById("terminos").style.visibility="visible";
}
function Ctermi(){
  document.getElementById("terminos").style.visibility="hidden";
}

//esta funcion es para comprobar si el correo existe para cambiar la contraseÃ±a del usuario
function cambiar() {
    Caviso();
    var email = $("#mail").val();
                 $.ajax({
                type: "POST",
                url: "restablecer.php",
                data: "dato="+email,
                beforeSend: function(){
                    
                  $("#iconocorreo").remove(); $("#mail").parent().children("span").html('<font class="sombra">Verificando</font> <img  class="loader" src="media/ajax.gif"/>').show();
                },
        success: function(data){                                                 
                       if(data == "0"){                              $("#iconocorreo").remove();
                  $("#mail").parent().parent().addClass("has-error has-feedback");
                  $("#mail").parent().children("span").html('No puede dejar el campo vacio.').show();
                  $("#mail").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>"); 
                          } 
            if(data == "1"){                                        $("#iconocorreo").remove();
                  $("#mail").parent().parent().addClass("has-error has-feedback");
                  $("#mail").parent().children("span").html('Este correo no esta registrado.').show();
                  $("#mail").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>"); 
                          }
            if(data == "2"){                                        
              window.location="login.html";
                          }
                              }
            });
    }

//funcion que pone activo o incativo el boton de los formularios
function activaBoton(){
  
  var terminos= document.getElementById("check");
  
      if(terminos.checked){
        document.getElementById("enviar").disabled=false; 
      }
      else{
        document.getElementById("enviar").disabled=true;        
        }
}

//funcion para validar los campos de texto
function validaTexto(id){
    
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
        
    }
    else if($("#"+id).val().length < 6){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo debe contener al menos 6 caracteres").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto que son numericos
function validaNum(id){
    
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
        
    }
    else if( !(/^\+\d{2,3}\s\d{9}$/.test($("#"+id).val()))){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Patron correcto del numero +34 900900900").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
        
    }
   else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto en los que introducimos correos
function validaMail(id){
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
        
    }
    else if( !emailreg.test($("#"+id).val()) ) {
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("ingresa un email correcto como mail@ejemplo.com").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto de tipo contraseÃ±a 
function validaContra(id){
    var contra= /^[a-zA-Z0-9]$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo no puede estar vacio.").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
        
    }
    else if($("#"+id).val().length < 6){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo debe contener al menos 6 caracteres").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para ver si estan activadas las mayusculas en algun campo
function Mayusculas(e){
var elemento = event.srcElement ? event.srcElement : event.target;
    var oID= elemento.id;
kc=e.keyCode?e.keyCode:e.which;
sk=e.shiftKey?e.shiftKey:((kc==16)?true:false);
    if(((kc>=65&&kc<=90)&&!sk)||((kc>=97&&kc<=122)&&sk ))
    {
        $("#icono"+oID).remove();
        $("#"+oID).parent().addClass("has-warning  has-feedback");
        $("#"+oID).parent().children("span").text("Las mayusculas estan activadas").show();
        $("#"+oID).parent().append("<span id='icono"+oID+"' class='glyphicon glyphicon-exclamation-sign form-control-feedback'></span>");
    }
    else{
        $("#"+oID).parent().removeClass("has-warning  has-feedback");
        $("#"+oID).parent().children("span").text("").hide();
    }
}

//si el mail es valido esta funcion nos muestra el mensaje que da aviso de que se va a cambiar la contraseÃ±a
function restablece(id){
    var ok=""+id;
    if(validaMail(ok)==true){
        aviso();
    }
}


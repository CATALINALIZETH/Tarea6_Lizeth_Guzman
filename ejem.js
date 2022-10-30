function myFunction() {
  // Get the value of the input field with id="palabra"
  let x1 = document.getElementById("palabra").value;
  const regex = /^(p|s).+(o|a)$/i;

  if (regex.test(x1)) {
    text="Nombre valido";
  }
  else {
    text="Nombre no valido";
  }

  document.getElementById("valida_palabra").innerHTML = text;

    // Get the value of the input field with id="numeroc"
    let x3 =document.getElementById("numeroc").value;
    const regex33 = /(^(m|c)?[0-9]{2}(120|121)[0-9]{3})$/;
  
    if (regex33.test(x3)) {
      text="Numero de control valido";
    }
    else {
      text="Numero de control no valido";
    }
  
    document.getElementById("valida_numeroc").innerHTML = text;

     // Get the value of the input field with id="correo"
 
    let x5 = document.getElementById("correo").value;
    const regex5 = /^l[m,c]?([0-9]{2}(120|121)[0-9]{3})(@)(morelia)(.)(tecnm)(.)(mx)$/i;
    if (regex5.test(x5)){
      text="Correo institucional Valido";
    }else{
      text="Correo institucional Invalido";
    }
    document.getElementById("valida_correo").innerHTML=text;

  // Get the value of the input field with id="numero"
  let x2 = document.getElementById("numero").value;
  const regex2 = /^[443].+[0-9]{7}$/i;

  if (regex2.test(x2)) {
    text="Numero valido";
  }
  else {
    text="Numero no valido";
  }

  document.getElementById("valida_numero").innerHTML = text;

  let x6 = document.getElementById("rfc").value;
  const regex6 =/^[A-Z]{4}([9 | 0 ]{1})([0-9]{1})*((0|1){1})(0([1-9]{1})|1([0-2]{1}))([1-9]{1})([A-Z|0-9]{3})$/i;
  if(regex6.test(x6)){
    text="RFC Valido";
  }else{
    text="RFC Invalido";
  }
  document.getElementById("valida_rfc").innerHTML=text;
}
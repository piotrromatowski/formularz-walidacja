let guzik = document.querySelector('button');
let pole = document.getElementsByName('mail');





guzik.onclick = function validateForm() {
    let x = document.forms["form1"]["mail"].value;
    if (x == "") {
      alert("Wpisz adres e-mail");
      return false;
    }
  }


//console.log('hello!!!!!')

/*
const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  console.log(formData);



  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/contact');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onreadystatechange = function () {
    //alert("this function inside");
    //console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }
    else {
      alert('Something Error');
    }
  }
  xhr.send(JSON.stringify(formData));


})
}
*/
function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://by3l0mkbi7.execute-api.us-west-2.amazonaws.com/prod";


  var name = document.getElementById("name-input").value;
  var phone = document.getElementById("phone-input").value;
  var email = document.getElementById("email-input").value;
  var desc = document.getElementById("description-input").value;
  if (name == "" || phone == "" || email == "" || desc == "") {
    alert("Please Fill All Required Field");
    return false;
  }

  nameRE = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  if (!nameRE.test(name)) {
    alert("Name entered, is not valid");
    return false;
  }

  phoneRE = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  if (!phoneRE.test(phone)) {
    alert("Phone number entered, is not valid");
    return false;
  }

  emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRE.test(email)) {
    alert("Email Address entered, is not valid");
    return false;
  }
  var data = {
    name: name,
    phone: phone,
    email: email,
    desc: desc
  };

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://by3l0mkbi7.execute-api.us-west-2.amazonaws.com/prod/email");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200) {
        console.log('successful');
        document.getElementById("contact-form").innerHTML = "<p>Thank you for your message/feedback our team will get back to you soon!</p>";


      } else {
        console.log('failed');
      }
    }
  }

  document.getElementById('contact-form').reset();

}


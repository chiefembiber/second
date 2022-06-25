//console.log('hello!!!!!')

const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log('submit clicked')
  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  console.log(formData);
  /* const options = {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       name: name,
       email: email,
       subject: subject,
       message: message
     })
   }*/


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


  /*
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      alert("this function inside");
      alert(xhr.responseText);
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
  }
  xhr.open('POST', '/contact', true);
  xhr.send(null);



  */

})




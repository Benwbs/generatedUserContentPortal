import React from "react";


function Forms() {
  function sendForm(event) {
    event.preventDefault(); // Prevent default form submission

    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");

    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;

    fetch("https://azuresaturdayapi2.azure-api.net/upload", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '4a53f80b4e884f56beb33e97c5b9b71c',
      },
      body: JSON.stringify({ // Convert the body to JSON
        "name": lastname,
        "firstname": firstname,
        "email": email
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
      });
  }

  return (
    <>
      <div className="formContainer">
        <form className="userForm" onSubmit={sendForm}> {/* Attached onSubmit event to form */}
          <input type="text" inputMode="text" id="lastname" placeholder="Name*" required />
          <input type="text" inputMode="text" id="firstname" placeholder="Vorname*" required />
          <input type="text" inputMode="email" id="email" placeholder="Email*" required />

          <button type="submit">Absenden</button>
        </form>
      </div>
    </>
  );
}

export default Forms;

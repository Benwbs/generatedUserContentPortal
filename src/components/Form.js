import React from "react";
import "./Form.css"

function Form() {
    function sendForm() {
        const firstnameInput = document.getElementById("firstname");
        const lastnameInput = document.getElementById("lastname");
        const emailInput = document.getElementById("email");

        const firstname = firstnameInput.value;
        const lastname = lastnameInput.value;
        const email = emailInput.value;

        fetch("https://prod-227.westeurope.logic.azure.com:443/workflows/b7fd05ceb9de4f62806f3e2a87cde63d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vqF1SPQQu6VFMhKA5idOpyNPmP75H33HVCof19kp01Y", {
            method: 'POST',
            body: {
                "name": lastname,
                "firstname": firstname,
                "email": email
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Response from server:', data);
            })
            .catch((error) => {
              console.error('Error sending form data:', error);
            });
    }

    return(
        <>
            <div className="formContainer">
                <form className="userForm">
                    <input type="text" inputMode="text" id="lastname" placeholder="Name*" required></input>
                    <input type="text" inputMode="text" id="firstname" placeholder="Vorname*" required></input>
                    <input type="text" inputMode="email" id="email" placeholder="Email*" required></input>
                
                    <button type="submit" onSubmit={sendForm}>Absenden</button>
                </form>
            </div>
        </>
    );
}

export default Form;

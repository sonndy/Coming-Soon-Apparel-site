
window.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("email");
    const submitEmailBtn = document.querySelector(".emailBtn");
    const errorIcon = document.querySelector(".error");
    const inputContainer = document.querySelector(".buttonInput");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }


        const getEmail = function () {
            submitEmailBtn.addEventListener("click", () =>{  
                let validEmail = validateEmail(emailInput.value);
                console.log(validEmail)
                // emailInput.value = "";

                if(validEmail === false) {
                    errorIcon.classList.add("shown");
                    //appending the error message under the input button
                    const errorMessage = document.createElement("div");
                    errorMessage.classList.add("error-message");
                    // console.log(errorMessage.innerText)
                    errorMessage.textContent = "Please provid a valid email address";
                    
                    inputContainer.parentNode.insertBefore(errorMessage, inputContainer.nextSibling)
                    // inputContainer.append(errorMessage);
                } else {
                    errorIcon.classList.remove("shown");

                    let checkError = document.querySelector(".error-message");
                    if(checkError !== null)
                    {
                        checkError.remove();
                    }
                    // console.log(checkError);
                    
                }

            })


    }

    getEmail();
    console.log(emailInput.value)

})
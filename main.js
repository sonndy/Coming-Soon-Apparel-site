
window.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("email");
    const submitEmailBtn = document.querySelector(".emailBtn");
    const errorIcon = document.querySelector(".error");

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
                } else {
                    errorIcon.classList.remove("shown")
                }

            })


    }

    getEmail();
    console.log(emailInput.value)

})
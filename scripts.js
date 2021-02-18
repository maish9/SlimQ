
function setFormMessage(formElement,type,message){
    const messageElement = formElement.querySelector(".form_message");
    
    
    messageElement.textContent = message;
    messageElement.classList.remove(".form_message-success","form_message-error");
    messageElement.classList.add(".form_message-${type}");
}  
function setInputError(inputElement,message){
    inputElement.classList.add(".form_input-error");
    inputElement.parentElemnt.querySelector(".form_input-error-message").textContext=message;
}   

function clearError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElemnt.querySelector(".form_input-error-message").textContext="";
}
document.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    //document.querySelector("#linkCreateAccount").addEventListener("click",e =>{
      // e.preventDefault();
       // loginForm.classList.add("form--hidden");
       // createAccountForm.classList.remove("form--hidden");
    //});
    //document.querySelector("#linkLogin").addEventListener("click",e =>{
        //e.preventDefault();
       // createAccountForm.classList.add("form--hidden");
        //loginForm.classList.remove("form--hidden");
        
    //});
    
    loginForm.addEventListener("submit",e =>{
       e.preventDefualt();
       
       //perfom AJAX/fecth login.
       setFormMessage(loginForm,"error","Invalid username/password combination");
    });
    
    document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur",e =>{
            if(e.target.id==="signUpuser"&&e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement,"Username must be at least 18 character in length");
            }
        });
        
        inputElement.addEventListener("input", e =>{
           clearError(inputElement); 
        });
    });
});

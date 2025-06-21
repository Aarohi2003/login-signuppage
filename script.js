 const loginBox = document.querySelector('.form-box.login');
    const signupBox = document.querySelector('.form-box.signup');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    

    showSignup.addEventListener('click', (e) => {
  
      e.preventDefault();
      loginBox.classList.remove('active');
      signupBox.classList.add('active');
      
    });

    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupBox.classList.remove('active');
      loginBox.classList.add('active');
    });

    
  function validation(){
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    
    
    if (Email===""){
      alert('please enter the email ');
     return false;

    }

    


    if(Password==""){
      alert('please enter the password');
       return false;
    }
    
   
   
   

    

  }

  function validation1(){
    const Email1 = document.getElementById("email1").value;
    const Password2 = document.getElementById("password2").value;
    const ConfirmPassword = document.getElementById("password3").value;
    const Name = document.getElementById("name").value;
    

  
    if (Name===""){
      alert('please enter your name ');
      return false;
    }
    



    if (Email1===""){
      alert('please enter the email ');
      return false;

    }



    if(Password2==""){
      alert('please enter the password');
      return false;
    }
    


    if (ConfirmPassword==""){
      alert('please enter your confirm password ');
      return false;
    }

  const checkbox = document.getElementById("checkbox");
if (!checkbox.checked) {
  alert("You must agree to the Terms and Conditions.");
  return false;
}


    


  
   
   

    

  }

   function toggleButton(){
    const passwordInput = document.getElementById("password");
    const emoji = document.getElementById("togglePassword");
   
    
    if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  }




   function toggleButton2(){
    const passwordInput2 = document.getElementById("password2");
    const emoji2 = document.getElementById("togglePassword2");
   
    
    if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
  } else {
    passwordInput2.type = "password";
  }
  }





  function toggleButton3(){
    const passwordInput3 = document.getElementById("password3");
    const emoji3 = document.getElementById("togglePassword3");
   
    
    if (passwordInput3.type === "password") {
    passwordInput3.type = "text";
  } else {
    passwordInput3.type = "password";
  }
  }



    



   




    

    

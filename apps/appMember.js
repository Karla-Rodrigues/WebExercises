/*    JavaScript 6th Edition
 *    Created by Karla Rodrigues - Created on March 10, 2019-->
 *    Filename: AppMember.js
 */

// JavaScript source code


// Validate Fields


function validateFields()
{

	// move data to variables
    var firstInput = document.getElementById("FName");
    var lastInput = document.getElementById("LName");
    var ageInput = document.getElementById("Age");
    var addressInput = document.getElementById("Address");
    var cityInput = document.getElementById("City");
    var pcodeInput = document.getElementById("PCode");
    var provinceInput = document.getElementById("Province");
    
    var emailInput = document.getElementById("EMail");
    var psw1Input = document.getElementById("PSW1");
    var psw2Input = document.getElementById("PSW2");
    
    var errorDiv = document.getElementById("errorDiv");

    // remove any password error styling and message
    firstInput.style.background = "";
    lastInput.style.background = "";
    ageInput.style.background = "";
    addressInput.style.background = "";
    cityInput.style.background = "";
    pcodeInput.style.background = "";
    emailInput.style.background = "";
    psw1Input.style.background = "";
    psw2Input.style.background = "";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    
	try
    {
        // Validate First Name
        if (firstInput.value.length == 0)
        {
       		firstInput.style.background = "rgb(255,233,233)";
       		throw "First Name is a mandatory field";        
        }
        
        // Validate Last Name
        if (lastInput.value.length == 0)
        {
       		lastInput.style.background = "rgb(255,233,233)";
       		throw "Last Name is a mandatory field";       
        }
                
        // Validate Age
        if (ageInput.value.length == 0)
        {
       		ageInput.style.background = "rgb(255,233,233)";
       		throw "Age is a mandatory field";        
        }
        var regEx = /^[0-9]*$/;
   		if (regEx.test(ageInput.value))
        {
        	ageInput.style.background = "rgb(255,233,233)";
        	ageInput.style.background = "";
        }
        else 
        {
            throw "Age is a numeric field";
        }
        if (ageInput.value < 18)
        {
       		ageInput.style.background = "rgb(255,233,233)";
       		throw "Age must be over 18";        
        }
        
        // Validate Address
        if (addressInput.value.length == 0)
        {
       		ageInput.style.background = "rgb(255,233,233)";
       		throw "Address is a mandatory field";        
        }
                
        // Validate City  
        if (cityInput.value.length == 0)
        {
       		cityInput.style.background = "rgb(255,233,233)";
       		throw "City is a mandatory field";        
        }
        
        // Validate Post Code
        if (pcodeInput.value.length == 0)
        {
       		pcodeInput.style.background = "rgb(255,233,233)";
       		throw "Post Code is a mandatory field";        
        }
        var regEx = /^[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]$/;
   		if (regEx.test(pcodeInput.value))
        {
        	pcodeInput.style.background = "";
        }
        else 
        {
        	pcodeInput.style.background = "rgb(255,233,233)";
            throw "Invalid Postal Code";
        }
 		
        // Validate E-Mail
        if (emailInput.value.length == 0)
        {
       		emailInput.style.background = "rgb(255,233,233)";
       		throw "E-Mail is a mandatory field";        
        }
        emailInput.value = emailInput.value.toLowerCase();  // convert email address to lowercase
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1)  // replace with conditional expression
        {
            emailInput.style.background = "rgb(255,233,233)";
            throw "Please provide a valid email address";
        }
		
        // validate entered password
        if (psw1Input.value.length == 0)
        {
        	psw1Input.style.background = "rgb(255,233,233)";
        	throw "Password is a mandatory field";
        }
        if (psw1Input.value.length < 8)
        {
        	psw1Input.style.background = "rgb(255,233,233)";
        	throw "Password must be at least 8 characters";
        }
		// validate entered confirmation
        if (psw2Input.value.length == 0)
        {
        	psw2Input.style.background = "rgb(255,233,233)";
        	throw "Must confirm the Password";
        }
        if (psw2Input.value.length < 8)
        {
        	psw2Input.style.background = "rgb(255,233,233)";
        	throw "Password must be at least 8 characters";
        }
        // validate entered password and confirmation
        if (psw1Input.value.localeCompare(psw2Input.value) !== 0)         {
        	psw1Input.style.background = "rgb(255,233,233)";
        	psw2Input.style.background = "rgb(255,233,233)";
        	throw "Password and Confirmation must be equal";
        }
 
        // remove any password error styling and message
        firstInput.style.background = "";
        lastInput.style.background = "";
        ageInput.style.background = "";
        addressInput.style.background = "";
        cityInput.style.background = "";
        pcodeInput.style.background = "";
        emailInput.style.background = "";
        psw1Input.style.background = "";
        psw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        
        // copy valid First Name to Profile Object
 	    profile.FNameProf = firstInput.value;
 	    document.getElementById("FNameProf").innerHTML = profile.FNameProf;
 	    document.getElementById("profile").style.display = "block";
 	    document.getElementById("FNameProf").style.display = "block";

 	    // copy valid Last Name to Profile Object
 	    profile.LNameProf = lastInput.value;
 	    document.getElementById("LNameProf").innerHTML = profile.LNameProf;
 	    document.getElementById("profile").style.display = "block";
 	    document.getElementById("LNameProf").style.display = "block";
    
 	    // copy valid Age to Profile Object
 	  	profile.AgeProf = ageInput.value;
 	  	document.getElementById("AgeProf").innerHTML = profile.AgeProf;
 	  	document.getElementById("profile").style.display = "block";
 	    document.getElementById("AgeProf").style.display = "block";

 	    // copy valid Address to Profile Object
 	 	profile.AddressProf = addressInput.value;
 	  	document.getElementById("AddressProf").innerHTML = profile.AddressProf;
 	  	document.getElementById("profile").style.display = "block";
 	    document.getElementById("AddressProf").style.display = "block";
        
 	    // copy valid City to Profile Object
 	  	profile.CityProf = cityInput.value;
 	  	document.getElementById("CityProf").innerHTML = profile.CityProf;
 	  	document.getElementById("profile").style.display = "block";
 	    document.getElementById("CityProf").style.display = "block";

		// copy valid Post Code to Profile Object
 	  	profile.PCodeProf = pcodeInput.value;
 	  	document.getElementById("PCodeProf").innerHTML = profile.PCodeProf;
 	  	document.getElementById("profile").style.display = "block";
 	    document.getElementById("PCodeProf").style.display = "block";
       
 	    // copy valid Province to Profile Object
        profile.ProvinceProf = provinceInput.value;
        document.getElementById("ProvinceProf").innerHTML = profile.ProvinceProf;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ProvinceProf").style.display = "block";

		// copy valid E-Mail to Profile Object
   		profile.EMailProf = emailInput.value;
   		document.getElementById("EMailProf").innerHTML = profile.EMailProf;
   		document.getElementById("profile").style.display = "block";
    	document.getElementById("EMailProf").style.display = "block";
 		
    }
    catch (msg)
    {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
    }
}

// function to verify information
function setUpPage()
{
	validateFields();
}

// runs setUpPage() function when page loads
// this is to if use explorer it will go like bug to the segundo

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage, validateFields);
}


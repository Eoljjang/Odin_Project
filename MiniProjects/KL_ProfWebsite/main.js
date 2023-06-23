// Global Variables
const btnPhone = document.querySelector("#phone");
const btnEmail = document.querySelector("#email");

// Function that copies phone / email to clipboard upon click.
function copyToClipboard(icon){
    let phoneNumber = 7804927157;
    let email = 'kloepelm@ualberta.ca';

    if (icon === "phone"){
        if (navigator.clipboard){
            navigator.clipboard.writeText(phoneNumber)
            // Sucessfully copies to clipboard.
            .then(function(){
                showSnackBar();
                console.log("Phone number copied to clipboard.");
            })
            // Failed to copy.
            .catch(function(error){
                console.error("Failed to copy phone number.");
            })
        }
        else{
            showSnackBar();
            var tempInput = document.createElement("input");
            tempInput.setAttribute("value", phoneNumber);
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }

    }
    else if (icon === "email"){
        navigator.clipboard.writeText(email)
            .then(function(){
                showSnackBar();
                console.log("Email copied to clipboard.");
            })
            .catch(function(error){
                console.error("Failed to copy email.");
            })
    }
}

function showSnackBar(){
    var notif = document.querySelector("#snackbar");
    notif.className="show";
    setTimeout(()=>{
        notif.className = notif.className.replace("show", "");}, 3000);
}

function main(){
    // Click listeners
    btnPhone.addEventListener("click", () =>{
        copyToClipboard("phone");
    });
    btnEmail.addEventListener("click", () => {
        copyToClipboard("email");
    })
}

main();
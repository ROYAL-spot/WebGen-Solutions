const form = document.getElementById("onboardingForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){

    if (!form.checkValidity()) {
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";
});
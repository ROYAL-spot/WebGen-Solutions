const form = document.getElementById("onboardingForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function() {

    if (!form.checkValidity()) {
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";
});
const steps = document.querySelectorAll(".step")
const indicators = document.querySelectorAll(".step-item")

const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const submitBtn = document.getElementById("submitBtn")

const progressBar = document.getElementById("progressBar")

let currentStep = 0

function fillReview(){

document.getElementById("review_full_name").innerText =
document.querySelector("[name='full_name']").value

document.getElementById("review_business_name").innerText =
document.querySelector("[name='business_name']").value

document.getElementById("review_email").innerText =
document.querySelector("[name='email']").value

document.getElementById("review_industry").innerText =
document.querySelector("[name='industry']").value

document.getElementById("review_description").innerText =
document.querySelector("[name='business_description']").value

document.getElementById("review_customers").innerText =
document.querySelector("[name='target_customers']").value

document.getElementById("review_design").innerText =
document.querySelector("[name='design_style']").value

document.getElementById("review_pages").innerText =
document.querySelector("[name='pages']").value

}

function generateBrief(){

const name = document.querySelector("[name='full_name']").value
const business = document.querySelector("[name='business_name']").value
const industry = document.querySelector("[name='industry']").value
const description = document.querySelector("[name='business_description']").value
const customers = document.querySelector("[name='target_customers']").value
const design = document.querySelector("[name='design_style']").value
const pages = document.querySelector("[name='pages']").value
const notes = document.querySelector("[name='notes']").value

let features = []

if(document.querySelector("[name='feature_contact']").checked) features.push("Contact Form")
if(document.querySelector("[name='feature_booking']").checked) features.push("Booking System")
if(document.querySelector("[name='feature_payments']").checked) features.push("Online Payments")
if(document.querySelector("[name='feature_portal']").checked) features.push("Client Portal")
if(document.querySelector("[name='feature_analytics']").checked) features.push("Analytics Dashboard")

const brief = `
WEBGEN SOLUTIONS – PROJECT BRIEF

Client: ${name}
Business: ${business}
Industry: ${industry}

Website Pages:
${pages}

Requested Features:
${features.join("\n")}

Design Style:
${design}

Business Description:
${description}

Target Customers:
${customers}

Notes:
${notes}
`

document.getElementById("projectBrief").value = brief

}

function updateSteps(){
if(currentStep === steps.length - 1){
fillReview()
generateBrief()
}
steps.forEach((step,i)=>{
step.classList.remove("active")
if(i===currentStep){
step.classList.add("active")
}
})

indicators.forEach((item,i)=>{
item.classList.remove("active")
if(i===currentStep){
item.classList.add("active")
}
})

progressBar.style.width =
((currentStep+1)/steps.length)*100 + "%"

prevBtn.style.display =
currentStep===0 ? "none" : "inline-block"

nextBtn.style.display =
currentStep===steps.length-1 ? "none" : "inline-block"

submitBtn.style.display =
currentStep===steps.length-1 ? "inline-block" : "none"

if(currentStep === steps.length-1){
fillReview()
}

}

nextBtn.addEventListener("click",()=>{
currentStep++
updateSteps()
})

prevBtn.addEventListener("click",()=>{
currentStep--
updateSteps()
})

document.getElementById("copyBrief").addEventListener("click",function(){

const brief = document.getElementById("projectBrief")

brief.select()
document.execCommand("copy")

this.innerText = "Copied!"

setTimeout(()=>{
this.innerText = "Copy Brief"
},1500)

})

updateSteps()
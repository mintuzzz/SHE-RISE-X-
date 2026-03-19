function goToJobs(){

let field = document.getElementById("careerField").value;

if(field === "IT"){
window.open("https://www.linkedin.com/jobs/search/?keywords=IT","_blank");
}

else if(field === "Government"){
window.open("https://www.naukri.com/government-jobs","_blank");
}

else if(field === "Internship"){
window.open("https://internshala.com/internships/","_blank");
}

else{
alert("Please select a field");
}

}

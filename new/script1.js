console.log("hello mounika");
let a=10;
let b=20;
console.log(a+b);
let custname;
let email;
let content;
function details(){
   custname=document.getElementById('name').value;
   email=document.getElementById('email').value;
   content=document.getElementById('loc').value;
//    if(!custname){
//        document.getElementById('names').innerHTML="enter your name";
//        return;

//    }
//   if(!/\S+@\S+\.\S+/.test(email)){
//     alert("Incorrect email");
//     return;
//   }
//   if(!content){
// alert("type something");
// return;
//   } 
//   alert("data submitted");
// }
let isValid = true;
const nameerror=document.getElementById('names');

if (!custname) {
    nameerror.innerHTML = "Enter your name";
    isValid = false;
} else {
    document.getElementById('names').innerHTML = "";
}

if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emails').innerHTML = "Enter a valid email address";
    isValid = false;
} else {
    document.getElementById('emails').innerHTML = "";
}

if (!content) {
    document.getElementById('contents').innerHTML = "Type something";
    isValid = false;
} else {
    document.getElementById('contents').innerHTML = "";
}

if (isValid) {
    alert("Data submitted successfully!");
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('loc').value = "";
}
}

function details(){
    const name=document.getElementById('name').value;
    const content=document.getElementById('loc').value;
    const email=document.getElementById('email').value;

    if((!name)&&(!email)){
    alert('please enter all details before submitting');
    return;
    }
    else if(!email||!/^\S+@\S+\.\S+$/.test(email)){
    alert("Incorrect Email!!");
    return;
    }
    else{
    alert('details shared successfully');
    return;
    }
}
document.querySelector('#name').addEventListener('keypress',(event)=>{
    if(event.which==32 || event.which >64 && event.which <91 || event.which >96 && event.which <123){
    }else{
        event.preventDefault()
    }
})

document.querySelector('#subject').addEventListener('keypress',(event)=>{
    if(event.which==32 || event.which >64 && event.which <91 || event.which >96 && event.which <123){
    }else{
        event.preventDefault()
    }
})
document.querySelector('#mycontact').addEventListener('keypress',(event)=>{
    if(event.which >47 && event.which <58){
    }else{
        event.preventDefault()
    }
})
document.querySelector('#message').addEventListener('keypress',(event)=>{
    if(event.which==32 || event.which >64 && event.which <91 || event.which >96 && event.which <123 || event.which >47 && event.which <58){
    }else{
        event.preventDefault()
    }
})

































// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             subject:{
//                 required:true,
//                 minlength:4
//             }
//             ,name:{
//                 minlength:8,
//                 maxlength:10,
//                 required:true
//             }
//             ,email:{
//                 required:true
//             }
//             ,contact:{
//                 required:true
//             }
//             ,message:{
//                 required:true
//             }
//         },
//         messages:{
//             name:{
//                 minlength:"Characters should between 8 and 10"
//             }
//         }
//     })
// })


// function validation(){
//     let name = document.forms['msgform']['name'].value;
//     let email = document.forms['msgform']['email'].value;
//     let subject = document.forms['msgform']['subject'].value;
//     let message = document.forms['msgform']['message'].value;
//     let contact = document.forms['msgform']['contact'].value;
//     let contactLength = contact.length;

//     if(name == ''){
//         document.getElementById('name').style.borderColor='red';
//     }
//     else{
//         document.getElementById('name').style.borderColor='black';
//     }
//     if(email == ''){
//         document.getElementById('email').style.borderColor='red';
//     }
    


//     if(subject == ''){
//         document.getElementById('subject').style.borderColor='red';
//     }
//     if(message == ''){
//         document.getElementById('message').style.borderColor='red';
//     }
//     if(contact == ''){
//         document.getElementById('mycontact').style.borderColor='red';
//     }
//     if(contactLength<10 || contactLength>10){
//         document.getElementById('mycontact').style.borderColor='red';
//         document.getElementById('lessthan10').style.display = 'block';
//         document.getElementById('lessthan10').innerHTML = 'Enter 10 digits';
//     }
    
// }

// function checknum(event){
//     let x = event.which;

//     document.getElementById('test').innerHTML = x;

//     if(x<48 || x>57){
//         document.getElementById('lessthan10').style.display = 'block';
//         document.getElementById('lessthan10').style.color = 'red';
//         document.getElementById('lessthan10').innerHTML = 'Number only';
//     }else{
//         document.getElementById('lessthan10').style.display = 'none';
//         document.getElementById('lessthan10').style.color = 'black';
//     }
// }

// function checkalph(event){
//     let x = event.which;

//     document.getElementById('test').innerHTML = x;

//     if( x<97 || x>122){
//         document.getElementById('alpherror').style.display = 'block';
//         document.getElementById('alpherror').style.color = 'red';
//         document.getElementById('name').style.borderColor = 'red';
//         document.getElementById('alpherror').innerHTML = 'Alphabets only';
//     }else{
//         document.getElementById('alpherror').style.display = 'none';
//         document.getElementById('name').style.borderColor = 'lightgray';
//     }
// }

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxpX8Muq5pTVNh47Df4EmSUIyaaJLntji66xLtghfOPX3mProzwZv2-DqKELdCMRGZt/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
$(document).ready(function(){
    $("#msg-form").validate({
        rules:{
            subject:{
                minlength:4
            }
            ,name:{
                minlength:8,
                maxlength:10
            }
        },
        messages:{
            name:{
                minlength:"Characters should be more than 8 and less than 10"
            }
        }
    })
})
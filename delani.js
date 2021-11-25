$(document).ready(function(){
    $('#desigining').click(function(){
        $('#design').show();
    });
    $('#design').click(function(){
        $('#design').slideUp();
    });
});

$(document).ready(function(){
    $('#develop').click(function(){
        $('#development').show();
    });
    $('#development').click(function(){
        $('#development').slideUp();
    });
});

$(document).ready(function(){
    $('#product').click(function(){
        $('#productDevelopment').show();
    });
    $('#productDevelopment').click(function(){
        $('#productDevelopment').slideUp();
    });
});



userForm.addEventListener('submit',function(event) {
   event.preventDefault();
   var inputName = $('#userName').val();
   var userEmail = $('email').val();
   var userMessage =$('message').val();

   if(inputName !== '' && userEmail !== '' && userMessage !== ''){
       alert(`Hello ${inputName}. We have recieved your feedback and we will get back to you.`);
       
   } else {
       alert('Please fill all fields');
   }
 
})
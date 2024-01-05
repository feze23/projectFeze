$(document).ready(function(){
    $(".btn-login").click(function (){
        var username = $("#name").val();
        var password =$("#password").val(); 
        if(username !== ""  && password !== ""){
            alert("your are logged");
        }else{;
            $(".errorMessage").css("display", "block"); 
            $("input").css("border-color", "red"); 
        }
    })
    $(".btn-accountCreate").click(function(){ 
        $("#name").css("display", "none"); 
        $("#password").css("display","none"); 
        $("p").css("display", "none"); 
        $(".btn-accountCreate").css("display", "none"); 
        $(".btn-login").css("display", "none"); 
        $("form").html("<input type='email' name='email' id='email' placeholder='Enter your email adress'><br><br><input type='password' name='password' id='password' placeholder='Enter your password'><br><br></br> <input type='password' name='password id='password' placeholder='Confirm your password'><br><br><button class='btn-accountCreated'>Register</button>");
    })

})
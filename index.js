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
})
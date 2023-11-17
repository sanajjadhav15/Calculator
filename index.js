$(document).ready(function(){
    let currentValue="";

    // for handling digits
    $(".digit").on("click",function(){
        let digit=$(this).text();
        currentValue+=digit;
        $("#result").val(currentValue);
    });

    // for handling C button
    $(".clear").on("click",function(){
        currentValue="";
        $("#result").val(currentValue);
    });

    // for handling backspace
    $(".backspace").on("click",function(){
        currentValue=currentValue.slice(0,-1);
        $("#result").val(currentValue);
    });

    // for handling operators
    $(".operator").on("click",function(){
        let operator=$(this).text();
        currentValue+=operator;
        $("#result").val(currentValue);
    });

    // for handling . button
    $(".dot").on("click",function(){
        currentValue+=".";
        $("#result").val(currentValue);
    });

    // for handling = button
    $(".calculate").on("click",function(){
        try{
            const answer=eval(currentValue);
            $("#result").val(answer);
            currentValue=answer;
        }catch(error){
            $("#result").val("error");
        }
    });
});
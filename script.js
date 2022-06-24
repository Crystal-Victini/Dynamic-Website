$(document).ready( function(){
    alert("Hello and welcome to my website that gives you a bit of info about me~! I hope you have fun reading through everything!");

    $("#Pic").hover ( function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/c_scale,w_750/v1652144342/babbie.jpg");
        $("#change").text("Her name is Cookie and she's just a little over 10 months old now~");
        $("#change").css({"background-color": "#F49F1C", "color": "#030E4F"});
    },
    function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/c_scale,w_750/v1634319412/Picture%20Of%20Me.jpg");  
        $("#change").text("Hover your mouse over my picture to see a picture of my puppy!");
        $("#change").css({"background-color": "#030E4F", "color": "#F49F1C"});
    });

    $("#bigg").click( function(){
        $("#name").css({"font-size": "150px", "height": "200px"});
    });

    $("#smol").click( function(){
        $("#name").css({"font-size": "50px", "height": "100px"});
    });

    $("#meh").click( function(){
        $("#name").css({"font-size": "100px", "height": "150px"});
    });

    $("#lm").on("click", function(){
        if($(this).is(":checked")){
            $("html").css("filter", "invert(1) hue-rotate(180deg)");
        }
        else{
            $("html").css("filter", "invert(0) hue-rotate(0deg)");
        }
    });
})
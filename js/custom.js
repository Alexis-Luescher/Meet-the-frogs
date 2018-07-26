
//click function for frog names
    $(".btn").click(function(){
        alert($(this).prev("img").attr("alt"));
    });

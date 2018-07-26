
//Click function for frog name
    $(".btn").click(function(){
        alert($(this).prev("img").attr("alt"));
    });

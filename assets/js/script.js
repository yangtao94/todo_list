//check off tasks by clicking
console.log("Im here!")

$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
//stop triggering on parent events
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    
    event.stopPropagation();

    
})


//add new toDos

$("input[type='text']").on("keypress",function(event) {
    if (event.which === 13) {
        //enter key
        let value = $(this).val();
        $(this).val("");
        // console.log(value);
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ value + "</li>");
    }
})

//toggle icon
$(".fa-basketball-ball").on("click",function() {
    
    $("input[type='text']").fadeToggle();
})
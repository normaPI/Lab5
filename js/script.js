
$("#ButtonPost").on("click",function(e){
    //alert("click con JQuery")
    e.preventDefault();
    var lab = $("#todoText").val();

    $('#todoList').append(
        $(document.createElement('input')).prop({
            id: 'myCheckBox',
            name: 'ToDos',
            type: 'checkbox'
        })
    ).append(
        $(document.createElement('label')).prop({
            for: 'myCheckBox'
        }).html(lab)
        ).append(document.createElement('br'));

});

$("#ButtonClear").on("click",function(){
    $("[name = 'ToDos']").prop('checked', false);  
});

$("#ButtonMark").on("click",function(){
    $("[name = 'ToDos']").prop('checked', true);  
});

$("#ButtonDelete").on("click",function(){
    $('#todoList').empty();
});

/* Javascript for MyXBlock. */
function MyXBlock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('p', element).click(function(eventObject) {
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({"hello": "world"}),
            success: updateCount
        });
    });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
    
    window.onload = function () {
        console.log(DCL.instances)
    
        DCL.instances["my_test_1"].on("feedback", function(payload) {
            if (payload.correct) {
                alert("You rock!");
                console.log("this is noice", payload)
            } else {
                console.log("wrong", payload)
            }
        });
    
    ;}
}

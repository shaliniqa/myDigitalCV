$(document).ready(function(){
    $("#project>div#hoverHere").mouseenter(function(){
        $("#project>div>ul>li>img").animate({
            //left: '150px',
            opacity: '1',
            height: '350px',
            width: '300px'
        });
    });
});

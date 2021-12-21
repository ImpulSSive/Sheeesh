$(document).ready(function (){
    $('#play').click(function (){
        $('#pause').removeClass('active');
        $(this).addClass('active');
        $('.progressBar').css('animation-play-state','running');
    });
    $('#pause').click(function (){
        $('#play').removeClass('active');
        $(this).addClass('active');
        $('.progressBar').css('animation-play-state', 'paused');
    });
});
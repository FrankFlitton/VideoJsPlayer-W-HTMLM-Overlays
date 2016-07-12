jQuery.fn.fadeOutAndRemove = function(speed){
    $(this).fadeOut(speed,function(){
        $(this).remove();
    })
}


// Close overlay when play button is pressed
    
    $( ".video-container" ).click(function() {
      $(this).children( ".text-overlay" ).fadeOutAndRemove('fast');
    });
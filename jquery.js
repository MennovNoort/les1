$(document).ready(function () {
    $('#Abdullah').click(function () {
            $('#Abdullah img').hide(5000).delay().show(2000);
        })
        //Nu Mandela
    $('#Mandela').hover(function () {
        $('#Mandela img').fadeOut(2000);
    }, function() {
        $('#Mandela img').fadeIn(2000);
    })
    
       $('#Poetin').hover(function () {
        $('#Poetin img').fadeOut(5000);
    }, function() {
        $('#Poetin img').fadeIn(2000);
    })
    $(document).ready(function () {
        $('#RonnieFlex').click(function () {
            $('#RonnieFlex img').hide(1000).delay().show(2000);
        })
    })
})


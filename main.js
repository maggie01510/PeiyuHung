$(document).ready(function(){
    $('.nature').on("click", function(){
        $('.natureView').toggle('slow');
        var x=0;
        $(".btn_blue.left").click(function(){
            if(x<0){
                x+=10;
                $(".imgNature").css('transform','translateX('+x+'%)')
            } else {
                $(".imgNature").css('transform','translateX(0%)')
            }
        })
        $(".btn_blue.right").click(function(){
            if(x>-79){
                x-=10;
                $(".imgNature").css('transform','translateX('+x+'%)')
            } else {
                $(".imgNature").css('transform','translateX(-80%)')
            }
        })
    });
});

$(document).ready(function(){
    $('.architecture').on("click", function(){
        $('.arcView').toggle('slow');
        var x=0;
        $(".btn_blue.left").click(function(){
            if(x<0){
                x+=10;
                $(".imgArc").css('transform','translateX('+x+'%)')
            } else {
                $(".imgArc").css('transform','translateX(0%)')
            }
        })
        $(".btn_blue.right").click(function(){
            if(x>-79){
                x-=10;
                $(".imgArc").css('transform','translateX('+x+'%)')
            } else {
                $(".imgArc").css('transform','translateX(-80%)')
            }
        })
    });
});

$(document).ready(function(){
    $('.events').on("click", function(){
        $('.eventsView').toggle('slow');
        var x=0;
        $(".btn_blue.left").click(function(){
            if(x<0){
                x+=10;
                $(".imgEvents").css('transform','translateX('+x+'%)')
            } else {
                $(".imgEvents").css('transform','translateX(0%)')
            }
        })
        $(".btn_blue.right").click(function(){
            if(x>-79){
                x-=10;
                $(".imgEvents").css('transform','translateX('+x+'%)')
            } else {
                $(".imgEvents").css('transform','translateX(-80%)')
            }
        })
    });
});

$(document).ready(function(){
    $('.delicacy').on("click", function(){
        $('.foodView').toggle('slow');
        var x=0;
        $(".btn_blue.left").click(function(){
            if(x<0){
                x+=10;
                $(".imgFood").css('transform','translateX('+x+'%)')
            } else {
                $(".imgFood").css('transform','translateX(0%)')
            }
        })
        $(".btn_blue.right").click(function(){
            if(x>-79){
                x-=10;
                $(".imgFood").css('transform','translateX('+x+'%)')
            } else {
                $(".imgFood").css('transform','translateX(-80%)')
            }
        })
    });
});


var zangieflife = 3;
var guilelife = 3; 


$(".pa-button").on("click", function () {
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    console.log(zangief,"ランダム数字");
    
    if(zangief === 0){
    $("h2").text(">ザンギは掴み技を出した！");
    $('#zan').html('<img src="img/zan-pa.png" width="300px" alt="zangief">');
    $('#gui').html('<img src="img/guile-pa.gif" width="300px" alt="guile">');
    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').html('<img src="img/zan-nomal.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
            $('#gui').html('<img src="img/guile-nomal.gif" width="300px" alt="guile">');
            $("h2").text(">それぞれの攻撃が外れた！");
        }
    });

    } else if (zangief === 1){
        $("h2").text(">ザンギは大きく飛び上がる、フライングボディプレス！");
        $('#zan').html('<img src="img/zan-gu.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-pa.gif" width="300px" alt="guile">');
        zangieflife = zangieflife - 1;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">サマーソルトキックで撃ち落とした！ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-damage.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-win.gif" width="300px"  alt="guile">');
                $("h2").text(">ガイル、サマソで撃ち落とす！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ザンギ、バニシングフラットをくりだしてきた！！");
        $('#zan').html('<img src="img/zan-choki.gif" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-pa.gif" alt="guile">');
        guilelife = guilelife - 1;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">着地したガイルに攻撃が降り注ぐ！ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-win.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-damage.gif" width="300px" style="transform: scale(-1, 1); alt="guile">');
                $("h2").text(">ガイル、サマソの着地を狩られてダメージ！");
            }
        });

    }
});

$(".choki-button").on("click", function () {
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    console.log(zangief,"ランダム数字");

    if(zangief === 0){
    $("h2").text(">ザンギは掴み技を出した！");
    $('#zan').html('<img src="img/zan-pa.png" width="300px" alt="zangief">');
    $('#gui').html('<img src="img/guile-choki.gif" width="300px" alt="guile">');
    zangieflife = zangieflife - 1;
    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ソニックブーム直撃！ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $('h2').text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').html('<img src="img/zan-damage.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
            $('#gui').html('<img src="img/guile-win.gif" width="300px" alt="guile">');
            $("h2").text(">ガイルのソニブがクリティカルヒット！");
        }
    });

    } else if (zangief === 1){
        $("h2").text(">ザンギは大きく飛び上がる、フライングボディプレス！");
        $('#zan').html('<img src="img/zan-gu.gif" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-choki.gif" alt="guile">');
        guilelife = guilelife - 1;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ソニックブームをすり抜けたブレスが直撃！ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-win.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-damage.gif" width="300px" style="transform: scale(-1, 1); alt="guile">');
                $("h2").text(">ソニブ打ってたガイル、モロに食らった！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ザンギ、バニシングフラットをくりだしてきた！！");
        $('#zan').html('<img src="img/zan-choki.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-choki.gif" width="300px" alt="guile">');
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="300px">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="300px">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').html('<img src="img/zan-nomal.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
            $('#gui').html('<img src="img/guile-nomal.gif" width="300px" alt="guile">');
            $("h2").text(">ソニックブーンが…消された…！相打ち！");
            }
        });

    }
});

$(".gu-button").on("click", function () {
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    console.log(zangief,"ランダム数字");

    if(zangief === 0){
    $("h2").text(">ザンギは掴み技を出した！");
    $('#zan').html('<img src="img/zan-pa.png" width="300px" alt="zangief">');
    $('#gui').html('<img src="img/guile-gu.gif" width="300px" alt="guile">');
    guilelife = guilelife - 1;
    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife === 0){
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">つかまれてしまった！ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#all').show();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').hide();
            $('#gui').hide();
            $('#all').html('<img src="img/tsukamare.png" width="100%" style="transform: scale(-1, 1); alt="guile">');
            $("h2").text(">つかまれた！");
        }
    });


    } else if (zangief === 1){
        $("h2").text(">ザンギは大きく飛び上がる、フライングボディプレス！");
        $('#zan').html('<img src="img/zan-gu.gif" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-gu.gif" alt="guile">');
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-nomal.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-nomal.gif" width="300px" alt="guile">');
                $("h2").text(">お互いが技をスカす！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ザンギ、バニシングフラットをくりだしてきた！！");
        $('#zan').html('<img src="img/zan-choki.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
        $('#gui').html('<img src="img/guile-gu.gif" width="300px" alt="guile">');
        console.log(zangieflife);
        console.log(guilelife);
        zangieflife = zangieflife - 1;
        $(".dounaru-button").on("click", function () {
            if(zangieflife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">足払い直撃！ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="300px">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife === 0){
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="300px">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-damage.gif" width="300px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-win.gif" width="300px"  alt="guile">');
                $("h2").text(">足元が、おるすだぜ！");
                }
        });


    }
});

$(function () {
    //正则表达式
    //手机号
    var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/;
    //用户名
    var userNameStr = /^[0-9a-zA-Z_]{4,8}$/;
    //密码
    var passwordStr = /^[0-9a-zA-Z_]{6,12}$/;


    var ipt = document.getElementsByTagName('input')
    var tishi = document.getElementsByClassName('error')
    var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

    // 获取随机验证码
    var num = parseInt(Math.random() * 10000)
    console.log(num);
    var suiji = $('#suiji')
    suiji.on('click', function () {
        alert('您的验证码为：' + num + '(请在60秒之内输入)')
        suiji.attr('disabled', true);
        var i = 60;
        suiji.val(i + '秒之后获取验证码');
        var time = setInterval(function () {
            i--
            suiji.val(i + '秒之后获取验证码');
            if (i == 0) {
                clearInterval(time);
                i = 60;
                suiji.attr('disabled', false);
                suiji.val('重新获取验证码');
            }
        }, 1000)
    })

    //手机号验证

    $('#phone-number').on('blur', function () {
        if ($('#phone-number').val() == '' || phoneStr.test($('#phone-number').val()) == false) {
            $('.infoPhone').show();
        } else {
            $('.infoPhone').hide();
        }
    });
    $('#img-code').on('blur', function () {
        if ($('#img-code').val() != 'r2b7') {
            $('.infoCode1').show();
        } else {
            $('.infoCode1').hide();
        }
    });
    $('#get-code').on('blur', function () {
        if ($('#get-code').val() == '') {
            $('.infoCode2').show();
        } else {
            $('.infoCode2').hide();
        }
    });

    $('#username').on('blur', function () {
        if ($('#username').val() == '' || userNameStr.test($('#username').val()) == false) {
            $('.infoUser').show();
        } else {
            $('.infoUser').hide();
        }
    });
    $('#password').on('blur', function () {
        if ($('#password').val() == '' || passwordStr.test($('#password').val()) == false) {
            $('.infoPass').show();
        } else {
            $('.infoPass').hide();
        }
    });
    $('#re-password').on('blur', function () {
        if ($('#re-password').val() != $('#password').val() || $('#re-password').val() == '') {
            $('.infoRePass').show();
        } else {
            $('.infoRePass').hide();
        }
    });

    $('.regist').on('click', function () {
        var phoneNumber = $('#phone-number').val();
        var imgCode = $('#img-code').val();
        var code = $('#get-code').val();
        var userName = $('#username').val();
        var password = $('#password').val();
        var rePassword = $('#re-password').val();
        $.ajax({
            type: "post",
            url: "http://192.168.0.104:3000/users/register",
            data: "&phone=" + phoneNumber + "&code=r2b7&username=" + userName + "&password=" + password,
            success: function (res) {
                console.log(res);
                if (res.status == 200) {
                    // $('.success').html('注册成功! ');
                    // var i = 2;
                    // var time = setInterval(function () {
                    //     i--;
                    //     $('.success').html('注册成功! ' + i + ' 秒之后跳转到登录面');
                    //     if (i == 0) {
                    //         clearInterval(time);
                    //         window.location.href = './login.html';
                    //     }
                    // }, 1000);
                } else {
                    alert(res.msg);
                }
            }
        });
    });

    // 判断两次密码是否一致

})
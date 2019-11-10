function rec() {

    var username = document.getElementById("account");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value  == "") {

        alert("请输入密码");

    } else if(username.value == "100" && pass.value == "ncuhome"){

        var mymessage=confirm("个人信息\n姓名：云家园\n学号：100\n性别：男\n地址：江西抚州市\n手机号：18170415733");
        if(mymessage==true) {
            window.location.href="https://os.ncuos.com/api/user/token";
        }

    } else {

        alert("请输入正确的用户名和密码！")

    }
}

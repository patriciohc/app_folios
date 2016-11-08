

var Login = {

    user: null,

    login: function(){
        user = {
            username: $("#txtUserName").val(),
            password: $("#txtPassword").val(),
        }
        var url = "/token-auth/";
        $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: url,
                data: JSON.stringify(user),
                async: false,
                dataType: "json",
                success: Login.init,
                error: Login.errorLogin
        });
    },
    // obtiene datos del servidor
    init: function(req){

        var token = req.token;
        if (token == null) {
            return false;   
        }
        tools.putCookie("user", req.user.userName);
        tools.putCookie("token", token);
        Login.showRegistroFolios();
    },
    // obtiene datos de las cookies
    initFromLocal: function(){
        var user = tools.getCookie('user');
        var token = tools.getCookie('token');
        if (user && token) {
            Login.user = {
                username: user,
                token: token,
            }
            Login.showRegistroFolios();
            return true;
        } else {
            return false;
        }
    },

    showRegistroFolios: function(){
        $("#userName").html(user.username);
        $("#login").hide();
        $("#navBar").show();
        $("#registroFolios").show();        
    },

    close: function(){
        tools.deleteCookie("user");
        tools.deleteCookie("token");
    },

    getUser: function(){
        var user = tools.getCookie('user');
        return user;
    },

    errorLogin: function (err){
        //if (err.status == 400){
            tools.deleteCookie('user');
            alert(err);
            //tools.msgError("usuario no registrado!");
        //}
    }

}
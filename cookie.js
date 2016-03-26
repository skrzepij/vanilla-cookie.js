//COOKIES
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

;(function checkCookie() {
  if ( !document.getElementById('cookie-accept') ) {
    return;
  }

  var cookieAccept = document.getElementById('cookie-accept'),
      body = document.querySelector('body');
      user = getCookie("cookiePerm");

  if ( user == 1 ) {
    return;
  }

  if (user != 1) {
      body.classList.add("cookiePopup"); //IE10++ only
  }

  cookieAccept.addEventListener('click', function() {
    body.classList.remove("cookiePopup"); //IE10++ only
    setCookie('cookiePerm',1, 356);
  });

})();

function trafficshield(post,url,header) {
    let http = new XMLHttpRequest;
        http.open(post, url), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onload = () => {
        const obj = JSON.parse(http.response);
        if(obj.zrc == "" && obj.type == "0"){
          if(window.location.href !== obj.url){
              window.location.replace(obj.url);
          }else{
            setTimeout(function() {
                    for (var e, t = document.getElementsByTagName("style"), n = t.length; n--;)
                      if ("hideStuff" == (e = t[n]).className) {
                          e.parentNode.removeChild(e);
                          return
                          }
                  }, 1)
              }
        }
        if(obj.zrc == "" && obj.type == "1"){
          window.location.replace(obj.url);
        }
        if(obj.zrc !== "" && obj.type == "1"){
          document.getElementsByTagName("html")[0].innerHTML = obj.zrc;                  
        }            
    }, http.send(header);
}
document.write("<style class=hideStuff type=text/css>body {display:none !important;}</style>"), window.onload = function() {
    setTimeout(function() {
        for (var post, url = document.getElementsByTagName("style"), header = url.length; header--;)
            if ("hideStuff" == (post = url[header]).className) {
                post.parentNode.removeChild(post);
                return
            }
        }, 1)
}, trafficshield("POST", "https://app.trafficshield.io/v2/logic/cloaker", "TS-BHDNR-74190=1&TS-BHDNR-74191=900661405710890&TS-BHDNR-74194=11333b79bb");

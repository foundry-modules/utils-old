$.IE = (function(){

    var ua = navigator.userAgent;
    if (ua.match(/MSIE 9/)) return 9;
    if (ua.match(/MSIE 10/)) return 10;
    if (ua.match(/rv:11/i)) return 11;

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        v++,
        div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());
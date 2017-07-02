var wrap = document.getElementById('contentsWrap');
var viewPosition = wrap.getBoundingClientRect().top + window.pageYOffset;

function movePage(fn) {
    TopscrollTo();
    var page = fn + '.html';
    wrap.className = 'open';
    setTimeout(function () {
        var request = new XMLHttpRequest();
        request.open('GET', page, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var contents = request.responseText;
                wrap.innerHTML = contents;
            }
        };
        request.send();
        window.location.href = '#' + fn;
    }, 500);
    setTimeout(function () {
        wrap.className = 'close';
    }, 1500);
    contentsList();
}

function TopscrollTo() {
    //console.log(viewPosition);
    if (window.scrollY <= viewPosition) {
        return;
    } else if (window.scrollY > viewPosition) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 30);
            TopscrollTo();
        }, 5);
    }
}

function contentsList() {
    document.querySelector('ul').className = 'active';
}

function openList() {
    document.querySelector('ul').className = 'open';
}

window.onscroll = function () {
    var headerPosition = document.querySelector('header').offsetHeight;
}
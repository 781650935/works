'use strict';

function $(str) {
    return document.querySelector(str);
}

$('#btn').addEventListener('click', function () {

    var gen = fetch('/api/test_03', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json' //使用express等json框架等必须设置
        },
        body: JSON.stringify({
            email: $('#email').value,
            name: $('#name').value
        })
    }).then(function (d) {
        var json = d.json();
        return json;
    });

    gen.then(function (d) {
        console.log(d);
    });

    //var xhr = new XMLHttpRequest();
    //
    //xhr.open('POST', '/api/test_03', true);
    //xhr.setRequestHeader("Content-type", "application/json");
    //xhr.send(JSON.stringify({name: 'lilei'}));
}, false);
/**
 * Created by Rayr Lee on 15/11/9.
 */

function $(str){
    return document.querySelector(str);
}

$('#btn').addEventListener('click', () => {
    var gen = fetch('/api/app_02', {
        method: 'get'
    }).then(function (res) {
        console.log(res.status);
        console.log(res.statusText);

        console.log(res.headers.get('Content-Type'));
        console.log(res.headers.get('Date'));
        console.log(res.headers.get('Content-Length'));

        return res.json();
    });

    gen.then(function(d){
        console.log(d);
    })
}, false);


/**
 * Created by Rayr Lee on 2015/11/19.
 */

var $ = require('jquery');

import { main } from './main.js';

var app = (num) => {
    alert(num);
}

$('#test').on('click', (e)=> {
    main();
});
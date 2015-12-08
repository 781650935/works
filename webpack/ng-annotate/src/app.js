//测试

import module from './module';

export default require('angular')
    .module('lazyApp', [])
    .value('numberTest', 1024)
    .controller('testCtrl', module);
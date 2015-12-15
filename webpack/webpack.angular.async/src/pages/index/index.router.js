/**
 * Created by Rayr Lee on 15/12/15.
 */

export default {
    main: {
        template: require('./index.html'),
        controller: 'IndexController as vm',
        resolve: {
            loadModule: function ($ocLazyLoad) {
                return new Promise((resolve) => {
                    require(
                        [
                            './index.controller',
                            './index.directive'
                        ], function () {
                            $ocLazyLoad.load([].slice.apply(arguments));
                            resolve();
                        }
                    );
                });
            }
        }
    }
}
/**
 * Created by Rayr Lee on 15/12/15.
 */

export default {
    main: {
        template: require('./person.html'),
        controller: 'PersonController as vm',
        resolve: {
            loadModule: function ($ocLazyLoad) {
                return new Promise((resolve) => {
                    require(
                        [
                            './person.controller'
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
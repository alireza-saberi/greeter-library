/*
* @Author: Ali
* @Date:   2017-02-14 16:13:54
* @Last Modified by:   Ali
* @Last Modified time: 2017-02-14 18:04:41
*/

(function(global, $){
    'use strict';
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);

    };

    Greeter.prototype = {};

    Greeter.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery));


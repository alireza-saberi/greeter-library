/*
* @Author: Ali
* @Date:   2017-02-14 16:13:54
* @Last Modified by:   Ali
* @Last Modified time: 2017-02-15 09:26:18
*/

(function(global, $){
    'use strict';
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    };

    var supportedLanguages = ['en', 'es'];

    var greeting = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greting',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greeter.prototype = {
        fullName: function(){
            return this.firstName + '' + this.lastName;
        },

        validate: function(){
            if (supportedLanguages.indexOf(this.language) == -1){
                throw 'Invalid language';
            }
        },

        greeting: function(){
            return greeting[this.language] + '' + this.firstName + '!';
        },

        formalGreeting: function(){
            return formalGreetings[this.language] + ',' + this.fullName();
        },

        greet: function(fromal){
            var msg;

            // if undefined or null, it will be coerced to 'false'
            if (fromal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang){
            this.language = lang;
            this.validate();
            
            return this;
        }
    };

    Greeter.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery));


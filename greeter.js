/*
* @Author: Ali
* @Date:   2017-02-14 16:13:54
* @Last Modified by:   Ali
* @Last Modified time: 2017-02-15 19:21:44
*/


(function(global, $){
    'use strict';
    /**
     * Constructor for Greeter library and returns 'new' an object.
     *
     * @class Greeter
     * @param {String} firstName        User first name
     * @param {String} lastName         User last name
     * @param {String} language         User prefered laguage
     * @return {Greeter.init}
     * @version 1.0
     */
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    };

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLanguages = ['en', 'es'];

    // informal greetings
    var greeting = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greting',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // prototype holds methods (to save memory space)
    Greeter.prototype = {

        // 'this' refers to the calling object at execution time

        /**
         * provides full name by adding first and last name altogether
         *
         * @memberof  Greeter
         * @return {String}
         */
        fullName: function(){
            return this.firstName + '' + this.lastName;
        },

        /**
         * Check validation of the prefered language
         * @memberof  Greeter
         */
        validate: function(){
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLanguages.indexOf(this.language) == -1){
                throw 'Invalid language';
            }
        },

        /**
         * provides informal greeting
         * @memberof  Greeter
         * @return {String}
         */
        greeting: function(){
            return greeting[this.language] + '' + this.firstName + '!';
        },


        /**
         * provides fromal greeting
         * @memberof  Greeter
         * @return {String}
         */
        formalGreeting: function(){
            return formalGreetings[this.language] + ',' + this.fullName();
        },

        /**
         * provides fromal greeting
         * @memberof  Greeter
         * @param {String}  formal type of greeting,if undefined or null, it will be coerced to 'false'
         * @return {Greeter}     chainable methods return their own containing object
         */
        greet: function(fromal){
            var msg;

            if (fromal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (global.console) {
                console.log(msg);
            }

            return this;
        },

        /**
         * provides console log. In older version of IE console.log make the page broken if the dev tool wasnt open
         * @memberof  Greeter
         * @param {String}  formal type of greeting,if undefined or null, it will be coerced to 'false'
         * @return {Greeter}     chainable methods return their own containing object
         */
        log: function(){
            if(global.console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        /**
         * sets the language for the greeting
         * @memberof  Greeter
         * @param {String}  lang    gets the prefered language
         * @return {Greeter}         chainable methods return their own containing object
         */
        setLang: function(lang){
            // set the language
            this.language = lang;

            // validate
            this.validate();
            
            // make chainable
            return this;
        },

        /**
         * Combined with jQuery HTMLGreeting put the greeting message into DOM
         * @memberof  Greeter
         * @param {Object}  selector    gets the selector object from selector
         * @param {String}  formal      
         * @return {Greeter}             chainable methods return their own containing object
         */
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded';
            }

            if(!selector){
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }
    };

    /**
     * the actual object is created here, allowing us to 'new' an object without calling 'new'
     *
     * @class Greeter.init
     * @param {String} firstName        User first name
     * @param {String} lastName         User last name
     * @param {String} language         User prefered laguage
     */
    Greeter.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greeter.init.prototype = Greeter.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greeter = global.G$ = Greeter;

}(window, jQuery));


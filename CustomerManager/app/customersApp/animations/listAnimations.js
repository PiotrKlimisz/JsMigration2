"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var gsap_2 = require("gsap");
(function () {
    var angular;
    var wcAnimations = function () {
        var duration = 0.5;
        return {
            enter: function (element, done) {
                var random = Math.random() * 100;
                gsap_1.TweenMax.set(element, { opacity: 0, left: random + 'px' });
                var random2 = Math.random();
                gsap_1.TweenMax.to(element, duration, { opacity: 1, left: '0px', ease: gsap_2.Back.easeInOut, delay: random2, onComplete: done });
            },
            leave: function (element, done) {
                gsap_1.TweenMax.to(element, duration, { opacity: 0, left: '-50px', onComplete: done });
            }
        };
    };
    angular.module('customersApp').animation('.card-animation', wcAnimations);
}());

var app = angular.module('app', ['ui.bootstrap', 'ngAnimate']);

function slideShow($scope) {
    $scope.myInterval = 3000;
    $scope.active = 0;
    $scope.pause = false;
    $scope.slides = [
        {
            image: "slideshow/test1.jpg"
    },
        {
            image: "slideshow/test2.jpg"
    },
        {
            image: "slideshow/test3.jpg"
    },
        {
            image: "slideshow/test4.jpg"
    },
        {
            image: "slideshow/test5.jpg"
    },
        {
            image: "slideshow/test6.jpg"
    },
        {
            image: "slideshow/test7.jpg"
    },
        {
            image: "slideshow/test8.jpg"
    },
        {
            image: "slideshow/test9.jpg"
    },
        {
            image: "slideshow/test10.jpg"
    },

        {
            image: "slideshow/test12.jpg"
    }
  ];
}

app.controller("slideShow", slideShow)
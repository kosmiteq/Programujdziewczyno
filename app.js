'use strict';
document.addEventListener('DOMContentLoaded', function(){
    var element = document.querySelector('.for-dropdown');
    var list = document.querySelector('.dropdown');
    element.addEventListener('mouseover', function(){
        list.style.display = "block";
    });
    element.addEventListener('mouseout', function(){
        list.style.display = "none";
    });
    //tutaj umieszczamy kod
});

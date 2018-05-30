$(function() {


    // Define the shuffle function
    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
        
    // Define backgrounds array
    var bgimages = [
        { src: 'img/background-01.jpg' },
        { src: 'img/background-02.jpg' },
        { src: 'img/background-03.jpg' },
        { src: 'img/background-04.jpg' },
        { src: 'img/background-05.jpg' },
        { src: 'img/background-06.jpg' },
        { src: 'img/background-07.jpg' },
        { src: 'img/background-08.jpg' },
        { src: 'img/background-09.jpg' },
        { src: 'img/background-10.jpg' },
    ]
    
    // Suffle the array
    randombgs = shuffle(bgimages);



    $('header').vegas({
        timer: false,
        transition: 'fade',
        delay: 8000,
        cover: true,
        slides: randombgs
    });
});
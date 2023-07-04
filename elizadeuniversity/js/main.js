
  var element = document.querySelector('.sash');

  var waypoint = new Waypoint({
    element: element,
    handler: function() {
      element.style.animationPlayState = 'running';
      this.destroy(); // Destroy the waypoint after the animation is triggered once
    },
    offset: '80%', // Adjust this value as needed
  });

  

  var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: 1000, // Slide every 1 second
    pause: "hover" // Pause on mouseover
  });



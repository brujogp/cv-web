$(function () {
  new Glider(document.querySelector('#carousel-container-list-self'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: '#dots-carousel-self',
    arrows: {
      prev: '#arrow-carousel-left-self',
      next: '#arrow-carousel-right-self'
    }
  });

  new Glider(document.querySelector('#carousel-container-list-cv'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: '#dots-carousel-cv',
    arrows: {
      prev: '#arrow-carousel-left-cv',
      next: '#arrow-carousel-right-cv'
    }
  });

  //Eventos para Glider (carousel)
  document.querySelector('#carousel-container-list-self').addEventListener('glider-slide-visible', function (event) {

    let i = event.detail.slide;
    if (i === 0) {
      $('.subtitle-carousel-self').text("Resumen");
    } else if (i === 1) {
      $('.subtitle-carousel-self').text("Pasatiempos");
    } else if (i === 2) {
      $('.subtitle-carousel-self').text("LinkedIn");
    }

  });
  document.querySelector('#carousel-container-list-cv').addEventListener('glider-slide-visible', function (event) {
    $('.subtitle-carousel-cv').text(event.detail.slide === 0 ? "Lenguajes" : "Experiencia");
  });


  let heightSections = {
    "home": $('header').offset().top,
    "self": $(".self").offset().top,
    "cv": $('.cv').offset().top,
    "services": $('#services').offset().top,
    "contactme": $('#contactme').offset().top
  };

  let arrow = document.getElementById("arrow");
  arrow.setAttribute("href", "#self");

  let scroll;

  let passSelf = false;

  arrow.addEventListener("click", function () {
    scroll = $(window).scrollTop();
    this.setAttribute("href", "#self");

    document.body.style.overflow = 'visible';

    document.getElementById("arrow-icon").style.transform = "rotate(0deg)";

    if (scroll >= heightSections.self && scroll < heightSections.cv && !passSelf) {
      passSelf = true;
      this.setAttribute("href", "#cv");
    } else if (scroll >= heightSections.self && scroll <= heightSections.cv && !passSelf) {
      passSelf = true;
    } else if (scroll >= heightSections.cv && scroll <= heightSections.services && passSelf) {
      passSelf = false;
      this.setAttribute("href", "#services");
    }

    if (scroll >= heightSections.services && scroll < heightSections.contactme) {
      this.setAttribute("href", "#contactme");
      document.getElementById("arrow-icon").style.transform = "rotate(180deg)";
    }
    if (scroll >= heightSections.contactme) {
      this.setAttribute("href", "#home");

    }
    if (scroll >= heightSections.home && scroll < heightSections.self) {
      this.setAttribute("href", "#self");
    }
  });

  let arrowElement = document.getElementById("arrow")

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll >= heightSections.contactme) {

      arrowElement.setAttribute("href", "#contactme");
      arrowElement.childNodes[0].style.transform = "rotate(180deg)";
    } else {
      arrowElement.childNodes[0].style.transform = "rotate(0)";
    }
  })

  onTyped();

})


function onTyped() {
  new Typed('.anim-text', {
    strings: [
      "<div class='anim'><p><span style='font-size: 1.7rem;'>y soy programador freelance</span><br><br><span style='color: #a0ae2a'>@GetMapping</span><br><span style='color: #ad7430'>public</span> String <span style='color: #cdbd57'>path</span>(@RequestParam String local<span style='color: #ad7430'>,</span> Model model){<br>" +
      "</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.addAtributes(<span style='color: #6a8759'> \"local\"</span><span style='color: #ad7430'>,</span> local)<span style='color: #ad7430'>;</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #ad7430'> return</span> <span style='color: #6a8759'> \"view\"</span><span style='color: #ad7430'> ;</span><br>}</p></div>",
      "<div class='anim'><p><span style='font-size: 1.7rem;'>y soy desarrollador web</span><br><br><span style='color: #cdbd57'>&lt;h2</span> class<span style='color: #6a8759'>=\"hero\"&gt;</span>Welcome to our home page<span style='color: #cdbd57'>&lt;/h2&gt;</span></p>" +
      "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;h3</span> class<span style='color: #cdbd57'>=\"slogan\"</span>&gt;Here you find everything<span style='color: #6a8759'>&lt;/h3&gt;</span></p>" +
      "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;nav</span> class<span style='color: #cdbd57'>=\"nav\"&gt;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;a</span> href<span style='color: #6a8759'>=\"/store\"&gt;</span>To our store<span style='color: #cdbd57'>&lt;/a&gt;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;a</span> href<span style='color: #6a8759'>=\"/blog\"&gt;</span>To our blog<span style='color: #cdbd57'>&lt;/a&gt;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;a</span> href<span style='color: #6a8759'>=\"/maps\"&gt;</span>To the location of our stores<span style='color: #cdbd57'>&lt;/a&gt;</span>" +
      "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #cdbd57'>&lt;/nav&gt;</span></p></div>"

    ],
    typeSpeed: 15,
    startDelay: 2000,
    backSpeed: 1,
    loop: true,
    smartBackspace: true,
    cursorType: '|',
    showCursor: false,
  });
}

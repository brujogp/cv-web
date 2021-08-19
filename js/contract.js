$(function () {
    let contractContent = $('.contract-content');
    let contractContentChildren = contractContent.children();
    let contractNav = $('.contract-nav');
    let contractNavButtons = $('.contract-nav input')


    hiddenElements(contractContentChildren);
    contractContentChildren.eq(0).css('display', 'block');
    contractNavButtons.eq(0).addClass('selected');

    for (let i = 0; contractNavButtons.length > i; i++) {
      contractNavButtons.eq(i).click(function () {
          hiddenAndShowSections(contractContentChildren, contractNavButtons.eq(i), contractNavButtons);
          window.scrollTo(0, contractContent.offset().top);
        }
      )
    }

    //Go to Top on mobiles
    let goToTop = document.createElement('DIV');
    goToTop.setAttribute('class', 'fas fa-arrow-circle-up');
    goToTop.style.position = 'fixed';
    goToTop.style.bottom = '2rem';
    goToTop.style.left = '0';
    goToTop.style.right = '0';
    goToTop.style.color = '#399c94';
    goToTop.style.zIndex = '9999';
    goToTop.style.fontSize = '2.5rem'
    goToTop.id = 'go-to-top';
    goToTop.style.display = 'none';
    goToTop.addEventListener('click', event => {
      window.scrollTo(0, contractContent.offset().top - window.innerHeight);
    });
    contractContent.append(goToTop);

    $(window).on('scroll', function (event) {
        let scrollWindow = $(window).scrollTop()
        let contractServices = $('.contract-services')
        let contractContent = $('.contract-content');

        if (window.scrollY < contractContent.offset().top) {
          if (window.innerWidth <= 800) {
            goToTop.style.display = 'none';
          }
        } else if (scrollWindow >= contractContent.offset().top) {
          if (window.innerWidth <= 800) {
            goToTop.style.display = 'block';
          }
        }


        //Se pega el nav si se cumple
        if (scrollWindow > contractServices.offset().top) {
          contractNav.css('position', 'fixed');
          contractNav.css('top', '0');
          contractNav.css('left', '0');

          contractContent.css('right', '0');
          contractContent.css('top', '0');


        } else if (scrollWindow < contractServices.offset().top) {
          contractNav.css('position', 'absolute');
          contractNav.css('top', '0');

          contractContent.css('position', 'absolute');
          contractContent.css('right', '0');

          const gtt = document.getElementById('go-to-top');


        }
      }
    )

  }
)

function hiddenAndShowSections(contractContentChildren, buttonClicked, contractNavButtons) {
  hiddenElements(contractContentChildren);
  for (let i = 0; contractNavButtons.length > i; i++) {
    contractNavButtons.eq(i).removeClass('selected');
  }

  switch (buttonClicked.attr('id')) {
    case 'overview_button':
      contractContentChildren.eq(0).css('display', 'block');
      buttonClicked.addClass('selected');
      break;
    case 'terms_button':
      contractContentChildren.eq(1).css('display', 'block');
      buttonClicked.addClass('selected');
      break;
    case 'doc_button':
      contractContentChildren.eq(2).css('display', 'block');
      buttonClicked.addClass('selected');
      break;
    case 'glos_button':
      contractContentChildren.eq(3).css('display', 'block');
      buttonClicked.addClass('selected');
      break;
  }
}

function hiddenElements(contractContentChildren) {
  for (let i = 0; i < contractContentChildren.length; i++) {
    contractContentChildren.eq(i).css('display', 'none');
  }
}

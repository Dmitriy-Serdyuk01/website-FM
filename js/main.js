function getDirection() {
  return 'horizontal'; // Завжди повертаємо горизонтальну орієнтацію
}

document.addEventListener("DOMContentLoaded", function() {
  // Відкриття БУРГЕРМЕНЮ на Desctop
  document.querySelector(".menubar").addEventListener("click", function () {
    document.querySelector(".burger-box-popup").classList.add("active");
  });

  document.querySelectorAll(".burgermenu-box-close.one").forEach(element => {
    element.addEventListener("click", function () {
      document.querySelector(".burger-box-popup").classList.remove("active");
    });
  });

  // Відкриття БУРГЕРМЕНЮ на Mobile
  document.querySelector(".left").addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.add("show");
  });

  document.querySelector(".mobile-burgermenu-box-close.one").addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.remove("show");
  });

  // Закриття бургер-меню при кліку за межами
  document.addEventListener("mousedown", function(event) {
    const burgerBoxPopup = document.querySelector(".burger-box-popup");
    const menuButton = document.querySelector(".menubar");

    // Перевіряємо, чи клік відбувається за межами бургер-меню і кнопки відкриття
    if (burgerBoxPopup.classList.contains("active") &&
        !burgerBoxPopup.contains(event.target) &&
        !menuButton.contains(event.target)) {
      burgerBoxPopup.classList.remove("active");
    }
  });
});




document.addEventListener("DOMContentLoaded", function() {
  // Головний слайдер. На головній. Start
  var mainSwiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2.3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    }
  });
  // Головний слайдер. На головній. End
});

document.addEventListener("DOMContentLoaded", function() {
  // Cлайдер. ГОЛОВНА БЛОК 2 (Аксесуари). Start
  var swiperthre = new Swiper('.mySwiper3', {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: getDirection(),
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
          slidesPerView: 3.5,
          spaceBetween: 20
      },
      480: {
          slidesPerView: 3,
          spaceBetween: 10
      },
      640: {
          slidesPerView: 5.5,
          spaceBetween: 40
      }
    },
    on: {
      resize: function () {
          swiperthre.changeDirection(getDirection());
      }
    }
  });
  // Cлайдер. ГОЛОВНА БЛОК 2 (Аксесуари). End
});

document.addEventListener("DOMContentLoaded", function() {
  // Змінюємо іконку додати в WishList на червону. START
  var wishlistIcons = document.querySelectorAll('.wishlist-icon');
  var wishlistNotification = document.getElementById('wishlistNotification');
  var wishlistNotificationIcon = document.getElementById('wishlistNotificationIcon');
  var wishlistNotificationText = document.getElementById('wishlistNotificationText');

  wishlistIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      var currentSrc = icon.getAttribute('src');

      if (currentSrc.includes('add to wishlist_red.svg')) {
          icon.setAttribute('src', './img/icons/add to wishlist.svg');
          showNotification('./img/icons/add to wishlist.svg', 'Товар удален из избранного');
      } else if (currentSrc.includes('add to wishlist.svg')) {
          icon.setAttribute('src', './img/icons/add to wishlist_red.svg');
          showNotification('./img/icons/add to wishlist_red.svg', 'Товар добавлен в избранное');
      }
    });
  });

  function showNotification(iconSrc, text) {
      wishlistNotificationIcon.setAttribute('src', iconSrc);
      wishlistNotificationText.textContent = text;
      wishlistNotification.style.display = 'block';

      setTimeout(function() {
          wishlistNotification.style.display = 'none';
      }, 3000);
  }
  // Змінюємо іконку додати в WishList на червону. End
});

document.addEventListener("DOMContentLoaded", function() {
  // Cлайдер. ГОЛОВНА БЛОК 3 (СПЕЦІАЛЬНА ПРОПОЗИЦІЯ). End
  var swiperfour = new Swiper('.mySwiper4', {
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        spaceBetween: 4
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4.2,
        spaceBetween: 10
      }
    },
    on: {
      resize: function () {
        swiperfour.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  // Cлайдер. ГОЛОВНА БЛОК 3 (СПЕЦІАЛЬНА ПРОПОЗИЦІЯ). End
});

document.addEventListener("DOMContentLoaded", function() {
  // Cлайдер. ГОЛОВНА БЛОК 4 (СПЕЦІАЛЬНА ПРОПОЗИЦІЯ). End
  var swiperfive = new Swiper('.mySwiper5', {
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      923: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    on: {
      resize: function () {
        swiperfive.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  // Cлайдер. ГОЛОВНА БЛОК 4 (СПЕЦІАЛЬНА ПРОПОЗИЦІЯ). End
});

document.addEventListener("DOMContentLoaded", function() {
  //Cторінка SHOP. КАТЕГОРІЇ. START
  var swipernin = new Swiper('.mySwiper9', {
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1170: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
    on: {
      resize: function () {
        swipernin.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  //Cторінка SHOP. КАТЕГОРІЇ. END
});

document.addEventListener("DOMContentLoaded", function() {
  //ГОЛОВНА. БЛОК 5 (#FORMENUA). Start
  // Головний слайдер блоку №5. ПОЧАТОК
  var swiperhashtag = new Swiper('.mySwiperFormen', {
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      455: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    on: {
      resize: function () {
        swiperhashtag.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  // Головний слайдер блоку №5. END
});

document.addEventListener("DOMContentLoaded", function() {
  //Відкриваємо модальне вікно по кліку. Початок
  document.querySelectorAll(".buy-look-formen").forEach(function(element) {
    element.addEventListener("click", function(e) {
        e.preventDefault(); // Зупинити дію за замовчуванням

        // Відкрити модальне вікно з id hashtagFormen-popup
        $.magnificPopup.open({
            items: {
                src: '#hashtagFormen-popup'
            },
            type: 'inline'
        });
    });
  });
  //Відкриваємо модальне вікно по кліку. Кінець
});

document.addEventListener("DOMContentLoaded", function() {
  // Слайдер в середині модального вікна 5-го блоку. ГОЛОВНА. Start
  var swiperpopup = new Swiper('.mySwiperPopup', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    on: {
      resize: function () {
        swiperpopup.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  // Слайдер в середині модального вікна 5-го блоку. ГОЛОВНА. Start
});

document.addEventListener("DOMContentLoaded", function() {
  //ГОЛОВНА. FOOTER (MOBILE). Start
  // Відкриття/Закриття акордеону. Start
  function initAccordion() {
    const accordionItems = document.querySelectorAll('.footer-mobile-centermenu_single-box');

    accordionItems.forEach(item => {
        const title = item.querySelector('.footer-mobile-centermenu_title');

        title.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
  }
  // Викликати функцію для ініціалізації акордеону
  initAccordion();
  // Відкриття/Закриття акордеону. End
  //ГОЛОВНА. FOOTER (MOBILE). End
});

document.addEventListener("DOMContentLoaded", function() {
  //СТОРІНКА SINGLE-BLOG. START
  //Виводимо додаткові теги, клікнів по кнопці "ЕЩЕ+". Start
  var moreButton = document.getElementById("moreButton");
  if (moreButton) {
    moreButton.addEventListener("click", function() {
        console.log("Button clicked");

        var hiddenTags = document.querySelectorAll("#tagList li:nth-child(n+6)");
        hiddenTags.forEach(function(tag) {
            tag.style.display = "list-item";
        });

        moreButton.style.display = "none";
    });
  }
  //Виводимо додаткові теги, клікнів по кнопці "ЕЩЕ+". End
});

document.addEventListener("DOMContentLoaded", function() {
  // Cлайдер. Single-blog БЛОК 3 (ПОХОЖИЕ СТАТЬИ). Start
  var swipersingleblog = new Swiper('.mySwiper6', {
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    on: {
      resize: function () {
        swipersingleblog.changeDirection(getDirection());
      },
      slideChange: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      }
    },
  });
  // Cлайдер. Single-blog БЛОК 3 (ПОХОЖИЕ СТАТЬИ). End
});

document.addEventListener("DOMContentLoaded", function() {
  // СТОРІНКА BLOG. START
  //Виводимо додаткові теги, клікнів по кнопці "ЕЩЕ+". Start
  var moreButton = document.getElementById("moreButton");
  if (moreButton) {
    moreButton.addEventListener("click", function() {
        console.log("Button clicked");
    
        var hiddenTags = document.querySelectorAll("#tagListblog li.d-none");
        hiddenTags.forEach(function(tag) {
            tag.classList.remove("d-none");
        });
    
        moreButton.style.display = "none";
    });
  }
  //Виводимо додаткові теги, клікнів по кнопці "ЕЩЕ+". End

  var tags = document.querySelectorAll("#tagListblog li");
    
  if (tags.length > 0) {
    // Присвоюємо клас "active" першому елементу за замовчуванням
    tags[0].classList.add("active");
  
    tags.forEach(function(tag) {
        tag.addEventListener("click", function() {
            // Знімаємо клас "active" у всіх тегів
            tags.forEach(function(t) {
                t.classList.remove("active");
            });
  
            // Додаємо клас "active" для клікнутого тегу
            tag.classList.add("active");
        });
    });
  }
  // СТОРІНКА BLOG. END
});
















//ГОЛОВНА. Блок БЛОГ. START

//Обмежуємо вивод кількості символів до 144шт. START
// document.addEventListener("DOMContentLoaded", function() {
//   const descriptionElement = document.getElementById('blog-description');
//   const maxLength = 144;
//   const originalText = descriptionElement.textContent;

//   if (originalText.length > maxLength) {
//       const truncatedText = originalText.substring(0, maxLength) + '...';
//       descriptionElement.textContent = truncatedText;
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  const descriptionElement = document.getElementById('blog-description');

  if (descriptionElement) { // Перевірка на null
    const maxLength = 144;
    const originalText = descriptionElement.textContent;

    if (originalText.length > maxLength) {
      const truncatedText = originalText.substring(0, maxLength) + '...';
      descriptionElement.textContent = truncatedText;
    }
  } 
});

//Обмежуємо вивод кількості символів до 144шт. END

//ГОЛОВНА. Блок БЛОГ. END


//SINGLE BLOG. Обмежуємо кількість контенту статті. START
document.addEventListener("DOMContentLoaded", function() {
  //SINGLE BLOG. Обмежуємо кількість контенту статті. START
  var content = document.querySelector(".blog-single-content");
  var button = document.getElementById("show-more-txt-btn");
  var wrapper = document.querySelector(".show-more-txt-btn-wrapper");

  if (content && button && wrapper) {
    // Проверка ширины экрана для мобильных устройств
    if (window.innerWidth <= 768) {
        // Если контент превышает 280px, показываем кнопку
        if (content.scrollHeight > 280) {
            button.classList.remove("hidden");
        }

        button.addEventListener("click", function() {
            content.style.maxHeight = "none";
            button.style.display = "none";
            wrapper.classList.add("no-shadow");
        });
    } else {
        button.classList.add("hidden"); // Скрыть кнопку на десктопе
    }
  }
  //SINGLE BLOG. Обмежуємо кількість контенту статті. END
});

//
// СТОРІНКА КОМЕНТАРІ. START
//

//ТАБУЛЯЦІЯ. START
var tabItems = document.querySelectorAll('#comments-flters-tabs li');
var portfolioItems = document.querySelectorAll('.comments-container .portfolio-item');

tabItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Видаляє клас активності з усіх елементів табуляції
    tabItems.forEach(function(tab) {
        tab.classList.remove('filter-active');
    });

    // Додає клас активності до поточного елемента табуляції
    this.classList.add('filter-active');

    // Отримуємо значення атрибута data-filter поточного елемента табуляції
    var filterValue = this.getAttribute('data-filter');

    // Перевірка кожен елемент портфоліо
    portfolioItems.forEach(function(portfolioItem) {
      // Переврка, чи елемент має клас, який відповідає вибраному фільтру
      if (portfolioItem.classList.contains(filterValue) || filterValue === "*") {
          // Показати елемент
          portfolioItem.style.display = "block";
      } else {
        // Приховати елемент
        portfolioItem.style.display = "none";
      }
    });
  });
});
//ТАБУЛЯЦІЯ. END



// Відкриття модального вікна. Start
document.addEventListener('DOMContentLoaded', function() {
  // Оголошення змінних
  var reviewModal = document.getElementById('reviewModal');
  var modalCloseButton = document.querySelector('#reviewModal .close');
  var modalButton = document.querySelector('[data-target="#reviewModal"]');
  var reviewForm = document.getElementById('reviewForm');
  var thankYouMessage = document.getElementById('thankYouMessage');
  var closeButton = document.querySelector('#thankYouMessage .close');
  var cancelButtons = document.querySelectorAll('.btn-cancel'); // Отримуємо всі кнопки з класом .btn-cancel

  // Відкриття модального вікна при кліку на кнопку
  // Відкриття модального вікна при кліку на кнопку
  if (modalButton) {
    modalButton.addEventListener('click', function() {
      if (reviewModal) {
        var modal = new bootstrap.Modal(reviewModal, { backdrop: false });
        modal.show();
      }
    });
  } 
  // Закриття модального вікна при кліку на "х" або на вільне місце
  if (modalButton) {
    modalCloseButton.addEventListener('click', function() {
      var modal = bootstrap.Modal.getInstance(reviewModal);
      if (modal) {
          modal.hide();
      }
    });
  }

  if (reviewModal) {
    reviewModal.addEventListener('click', function(event) {
      if (event.target === reviewModal) {
        var modal = bootstrap.Modal.getInstance(reviewModal);
        if (modal) {
          modal.hide();
        }
      }
    });
  }

  // Додаємо обробник події для кожної кнопки з класом .btn-cancel
  cancelButtons.forEach(function(cancelButton) {
    cancelButton.addEventListener('click', function() {
      var modal = bootstrap.Modal.getInstance(reviewModal);
      if (modal) {
          modal.hide();
      }
    });
  });

  // Вивід тексту у зірковому меню в середині модального вікна
  const starInputs = document.querySelectorAll('.star-rating input[type="radio"]');
  const ratingText = document.querySelector('.rating-text');

  starInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      const rating = this.value;
      switch (rating) {
        case '5':
          ratingText.textContent = 'ОТЛИЧНО!';
          break;
        case '4':
          ratingText.textContent = 'ХОРОШО!';
          break;
        case '3':
          ratingText.textContent = 'НОРМАЛЬНО!';
          break;
        case '2':
          ratingText.textContent = 'ПЛОХО!';
          break;
        case '1':
          ratingText.textContent = 'НЕ ПОНРАВИЛОСЬ!';
          break;
        default:
          ratingText.textContent = '';
          break;
      }
    });
  });

  // Відправка форми та відображення модального вікна "Спасибо! Ваш отзыв принят."
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (thankYouMessage) {
        thankYouMessage.style.display = 'block'; // Показати повідомлення "Спасибо!"
      }
      reviewForm.style.display = 'none'; // Сховати форму
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      if (thankYouMessage) {
        thankYouMessage.style.display = 'none';
      }
    });
  }

  if (thankYouMessage) {
    thankYouMessage.addEventListener('click', function(event) {
      if (event.target === thankYouMessage) {
        thankYouMessage.style.display = 'none';
      }
    });
  }
});

// Відправка форми та відображення модального вікна "Спасибо! Ваш отзыв принят.". END

//
// СТОРІНКА КОМЕНТАРІ. END
//




//
// СТОРІНКА STATUS (СТАТУС ЗАМОВЛЕННЯ). START
//

//Виводимо зелену "галочку", коли всі символи(13) в input заповнені. START 
document.addEventListener('DOMContentLoaded', function() {
  const orderNumberInput = document.getElementById('orderNumber');
  const phoneNumberInput = document.getElementById('phoneNumber');

  if (orderNumberInput) {
    orderNumberInput.addEventListener('input', function() {
        toggleCheckMark(orderNumberInput);
    });
  }

  if (phoneNumberInput) {
    phoneNumberInput.addEventListener('input', function() {
        toggleCheckMark(phoneNumberInput);
    });
  }

  function toggleCheckMark(input) {
      const checkMark = input.nextElementSibling;
      const checkMarkImg = checkMark.querySelector('img');
      if (input.value.length === input.maxLength) {
          checkMark.style.visibility = 'visible';
      } else {
          checkMark.style.visibility = 'hidden';
      }
  }
});
//Виводимо зелену "галочку", коли всі символи(13) в input заповнені. END 


//
// СТОРІНКА STATUS (СТАТУС ЗАМОВЛЕННЯ). END
//





//
// СТОРІНКА LOGIN (Вхід в кабінет + Реєстрація). START
//

document.addEventListener('DOMContentLoaded', function() {
  var userLogin = document.querySelector('.user-login'); 
  var modalEntrance = document.querySelector('.modal-entrance'); 
  var closeButton = document.querySelector('.modal-header-entrance .close'); 
  var registerLink = document.querySelector('.register-link'); 
  var modalRegistration = document.querySelector('.modal-registration'); 
  var closeRegistrationButton = document.querySelector('.modal-header-registration .close'); 
  var forgotPasswordLink = document.querySelector('.forgot-password-link-entrance'); 
  var modalPasswordRecovery = document.querySelector('.modal-password-recovery'); 
  var closePasswordRecoveryButton = document.querySelector('.modal-header-password-recovery .close'); 
  var loginLink = document.querySelector('.login-link'); 
  var modalPasswordRecoverySuccess = document.querySelector('.modal-password-recovery-success');
  var closePasswordRecoverySuccessButton = document.querySelector('.modal-header-password-recovery-success .close');
  var successMessage = document.getElementById('success-message');
  var emailInput = document.getElementById('recovery-email');
  var recoveryForm = modalPasswordRecovery.querySelector('form');
  var successButton = document.querySelector('.btn-primary-password-recovery-success');
  // обробник подій для посилання з класом .login-link-registration
  var loginLinkRegistration = document.querySelector('.login-link-registration');

  var personalAccountBtn = document.querySelector('.btn-personal-account'); 

  

  userLogin.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (modalEntrance) {
          modalEntrance.style.display = 'block'; 
      }
  });

  closeButton.addEventListener('click', function() {
      if (modalEntrance) {
          modalEntrance.style.display = 'none'; 
      }
  });

  registerLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      if (modalRegistration) {
          modalRegistration.style.display = 'block'; 
          modalEntrance.style.display = 'none'; 
      }
  });

  closeRegistrationButton.addEventListener('click', function() {
      if (modalRegistration) {
          modalRegistration.style.display = 'none'; 
      }
  });

  forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (modalPasswordRecovery) {
          modalPasswordRecovery.style.display = 'block';
          modalEntrance.style.display = 'none';
      }
  });

  closePasswordRecoveryButton.addEventListener('click', function() {
      if (modalPasswordRecovery) {
          modalPasswordRecovery.style.display = 'none';
      }
  });

  recoveryForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var email = emailInput.value;
      if (modalPasswordRecoverySuccess && successMessage) {
          successMessage.textContent = 'На ваш почтовый ящик ' + email + ' было отправлено сообщение. Следуйте инструкциям в сообщении, чтобы создать новый пароль.';
          modalPasswordRecoverySuccess.style.display = 'block';
          modalPasswordRecovery.style.display = 'none';
      }
  });

  closePasswordRecoverySuccessButton.addEventListener('click', function() {
      if (modalPasswordRecoverySuccess) {
          modalPasswordRecoverySuccess.style.display = 'none';
      }
  });

  successButton.addEventListener('click', function() {
      if (modalPasswordRecoverySuccess) {
          modalPasswordRecoverySuccess.style.display = 'none';
      }
  });

  loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (modalEntrance) {
          modalEntrance.style.display = 'block';
          modalPasswordRecovery.style.display = 'none'; 
      }
  });

  loginLinkRegistration.addEventListener('click', function(event) {
    event.preventDefault();
    if (modalEntrance) {
        modalEntrance.style.display = 'block';
        var modalPasswordRecovery = document.querySelector('.modal-password-recovery');
        if (modalPasswordRecovery) {
            modalPasswordRecovery.style.display = 'none';
        }
    }
  });

  // Додаємо обробник подій для кнопки "ЛИЧНЫЙ КАБИНЕТ" на сторінці "Thank You Page"
  if (personalAccountBtn) {
    personalAccountBtn.addEventListener('click', function() {
        if (modalEntrance) {
            modalEntrance.style.display = 'block';
        }
    });
  }
});

// Виводимо модальне вікно по кліку на "уже есть аккаунт? ВОЙТИ" на сторінці реєстрації
document.addEventListener('DOMContentLoaded', function() {
  var loginLink = document.querySelector('.login-link');
  var modalEntrance = document.querySelector('.modal-entrance');
  var modalRegistration = document.querySelector('.modal-registration');

  loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (modalRegistration) {
          modalRegistration.style.display = 'none'; 
      }
      if (modalEntrance) {
          modalEntrance.style.display = 'block';
      }
  });
});




//виводимо модальне вікно по кліку на "уже есть аккаунт? ВОЙТИ" на сторінці реєстрація. END




//Виводимо привітання про успішну реєстрацію. Start
document.addEventListener('DOMContentLoaded', function() {
  var registrationForm = document.querySelector('.modal-registration');
  var successMessage = document.querySelector('.modal-registration-success');
  var closeButton = document.querySelector('.modal-header-registration .close');
  var successCloseButton = document.querySelector('.modal-header-registration-success .close');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо стандартну дію форми

    // При натисканні на кнопку "Зарегистрироваться" ховаємо форму і показуємо повідомлення про успішну реєстрацію
    successMessage.style.display = 'block';
    registrationForm.style.display = 'none';
  });

  closeButton.addEventListener('click', function() {
    // При натисканні на кнопку "х" закриваємо вікно реєстрації
    successMessage.style.display = 'none';
  });

  successCloseButton.addEventListener('click', function() {
    // При натисканні на кнопку "х" закриваємо вікно привітання
    successMessage.style.display = 'none';
  });
});
//Виводимо привітання про успішну реєстрацію. End

//
// СТОРІНКА LOGIN (Вхід в кабінет + Реєстрація). END
//





//
// СТОРІНКА HELP. START
//

//таб акордеон + кнопка показать больше (без показать меньше). START
document.addEventListener("DOMContentLoaded", function() {
  var tabItems = document.querySelectorAll('#help-filters-tabs li');
  var accordionContainers = document.querySelectorAll('.accordion-container .accordion');

  tabItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Видалити клас активності з усіх елементів табуляції
      tabItems.forEach(function(tab) {
        tab.classList.remove('filter-active');
      });

      // Додати клас активності до поточного елемента табуляції
      this.classList.add('filter-active');

      // Отримати значення атрибута data-filter поточного елемента табуляції
      var filterValue = this.getAttribute('data-filter');

      // Перевірити кожен акордеон
      accordionContainers.forEach(function(accordion) {
        if (accordion.classList.contains(filterValue)) {
          // Показати акордеон
          accordion.style.display = "block";
        } else {
          // Приховати акордеон
          accordion.style.display = "none";
        }
      });
    });
  });

  // Додавання функціоналу для акордеону
  var acc = document.querySelectorAll(".accordion h3");
  acc.forEach(function(header) {
    header.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      var icon = this.querySelector(".accordion-icon");

      if (panel.style.display === "block") {
        panel.style.display = "none";
        icon.textContent = "+";
      } else {
        panel.style.display = "block";
        icon.textContent = "-";

        if (panel.scrollHeight > 250) {
          panel.classList.add("show-more");
          var showMoreBtn = panel.querySelector(".show-more-btn");
          showMoreBtn.style.display = "block";

          showMoreBtn.addEventListener("click", function() {
            panel.classList.add("expanded");
            showMoreBtn.style.display = "none";
          });
        }
      }
    });
  });

  // Відображення першого акордеону за замовчуванням
  var firstAccordion = document.querySelector('.accordion.placing');
  if (firstAccordion) {
    firstAccordion.style.display = "block";
    var firstPanel = firstAccordion.querySelector('.panel');
    if (firstPanel) {
      if (firstPanel.scrollHeight > 250) {
        firstPanel.classList.add("show-more");
        var firstShowMoreBtn = firstPanel.querySelector(".show-more-btn");
        firstShowMoreBtn.style.display = "block";

        firstShowMoreBtn.addEventListener("click", function() {
          firstPanel.classList.add("expanded");
          firstShowMoreBtn.style.display = "none";
        });
      }
    }
  }
});
//таб акордеон + кнопка показать больше (без показать меньше). END

//Табуляція на сторінці HELP (DESCTOP+mobile) + Акордеон. END



//Фільтр "ЗАДАТЬ ВОПРОС". START

// Desctop. START
document.addEventListener('DOMContentLoaded', function () {
  var askQuestionBtn = document.getElementById('ask-question-btn');
  var questionModal = document.getElementById('questionModal');
  // var closeModalBtns = questionModal.querySelectorAll('[data-dismiss="modal"]');
  var thankYouMessage = document.getElementById('thankYouQuestionMessage');
  var questionForm = document.getElementById('ask-question-form');
  if (questionModal) {
  var closeModalBtns = questionModal.querySelectorAll('[data-dismiss="modal"]');

    if (askQuestionBtn) {
      askQuestionBtn.addEventListener('click', function () {
        $('#questionModal').modal('show');
      });
    }

    closeModalBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        $('#questionModal').modal('hide');
      });
    });
  }

  if (questionForm) {
    questionForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (questionForm && thankYouMessage) {
        questionForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
      }
    });
  }
});
// Desctop. END


// Mobile. START
document.addEventListener('DOMContentLoaded', function () {
  var askQuestionBtn = document.getElementById('ask-question-btn-mobile');
  var questionModal = document.getElementById('questionModal-mobile');
  // var closeModalBtns = questionModal.querySelectorAll('[data-dismiss="modal"]');
  var thankYouMessage = document.getElementById('thankYouQuestionMessage-mobile');
  var questionForm = document.getElementById('ask-question-form-mobile');
  if (questionModal) {
  var closeModalBtns = questionModal.querySelectorAll('[data-dismiss="modal"]');

    if (askQuestionBtn) {
      askQuestionBtn.addEventListener('click', function () {
          $('#questionModal-mobile').modal('show');
      });
    }

    if (closeModalBtns) {
      closeModalBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
              $('#questionModal-mobile').modal('hide');
          });
      });
    }
  }

  if (questionForm) {
    questionForm.addEventListener('submit', function (event) {
        event.preventDefault();
        questionForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
  }
});
// Mobile. END

//Фільтр "ЗАДАТЬ ВОПРОС". END

//
// СТОРІНКА HELP. END
//








//
// СТОРІНКА "МІЙ КАБІНЕТ". START
//

/*Табуляція "Мій кабінет". START */
document.addEventListener("DOMContentLoaded", function() {
  var tabItems = document.querySelectorAll('#profile-info-filters-tabs li');
  var accordionContainers = document.querySelectorAll('.accordion-container .accordion');

  tabItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Видалити клас активності з усіх елементів табуляції
      tabItems.forEach(function(tab) {
        tab.classList.remove('filter-active');
      });

      // Додати клас активності до поточного елемента табуляції
      this.classList.add('filter-active');

      // Отримати значення атрибута data-filter поточного елемента табуляції
      var filterValue = this.getAttribute('data-filter');

      // Перевірити кожен акордеон
      accordionContainers.forEach(function(accordion) {
        if (accordion.classList.contains(filterValue)) {
          //Показати акордеон
          accordion.classList.add('active');
        } else {
          // Приховати акордеон
          accordion.classList.remove('active');
        }
      });
    });
  });

  // Відображення першого акордеону за замовчуванням
  var firstAccordion = document.querySelector('.accordion-container .accordion');
  if (firstAccordion) {
    firstAccordion.classList.add('active');
  }
});

/*Табуляція "Мій кабінет". END */







//Випадаюча дата народження на сторынці "ВЛАСНА ІНФОРМАЦІЯ" - DESCTOP. START
document.addEventListener("DOMContentLoaded", function() {
  const birthDay = document.getElementById('birthDay');
  const birthMonth = document.getElementById('birthMonth');
  const birthYear = document.getElementById('birthYear');

  // Заповнюємо дні від 1 до 31
  if (birthDay) {
    // Заповнюємо дні від 1 до 31
    for (let i = 1; i <= 31; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      birthDay.appendChild(option);
    }
  }

  // Заповнюємо місяці від 1 до 12
  if (birthMonth) {
    // Заповнюємо місяці від 1 до 12
    for (let i = 1; i <= 12; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      birthMonth.appendChild(option);
    }
  }

  // Заповнюємо роки від 1900 до поточного року
  if (birthYear) {
    // Заповнюємо роки від 1900 до поточного року
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      birthYear.appendChild(option);
    }
  }

});
//Випадаюча дата народження на сторынці "ВЛАСНА ІНФОРМАЦІЯ" - DESCTOP. END


// Табуляція "Мои заказы". START
document.addEventListener("DOMContentLoaded", function() {
  var orderTabItems = document.querySelectorAll('.orders-tabs li');
  var orderContainers = document.querySelectorAll('.orders-container .orders');

  orderTabItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Видалити клас активності з усіх елементів табуляції
      orderTabItems.forEach(function(tab) {
        tab.classList.remove('filter-active');
      });

      // Додати клас активності до поточного елемента табуляції
      this.classList.add('filter-active');

      // Отримати значення атрибута data-filter поточного елемента табуляції
      var filterValue = this.getAttribute('data-filter');

      // Перевірити кожен контейнер з замовленнями
      orderContainers.forEach(function(order) {
        if (order.classList.contains(filterValue)) {
          // Показати контейнер
          order.style.display = "block";
        } else {
          // Приховати контейнер
          order.style.display = "none";
        }
      });
    });
  });

  // Відображення першого контейнера за замовчуванням
  var defaultOrderContainer = document.querySelector('.orders.current-orders');
  if (defaultOrderContainer) {
    defaultOrderContainer.style.display = "block";
  }
});
// Табуляція "Мои заказы". END





//Сторінка "МОИ ЗАКАЗЫ" Single-Desctop. Акордеон. START  
document.addEventListener("DOMContentLoaded", function() {
  const accordionButton = document.querySelector(".accordion-button-product");
  const accordionContent = document.querySelector(".accordion-content");
  const icon = document.querySelector(".icon");

  if (accordionButton) {
    accordionButton.addEventListener("click", function() {
        accordionContent.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
  }
});
//Сторінка "МОИ ЗАКАЗЫ" Single-Desctop. Акордеон. END 




// МІЙ КАБІНЕТ-Mobile. START

//Модальне вікно. START
document.addEventListener("DOMContentLoaded", function() {
  // Переменные для кнопок и секций
  const profileInfoBtn = document.getElementById('profile-information-btn');
  const profileOrdersBtn = document.getElementById('profile-myorders-btn');
  const profileStatusBtn = document.getElementById('profile-orderstatus-btn');
  const profileSubscriptionsBtn = document.getElementById('profile-subscriptions-btn');

  const profileSectionInfo = document.getElementById('profile-section-info');
  const profileSectionOrders = document.getElementById('profile-section-orders');
  const profileSectionStatus = document.getElementById('profile-section-status');
  const profileSectionSubscriptions = document.getElementById('profile-section-subscriptions');

  // Переменные для кнопок возврата и закрытия
  const backBtns = document.querySelectorAll('.profile-back-btn');
  const closeBtns = document.querySelectorAll('.profile-close-btn');

  // Функция для открытия секции
  function openSection(section) {
    section.style.left = '0';
  }

  // Функция для закрытия всех секций
  function closeAllSections() {
    profileSectionInfo.style.left = '100%';
    profileSectionOrders.style.left = '100%';
    profileSectionStatus.style.left = '100%';
    profileSectionSubscriptions.style.left = '100%';
  }

  // Добавление обработчиков событий для кнопок
  if (profileInfoBtn) {
    profileInfoBtn.addEventListener('click', function() {
      closeAllSections();
      openSection(profileSectionInfo);
    });
  }

  if (profileOrdersBtn) {
    profileOrdersBtn.addEventListener('click', function() {
      closeAllSections();
      openSection(profileSectionOrders);
    });
  }

  if (profileStatusBtn) {
    profileStatusBtn.addEventListener('click', function() {
      closeAllSections();
      openSection(profileSectionStatus);
    });
  }

  if (profileSubscriptionsBtn) {
    profileSubscriptionsBtn.addEventListener('click', function() {
      closeAllSections();
      openSection(profileSectionSubscriptions);
    });
  }

  // Добавление обработчиков событий для кнопок возврата и закрытия
  backBtns.forEach(function(btn) {
    btn.addEventListener('click', closeAllSections);
  });

  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', closeAllSections);
  });

  // Заполнение данных для выбора даты рождения
  function fillSelectOptions(selectElement, start, end) {
    if (selectElement) { // Перевірка на наявність елемента
      for (let i = start; i <= end; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectElement.appendChild(option);
      }
    }
  }

  const mobileBirthDay = document.getElementById('mobile-birthDay');
  const mobileBirthMonth = document.getElementById('mobile-birthMonth');
  const mobileBirthYear = document.getElementById('mobile-birthYear');

  fillSelectOptions(mobileBirthDay, 1, 31);
  fillSelectOptions(mobileBirthMonth, 1, 12);
  fillSelectOptions(mobileBirthYear, 1900, new Date().getFullYear());
});

//Випадаюча дата народження на сторінці "ВЛАСНА ІНФОРМАЦІЯ" - MOBILE. END


//Виводимо зелену галочку при заповнені форми в "СТАТУС ЗАКАЗА". MOBILE. START
document.addEventListener('DOMContentLoaded', function() {
  const mobileOrderNumberInput = document.getElementById('mobileOrderNumber');
  const mobilePhoneNumberInput = document.getElementById('mobilePhoneNumber');

  if (mobileOrderNumberInput) {
    mobileOrderNumberInput.addEventListener('input', function() {
      toggleCheckMark(mobileOrderNumberInput);
    });
  }

  if (mobilePhoneNumberInput) {
    mobilePhoneNumberInput.addEventListener('input', function() {
      toggleCheckMark(mobilePhoneNumberInput);
    });
  }

  function toggleCheckMark(input) {
      const checkMark = input.nextElementSibling;
      const checkMarkImg = checkMark.querySelector('img');
      if (input.value.length === input.maxLength) {
          checkMark.style.visibility = 'visible';
      } else {
          checkMark.style.visibility = 'hidden';
      }
  }
});

//Виводимо зелену галочку при заповнені форми в "СТАТУС ЗАКАЗА". MOBILE. END


//акордеон в мобільній версіїї мого кабінету. START
document.addEventListener("DOMContentLoaded", function() {
  const accordionButtonMobile = document.querySelector(".accordion-button-product-mobile");
  const accordionContentMobile = document.querySelector("#collapseMobileOne");
  const iconMobile = document.querySelector(".icon-mobile");

  if (accordionButtonMobile) {
    accordionButtonMobile.addEventListener("click", function() {
      accordionContentMobile.classList.toggle("show");
      iconMobile.classList.toggle("rotate");
    });
  }
});
//акордеон в мобільній версіїї мого кабінету. END

// МІЙ КАБІНЕТ-Mobile. END






//
// СТОРІНКА "ОФОРМЛЕНИЕ ЗАКАЗА". START
//

//Авторизуватись в кабінеті через сторінку "ОФОРМЛЕНИЕ ЗАКАЗА". START  
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelector(".modal-entrance");
  var loginLink = document.querySelector(".checkout-authorization-account a");
  var closeBtn = document.querySelector(".close");

  // Відкрити модальне вікно
  if (loginLink) {
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });
  }

  // Закрити модальне вікно
  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });

  // Закрити модальне вікно при кліку за його межами
  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
});
// Авторизуватись в кабінеті через сторінку "ОФОРМЛЕНИЕ ЗАКАЗА". END 

// Акордеон в лівій частині сторінки. START
document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
      event.preventDefault();

      var body = this.nextElementSibling;
      var icon = this.querySelector('.accordion-icon');

      // Закриваємо інші акордеони
      document.querySelectorAll('.accordion-body').forEach(function(item) {
        if (item !== body) {
          item.style.display = 'none';
          item.previousElementSibling.querySelector('.accordion-icon').classList.remove('open');
        }
      });

      // Відкриваємо або закриваємо поточний акордеон
      if (body.style.display === 'block') {
        body.style.display = 'none';
        icon.classList.remove('open');
      } else {
        body.style.display = 'block';
        icon.classList.add('open');
      }
    });
  });

  // Обробка зміни radio-кнопок
  var radioButtons = document.querySelectorAll('input[name="delivery"]');
  radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var accordionBody = this.closest('.accordion-body');
      var headerNumber = accordionBody.previousElementSibling.querySelector('.accordion-number');
      if (radio.checked) {
        headerNumber.innerHTML = '<img src="./img/icons/icon-check.svg" alt="check" class="accordion-check-icon">';
      }
    });
  });

  // Функція для перевірки заповнення форм
  function checkFormCompletion(form, numberWrapper) {
    var allFilled = true;

    // Перевірка input полів
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function(input) {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    // Перевірка textarea полів
    var textareas = form.querySelectorAll('textarea');
    textareas.forEach(function(textarea) {
      if (textarea.value.trim() === '') {
        allFilled = false;
      }
    });

    if (allFilled) {
      numberWrapper.innerHTML = '<img src="./img/icons/icon-check.svg" alt="check" class="accordion-check-icon">';
    } else {
      numberWrapper.innerHTML = numberWrapper.getAttribute('data-accordion');
    }
  }

  // Обробка введення в поля форми отримувача
  var forms = document.querySelectorAll('.recipient-form');
  forms.forEach(function(form) {
    var numberWrapper = form.closest('.accordion-body').previousElementSibling.querySelector('.accordion-number-wrapper');
    form.querySelectorAll('input').forEach(function(input) {
      input.addEventListener('input', function() {
        checkFormCompletion(form, numberWrapper.querySelector('.accordion-number'));
      });
    });
  });

  // Обробка введення в поля форми способу оплати
  var paymentForms = document.querySelectorAll('.payment-method');
  paymentForms.forEach(function(form) {
    var numberWrapper = form.closest('.accordion-body').previousElementSibling.querySelector('.accordion-number-wrapper');
    form.querySelectorAll('input').forEach(function(input) {
      input.addEventListener('input', function() {
        checkFormCompletion(form, numberWrapper.querySelector('.accordion-number'));
      });
    });
  });

  // Обробка введення в поля форми коментаря
  var commentForms = document.querySelectorAll('.order-comment');
  commentForms.forEach(function(form) {
    var numberWrapper = form.closest('.accordion-body').previousElementSibling.querySelector('.accordion-number-wrapper');
    form.querySelectorAll('textarea').forEach(function(textarea) {
      textarea.addEventListener('input', function() {
        checkFormCompletion(form, numberWrapper.querySelector('.accordion-number'));
      });
    });
  });
});
// Акордеон в лівій частині сторінки. END



//Випадаючий список з адресами магазинів при самовивозі з магазину. START

document.addEventListener("DOMContentLoaded", function() {
  // Показати/сховати випадаючі меню на основі вибраного варіанту доставки
  var radioButtons = document.querySelectorAll('input[name="delivery"]');
  
  radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
      var storeAddresses = document.querySelector('.store-addresses');
      var newPostAddresses = document.querySelector('.new-post-addresses');

      if (this.value === 'self_pickup') {
        storeAddresses.style.display = 'flex';
        newPostAddresses.style.display = 'none';
      } else if (this.value === 'new_post') {
        newPostAddresses.style.display = 'flex';
        storeAddresses.style.display = 'none';
      } else {
        storeAddresses.style.display = 'none';
        newPostAddresses.style.display = 'none';
      }
    });
  });

  // Ініціалізувати Select2 для випадаючих меню
  var storeSelect = document.querySelector('#store-select');
  var citySelect = document.querySelector('#city-select');
  var branchSelect = document.querySelector('#branch-select');

  $(storeSelect).select2({
    placeholder: 'Выберите магазин',
    width: '100%',
    dropdownAutoWidth: true
  });

  $(citySelect).select2({
    placeholder: 'Выберите город',
    width: '100%',
    dropdownAutoWidth: true
  });

  $(branchSelect).select2({
    placeholder: 'Выберите номер отделения',
    width: '100%',
    dropdownAutoWidth: true
  });
});
  
  
//Випадаючий список з адресами магазинів при самовивозі з магазину. END


//Форма "УКАЖИТЕ ДАННЫЕ ПОЛУЧАТЕЛЯ". Вивод активного поля. START
document.addEventListener("DOMContentLoaded", function() {
  var inputs = document.querySelectorAll('.recipient-form .form-group input');

  inputs.forEach(function(input) {
    // Додаємо клас active на активний інпут
    input.addEventListener('focus', function() {
      input.classList.add('active');
    });

    // Видаляємо клас active після втрати фокусу
    input.addEventListener('blur', function() {
      input.classList.remove('active');
      checkInput(input);
    });

    // Перевіряємо інпут на заповненість при введенні
    input.addEventListener('input', function() {
      checkInput(input);
    });
  });

  function checkInput(input) {
    if (input.type === 'email') {
      if (input.value.trim() !== '' && input.value.includes('@')) {
        input.classList.remove('error');
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
        if (!input.classList.contains('active')) {
          input.classList.add('error');
        }
      }
    } else {
      if (input.value.trim() !== '') {
        input.classList.remove('error');
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
        if (!input.classList.contains('active')) {
          input.classList.add('error');
        }
      }
    }
  }
});

//Форма "УКАЖИТЕ ДАННЫЕ ПОЛУЧАТЕЛЯ". Вивод активного поля. END



// САЙДБАР. START
document.addEventListener("DOMContentLoaded", function() {
  var checkoutAccordionHeader = document.querySelector('.checkout-accordion-header');
  var checkoutAccordionContent = document.querySelector('.checkout-accordion-content');
  if (checkoutAccordionHeader && checkoutAccordionContent) { // Перевірка наявності елементів
    var checkoutIcon = checkoutAccordionHeader.querySelector('.checkout-icon');

    checkoutAccordionHeader.addEventListener('click', function() {
      if (checkoutAccordionContent) {
        checkoutAccordionContent.style.display = checkoutAccordionContent.style.display === 'block' ? 'none' : 'block';
      }
      if (checkoutIcon) {
        checkoutIcon.classList.toggle('rotate');
      }
    });
  }
});



//Варіація (ПО КОЛЬОРАМ). START
document.addEventListener("DOMContentLoaded", function () {
  let selectHeaders = document.querySelectorAll('.select_header-color');
  let selectItems = document.querySelectorAll('.select_item-color');

  selectHeaders.forEach(header => {
      header.addEventListener('click', function () {
          let parent = this.parentElement;
          parent.classList.toggle('is-active');
      });
  });

  selectItems.forEach(item => {
      item.addEventListener('click', function () {
          let color = this.getAttribute('data-color');
          let select = this.closest('.select-color');
          let currentColor = select.querySelector('.select_current-color');
          currentColor.style.backgroundColor = color;
          select.classList.remove('is-active');
      });
  });

  document.addEventListener('click', function (event) {
      if (!event.target.closest('.select-color')) {
          document.querySelectorAll('.select-color.is-active').forEach(select => {
              select.classList.remove('is-active');
          });
      }
  });
});
//Варіація (ПО КОЛЬОРАМ). END

//Варіація (ПО РОЗМІРАМ). START
document.addEventListener("DOMContentLoaded", function () {
  let selectHeaders = document.querySelectorAll('.select_header-size');
  let selectItems = document.querySelectorAll('.select_item-size');

  selectHeaders.forEach(header => {
      header.addEventListener('click', function () {
          let parent = this.parentElement;
          parent.classList.toggle('is-active');
      });
  });

  selectItems.forEach(item => {
      item.addEventListener('click', function () {
          let text = this.innerText;
          let select = this.closest('.select-size');
          let currentText = select.querySelector('.select_current-size');
          currentText.innerText = text;
          select.classList.remove('is-active');
      });
  });

  document.addEventListener('click', function (event) {
      if (!event.target.closest('.select-size')) {
          document.querySelectorAll('.select-size.is-active').forEach(select => {
              select.classList.remove('is-active');
          });
      }
  });
});
//Варіація (ПО РОЗМІРАМ). START


//Квонтіті інпут. START
document.addEventListener("DOMContentLoaded", function() {
  // Обробка збільшення та зменшення кількості
  document.querySelectorAll('.quantity-btn').forEach(button => {
      button.addEventListener('click', function() {
          const input = this.parentElement.querySelector('.quantity-input');
          const minusButton = this.parentElement.querySelector('.quantity-btn-minus');
          let value = parseInt(input.value);

          if (this.classList.contains('quantity-btn-minus')) {
              value = Math.max(value - 1, 1); // Мінімальне значення 1
              if (value === 1) {
                  minusButton.classList.add('hidden');
              }
          } else if (this.classList.contains('quantity-btn-plus')) {
              value = value + 1;
              minusButton.classList.remove('hidden');
          }

          input.value = value;
      });
  });

  // Перевірка початкового значення і встановлення видимості кнопки "-"
  document.querySelectorAll('.quantity-selector').forEach(selector => {
      const input = selector.querySelector('.quantity-input');
      const minusButton = selector.querySelector('.quantity-btn-minus');
      let value = parseInt(input.value);

      if (value === 1) {
          minusButton.classList.add('hidden');
      }
  });
});
//Квонтіті інпут. END



// САЙДБАР. END

//
// СТОРІНКА "ОФОРМЛЕНИЕ ЗАКАЗА". END
//





//
// СТОРІНКА "SINGLE-PAGE". START
//

//Відкриття фото в карточці товару. START
$(document).ready(function() {
  $('.popup-link').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      },
      image: {
          verticalFit: true
      }
  });
});
//Відкриття фото в карточці товару. END

//ZOOM фото в карточці товару. START
document.addEventListener('DOMContentLoaded', function () {
  const zoomContainers = document.querySelectorAll('.zoom-image');

  zoomContainers.forEach(container => {
      const img = container.querySelector('img');

      container.addEventListener('mousemove', function (e) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xPercent = (x / rect.width) * 100;
          const yPercent = (y / rect.height) * 100;

          img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      });

      container.addEventListener('mouseleave', function () {
          img.style.transformOrigin = 'center center';
      });
  });
});
//ZOOM фото в карточці товару. END






//Варіації товару по кольору в карточці товару, та зміні головного фото + відсутній товар блюриться і не активний + додається клас активності. START
document.addEventListener("DOMContentLoaded", function() {
  // Знайти всі кольори товару
  var colorElements = document.querySelectorAll(".product-colors li a");

  // Перебрати всі елементи і додати клас "sold-out" якщо товар проданий
  colorElements.forEach(function(colorElement) {
      if (colorElement.getAttribute("data-sold") === "true") {
          colorElement.classList.add("sold-out");
      }
  });

  // Оновити назву кольору і головне зображення при виборі кольору
  colorElements.forEach(function(colorElement) {
      colorElement.addEventListener("click", function(event) {
          event.preventDefault();
          var selectedColor = this.getAttribute("data-color");
          var newSrc = this.getAttribute("data-src");

          // Оновити текст обраного кольору
          document.getElementById("selected-color-name").textContent = selectedColor;

          // Оновити головне зображення
          var mainImage = document.querySelector(".main-image img");
          if (mainImage) {
              mainImage.src = newSrc;
          } else {
              // Якщо головне зображення не обгорнуте в інший елемент
              document.querySelector(".main-image").src = newSrc;
          }

          // Видалити клас активності з усіх елементів
          colorElements.forEach(function(el) {
              el.parentElement.classList.remove("active");
          });

          // Додати клас активності до натиснутого елементу
          this.parentElement.classList.add("active");
      });
  });
});

//Варіації товару по кольору в карточці товару, та зміні головного фото + відсутній товар блюриться і не активний + додається клас активності. END



//Варіації розміру товару + відображення напису "Необходимо выбрать размер!" + знімаємо активніть з товару який розпродано. START
document.addEventListener("DOMContentLoaded", function() {
  var sizeElements = document.querySelectorAll(".shop-details-size-box-list li");
  var sizeWarning = document.getElementById("size-warning");
  var addToCartButton = document.getElementById("add-to-cart-btn");
  var selectedSize = null;

  sizeElements.forEach(function(sizeElement) {
    if (sizeElement.getAttribute("data-sold") === "true") {
      sizeElement.classList.add("sold-out");
    }

    sizeElement.addEventListener("click", function(event) {
      event.preventDefault(); // Запобігаємо поведінці за замовчуванням

      if (this.getAttribute("data-sold") === "true") {
        return; // Якщо товар проданий, нічого не робимо
      }

      // Видаляємо клас "active" з усіх елементів
      sizeElements.forEach(function(el) {
        el.classList.remove("active");
      });

      // Додаємо клас "active" до обраного елемента
      this.classList.add("active");

      // Отримуємо значення розміру з атрибута data-size
      selectedSize = this.getAttribute("data-size");
      console.log("Ви вибрали розмір:", selectedSize);

      // Ховаємо попередження про вибір розміру
      sizeWarning.style.display = "none";
    });
  });

  if (addToCartButton) {
    addToCartButton.addEventListener("click", function() {
      if (selectedSize === null) {
        // Показуємо попередження, якщо розмір не вибраний
        sizeWarning.style.display = "inline";
      } else {
        // Змінюємо колір і текст кнопки, якщо розмір вибраний
        addToCartButton.style.backgroundColor = "rgb(68, 167, 140)";
        addToCartButton.textContent = "Товар добавлен";
      }
    });
  }
});
//Варіації розміру товару + відображення напису "Необходимо выбрать размер!" + знімаємо активніть з товару який розпродано. END





// МОДАЛЬНЕ ВІКНО. "УЗНАТЬ СВОЙ РАЗМЕР". + ТАБУЛЯЦІЯ в середині. START

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("size-modal");
  var showModalBtn = document.getElementById("show-size-modal");
  var closeModalBtn = document.querySelector(".close-size-modal");

  if (showModalBtn) {
    showModalBtn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Функція для переключення табів
  window.openTab = function(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }

  // Відкрити перший таб за замовчуванням, якщо він існує
  var firstTabLink = document.querySelector(".tablinks");
  if (firstTabLink) {
    firstTabLink.click();
  }
});

// МОДАЛЬНЕ ВІКНО. "УЗНАТЬ СВОЙ РАЗМЕР". + ТАБУЛЯЦІЯ в середині. END


//Акордеон на сторінці Single-shop. START
document.addEventListener("DOMContentLoaded", function() {
  var accordionHeader = document.querySelector(".accordion-header-single");
  var accordionContent = document.querySelector(".accordion-content-single");
  var accordionIcon = document.querySelector(".accordion-icon-single");

  if (accordionHeader) {
    accordionHeader.addEventListener("click", function() {
        var isVisible = accordionContent.style.display === "block";
        accordionContent.style.display = isVisible ? "none" : "block";
        accordionIcon.classList.toggle("rotate", !isVisible);
    });
  }
});
//Акордеон на сторінці Single-shop. END



// Табуляція на сторінці  SINGLE-SHOP + РЕЙТИНГ. START 
document.addEventListener('DOMContentLoaded', function() {
  // Існуючий код для табів
  const tabs = document.querySelectorAll('.single-shop-tabs .nav-link-single');
  const tabContents = document.querySelectorAll('.tab-content-single');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = document.querySelector(`#${this.getAttribute('data-tab')}`);

      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      this.classList.add('active');
      if (target) {
        target.classList.add('active');
      }
    });
  });

  // Новий код для динамічного заповнення прогрес барів
  const reviews = document.querySelectorAll('.review');
  const ratingsCount = [0, 0, 0, 0, 0]; // [5 зірок, 4 зірки, 3 зірки, 2 зірки, 1 зірка]
  let totalReviews = 0;
  let sumRatings = 0;

  reviews.forEach(review => {
    const rating = parseInt(review.getAttribute('data-rating'));
    ratingsCount[5 - rating]++;
    totalReviews++;
    sumRatings += rating;
  });

  const averageRating = (sumRatings / totalReviews).toFixed(1);

  const totalReviewsElement = document.getElementById('total-reviews');
  const totalReviewsCountElement = document.getElementById('total-reviews-count');
  const averageRatingValueElement = document.getElementById('average-rating-value');
  const averageStarsContainer = document.getElementById('average-rating-stars');

  if (totalReviewsElement) {
    totalReviewsElement.textContent = totalReviews;
  }

  if (totalReviewsCountElement) {
    totalReviewsCountElement.textContent = totalReviews;
  }

  if (averageRatingValueElement) {
    averageRatingValueElement.textContent = averageRating;
  }

  if (averageStarsContainer) {
    averageStarsContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      if (averageRating - i >= 1) {
        averageStarsContainer.innerHTML += '<img src="./img/icons/icon-star.svg" alt="star">';
      } else if (averageRating - i > 0) {
        averageStarsContainer.innerHTML += '<img src="./img/icons/icon-star-grey_1.svg" alt="star">';
      } else {
        averageStarsContainer.innerHTML += '<img src="./img/icons/icon-star-grey_1.svg" alt="star">';
      }
    }
  }

  const ratingBars = document.querySelectorAll('.rating-bar');
  ratingBars.forEach(bar => {
    const rating = parseInt(bar.getAttribute('data-rating'));
    const count = ratingsCount[5 - rating];
    const percentage = (count / totalReviews) * 100;

    bar.querySelector('.fill').style.width = `${percentage}%`;
    bar.querySelector('.rating-count').textContent = count;
  });

  // Код для фільтрації коментарів
  const filterTabs = document.querySelectorAll('#comments-flters-tabs li');
  const comments = document.querySelectorAll('.portfolio-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Remove 'filter-active' class from all tabs
      filterTabs.forEach(t => t.classList.remove('filter-active'));

      // Add 'filter-active' class to clicked tab
      this.classList.add('filter-active');

      // Show/Hide comments based on filter
      comments.forEach(comment => {
        if (filter === '*' || comment.classList.contains(filter)) {
          comment.style.display = 'block';
        } else {
          comment.style.display = 'none';
        }
      });
    });
  });

  // Initialize by showing all comments
  comments.forEach(comment => comment.style.display = 'block');
});


// Табуляція на сторінці  SINGLE-SHOP + РЕЙТИНГ.  END


//Приклад. Задати питання. START
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', function() {
          item.classList.toggle('active');
      });
  });
});
//Приклад. Задати питання. END






// Swiper. СЛАЙДЕР "ДОПОЛНИ ОБРАЗ". + ФІЛЬТР З КАТЕГОРІЯМИ. START
var mainSwiper = new Swiper(".mySwiper7", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2.4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    790: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Перелистую з останього на перший слайд
  on: {
    slideChange: function () {
      if (this.isEnd) {
        this.slideTo(0);
      }
    }
  }
});



// Filter products
const filterButtons = document.querySelectorAll('.single-shop-related-tag a');
const slides = document.querySelectorAll('.swiper-slide');

filterButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link behavior
    const filter = button.getAttribute('data-filter');
    slides.forEach(slide => {
      if (filter === 'all' || slide.getAttribute('data-category') === filter) {
          slide.style.display = 'block';
      } else {
          slide.style.display = 'none';
      }
    });
    mainSwiper.update(); // Update the swiper after filtering
  });
});
// Swiper. СЛАЙДЕР "ДОПОЛНИ ОБРАЗ". + ФІЛЬТР З КАТЕГОРІЯМИ. END



// Swiper. СЛАЙДЕР "ВЫ ПРОСМАТРИВАЛИ". + ФІЛЬТР З КАТЕГОРІЯМИ. START
document.addEventListener('DOMContentLoaded', function () {
  // Посилання на фільтри
  const filterLinks = document.querySelectorAll('#viewedList li a');

  // Слайди
  const slides = document.querySelectorAll('.single-shop-viewed-slide');

  // Ініціалізація Swiper
  var viewedSwiper = new Swiper(".mySwiper8", {
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: false,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      breakpoints: {
        300: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        480: {
          slidesPerView: 2.4,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        790: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // Loop from last to first slide
      on: {
        slideChange: function () {
            if (this.isEnd) {
                this.slideTo(0);
            }
        }
      }
  });

  // Додавання обробника подій для кожного посилання фільтра
  filterLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          // Отримання значення data-filter з посилання
          const filterValue = this.getAttribute('data-filter');

          // Підсвічення обраного посилання
          filterLinks.forEach(item => {
              item.classList.remove('active');
          });
          this.classList.add('active');

          // Показати відповідні слайди, приховати інші
          slides.forEach(slide => {
              const categories = slide.getAttribute('data-category').split(' ');
              if (categories.includes(filterValue)) {
                  slide.style.display = 'block'; // Показати слайд
              } else {
                  slide.style.display = 'none'; // Приховати слайд
              }
          });

          // Оновити Swiper після зміни видимості слайдів
          viewedSwiper.update();
      });
  });

  // Додавання обробника подій для кнопки "ЕЩЕ"
  // Перевірка наявності кнопки перед додаванням обробника подій
  const moreViewedButton = document.getElementById('moreViewedButton');
  if (moreViewedButton) {
    moreViewedButton.addEventListener('click', function () {
      // Показати всі елементи з класом hidden-viewed
      document.querySelectorAll('#viewedList .hidden-viewed').forEach(function (element) {
          element.classList.remove('hidden-viewed');
      });
      // Приховати кнопку після натискання
      this.style.display = 'none';

      // Оновити Swiper після зміни вмісту слайдів
      viewedSwiper.update();
    });
  }
});

// Swiper. СЛАЙДЕР "ВЫ ПРОСМАТРИВАЛИ". + ФІЛЬТР З КАТЕГОРІЯМИ. END






//
// СТОРІНКА "SINGLE-PAGE". END
//



//
// КОШИК. START
//
document.getElementById('openCartModal').addEventListener('click', function(event) {
  event.preventDefault();
  $('#cartModal').modal('show');
});

document.getElementById('closeCartModal').addEventListener('click', function() {
  $('#cartModal').modal('hide');
});


//Приклад видалення товару з кошика
document.querySelectorAll('.remove-item').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.cart-item').remove();
  });
});

//
// КОШИК. END
//




//
// WISHLIST-MODAL. START
//

// Додаємо/Видаляємо товар у вішліст. START
$(document).ready(function() {
  let itemToRemove; // Змінна для збереження посилання на товар для видалення

  // Функція для показу спливаючого вікна
  function showNotification(notificationElement) {
      notificationElement.addClass('show');
      setTimeout(function() {
          notificationElement.removeClass('show');
      }, 3000); // Спливаюче вікно буде видиме протягом 3 секунд
  }

  // Функція для показу підтвердження видалення
  function showRemoveConfirmation() {
      $('#removeConfirmationDialog').addClass('show');
  }

  // Функція для приховання підтвердження видалення
  function hideRemoveConfirmation() {
      $('#removeConfirmationDialog').removeClass('show');
  }

  // Обробник для кнопки "Додати в кошик"
  $('.product-card button.product-card-add-cart-img').on('click', function(e) {
      e.preventDefault();
      showNotification($('#cartNotification'));
  });

  // Обробник для кнопки "Додати у вішліст"
  $('.product-card .product-card-wishlist-img').on('click', function(e) {
      e.preventDefault();
      showNotification($('#wishlistNotification'));
  });

  // Обробник для кнопки "Видалити з вішліста"
  $('.wishlist-modal-wrapper_btn .remove-cart-btn').on('click', function(e) {
      e.preventDefault();

      // Збереження посилання на товар для видалення
      itemToRemove = $(this).closest('.checkout-product-card');
      // Показуємо підтвердження видалення
      showRemoveConfirmation();
  });

  // Обробник для кнопки підтвердження "ДА"
  $('#confirmRemoveBtn').on('click', function() {
      if (itemToRemove) {
          // Виконуємо видалення товару з вішліста
          itemToRemove.remove();
          // Показуємо спливаюче повідомлення про видалення
          showNotification($('#wishlistRemovalNotificationNew'));
          // Приховуємо підтвердження видалення
          hideRemoveConfirmation();
          checkWishlistItems(); // Перевірка товарів у вішлісті
      }
  });

  // Обробник для кнопки підтвердження "НЕТ"
  $('#cancelRemoveBtn').on('click', function() {
      // Приховуємо підтвердження видалення без видалення товару
      hideRemoveConfirmation();
  });

  // Перевірка наявності товарів у вішлісті
  // Ваша функція для перевірки вішліста
  function checkWishlistItems() {
    console.log("Перевірка товарів у вішлісті");
    let itemCount = $('.wishlist-modal-wrapper .checkout-product-card').length;
    console.log("Кількість товарів: ", itemCount);
    
    if (itemCount === 0) {
        $('#wishlistEmptyMessage').show(); // Показати повідомлення про порожній вішліст
        console.log("Показати повідомлення про порожній вішліст");
    } else {
        $('#wishlistEmptyMessage').hide(); // Сховати повідомлення про порожній вішліст
        console.log("Сховати повідомлення про порожній вішліст");
    }
  }

  // Відкриття модального вікна вішліста
  $('#openWishlistModal').on('click', function(e) {
      e.preventDefault();
      $('#wishlistModal').modal('show');
      checkWishlistItems(); // Перевірка товарів у вішлісті
  });

  // Закриття модального вікна вішліста
  $('.close').on('click', function() {
      $('#wishlistModal').modal('hide');
  });
});
// Додаємо/Видаляємо товар у вішліст. END

//Вхід в модальне в мій кабінет з WISHLIST. START
document.addEventListener('DOMContentLoaded', function() {
  var personalAccountBtn = document.querySelector('#goToAccountBtn'); 

  personalAccountBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var modalEntrance = document.querySelector('.modal-entrance');
    if (modalEntrance) {
      modalEntrance.style.display = 'block';
    }
  });
});
//Вхід в модальне в мій кабінет з WISHLIST. END



//
// WISHLIST-MODAL. END
//






//
// СТОРІНКА-SHOP. START
//

//Верхній фільтр. START
document.addEventListener('DOMContentLoaded', function() {
  const topfilterButtons = document.querySelectorAll('.filter-top');

  topfilterButtons.forEach(button => {
    // Додаємо елемент для скидання фільтру (іконка "Х")
    const resetIcon = document.createElement('div');
    resetIcon.classList.add('filter-reset-icon');
    button.appendChild(resetIcon);

    button.addEventListener('click', function(event) {
      // Перевірка чи вибраний фільтр вже активний
      const isActive = this.classList.contains('active');

      // Якщо кнопка вже активна і клік по "Х", то скидаємо фільтр
      if (isActive && event.target.classList.contains('filter-reset-icon')) {
        this.classList.remove('active');
      } else {
        // Додаємо або видаляємо активний клас відповідно до поточного стану
        this.classList.toggle('active');
      }

      // Збираємо усі активні фільтри
      const activeFilters = Array.from(topfilterButtons)
        .filter(btn => btn.classList.contains('active'))
        .map(btn => btn.getAttribute('data-filter'));

      console.log(activeFilters); // Виведення активних фільтрів у консоль (для демонстрації)

    });
  });
});

//Верхній фільтр. END


//Правий фыльтр. START
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('rightFiltersModal');
  const openModalBtn = document.querySelector('.filter-right-btn');
  const closeModalBtn = document.getElementById('closeRightFiltersModal');
  const showFiltersButton = document.querySelector('.btn.btn-primary-category');
  const clearFiltersButton = document.getElementById('clearFiltersButton');
  const selectedFiltersWrapper = document.querySelector('.selected-filters-wrapper');
  const categoryButtons = document.querySelectorAll('.category-custom');
  const accordionHeaders = document.querySelectorAll('.accordion-header-custom');
  const accordionContents = document.querySelectorAll('.accordion-content-custom');
  const clearAllFiltersButton = document.getElementById('clear-all-filters');

  // Перевірка наявності кнопки перед використанням
  if (clearAllFiltersButton) {
    // По дефолту приховуємо кнопку "Очистить все"
    clearAllFiltersButton.style.display = 'none';

    // Очищення всіх фільтрів при натисканні на кнопку "Очистить все"
    clearAllFiltersButton.addEventListener('click', function() {
      categoryButtons.forEach(button => {
        button.classList.remove('active');
        button.querySelector('span').style.display = 'inline-block';
        button.querySelector('.filter-reset-icon').style.display = 'none';
      });

      selectedFiltersWrapper.innerHTML = '';
      clearAllFiltersButton.style.display = 'none'; // Приховуємо кнопку "Очистить все"
    });
  }

  // Відкрити модальне вікно при кліку на кнопку "Ще фільтри"
  if (openModalBtn) {
    openModalBtn.onclick = function() {
      modal.classList.add('show');
    }
  }

  // Закрити модальне вікно при кліку на "x" або кнопку "Закрити"
  if (closeModalBtn) {
    closeModalBtn.onclick = function() {
      modal.classList.remove('show');
    }
  }

  // Закрити модальне вікно при кліку за межами вікна
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  }

  // Обробка акордеону в правому фільтрі з категоріями
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const arrowIcon = header.querySelector('.arrow-icon-custom');
      const categoriesContainer = header.nextElementSibling.querySelector('.categories-container-custom');

      categoriesContainer.classList.toggle('open');
      arrowIcon.classList.toggle('open');
    });
  });

  // Очищення всіх фільтрів при натисканні на кнопку "ОЧИСТИТЬ ФИЛЬТР"
  if (clearFiltersButton) {
    clearFiltersButton.addEventListener('click', function() {
      categoryButtons.forEach(button => {
        button.classList.remove('active');
        button.querySelector('span').style.display = 'inline-block';
        button.querySelector('.filter-reset-icon').style.display = 'none';
      });

      selectedFiltersWrapper.innerHTML = '';
      if (clearAllFiltersButton) {
        clearAllFiltersButton.style.display = 'none'; // Приховуємо кнопку "Очистить все"
      }
    });
  }

  // Виводимо іконку "х" при виборі фільтрів в правому сайдбарі
  categoryButtons.forEach(button => {
    const resetIcon = document.createElement('div');
    resetIcon.classList.add('filter-reset-icon');
    button.appendChild(resetIcon);

    button.addEventListener('click', function(event) {
      const isActive = this.classList.contains('active');

      if (isActive) {
        this.classList.remove('active');
        this.querySelector('span').style.display = 'inline-block';
        resetIcon.style.display = 'none';
      } else {
        this.classList.add('active');
        this.querySelector('span').style.display = 'none';
        resetIcon.style.display = 'block';
      }
    });
  });

  // Обробка натискання на кнопку "ПОКАЗАТЬ"
  if (showFiltersButton) {
    showFiltersButton.addEventListener('click', function() {
      const activeFilters = Array.from(categoryButtons)
          .filter(btn => btn.classList.contains('active'))
          .map(btn => btn.getAttribute('data-filter'));

      selectedFiltersWrapper.innerHTML = '';

      activeFilters.forEach(filter => {
        const filterElement = document.createElement('div');
        filterElement.classList.add('selected-filter');
        filterElement.textContent = filter;

        // Додаємо кнопку "X" до кожного фільтру
        const removeFilterButton = document.createElement('button');
        removeFilterButton.classList.add('remove-filter');
        
        // Додаємо іконку замість тексту "X"
        const removeFilterIcon = document.createElement('img');
        removeFilterIcon.src = './img/icons/icon-cross.svg';
        removeFilterIcon.alt = 'Remove filter';
        removeFilterButton.appendChild(removeFilterIcon);

        filterElement.appendChild(removeFilterButton);

        // Додаємо обробник подій для кнопки "X"
        removeFilterButton.addEventListener('click', function() {
          // Знаходимо відповідну кнопку фільтра та видаляємо клас 'active'
          const correspondingButton = Array.from(categoryButtons).find(btn => btn.getAttribute('data-filter') === filter);
          if (correspondingButton) {
            correspondingButton.classList.remove('active');
            correspondingButton.querySelector('span').style.display = 'inline-block';
            correspondingButton.querySelector('.filter-reset-icon').style.display = 'none';
          }

          // Видаляємо фільтр з відображення вибраних фільтрів
          filterElement.remove();

          // Перевіряємо, чи залишилися активні фільтри, щоб показувати або приховувати кнопку "Очистить все"
          if (clearAllFiltersButton) {
            const anyActive = Array.from(categoryButtons).some(btn => btn.classList.contains('active'));
            clearAllFiltersButton.style.display = anyActive ? 'block' : 'none';
          }
        });

        selectedFiltersWrapper.appendChild(filterElement);
      });

      // Показуємо кнопку "Очистить все" після вибору фільтрів
      if (clearAllFiltersButton) {
        const anyActive = Array.from(categoryButtons).some(btn => btn.classList.contains('active'));
        clearAllFiltersButton.style.display = anyActive ? 'block' : 'none';
      }

      if (modal) {
        modal.classList.remove('show');
      }
    });
  }

  // Робимо скрол по кліку мишки на overflow-x: auto; всередині акордеону
  accordionContents.forEach(content => {
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    content.addEventListener('mousedown', function(event) {
      isMouseDown = true;
      startX = event.pageX - content.offsetLeft;
      scrollLeft = content.scrollLeft;
    });

    content.addEventListener('mouseleave', function() {
      isMouseDown = false;
    });

    content.addEventListener('mouseup', function() {
      isMouseDown = false;
    });

    content.addEventListener('mousemove', function(event) {
      if (!isMouseDown) return;
      event.preventDefault();
      const x = event.pageX - content.offsetLeft;
      const walk = (x - startX) * 2;
      content.scrollLeft = scrollLeft - walk;
    });
  });
});

//Правий фыльтр. END


//Другий блок з фільром (сортирувати за новинками, або "по популярности", або "по убіванию"). START
document.addEventListener('DOMContentLoaded', function() {
  var selectItems = document.querySelectorAll('.select-items li');
  var selectBox = document.querySelector('.select-selected');
  var selectIcon = document.querySelector('.arrow-icon');

  selectItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var selectedText = this.textContent;

          // Змінюємо тільки текст в select-selected
          selectBox.textContent = selectedText;
          // Встановлюємо іконку стрілки назад на місце
          selectBox.appendChild(selectIcon.cloneNode(true)); // Додаємо клоновану іконку назад

          // Сховуємо список після вибору
          this.closest('.select-items').classList.add('select-hide');
      });
  });

  // Обробник для відкриття/закриття списку при кліку на selectBox
  if (selectBox) {
    selectBox.addEventListener('click', function() {
      var selectItems = this.nextElementSibling;
      selectItems.classList.toggle('select-hide');
    });
  }

  // Обробник для закриття списку при кліку поза ним
  document.addEventListener('click', function(e) {
      if (!selectBox.contains(e.target) && !selectItems.contains(e.target)) {
          selectItems.classList.add('select-hide');
      }
  });
});

//Другий блок з фільром (сортирувати за новинками, або "по популярности", або "по убіванию"). END




//Картка товара. START

document.addEventListener('DOMContentLoaded', function() {
  const sizeOptions = document.querySelectorAll('.size-option');
  const addToCartButtons = document.querySelectorAll('.addcart');
  const closeIcons = document.querySelectorAll('.close-variation-icon-mobile');

  
  
  sizeOptions.forEach(option => {
    option.addEventListener('click', function(event) {
      event.preventDefault();
      const productCard = this.closest('.products-three-single');
      const allSizeOptions = productCard.querySelectorAll('.size-option');
      allSizeOptions.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      productCard.setAttribute('data-selected-size', this.getAttribute('data-size'));
    });
  });

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const productCard = this.closest('.products-three-single');
      const selectedSize = productCard.getAttribute('data-selected-size');
      const sizeAlert = productCard.querySelector('.size-alert');
      const sizeLinks = productCard.querySelector('.products-variations_size-links');
      const addedToCartMessage = productCard.querySelector('.added-to-cart-message');

      if (!selectedSize) {
        sizeAlert.style.display = 'block';
        sizeLinks.style.display = 'block';
      } else {
        sizeAlert.style.display = 'none';
        sizeLinks.style.display = 'none';
        addedToCartMessage.style.display = 'block';

        // Очищення вибраного розміру після додавання в кошик
        productCard.removeAttribute('data-selected-size');

        // Приховати повідомлення через деякий час
        setTimeout(() => {
          addedToCartMessage.style.display = 'none';
        }, 3000);

        console.log('Товар додано до кошика з розміром: ' + selectedSize);
      }
    });
  });

  closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const sizeLinks = this.closest('.products-variations_size-links');
      sizeLinks.style.display = 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sizeOptions = document.querySelectorAll('.size-option-two');
  const addToCartButtons = document.querySelectorAll('.addcart.btn-primary');
  const closeIcons = document.querySelectorAll('.close-variation-icon-mobile-two');

  // Обробка вибору розміру
  sizeOptions.forEach(option => {
    option.addEventListener('click', function(event) {
      event.preventDefault();
      const productCard = this.closest('.product-grid-two');
      const allSizeOptions = productCard.querySelectorAll('.size-option-two');
      allSizeOptions.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
      productCard.setAttribute('data-selected-size', this.getAttribute('data-size'));
    });
  });

  // Обробка натискання кнопки "додати до кошика"
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const productCard = this.closest('.product-grid-two');
      const selectedSize = productCard.getAttribute('data-selected-size');
      const sizeAlert = productCard.querySelector('.size-alert-two');
      const sizeLinks = productCard.querySelector('.products-variations_size-links-two');
      const addedToCartMessage = productCard.querySelector('.added-to-cart-message');

      if (!selectedSize) {
        sizeAlert.style.display = 'block';
        sizeLinks.style.display = 'block';
      } else {
        sizeAlert.style.display = 'none';
        sizeLinks.style.display = 'none';
        addedToCartMessage.style.display = 'block';

        // Очищення вибраного розміру після додавання в кошик
        productCard.removeAttribute('data-selected-size');

        // Приховати повідомлення через деякий час
        setTimeout(() => {
          addedToCartMessage.style.display = 'none';
        }, 3000);

        console.log('Товар додано до кошика з розміром: ' + selectedSize);
      }
    });
  });

  // Обробка закриття вікна вибору розміру
  closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const sizeLinks = this.closest('.products-variations_size-links-two');
      sizeLinks.style.display = 'none';
    });
  });
});

//Обменження виводу кількості символів заголовку карточки товару. START
document.addEventListener('DOMContentLoaded', function () {
  const titleElements = document.querySelectorAll('.card-lower-title h3 a, .card-lower-title-two h3');
  const maxLength = 27;

  titleElements.forEach(titleElement => {
      if (titleElement.textContent.length > maxLength) {
          titleElement.textContent = titleElement.textContent.slice(0, maxLength) + '...';
      }
  });
});
//Обменження виводу кількості символів заголовку карточки товару. END





//Варіації кольору в картці товару. START
document.addEventListener('DOMContentLoaded', function() {
  // Обработка первой карточки
  document.querySelectorAll('.products-three-single').forEach(function(card) {
      card.querySelector('.more-images').addEventListener('click', function() {
          const allImages = card.querySelector('.all-images-color');
          allImages.style.display = 'flex';
          this.style.display = 'none';
      });

      card.querySelectorAll('.variation-color').forEach(function(element) {
          element.addEventListener('click', function() {
              card.querySelectorAll('.variation-color').forEach(function(el) {
                  el.classList.remove('selected');
              });
              this.classList.add('selected');
              const selectedImage = this.getAttribute('data-image');
              card.querySelector('.first-img').src = selectedImage;
          });
      });
  });

  // Обработка второй карточки
  document.querySelectorAll('.product-grid-two').forEach(function(card) {
      card.querySelector('.more-images').addEventListener('click', function() {
          const allImages = card.querySelector('.all-images-color');
          allImages.style.display = 'flex';
          this.style.display = 'none';
      });

      card.querySelectorAll('.variation-color').forEach(function(element) {
          element.addEventListener('click', function() {
              card.querySelectorAll('.variation-color').forEach(function(el) {
                  el.classList.remove('selected');
              });
              this.classList.add('selected');
              const selectedImage = this.getAttribute('data-image');
              card.querySelector('.first-img').src = selectedImage;
          });
      });
  });
});
//Варіації кольору в картці товару. END

//Пагінація END

//Картка товара. END






//
// СТОРІНКА-SHOP. END
//




//Обмежуємо вивод заголовоку в модальному вікні #FORMENUA. START 
document.addEventListener('DOMContentLoaded', function() {
  const titleElements = document.querySelectorAll('.product-title h2');
  console.log("Выбранные элементы:", titleElements); // Отладочное сообщение
  const maxLength = 20;

  titleElements.forEach(titleElement => {
      console.log("Исходный текст:", titleElement.textContent); // Отладочное сообщение
      if (titleElement.textContent.length > maxLength) {
          titleElement.textContent = titleElement.textContent.slice(0, maxLength) + '...';
          console.log("Обрезанный текст:", titleElement.textContent); // Отладочное сообщение
      }
  });
});
//Обмежуємо вивод заголовоку в модальному вікні #FORMENUA. END





//Видаляємо товар по кліку на кошик. Сторінка Checkout. START
document.addEventListener('DOMContentLoaded', function() {
  // Знайти всі кнопки видалення
  const removeButtons = document.querySelectorAll('.remove-cart-btn');
  const confirmationModal = document.getElementById('removeConfirmationCheckout');
  const checkoutRemoveBtn = document.getElementById('checkoutRemoveBtn');
  const cancelcheckoutRemoveBtn = document.getElementById('cancelcheckoutRemoveBtn');

  // Змінна для зберігання елемента товару, який потрібно видалити
  let itemToRemove = null;

  // Обробники подій для кнопок видалення
  removeButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.stopPropagation();
          itemToRemove = this.closest('.checkout-product-card');
          confirmationModal.style.display = 'flex';
      });
  });

  // Обробники подій для кнопок підтвердження і скасування
  [checkoutRemoveBtn, cancelcheckoutRemoveBtn].forEach(button => {
      button.addEventListener('click', function(event) {
          event.stopPropagation();
          if (this === checkoutRemoveBtn && itemToRemove) {
              itemToRemove.remove();
              itemToRemove = null;
          }
          confirmationModal.style.display = 'none';
      });
  });

  // Пагінація
  const updatePageInfo = (pageNumber, pageInfoId) => {
    const totalPages = 150;
    document.getElementById(pageInfoId).textContent = `Страница ${pageNumber} с ${totalPages}`;
    document.getElementById('dropdownMenu1').classList.remove('show');
    document.getElementById('dropdownMenu2').classList.remove('show');
  };

  const getCurrentPage = (pageInfoId) => {
    const pageInfo = document.getElementById(pageInfoId).textContent;
    const match = pageInfo.match(/Страница (\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      const pageNumber = this.getAttribute('data-page');
      updatePageInfo(pageNumber, 'pageInfo1');
      updatePageInfo(pageNumber, 'pageInfo2');
      document.querySelectorAll('.dropdown-menu li a').forEach(a => a.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  ['dropdownToggle1', 'dropdownToggle2'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById(`dropdownMenu${id.slice(-1)}`).classList.toggle('show');
      });
    }
  });

  ['prevPage1', 'prevPage2', 'nextPage1', 'nextPage2'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', function(event) {
        event.stopPropagation();
        const currentPage = getCurrentPage(this.id.includes('1') ? 'pageInfo1' : 'pageInfo2');
        const totalPages = 150;
        let newPage = currentPage;
  
        if (id.includes('prev')) {
          newPage = Math.max(1, currentPage - 1);
        } else if (id.includes('next')) {
          newPage = Math.min(totalPages, currentPage + 1);
        }
  
        if (newPage !== currentPage) {
          updatePageInfo(newPage, this.id.includes('1') ? 'pageInfo1' : 'pageInfo2');
        }
      });
    }
  });

  document.addEventListener('click', function(event) {
    ['dropdownMenu1', 'dropdownMenu2'].forEach(menuId => {
      const menu = document.getElementById(menuId);
      if (!document.getElementById(`dropdownToggle${menuId.slice(-1)}`).contains(event.target) && !menu.contains(event.target)) {
          menu.classList.remove('show');
      }
    });
  });
});

//Видаляємо товар по кліку на кошик. Сторінка Checkout. END





// Обработчик событий для поиска. START

$(document).ready(function() {
  // Відкриття пошукового поля
  $(".search-box.menu").on("click", function() {
    $(".search-box-popup").addClass("active");
  });

  // Закриття пошукового поля при натисканні на кнопку закриття
  $(".search-box-close").on("click", function() {
    $(".search-box-popup").removeClass("active");
    $("#search-results").removeClass("visible").html(''); // Приховати результати пошуку
  });

  // Закриття пошукового поля при натисканні поза його межами
  $(document).on("click", function(event) {
    if (!$(event.target).closest('.search-box-popup, .search-box.menu').length) {
      $(".search-box-popup").removeClass("active");
      $("#search-results").removeClass("visible").html('');
    }
  });
});

// Функція для пошуку
function searchItems() {
  var query = $('#search-input').val().toLowerCase();
  var searchResults = $('#search-results');
  searchResults.empty(); // Очистити попередні результати

  if (query === 'куртка') {
    searchResults.html(`
      <div class="container">
        <div class="col-md-12">
          <div class="row">
              <div class="item-card">
                <div class="product-card-wrapper">
                    <a href="./single-shop.html" class="product-card-img-link">
                        <div class="img-aspect-ratio">
                            <div class="iar-wrap type-4">
                              <img class="product-card-img" src="./img/card-images/photo_2.jpg" alt="card-img">
                            </div>
                        </div>
                    </a>
                    <div class="card-lower-wrapper text">
                        <div class="card-lower-txt d-flex justify-content-between">
                            <div class="card-lower-content">
                                <div class="card-lower-title">
                                  <h3><a href="./single-shop.html">ПИДЖАК MCR В КЛЕТКУ 40630/1</a></h3>
                                </div>
                                <div class="product-article-two">
                                    <p>Артикул: <span>40630/1</span></p>
                                </div>
                                <div class="product-card-pricing">
                                  <p class="price"><span class="mr-2 price-dc">2700 грн</span>&nbsp;<span class="price-sale">1668 грн</span></p>
                                </div>
                            </div>
                            <div class="product-card-wishlist-img">
                                <img class="wishlist-icon" src="./img/icons/add to wishlist.svg" alt="icon-wishlist" id="wishlist-icon-1">
                            </div>
                        </div>
                    </div>
                </div>
              </div>

                 

              <div class="item-card">
                <div class="product-card-wrapper">
                    <a href="./single-shop.html" class="product-card-img-link">
                        <div class="img-aspect-ratio">
                            <div class="iar-wrap type-4">
                              <img class="product-card-img" src="./img/card-images/photo_2.jpg" alt="card-img">
                            </div>
                        </div>
                    </a>
                    <div class="card-lower-wrapper text">
                        <div class="card-lower-txt d-flex justify-content-between">
                            <div class="card-lower-content">
                                <div class="card-lower-title">
                                  <h3><a href="./single-shop.html">ПИДЖАК MCR В КЛЕТКУ 40630/1</a></h3>
                                </div>
                                <div class="product-article-two">
                                  <p>Артикул: <span>40630/1</span></p>
                                </div>
                                <div class="product-card-pricing">
                                  <p class="price"><span class="mr-2 price-dc">2700 грн</span>&nbsp;<span class="price-sale">1668 грн</span></p>
                                </div>
                            </div>
                            <div class="product-card-wishlist-img">
                              <img class="wishlist-icon" src="./img/icons/add to wishlist.svg" alt="icon-wishlist" id="wishlist-icon-1">
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    `);
    searchResults.addClass('visible'); // Показати результати

    // Ініціалізувати Swiper після додавання контенту
    var swiperten = new Swiper('.mySwiper10', {
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        923: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      on: {
        slideChange: function () {
          // Необхідні налаштування
        }
      },
    });

  } else {
    searchResults.html('<p>Ничего не найдено</p>');
    searchResults.addClass('visible'); // Показати результати навіть якщо нічого не знайдено
  }

  if (query === '') {
    searchResults.removeClass('visible'); // Приховати результати, якщо запит порожній
  }
};
// Обработчик событий для поиска. END
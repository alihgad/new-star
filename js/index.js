let myForm = document.querySelector(".message-form");
let error = document.querySelector("#error");
let formButton = document.querySelector("#form-button");


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {}
    if(e.target.name.value == "" || e.target.phone.value == "" || e.target.email.value == "" || e.target.message.value == "") {
        error.classList.remove("hidden");
        return;
    }

    formButton.innerHTML = '<svg class="w-6 h-6 inline mx-2 fill-white fa-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>';


    formData.name = e.target.name.value;
    formData.phone = e.target.phone.value;
    formData.email = e.target.email.value;
    formData.message = e.target.message.value;
    console.log(formData)

    let formApi = "http://localhost:3000/test" //put your API here

    fetch(formApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .finally(()=>{
        myForm.reset();
        error.classList.add("hidden");
        formButton.textContent = "أرسل";

      })
      .catch(err => console.error(err));

})

// Swiper Initialization
let swiper;

document.addEventListener('DOMContentLoaded', function() {
  swiper = new Swiper(".packages-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Better touch controls for mobile
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function() {
        console.log('Swiper initialized');
        setTimeout(() => {
          createCustomPagination();
        }, 100);
      },
      slideChange: function() {
        updateCustomPagination();
      }
    }
  });

  // Custom navigation buttons
  const nextBtn = document.querySelector('.swiper-button-next-custom');
  const prevBtn = document.querySelector('.swiper-button-prev-custom');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Next button clicked');
      if (swiper) {
        swiper.slideNext();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Prev button clicked');
      if (swiper) {
        swiper.slidePrev();
      }
    });
  }
});

// Custom pagination
function createCustomPagination() {
  const paginationContainer = document.querySelector('.swiper-pagination-custom');
  if (!paginationContainer || !swiper) return;
  
  const totalSlides = 10; // عدد الكروت الثابت
  
  paginationContainer.innerHTML = '';
  
  for (let i = 0; i < totalSlides; i++) {
    const bullet = document.createElement('button');
    bullet.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-blue-500 scale-125' : 'bg-white/50 hover:bg-white/80'}`;
    bullet.addEventListener('click', function() {
      if (swiper) {
        swiper.slideTo(i);
      }
    });
    paginationContainer.appendChild(bullet);
  }
}

function updateCustomPagination() {
  const bullets = document.querySelectorAll('.swiper-pagination-custom button');
  if (!swiper || bullets.length === 0) return;
  
  bullets.forEach((bullet, index) => {
    if (index === swiper.realIndex) {
      bullet.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-blue-500 scale-125';
    } else {
      bullet.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-white/50 hover:bg-white/80';
    }
  });
}


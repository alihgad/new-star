// بيانات المشروعات
const projectsData = [
  {
    id: 1,
    title: "منصة ادارة المعاهد",
    image: "./new/1.jpg",
    description: "منصة الكترونية شاملة لإدارة مراكز التدريب، معاهد، معاهد عليا تشمل كل متطلبات المعاهد الإدارية واللوجيستية",
    features: "تشمل المنصة: إدارة الطلاب، إدارة المدرسين، إدارة المقررات، إدارة الجداول الدراسية، نظام الاختبارات، نظام التقارير، نظام المدفوعات، نظام الإشعارات، لوحة تحكم شاملة للمديرين والمدرسين والطلاب."
  },
  {
    id: 2,
    title: "نظام الأرشفة الإلكترونية",
    image: "./new/2.jpg", 
    description: "نظام متقدم للأرشفة الإلكترونية للمستندات والملفات مع إمكانية البحث المتقدم والتصنيف الذكي",
    features: "مميزات النظام: تصنيف ذكي للمستندات، بحث متقدم بالنص، نظام صلاحيات متعدد المستويات، نسخ احتياطية تلقائية، واجهة سهلة الاستخدام، دعم جميع أنواع الملفات، نظام تتبع التعديلات، تقارير مفصلة."
  },
  {
    id: 3,
    title: "نظام إدارة خدمات السيارات",
    image: "./new/2.jpg",
    description: "نظام شامل لإدارة ورش السيارات ومراكز الخدمة مع تتبع الصيانة والمواعيد",
    features: "يشمل النظام: إدارة العملاء، إدارة المواعيد، تتبع الصيانة، إدارة المخزون، نظام الفواتير، نظام التقارير، إشعارات للعملاء، تطبيق موبايل للعملاء، لوحة تحكم للمديرين والفنيين."
  },
  {
    id: 4,
    title: "منصة ادارة المدارس",
    image: "./new/1.jpg",
    description: "نظام متكامل لإدارة المدارس والطلاب والمعلمين مع تتبع الأداء والإحصائيات التفصيلية",
    features: "مميزات النظام: إدارة الطلاب والمعلمين، تتبع الأداء الأكاديمي، إدارة المقررات والجداول، نظام الاختبارات، تقارير مفصلة، نظام الإشعارات، لوحة تحكم للمديرين والمعلمين، تطبيق موبايل للطلاب وأولياء الأمور."
  },
  {
    id: 5,
    title: "منصة ادارة المستشفيات",
    image: "./new/2.jpg",
    description: "نظام شامل لإدارة المستشفيات والمرضى والأطباء مع جدولة المواعيد وإدارة السجلات الطبية",
    features: "يشمل النظام: إدارة المرضى والأطباء، جدولة المواعيد، إدارة السجلات الطبية، نظام الصيدلية، إدارة الغرف والأسرة، نظام الفواتير، تقارير طبية، نظام الإشعارات، لوحة تحكم للمديرين والأطباء."
  },
  {
    id: 6,
    title: "منصة ادارة المطاعم",
    image: "./new/1.jpg",
    description: "نظام متطور لإدارة المطاعم والطلبات والمخزون مع إدارة الطاولات والموظفين والمبيعات",
    features: "مميزات النظام: إدارة الطلبات، إدارة الطاولات، إدارة المخزون، إدارة الموظفين، نظام الفواتير، تقارير المبيعات، تطبيق موبايل للعملاء، نظام الولاء، إدارة القوائم والأسعار."
  },
  {
    id: 7,
    title: "منصة ادارة الصالونات",
    image: "./new/2.jpg",
    description: "نظام متخصص لإدارة صالونات التجميل والحلاقة مع جدولة المواعيد وإدارة الخدمات والأسعار",
    features: "مميزات النظام: حجز المواعيد، إدارة الخدمات والأسعار، إدارة الموظفين، نظام الولاء والعروض، نظام الفواتير، تقارير المبيعات، تطبيق موبايل للعملاء، نظام الإشعارات، إدارة المخزون."
  },
  {
    id: 8,
    title: "نظام إدارة الصيدليات",
    image: "./new/1.jpg",
    description: "نظام متكامل لإدارة الصيدليات والمخزون والأدوية مع تتبع تاريخ الصلاحية والتنبيهات",
    features: "يشمل النظام: إدارة المخزون، تتبع تاريخ الصلاحية، تنبيهات المخزون، إدارة المبيعات، نظام الفواتير، تقارير مفصلة، إدارة العملاء، نظام الإشعارات، لوحة تحكم للصيادلة."
  },
  {
    id: 9,
    title: "نظام إدارة الفنادق",
    image: "./new/2.jpg",
    description: "نظام شامل لإدارة الفنادق والحجوزات والضيوف مع إدارة الغرف والخدمات",
    features: "مميزات النظام: إدارة الحجوزات، إدارة الغرف، إدارة الضيوف، إدارة الخدمات، نظام الفواتير، تقارير الإشغال، تطبيق موبايل للضيوف، نظام الولاء، إدارة الموظفين."
  },
  {
    id: 10,
    title: "نظام إدارة المطارات",
    image: "./new/1.jpg",
    description: "نظام متطور لإدارة المطارات والرحلات والمسافرين مع جدولة الطائرات والموظفين",
    features: "يشمل النظام: إدارة الرحلات، جدولة الطائرات، إدارة المسافرين، إدارة الموظفين، نظام الفواتير، تقارير الرحلات، نظام الإشعارات، لوحة تحكم للمديرين، تكامل مع أنظمة الطيران العالمية."
  }
];

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

  // إضافة وظيفة إيقاف السلايدر عند وضع الماوس عليه
  const swiperContainer = document.querySelector('.packages-swiper');
  
  if (swiperContainer) {
    // إيقاف السلايدر عند وضع الماوس عليه
    swiperContainer.addEventListener('mouseenter', function() {
      if (swiper && swiper.autoplay) {
        swiper.autoplay.stop();
        console.log('Swiper autoplay stopped');
      }
    });
    
    // استئناف السلايدر عند إزالة الماوس
    swiperContainer.addEventListener('mouseleave', function() {
      if (swiper && swiper.autoplay) {
        swiper.autoplay.start();
        console.log('Swiper autoplay resumed');
      }
    });
  }

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

// Modal Functions
let currentProjectId = 1;

function openModal(projectId) {
  currentProjectId = projectId;
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  
  // تحديث حالة الأسهم
  updateNavigationArrows();
  
  // إظهار Modal إذا كان مخفي
  const modal = document.getElementById('project-modal');
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // إضافة تأثير fade-in للمودال
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
      modal.style.transition = 'all 0.5s ease-out';
      modal.style.opacity = '1';
      modal.style.transform = 'scale(1)';
    }, 10);
  }
  
  // تحديث المحتوى مع تأثيرات سلسة
  updateModalContent(project);
}

function updateModalContent(project) {
  // تأثير fade-out للمحتوى الحالي
  const title = document.getElementById('modal-title');
  const image = document.getElementById('modal-image');
  const description = document.getElementById('modal-description');
  const features = document.getElementById('modal-features');
  
  // إخفاء المحتوى تدريجياً
  [title, description, features].forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
  });
  
  image.style.opacity = '0';
  image.style.transform = 'scale(0.95)';
  
  // تحديث المحتوى بعد التأثير
  setTimeout(() => {
    title.textContent = project.title;
    image.src = project.image;
    image.alt = project.title;
    description.textContent = project.description;
    features.textContent = project.features;
    
    // إظهار المحتوى الجديد تدريجياً
    [title, description, features].forEach(element => {
      element.style.transition = 'all 0.4s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
    
    image.style.transition = 'all 0.5s ease-out';
    image.style.opacity = '1';
    image.style.transform = 'scale(1)';
  }, 200);
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  
  // تأثير fade-out
  modal.style.transition = 'all 0.3s ease-in';
  modal.style.opacity = '0';
  modal.style.transform = 'scale(0.9)';
  
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }, 300);
}

function navigateToProject(direction) {
  let nextId;
  
  if (direction === 'next') {
    nextId = currentProjectId === projectsData.length ? 1 : currentProjectId + 1;
  } else {
    nextId = currentProjectId === 1 ? projectsData.length : currentProjectId - 1;
  }
  
  // تحديث المحتوى مباشرة بدون إعادة فتح المودال
  currentProjectId = nextId;
  const project = projectsData.find(p => p.id === nextId);
  if (project) {
    updateNavigationArrows();
    updateModalContent(project);
  }
}

function updateNavigationArrows() {
  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  
  // تحديث حالة الأسهم مع تأثيرات سلسة
  if (currentProjectId === 1) {
    prevBtn.style.opacity = '0.3'; // Reduced opacity for disabled state
    prevBtn.style.pointerEvents = 'none';
    prevBtn.style.transform = 'scale(0.9)'; // Removed translateX since arrows are now fixed
  } else {
    prevBtn.style.opacity = '1';
    prevBtn.style.pointerEvents = 'auto';
    prevBtn.style.transform = 'scale(1)'; // Reset transform for enabled state
  }
  
  if (currentProjectId === projectsData.length) {
    nextBtn.style.opacity = '0.3'; // Reduced opacity for disabled state
    nextBtn.style.pointerEvents = 'none';
    nextBtn.style.transform = 'scale(0.9)'; // Removed translateX since arrows are now fixed
  } else {
    nextBtn.style.opacity = '1';
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.transform = 'scale(1)'; // Reset transform for enabled state
  }
}

// إضافة Event Listeners للمشروعات
document.addEventListener('DOMContentLoaded', function() {
  // إضافة click events لأيقونات العين
  const projectIcons = document.querySelectorAll('.project-eye-icon');
  projectIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const projectId = parseInt(this.getAttribute('data-project'));
      openModal(projectId);
    });
  });
  
  // إضافة click events لأزرار الإغلاق
  const closeButtons = document.querySelectorAll('#close-modal, #modal-close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });
  
  // إغلاق Modal عند الضغط على الخلفية
  const modal = document.getElementById('project-modal');
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  // إغلاق Modal عند الضغط على Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // إضافة Event Listeners لأسهم التنقل
  document.getElementById('prev-project').addEventListener('click', function() {
    navigateToProject('prev');
  });
  
  document.getElementById('next-project').addEventListener('click', function() {
    navigateToProject('next');
  });
  
  // إضافة دعم لوحة المفاتيح للتنقل
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      navigateToProject('prev');
    } else if (e.key === 'ArrowRight') {
      navigateToProject('next');
    }
  });
});


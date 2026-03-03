document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("sidebar-toggle");
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");

  // فتح / إغلاق
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    sidebar.classList.toggle("open");
    content.classList.toggle("shift");

    // ✅ overlay فقط على الشاشات الصغيرة
    if (window.innerWidth < 992) {
      overlay.classList.toggle("show");
    }
  });

  // إغلاق عند الضغط على الخلفية (موبايل فقط)
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    content.classList.remove("shift");
    overlay.classList.remove("show");
  });

  // عند تكبير الشاشة → نظف حالة الموبايل
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      overlay.classList.remove("show");
    }
  });

});



let massagescontaine  = document.getElementById('massages-containe')


let massagesarea = document.getElementById('massages-area')


massagescontaine.addEventListener ("click" , function(){
   massagesarea.style.display =  massagesarea.style.display === "block" ? "none" : "block";
})
;


const items = document.querySelectorAll('.ul-sidebar .item');

items.forEach(item => {
  item.addEventListener('click', function (e) {

    // إذا كان الضغط على رابط داخل القائمة الفرعية -> لا تمنعي الانتقال
    if (e.target.closest('.submenu a')) {
      return; // اسمحي بفتح الصفحة
    }

    // إذا كان الضغط على عنصر فرعي بدون رابط
    if (e.target.closest('.submenu li')) {
      this.classList.remove('open');
      return;
    }

    // امنعي فقط فتح الرابط الفارغ للأب
    e.preventDefault();

    // سكّر باقي القوائم
    items.forEach(other => {
      if (other !== this) {
        other.classList.remove('open');
      }
    });

    // فتح/إغلاق الحالية
    this.classList.toggle('open');
  });
});




document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.counter');

  const start = (counter) => {

    const target = +counter.dataset.target;
    const speed = 900;

    const update = () => {

      let count = +counter.innerText;
      const inc = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(update, 15);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        start(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
});




document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS Loaded");

  const counters = document.querySelectorAll(".counter");
  console.log("✅ counters found:", counters.length);

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    if (!Number.isFinite(target)) {
      console.warn("❌ data-target not a number for:", counter);
      return;
    }

    let start = 0;
    const duration = 1200; // مدة الحركة (ms)
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(start + (target - start) * progress);
      counter.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = target + "+"; // أو احذفي + إذا ما بدك
      }
    };

    requestAnimationFrame(tick);
  });
});




  const searchToggle = document.getElementById('search-toggle');
  const rightHeader = document.querySelector('.right-header');


  searchToggle.addEventListener('click', (e) => {
    e.preventDefault();


    // إنشاء حقل البحث عند الضغط إذا لم يكن موجود
    if (!document.getElementById('mobile-search')) {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'mobile-search';
      input.placeholder = 'اكتب كلمة البحث';
      input.className = 'form-control mt-2';
      rightHeader.appendChild(input);
      input.focus();
    }
  });







 
  document.addEventListener('click', function (e) {
    const dismissBtn = e.target.closest('[data-bs-dismiss="modal"]');
    if (!dismissBtn) return;

    const modalEl = dismissBtn.closest('.modal');
    if (!modalEl || !window.bootstrap) return;

  
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();

    const instance =
      bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);

    instance.hide();
  }, true); 







window.onload = function(){
document.getElementById("loader").style.display = "none";
};




// droopdawn







// Modal

const btn = document.querySelectorAll("#btn"),
  demoBtn = document.getElementById("demo-btn"),
  modal = document.getElementById("wrapper-modal"),
  overlay = document.getElementById("overlay"),
  demo = document.getElementById("demo-wrap");

const form = document.getElementById("form");

const sendBtn = document.getElementById("form-btn");

const showModal = () => {
  modal.classList.add("active");
  form.style.display = "flex";
};
const closeModal = () => {
  modal.classList.remove("active");
  demo.style.display = "none";
};
btn.forEach((item) => {
  item.addEventListener("click", showModal);
});
overlay.addEventListener("click", closeModal);

demoBtn.addEventListener("click", () => {
  modal.classList.add("active");
  demo.style.display = "flex";
  form.style.display = "none";
});

// Animated scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Calculator

const six = document.getElementById("six"),
  twelve = document.getElementById("twelve"),
  twenty = document.getElementById("twenty"),
  thirty = document.getElementById("thirty"),
  sixty = document.getElementById("sixty");

const result = document.getElementById("result");

const months = document.querySelectorAll(".m-sel");
const numb = document.querySelectorAll(".n-sel");

months.forEach((item) => {
  item.addEventListener("click", (e) => {
    months.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
    checkFunc();
  });
});

numb.forEach((item) => {
  item.addEventListener("click", (e) => {
    numb.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
    checkFunc();
  });
});

const checkFunc = () => {
  if (six.classList.contains("active") && twenty.classList.contains("active")) {
    result.innerHTML = `8500 <span>руб./мес.</span>`;
  } else if (
    six.classList.contains("active") &&
    thirty.classList.contains("active")
  ) {
    result.innerHTML = `16 000 <span>руб./мес.</span>`;
  } else if (
    six.classList.contains("active") &&
    sixty.classList.contains("active")
  ) {
    result.innerHTML = `25 000 <span>руб./мес.</span>`;
  } else if (
    twelve.classList.contains("active") &&
    twenty.classList.contains("active")
  ) {
    result.innerHTML = `7225 <span>руб./мес.</span>`;
  } else if (
    twelve.classList.contains("active") &&
    thirty.classList.contains("active")
  ) {
    result.innerHTML = `13 000 <span>руб./мес.</span>`;
  } else if (
    twelve.classList.contains("active") &&
    sixty.classList.contains("active")
  ) {
    result.innerHTML = `21 250 <span>руб./мес.</span>`;
  }
};

checkFunc();

// Sticky heading

const head = document.getElementById("heading");
const fixedBtn = document.getElementById("fixed");
const priceSec = document.getElementById("tariffs");

window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }

  // Fixed button
  if (window.pageYOffset > priceSec.offsetTop) {
    fixedBtn.style.display = "flex";
  } //else {
  //fixedBtn.style.display = "none";
  //}
};

// jQuery form sending
$(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      $(".form__input, .form__btn, .form__title")
        .removeClass("d-block")
        .addClass("d-none");
      $(".sent").addClass("active");
      setTimeout(function () {
        $("#wrapper-modal").removeClass("active");
        $(".sent").removeClass("active");
        $(".form__input, .form__btn, .form__title")
          .removeClass("d-none")
          .addClass("d-block");
        // Done Functions
        th.trigger("reset");
      }, 2000);
    });
    return false;
  });
});

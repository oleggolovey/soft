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

window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }

  // Fixed button
  if (window.pageYOffset > 3200) {
    fixedBtn.style.display = "flex";
  } else {
    fixedBtn.style.display = "none";
  }
};

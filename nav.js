const mainnavLink = document.querySelector("div.mainnav");
const mainnavLinkA = mainnavLink.querySelector("a");

function mainnavLinkChange() {
    if (mainnavLinkA.innerHTML == "ARCHIVE") {
        mainnavLinkA.addEventListener("mouseover", function () {
            mainnavLinkA.innerHTML = "HOME"
        });
        mainnavLinkA.addEventListener("mouseleave", function () {
            mainnavLinkA.innerHTML = "ARCHIVE"
        });
    } else {
        mainnavLinkA.addEventListener("mouseover", function () {
            mainnavLinkA.innerHTML = "ARCHIVE"
        });
        mainnavLinkA.addEventListener("mouseleave", function () {
            mainnavLinkA.innerHTML = "HOME"
        });
    }
}

mainnavLinkChange();

const mediaQuery = window.matchMedia("(min-width: 768px)")
                        
if (mediaQuery.matches) {

const headerTagFar = document.querySelector("header a.nameFarsi");

const toggleHeader = function () {
  const pixels = window.pageYOffset
  
  if (pixels > 14) {
    headerTagFar.classList.add("scrolled");
  } else {
    headerTagFar.classList.remove("scrolled");
  }
}

const fadeBox = function () {
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 1000, 0.25)
}

fadeBox ();
toggleHeader();

document.addEventListener("scroll", function () {
  toggleHeader();
  fadeBox ();
})

const headerTagEn = document.querySelector("header a.nameEn");

const bioEn = document.querySelector("header div.bioEn");
const bioFar = document.querySelector("header div.bioFar");



headerTagEn.addEventListener("mouseenter", function () {
bioEn.classList.add("open");
});

headerTagEn.addEventListener("mouseleave", function () {
bioEn.classList.remove("open");
});

headerTagFar.addEventListener("mouseenter", function () {
bioFar.classList.add("open");
});

headerTagFar.addEventListener("mouseleave", function () {
bioFar.classList.remove("open");
});
    
}

const subnav = document.querySelector("nav div.subnav");
const subnavLink = document.querySelector("nav div.subnav div.subnavLinks");

subnav.addEventListener("click", function () {
    subnavLink.classList.toggle("open");
});

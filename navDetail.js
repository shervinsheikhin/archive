const mainnavLink = document.querySelector("div.mainnav");
const mainnavLinkA = mainnavLink.querySelector("a");

function mainnavLinkChange() {
    if (mainnavLinkA.innerHTML == "ARCHIVE") {
        mainnavLinkA.addEventListener("mouseover", function () {
            mainnavLinkA.innerHTML = "REGISTER"
        });
        mainnavLinkA.addEventListener("mouseleave", function () {
            mainnavLinkA.innerHTML = "ARCHIVE"
        });
    } else {
        mainnavLinkA.addEventListener("mouseover", function () {
            mainnavLinkA.innerHTML = "ARCHIVE"
        });
        mainnavLinkA.addEventListener("mouseleave", function () {
            mainnavLinkA.innerHTML = "REGISTER"
        });
    }
}

mainnavLinkChange();

const category = document.querySelector("nav div.category")
const categoryTag = document.querySelector("nav div.category a.categoryButton");
const categoryToggle = document.querySelector("nav div.category div.category-toggle");


categoryTag.addEventListener("click", function () {
    categoryToggle.classList.toggle("open");

})

const mediaQuery = window.matchMedia("(min-width: 768px)")
                        
if (mediaQuery.matches) {

const headerTagEn = document.querySelector("a.nameEn");
const headerTag = document.querySelector("a.nameFarsi");

const bioEn = document.querySelector("div.bioEn");
const bioFar = document.querySelector("div.bioFar");

const toggleHeader = function () {
  const pixels = window.pageYOffset
  
  if (pixels > 14) {
    headerTag.classList.add("scrolled");
    category.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
    category.classList.remove("scrolled");
  }
}

const fadeBox = function () {
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 1000, 0.25)
}

fadeBox ()
toggleHeader()

document.addEventListener("scroll", function () {
  toggleHeader()
  fadeBox ()
})
                            


headerTagEn.addEventListener("mouseenter", function () {
bioEn.classList.add("open");
});

headerTagEn.addEventListener("mouseleave", function () {
bioEn.classList.remove("open");
});

headerTagEn.addEventListener("click", function () {
bioEn.classList.toggle("open");
});

headerTag.addEventListener("mouseenter", function () {
bioFar.classList.add("open");
});

headerTag.addEventListener("mouseleave", function () {
bioFar.classList.remove("open");
});


headerTag.addEventListener("click", function () {
bioFar.classList.toggle("open");
});

}

const subnav = document.querySelector("nav div.subnav");
const subnavLink = document.querySelector("nav div.subnav div.subnavLinks");

subnav.addEventListener("click", function () {
    subnavLink.classList.toggle("open");
});

$.ajax({
    //AJAX OM IN TE LADEN
    url: 'archive.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr data-style="' + data[i].styleclass + '" class="inactive ' + data[i].category + '"id="'+ i +'"><td class="date">' + data[i].date + '</td><td class="category">' + data[i].category + '</td><td class="title"><a>' + data[i].title + '<a/><img src="' + data[i].detailimg + '" class="' + data[i].detailimgclass + '"><div class="gallery"></div></td><td class="colab">' + data[i].colab +'<iframe src="'+ data[i].iframe +'"></iframe><div class="longtext"><p>'+ data[i].longtext +'</p></div></td><td class="place">' + data[i].place + '</td><td class="detail">' + data[i].detail + '</td></tr>');
            $('#archiveTable').append(row);

        }
knowHow();
    },
    
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
function knowHow() {
$(".title").click(function(){
    //closing sign
    $(this).siblings("td.detail").append('<div class="close"><a>x</a></div>');
    //toggle activeness
    var thisrow = $(this).parent('tr');
    $(thisrow).toggleClass('inactive active');
    $(thisrow).siblings('tr').removeClass('active').addClass('inactive');
    var index = $(thisrow).attr('id');
    //ophalen beelden in json
    var active = $(this).find('.gallery:empty');
    if (active.length) {
            $.ajax({
                url: 'archive.json',
                dataType: 'json',
                success: function (data) {
                    data[index].images.forEach(element => {
                        var img = document.createElement("img");
                        img.src = element;
                        $(active).append(img);


                        var allImages = document.querySelectorAll('img');
                        
                        const mediaQuery = window.matchMedia("(min-width: 768px)")
                        
                        if (mediaQuery.matches) {
                            for (var i = 0; i < allImages.length; i++) {
                            var modal = document.getElementById("imgModal");
                            var modalImg = document.getElementById("img01");
                            allImages[i].onclick = function () {
                                event.stopPropagation();
                                modal.style.display = "block";
                                console.log(this.src);
                                modalImg.src = this.src;
                            }
                            // Get the <span> element that closes the modal
                            var span = document.getElementsByClassName("close")[0];
                            // When the user clicks on <span> (x), close the modal
                            span.onclick = function () {
                                modal.style.display = "none";
                            }
                            window.onclick = function (event) {
                                if (event.target == modal) {
                                    modal.style.display = "none";
                                }
                            }
                        }
                        }

                        


                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error: ' + textStatus + ' - ' + errorThrown);
                }
            });
        }
        if ($(thisrow).hasClass('active')){
        const mediaQuery = window.matchMedia("(min-width: 768px)")
        if (mediaQuery.matches) {
           window.scrollTo({
            top: (this.offsetTop)-120,
            behavior: 'smooth'
          }); 
        } else {
            window.scrollTo({
            top: (this.offsetTop)-170,
            behavior: 'smooth'
          }); 
        }
        
        }
        $(".close a").click(function () {
            $('tr').removeClass('active').addClass('inactive');
        });
        $(this).addClass('clicked');

    });



}
//FILTER - OPTION
$(".categoryType").click(function(e){
    categoryToggle.classList.toggle("open");
    $('tr').removeClass('active').addClass('inactive');

var filter = e.target.id;  
    $("tr:not(."+filter+")").hide();
    $("tr."+filter).show();
       
const categoryButton = document.querySelector(".categoryButton");
    
    categoryButton.innerHTML = filter;
    
});

//open ding











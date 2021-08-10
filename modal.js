
       

      var allImages = document.querySelectorAll('img');



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
           window.onclick = function(event) {
               if (event.target == modal) {
                 modal.style.display = "none";
               }
             }
       }
                            
                        

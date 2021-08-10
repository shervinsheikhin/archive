var drawings = $(".myGallery img");
for(var i = 0; i < drawings.length; i++){
    var target = Math.floor(Math.random() * drawings.length -1) + 1;
    var target2 = Math.floor(Math.random() * drawings.length -1) +1;
    drawings.eq(target).before(drawings.eq(target2));
}
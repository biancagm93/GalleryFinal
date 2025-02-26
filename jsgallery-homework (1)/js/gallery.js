function upDate(previewPic){
    console.log("is it working right now?");
    console.log("Img Src:", previewPic.src);
    console.log("Img Alt:", previewPic.alt );
    
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
    
    options =["ValentinesClear.jpg", "valentinesFrench.jpg", "valentinesNude.jpg", "valentinesPink.jpg", "valentinesRed.jpg", "ValentinesRibbon.jpg"]
    currentImages = document.querySelectorAll(".preview")
    for (let i = 0; i < currentImages.length; i++){
        console.log("preview" + i)
       
        currentImages[i].setAttribute("tabindex", "0")
    }
      }

	function unDo(){
        
        document.getElementById('image').style.backgroundImage = "url('')";
        document.getElementById('image').innerHTML = "Hover over an image and witness art";
    }
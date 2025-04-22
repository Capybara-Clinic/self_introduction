let currentImage = 0; 

function changeImage() {
  const image = document.getElementById("profileImage");
  
  if (currentImage === 0) {
    image.src = "img/insta.jpg"; // 두 번째 사진으로 변경
    currentImage = 1;
  } else {
    image.src = "img/kitty.jpg"; // 다시 첫 번째 사진으로 변경
    currentImage = 0;
  }
}

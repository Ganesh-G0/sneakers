// on load hides all of the other hero img 
$(".img2").hide();
$(".img3").hide();
$(".img4").hide();
$(".over-img2").hide();
$(".over-img3").hide();
$(".over-img4").hide();
$(".img-overlay").removeClass("open");


// resets the value  
$(".num-to-buy").text("0");
$(".num-in-cart").text("0");
$(".num-in-cart-desktop").text("0");

switchHero();

$(".hero-img, .close-icon").click(() => {
  $(".img-overlay").toggleClass("open");
});


//------------------------------------------------------------------------------- cart items
const numInCart = $(".num-in-cart");
const numInCartDesktop = $(".num-in-cart-desktop");
if (numInCart.text() == 0 || numInCartDesktop.text() == 0) { 
  numInCart.hide(); 
  numInCartDesktop.hide(); 
  $(".cart-items").hide(); 
  $(".cart-empty").show(); 
};
//------------------------------------------------------------------------------- + button action 
let numOfBuying = 0;
$(".plus-icon").click(() => {
  $(".in-cart").removeClass("open"); 
  $('.menu-links').removeClass('open'); 
  $('.hamburger-icon').removeClass('open');
  numOfBuying++; 
  // console.log("Added: ",numOfBuying);
  $(".num-to-buy").text(numOfBuying); 
});
//------------------------------------------------------------------------------- - button action 
$(".minus-icon").click(() => {
  $(".in-cart").removeClass("open"); 
  $('.menu-links').removeClass('open'); 
  $('.hamburger-icon').removeClass('open');
  if (numOfBuying > 0) { numOfBuying--; } 
  else { numOfBuying = 0; }
  // console.log("Subtracted: ", numOfBuying);
  $(".num-to-buy").text(numOfBuying); 
});
//------------------------------------------------------------------------------- add to cart button 
$(".add-to-cart").click(() => {
  numInCart.text(numOfBuying);
  numInCartDesktop.text(numOfBuying);
  if (numInCart.text() == 0 || numInCartDesktop.text() == 0) { 
    numInCart.hide(); 
    numInCartDesktop.hide(); 
    $(".cart-items").hide(); 
    $(".cart-empty").show(); 
  } 
  else { 
    numInCart.show(); 
    numInCartDesktop.show(); 
    $(".cart-items").show(); 
    $(".cart-empty").hide(); 
  } 
  $(".num-of-product").text(numInCart.text());
  $(".num-of-product-desktop").text(numInCart.text());
  $(".total-price").text(numInCart.text()*125);    
});
//------------------------------------------------------------------------------- clears cart 
$(".delete-icon").click( () => {
  $(".cart-items").hide(); 
  $(".cart-empty").show(); 
  numInCart.hide(); 
  numInCartDesktop.hide(); 
  $(".num-to-buy").text("0");
  $(".num-in-cart").text("0");
  $(".num-in-cart-desktop").text("0");
  numOfBuying = 0;
  
});
$(".checkout-btn").click( () => {
  $(".cart-items").hide(); 
  $(".cart-empty").show(); 
  numInCart.hide(); 
  numInCartDesktop.hide(); 
  $(".num-to-buy").text("0");
  $(".num-in-cart").text("0");
  $(".num-in-cart-desktop").text("0");
  numOfBuying = 0;
});
// shows items in the cart
$(".cart").click(() => { 
  $(".in-cart").toggleClass("open"); 
  $('.menu-links').removeClass('open');  
  $('.hamburger-icon').removeClass('open');
});
function switchHero() {   
  // on click switches the hero img   
  $(".thumbnail-img").click(() => {
    $(".in-cart").removeClass("open"); 
    $('.menu-links').removeClass('open'); 
    $('.hamburger-icon').removeClass('open');
    $(".thumb1 ").click(() => {
        $(".thumb1").addClass("active");
        $(".thumb2").removeClass("active");
        $(".thumb3").removeClass("active");
        $(".thumb4").removeClass("active");
        $(".img1").show();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();
    });
    $(".thumb2").click(() => {
        $(".thumb2").addClass("active");
        $(".thumb1").removeClass("active");
        $(".thumb3").removeClass("active");
        $(".thumb4").removeClass("active");
        $(".img2").show();
        $(".img1").hide();
        $(".img3").hide();
        $(".img4").hide();
    });
    $(".thumb3").click(() => {
        $(".thumb3").addClass("active");
        $(".thumb1").removeClass("active");
        $(".thumb2").removeClass("active");
        $(".thumb4").removeClass("active");
        $(".img3").show();
        $(".img1").hide();
        $(".img2").hide();
        $(".img4").hide();
    });
    $(".thumb4").click(() => {
        $(".thumb4").addClass("active");
        $(".thumb1").removeClass("active");
        $(".thumb2").removeClass("active");
        $(".thumb3").removeClass("active");
        $(".img4").show();
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
    });
  });  
  // on click switches overlay img   
  $(".overlay-thumbnail-div").click(() => {
    $(".over-thumb1").click(() => {
      $(".over-thumb1").addClass("active");
      $(".over-thumb2").removeClass("active");
      $(".over-thumb3").removeClass("active");
      $(".over-thumb4").removeClass("active");
      $(".over-img1").show();
      $(".over-img2").hide();
      $(".over-img3").hide();
      $(".over-img4").hide();
    });
    $(".over-thumb2").click(() => {
      $(".over-thumb2").addClass("active");
      $(".over-thumb1").removeClass("active");
      $(".over-thumb3").removeClass("active");
      $(".over-thumb4").removeClass("active");
      $(".over-img2").show();
      $(".over-img1").hide();
      $(".over-img3").hide();
      $(".over-img4").hide();
    });
    $(".over-thumb3").click(() => {
      $(".over-thumb3").addClass("active");
      $(".over-thumb1").removeClass("active");
      $(".over-thumb2").removeClass("active");
      $(".over-thumb4").removeClass("active");
      $(".over-img3").show();
      $(".over-img1").hide();
      $(".over-img2").hide();
      $(".over-img4").hide();
    });
    $(".over-thumb4").click(() => {
      $(".over-thumb4").addClass("active");
      $(".over-thumb1").removeClass("active");
      $(".over-thumb2").removeClass("active");
      $(".over-thumb3").removeClass("active");
      $(".over-img4").show();
      $(".over-img1").hide();
      $(".over-img2").hide();
      $(".over-img3").hide();
    });    
  });
//---------------------switch icon in mobile
  let currentImage = 1;
  $(".prev-icon").click(() => {    
    currentImage--;
    if (currentImage < 1 || currentImage > 4) { 
      currentImage = 4; 
      console.log("Prev Img If: ", currentImage);
      $(".img4").show();
      $(".img1").hide();
      $(".img2").hide();
      $(".img3").hide();   
    } 
    else { 
      if (currentImage === 1) {
        $(".img1").show(); 
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();      
      } else if (currentImage === 2) {
        $(".img2").show();
        $(".img1").hide();
        $(".img3").hide();
        $(".img4").hide();      
      } else if (currentImage === 3) {
        $(".img3").show();
        $(".img1").hide();
        $(".img2").hide();
        $(".img4").hide();
      } 
      console.log("Prev Img else: ", currentImage); 
    }
  });
  
  $(".next-icon").click(() => {
    $(".in-cart").removeClass("open"); 
    $('.menu-links').removeClass('open'); 
    $('.hamburger-icon').removeClass('open');
    currentImage++;
    if (currentImage < 1 || currentImage > 4) { 
      currentImage = 1; 
      console.log("Next Img: ", currentImage); 
        $(".img1").show()  
        $(".img2").hide()
        $(".img3").hide()
        $(".img4").hide()
    }
    else { 
      console.log("Next Img: ", currentImage); 
      if (currentImage === 2) {
        $(".img1").hide()
        $(".img2").show()  
        $(".img3").hide()
        $(".img4").hide()
      } else if (currentImage === 3) {
        $(".img1").hide()
        $(".img2").hide()
        $(".img3").show()
        $(".img4").hide()
      } else if (currentImage === 4) {
        $(".img1").hide()
        $(".img2").hide()
        $(".img3").hide()
        $(".img4").show()
      } 
    }
  });
  //---------------------overlay switch icon 
  let overlayCurrentImage = 1;
  $(".over-prev-icon").click(() => {    
    overlayCurrentImage--;
    if (overlayCurrentImage < 1 || overlayCurrentImage > 4) { 
      overlayCurrentImage = 4; 
      console.log("Prev Img If: ", overlayCurrentImage);
      $(".over-img4").show();
      $(".over-img2").hide();
      $(".over-img3").hide();
      $(".over-img1").hide();
      $(".over-thumb4").addClass("active");
      $(".over-thumb1").removeClass("active");
      $(".over-thumb2").removeClass("active");
      $(".over-thumb3").removeClass("active");
    } 
    else { 
      if (overlayCurrentImage === 1) {
        $(".over-img1").show(); 
        $(".over-img2").hide();
        $(".over-img3").hide();
        $(".over-img4").hide();
        $(".over-thumb1").addClass("active");
        $(".over-thumb2").removeClass("active");
        $(".over-thumb3").removeClass("active");
        $(".over-thumb4").removeClass("active");
      } else if (overlayCurrentImage === 2) {
        $(".over-img1").hide();
        $(".over-img2").show();
        $(".over-img3").hide();
        $(".over-img4").hide();
        $(".over-thumb2").addClass("active");
        $(".over-thumb1").removeClass("active");
        $(".over-thumb3").removeClass("active");
        $(".over-thumb4").removeClass("active");
      } else if (overlayCurrentImage === 3) {
        $(".over-img3").show()
        $(".over-img1").hide()
        $(".over-img2").hide()
        $(".over-img4").hide()
        $(".over-thumb3").addClass("active");
        $(".over-thumb1").removeClass("active");
        $(".over-thumb2").removeClass("active");
        $(".over-thumb4").removeClass("active");
      } 
      console.log("Prev Img else: ", overlayCurrentImage); 
    }
  });  
  $(".over-next-icon").click(() => {
    overlayCurrentImage++;
    if (overlayCurrentImage < 1 || overlayCurrentImage > 4) { 
      overlayCurrentImage = 1; 
      console.log("Next Img: ", overlayCurrentImage); 
        $(".over-img1").show()  
        $(".over-img2").hide()
        $(".over-img3").hide()
        $(".over-img4").hide()
        $(".over-thumb1").addClass("active");
        $(".over-thumb2").removeClass("active");
        $(".over-thumb3").removeClass("active");
        $(".over-thumb4").removeClass("active");
    }
    else { 
      console.log("Next Img: ", overlayCurrentImage); 
      if (overlayCurrentImage === 2) {
        $(".over-img1").hide()
        $(".over-img2").show()  
        $(".over-img3").hide()
        $(".over-img4").hide()
        $(".over-thumb2").addClass("active");
        $(".over-thumb1").removeClass("active");
        $(".over-thumb3").removeClass("active");
        $(".over-thumb4").removeClass("active");
      } else if (overlayCurrentImage === 3) {
        $(".over-img1").hide()
        $(".over-img2").hide()
        $(".over-img3").show()
        $(".over-img4").hide()
        $(".over-thumb3").addClass("active");
        $(".over-thumb1").removeClass("active");
        $(".over-thumb2").removeClass("active");
        $(".over-thumb4").removeClass("active");
      } else if (overlayCurrentImage === 4) {
        $(".over-img1").hide()
        $(".over-img2").hide()
        $(".over-img3").hide()
        $(".over-img4").show()
        $(".over-thumb4").addClass("active");
        $(".over-thumb1").removeClass("active");
        $(".over-thumb2").removeClass("active");
        $(".over-thumb3").removeClass("active");
      } 
    }
  });
};  

function toggleMenu() {
  $(".in-cart").removeClass("open");
  $('.hamburger-icon').toggleClass('open');
  $('.menu-links').toggleClass('open');  
  $('.overlay').toggleClass('open');  
};


var modalbuy = document.querySelector(".modal-buy");
var modalbuyNotificationClose = document.querySelector(".modal-buy .modal-close");
var basketItemsamount = document.querySelector(".basket .top-header__amount");
var bookmarkItemsamount = document.querySelector(".bookmark .top-header__amount");
var BuyButtons = document.querySelectorAll(".buy");
var BookmarkButtons = document.querySelectorAll(".bookmarks");
var Basket = document.querySelector(".basket");
var Bookmark = document.querySelector(".bookmark"); 

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    modalbuy.classList.remove("modal-show");
  }
});

for (var i = 0; i < BuyButtons.length; i++) {
  BuyButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    modalbuy.classList.add("modal-show");
    var value = parseInt(basketItemsamount.innerHTML);
    value = value + 1;
    basketItemsamount.innerHTML = (value + "");
    Basket.classList.add("top-header--active");
  });
}
for (var i = 0; i < BookmarkButtons.length; i++) {
    BookmarkButtons[i].addEventListener("click", function (event) {
    event.preventDefault();
    modalbuy.classList.add("modal-show");
    var value = parseInt(bookmarkItemsamount.innerHTML);
    value = value + 1;
    bookmarkItemsamount.innerHTML = (value + "");
    Bookmark.classList.add("top-header--active");
  });
}

modalbuyNotificationClose.addEventListener("click", function (event) {
  event.preventDefault();
  modalbuy.classList.remove("modal-show");
});
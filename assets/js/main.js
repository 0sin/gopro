'use strict';

const gnbMainLists = document.querySelector('.gnb_menu_wrap');
const gnbSubLists = document.querySelector('.gnb_sub_menu');
const gnbSubMenuLists = document.querySelectorAll('.gnb_sub_menu_lists');

gnbMainLists.addEventListener('mouseover', e => {
  findMatchSelect(e, 'cameras');
  findMatchSelect(e, 'accessories');
  findMatchSelect(e, 'lifestyle');
  findMatchSelect(e, 'apps');
  findMatchSelect(e, 'lights');
  findMatchSelect(e, 'subscribes');
})

gnbSubLists.addEventListener('mouseleave', e => {
  gnbSubMenuLists.forEach(e => e.classList.remove('access'));
})

function findMatchSelect(e, selectName) {
  let gnbSubUl = gnbSubLists.querySelector(`.${selectName}`);
  if(e.target.matches(`.${selectName}`)){
    gnbSubMenuLists.forEach(e => e.classList.remove('access'));
    if(gnbSubUl) {
      gnbSubUl.classList.add('access');
    }
  }
  // console.log(e.target.className);
}



// MOBILE HEADER 
// HAMBURGER BAR OPEN
const mobileBarsIcon = document.querySelector('.mobile_gnb_open_icon');

mobileBarsIcon.addEventListener('click', e => {
  const mobileGnbSub = document.querySelector('.gnb_sub_menu_mobile');
  const barsIcon = mobileBarsIcon.querySelector('.fa-bars');
  const closeIcon = mobileBarsIcon.querySelector('.fa-times');
  mobileGnbSub.classList.toggle('display');
  barsIcon.classList.toggle('display');
  closeIcon.classList.toggle('display');
})


// MOBILE GNB SUB OPEN
const mobileGnbListTitle = document.querySelectorAll('.gnb_menu_mobile_item');
const mobileSubMenuLists = document.querySelectorAll('.gnb_sub_menu_mobile_lists');
const mobileSubArrowIcons = document.querySelectorAll('.fa-chevron-down');

function toggleMobileAccordion(e) {
  const currentTargetList = e.currentTarget.querySelector('.gnb_sub_menu_mobile_lists');
  const currentTargetArrowIcon = e.currentTarget.querySelector('.fa-chevron-down');

  if (currentTargetList) {
    if (currentTargetList.classList.contains('display')) {
      currentTargetList.classList.remove('display');
      currentTargetArrowIcon.classList.remove('open');
    } else {
      mobileSubMenuLists.forEach(e => e.classList.remove('display'));
      mobileSubArrowIcons.forEach(e => e.classList.remove('open'));
      currentTargetList.classList.add('display');
      currentTargetArrowIcon.classList.add('open');
    }
  } else {
    return;
  } 
}

mobileGnbListTitle.forEach( e => e.addEventListener('click', toggleMobileAccordion));



// FOOTER MOBILE ACCORDION
const mobilefooterlists = document.querySelectorAll('.footer_list_wrap');
const mobilefooterIcons = document.querySelectorAll('.footer_m_angle_down');

function openFooterList(e) {
  const currentFooterLists = e.currentTarget.classList;
  const currentFooterIcons = e.currentTarget.querySelector('.footer_m_angle_down');
  if (currentFooterLists.contains('display')) {
    currentFooterLists.remove('display');
    currentFooterIcons.classList.remove('open');
  } else {
    mobilefooterlists.forEach(e => e.classList.remove('display'));
    mobilefooterIcons.forEach(e => e.classList.remove('open'));
    currentFooterLists.add('display');
    currentFooterIcons.classList.add('open');
  }
}

mobilefooterlists.forEach(e => e.addEventListener('click', openFooterList));




// Main Slide
// Variable declaration
const slides = document.querySelector('.slide_wrap')
const bullets = document.querySelectorAll('.slide_bullets button')

let SLIDE_WIDTH = slides.getBoundingClientRect().width
// let SLIDE_ITEM_WIDTH = slides.children[0].getBoundingClientRect().width;
let currentIndex = 0;


// Slide Item Clone
function cloneSlideItem() {
  const cloneSlideItem_first = slides.firstElementChild.cloneNode(true);
  const cloneSlideItem_last = slides.lastElementChild.cloneNode(true);

  slides.appendChild(cloneSlideItem_first);
  slides.insertBefore(cloneSlideItem_last, slides.firstElementChild);
}


// Slide Transition
const slideTransition = function(TRANSITION_DURATION) {
  slides.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s`;
}

// Change Bullet Style
const onBullets = function(idx) {
  bullets.forEach(e => e.classList.remove('selected'));
  bullets[idx].classList.add('selected');
}


// Slide Move
const onSlide = function(idx) {
  currentIndex = idx;

  slides.style.transform = `translateX(${-currentIndex * SLIDE_WIDTH}px)`;
  console.log(currentIndex);
  if (currentIndex === 3) {
    onBullets(0);
  } else {
    onBullets(currentIndex-1);
  }
}




// Resize - Slide Width값 변경
const onResizeWidth = function() {
  SLIDE_WIDTH = document.body.clientWidth;
  slideTransition(0);
  onSlide(currentIndex);
}

const nextSlide = function() {
  currentIndex++;

  if(currentIndex > 3) {
    currentIndex = 1;
    slideTransition(0);
    onSlide(currentIndex);
    // onBullets(currentIndex);
  } else {
    slideTransition(400);
    onSlide(currentIndex);
    // onBullets(currentIndex);
  } 

}

const onSetInterval = setInterval(nextSlide, 3000);


// AddEventListener
window.addEventListener('resize', onResizeWidth);
bullets.forEach((e, index) => e.addEventListener('click', () => {
  slideTransition(400);
  onSlide(index+1);
  // onBullets(index);
}));


// First Page
(() => {
  cloneSlideItem();
  onSlide(1);
})();






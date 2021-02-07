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


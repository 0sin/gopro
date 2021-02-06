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


// MOBILE GNB SUB OPEN
const mobileGnbTitleList = document.querySelectorAll('.gnb_menu_mobile_item');
const mobileSubMenuLists = document.querySelectorAll('.gnb_sub_menu_mobile_lists');
let currnetTargetState = false; //현재 닫힘

mobileGnbTitleList.forEach( e => e.addEventListener('click', e => {
  const currentTargetUl = e.currentTarget.querySelector('.gnb_sub_menu_mobile_lists');
  const currentTargetArrowIcon = e.currentTarget.querySelector('.fa-chevron-down');
  
  if(currentTargetUl) {
    // mobileSubMenuLists.forEach(e => e.classList.remove('display'));
    currentTargetUl.classList.toggle('display');
    currentTargetArrowIcon.classList
  } else {
    return;
  } 
}));


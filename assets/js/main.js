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
  gnbSubLists.querySelector('.cameras').classList.remove('access');
})

function findMatchSelect(e, selectName) {
  if(e.target.matches(`.${selectName}`)){
    for(let list of gnbSubMenuLists) {
      list.classList.remove('access');
    }
    if(gnbSubLists.querySelector(`.${selectName}`)) {
    gnbSubLists.querySelector(`.${selectName}`).classList.add('access');
    }
  }
  // console.log(e.target.className);
}
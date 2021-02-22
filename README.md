# 개인 프로젝트 | GoPro 사이트 반응형 제작

![goproscreenshot](https://user-images.githubusercontent.com/69961808/108665253-dc8f2b80-7517-11eb-8b56-6d0521399907.png)


# 1. GoPro 프로젝트
## 1_개요

- 기간: 2020.10.05 - 10.23
- GoPro 사이트: [https://gopro.com/ko/kr/](https://gopro.com/ko/kr/)
- 프로젝트 사이트: [https://0sin.github.io/gopro/](https://0sin.github.io/gopro/)

## 2_Library 사용

- font-awesome
- adobe-fonts: Proxima Nova


# 2.  UX/UI Trend_GoPro

## ✦ Large Image: 풀 스크린 배경 이미지
## ✦ 직관적인 Card Layout
## ✦ Web Font Library(Proxima Nova) 사용
## ✦ 밝고 대담한 컬러


# 3. GoPro 반응형 특징과 구조

## 1_ calc() CSS 함수 사용
![goprocalc](https://user-images.githubusercontent.com/69961808/108665991-80c5a200-7519-11eb-9da7-891bc1d25f4f.png)



## 2_ Breakpoint

### ✦ Mobile: 450px 이하, 모바일 전용 이미지



<picture> 태그 사용

```html
<picture>
     <source media="(max-width: 450px)" srcset="img/m.hero.jpg">
     <img src="img/hero_pc.jpg">
</picture>
```

### ✦Tablet

### (1) 451px - 767px : 모바일 Header와 Footer + Main PC Layout
### (2) 768px - 1150px : Tablet Header+Footer
### ✦ Desktop : 1151px - 1919px / 1920px 이상-



## 3_ 기능성 > 디자인

### ✦ 1920px 해상도 이상 미디어 쿼리 작성
![goproresponsive](https://user-images.githubusercontent.com/69961808/108666077-a783d880-7519-11eb-9601-07d07dbeea1c.png)


 

### ✦ 한계_아쉬운 한글 사이트 디자인

영문 사이트 Footer
<img width="976" alt="goproen" src="https://user-images.githubusercontent.com/69961808/108666112-bbc7d580-7519-11eb-8923-a6ec7446c6b1.png">


한글 사이트 Footer
<img width="977" alt="goproko" src="https://user-images.githubusercontent.com/69961808/108666134-c97d5b00-7519-11eb-904c-e4c259155e2c.png">

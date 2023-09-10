# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![desktop-preview](https://github.com/kabir-afk/Interactive-card-details-form-main/assets/123084434/27e06f6f-bde1-45e8-a2ec-9c44ca8ef724)

### Links

- [Live](https://kabir-afk.github.io/Interactive-card-details-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- SCSS
- Javascript
- Desktop-first workflow

### What I learned
- background-clip property and how we can use it to produce gradient borders
- JS Regex
- making sure our input values remain within min-max range when ```-webkit-inner/outer-spin-button``` are set to ```display:none``` using ```oninput = validity.valid||(value='')``` , like idk how exactly it works and I alos know that it is part of something bigger but . . . counts as something I learned
- Using ```@mixin``` efficiently in SASS
- preventing default form submission using ```event.preventDefault()```
### Useful resources
- Here's the link : [gradient-border-vid](https://www.youtube.com/watch?v=RM3-IMRIEB4)
- I'd say ChatGPT 🤖 as well since I never worked with Regex before and it was quite the helper

### Continued development

Prolly working on Regex and form validation since there is a lot of room for improvement I guess . . . as well as efficient use of SASS , I'll also start using GSAP in furhter projects to come 

## Author

- Frontend Mentor - [@solitary_coder](https://www.frontendmentor.io/profile/kabir-afk)


// fun animation stuff to try in GoButton
<h1 class="splash-text" :class="{ fadeIn1: goClicked, fadeOut: nextTransition }">Hi Shinsei!</h1>
<h1 class="splash-text" :class="{ fadeIn2: goClicked }">Pick a word, OK?</h1>

.splash-text {
  display: block;
  opacity: 0;
  font-size: 5em;
  color: black;
}
.fadeOut {
  opacity: 0;
  transition: all 3s ease-out;
}

.fadeIn1 {
  opacity: 1;
  transition-delay: 1.5s;
  transition-property: opacity;
  transition-duration: 5s;
}

.fadeIn2 {
  opacity: 1;
  transition-delay: 4s;
  transition-property: opacity;
  transition-duration: 5s;
}

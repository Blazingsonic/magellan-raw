
// import { TweenMax, TimelineMax } from 'gsap';

export function lineAnimationSet(elem) {

  console.log('setting line animation');
  let length = elem.getTotalLength();
  TweenMax.set(elem, {strokeDasharray: length, strokeDashoffset: length});

}

export function lineAnimation(elem) {

  console.log('animating lines');
  TweenMax.to(elem, 2, {strokeDashoffset: 0});
}

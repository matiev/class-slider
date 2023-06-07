class Slider {
  constructor(box, btnLeft, btnRight) {
    this.box = box,
    this.btnLeft = btnLeft,
    this.btnRight = btnRight,
    this.btnLeft.addEventListener('click', () => {
      this.slide--
    });
    this.btnRight.addEventListener('click', () => {
      this.slide++
    });
    this.delay = 1000;
    this.init();
  }
  init() {
    if (this.box.children.length > 1) this.box.append(this.btnLeft, this.btnRight);
    this.boxOneChildren = this.box.getElementsByTagName('div');
    this.slide = 0;
    this.start()
  }
  start() {
    this.interval = setInterval(() => {
      this.slide++
    }, this.delay)
  }
  get slide() {
    return this._slide;
  }
  set slide(n) {
    n = (n + this.boxOneChildren.length) % this.boxOneChildren.length;
    let boxCh = this.boxOneChildren;
    for (let i=0; i<boxCh.length; i++) {
      boxCh[i].classList.remove('box--active');
      if (i == n) boxCh[i].classList.add('box--active');
    }
    this._slide = n;
  }
}
let boxs = document.querySelectorAll('.box');
for (let box of boxs) {
  let btnLeft = document.createElement('input'),
      btnRight = document.createElement('input');
  btnLeft.setAttribute('type', 'button');
  btnRight.setAttribute('type', 'button');
  btnLeft.classList.add('btn__left');
  btnRight.classList.add('btn__right');
  new Slider(box, btnLeft, btnRight);
}
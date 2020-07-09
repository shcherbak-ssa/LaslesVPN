'use strict';

/** import */
import $ from './tools';
import Element from './element';

/** constants */
const limitPrevIndex = 0;

/** slider class */
class Slider {
  constructor() {
    this._slider = $('#slider');
    this._slides = this._slider.$('.slider--slides').children();
    this._indexes = this._slider.$('.slide-index', true);
    this._prevButton = this._slider.$('#prev-button');
    this._nextButton = this._slider.$('#next-button');

    this._activeSlideIndex = 0;
  }

  init() {
    this._setIndexesClickEvents();
    this._setSlidesClickEvents();
    this._setPrevButtonClickEvent();
    this._setNextButtonClickEvent();
    this._changeActiveSlide();
    this._changeActiveSlideIndex();
  }

  /** private methods */

  // set events
  _setIndexesClickEvents() {
    this._indexes.forEach((item) => {
      item.on('click', this._indexClickHandler.bind(this));
    })
  }
  _setSlidesClickEvents() {
    this._slides.forEach((slide) => {
      slide.on('click', this._slideClickHandler.bind(this));
    })
  }
  _setPrevButtonClickEvent() {
    this._prevButton.on('click', this._prevButtonClickHandler.bind(this));
  }
  _setNextButtonClickEvent() {
    this._nextButton.on('click', this._nextButtonClickHandler.bind(this));
  }

  // handlers
  _indexClickHandler({target}) {
    const currentIndex = Element.create(target);
    const slideIndex = +currentIndex.get(':data-slide-index');
    this._changeSlide(slideIndex);
  }
  _slideClickHandler({target}) {
    const currentSlide = Element.create(target);
    const slideIndex = +currentSlide.get(':data-slide-index');
    this._changeSlide(slideIndex);
  }
  _prevButtonClickHandler() {
    this._changeSlideFromButton(limitPrevIndex, this._activeSlideIndex - 1);
  }
  _nextButtonClickHandler() {
    this._changeSlideFromButton(this._slides.length - 1, this._activeSlideIndex + 1);
  }

  // update
  _changeSlideFromButton(indexLimit, newActiveSlideIndex) {
    if( this._activeSlideIndex === indexLimit ) return;
    this._changeSlide(newActiveSlideIndex);
  }
  _changeSlide(newActiveSlideIndex) {
    this._updateActiveSlideIndex(newActiveSlideIndex);
    this._changeActiveSlide();
    this._changeActiveSlideIndex();
  }
  _updateActiveSlideIndex(newActiveSlideIndex) {
    this._activeSlideIndex = newActiveSlideIndex;
  }
  _changeActiveSlide() {
    this._slides.forEach(slide => {
      slide.remove('.is-active');

      const slideIndex = +slide.get(':data-slide-index');
      if( slideIndex === this._activeSlideIndex ) slide.add('.is-active');
    });
  }
  _changeActiveSlideIndex() {
    this._indexes.forEach(item => {
      item.remove('.is-active');

      const itemIndex = +item.get(':data-slide-index');
      if( itemIndex === this._activeSlideIndex ) item.add('.is-active');
    });
  }
}

/** export */
export default Slider;
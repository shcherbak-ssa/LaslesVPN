'use strict';

/** import */
import $ from './tools';
import Element from './element';

/** constants */
const limitPrevIndex = 0;
const slideWidthAndMargin = 450;

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

  /** public methods */
  init() {
    this._setIndexesClickEvents();
    this._setSlidesClickEvents();
    this._setPrevButtonClickEvent();
    this._setNextButtonClickEvent();

    this._changeSlide();
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
    this._changeSlideByClick(target);
  }
  _slideClickHandler({target}) {
    this._changeSlideByClick(target);
  }
  _prevButtonClickHandler() {
    this._changeSlideByButtonClick(
      limitPrevIndex,
      this._activeSlideIndex - 1
    );
  }
  _nextButtonClickHandler() {
    this._changeSlideByButtonClick(
      this._slides.length - 1,
      this._activeSlideIndex + 1
    );
  }

  // change slide
  _changeSlideByClick(element) {
    const currentSlide = Element.create(element);
    const newActiveSlideIndex = +currentSlide.get(':data-slide-index');
    this._changeSlide(newActiveSlideIndex);
  }
  _changeSlideByButtonClick(indexLimit, newActiveSlideIndex) {
    if( this._activeSlideIndex === indexLimit ) return;
    this._changeSlide(newActiveSlideIndex);
  }
  _changeSlide(newActiveSlideIndex = 0) {
    this._updateActiveSlideIndex(newActiveSlideIndex);
    this._updateActiveClasses();
  }

  // update
  _updateActiveSlideIndex(newActiveSlideIndex) {
    this._activeSlideIndex = newActiveSlideIndex;
  }
  _updateActiveClasses() {
    [this._indexes, this._slides].map((array) => {
      array.forEach((item) => {
        item.remove('.is-active');
  
        const itemIndex = +item.get(':data-slide-index');
        if( itemIndex === this._activeSlideIndex ) item.add('.is-active');
      });
    })
  }
}

/** export */
export default Slider;
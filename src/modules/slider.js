'use strict';

/** import */
import $ from './tools';

/** constants */
const LIMIT_PREV_INDEX = 0;
const SLIDE_MARGIN_RIGHT = 50;
const MOBILE_WIDTH_POINT = 500;

/** slider-module */
class SliderModule {
  /** private properties */
  _slider = $('#slider');
  _slidesContainer = this._slider.$('.slider--slides');
  _slides = this._slidesContainer.children();
  _indexes = this._slider.$('.slide-index', true);
  _prevButton = this._slider.$('#prev-button');
  _nextButton = this._slider.$('#next-button');
  _currentSlideIndex = 0;
  _lastActiveSlideIndex = 0;
  _lastSlideIndex = this._slides.length - 1;

  /** static methods */
  static init() {
    const sliderModule = new SliderModule();
    sliderModule._setIndexesClickEvents();
    sliderModule._setSlidesClickEvents();
    sliderModule._setPrevButtonClickEvent();
    sliderModule._setNextButtonClickEvent();
    sliderModule._changeSlide();
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
      LIMIT_PREV_INDEX,
      this._currentSlideIndex - 1
    );
  }
  _nextButtonClickHandler() {
    this._changeSlideByButtonClick(
      this._lastSlideIndex,
      this._currentSlideIndex + 1
    );
  }

  // change slide
  _changeSlideByClick(element) {
    const currentSlide = $.createElement(element);
    const newActiveSlideIndex = +currentSlide.get(':data-slide-index');
    this._changeSlide(newActiveSlideIndex);
  }
  _changeSlideByButtonClick(indexLimit, newActiveSlideIndex) {
    if( this._currentSlideIndex === indexLimit ) return;
    this._changeSlide(newActiveSlideIndex);
  }
  _changeSlide(newActiveSlideIndex = 0) {
    this._updateActiveSlideIndex(newActiveSlideIndex);
    this._updateActiveClasses();
    this._moveSlide();
  }

  // update
  _updateActiveSlideIndex(newActiveSlideIndex) {
    this._lastActiveSlideIndex = this._currentSlideIndex;
    this._currentSlideIndex = newActiveSlideIndex;
  }
  _updateActiveClasses() {
    [this._indexes, this._slides].map((array) => {
      array.forEach((item) => {
        item.remove('.is-active');
  
        const itemIndex = +item.get(':data-slide-index');
        if( itemIndex === this._currentSlideIndex ) item.add('.is-active');
      });
    })
  }

  // move slide
  _moveSlide() {
    if( this._lastActiveSlideIndex === this._currentSlideIndex ) return;
    
    const translateValue = this._getTranslateValue();
    this._updateSlidesContainerTranformStyle(translateValue);
  }

  // help methods
  _isMobileWidth() {
    return document.documentElement.clientWidth <= MOBILE_WIDTH_POINT;
  }
  _getTranslateValue() {
    const slideWidth = this._slides[0].width();
    return this._currentSlideIndex * (slideWidth + SLIDE_MARGIN_RIGHT);
  }
  _updateSlidesContainerTranformStyle(value) {
    this._slidesContainer.styles({ transform: `translateX(-${value}px)` })
  }
}

/** export */
export default SliderModule;
'use strict';

/** import */
import $ from './tools';

/** slider class */
class Slider {
  constructor() {
    this._slider = $('#slider');
    this._slidesContainer = this._slider.$('.slider--slides');
    this._indexes = this._slider.$('.slide-index', true);
    this._prevButton = this._slider.$('#prev-button');
    this._nextButton = this._slider.$('#next-button');

    this._activeSlideIndex = 0;
  }

  init() {
    this._changeActiveSlideIndex();
  }

  /** private methods */
  _changeSlide(newActiveSlideIndex) {
    this._updateActiveSlideIndex(newActiveSlideIndex);
    this._changeActiveSlideIndex();
  }
  _updateActiveSlideIndex(newActiveSlideIndex) {
    this._activeSlideIndex = newActiveSlideIndex;
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
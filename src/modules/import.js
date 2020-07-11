'use strict';

/** imports */
import events from './events';

/** import-module */
class ImportModule {
  _isSliderImported = false;
  _isHeaderImported = false;
  
  /** static methods */
  static init() {
    const importModule = new ImportModule();
    events
      .on(
        'import-header-module',
        importModule._importHeaderModuleHandler.bind(importModule)
      )
      .on(
        'import-slider-module',
        importModule._importSliderModuleHandler.bind(importModule)
      )
  }

  /** private methods */
  async _importHeaderModuleHandler() {
    if( this._isHeaderImported ) return;

    const HeaderModule = (await import('./header')).default;
    HeaderModule.init();

    this._isHeaderImported = true;
  }
  async _importSliderModuleHandler() {
    if( this._isSliderImported ) return;

    const SliderModule = (await import('./slider')).default;
    SliderModule.init();

    this._isSliderImported = true;
  }
}

/** export */
export default ImportModule;
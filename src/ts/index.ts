/*
 * Author: Daisuke Takayama
 */
'use strict';
let e = eval, global: NodeJS.Global = e('this');

import SideMenu from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      sideMenu: SideMenu
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = SideMenu;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }

  if (typeof global.AP.sideMenu === 'undefined') {
    Object.assign(global.AP, { sideMenu: new SideMenu });
  }
}

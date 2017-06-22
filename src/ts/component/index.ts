/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;

import Target from './Target';
import Trigger from './Trigger';

/**
 * SideMenu View Class
 * @public
 * @param option
 **/
export class View {
  /**
   * Static Function
   **/
  static fetchElements(callback) {
    document.addEventListener("DOMContentLoaded", () => {
      let triggerList = APView.createFromTriggerElement(['[data-ap-side]'], Trigger);

      callback({
        triggerList: triggerList,
        targetList: APView.createTargetView(triggerList, Target)
      });
    });
  }
}

export default View;

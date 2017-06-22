/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';


/**
 * SideMenu Controller Class
 * @public
 * @param option
 **/
export class SideMenu {
    private model: Model;

    constructor(
    ) {
        View.fetchElements((data) => {
            this.model = Model.fromData(data);
        });
    }

    /**
     * Public Function
     **/
    public create(data: any): void {
        //this.model.triggerList.push(Trigger.fromData(data));
    }

    public select(data: any): void {
        //number, id, class
        //
    }

    public resetSelected(data: any) {

    }
}


export default SideMenu;

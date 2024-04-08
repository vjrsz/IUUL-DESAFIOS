import {RenderView} from "../../Views/default/RenderView";
import {IndexConvertView} from "../../Views/Convert";

export default class Controller {
    _renderView : RenderView;

    constructor() {
        this._renderView = new RenderView();
    }

    view(view: IndexConvertView){
        this._renderView.render(view)
    }
}
import {IRenderView} from "./IRenderView";

export class RenderView {
    render(view: IRenderView): void {
        view.render();
    }
}
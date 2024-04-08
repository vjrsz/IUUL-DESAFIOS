import {IndexConvertView} from "../../Views/Convert";
import Controller from "./Controller";

export class ConvertController extends Controller{
    index(){
        this.view(new IndexConvertView());
    }
}
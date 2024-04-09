import {IndexConvertView} from "../Views/convert";
import {convertConvertView} from "../Views/convert/convert";
import {ConvertService} from "../Services/ConvertService";
import {convertedConvertView} from "../Views/convert/converted";

export class ConvertController {
    _indexView: IndexConvertView;
    _convertView: convertConvertView;
    _convertedView: convertedConvertView;
    _convertService: ConvertService;

    constructor() {
        this._indexView = new IndexConvertView();
        this._convertView = new convertConvertView();
        this._convertedView = new convertedConvertView();
        this._convertService = new ConvertService();
    }

    index(){
        let { option } = this._indexView.show();

        return option
    }

    async convert() {
        let {from, to, amount} = this._convertView.show();

        let converted = await this._convertService.convert(from, to, amount)

        this._convertedView.show({
            from, to, amount, conversion_result : amount * converted.conversion_result, conversion_rate: converted.conversion_rate
        })

        return 4;
    }


}
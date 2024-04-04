/**
 * Nome                   | De 5 a 60 caracteres | String
 * CPF                    | CPF válido           | Number
 * Data de nascimento     | Formato DDMMAAAA     | Date
 *                        | Min: 18 anos         |
 * Renda mensal Valor     | Format: 0,00         | Number
 *                        | Não obrigatório      |
 * Estado civil           | C, S, V ou D         | String
 *                        | Não obrigatório      |
 */
import RequiredRule from "./Rules/RequiredRule.js";
import PersonValidator from "./PersonValidator.js";
import StringRule from "./Rules/StringRule.js";
import MinRule from "./Rules/MinCharactersRule.js";
import MinCharactersRule from "./Rules/MinCharactersRule.js";
import MaxCharactersRule from "./Rules/MaxCharactersRule.js";
import NumberRule from "./Rules/NumberRule.js";
import FormatRule from "./Rules/FormatRule.js";
import EnumRule from "./Rules/EnumRule.js";
import DateRule from "./Rules/DateRule.js";
import MinDateRule from "./Rules/MinDateRule.js";

export default class {
    constructor() { }

    validate(object){
        let errors = []

        for (const key in this._fieldRules()) {
            let rules = this._getRulesField(key)
            let value = object[key]
            errors = errors.concat(this._validateField(key, value, rules))
        }

        return errors;
    }

    _validateField(key, value, rules){
        const errors = [];

        rules.forEach((rule) => {
            if (!rule.validate(value)){
                errors.push(this._createNewError(this._getNameField(key), rule.message(this._getNameField(key))));
            }
        })

        return errors;
    }

    _fieldRules(){
        const name = this._createFieldRule("nome", [
            new RequiredRule(),
            new StringRule(),
            new MinCharactersRule(5),
            new MaxCharactersRule(60)
        ])

        const cpf = this._createFieldRule("cpf", [
            new RequiredRule(),
            new NumberRule(),
            new MinCharactersRule(11),
            new MaxCharactersRule(11),
            new FormatRule(/^(([0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}))$/)
        ])

        const birthdate = this._createFieldRule("dt_nascimento", [
            new DateRule(),
            new MinDateRule(18)
        ])

        const monthlyIncome = this._createFieldRule("renda_mensal", [
            new FormatRule(/^\d+(,\d{1,2})?$/)
        ])

        const maritalStatus = this._createFieldRule("estado_civil", [
            new EnumRule(['C', 'S', 'V', 'D'])
        ])
        return { name, cpf, birthdate, monthlyIncome, maritalStatus }
    }

    _getRulesField(index){
        return this._fieldRules()[index].rules
    }

    _getNameField(index){
        return this._fieldRules()[index].name
    }

    _createFieldRule(name, rules){
        return {
            'name' : name,
            'rules' : rules
        }
    }

    _createNewError(name, message){
        return {
            name: name,
            message: message
        }
    }
}
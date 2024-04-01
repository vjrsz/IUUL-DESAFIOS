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

export default class {
    static _rules = {
        'name' : [
            RequiredRule
        ]
    }

    validate(person){
        const errors = [];

        for (const fieldKey in PersonValidator._rules) {
            let fieldRule = PersonValidator._rules[fieldKey]

            this._validateField(fieldKey, fieldRule, person[fieldKey])
        }

        return true;
    }
    _validateField(field, fieldRule, value){
        fieldRule.forEach(function (rule){
            if (!rule.validate(value) ){
                console.log(rule.message(field))
            }
        })
    }
}
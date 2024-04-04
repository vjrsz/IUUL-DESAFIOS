import {DateTime} from "luxon";

export function convertToDateTime(DDMMAAAA) {
    // Extrair dia, mês e ano da string
    const dia = DDMMAAAA.substring(0, 2);
    const mes = DDMMAAAA.substring(2, 4);
    const ano = DDMMAAAA.substring(4, 8);

    // Construir e retornar o objeto DateTime
    return DateTime.fromFormat(`${dia}/${mes}/${ano}`, "dd/MM/yyyy");
}
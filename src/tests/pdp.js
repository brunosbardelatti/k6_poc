import http from 'k6/http';
import { HOME_URL } from '../config/constants.js';
import { check } from 'k6';
import { skuData } from '../utils/dataProvider.js';

export function getProductPage() {

    console.log(`Iniciando o teste de acessar a pagina de produto PDP`);
    const params = {
        headers: {
            Cookie: 'tmp_test_new_webshop=B'
        }
    };
    const data =skuData();
    const { sequenceId_config } = data;
    const res = http.get(`${HOME_URL}/${sequenceId_config}.html`, params);

    // Verifique a resposta da solicitação
    if (res.status !== 200) {
        console.error(`Request to ${HOME_URL}/${sequenceId_config}.html failed with status ${res.status}`);
    } else {
        console.log(`Request to ${HOME_URL}/${sequenceId_config}.html succeeded`);
        console.log(`VU: ${__VU}, ID: ${sequenceId_config}`);
    }

    check(res, {
        'status code 200': (r) => r.status === 200
    });

    return res;
}
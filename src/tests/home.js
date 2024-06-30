import http from 'k6/http';
import { HOME_URL } from '../config/constants.js';
import { check } from 'k6';

export function getHomePage() {

    console.log(`Iniciando o teste de acessar a Home`);
    const params = {
        headers: {
            Cookie: 'tmp_test_new_webshop=B'
        }
    };

    const res = http.get(`${HOME_URL}`, params);

    // Verifique a resposta da solicitação
    if (res.status !== 200) {
        console.error(`Request to ${HOME_URL} failed with status ${res.status}`);
    } else {
        console.log(`Request to ${HOME_URL} succeeded`);
    }

    check(res, {
        'status code 200': (r) => r.status === 200
    });

    return res;
}
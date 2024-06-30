export const options = {
    scenarios: {
        // Definição do teste por RPM
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 10, // Número de requisições por segundo (RPM)
            timeUnit: '1m', // Define a unidade de tempo como minutos
            duration: '1m', // Duração total do teste
            preAllocatedVUs: 1, // Número de VUs pré-alocados
            maxVUs: 10, // Número máximo de VUs
            exec: 'constantArrivalRate', // Função que será executada para este cenário
        },
        // Definição do teste por período de ramp-up e ramp-down
        ramp_request_parameter: {
            executor: 'ramping-vus',
            stages: [
                { duration: '1m', target: 10 },
                { duration: '2m', target: 20 },
                { duration: '1m', target: 10 },
                { duration: '1m', target: 0 },
            ],
            exec: 'rampingVus', // Função que será executada para este cenário
        }
    },
    thresholds: {
        http_req_failed: ['rate < 0.01'], // Menos de 1% das requisições podem falhar
        http_req_connecting: ['p(95) < 50'], // 95% das conexões devem ser estabelecidas em menos de 50ms
        http_req_waiting: ['p(95) < 200'], // 95% dos tempos de espera devem ser menores que 200ms
        http_req_receiving: ['p(95) < 100'], // 95% dos tempos de recepção devem ser menores que 100ms
        http_req_duration: [
            'p(95) < 400', // 95% das requisições devem ser concluídas em menos de 400ms
            'p(99) < 650' // 99% das requisições devem ser concluídas em menos de 650ms
        ],
    }
};
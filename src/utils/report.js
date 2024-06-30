import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export function generateReport(data) {
    const timestamp = new Date().toLocaleString('pt-BR').replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/, '$1-$2_$4-$5'); //Define a hora atual para o nome dos relatorios
    const html = htmlReport(data, { title: "K6 Performance Report" }); // Adicionando um título ao relatório HTML
    const summaryText = textSummary(data, { indent: " ", enableColors: true }); // Gerando um resumo em texto
    const json = JSON.stringify(data, null, 2); // Geração do relatório JSON
    const csv = generateCSV(data); // Geração do relatório CSV

    return {
        [`/k6/reports/index_${timestamp}.html`]: html,
        [`/k6/reports/summary_${timestamp}.txt`]: summaryText, 
        [`/k6/reports/summary_${timestamp}.json`]: json,
        [`/k6/reports/summary_${timestamp}.csv`]: csv,
    };
}

function generateCSV(data) {
    const rows = [];
    const headers = ["Metric", "Value"];
    rows.push(headers.join(','));

    for (const [key, value] of Object.entries(data.metrics)) {
        rows.push([key, JSON.stringify(value)].join(','));
    }

    return rows.join('\n');
}
  

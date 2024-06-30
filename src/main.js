import { getProductPage } from './tests/pdp.js';
import { generateReport } from './utils/report.js';
import { options } from './config/options.js';

export { options };

const testType = __ENV.TEST_TYPE || 'rampingVus';

// inicio do teste
export default function testGetProductPage() {
    if (testType === 'rampingVus') {
        return rampingVus();
    } else {
        return constantArrivalRate();
    }
}

export function rampingVus() {
    return getProductPage();
}

export function constantArrivalRate() {
    return getProductPage();
}

// Função para gerar o relatório
export function handleSummary(data) {
    return generateReport(data);
}

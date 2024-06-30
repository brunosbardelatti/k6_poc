import { generateReport } from './utils/report.js';
import { options } from './config/options.js';
import { rampingVus, constantArrivalRate } from './tests/arquivoDeTeste.js';

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

// Função para gerar o relatório
export function handleSummary(data) {
    return generateReport(data);
}

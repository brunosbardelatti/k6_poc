import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const csvSkuData = new SharedArray('SKU data', function () {
    const csvSkuFile = papaparse.parse(open('../data_test/sku.csv'), { header: true }).data;
    return csvSkuFile.map(row => ({
        sku: row.sku,
        skuconfig: row.skuconfig,
        id_config: row.id_config
    }));
});

export function skuData() {
    const randomIndex = Math.floor(Math.random() * csvSkuData.length);
    const sequenceIndex = __VU;

    const randomSkuConfig = csvSkuData[randomIndex].skuconfig;
    const randomSku = csvSkuData[randomIndex].sku;
    const randomId_config = csvSkuData[randomIndex].id_config;
    const sequenceSku = csvSkuData[sequenceIndex].sku;
    const sequenceSkuConfig = csvSkuData[sequenceIndex].skuconfig;
    const sequenceId_config = csvSkuData[sequenceIndex].id_config;

    if (!randomSkuConfig || !randomSku || !randomId_config || !sequenceSku || !sequenceSkuConfig || !sequenceId_config) {
        console.error(`Data is undefined for randomIndex: ${randomIndex} or sequenceIndex: ${sequenceIndex}`);
        return null;
    }

    return { randomSkuConfig, randomSku, randomId_config, sequenceSku, sequenceSkuConfig, sequenceId_config };
}

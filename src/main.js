const Browser = require('./lib/selenium');
const logger = require('./util/log');
const { sleep } = require('./util/common');

(async function example() {
    const browser = new Browser();
    try {
        logger.info('vai abrir o browser');
        await browser.init();
        await sleep(5);
        await browser.open('https://www2.correios.com.br/sistemas/rastreamento/default.cfm');
        logger.info('pagina carregada');


        await sleep(3);
        await browser.fillInput('objetos', 'xx');
        logger.info('preencheu o campo');


        await sleep(3);
        await browser.click('btnPesq');
        logger.info('clicou');


        await sleep(10);
        logger.info('aguardou 20 secs e vai fechar');
    } finally {
        await browser.close();
    }
})();

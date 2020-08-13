require('dotenv').config();

const Browser = require('./lib/selenium');
const logger = require('./util/log');
const { sleep, formatter } = require('./util/common');
const { get, update } = require('./lib/dynamodb');


(async function example() {
  const browser = new Browser();
  try {
    logger.info('vai abrir o browser');
    await browser.init();
    await sleep(5);
    await browser.open('https://www2.correios.com.br/sistemas/rastreamento/default.cfm');
    logger.info('pagina carregada');


    await sleep(3);
    await browser.fillInput('objetos', 's');
    logger.info('preencheu o campo');


    await sleep(3);
    await browser.click('btnPesq');
    logger.info('clicou');


    await sleep(5);
    logger.info('aguardou 10 secs e vai fechar');

    const eventDates = await browser.getElementsTextByClass('sroDtEvent');
    const eventDescriptions = await browser.getElementsTextByClass('sroLbEvent');

    for (let i = 0; i < eventDates.length; i += 1) {
      console.log('-------------------------');
      console.log(formatter(eventDates[i], eventDescriptions[i]));
      console.log();
    }
  } finally {
    await browser.close();
  }
}());

const Browser = require('./lib/selenium');
const logger = require('./util/log');
const { sleep } = require('./util/common');
const htmlparser = require('htmlparser');

(async function example() {
  const handler = new htmlparser.DefaultHandler((() => {}));
  const parser = new htmlparser.Parser(handler);
  const browser = new Browser();
  try {
    logger.info('vai abrir o browser');
    await browser.init();
    await sleep(5);
    await browser.open('https://www2.correios.com.br/sistemas/rastreamento/default.cfm');
    logger.info('pagina carregada');


    await sleep(3);
    await browser.fillInput('objetos', 'OK522088524BR');
    logger.info('preencheu o campo');


    await sleep(3);
    await browser.click('btnPesq');
    logger.info('clicou');


    await sleep(5);
    logger.info('aguardou 10 secs e vai fechar');
    const content = await browser.getContent('listEvent sro');
    console.log(content);
    const teste = htmlparser
  } finally {
    await browser.close();
  }
}());

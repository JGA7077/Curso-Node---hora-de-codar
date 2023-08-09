const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parsedUrl = new url.URL(address);

console.log('parsedUrl infos ==>', {
  host: parsedUrl.host,
  pathname: parsedUrl.pathname,
  search: parsedUrl.search,
  searchParams: parsedUrl.searchParams,
  paramProduto: parsedUrl.searchParams.get('produtos'),
  parsedUrl
});

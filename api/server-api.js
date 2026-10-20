const http = require('http');
const PORT = 8080;
http.createServer((req, res) => {
if (req.method === 'GET' && req.url === '/dados') {
res.writeHead(200, {
'Content-Type': 'application/json; charset=utf-8',
'Access-Control-Allow-Origin': 'https://vigilant-space-acorn-pjxq9wq46vrvh6w4v-3000.app.github.dev/'
});
res.end(JSON.stringify({
matricula: 'SUA_MATRICULA_REAL',
status: 'dados_sensiveis'
}));
return;
}
res.writeHead(404, { 'Content-Type': 'application/json; charset=utf8' });
res.end(JSON.stringify({ erro: 'Nao encontrado' }));
}).listen(PORT, () => {
console.log(`[API] Servidor ativo na porta ${PORT}`);
});
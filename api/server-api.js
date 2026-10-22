const http = require("http");
const PORT = 8080;

// Troque pela origem do seu cliente: http://localhost:3000
// ou a URL pública do Codespace na porta 3000 (sem barra no final)
const ORIGEM = "https://vigilant-space-acorn-pjxq9wq46vrvh6w4v-3000.app.github.dev/";

http
  .createServer((req, res) => {
    // Preflight
    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": ORIGEM,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "X-Identificador-Estudante, Content-Type",
        "Access-Control-Max-Age": "60",
      });
      res.end();
      return;
    }

    // Rota principal
    if (req.method === "GET" && req.url === "/dados") {
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": ORIGEM,
      });
      res.end(
        JSON.stringify({
          matricula: "2026108221",
          status: "dados_sensiveis",
        }),
      );
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ erro: "Nao encontrado" }));
  })
  .listen(PORT, () => {
    console.log(`[API] Servidor ativo na porta ${PORT}`);
  });
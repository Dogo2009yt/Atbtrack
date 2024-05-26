const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const https = require('https');;
const app = express();
const options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt')
};

const server = https.createServer(options, app);
const PORT = 3000;

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))

const faviconPath = path.join(__dirname, 'public', 'img', 'icon.png');


if (fs.existsSync(faviconPath)) {
  app.use(favicon(faviconPath));
} else {
  console.warn('Icona non trovata. Assicurati che il percorso sia corretto.');
}
// Middleware per servire l'icona
app.use(favicon(path.join(__dirname, 'public', 'img', 'icon.png')));
// Middleware per servire file statici dalla directory 'public'
app.use(express.static('public'));

// Servi i file CSS e JS dalla directory 'public'
app.use(express.static('public/css'));
app.use(express.static('public/js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'index.html'));
});
app.get('/abbonamenti', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'abbonamenti.html'));
  });
app.get('/cercalinea', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'cercalinea.html'));
});
app.get('/biglietti', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'biglietti.html'));
});
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'faq.html'));
});
app.get('/cercafermata', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'Cercafermata.html'));
});
app.get('/selezionalinea', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'selezionalinea.html'));
});
app.get('/calcolapercorso', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'calcolapercorso.html'));
});
app.get('/linea21svigilio', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'linea21svigilio.html'));
});
app.get('/linea21colleaperto', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'linea21colleaperto.html'));
});
app.get('/acquistaabbonamento', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'comprabb.html'));
});
app.get('/abbonamentiscaduti', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'scadabb.html'));
});
app.get('/accedi', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'accedi.html'));
});
app.get('/registrati', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'registrati.html'));
});
app.get('/acquistabiglietto', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'comprabig.html'));
});
app.get('/selezionafermata', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'selezionafermata.html'));
});
app.get('/viaverdi', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'viaverdi.html'));
});
app.get('/viaverditis', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'viaverdiitis.html'));
});
app.get('/areapersonale', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'personale.html'));
});
app.get('/imieidati', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'imieidati.html'));
});
app.get('/metodipagamento', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'pagamento.html'));
});
app.get('/atbcard', async (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'atbcard.html'));
});








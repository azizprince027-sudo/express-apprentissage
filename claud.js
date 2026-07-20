// 1. On importe Express
import express from 'express';

// 2. On crée l'application (notre serveur)
const app = express();
const PORT = 3000;

// 3. Middleware : permet à Express de lire le JSON envoyé dans le body des requêtes
app.use(express.json());

// 4. Notre première route : GET sur la racine "/"
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API 🎉');
});

// 5. On démarre le serveur : il écoute les requêtes sur le port 3000
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
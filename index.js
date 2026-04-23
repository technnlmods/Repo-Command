const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();

// ===== CONFIG =====
const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  console.error("TOKEN no definido");
  process.exit(1);
}

// ===== BOT =====
const bot = new TelegramBot(TOKEN, { polling: true });

// ===== WEB (Render necesita esto) =====
app.get('/', (req, res) => {
  res.send("Bot activo");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Servidor web activo en puerto " + PORT);
});

// ===== COMANDOS =====

// START
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `🤖 Bienvenido

Comandos disponibles:

/descarga - 🔽 Aprende a descargar las apps
/reglas - 📌 Ver reglas del grupo
/canal - 📱 Canal principal de MODS
/infor - ℹ️ Información del grupo
/reporte - 🚨 Reportar usuario
/soporte - 🛠️ Soporte técnico`);
});

// DESCARGA
bot.onText(/\/descarga/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "En este mensaje te muestro cómo descargar las apps de la página web dónde estan alojadas las descargas, es muy sencillo solo mira el video: https://t.me/nrcmods/4622"
  );
});

// REGLAS
bot.onText(/\/reglas/, (msg) => {
  bot.sendMessage(msg.chat.id, `📌 REGLAS DEL GRUPO
Ͳ𝚎𝚌𝚑𝚗𝙽𝙻 𝙲𝙷𝙰𝙽𝙽𝙴𝙻

1️⃣ Respeto ante todo
Se prohíben insultos, ofensas, acoso o lenguaje tóxico.

2️⃣ No spam
No enviar mensajes repetitivos, cadenas o contenido irrelevante.

3️⃣ Uso responsable del bot
No uses los comandos sin motivo o de forma repetitiva.

4️⃣ No enlaces de otros grupos
Solo se permiten enlaces autorizados (ej: Play Store).

5️⃣ Nada de contenido ilegal o +18
Prohibido compartir contenido inapropiado o ilegal.

6️⃣ No ventas de métodos o Aplicaciones, aquí el internet es grátis

⚠️ El incumplimiento puede resultar en expulsión del Grupo y Canal`);
});

// CANAL
bot.onText(/\/canal/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "Únete al mejor Canal de Mods APK y disfruta de las más exclusivas apps Premium https://t.me/nrcmod"
  );
});

// INFORMACIÓN
bot.onText(/\/infor/, (msg) => {
  bot.sendMessage(msg.chat.id, `💎 𝚃𝚎𝚌𝚑𝚗𝙽𝙻 𝙲𝙷𝙰𝙽𝙽𝙴𝙻

📲 Aplicaciones premium desbloqueadas
🌐 VPN con internet gratis e ilimitado
⚡ Conexiones rápidas y estables
🚫 Sin publicidad

Contenido exclusivo, actualizado y probado.

📢 Disfruta y aprovecha al máximo tu dispositivo`);
});

// REPORTE
bot.onText(/\/reporte/, (msg) => {
  bot.sendMessage(msg.chat.id, `🚨 Reporte enviado.

Los administradores han sido notificados y revisarán la situación.`);
});

// SOPORTE
bot.onText(/\/soporte/, (msg) => {
  bot.sendMessage(msg.chat.id, `✅ App reportada.

Motivo: mal funcionamiento o actualización requerida.`);
});

console.log("BOT NODE FUNCIONANDO");

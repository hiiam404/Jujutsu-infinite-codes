const activeCodes = [
  // 💰 Dinheiro
  { code: "fudd10", desc: "$1" },
  { code: "fudd10_V2", desc: "$2" },
  { code: "Chandler", desc: "$0" },

  // 📰 Título
  { code: "BIGNEWS", desc: "Desbloqueia o título Big News (Segundo Mar)" },

  // ♻️ Redefinição de Estatísticas
  { code: "KITT_RESET", desc: "Redefinição de estatísticas grátis" },
  { code: "Sub2UncleKizaru", desc: "Redefinição de estatísticas grátis" },
  { code: "SUB2GAMERROBOT_RESET1", desc: "Redefinição de estatísticas grátis" },

  // ⚡ Experiência 2x
  { code: "Sub2Fer999", desc: "20 minutos de experiência 2x" },
  { code: "Enyu_is_Pro", desc: "20 minutos de experiência 2x" },
  { code: "JCWK", desc: "20 minutos de experiência 2x" },
  { code: "StarcodeHEO", desc: "20 minutos de experiência 2x" },
  { code: "MagicBUS", desc: "20 minutos de experiência 2x" },
  { code: "KittGaming", desc: "20 minutos de experiência 2x" },
  { code: "Sub2CaptainMaui", desc: "20 minutos de experiência 2x" },
  { code: "Sub2OfficialNoobie", desc: "20 minutos de experiência 2x" },
  { code: "TheGreatAce", desc: "20 minutos de experiência 2x" },
  { code: "Sub2NoobMaster123", desc: "20 minutos de experiência 2x" },
  { code: "Sub2Daigrock", desc: "20 minutos de experiência 2x" },
  { code: "Axiore", desc: "20 minutos de experiência 2x" },
  { code: "StrawHatMaine", desc: "20 minutos de experiência 2x" },
  { code: "TantaiGaming", desc: "20 minutos de experiência 2x" },
  { code: "Bluxxy", desc: "20 minutos de experiência 2x" },
  { code: "SUB2GAMERROBOT_EXP1", desc: "30 minutos de experiência 2x" }
];

const expiredCodes = [
  { code: "ADMINFIGHT", desc: "20 minutos de experiência 2x" },
  { code: "GIFTING_HOURS", desc: "20 minutos de experiência 2x" },
  { code: "EARN_FRUITS", desc: "20 minutos de experiência 2x" },
  { code: "FIGHT4FRUIT", desc: "20 minutos de experiência 2x" },
  { code: "NOEXPLOITER", desc: "20 minutos de experiência 2x" },
  { code: "ADMINHACKED", desc: "Redefinição de estatísticas grátis" },
  { code: "NOOB2ADMIN", desc: "20 minutos de experiência 2x" },
  { code: "CODESLIDE", desc: "20 minutos de experiência 2x" },
  { code: "ADMINDARES", desc: "20 minutos de experiência 2x" },
  { code: "fruitconcepts", desc: "20 minutos de experiência 2x" },
  { code: "krazydares", desc: "20 minutos de experiência 2x" },
  { code: "TRIPLEABUSE", desc: "20 minutos de experiência 2x" },
  { code: "SEATROLLING", desc: "20 minutos de experiência 2x" },
  { code: "24NOADMIN", desc: "20 minutos de experiência 2x" },
  { code: "REWARDFUN", desc: "20 minutos de experiência 2x" },
  { code: "NEWTROLL", desc: "20 minutos de experiência 2x" },
  { code: "SECRET_ADMIN", desc: "20 minutos de experiência 2x" },
  { code: "ADMIN_TROLL", desc: "20 minutos de experiência 2x" },
  { code: "youtuber_shipbattle", desc: "20 minutos de experiência 2x" },
  { code: "STAFFBATTLE", desc: "20 minutos de experiência 2x" },
  { code: "ADMIN_STRENGTH", desc: "20 minutos de experiência 2x" },
  { code: "JULYUPDATE_RESET", desc: "Redefinição de estatísticas grátis" },
  { code: "DRAGONABUSE", desc: "20 minutos de experiência 2x" },
  { code: "NOOB2PRO", desc: "20 minutos de experiência 2x" },
  { code: "CINCODEMAYO_BOOST", desc: "20 minutos de experiência 2x" },
  { code: "Noob_Refund", desc: "Redefinição de estatísticas grátis" },
  { code: "CODE_SERVICIO", desc: "20 minutos de experiência 2x" },
  { code: "DEVSCOOKING", desc: "20 minutos de experiência 2x" },
  { code: "TY_FOR_WATCHING", desc: "20 minutos de experiência 2x" },
  { code: "GAMERROBOT_YT", desc: "20 minutos de experiência 2x" },
  { code: "GAMER_ROBOT_1M", desc: "1 hora e 30 minutos de experiência 2x" },
  { code: "EXP_5B", desc: "30 minutos de experiência 2x" },
  { code: "RESET_5B", desc: "Redefinição de estatísticas grátis" },
  { code: "1MLIKES_RESET", desc: "Redefinição de estatísticas grátis" },
  { code: "THIRDSEA", desc: "Redefinição de estatísticas grátis" },
  { code: "1BILLION", desc: "2 horas de experiência 2x" },
  { code: "2BILLION", desc: "20 minutos de experiência 2x" },
  { code: "3BVISITS", desc: "30 minutos de experiência 2x" },
  { code: "Update10", desc: "Redefinição de estatísticas grátis" },
  { code: "Update11", desc: "30 minutos de experiência 2x" },
  { code: "UPD14", desc: "20 minutos de experiência 2x" },
  { code: "UPD15", desc: "20 minutos de experiência 2x" },
  { code: "UPD16", desc: "20 minutos de experiência 2x" },
  { code: "ShutDownFix2", desc: "20 minutos de experiência 2x" },
  { code: "XmasExp", desc: "20 minutos de experiência 2x" },
  { code: "XmasReset", desc: "Redefinição de estatísticas grátis" },
  { code: "PointsReset", desc: "Redefinição de estatísticas grátis" },
  { code: "Control", desc: "15 minutos de experiência 2x" },
  { code: "NOMOREHACK", desc: "20 minutos de experiência 2x" },
  { code: "BANEXPLOIT", desc: "20 minutos de experiência 2x" }
];

// Exibir os códigos ativos
const activeContainer = document.getElementById("active-codes");
activeCodes.forEach(item => {
  const box = document.createElement("div");
  box.className = "code-box";

  const buttonId = `btn-${item.code}`;
  box.innerHTML = `
    <div class="code-text">${item.code}</div>
    <div class="desc">${item.desc}</div>
    <button id="${buttonId}" class="bubble-button" onclick="copyCode(event, '${item.code}')">Copiar Código</button>
  `;
  activeContainer.appendChild(box);
});

// Exibir os expirados
const expiredContainer = document.getElementById("expired-codes");
expiredCodes.forEach(item => {
  const box = document.createElement("div");
  box.className = "code-box expired";
  box.innerHTML = `
    <div class="code-text">${item.code}</div>
    <div class="desc">${item.desc}</div>
  `;
  expiredContainer.appendChild(box);
});

// Função copiar
function copyCode(event, code) {
  const btn = event.currentTarget;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerText;
    btn.innerText = "✅ Copiado!";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = originalText;
      btn.disabled = false;
    }, 2000);
  });

  for (let i = 0; i < 5; i++) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;

    btn.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 800);
  }
}

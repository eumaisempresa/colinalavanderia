<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Colina Lavanderia</title>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="supabase.js"></script>
  <style>
    :root {
      --laranja: #E36A2C;
      --laranja-claro: #FF8A4D;
      --escuro: #1E1206;
    }
    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--escuro);
      color: #FFF8F0;
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-box {
      background: #2A1A0F;
      padding: 40px 30px;
      border-radius: 16px;
      border: 1px solid var(--laranja);
      max-width: 420px;
      width: 100%;
      text-align: center;
    }
    .logo {
      font-size: 32px;
      font-weight: 700;
      color: var(--laranja);
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      padding: 16px;
      margin: 12px 0;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(227,106,44,0.4);
      border-radius: 8px;
      color: white;
      font-size: 16px;
    }
    button {
      width: 100%;
      padding: 16px;
      background: var(--laranja);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover { background: var(--laranja-claro); }
    .toggle { color: var(--laranja-claro); cursor: pointer; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="login-box">
    <div class="logo">LAVANDERIA COLINAS</div>
    <p style="margin-bottom:30px; opacity:0.8;">Entre com sua conta</p>

    <input type="email" id="email" placeholder="Email" value="colina001@lavanderiacolinas.com" />
    <input type="password" id="password" placeholder="Senha" value="12345678" />

    <button onclick="loginComSenha()">Entrar</button>
    <button onclick="enviarMagicLink()" style="background:transparent; border:1px solid var(--laranja);">Enviar Link Mágico</button>

    <p id="status" style="margin-top:20px; min-height:24px;"></p>
  </div>

  <script>
    async function loginComSenha() {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const status = document.getElementById('status');

      status.textContent = "Entrando...";

      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        status.innerHTML = "❌ " + error.message;
        status.style.color = "#ff6b6b";
      } else {
        status.innerHTML = "✅ Login realizado!";
        status.style.color = "#4ade80";
        setTimeout(() => window.location.href = 'dashboard.html', 800);
      }
    }

    async function enviarMagicLink() {
      const email = document.getElementById('email').value.trim();
      const status = document.getElementById('status');

      status.textContent = "Enviando link...";

      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: { emailRedirectTo: window.location.origin + '/dashboard.html' }
      });

      if (error) {
        status.innerHTML = "❌ " + error.message;
        status.style.color = "#ff6b6b";
      } else {
        status.innerHTML = "✅ Link enviado! Verifique seu email.";
        status.style.color = "#4ade80";
      }
    }
  </script>
</body>
</html>

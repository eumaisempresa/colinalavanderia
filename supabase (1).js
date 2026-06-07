// supabase.js - Configuração do Supabase
(function() {
  const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZnZwbWVvZG9ubHZlZXllcWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMTUzOTUsImV4cCI6MjA5NDg5MTM5NX0.6ShcqgT7br4EvVnyJIaXX0apN8VlqJMPAJIRTrtZ5Ho';

  // Aguarda a biblioteca Supabase ser carregada via CDN
  function initSupabase() {
    if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
      // Supabase já foi carregado via CDN, cria o cliente
      window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase configurado com sucesso');
      return true;
    }
    return false;
  }

  // Tenta inicializar imediatamente
  if (!initSupabase()) {
    // Se não conseguir, aguarda um pouco e tenta novamente
    setTimeout(() => {
      if (!initSupabase()) {
        console.error('❌ Erro: Biblioteca Supabase não foi carregada. Verifique o import da CDN.');
      }
    }, 500);
  }
})();

<!-- supabase.js -->
<script>
  const SUPABASE_URL = 'https://kofvpmeodonlveeyeqft.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZnZwbWVvZG9ubHZlZXllcWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMTUzOTUsImV4cCI6MjA5NDg5MTM5NX0.6ShcqgT7br4EvVnyJIaXX0apN8VlqJMPAJIRTrtZ5Ho';

  const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  window.supabase = supabase;

  console.log('✅ Supabase carregado com sucesso');
</script>

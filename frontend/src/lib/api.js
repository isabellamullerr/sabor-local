// Centraliza construção da URL base da API e oferece helpers
const rawBase = import.meta.env.VITE_API_URL || '';

// Sanitiza: remove barra final, adiciona https:// se faltar protocolo
function normalizeBase(url) {
  if (!url) return '';
  let u = url.trim();
  if (!/^https?:\/\//i.test(u)) {
    u = 'https://' + u.replace(/^\/+/, '');
  }
  return u.replace(/\/$/, '');
}

export const API_BASE = normalizeBase(rawBase);

export async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path.startsWith('/') ? path : '/' + path}`;
  const response = await fetch(url, options);
  const contentType = response.headers.get('content-type') || '';
  if (!response.ok) {
    // Tenta extrair JSON de erro ou texto
    if (contentType.includes('application/json')) {
      const data = await response.json();
      const msg = data.message || JSON.stringify(data);
      throw new Error(`API ${response.status}: ${msg}`);
    }
    const text = await response.text();
    throw new Error(`API ${response.status} (non-JSON): ${text.substring(0,120)}`);
  }
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    throw new Error(`Resposta não é JSON. Início: ${text.substring(0,120)}`);
  }
  return response.json();
}

// Debug rápido em runtime (visível no console do navegador)
if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.log('[API] Base configurada:', API_BASE || '(vazia)');
}
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    try {
      const data = await request.json(); // Pega o JSON do corpo da requisição
      console.log('Dados recebidos no servidor:', data);

      // Validação básica (opcional, mas recomendado)
      if (!data.nome || !data.email || !data.whatsapp) {
        return new Response(JSON.stringify({ message: 'Campos obrigatórios faltando.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // URL do webhook do Zapier (pegue da variável de ambiente)
      const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

      if (!zapierWebhookUrl) {
        console.error('ZAPIER_WEBHOOK_URL não está configurada!');
        return new Response(JSON.stringify({ message: 'Erro de configuração do servidor.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Envia os dados para o webhook do Zapier
      const zapierResponse = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Envia os dados JSON recebidos
      });

      if (zapierResponse.ok) {
        console.log('Dados enviados com sucesso para o Zapier!');
        return new Response(JSON.stringify({ message: 'Formulário enviado com sucesso!' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        const errorText = await zapierResponse.text();
        console.error('Erro ao enviar para o Zapier:', zapierResponse.status, errorText);
        return new Response(JSON.stringify({ message: `Erro ao enviar formulário. Tente novamente. (Status: ${zapierResponse.status})` }), {
          status: zapierResponse.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      return new Response(JSON.stringify({ message: 'Erro interno do servidor.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return new Response(JSON.stringify({ message: 'Método não permitido ou Content-Type inválido.' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
};
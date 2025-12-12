/**
 * Arquivo de Configuração Geral do Site
 *
 * Instruções para o cliente:
 * 1. Altere o `vturbVideoId` para o ID do seu vídeo no Vturb.
 *    Exemplo: Se o seu link é https://player.vturb.com/index.html?vid=seu-video-id-aqui,
 *    o ID é 'seu-video-id-aqui'.
 *
 * 2. Altere o `ctaDelaySeconds` para o número de segundos que o vídeo deve tocar
 *    antes do botão de inscrição aparecer.
 *    Exemplo: Para 5 minutos, use o valor 300 (5 * 60 = 300).
 */
export const siteConfig = {
  // Cole aqui o ID do seu vídeo do Vturb
  vturbVideoId: '691a5238a9e1550a6578cb1d',

  // Defina em SEGUNDOS quando o botão de CTA deve aparecer (ex: 300 para 5 minutos)
  ctaDelaySeconds: 50,
};
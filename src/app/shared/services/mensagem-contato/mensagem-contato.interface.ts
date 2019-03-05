export interface MensagemContatoInterface {
  mensagem: {
    nome: string,
    email: string,
    telefone: string,
    tipoPessoa: {
      tipo: string,
      numero: string,
    },
    corpoMensagem: string,
  };
}

export interface PedidoOrcamentoFormularioInterface {
  formularioCliente: {
    nome: string,
    email: string,
    telefoneFixo: [],
    celular: [],
    empresa: string,
    tipoPessoa: {
        tipo: string,
        numero: string,
    },
    segmento: string,
    servicoEscolhido: string,
    detalhamento: {
      largura: number,
      altura: number,
      quantidade: number,
      cor: string,
      mensagem: string,
      anexo: string,
    }
  };
}

export interface OrcamentoInterface {
  aviso: {
    ativo: boolean;
    mensagem: string;
};
formulario: {
    titulo: string;
    descricao: string;
    servicos: {
        titulo: string;
        tiposDeServicos: [];
        imagens: [];
    },
    segmento: [];
    detalhamento: [];
  };
}

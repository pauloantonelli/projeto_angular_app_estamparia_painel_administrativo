export interface HomeInterface {
  aviso: {
    ativo: boolean,
    mensagem: string,
  };
  slides: {
    titulo: [],
    subtitulo: [],
    imagens: [],
  };
  titulo: string;
  subtitulo: string;
  propaganda01: {
    imagem: string;
    titulo: string;
    descricao: string;
    subtitulo: string;
    lista: [];
    btnTxt: string;
  };
  propaganda02: {
    imagem: string;
    titulo: string;
    descricao: string;
    subtitulo: string;
    lista: [];
    btnTxt: string;
  };
}

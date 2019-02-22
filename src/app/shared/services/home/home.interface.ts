export interface HomeInterface {
    aviso: {
        ativo: {
            type: boolean,
        },
        mensagem: {
            type: string,
        }
    };
    slides: {
        titulo: {
            type: any,
        },
        subtitulo: {
            type: any,
        },
        imagens: {
            type: any,
      },
    };
    titulo: {
        type: string,
    };
    subtitulo: {
        type: string,
    };
    propaganda01: {
        imagem: {
            type: string,
        },
        titulo: {
            type: string,
        },
        descricao: {
            type: string,
        }
    };
    propaganda02: {
        titulo: {
            type: string,
        },
        lista: {
            type: any,
        },
        btnTxt: {
            type: string,
        }
    };
    propaganda03: {
        imagem: {
            type: string,
        },
        titulo: {
            type: string,
        },
        descricao: {
            type: string,
        }
    };
    propaganda04: {
        titulo: {
            type: string,
        },
        lista: {
            type: any,
        },
        btnTxt: {
            type: string,
        }
    };
  }

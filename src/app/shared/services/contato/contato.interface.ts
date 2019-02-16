export interface ContatoInterface {
  telefones: string[];
  atendimento: {
    diaDaSemana: string;
    horario: string;
  };
  endereco: {
    rua: string;
    numero: number;
    bairro: string;
    cep: string;
    estado: string;
  };
}

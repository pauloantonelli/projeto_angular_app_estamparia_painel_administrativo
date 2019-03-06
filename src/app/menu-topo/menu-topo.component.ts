import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { MenuService } from '../shared/services/menu/menu.service';
import { Subscription } from 'rxjs';
import { OrcamentoService } from '../shared/services/orcamento/orcamento.service';
import { ContatoService } from '../shared/services/contato/contato.service';
import { EmaisCadastradosService } from '../shared/services/emails-cadastrados/emais-cadastrados.service';
import { PedidoOrcamentoFormularioService } from '../shared/services/pedido-orcamento-formulario/pedido-orcamento-formulario.service';
import { MensagemContatoService } from '../shared/services/mensagem-contato/mensagem-contato.service';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.scss']
})
export class MenuTopoComponent implements OnInit, OnDestroy {

  protected inscricao: Subscription;
  protected orcamentoNum = null;
  protected contatoNum = null;
  protected emailsNum = null;
  protected logo = '';
  protected menus = {
    botoes: ['home', 'sublimacao', 'orcamento', 'contato', 'portifolio', 'pre rodape', 'rodape', 'emails'],
  };

  constructor(
    private http: MenuService,
    private pedidoOrcamento: PedidoOrcamentoFormularioService,
    private mensagemContato: MensagemContatoService,
    private emailsRecebidos: EmaisCadastradosService
    ) { }

  ngOnInit() {
    this.inscricao = this.http.getMenuAll().subscribe((res) => {
      const dados = res[0];
      this.logo = dados.logo.imagem;
    });
    this.getOrcamento();
    this.getContato();
    this.getEmails();
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  atualizaBadges() {
    this.getOrcamento();
    this.getContato();
    this.getEmails();
  }

  getOrcamento() {
    this.inscricao = this.pedidoOrcamento.getOrcamentoAll().subscribe(
      (resolve) => {
        this.orcamentoNum = resolve.total;
      }
    );
  }
  getContato() {
    this.inscricao = this.mensagemContato.getMensagemAll().subscribe(
      (resolve) => {
        this.contatoNum = resolve.total;
      }
    );
  }
  getEmails() {
    this.inscricao = this.emailsRecebidos.getEmailsCadastradosAll().subscribe(
      (resolve) => {
        this.emailsNum = resolve.total;
      }
    );
  }
}

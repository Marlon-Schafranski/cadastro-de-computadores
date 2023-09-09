import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AdicionarService } from 'src/app/model/service/adicionar.service';
import { Componentes } from 'src/app/entity/Componentes';

interface Computador {
  componentes: Componentes[];
  cor: boolean;
  indice: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pc: Computador = {
    componentes: [],
    cor: false,
    indice: 0,
  };

  constructor(
    private router: Router,
    private adicionarService: AdicionarService,
    private renderer: Renderer2
  ) {
    this.pc.componentes = this.adicionarService.obterCadastro();
  }

  cadastrarUsuario() {
    this.router.navigate(['/cadastro']);
  }

  editarUsuario(indice: number) {
    this.router.navigate(['/cadastrado', indice]);
  }

  excluirCadastro() {
    this.adicionarService.deletarCadastro(this.pc.indice);
    this.router.navigate(['/home']);
  }

  mudarTema() {
    this.pc.cor = !this.pc.cor; // Alternar entre true e false
    const colorTheme = this.pc.cor ? 'dark' : 'ligth';
    this.renderer.setAttribute(document.body, 'color-theme', colorTheme);
  }

  cadastro(){
    this.router.navigate(['/cadastro'])
  }

  excluir(){
    this.router.navigate(['/excluir'])
  }
}


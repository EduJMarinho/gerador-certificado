import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_componentes/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_componentes/base-ui/base-ui";
import { Certificado } from './interfaces/certificado';
import { CertificadoService } from './_services/certificado.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'gerador-certificado'
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}



import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_componentes/secondary-button/secondary-button";
import { ItemCertificado } from "../../_componentes/item-certificado/item-certificado";
import { Router, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrls: ['./certificados.css'],
})
export class Certificados implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}

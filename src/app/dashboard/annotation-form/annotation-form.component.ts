import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-annotation-form',
  templateUrl: './annotation-form.component.html',
  styleUrls: ['./annotation-form.component.css']
})
export class AnnotationFormComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() submitAnnotation = new EventEmitter();
  ptBR: any;

  constructor() {
  }

  ngOnInit() {
    this.ptBR = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Mai","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Wk'
    };
  }

  sendAnnotation() {
    this.submitAnnotation.emit()
  }

  clear() {
    this.form.reset();
  }
}

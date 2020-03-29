import {Component, OnInit} from '@angular/core';
import {Table} from '../domain/table';
import {AnnotationsService} from '../service/annotations.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  table: Table[] = [];
  form: FormGroup;
  index: any;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private annotationsService: AnnotationsService) {

    this.form = this.formBuilder.group({
      id: this.formBuilder.control('', Validators.required),
      date: this.formBuilder.control('', Validators.required),
      hour: this.formBuilder.control('', Validators.required),
      client: this.formBuilder.control('', Validators.required),
      service: this.formBuilder.control('', Validators.required),
      value: this.formBuilder.control('', Validators.required)
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.annotationsService.getAnnotations().subscribe(response => {
      this.table = response;
    })
  }

  submitAnnotation() {
    const data = this.form.getRawValue();
    this.annotationsService.sendAnnotation(data).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Anotação cadastrada.',
        key: 'annotations'
      });
      setTimeout(() => {
        this.messageService.clear();
      }, 5000);
      this.form.reset();
      this.index = 0
    }).catch(err => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro!',
        detail: 'Houve um erro.',
        key: 'annotations'
      });
    });
  }

  handleChange(e) {
    this.index = e.index
  }

  removeAnnotation(event: Table) {
    this.annotationsService.removeAnnotations(event);
  }
}

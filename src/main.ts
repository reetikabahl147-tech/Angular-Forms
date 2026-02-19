import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveForm } from './Components/reactive-form/reactive-form';
import { ReactiveFormUsingFb } from './Components/reactive-form-using-fb/reactive-form-using-fb';
import { TemplateDrivenForm } from './Components/template-driven-form/template-driven-form';

@Component({
  imports: [ReactiveForm, ReactiveFormUsingFb, TemplateDrivenForm],
  selector: 'app-root',
  template: `
  <app-template-driven-form><app-template-driven-form/>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit {

  form: FormGroup;
  args: args = {};
  html
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // get the html by getting the text in the html file
      this.html = `<form novalidate [formGroup]="args.form">
                    <div>
                      <span>Full name</span>
                      <input [(ngModel)]="args.user.name" type="text" placeholder="Your full name" formControlName="name">
                      <span *ngIf="args.form.get('name').errors != null">error in name</span>
                    </div>
                    <div>
                      <span>Age</span>
                      <input [(ngModel)]="args.user.age" type="number" placeholder="Your age" formControlName="age">
                      <span *ngIf="args.form.get('age').errors != null">error in age</span>
                    </div>
                  </form>`

      // call the service to get the attributes
      let attributes = [
        { name: 'name', required: true },
        { name: 'age', required: true, min: 20, max: 100 }
      ]

      // for edit mode also this is call to the service
      this.args.user = { name: 'ahmed', age: 26 }


      this.args.form = this.createForm(attributes);
    }, 1000)

  }


  createForm(attributes): FormGroup {
    let controls = {};
    for (let attr of attributes) {
      controls[attr.name] = new FormControl('', this.getControlValidations(attr));
    }

    return new FormGroup(controls);
  }

  getControlValidations(attribute): ValidatorFn[] {
    let validations = [];

    if (attribute.required)
      validations.push(Validators.required);
    if (attribute.maxLength != null)
      validations.push(Validators.maxLength(attribute.maxLength));
    if (attribute.max != null)
      validations.push(Validators.max(attribute.max));
    if (attribute.minLength != null)
      validations.push(Validators.minLength(attribute.minLength));
    if (attribute.min != null)
      validations.push(Validators.min(attribute.min));
    if (attribute.expression != null)
      validations.push(Validators.pattern(attribute.expression));

    return validations;
  }

  submit() {
    console.log('valid', this.args.form.valid);
    console.log('dirty', this.args.form.dirty);
  }
}

interface args {
  form?: FormGroup,
  user?: any
}

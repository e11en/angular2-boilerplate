import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
            'color' : [null, Validators.required],
            'food' : [null, Validators.required],
            'slide' : false
        });
    }

    submitForm(value: any) {
        this.form.controls['color'].markAsTouched();
        this.form.controls['food'].markAsTouched();

        if (!this.form.valid) {
            console.log('Form not valid!');
        } else {
            console.log(value);
        }
    }
}
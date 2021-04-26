import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
  polllForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.polllForm = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control('', []),
      option1: this.fb.control('', []),
      option2: this.fb.control('', []),
      option3: this.fb.control('', []),
      option4: this.fb.control('', []),
    })
  }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.polllForm.value);
  }

}

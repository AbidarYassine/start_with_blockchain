import { PollForm } from './../../models/poll-form';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter()

  ngOnInit(): void {
  }
  submitForm() {
    const formData: PollForm = {
      question: this.polllForm.get('question').value,
      image: this.polllForm.get('image').value,
      options: [
        this.polllForm.get('option1').value,
        this.polllForm.get('option2').value,
        this.polllForm.get('option3').value,
        this.polllForm.get('option4').value
      ]
    }
    this.pollCreated.emit(formData);
  }

}

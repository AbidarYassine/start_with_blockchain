import { PollVote } from './../../models/PollVote';
import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.css']
})
export class PollVoteComponent implements AfterViewInit {


  // options = ["Monday", "Tuesday", "Wednesday"];
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() votes: number[];
  @Input() question: string;
  @Input() poll_id: number;
  @Output() isvoted: EventEmitter<PollVote> = new EventEmitter();
  voteForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    })
  }

  ngAfterViewInit(): void {
    if (this.voted) {
      this.generateChart();
    }

  }
  submitForm() {
    const voted: PollVote = {
      id: this.poll_id,
      vote: this.voteForm.get('selected').value,

    }
    this.isvoted.emit(voted);
    console.log(this.voteForm.value);
  }
  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.votes,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options,
      },
    };

    const chart = new ApexCharts(
      document.getElementById('poll-result'),
      options
    );
    chart.render();
  }

}

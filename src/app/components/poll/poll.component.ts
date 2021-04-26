import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  constructor() { }
  @Input() question: string;
  @Input() image: string;
  @Input() votes: number[];
  @Input() voted: boolean;
  numberOfVote: number;
  ngOnInit(): void {

    // reduce can be applied for array has lenght;
    if (this.votes.length) {
      this.numberOfVote = this.votes.reduce((acc, curr) => {
        return acc += curr;
      });
    }
  }

}

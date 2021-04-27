import { PollService } from './services/poll.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private pollService: PollService) { }
  title = 'blockchain';
  show = false;
  activePoll = null;
  receiveMessage($event) {
    console.log($event);
    this.show = $event
  }

  ngOnInit() {
    this.pollService.getPolls().subscribe(data => {
      this.polls = data;
    });
  }
  polls = [];
  setActivePoll(poll) {
    console.log(poll);
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}

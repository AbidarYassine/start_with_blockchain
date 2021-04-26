import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor() { }

  sendMessage() {
    // if (this.show) this.show = false;
    // if (!this.show) this.show = true;
    this.show = !this.show;
    this.messageEvent.emit(this.show);
  }
  ngOnInit(): void {
  }

}

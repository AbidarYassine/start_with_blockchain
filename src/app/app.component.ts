import { NavbarComponent } from './components/navbar/navbar.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blockchain';
  show = false;
  receiveMessage($event) {
    console.log($event);
    this.show = $event
  }
  polls = [
    {
      question: "Do you Like dogs or cats?",
      votes: [0, 15],
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      voted: true,
    },
    {
      question: "Angular or React or Vue?",
      votes: [10, 5, 7],
      image: "https://moben.fr/wp-content/uploads/2018/09/vuevsreactvsangular.jpg",
      voted: false,
    },
    {
      question: "FSTG OR ENSA?",
      votes: [5, 3],
      image: "https://www.uca.ma/public/website/theme-2/img/logo.png",
      voted: true,
    },
  ]
}

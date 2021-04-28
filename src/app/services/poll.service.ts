import { PollVote } from './../models/PollVote';
import { PollForm } from './../models/poll-form';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll } from '../models/poll';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }
  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: "Do you Like dogs or cats?",
        votes: [4, 15, 10],
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        voted: true,
        options: ["Cat", "Dog", "None"]
      },
      {
        id: 2,
        question: "Angular or React or Vue?",
        votes: [10, 5, 7],
        image: "https://moben.fr/wp-content/uploads/2018/09/vuevsreactvsangular.jpg",
        voted: false,
        options: ["Angular", "Vue", "React"]
      },
      {
        id: 3,
        question: "FSTG OR ENSA?",
        votes: [5, 3, 1],
        image: "https://www.uca.ma/public/website/theme-2/img/logo.png",
        voted: true,
        options: ["FSTG", "ENSA", "NONE"]
      },
    ]).pipe(delay(2000));
  }
  vote(pollVote: PollVote) {
    console.log(pollVote.id, pollVote.vote);
  }
  createPoll(poll: PollForm) {
    console.log(poll.question, poll.image, poll.options);
  }

}

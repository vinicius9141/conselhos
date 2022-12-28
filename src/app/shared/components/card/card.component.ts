import { Component, OnInit } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public adviceRandom: string = '';

  constructor(private adviceService: AdviceService) {}

  ngOnInit(): void {
    this.getAdvice();
  }

  public getAdvice(): void {
    this.adviceService.getRandomAdvice().subscribe((data) => {
      this.adviceRandom = data.slip.advice;
    });
  }
}

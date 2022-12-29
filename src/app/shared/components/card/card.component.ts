import { Component, OnInit } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';
import { ChangeStatsService } from 'src/app/services/change-stats.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public adviceRandom: string = '';
  public idAdvice: string = '';
  public AdviceByLuckyNumber: string = '';
  public luckyNumber: boolean = false;
  public showInput: boolean = false;

  constructor(
    private adviceService: AdviceService,
    public changeStatsService: ChangeStatsService
  ) {}

  ngOnInit(): void {
    this.getAdvice();
  }

  public getAdvice(): void {
    this.adviceService.getRandomAdvice().subscribe((data) => {
      this.adviceRandom = data.slip.advice;
    });
  }

  public getAdviceNumber(): void {
    this.adviceService.getAdviceByNumber(this.idAdvice).subscribe((data) => {
      this.AdviceByLuckyNumber = data.slip.advice;
      this.adviceRandom = '';
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, CardComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapComponent } from './bai-tap.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import { ListLaptopComponent } from './list-laptop/list-laptop.component';
import { FooterComponent } from './footer/footer.component';
import { LaptopComponent } from './list-laptop/laptop/laptop.component';
import { PhoneComponent } from './list-phone/phone/phone.component';



@NgModule({
  declarations: [BaiTapComponent, HeaderComponent, CarouselComponent, ListPhoneComponent, ListLaptopComponent, FooterComponent, LaptopComponent, PhoneComponent],
  exports: [BaiTapComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapModule { }

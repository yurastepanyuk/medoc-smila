import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];


  constructor() {
    this.products = [
  new Product(
    1,
    'Соняшниковий',
    'Містить найбільшу кількість біологічно активних компонентів в порівнянні з іншими сортами. ' +
    'Цим пояснюється чудодійний ефект при лікуванні різних захворювань, швидке відновлення сил, бадьорість і гарний настрій.',
    '/assets/images/products/hunny_sonyashnuk.jpg',
    100.00),
  new Product(
    2,
    'Акацієвий',
    'Акацієвий мед має характерну особливість - він тривалий час зберігає свою рідку форму,' +
    ' і кристалізується всього лише через рік після відкачування.',
    '/assets/images/products/hunny_akacuya.jpg',
    125.00
  ),
  new Product(
    3,
    'Ріпаковий',
    'У своєму запасі мед з ріпаку має велику кількість корисних речовин, у тому числі необхідні вітаміни ' +
    'і мінерали для щоденного споживання організмом. ',
    '/assets/images/products/hunny_raps_00.jpg',
    100.00
  ),
  new Product(
    4,
    'Липовий',
    'Немає рівних за вмістом вітамінів і мікроелементів.' +
    'Він багатий мінеральними солями, вітамінами Е, А, К і групи В, ефірними маслами, амінокислотами. ',
    '/assets/images/products/hunny_lupa.jpg',
    100.00
  ),
  new Product(
    5,
    'Різнотрав\'я',
    'Запашний аромат, приємний смак, корисні властивості меду з різнотрав\'я ' +
    'роблять його першосортним, затребуваним продуктом природи, виступаючим одночасно і ласощами, і ліками. ',
    '/assets/images/products/hunny_riznotravya.jpg',
    100.00
  )
];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}



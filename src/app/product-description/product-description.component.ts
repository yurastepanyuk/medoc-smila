import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'medoc-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}

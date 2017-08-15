import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'medoc-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui medium image';

  constructor() { }

  ngOnInit() {
  }

}

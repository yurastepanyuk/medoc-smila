import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'medoc-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product;

  /**
   * @output onProductSelected - outputs the current
   * Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   * the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {

  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.id === this.currentProduct.id;
  }

}

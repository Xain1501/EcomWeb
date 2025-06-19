import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCard {
  @Input() product!: Product;
}

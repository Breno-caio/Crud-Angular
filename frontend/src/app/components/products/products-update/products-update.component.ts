import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product: Product

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Proudo atualizado com sucesso!')
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }



}

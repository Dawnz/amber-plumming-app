import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/api-response';
import { Product, ProductResponse } from '../interfaces/product';

const PRODUCTS_ROUTE = `${environment.baseUrl}/products`;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<APIResponse<ProductResponse[]>>(PRODUCTS_ROUTE).pipe(
      map((result) => {
        const tempVal = result.data;
        const allVal: Product[] = tempVal.map((element) => {
          const newVal: Product = {
            id: element._id,
            name: element.name,
            description: element.description,
            price: element.price,
            quantity: element.quantity,
          };
          return newVal;
        });
        return allVal;
      })
    );
  }
  getProductById(id: number): Observable<APIResponse<Product>> {
    return this.http.get<APIResponse<Product>>(`${PRODUCTS_ROUTE}/${id}`);
  }
  deleteProductById(id: number): Observable<APIResponse<Product>> {
    return this.http.delete<APIResponse<Product>>(`${PRODUCTS_ROUTE}/${id}`);
  }
  addProduct(product: Product): Observable<APIResponse<Product>> {
    return this.http.post<APIResponse<Product>>(PRODUCTS_ROUTE, product);
  }
  updateProductById(
    id: number,
    product: Product
  ): Observable<APIResponse<Product>> {
    return this.http.put<APIResponse<Product>>(
      `${PRODUCTS_ROUTE}/${id}`,
      product
    );
  }
}

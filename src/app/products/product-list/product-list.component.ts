import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'პროდუქციის სია';
	imageWidth: number = 150;
	showImage: boolean = true;
	listFilter: string = 'კვ';

	products: any[] = [
		{
			productId: 2,
			productName: 'კვერცხი',
			productCode: 'AFS-23',
			available: 'კი',
			price: 1.29,
			rating: 4.5,
			imageUrl: '/assets/images/eggs.jpg'
		},
		{
			productId: 3,
			productName: 'კარაქი',
			productCode: 'AFS-53',
			available: 'არა',
			price: 3.5,
			rating: 3.5,
			imageUrl: '/assets/images/butter.jpg'
		}
	];

	constructor() {}

	ngOnInit(): void {}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}
}

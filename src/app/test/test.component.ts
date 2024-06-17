import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  selectedFruit: string = '';

  selectFruit(fruit: string) {
    this.selectedFruit = fruit;
  }
  items = ['Item 1', 'Item 2', 'Item 3'];
  isRed = true;

  toggleColor() {
    this.isRed = !this.isRed;
  }

  trackByFn(index: number, item: any) {
    return item.id; // or index
  }
  imageUrl = 'https://example.com/image.jpg';
  name = '';
  onClick() {
    alert(`Hello, ${this.name}!`);
  }
  today: number = Date.now();
  message: string = 'Hello, Angular!';
  price: number = 1234.56;
  percentage: number = 0.75;
}

import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'second-day-training';
  variableForInterpolation = 'variableForInterpolation value';
  stylesForBinding = {
    'font-size': '40px',
    'font-weight': 'bold',
    color: 'blue',
  };
  classForBinding = {
    'text-green': true,
  };
  setStyles() {
    let styles = {
      'font-size': '40px',
      'font-weight': 'bold',
      color: 'red',
    };
    return styles;
  }
}

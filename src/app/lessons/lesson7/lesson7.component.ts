import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.scss']
})
export class Lesson7Component implements OnInit {

  public colorList: string[] = ['black', 'red', 'green', 'blue', 'brown', 'pink'];

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-attribute',
  templateUrl: './number-attribute.component.html',
  styleUrls: ['./number-attribute.component.css']
})
export class NumberAttributeComponent implements OnInit {

  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

}

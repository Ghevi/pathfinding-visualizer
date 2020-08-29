import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() index: number;
  isNodeClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isNodeClicked = !this.isNodeClicked;
  }

}

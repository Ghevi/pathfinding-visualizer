import { Component, OnInit } from '@angular/core';
import Node from '../model/node';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  nodes: Node[] = [];
  isMousePressed = false;

  constructor() { }

  ngOnInit(): void {

  }

  generateNodesGrid(nodesNumber: number): Array<number> {
    for (let i = 0; i < nodesNumber; i++) {
      this.nodes.push(new Node(i));
    }

    return Array(nodesNumber);
  }

  onMouseDown(index: number, event: Event) {
    this.nodes[index].isWall = !this.nodes[index].isWall;
    this.isMousePressed = true;
  }

  onMouseEnter(index:number, event: Event) {
    if (this.isMousePressed) {
      this.nodes[index].isWall = !this.nodes[index].isWall;
    }
  }

  onMouseUp() {
    this.isMousePressed = false;
  }
}

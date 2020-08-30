import { Component, OnInit, Input } from '@angular/core';
import Node from '../../model/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  nodes: Node[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generateNodesGrid(n: number): Array<number> {
    for(let i = 0; i < n; i++) {
      this.nodes.push(new Node());
    }

    return Array(n);
  }

  onClick(index: number) {
    this.nodes[index].isWall = !this.nodes[index].isWall;
  }

}

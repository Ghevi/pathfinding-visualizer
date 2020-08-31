import { Component, OnInit, Input } from '@angular/core';
import Node from '../../model/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() index: number;

  isMousePressed: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

import Cell from './cell';

export default class Node {
  // row;
  // column;
  index;
  isWall;
  // isStartNode;
  // isTargetNode;
  distance;
  isVisited;
  previousNode;
  inPath = false;

  constructor(
    // row,
    // column,
    index,
    isWall = false,
    visited = false,
    // startNode: Cell = null,
    // targetNode: Cell = null
  ) {
    // this.row = row;
    // this.column = column;
    this.index = index,
    this.isWall = isWall;
    // this.isStartNode = this.areInSameCell(startNode, { row, column });
    // this.isTargetNode = this.areInSameCell(targetNode, { row, column });
    this.distance = 99999;
    this.isVisited = visited;
    this.previousNode = null;
  }

  setNodeAsVisited() {
    this.isVisited = true;
  }

  areInSameCell(cell1, cell2) {
    if (cell1 == null) {
      return false;
    }

    if (cell1.row === cell2.row && cell1.col === cell2.col) {
      return true;
    }

    return false;
  }

  resetNode() {
    this.isWall = false;
    // this.isStartNode = false;
    // this.isTargetNode = false;
    this.distance = 9999999;
    this.previousNode = null;
    this.isVisited = false;
    this.inPath = false;
  }
}

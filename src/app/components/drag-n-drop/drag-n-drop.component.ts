import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {

  public listA = ["1", "2", "3", "4"]
  public listB = ["A", "B", "C", "D"]
  constructor() { }

  ngOnInit(): void {
  }

  public dropItem(event: any): void {
    if (event.previousContainer === event.container) {
      this.arrayMove(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.transferItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  
  }

  public transferItem(prevArr: any[], currentArr: any[], fromIndex: number, toIndex: number): void {
    let movedItem = prevArr[fromIndex];
    prevArr.splice(fromIndex, 1)
    currentArr.splice(toIndex, 0, movedItem)
  }

  public arrayMove(arr: any[], fromIndex: number, toIndex: number): void {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

}


// npm install @angular/cdk
// import into app module
// define custom sort functions 

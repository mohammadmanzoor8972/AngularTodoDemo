// write your code in Angular (TypeScript)

import { Component } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'todo-list',
  template: `<input type="text" [(ngModel)]="name" />
<button (click)="add()"> Add</button>
<div class="task-counter">{{getRemainingCount()}} remaining out of {{items.length}} tasks</div>
  <ul>
   <li *ngFor="let item of items"[ngClass]="{'is-done' : item.isDone}"
   (click)="toggleItem(item)">
      {{ item.name }}
    </li>
  </ul>
  
  `,
  styles: [`
    .is-done {
      text-decoration: line-through;
    }
  `]
})
export class TodoListComponent {
  public name: string = '';
  public items: Array<TodoItem> = [];

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }

  public add() {
      if(this.name.trim().length>0){
          this.items.push({name:this.name, isDone:false});
          this.name="";
      }
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }
}

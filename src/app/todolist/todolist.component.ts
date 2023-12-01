import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent implements OnInit {

  Array = [{ taskName: 'Brush teeth ', isCompleted: false }]

  constructor() { }

  ngOnInit(): void { }




  onSumbit(form: NgForm) {


    console.log(form);
    this.Array.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

  }

  onDelete(index: number) {

    console.log(index);

    this.Array.splice(index, 1);

  }


}

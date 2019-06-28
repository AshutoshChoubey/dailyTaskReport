import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simpleadd',
  templateUrl: './simpleadd.component.html',
  styleUrls: ['./simpleadd.component.css']
})
export class SimpleaddComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }
  public addmore: FormGroup;

  ngOnInit() {
  	this.addmore = this._fb.group({
  	  title:[''],
  	  type:[''],
  	  descripition:[''],
      itemRows: this._fb.array([this.initItemRows()])
    });
  }
  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
    timeRange:[''],
    learn:[''],
    descripition:[''],
    suggestion:[''],
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}

import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDeplist();
  }

 addClick(){
   this.dep={
     DepartmentId:0,
     DeparmentName:""
   }
   this.ModalTitle="Add Department";
   this.ActivateAddEditDepComp=true;
 }
  closeClick(){
  this.ActivateAddEditDepComp=false; 
  this.refreshDeplist();
  }

  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    if( confirm('Are you sure3??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert (data.toString());
        this.refreshDeplist();
      })
    }
  }
    
  refreshDeplist(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }

}

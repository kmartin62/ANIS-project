import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
    email:string;

    constructor(private service:UserRegistationService) { }


  public delteUser(id:number){
   let resp= this.service.deleteUser(id);
   resp.subscribe((data)=>this.users=data);
  }

  public findUserByEmailId(){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.users=data);
   }

    ngOnInit() {
      let resp=this.service.getUsers();
      resp.subscribe((data)=>this.users=data);
    }

}

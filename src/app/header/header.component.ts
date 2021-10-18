import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myimage:any=[
  {myimg:"assets/images/deva1.jpg"},
  {myimag1:"assets/images/deva2.jpg"},
  {myimag2:"assets/images/deva3.jpg"},
  {myimag3:"assets/images/deva5.jpg"},
  ];
  name: any;
  constructor(private userservice:UserserviceService,private route:ActivatedRoute,private router:Router) { }
users:any;

id:any;
choose:any;
user:any={
  id:0,
  name:'',
  img:'',
  location:''

};
  ngOnInit(): void {
    


    this.users =this.userservice.onGet();
  }
ondelete(id:any){
  this.userservice.ondelete(id);

  

}
onsubmit(form:NgForm){
  let user:any={
  id:form.value.id,
  name:form.value.user,
  img:form.value.image,
  location:form.value.location,



  }
 
this.userservice.onadd(user);
this.router.navigateByUrl('');
}
search(){
  this.users=this.users.filter((res: { name: string; })=>{
    return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
}
  )}
}


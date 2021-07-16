import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPage } from 'src/app/actions/pageRootActions.actions';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  list;
title;
desc;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select("tutorial").subscribe(res=>{
      console.log(res)
      this.list = res
     
    })
  }
  addItem(){
    this.store.dispatch(new AddPage({title: this.title, description: this.desc}))
  }

}

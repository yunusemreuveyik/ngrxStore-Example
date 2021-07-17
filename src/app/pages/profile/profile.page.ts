import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPage } from 'src/app/actions/pageRootActions.actions';
import { AppState } from 'src/app/app.state';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { HomePage } from '../home/home.page';
import { dataProvider } from 'src/app/dataProvider/provider';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends HomePage implements OnInit {

  constructor(protected store: Store<AppState>,
    protected dataService: FetchDataService,
    protected dataProvider: dataProvider) {

    super(store, dataService, dataProvider)
  }

  ngOnInit() {
    super.ngOnInit();
  }

  // OMG MAX HONESTLY I LOVED THIS, I HAVE NEVER USER IT BEFORE <3
  // WE DONT NEED THEM ANYMORE BECAUSE WE EXTEND THEM FROM BASE COMPONENT <3
 

  // this.store.select("tutorial").subscribe(res=>{
    //   console.log(res)
    //   this.list = res
    // })

  // addItem() {
  //   this.store.dispatch(new AddPage({ title: this.title, description: this.desc }))
  // }

  // list;
  // title;
  // desc;

}

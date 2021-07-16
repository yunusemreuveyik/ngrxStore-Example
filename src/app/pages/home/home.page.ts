import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddPage, LOAD_TUTORIAL, RemovePage } from 'src/app/actions/pageRootActions.actions';
import { AppState } from 'src/app/app.state';
import { pageModel } from 'src/app/models/pageMode.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tutorials: Observable<pageModel[]>;
  list: pageModel[];
  title;
  desc;
  constructor(private store: Store<AppState>,
    private dataService: FetchDataService) { }

  ngOnInit() {
    this.store.select("tutorial").subscribe(res=>{
      console.log("data in ngrx store: ", res)
      this.list = res
     
    })
    this.dataService.fetchData().subscribe(res=>{
      console.log("data from service with json file in assets folder: ", res)
    })
  }
  deleteItem(index:number){
    this.store.dispatch(new RemovePage(index))
  }
  
}

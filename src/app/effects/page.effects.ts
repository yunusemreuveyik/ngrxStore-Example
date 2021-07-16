// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { map, mergeMap, catchError } from 'rxjs/operators';

// import { LoadShoppingAction, ShoppingActionTypes, LoadShoppingSuccessAction, LoadShoppingFailureAction } from '../actions/shopping.actions'
// import { of } from 'rxjs';
// import { FetchDataService } from '../services/fetch-data.service';

// @Injectable()

// export class ShoppingEffects {

//     constructor(
//         private actions$: Actions,
//         private FetchDataService: FetchDataService
//       ) { }

//   @Effect() loadShopping$ = this.actions$
//     .pipe(
//       ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
//       mergeMap(
//         () => this.FetchDataService.fetchData()
//           .pipe(
//             map(data => {
//               return new LoadShoppingSuccessAction(data)
//             }),
//             catchError(error => of(new LoadShoppingFailureAction(error)))
//           )
//       ),
//   )

  
// }
import { Action } from '@ngrx/store'
import { pageModel } from '../models/pageMode.model'
import * as TutorialActions from '../actions/pageRootActions.actions'

const initialState: Array<pageModel> = [
    {title: 'Home page', description: 'test 1'},
    {title: 'Profile page', description: 'test 2'},
    {title: 'Settings page', description: 'test 3'},
  ]

export function reducer(state: Array<pageModel> = initialState, action: TutorialActions.Actions) {

    switch(action.type) {

        case TutorialActions.ADD_PAGE:
            return [...state, action.payload];

        case TutorialActions.REMOVE_PAGE:

            let newState = [...state];
            
            newState.splice(action.payload, 1);
            
            return newState;

        default:
            return state;
    }
}


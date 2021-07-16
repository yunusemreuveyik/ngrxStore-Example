// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { pageModel } from '../models/pageMode.model';

// Section 2
export const ADD_PAGE       = '[TUTORIAL] Add'
export const REMOVE_PAGE    = '[TUTORIAL] Remove'
export const LOAD_TUTORIAL    = '[TUTORIAL] Load'
export const LOAD_TUTORIAL_SUCCESS    = '[TUTORIAL] Load Success'
export const LOAD_TUTORIAL_FAILURE    = '[TUTORIAL] Load Failure'

// Section 3
export class AddPage implements Action {
    readonly type = ADD_PAGE

    constructor(public payload: pageModel) {}
}

export class RemovePage implements Action {
    readonly type = REMOVE_PAGE

    constructor(public payload: number) {}
}
export class LoadTutorial implements Action {
    readonly type = LOAD_TUTORIAL

    constructor(public payload: pageModel[]) {}
}
export class LoadTutorialSuccessAction implements Action {
    readonly type = LOAD_TUTORIAL_SUCCESS
  
    constructor(public payload: Array<pageModel>) {}
  
  }
  export class LoadTutorialFailureAction implements Action {
    readonly type = LOAD_TUTORIAL_FAILURE
    
    constructor(public payload: Error) {}
  }

// Section 4
export type Actions = AddPage | RemovePage | LoadTutorial | LoadTutorialSuccessAction | LoadTutorialFailureAction
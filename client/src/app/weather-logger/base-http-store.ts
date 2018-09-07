import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class DataStore {
  private _state$: BehaviorSubject<Object[]>;

  constructor (initialState: Object[]) {
    this._state$ = new BehaviorSubject(initialState);
  }

  getState$ (): Observable<Object[]> {
    return this._state$.asObservable();
  }

  getState (): Object[] {
    console.log('in DataStore', this._state$.getValue());
    return this._state$.getValue();
  }

  resetState():void {
    this._state$.next([]);
  }

  setState (nextState: Object[]): void {
    this._state$.next(nextState);
  }

  isEmpty():boolean{
    //console.log(this._state$ != null , this._state$ != undefined ,  this._state$.getValue().length == 0);
    return this._state$ != null && this._state$ != undefined &&   this._state$.getValue().length == 0;
  }
}

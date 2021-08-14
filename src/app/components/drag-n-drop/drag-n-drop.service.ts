import { CatsInfo } from './drag-n-drop.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
 //Interfaces are often imported from separate files
// especially in larger apps
@Injectable({
    providedIn: 'root'
})

export class DragNDropService {
    
    constructor( private _httpClient: HttpClient){

    }

    //get request that returns an observable of type any 
    // include the return type on the .get when 
    public getCats(): Observable<any[]> {
        return this._httpClient.get<any[]>('https://catfact.ninja/facts');
    }

    //pass a single object to a post request 
    public postCat(cat: CatsInfo): any {
        return this._httpClient.post('https://imaginarySite.cat/addACat', cat)
    }

    //Pass multiple arguments/objects to a post request
    // the API here is expecting an object with the keys params1 and params2
    public postCat2(cat: CatsInfo, dog: any): any {
        return this._httpClient.post('https://imaginarySite.cat/addACat', 
        {params1: cat, params2: dog})
    }
}
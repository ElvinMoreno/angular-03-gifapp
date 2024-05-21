import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string [] = [];
  private apiKey: string = 'zWtq8wevr4XH0UCpiGBaqyo4Te2qDsj9';

  constructor(private http: HttpClient) { }

  get tagsHistory(){
    return [... this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory =  this.tagsHistory.splice(0,10);

  }

  searchTag( tag: string ):void{
    if ( tag.length === 0 ) return;
    this.organizeHistory(tag);

    this.http.get('api.giphy.com/v1/gifs/search?api_key=zWtq8wevr4XH0UCpiGBaqyo4Te2qDsj9&q=LOL&limit=1').subscribe( resp => {
        console.log(resp);
      });

      console.log(tag);

  }
}

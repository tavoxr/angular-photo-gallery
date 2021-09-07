import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'https://photo-gallery-node.herokuapp.com/api/photos'
  constructor(private http: HttpClient) { }


  createPhoto(title: string, description: string, image: File){
      const fd = new FormData();
      fd.append('title', title);
      fd.append('description', description);
      fd.append('image', image);

      return this.http.post(this.URI, fd)
  }


  getPhotos(){
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id:string){

    return this.http.get<Photo>(this.URI +"/"+ id);

  }

  updatePhoto(id:string, title: string, description:string){

    return this.http.put(`${this.URI}/${id}`,{title,description});

  }

  deletePhoto(id:string){
    return this.http.delete(`${this.URI}/${id}`);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(res => {
          this.photo = res;
        },
          err => {
            console.log(err);
          }
        )
    })
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/'])
      },
        err => {
          console.log(err);
        }
      )
  }


  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {

    this.photoService.updatePhoto(this.id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      },
        err => {
          console.log(err);
        })


    return false;
  }

}

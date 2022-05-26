import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!:Observable<FaceSnap>
  buttonText!: string

  constructor(private faceSnapService: FaceSnapsService,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'oh snap!'
    const facesnapId=+this.route.snapshot.params['id'];
    this.faceSnap$ =this.faceSnapService.getFaceSnapById(facesnapId)
  }

  onSnap(faceSnapId:number) {
  if (this.buttonText == 'oh snap!') {
    this.faceSnap$= this.faceSnapService.snapFaceSnapById(faceSnapId,'snap').pipe(
      tap(()=>
        this.buttonText = 'oups ,un snap'
      )
    )

    } else {
      this.faceSnap$=this.faceSnapService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
        tap(()=>
          this.buttonText = 'oh snap!'
        )
      )

    }

  }
}

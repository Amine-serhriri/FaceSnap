import { Component,OnInit,Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input()faceSnap!:FaceSnap

  buttonText!:string
  constructor(private faceSnapService:FaceSnapsService,
              private route:Router  ) {
  }


  ngOnInit() {

    this.buttonText='oh snap!'
  }
  onSnap(){
    if(this.buttonText=='oh snap!'){
     this.faceSnapService.getFaceSnapById(this.faceSnap.id)
      this.buttonText='oups ,un snap'
    }
    else {
   this.faceSnapService.getFaceSnapById(this.faceSnap.id)
      this.buttonText='oh snap!'
    }
  }

  onViewFaceSnap() {
    this.route.navigateByUrl('facesnap/'+this.faceSnap.id);
  }
}

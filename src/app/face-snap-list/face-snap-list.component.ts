import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps$!:Observable<FaceSnap[]>
  constructor(private faceSnapService:FaceSnapsService) { }

  ngOnInit(): void {

  this.faceSnaps$=this.faceSnapService.getAllFaceSnaps()
  }

}

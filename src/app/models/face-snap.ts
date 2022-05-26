export class FaceSnap {
  id!:number
  public title:string
  public description:string
  public dateCreation:Date
  public imageUrl:string
  public snaps:number
  public location?:string

  constructor( id:number,
               title:string,
              description:string,
               dateCreation:Date,
               imageUrl:string,
               snaps:number,
              location?:string) {
    this.id=id
    this.snaps=snaps
    this.description=description
    this.title=title
    this.imageUrl=imageUrl
    this.dateCreation=dateCreation
    this.location=location

  }
}

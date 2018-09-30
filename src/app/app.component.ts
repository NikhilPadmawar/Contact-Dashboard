import { Component,OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashBoard';
  contactDetails: any = [];
  individual: any;
  likes: any;
  dislikes:any;
  contactName:any[];
  show:boolean=true;
  rating: number;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.contactName=[];
    this.getDetails();
  
  }

  public getDetails() {
    this.appService.getContactDetails().then(res => {
      this.contactDetails = res.People;
      for(let contact of this.contactDetails)
      {
        this.contactName.push(contact.name);
      }
    });
  }

  getPersonDetails(personDetails) {
    this.show=false;
    this.individual = personDetails;
    this.likes = this.individual.Likes;
    this.dislikes = this.individual.Dislikes;
    this.rating=personDetails.rating;
  }

}


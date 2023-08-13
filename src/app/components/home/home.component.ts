import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  myData: any;
  myData$: any;
  constructor(private myDataService: MyDataService){
  }

  ngOnInit(): void {
      this.myData$ =  this.myDataService
      .getData()
      .pipe(tap((data) => (this.myData = data)));
  }

}

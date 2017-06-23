import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [Http]
})
export class AppComponent implements OnInit {

  title = 'app works!';
  data;
  html;

  constructor(private http: Http) {

  }

  ngOnInit(): void {
    this.data = {
      name: 'ahmed Gomaa',
      age: 26
    }

    // this.http.get('file:///E:/projects/dynamic-component/src/app/data.json').subscribe(res => {
    //   var json = res.json();
    //   this.html = json.html1;
    // })

    setTimeout(x => {
      this.html = '<div>{{data.name}}</div><div>{{data.age}}</div>'
    },10000)
  }



}

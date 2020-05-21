import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'specialty-finder';


  settings = {
    columns: {
      name: {
        title: 'Name',
        filter: false
      },
      specialty: {
        title: 'Specialty',
        filter: false
      },     
    },
    actions: false
  };

  onSearch(query: string = '') {
    if(query == ""){
      this.source.setFilter([]);
    } else{
      this.source.setFilter([
        {
          field: 'name',
          search: query
        },
        {
          field: 'specialty',
          search: query
        }     
      ], false); 
    }
  }

  private data: any = [];
  source: LocalDataSource;

  constructor(private http: HttpClient) {
    this.getData();
    this.source = new LocalDataSource(this.data);   
    console.log(this.source);
  }

  //handle in case of errors
  getData() {
    const url = 'http://localhost:3001/specialty';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      this.source.load(this.data);
      console.log(this.data);
    });
  }

  
}

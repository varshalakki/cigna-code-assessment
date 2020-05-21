import { Component } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { throwError } from 'rxjs';

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
    actions: false,
    attr: {
      class: 'table table-bordered '
    }
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
    this.source = new LocalDataSource();   
  }

  private getData() {
    const url = 'http://localhost:3001/specialty';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      this.source.load(this.data);
    }, error => {
        this.handleError(error);
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. 
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
}

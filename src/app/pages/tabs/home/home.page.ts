import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fadeTransition } from 'src/app/animations';
import { AlertService } from 'src/app/services/alert.service';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { NetworkService, NetworkState } from 'src/app/services/network.service';

@Component({
  selector: 'tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [fadeTransition],
})
export class HomePage implements AfterViewInit {
  premiums: Professional[] = [
    {
      id: 1,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover.jpg',
      likes: 25,
      rate: 3,
      liked: true,
    },
    {
      id: 2,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 105,
      rate: 5,
      liked: false,
    },
    {
      id: 3,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: '',
      coverUrl: 'assets/img/cover2.jpg',
      likes: 349,
      rate: 2,
      liked: false,
    },
    {
      id: 4,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover.jpg',
      likes: 39,
      rate: 4,
      liked: true,
    },
  ];
  items: Professional[] = [
    {
      id: 1,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 25,
      rate: 3,
      liked: true,
    },
    {
      id: 2,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 105,
      rate: 5,
      liked: false,
    },
    {
      id: 3,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: '',
      likes: 349,
      rate: 2,
      liked: false,
    },
    {
      id: 4,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 39,
      rate: 4,
      liked: true,
    },
    {
      id: 5,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: null,
      likes: 9,
      rate: 4,
      liked: true,
    },
    {
      id: 6,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 10,
      rate: 4,
      liked: false,
    },
    {
      id: 7,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 60,
      rate: 4,
      liked: false,
    },
    {
      id: 8,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      likes: 7,
      rate: 4,
      liked: true,
    },
  ];

  state = new BehaviorSubject<PageState>('loading');

  private subscriptions: Subscription[] = [];
  private netSub = Subscription.EMPTY;
  data: any[]=[];
  constructor(
    private app: AppService,
    private auth: AuthService,
    private alert: AlertService,
    private http: HttpService,
   private http2:HttpClient,
    private network: NetworkService,
  ) { 

    this.getData();
  }

  ngAfterViewInit() {
    this.state.next('loading');

    if (this.network.is('online')) {
      this.fetchData();
    } else {
      this.state.next('offline');

      this.netSub = this.network.listen().subscribe(state => {
        if (state === NetworkState.on) {
          this.fetchData();
        }
      });
    }
  }

  ionViewDidEnter() { }

  ionViewDidLeave() {
    this.netSub.unsubscribe();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private async fetchData() {
    this.state.next('loading');

    setTimeout(() => {
      this.state.next('ready');
      this.netSub.unsubscribe();
    }, 3000);
  }

  getData(){

    const url = 'https://jsonplaceholder.typicode.com/todos';
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
        this.data = JSON.parse(xhr.responseText);
      } else {
        console.error('Request failed. Status:', xhr.status);
      }
    };
    xhr.onerror = () => {
      console.error('Network error.');
    };
    xhr.send();
  
    /*this.http2.get<any>('https://jsonplaceholder.typicode.com/todos/').subscribe(data =>{
      console.log(data);

    }, e=>{
      console.log(e);
    });*/
  /*  const url = 'https://jsonplaceholder.typicode.com/todos'; // Ensure URL is correct

    this.http2.get<any[]>(url)
      .pipe(
        catchError(error => {
          console.error('Error fetching data', error);
          return of([]);  // Return an empty array or handle the error as needed
        })
      )
      .subscribe({
        next: data => {
          console.log(data);
          this.data = data;
        },
        error: e => {
          console.error('Error in subscription', e);
        },
        complete: () => {
          console.log('Request complete');
        }
      });*/
  }
}

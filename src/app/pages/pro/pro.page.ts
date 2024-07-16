import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss']
})

export class ProPage implements OnInit {
  uid: any;
  //data: any ={};
  data: Professional[] = [];
  items: any[]=[];
  categories: any[]=[];
  profile: Professional = {
    id: null,
    name: 'Flora Kouassi',
    job: 'Plombier professionnel',
    location: 'Abidjan/Koumassi',
    photoUrl: 'assets/img/profile.jpg',
    coverUrl: 'assets/img/cover2.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
    services: [
      'Plomberie',
      'Electricité',
      'Chauffage',
      'Étanchéité',
      'Recherche de fuite d\'eau',
    ],
    price: '5000',
    coords: { lat: -3.9655, lng: 5.2834 },
    likes: 39,
    rate: 4,
    liked: true,
  };

  Professional: Professional[] = [
    {
      id: 1,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 25,
      rate: 3,
      liked: true,
    },
    {
      id: 2,
      name: 'Juan Perez',
      job: 'Maçon',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 105,
      rate: 5,
      liked: false,
    },
    {
      id: 3,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 349,
      rate: 2,
      liked: false,
    },
    {
      id: 4,
      name: 'Juan Perez',
      job: 'Peintre',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 39,
      rate: 4,
      liked: true,
    },
    {
      id: 5,
      name: 'Juan Perez',
      job: 'Ménuisier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 9,
      rate: 4,
      liked: true,
    },
    {
      id: 6,
      name: 'Juan Perez',
      job: 'Electricien',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 10,
      rate: 4,
      liked: false,
    },
    {
      id: 7,
      name: 'Juan Perez',
      job: 'Plombier',
      location: 'Paris',
      photoUrl: 'assets/img/profile.jpg',
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
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
      coverUrl: 'assets/img/cover2.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugit officia debitis totam hic ea. Laborum qui quisquam voluptatem et suscipit sed, accusamus vero consequatur assumenda, repellat quam possimus eligendi.',
      services: [
        'Plomberie',
        'Electricité',
        'Chauffage',
        'Étanchéité',
        'Recherche de fuite d\'eau',
      ],
      price: '5000',
      coords: { lat: -3.9655, lng: 5.2834 },
      likes: 7,
      rate: 4,
      liked: true,
    },
  ];

  isIos: boolean;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private navCtrl:NavController,
    private platform: Platform,
  ) {
    this.isIos = this.platform.is('ios');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('id')){
        this.navCtrl.back();
        return;
      }

      this.uid =paramMap.get('id');
      console.log('id: ', this.uid);
      this.getItems();
    });
    //const proId = Number(this.route.snapshot.paramMap.get('id'));
    //this.profile.id = proId;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  ionViewDidLeave() { }

  like() {
    this.profile.liked = !this.profile.liked;
    this.profile.likes += this.profile.liked ? 1 : -1;
  }

  getItems(){
    
    this.data= this.Professional.filter(x => x.id == this.uid);
    console.log('professionnal: ', this.data);
  }

  onReview(review: ReviewItem) {
    console.log('My review', review);
  }
}

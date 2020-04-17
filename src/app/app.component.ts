import { Component } from '@angular/core';

//firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import 'firebase/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseCrud';

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
}

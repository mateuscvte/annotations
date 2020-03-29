import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Table} from '../domain/table';

@Injectable()
export class AnnotationsService {

  constructor(private afs: AngularFirestore) {
  }

  getAnnotations() {
    return this.afs.collection('annotations').snapshotChanges().pipe(map(it => {
      return it.map(result => {
        return result.payload.doc.data() as Table;
      });
    }))
  }

  sendAnnotation(data) {
    data.id = this.afs.createId();
    return this.afs.collection('annotations').doc(data.id).set(data);
  }

  removeAnnotations(event: Table) {
    return this.afs.collection('annotations').doc(event.id).delete();
  }
}

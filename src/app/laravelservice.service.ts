import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaravelserviceService {

  urlBase = 'http://localhost:8000/mobile/';
  urlSuite = 'listeMessage';

  constructor(private http: HttpClient) { }

  getListeMessage(){
    return this.http.get(this.urlBase + this.urlSuite);
  }

  getConversation(idclient: any){
    this.urlSuite = 'messageAdmin?idclient='+idclient;
    return this.http.get(this.urlBase + this.urlSuite);
  }

  saveConversation(idclient: any, messages: any){
    // let input = {
    //   idclientsreceive : idclient,
    //   messages : messages
    // }
    this.urlSuite = 'ajoutMessageAdmin';
    return this.http.post(this.urlBase+this.urlSuite, {idclient : idclient, messages : messages});
  }

  getClient(idclient: any){
    this.urlSuite = 'getclient?idclient='+idclient;
    return this.http.get(this.urlBase+this.urlSuite);
  }

  statistiqueProduitprix(){
    this.urlSuite = 'statProduitsprix';
    return this.http.get(this.urlBase+this.urlSuite);
  }

  statistiqueCommandeCat(){
    this.urlSuite = 'statCommandeproduit';
    return this.http.get(this.urlBase + this.urlSuite);
  }

  getNotificationEnvoye(){
    this.urlSuite = 'notif/commande?etat=1';
    return this.http.get(this.urlBase+this.urlSuite);
  }

  getDetailProduit(id: any){
    this.urlSuite = 'notif/produit?id='+id;
    return this.http.get(this.urlBase+this.urlSuite);
  }

  validerCommandeProduit(id: any, email: any){
    this.urlSuite = 'notif/valider';
    return this.http.post(this.urlBase + this.urlSuite, {idDevis: id, mail: email});
  }

  annulerCommandeProduit(id: any, email: any){
    this.urlSuite = 'notif/annuler';
    return this.http.post(this.urlBase + this.urlSuite, {idDevis: id, mail: email});
  }

  validerDevisProduits(idDevis: any, email: any, prixdevis: any, datevalidation: any){
    this.urlSuite = 'notif/confirmerDevis';
    return this.http.post(this.urlBase + this.urlSuite, {idDevis: idDevis, mail: email, prixDevis: prixdevis, dateValidite: datevalidation});
  }

  getRendezvous(){
    this.urlSuite = 'rdv/notif?etat=0';
    return this.http.get(this.urlBase + this.urlSuite);
  }

  getAllRendezvous(){
    this.urlSuite = 'rdv/allRdv';
    return this.http.get(this.urlBase+this.urlSuite);
  }

  getDetailRendezvous(id: any){
    this.urlSuite = 'rdv/rendezvous?idRdv='+id;
    return this.http.get(this.urlBase+this.urlSuite);
  }

  getRendezvousByDate(daterdv: any){
    this.urlSuite = 'rdv/rdvDate?daterdv='+daterdv;
    return this.http.get(this.urlBase+this.urlSuite);
  }

  updateRdv(idRdv: any, etat: any, mailclient: any){
    this.urlSuite = 'rdv/actionBtn';
    return this.http.post(this.urlBase+this.urlSuite, {idRdv: idRdv, etat: etat, mail: mailclient});
  }

  duplicataDateheureRdv(){
    this.urlSuite = 'rdv/controleduplicata';
    return this.http.get(this.urlBase+this.urlSuite);
  }

  reportRdv(idRdv: any, daterdv: any, heurerdv: any, lieu: any){
    this.urlSuite = 'rdv/report';
    return this.http.post(this.urlBase+this.urlSuite, {id: idRdv, daterdv: daterdv, heurerdv: heurerdv, lieu:lieu });
  }

  loginApk(email: any, pass: any){
    this.urlSuite = 'log/login';
    return this.http.post(this.urlBase + this.urlSuite, {email: email, mdp: pass});
  }

  getToken(idclient: any){
    this.urlSuite = 'log/token?idclient='+idclient;
    return this.http.get(this.urlBase+this.urlSuite);
  }

}

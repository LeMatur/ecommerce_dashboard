import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../classes/user';

import { UtilityService } from '../utility/utility.service';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, private utilityService: UtilityService){
    httpOptions.headers = httpOptions.headers.set('Authorization', "Bearer " + this.utilityService.loadToken())
  }
    

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users', httpOptions);
  }

  getMemberById(id: number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'users/'+ id, httpOptions);
  }

  updateMemberById(member: User, id: number):Observable<any>{
    return this.httpClient.put<any>(this.baseUrl + 'users/'+ id, member, httpOptions);
  }

  deleteById(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl + 'users/'+ id, httpOptions);
  }

  createAdmin(admin: User, idSponsor: number, idCivility: number, idPieceType: number, idFamilySituation: number, idCountry: number):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + 'users/admin/sponsor/' + idSponsor + '/civility/' + idCivility + '/pieceType/' + idPieceType + '/situation/' + idFamilySituation + '/country/' + idCountry, admin, httpOptions);
  }
  
  countAllUsers(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl + 'users/all', httpOptions);
  }

}
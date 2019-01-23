import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {map} from  'rxjs/operators';

@Injectable()
export class SearchHubService {
 
  private username:string;
  private clientid = 'a173520d285a7652250f';
  private clientsecret = '7482b62e1e124126df735e191f436a379396c365';
  
  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = '';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map(res=>res));
  }
  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map(res=>res));
  }
  updateProfile(username:string){
  	this.username = username;
  }
}

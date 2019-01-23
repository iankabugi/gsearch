import { Component, OnInit } from '@angular/core';
import {SearchHubService } from '../search/search-hub.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-gsearch',
  templateUrl: './gsearch.component.html',
  styleUrls: ['./gsearch.component.css']
})
export class GsearchComponent implements OnInit {
  profile:any;
  repos: any;
  username:string;


  constructor(private searchhubService: SearchHubService,private http:HttpClient) { 

  }

  findProfile(){
  	this.searchhubService.updateProfile(this.username);
  	this.searchhubService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.searchhubService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})  	
  }

  ngOnInit() {
  }

}

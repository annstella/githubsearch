import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../request.service';
import {Repository} from '../repository';
import {User} from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers: [RequestService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    public searchMe = 'annstella';
    public githubUser: string;

    users: User ;
    repository: Repository;
    public searchRepo: string;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: RequestService, public userRepos: RequestService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';

    }
}

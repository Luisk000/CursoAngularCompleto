import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService : UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {  //params é um observable
      this.id = +params.id;
    });
  }

  onActivate() {
    //this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true);
  }
}

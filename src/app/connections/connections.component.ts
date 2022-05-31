import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
>>>>>>> dd91f545af0b12144e263a5df0782fa884e3d7a7

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`Connections - ${environment.node.name}`);
>>>>>>> dd91f545af0b12144e263a5df0782fa884e3d7a7
  }

}

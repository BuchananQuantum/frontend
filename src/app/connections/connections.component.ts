import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`Connections - ${environment.node.name}`);
  }

}

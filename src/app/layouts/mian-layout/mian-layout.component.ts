import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mian-layout',
  templateUrl: './mian-layout.component.html',
  styleUrls: ['./mian-layout.component.css']
})
export class MianLayoutComponent implements OnInit {
  
  isCollapsed:boolean;
  constructor() { }

  ngOnInit(): void {
    
  }

}

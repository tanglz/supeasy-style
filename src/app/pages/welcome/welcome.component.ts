import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as QRious from 'qrious'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;
  @ViewChild('qrCode', { static: true }) public qrCode: ElementRef;
  @ViewChild('qrCode') qrCanvas: ElementRef<HTMLCanvasElement>;
  name:string;
  constructor() { }

  ngOnInit() {
    this.name=localStorage.getItem('username');
    let id = localStorage.getItem('id')
    this.genQrcode('http://54.87.170.217/client/home/'+id)
  }

  genQrcode(url:string){
    const size = 200;
    //console.log(this.qrCode.nativeElement);
    var qr = new QRious({
      element: this.qrCode.nativeElement,
      value: url,
      size:size,
      level: 'H',
    });
   
  }

}

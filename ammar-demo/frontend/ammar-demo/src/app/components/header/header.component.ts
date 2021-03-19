import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'Kissht';
  url:any
  KisshtHtml:any;
  constructor(private http:HttpClient,
  private sanitizer:DomSanitizer){

  }

  buttnClick(){
    //https://www.webcluesinfotech.com/
    this.http.get(this.url,{responseType:'text'}).subscribe(res=>{
      this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res) as ElementRef;
      console.log(this.KisshtHtml.nativeElement);
    })
  }

  ngOnInit(){
    
  }
  
  
}

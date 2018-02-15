import { Component, OnInit, OnChanges, 
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, 
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("OnChanges");
  } 
  ngDoCheck(){
    console.log("DoCheck");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
  } 
  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  } 
  ngAfterViewInit(){
    console.log("AfterViewInit");
  } 
  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  } 
  ngOnDestroy(){
    console.log("OnDestroy");
  }
}

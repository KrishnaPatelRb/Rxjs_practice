import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, first, last, from, fromEvent, interval, Observable, of, take, takeLast, takeWhile, elementAt, filter, distinct, skip, count, max, min, toArray, map, pluck } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})
export class RxjsComponent implements OnInit {

  
  agents!: Observable<string>

  agents2: Observable<string[]> = of(["ek ,do,teen"])
  agents3: Observable<string> = from(["char", "panch", "che", "panch"])
  agent4: Observable<any> = from([{ id: 1, name: "krishna" }, { id: 2, name: "patel" }])

  @ViewChild("fromEventRef")
  fromEventRef!: ElementRef

  inputValue: any;
  formName!: FormGroup


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {


    

    this.agents = new Observable((observer) => {
      observer.next("ram")
      observer.next("sita")
      observer.next("lakshman")
    })

    this.agents.subscribe(data => {
      console.log("agent data---", data)
    })


    this.agents2.subscribe(data => {
      console.log("agent2 data---", data)

      const seqnum = interval(1000)
      seqnum.subscribe(num => {
        if (num < 5) {
          console.log("interval Data printing", data)
        }
      })
    })

    this.agents3.pipe(
      // takeLast(2)             //it will take only 2 last value
      // first()
      // last() 
      // elementAt(1)             //for index element
      // distinct()               // give only unique value
      // skip(2)                     //skip first two
      // count()                    //count the value
      // max()                    // give max value from array
      // min                    // give minimum value from array
      // toArray()                // convert value into array
      // map(data=>data+" "+"mapmodified")          //elemet modified
      filter(data => data === "panch")                  //element filter
    ).subscribe(data => {
      console.log("agent3 data---", data)
    })
    
    this.agent4.pipe(
      pluck("id")                                 // to pluck the value
    ).subscribe((data)=>{
      console.log("agent 4 data", data)
    })

    this.formName = this.fb.group({
      // "" is a intial value
      'username': new FormControl(""),
    })


    this.formName.valueChanges.pipe(
      //  take(5),                                       // it for fix number of input value
      // debounceTime(1000)                              //it is for delay
      // takeWhile((v)=> this.checkCondition(v)),       //for checking the condition
      // first()                                        //take only first one emitted value
      // filter((v)=> this.checkCondition(v)),       //for checking the condition
    ).subscribe((data) => {
      console.log("data is coming late due to debouncing", data.username)
    })


  }
  checkCondition(v: any): boolean {
    console.log(v)
    return v.username.length < 5 ? true : false
  }



  fromEventObserver() {
    const buttonObservable = fromEvent(this.fromEventRef?.nativeElement, "click")
    buttonObservable.subscribe(data => {
      console.log("from data--", data)
    })
  }


}

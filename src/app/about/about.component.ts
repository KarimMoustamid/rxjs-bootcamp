import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fromEvent, interval, timer } from "rxjs";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    //     document.addEventListener("click", (evt) => {
    //       console.log("click event :", evt);
    //       setTimeout(() => {
    //         let i = 0;
    //         setInterval(() => {
    //           console.log("interval:", i);
    //         }, 1000);
    //       }, 3000);
    //     });

    const interval$ = timer(3000, 1000);
    const subInterval1 = interval$.subscribe((v) =>
      console.log("stream 1 => " + v)
    );
    const subInterval2 = interval$.subscribe((v) =>
      console.log("stream 2 => " + v)
    );

    setTimeout(() => {
      subInterval1.unsubscribe();
      subInterval2.unsubscribe();
    }, 5000);

    const click$ = fromEvent(document, "click");
    const subClick = click$.subscribe(
      (c) => console.log("click$ : ", c),
      (e) => console.log(e),
      () => console.log("completed")
    );

    subClick.unsubscribe();
  }
}

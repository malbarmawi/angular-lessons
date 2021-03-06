import { Route, RouterModule } from "@angular/router";
import { Lesson0Component } from "./lesson0/lesson0.component";
import { NgModule } from "@angular/core";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { Lesson5Component } from "./lesson5/lesson5.component";
import { Lesson6Component } from "./lesson6/lesson6.component";
import { Lesson7Component } from "./lesson7/lesson7.component";
import { Lesson8Component } from "./lesson8/lesson8.component";
import { Lesson9Component } from "./lesson9/lesson9.component";
import { Lesson10Component } from "./lesson10/lesson10.component";
import { Lesson11Component } from "./lesson11/lesson11.component";
import { InstallComponent } from "./install/install.component";
import { Lesson12Component } from "./lesson12/lesson12.component";
import { Lesson13Component } from "./lesson13/lesson13.component";
import { Lesson14Component } from "./lesson14/lesson14.component";
import { ResourceComponent } from "./resource/resource.component";
import { Lesson15Component } from "./lesson15/lesson15.component";
import { Lesson16Component } from "./lesson16/lesson16.component";
import { Lesson17Component } from "./lesson17/lesson17.component";
import { Lesson18Component } from "./lesson18/lesson18.component";
import { Lesson19Component } from "./lesson19/lesson19.component";
import { IndexComponent } from "./index/index.component";
import { Lesson20Component } from "./lesson20/lesson20.component";
import { Lesson21Component } from "./lesson21/lesson21.component";
import { Lesson22Component } from "./lesson22/lesson22.component";
import { Lesson23Component } from "./lesson23/lesson23.component";
import { Lesson24Component } from "./lesson24/lesson24.component";
import { Lesson25Component } from "./lesson25/lesson25.component";
import { Lesson26Component } from "./lesson26/lesson26.component";
import { Lesson27Component } from "./lesson27/lesson27.component";
import { Lesson28Component } from "./lesson28/lesson28.component";
import { Lesson29Component } from "./lesson29/lesson29.component";
import { Lesson30Component } from "./lesson30/lesson30.component";

export const routes: Route[] = [
  // {
  //   path: 'index',
  //   component: IndexComponent,
  //   data: { title: 'Index' }
  // },
  {
    path: "install",
    component: InstallComponent,
    data: { title: "Install" }
  },
  {
    path: "lesson/0",
    component: Lesson0Component,
    data: { title: "Lesson 0" }
  },
  {
    path: "lesson/1",
    component: Lesson1Component,
    data: { title: "Lesson 1" }
  },
  {
    path: "lesson/2",
    component: Lesson2Component,
    data: { title: "Lesson 2" }
  },
  {
    path: "lesson/3",
    component: Lesson3Component,
    data: { title: "Lesson 3" }
  },
  {
    path: "lesson/4",
    component: Lesson4Component,
    data: { title: "Lesson 4" }
  },
  {
    path: "lesson/5",
    component: Lesson5Component,
    data: { title: "Lesson 5" }
  },
  {
    path: "lesson/6",
    component: Lesson6Component,
    data: { title: "Lesson 6" }
  },
  {
    path: "lesson/7",
    component: Lesson7Component,
    data: { title: "Lesson 7" }
  },
  {
    path: "lesson/8",
    component: Lesson8Component,
    data: { title: "Lesson 8" }
  },
  {
    path: "lesson/9",
    component: Lesson9Component,
    data: { title: "Lesson 9" }
  },
  {
    path: "lesson/10",
    component: Lesson10Component,
    data: { title: "Lesson 10" }
  },
  {
    path: "lesson/11",
    component: Lesson11Component,
    data: { title: "Lesson 11" }
  },
  {
    path: "lesson/12",
    component: Lesson12Component,
    data: { title: "Lesson 12" }
  },
  {
    path: "lesson/13",
    component: Lesson13Component,
    data: { title: "Lesson 13" }
  },
  {
    path: "lesson/14",
    component: Lesson14Component,
    data: { title: "Lesson 14" }
  },
  {
    path: "lesson/15",
    component: Lesson15Component,
    data: { title: "Lesson 15" }
  },
  {
    path: "lesson/16",
    component: Lesson16Component,
    data: { title: "Lesson 16" }
  },
  {
    path: "lesson/17",
    component: Lesson17Component,
    data: { title: "Lesson 17" }
  },
  {
    path: "lesson/18",
    component: Lesson18Component,
    data: { title: "Lesson 18" }
  },
  {
    path: "lesson/19",
    component: Lesson19Component,
    data: { title: "Lesson 19" }
  },
  {
    path: "lesson/20",
    component: Lesson20Component,
    data: { title: "Lesson 20" }
  },
  {
    path: "lesson/21",
    component: Lesson21Component,
    data: { title: "Lesson 21" }
  },
  {
    path: "lesson/22",
    component: Lesson22Component,
    data: { title: "Lesson 22" }
  },
  {
    path: "lesson/23",
    component: Lesson23Component,
    data: { title: "Lesson 23" }
  },
  {
    path: "lesson/24",
    component: Lesson24Component,
    data: { title: "Lesson 24" }
  },
  {
    path: "lesson/25",
    component: Lesson25Component,
    data: { title: "Lesson 25" }
  },
  {
    path: "lesson/26",
    component: Lesson26Component,
    data: { title: "Lesson 26" }
  },
  {
    path: "lesson/27",
    component: Lesson27Component,
    data: { title: "Lesson 27" }
  },
  {
    path: "lesson/28",
    component: Lesson28Component,
    data: { title: "Lesson 28" }
  },
  {
    path: "lesson/29",
    component: Lesson29Component,
    data: { title: "Lesson 29" }
  },
  {
    path: "lesson/30",
    component: Lesson30Component,
    data: { title: "Lesson 30" }
  },
  {
    path: "Resources",
    component: ResourceComponent,
    data: { title: "Resources" }
  },
  { path: "", redirectTo: "install", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class LessonRouteModule {}

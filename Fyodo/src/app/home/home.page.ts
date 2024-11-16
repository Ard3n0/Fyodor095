import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ok = "ok"
  letter = [
    "b", "a"
  ]
  phones = [
    {a:"iphone", b:"15 pro"},
    {a:"samsung", b:"m52"}
  ]
  delrow(phonesdel: {a: string, b: string}) {
    this.phones = this.phones.filter(phone => phone !== phonesdel);
  }
  constructor() {}

}

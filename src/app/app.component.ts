import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data = [{
        person: {
            id: 1,
            name: 'vikas'
        },
        occupation: {
            id: 1,
            name: 'Sr. Software Engineer'
        },
        city: {
            id: 1,
            name: 'pune'
        }
    }];
    fireChange() {
        console.log("yes")
    }
}

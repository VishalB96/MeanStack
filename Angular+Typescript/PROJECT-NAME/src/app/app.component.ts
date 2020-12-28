import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT-NAME LOLasdasdas';
  imagepath : string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7529fe10-37db-4bc5-8d36-afeeaf4078d3/ddat0p9-1bd72a1a-939b-4ff2-adbc-2d6a5daf9c64.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzUyOWZlMTAtMzdkYi00YmM1LThkMzYtYWZlZWFmNDA3OGQzXC9kZGF0MHA5LTFiZDcyYTFhLTkzOWItNGZmMi1hZGJjLTJkNmE1ZGFmOWM2NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.UYjAANGYUdZ1PsHWQ1rT_8mJhvg8VIxCLKDfDvybjzA';
  //fullname : string = 'Cyberpunk 2077';
  gamename : string = 'Cyberpunk 2077';
  review : string ='sucks on consoles';

  getFullName(): string {
		
    return this.gamename + ' ' + this.review+ '!';
}

}

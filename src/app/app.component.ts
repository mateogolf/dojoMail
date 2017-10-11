import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails = [
    {email:'bill@gates.com',
    importance:true,
    subject: 'New Windows',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel neque suscipit, ornare leo quis, pharetra tellus. Pellentesque quis fringilla ipsum, sit amet ultricies mauris. Duis porta non eros eu vehicula. Sed molestie posuere ullamcorper. Aenean tempor urna sed interdum sagittis.'},
    {
      email: 'matt@gates.com',
      importance: true,
      subject: 'New Windows',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel neque suscipit, ornare leo quis, pharetra tellus.'
    },
    {
      email: 'cstooge@gates.com',
      importance: false,
      subject: 'Wuwuwuwuwuwu',
      content: 'Pellentesque quis fringilla ipsum, sit amet ultricies mauris. Duis porta non eros eu vehicula. '
    },
    {
      email: 'mstooge@gates.com',
      importance: false,
      subject: 'You idiot!!',
      content: 'Pellentesque quis fringilla ipsum, sit amet ultricies mauris. Duis porta non eros eu vehicula. '
    },
  ]
}

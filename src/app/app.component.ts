import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-graphcool-chat';

  constructor(
    private apollo: Apollo
  ) {
    // this.allUsers();
    // this.createUser();
  }

  allUsers(): void {
    const body = {
      query: `query{
        allUsers {
          id
          name
          email
        }
      }`
    };
    this.apollo.query({
      query: gql`
        query {
          allUsers{
            id
            name
            email
          }
        }
        `
    }).subscribe(res => console.log('Query: ', res));
  }


  createUser(): void {
    const body = {
      query: `
      mutation createUser($name: String!, $email: String!, $password: String!){
        createUser(name: $name, email: $email, password: $password){
          id
          name
          email
        }
      }
      `,
      variables: {
        name: 'johnny',
        email: 'teste@teste.com',
        password: '123456'
      }
    };

    this.apollo.mutate({
      mutation: gql`
        mutation createUser($name: String!, $email: String!, $password: String!){
          createUser(name: $name, email: $email, password: $password){
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Iron Man',
        email: 'Iron@teste.com',
        password: '123456'
      }
    }).subscribe(res => console.log('mutation: ', res));
  }

}

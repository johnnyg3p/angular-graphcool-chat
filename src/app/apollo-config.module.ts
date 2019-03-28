import { NgModule } from "@angular/core";
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { InMemoryCache } from 'apollo-cache-inmemory'

@NgModule({
    imports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
})
export class ApolloConfigModule {
    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink
    ) {

        const uri = environment.api;
        const http = httpLink.create({ uri });

        apollo.create({
            link: http,
            cache: new InMemoryCache()
        })



    }

}
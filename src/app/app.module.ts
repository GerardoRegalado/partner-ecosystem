import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, CompanyPageComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: '', component: CompanyPageComponent },
            { path: 'company', component: CompanyPageComponent },
            {path: '**', component: PageNotFoundComponent}

            //{path: '', redirectTo: '/company', pathMatch: 'full'},
        ]),
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}

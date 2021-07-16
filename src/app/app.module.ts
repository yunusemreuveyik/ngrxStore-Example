import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfilePage } from './pages/profile/profile.page';
import { dataProvider } from './dataProvider/provider';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    EffectsModule.forRoot([])],
  providers: [
    
    dataProvider, 
    { provide: APP_INITIALIZER, useFactory: dataProviderFactory, deps: [dataProvider], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function dataProviderFactory(provider: dataProvider) {
  return () => provider.load();
}

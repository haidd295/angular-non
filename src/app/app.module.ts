import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentParentComponent } from './components/component-parent/component-parent.component';
import { ComponentChildrenComponent } from './components/component-children/component-children.component';
import { MainComponent } from './components/layouts/main/main.component';
import { ProgressBarComponent } from './components/layouts/progress-bar/progress-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { TruncatePipe } from './pipes/custom-pipe/truncate';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentParentComponent,
    ComponentChildrenComponent,
    MainComponent,
    ProgressBarComponent,
    CustomPipeComponent,
    TruncatePipe,
    SignInComponent,
    SignInRfComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

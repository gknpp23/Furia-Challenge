import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FanProfileComponent } from './fan-profile/fan-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatbotComponent },
  { path: 'perfil', component: FanProfileComponent },
];


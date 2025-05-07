import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { appConfig } from './app/app.config';  
import { AppComponent } from './app/app.component'; 
import { environment } from './environments/environment'; 

// Inicializa o aplicativo Angular com Firebase configurado
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Inclui todos os provedores de appConfig
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Firebase configurado com as credenciais do environment
    provideFirestore(() => getFirestore()) // Configuração do Firestore
  ]
}).catch((err) => console.error(err)); 

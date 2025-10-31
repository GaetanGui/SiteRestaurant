import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tgam-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;
  selectedFile: File | null = null;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Initialise le formulaire
    this.contactForm = this.fb.group({
      // 1. Le sélecteur de mode
      objet: ['reservation', Validators.required], // 'reservation' ou 'application'

      // 2. Champs communs
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      message: [''],

      // 3. Champs pour la réservation (validés conditionnellement)
      dateReservation: [''],
      heureReservation: [''],
      nbPersonnes: [''],

      // 4. Champs pour la candidature (validés conditionnellement)
      posteSouhaite: [''],
      cv: [null] // Pour le fichier
    });
  }

  ngOnInit() {
    // Écoute les changements sur le champ 'objet' pour
    // ajouter/retirer les validateurs requis
    this.contactForm.get('objet')!.valueChanges.subscribe(value => {
      this.updateValidators(value);
    });

    // Applique les validateurs par défaut au chargement
    this.updateValidators('reservation');
  }

  // Permet d'accéder facilement aux contrôles dans le HTML
  get objet() { return this.contactForm.get('objet')!; }
  get nom() { return this.contactForm.get('nom')!; }
  get email() { return this.contactForm.get('email')!; }
  // ... (crée des getters pour les autres champs si besoin)

  /**
   * Ajoute ou supprime dynamiquement les validateurs
   */
  updateValidators(objet: string) {
    const dateReservation = this.contactForm.get('dateReservation')!;
    const heureReservation = this.contactForm.get('heureReservation')!;
    const nbPersonnes = this.contactForm.get('nbPersonnes')!;
    const posteSouhaite = this.contactForm.get('posteSouhaite')!;

    if (objet === 'reservation') {
      // Ajoute les validateurs pour la réservation
      dateReservation.setValidators([Validators.required]);
      heureReservation.setValidators([Validators.required]);
      nbPersonnes.setValidators([Validators.required, Validators.min(1)]);

      // Retire les validateurs pour la candidature
      posteSouhaite.clearValidators();

    } else if (objet === 'application') {
      // Retire les validateurs pour la réservation
      dateReservation.clearValidators();
      heureReservation.clearValidators();
      nbPersonnes.clearValidators();

      // Ajoute les validateurs pour la candidature (poste requis, CV optionnel)
      posteSouhaite.setValidators([Validators.required]);
    }

    // Met à jour la validité des contrôles
    dateReservation.updateValueAndValidity();
    heureReservation.updateValueAndValidity();
    nbPersonnes.updateValueAndValidity();
    posteSouhaite.updateValueAndValidity();
  }

  /**
   * Gère la sélection du fichier CV
   */
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  /**
   * Gère la soumission du formulaire
   */
  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) {
      console.log('Formulaire invalide');
      return; // Empêche la soumission si invalide
    }

    // IMPORTANT : Pour envoyer un fichier, vous devez utiliser FormData
    const formData = new FormData();

    // Ajoute toutes les valeurs du formulaire
    Object.keys(this.contactForm.value).forEach(key => {
      formData.append(key, this.contactForm.value[key]);
    });

    // Ajoute le fichier s'il existe
    if (this.selectedFile && this.objet.value === 'application') {
      formData.append('cv', this.selectedFile, this.selectedFile.name);
    }
    
    // Affiche le résultat (à remplacer par votre appel HTTP)
    console.log('Formulaire soumis !');
    console.log('Mode:', this.objet.value);
    
    // Affiche les données qui seraient envoyées
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    
    // Ici, vous feriez votre appel http.post('/api/contact', formData)
    
    // Réinitialiser le formulaire
    this.contactForm.reset();
    this.formSubmitted = false;
  }
}

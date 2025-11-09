import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  type FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  LucideAngularModule,
  Camera,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Loader,
} from 'lucide-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Entre em
            <span class="text-primary-600 dark:text-primary-400">Contato</span>
          </h2>
          <div
            class="w-16 h-1 mx-auto bg-primary-600 dark:bg-primary-400 rounded-full mb-6"
          ></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre
            em contato comigo.
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-10">
          <div class="md:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envie uma mensagem
              </h3>

              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="space-y-6"
              >
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Nome</label
                  >
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{
                      'border-red-500 dark:border-red-500':
                        isFieldInvalid('name')
                    }"
                  />
                  <div
                    *ngIf="isFieldInvalid('name')"
                    class="text-red-500 text-sm mt-1"
                  >
                    Nome é obrigatório
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{
                      'border-red-500 dark:border-red-500':
                        isFieldInvalid('email')
                    }"
                  />
                  <div
                    *ngIf="isFieldInvalid('email')"
                    class="text-red-500 text-sm mt-1"
                  >
                    Email válido é obrigatório
                  </div>
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Assunto</label
                  >
                  <input
                    type="text"
                    id="subject"
                    formControlName="subject"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{
                      'border-red-500 dark:border-red-500':
                        isFieldInvalid('subject')
                    }"
                  />
                  <div
                    *ngIf="isFieldInvalid('subject')"
                    class="text-red-500 text-sm mt-1"
                  >
                    Assunto é obrigatório
                  </div>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Mensagem</label
                  >
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    [ngClass]="{
                      'border-red-500 dark:border-red-500':
                        isFieldInvalid('message')
                    }"
                  ></textarea>
                  <div
                    *ngIf="isFieldInvalid('message')"
                    class="text-red-500 text-sm mt-1"
                  >
                    Mensagem é obrigatória
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-black dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    [disabled]="contactForm.invalid || isSubmitting"
                    [ngClass]="{
                      'opacity-70 cursor-not-allowed':
                        contactForm.invalid || isSubmitting
                    }"
                  >
                    <span *ngIf="!isSubmitting">Enviar Mensagem</span>
                    <span
                      *ngIf="isSubmitting"
                      class="flex items-center justify-center"
                    >
                      <lucide-icon
                        [name]="loader"
                        class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      ></lucide-icon>
                      Enviando...
                    </span>
                  </button>
                </div>

                <div
                  *ngIf="submitSuccess"
                  class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg"
                >
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </div>

                <div
                  *ngIf="submitError"
                  class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg"
                >
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente
                  novamente.
                </div>
              </form>
            </div>
          </div>

          <div class="md:w-1/2">
            <div
              class="bg-primary-600 dark:bg-primary-700 rounded-xl shadow-lg p-8"
            >
              <h3 class="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <lucide-icon [name]="mail" class="h-6 w-6"></lucide-icon>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h4 class="text-lg font-semibold">Email</h4>
                    <a
                      href="mailto:{{ email }}"
                      class="dark:text-white/80 dark:hover:text-white text-black/80 transition-colors duration-300 block w-full overflow-hidden text-ellipsis word-wrap break-words"
                      >{{ email }}</a
                    >
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <lucide-icon [name]="mapPin" class="h-6 w-6"></lucide-icon>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold">Localização</h4>
                    <p class="dark:text-white/80 text-black/80">Brasil</p>
                  </div>
                </div>

                <div class="pt-6 mt-6 border-t border-white/20">
                  <h4 class="text-lg font-semibold mb-4">Redes Sociais</h4>
                  <div class="flex space-x-4">
                    <a
                      href="https://github.com/devAndreNicolas"
                      target="_blank"
                      class="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <lucide-icon
                        [name]="gitHub"
                        class="h-6 w-6"
                      ></lucide-icon>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/devandrenicolas/"
                      class="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <lucide-icon
                        [name]="linkedin"
                        class="h-6 w-6"
                      ></lucide-icon>
                    </a>
                    <!-- <a href="#" class="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly loader = Loader;
  readonly gitHub = Github;
  readonly linkedin = Linkedin;
  readonly camera = Camera;
  readonly mail = Mail;
  readonly mapPin = MapPin;

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  email = 'devandrenicolas@gmail.com';

  private formspreeUrl = 'https://formspree.io/f/manawavk';

  constructor(@Inject(FormBuilder) private fb: FormBuilder, @Inject(HttpClient) private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field);
    return formControl
      ? formControl.invalid && (formControl.dirty || formControl.touched)
      : false;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post(this.formspreeUrl, this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();

        Object.keys(this.contactForm.controls).forEach((key) => {
          const control = this.contactForm.get(key);
          control?.setErrors(null);
        });
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = true;
      },
    });
  }
}

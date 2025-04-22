import { Component, Inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Entre em <span class="text-primary-600 dark:text-primary-400">Contato</span></h2>
          <div class="w-16 h-1 mx-auto bg-primary-600 dark:bg-primary-400 rounded-full mb-6"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo.
          </p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-10">
          <div class="md:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie uma mensagem</h3>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{'border-red-500 dark:border-red-500': isFieldInvalid('name')}"
                  />
                  <div *ngIf="isFieldInvalid('name')" class="text-red-500 text-sm mt-1">
                    Nome é obrigatório
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{'border-red-500 dark:border-red-500': isFieldInvalid('email')}"
                  />
                  <div *ngIf="isFieldInvalid('email')" class="text-red-500 text-sm mt-1">
                    Email válido é obrigatório
                  </div>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    [ngClass]="{'border-red-500 dark:border-red-500': isFieldInvalid('subject')}"
                  />
                  <div *ngIf="isFieldInvalid('subject')" class="text-red-500 text-sm mt-1">
                    Assunto é obrigatório
                  </div>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    formControlName="message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    [ngClass]="{'border-red-500 dark:border-red-500': isFieldInvalid('message')}"
                  ></textarea>
                  <div *ngIf="isFieldInvalid('message')" class="text-red-500 text-sm mt-1">
                    Mensagem é obrigatória
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-black dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    [disabled]="contactForm.invalid || isSubmitting"
                    [ngClass]="{'opacity-70 cursor-not-allowed': contactForm.invalid || isSubmitting}">
                    <span *ngIf="!isSubmitting">Enviar Mensagem</span>
                    <span *ngIf="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  </button>
                </div>
                
                <div *ngIf="submitSuccess" class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg">
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </div>
                
                <div *ngIf="submitError" class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg">
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                </div>
              </form>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <div class="bg-primary-600 dark:bg-primary-700 rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold">Email</h4>
                    <a href="mailto:{{email}}" class="dark:text-white/80 dark:hover:text-white text-black/80 transition-colors duration-300">{{email}}</a>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="bg-white/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold">Localização</h4>
                    <p class="dark:text-white/80 text-black/80">Brasil</p>
                  </div>
                </div>
                
                <div class="pt-6 mt-6 border-t border-white/20">
                  <h4 class="text-lg font-semibold mb-4">Redes Sociais</h4>
                  <div class="flex space-x-4">
                    <a href="https://github.com/devAndreNicolas" target="_blank" class="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/devandrenicolas/" class="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
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
  contactForm: FormGroup
  isSubmitting = false
  submitSuccess = false
  submitError = false
  email = 'contato@andrenicolas.dev';

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]],
    })
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field)
    return formControl ? formControl.invalid && (formControl.dirty || formControl.touched) : false
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key)
        control?.markAsTouched()
      })
      return
    }

    this.isSubmitting = true
    this.submitSuccess = false
    this.submitError = false

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false
      this.submitSuccess = true
      this.contactForm.reset()

      // Reset form state
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key)
        control?.setErrors(null)
      })
    }, 1500)
  }
}

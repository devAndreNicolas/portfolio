import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ThemeService } from "../../services/theme.service"
import { ScrollService } from "../../services/scroll.service"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div class="container mx-auto px-6 py-24 z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-10">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Olá, eu sou <span class="text-blue-600 dark:text-blue-400">André Nicolas</span>
            </h1>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Desenvolvedor Frontend
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Transformando ideias em soluções digitais com código limpo e design moderno.
              Especializado em criar experiências web sempre em busca de alta qualidade.
            </p>
            <div class="flex flex-wrap gap-4">
              <a 
                (click)="scroll.scrollToSection('projects', $event)"
                href="#projects" 
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Ver Projetos
              </a>
              <a 
                (click)="scroll.scrollToSection('contact', $event)"
                href="#contact" 
                class="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Contato
              </a>
            </div>
            <div class="mt-10 flex items-center space-x-4">
              <a href="https://github.com/devAndreNicolas" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/devandrenicolas/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <!-- <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a> -->
            </div>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
              <div class="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img 
                  src="https://github.com/devAndreNicolas/imagens/blob/main/FOTO%202.jpg?raw=true" 
                  alt="André Nicolas" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    
    :host-context(.dark) .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    }
  `,
  ],
})
export class HeroComponent {
  scroll = inject(ScrollService);
  themeService = inject(ThemeService)
}
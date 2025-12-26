import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ThemeService } from "../../services/theme.service"
import { ScrollService } from "../../services/scroll.service"
import { LucideAngularModule, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      <div class="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div class="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div class="container mx-auto px-6 py-24 z-10">
        <div class="flex flex-col md:flex-row items-center justify-between">
          
          <div class="md:w-1/2 lg:w-3/5 md:pr-12 text-center md:text-left order-2 md:order-1 mt-12 md:mt-0">
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              Olá, eu sou <span class="text-blue-600 dark:text-blue-400">André Nicolas</span>
            </h1>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300">
              Desenvolvedor Frontend
            </h2>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Transformando ideias em soluções digitais com código limpo e design moderno.
              Especializado em criar experiências web sempre em busca de alta qualidade.
            </p>
            
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                (click)="scroll.scrollToSection('projects', $event)"
                href="#projects" 
                class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300 font-semibold text-lg">
                Ver Projetos
              </a>
              <a 
                (click)="scroll.scrollToSection('contact', $event)"
                href="#contact" 
                class="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg transition-all duration-300 font-semibold text-lg">
                Contato
              </a>
            </div>

            <div class="mt-12 flex items-center justify-center md:justify-start space-x-6">
              <a href="https://github.com/devAndreNicolas" target="_blank" class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                <lucide-icon [name]="gitHub" class="h-8 w-8"></lucide-icon>
              </a>
              <a href="https://www.linkedin.com/in/devandrenicolas/" target="_blank" class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110">
                <lucide-icon [name]="linkedin" class="h-8 w-8"></lucide-icon>
              </a>
            </div>
          </div>

          <div class="md:w-1/2 lg:w-2/5 flex justify-center order-1 md:order-2">
            <div class="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
              
              <div class="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              <div class="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-3xl md:rounded-[60px] overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                
                <div *ngIf="isLoading" class="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                   <div class="w-full h-full animate-shimmer"></div>
                </div>

                <img 
                  src="https://github.com/devAndreNicolas/imagens/blob/main/FOTO%202.jpg?raw=true" 
                  alt="André Nicolas" 
                  class="w-full h-full object-cover object-top transition-all duration-1000 ease-out"
                  [ngClass]="{'opacity-0 scale-110': isLoading, 'opacity-100 scale-100': !isLoading}"
                  (load)="onImageLoad()"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
    }
    
    :host-context(.dark) .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    }

    .animate-shimmer {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite linear;
    }

    @keyframes shimmer {
      to { background-position: 200% 0; }
    }
  `],
})
export class HeroComponent {
  readonly gitHub = Github;
  readonly linkedin = Linkedin;
  
  scroll = inject(ScrollService);
  themeService = inject(ThemeService);

  isLoading = true;

  onImageLoad() {
    this.isLoading = false;
  }
}
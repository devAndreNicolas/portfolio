import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  BookOpen,
  Briefcase,
  Lightbulb,
  MapPin,
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-20 bg-white dark:bg-gray-800" id="about">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre <span class="text-blue-600 dark:text-blue-400">Mim</span>
          </h2>
          <div class="w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada, experiência e paixão pelo desenvolvimento web.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div class="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl">
                <div class="prose prose-lg dark:prose-invert max-w-none">
                  <p class="mb-4">
                    Sou um Desenvolvedor Frontend apaixonado por criar soluções digitais inovadoras e funcionais.
                    Com experiência em diversas tecnologias web modernas, busco sempre entregar projetos de alta
                    qualidade.
                  </p>
                  <p>
                    Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam
                    por trás das interfaces. Essa curiosidade evoluiu para uma paixão por resolver problemas complexos
                    através do código.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2">
            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="text-blue-600 dark:text-blue-400 mb-3">
                <lucide-icon [name]="BookOpen" class="h-8 w-8"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formação</h3>
              <p class="text-gray-600 dark:text-gray-300">Sistemas para Internet</p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="text-blue-600 dark:text-blue-400 mb-3">
                <lucide-icon [name]="Briefcase" class="h-8 w-8"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experiência</h3>
              <p class="text-gray-600 dark:text-gray-300">Desenvolvimento Frontend</p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="text-blue-600 dark:text-blue-400 mb-3">
                <lucide-icon [name]="Lightbulb" class="h-8 w-8"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interesses</h3>
              <p class="text-gray-600 dark:text-gray-300">Web, UI/UX</p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="text-blue-600 dark:text-blue-400 mb-3">
                <lucide-icon [name]="MapPin" class="h-8 w-8"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Localização</h3>
              <p class="text-gray-600 dark:text-gray-300">Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly BookOpen = BookOpen;
  readonly Briefcase = Briefcase;
  readonly Lightbulb = Lightbulb;
  readonly MapPin = MapPin;
}

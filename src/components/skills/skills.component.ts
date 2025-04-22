import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface Skill {
  name: string;
  level: number;
  iconPath: string;
  categories: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Minhas
            <span class="text-blue-600 dark:text-blue-400">Habilidades</span>
          </h2>
          <div
            class="w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded-full mb-6"
          ></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas com as quais trabalho para criar soluções
            eficientes e modernas.
          </p>
        </div>

        <div class="flex justify-center mb-10">
          <div class="allow-horizontal-scroll">
            <div class="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg min-w-max">
              <button
                *ngFor="let category of categories"
                (click)="setActiveCategory(category.value)"
                [ngClass]="{
                  'bg-white':
                    activeCategory === category.value &&
                    !themeService.isDarkMode(),
                  'dark:bg-gray-800':
                    activeCategory === category.value &&
                    themeService.isDarkMode(),
                  'text-blue-600': activeCategory === category.value,
                  'dark:text-blue-400': activeCategory === category.value,
                  'shadow-md': activeCategory === category.value
                }"
                class="px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 dark:text-gray-300"
              >
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            *ngFor="let skill of filteredSkills"
            class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <img
              [src]="skill.iconPath"
              alt="{{ skill.name }} icon"
              class="h-10 w-10 mb-4"
            />
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
            >
              {{ skill.name }}
            </h3>
            <div
              class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-1"
            >
              <div
                class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                [style.width.%]="skill.level"
              ></div>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ getSkillLevelLabel(skill.level) }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  themeService = inject(ThemeService);
  activeCategory: string = 'all';

  categories = [
    { value: 'all', label: 'Todas' },
    { value: 'language', label: 'Linguagens' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'tools', label: 'Ferramentas' },
  ];

  skills: Skill[] = [
    {
      name: 'Angular',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      categories: ['frontend'],
    },
    {
      name: 'TailwindCSS',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      categories: ['frontend'],
    },
    {
      name: 'BulmaCSS',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg',
      categories: ['frontend'],
    },
    {
      name: 'Bootstrap',
      level: 60,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      categories: ['frontend'],
    },
    {
      name: 'Json',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg',
      categories: ['tools'],
    },
    {
      name: 'TypeScript',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      categories: ['language'],
    },
    {
      name: 'Python',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      categories: ['language'],
    },
    {
      name: 'Pandas',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg',
      categories: ['tools'],
    },
    {
      name: 'Matplotlib',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg',
      categories: ['tools'],
    },
    {
      name: 'JavaScript',
      level: 60,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      categories: ['language', 'backend'],
    },
    {
      name: 'Nodejs',
      level: 70,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      categories: ['backend'],
    },
    {
      name: 'Expressjs',
      level: 70,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      categories: ['backend'],
    },
    {
      name: 'Java',
      level: 70,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
      categories: ['language'],
    },
    {
      name: 'Go',
      level: 50,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
      categories: ['language', 'backend'],
    },
    {
      name: 'Jasmine',
      level: 100,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original-wordmark.svg',
      categories: ['tools'],
    },
    {
      name: 'Karma',
      level: 100,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg',
      categories: ['tools'],
    },
    {
      name: 'Jest',
      level: 60,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      categories: ['tools'],
    },
    {
      name: 'JUnit',
      level: 60,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg',
      categories: ['tools'],
    },
    {
      name: 'Figma',
      level: 70,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      categories: ['tools'],
    },
    {
      name: 'Git',
      level: 80,
      iconPath:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
      categories: ['tools'],
    },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter((s) =>
      s.categories.includes(this.activeCategory)
    );
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getSkillLevelLabel(level: number): string {
    if (level >= 90) return 'Especialista';
    if (level >= 75) return 'Avançado';
    if (level >= 60) return 'Intermediário';
    return 'Básico';
  }
}

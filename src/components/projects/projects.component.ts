import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Meus <span class="text-blue-600 dark:text-blue-400">Projetos</span>
          </h2>
          <div
            class="w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded-full mb-6"
          ></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos recentes e projetos pessoais.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="group">
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="relative overflow-hidden">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <!-- Overlay para DESKTOP -->
                <div
                  class="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end"
                >
                  <div class="p-4 w-full">
                    <div class="flex space-x-3">
                      <a
                        [href]="project.githubUrl"
                        target="_blank"
                        class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 text-sm"
                      >
                        <lucide-icon
                          [name]="Github"
                          class="h-5 w-5"
                        ></lucide-icon>
                        <span>GitHub</span>
                      </a>
                      <a
                        *ngIf="project.demoUrl"
                        [href]="project.demoUrl"
                        target="_blank"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 text-sm"
                      >
                        <lucide-icon
                          [name]="ExternalLink"
                          class="h-5 w-5"
                        ></lucide-icon>
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Botões visíveis no MOBILE -->
                <div class="flex sm:hidden justify-start gap-3 mt-4 px-4">
                  <a
                    [href]="project.githubUrl"
                    target="_blank"
                    class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 text-sm"
                  >
                    <lucide-icon [name]="Github" class="h-5 w-5"></lucide-icon>
                    <span>GitHub</span>
                  </a>
                  <a
                    *ngIf="project.demoUrl"
                    [href]="project.demoUrl"
                    target="_blank"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 text-sm"
                  >
                    <lucide-icon
                      [name]="ExternalLink"
                      class="h-5 w-5"
                    ></lucide-icon>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
              <div class="p-6">
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let tag of project.tags"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="https://github.com/devAndreNicolas"
            target="_blank"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <lucide-icon [name]="Github" class="h-5 w-5"></lucide-icon>
            <span>Ver mais no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  projects: Project[] = [
    {
      id: 1,
      title: 'MSPA - Projeto em Desenvolvimento...',
      description:
        'Projeto importante e muito significativo para as empresas, em fase de desenvolvimento.',
      image:
        'https://www.mspa.com.br/wp-content/uploads/2023/03/MSPA-Logo-horizontal-300dpi.jpg',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Golang'],
      githubUrl: 'https://github.com/devAndreNicolas',
      demoUrl: 'https://www.mspa.com.br/',
    },
    {
      id: 2,
      title: 'Gerenciamento-Financeiro',
      description:
        'Este projeto é um sistema de gerenciamento financeiro que permite cadastrar pessoas e registrar suas transações financeiras (receitas e despesas).',
      image:
        'https://www.pngall.com/wp-content/uploads/2016/06/Finance-Free-PNG-Image.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'JSON'],
      githubUrl: 'https://github.com/devAndreNicolas/Gerenciamento-Financeiro',
    },
    {
      id: 3,
      title: 'DoTask - Em Desenvolvimento...',
      description:
        'O DoTask é o gerenciador de tarefas ideal, unindo simplicidade e eficiência.',
      image:
        'https://static.vecteezy.com/system/resources/previews/002/531/057/large_2x/task-list-illustration-vector.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQLite'],
      githubUrl: 'https://github.com/devAndreNicolas/DoTask',
    },
    {
      id: 4,
      title: 'Analisador de Desempenho de Vendas',
      description:
        'Projeto de análise de dados designado para analisar vendas e sale perfomance.',
      image:
        'https://www.itexchangeweb.com/blog/wp-content/uploads/2016/01/85_YW5hbHlzaXM.jpg',
      tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      githubUrl: 'https://github.com/devAndreNicolas/Analise-de-Vendas',
    },
    {
      id: 5,
      title: 'Bot Uncisal Restaurantes',
      description:
        'Este projeto consiste em um bot de Telegram desenvolvido em Node.js que permite aos usuários encontrar restaurantes próximos à UNCISAL (Maceió, Alagoas).',
      image:
        'https://th.bing.com/th/id/OIP.xxecBuEe_1m4IxOxrp4pBAAAAA?rs=1&pid=ImgDetMain',
      tags: ['Node.js', 'Axios', 'Geoapify', 'Telegraf'],
      githubUrl: 'https://github.com/devAndreNicolas/Bot-Uncisal-Restaurantes',
    },
    {
      id: 6,
      title: 'AndPlayer',
      description:
        'MP3 Player para músicas locais (armazenadas em pastas dentro do computador).',
      image:
        'https://cdn.pixabay.com/photo/2013/07/12/18/58/mp3-player-154090_640.png',
      tags: ['Python', 'Tkinter', 'CustomTkinter'],
      githubUrl: 'https://github.com/devAndreNicolas/AndPlayer',
    },
  ];
}
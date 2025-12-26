import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';

interface Project {
  id: number;
  title: string;
  description: string;
  logo: string; // Renomeado de image para logo para refletir a nova semântica
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
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meus <span class="text-blue-600 dark:text-blue-400">Projetos</span>
          </h2>
          <div class="w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções técnicas e projetos desenvolvidos com foco em performance e usabilidade.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects; trackBy: trackByProjectId" class="group">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
              
              <div class="flex items-center justify-between mb-6">
                <div class="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 p-3 flex items-center justify-center overflow-hidden">
                  <img
                    [src]="project.logo"
                    [alt]="project.title"
                    class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div class="flex space-x-2">
                  <a [href]="project.githubUrl" target="_blank" title="GitHub"
                     class="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <lucide-icon [name]="Github" class="h-5 w-5"></lucide-icon>
                  </a>
                  <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" title="Acessar Demo"
                     class="flex p-2 text-center text-blue-500 hover:text-blue-600 transition-colors gap-1">
                    <lucide-icon [name]="ExternalLink" class="h-5 w-5"></lucide-icon>
                    <span>Acessar</span>
                  </a>
                </div>
              </div>

              <div class="flex-grow">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-auto">
                <span
                  *ngFor="let tag of project.tags"
                  class="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;

  private readonly PROJECTS_DATA: Omit<Project, 'id'>[] = [
    {
      title: 'RendeCerto - Simulador de Investimentos',
      description: 'Simulador de rendimentos focado em facilitar a tomada de decisão financeira. O projeto permite calcular projeções de investimentos em renda fixa e variável com precisão, oferecendo uma interface intuitiva para visualização de juros compostos ao longo do tempo. Desenvolvido para ser uma ferramenta rápida e direta ao ponto para investidores.',
      logo: 'https://rendecerto.com.br/icon.png',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Fintech', 'UX Design', 'Simulação Financeira'],
      githubUrl: 'https://github.com/devAndreNicolas',
      demoUrl: 'https://rendecerto.com.br/',
    },
    {
      title: 'Compliance - MSPA',
      description: 'Plataforma desenvolvida para tornar o acesso à LGPD mais intuitivo e acessível. O portal reúne artigos, guias e materiais de compliance organizados em um layout otimizado para leitura, com modo claro/escuro e modo noturno, sumário automático e mecanismo de busca inteligente. Construído com foco em usabilidade e experiência do usuário, oferece uma navegação muito mais fluida e moderna do que as plataformas governamentais tradicionais.',
      logo: 'https://compliance.mspa.com.br/favicon.png',
      tags: ['Astro', 'UX/UI Design', 'Acessibilidade', 'Design Centrado no Usuário', 'Dark Mode', 'SEO', 'JavaScript'],
      githubUrl: 'https://github.com/devAndreNicolas',
      demoUrl: 'https://compliance.mspa.com.br/',
    },
    {
      title: 'Compass - MSPA',
      description: 'Sistema corporativo que visa implementar a LGPD nas empresas de forma rápida, guiada e acessível a diferentes perfis de usuários. O Compass oferece uma jornada completa de conformidade, com recursos de monitoramento, geração de relatórios e suporte a especialistas e leigos. A arquitetura foi projetada para escalabilidade e experiência contínua, integrando design centrado no usuário com tecnologias modernas.',
      logo: 'https://compass.mspa.com.br/logo-mspa.png',
      tags: ['Angular', 'RxJS', 'TypeScript', 'Tailwind CSS', 'Golang', 'Karma', 'Jasmine', 'Design Centrado no Usuário'],
      githubUrl: 'https://github.com/devAndreNicolas',
      demoUrl: 'https://compass.mspa.com.br/',
    },
    {
      title: 'Landing Page - MSPA',
      description: 'Landing page institucional da MSPA, criada com foco em conversão e posicionamento de autoridade digital. O projeto destaca a identidade visual da marca, os serviços e os diferenciais da empresa com uma arquitetura leve e altamente otimizada para SEO e performance. Desenvolvido com Astro, prioriza velocidade, clareza na comunicação e uma experiência visual moderna.',
      logo: 'https://compliance.mspa.com.br/favicon.png',
      tags: ['Astro', 'UX Design', 'Performance', 'SEO', 'Tailwind CSS', 'Design Responsivo', 'Copywriting Estratégico'],
      githubUrl: 'https://github.com/devAndreNicolas',
      demoUrl: 'https://mspa.com.br/',
    },
    {
      title: 'Simple Regex',
      description: 'Apesar da proposta genérica, o intuito deste projeto é se destacar na Usabilidade. Utilize e entenda expressões regulares de forma rápida, guiada e intuitiva.',
      logo: 'https://regex-simples.com/pt-BR/android-chrome-512x512.png',
      tags: ['SSG', 'SEO', 'Design Centrado No Usuário', 'Angular', 'TypeScript', 'SCSS', 'Karma', 'Jasmine'],
      githubUrl: 'https://github.com/devAndreNicolas/simple-regex',
      demoUrl: 'https://regex-simples.com/',
    },
    {
      title: 'IPFarol- Alargando Fronteiras',
      description: 'Este projeto visa arrecadar cotas para um propósito da Igreja Presbiteriana do Farol.',
      logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1WtJEXUFV4G0RwIFRdyPviNeroUhB5Ci76DbSTt0UoRBXNEyZdPd_PUfiWY4xZOHHIfJXKGPMR4iU82DX-ALxAvmVThR2t3EmfVn5ErXi6yrITW2_YITx2wuw_yrjZtzR83v_mkvPe1z1ybCJds1aAwW3Qk1gdx-lcgts5NzhjVt1_wovVyV8BqkR/w1200-h630-p-k-no-nu/IPFarol%20Logomarca.jpg',
      tags: ['Design Centrado No Usuário', 'Next', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MoisesE2/Termometro-ipf',
      demoUrl: 'https://ipbfarol.org',
    },
    {
      title: 'Bot Uncisal Restaurantes',
      description: 'Este projeto consiste em um bot de Telegram desenvolvido em Node.js que permite aos usuários encontrar restaurantes próximos à UNCISAL (Maceió, Alagoas).',
      logo: 'https://th.bing.com/th/id/OIP.xxecBuEe_1m4IxOxrp4pBAAAAA?rs=1&pid=ImgDetMain',
      tags: ['Node.js', 'Axios', 'Geoapify', 'Telegraf'],
      githubUrl: 'https://github.com/devAndreNicolas/Bot-Uncisal-Restaurantes',
    },
  ];

  projects: Project[] = this.PROJECTS_DATA.map((p, i) => ({ ...p, id: i + 1 }));

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
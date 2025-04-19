import { Component, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "../shared/header/header.component"
import { HeroComponent } from "../shared/hero/hero.component"
import { AboutComponent } from "../components/about/about.component"
import { ProjectsComponent } from "../components/projects/projects.component"
import { SkillsComponent } from "../components/skills/skills.component"
import { ContactComponent } from "../components/contact/contact.component"
import { FooterComponent } from "../shared/footer/footer.component"
import { ScrollToTopComponent } from "../shared/scroll-to-top/scroll-to-top.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <app-header />
      <main>
        <app-hero id="home" />
        <app-about id="about" />
        <app-projects id="projects" />
        <app-skills id="skills" />
        <app-contact id="contact" />
      </main>
      <app-footer />
      <app-scroll-to-top *ngIf="showScrollToTop" />
    </div>
  `,
})
export class AppComponent {
  title = 'Portfolio André Nicolas'
  showScrollToTop = false

  

  @HostListener("window:scroll")
  onWindowScroll() {
    this.showScrollToTop = window.scrollY > 300
  }
}
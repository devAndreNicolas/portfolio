import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ScrollService } from "../../services/scroll.service"
import { LucideAngularModule, ArrowUp } from 'lucide-angular';

@Component({
  selector: "app-scroll-to-top",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button 
      (click)="scroll.scrollToSection('home', $event)"  
      class="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg transition-colors duration-300 z-50 cursor-pointer">
      <lucide-icon [name]="arrowUp" class="w-6 h-6"></lucide-icon>
    </button>
  `,
})
export class ScrollToTopComponent {
  readonly arrowUp = ArrowUp;
  scroll = inject(ScrollService);
}
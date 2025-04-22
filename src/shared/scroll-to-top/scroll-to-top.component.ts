import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ScrollService } from "../../services/scroll.service"

@Component({
  selector: "app-scroll-to-top",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="scroll.scrollToSection('home', $event)"  
      class="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg transition-colors duration-300 z-50 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  `,
})
export class ScrollToTopComponent {
  scroll = inject(ScrollService);
}
import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class=" bg-gray-50 dark:bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {{ currentYear }} André Nicolas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
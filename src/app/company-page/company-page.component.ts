import { AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Images {
  'metrology': string[];
  'machine_vision': string[];
  'robotics': string[];
  'augmented_reality': string[];
}
@Component({
    selector: 'infotech-company-page',
    templateUrl: './company-page.component.html',
    styleUrl: './company-page.component.scss',
})
export class CompanyPageComponent implements AfterViewInit, OnInit {
    public bootstrap: any;
    public selectedCategory = 'metrology'; //* Created to host the selected index in the grid buttons
    public images: Images = {
      metrology: [
        'assets/images/Innovmetric.svg',
        'assets/images/lmi_technologies.png',
        'assets/images/Hexagon.svg',
        'assets/images/Faro.svg',
        'assets/images/Scantech.svg',
        'assets/images/QuickSurface.svg',
        'assets/images/Evixscan.svg',
        'assets/images/LK-metrology.svg',
    ],

    machine_vision: ['assets/images/Cognex.svg', 'assets/images/Keyence.svg', 'assets/images/FLIR.svg', 'assets/images/Basler.svg', 'assets/images/Allied_vision.png'],

    robotics: [
        'assets/images/Universal-Robots.svg',
        'assets/images/FANUC.svg',
        'assets/images/Aubo_Robotics.svg',
        'assets/images/ABB.svg',
        'assets/images/Vention.png',
        'assets/images/On-robot.svg',
    ],
    augmented_reality: ['assets/images/Christie.png', 'assets/images/Dassault_systemes.png'],
    }; // * Property to store the array of images
    public quotes: {[key: string]: string } = {
      "Royal Technologies":'Now we catch anything that is deviated. To summarize, it has improved speed, quality and overall performance',
      "DirecTV": 'Aside from helping us make a higher quality product, the support is the biggest benefit we have received from working with 3D Infotech, we now have a stable process and can buy the most cost-effective parts.',
      "GE Global Research": 'The digital age will provide manufacturing insights that will save money and transform how we work across supply chains.',
      "MTU Aero space": 'We reduced our turbine blade inspection time by more that 85% with <strong> PolyWorks | Inspector </strong>, while maintaining the accurancy and precision obtainer with our traditional CMM-based inspection techniques '
    } //* Property to store quotes text

    public selectedPartners: string[] = this.images['metrology']; //* Created to host the partner selected to show the images
    public quoteEntries: [string,string][] = []; //* Property used to get the quotes object keys;
    constructor(@Inject(PLATFORM_ID) private platformID: Object){}
    public showScrollButton = false
/* The `@HostListener('window:scroll', [])` decorator is used to listen for the scroll event on the
window. When the scroll event is triggered, the `onWindowScroll()` method is called. */



  public ngOnInit(): void {
    this.quoteEntries = Object.entries(this.quotes)
  }

  public ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformID)){
      this.initializeCarousel();
    }
  }

  /**
   * used to listen for the scroll event on the
  *window. When the scroll event is triggered, the `onWindowScroll()` method is called.
  */
  @HostListener('window:scroll', []) //* decorator to listen the scroll
    public onWindowScroll() {
      const yOffSet = window.pageYOffset;
      const scrollTopThreshold = 100;
      this.showScrollButton = yOffSet > scrollTopThreshold
    }

  /**
   * The scrollToTop function scrolls the window to the top of the page with a smooth animation.
   */
    public scrollToTop(): void {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }


  /**
   * @param category - The category parameter is of type keyof Images, which means it can only accept
   * keys that exist in the Images object.
   */
    public showPartnerImages(category: keyof Images): void {
        this.selectedCategory = category;
        this.selectedPartners = this.images[category];
    }

    /**
     * Initializes a carousel element with specific options using the Bootstrap library
     */
    public initializeCarousel(): void {
      const carouselElement = document.querySelector('#carouselQuotes');
      const carousel = new this.bootstrap.Carousel(carouselElement, {
        touch: true,
        cicle: false
      })
    }
}

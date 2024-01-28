import { Component } from '@angular/core';

@Component({
    selector: 'infotech-company-page',
    templateUrl: './company-page.component.html',
    styleUrl: './company-page.component.scss',
})
export class CompanyPageComponent {
    public selectedIndex = 0; //* Created to host the selected index in the grid buttons
    public selectedGoal: any; //* Created to host the goal selected to show the content
    public images = [
        {
            metrology: [
                'assets/images/innovmetric.svg',
                'assets/images/lmi_technologies.png',
                'assets/images/Hexagon.svg',
                'assets/images/Faro.svg',
                'assets/images/Scantech.svg',
                'assets/images/QuickSurface.svg',
                'assets/images/Evixscan.svg',
                'assets/images/LK-metrology.svg',
            ],
        },
        {
            machine_vision: ['assets/images/Cognex.svg', 'assets/images/Keyence.svg', 'assets/images/FLIR.svg', 'assets/images/Basler.svg', 'assets/images/Allied_vision.png'],
        },
        {
            robotics: [
                'assets/images/Universa_Robots.svg',
                'assets/images/FANUC.svg',
                'assets/images/Aubo_Robotics.svg',
                'assets/images/ABB.svg',
                'assets/images/Vention.png',
                'assets/images/On-robot.svg',
            ],
        },
        {
            augmented_reality: ['assets/images/Christie.png', 'assets/images/Dassault_systemes.png'],
        },
    ]; // * Property to store the array of images

    /**
     * * The function sets the selected goal based on the provided index.
     *
     * @param index - The index parameter is a number that represents the position of the goal
     * in the goals array that needs to be selected and displayed.
     */
    public showGoal(index: number): void {
        this.selectedIndex = index;
        this.selectedGoal = this.images;
        console.log(this.selectedGoal);
    }
}

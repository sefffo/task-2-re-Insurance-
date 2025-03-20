import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-form1',
  imports: [MatRadioModule,MatSidenavModule,MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule, MatButtonModule,
    ReactiveFormsModule,
    MatTableModule],  templateUrl: './main-form1.component.html',
  styleUrl: './main-form1.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })), // Initial state when hidden
      transition(':enter', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]

})
export class MainForm1Component {





  mainForm : FormGroup = new FormGroup({
    companyName: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),

    ratingAgency: new FormControl('', [Validators.required]),
    rating: new FormControl('',[Validators.required]),
    other: new FormControl(''),
    
   
    listedStatus: new FormControl('',[Validators.required]),
    
    Estate: new FormControl('',[Validators.required]),

    notes: new FormControl(''),

  });


  
  agencies: any[] = [
    { name: 'Rating Agency 1', rating: ['A++', 'A', 'A-'] },
    { name: 'Rating Agency 2', rating: ['B++', 'B', 'B-'] },
    { name: 'Rating Agency 3', rating: [ 'C++', 'C', 'C-'] },
    { name: 'Rating Agency 3', rating: [ 'E++', 'E', 'E-'] },
    { name: 'Other', rating: [] }, // Fixed "Other" option
   
  ];

  //? da sho8l crud 3ady emlt array ramit fehom el data bra3t el agencies  

  avaliableRatings: string[] = [];
  //? 7tit fehom el selction bshkl dynamic 3n tarik el function findSelection 


  isOtherSelected(): boolean {
    return this.mainForm.get('ratingAgency')?.value === 'Other';
  }


  findSelection() // 3 asas nateg el selection bbd2 a7ot kim el ratings el fe el select el tany 
  {



    // mommken tt3ml b if condition 3ady bs bma enha array nst5dm el asra3 w el ashal fe al access
      let agencyName=this.mainForm.get('ratingAgency')?.value;
      let selectedAgency = null;

      for (let i = 0; i < this.agencies.length; i++) {
        if (this.agencies[i].name === agencyName) {
          selectedAgency = this.agencies[i];
          break;
        }
        
      }

      if (selectedAgency) {
        if (selectedAgency.name === 'Other') {
          this.avaliableRatings = [];
        } else {
          this.avaliableRatings = selectedAgency.rating;
        }
      } else {
        this.avaliableRatings = [];
      }
  
      this.mainForm.get('rating')?.setValue('');
      this.mainForm.get('other')?.setValue('');
      
      
      // reset on change leeh ?? //! 3shn bnst5dm (selectionchange)="findSelection()"
    //!-------------------------------------------------------- 
    // const selectedAgency = this.agencies.find(
    //   //! mskt el control w 3mlt find feha w nateg el find hwa en lw lawit el value el fe el select hya hya el value 
    //   //! hrg3 
    //   /*
    //   👉The output will be: if its found a match ex
    //       { name: 'Agency 1', ratings: ['A+', 'A', 'A-'] }
    //    */ 
    //   (ratingAgency)=> ratingAgency.name === this.mainForm.get('ratingAgency')?.value
    // )
    // this.avaliableRatings = selectedAgency ? selectedAgency.rating : [];

    // this.mainForm.get('rating')?.setValue('');
    
  }


  
  isListed(): boolean {
    return this.mainForm.get('listedStatus')?.value === 'listed';
  }

  


  mainSubmit()
  {
    console.log(this.mainForm.value);
  }











}






 /*

 import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss',
})
export class RatingFormComponent {
  // FormGroup for Angular Material Selects
  ratingForm = new FormGroup({
    agency: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required])
  });

  // Array of Objects for Agencies & Ratings
  agencies = [
    {
      name: 'Agency 1',
      ratings: ['A+', 'A', 'A-'],
      alternateRatings: ['B+', 'B', 'B-']
    },
    {
      name: 'Agency 2',
      ratings: ['AAA', 'AA', 'A'],
      alternateRatings: ['BBB', 'BB', 'B']
    },
    {
      name: 'Agency 3',
      ratings: ['C+', 'C', 'C-'],
      alternateRatings: ['D+', 'D', 'D-']
    }
  ];

  // Dynamic Ratings Based on Selected Agency
  availableRatings: string[] = [];

  // Handle Agency Selection Change
  onAgencyChange() {
    const selectedAgency = this.agencies.find(
      (agency) => agency.name === this.ratingForm.get('agency')?.value
    );

    if (selectedAgency) {
      // Show either `ratings` or `alternateRatings` based on logic
      this.availableRatings = selectedAgency.ratings; // Change this logic as needed
    } else {
      this.availableRatings = [];
    }

    // Reset rating selection
    this.ratingForm.get('rating')?.setValue('');
  }
}

  */
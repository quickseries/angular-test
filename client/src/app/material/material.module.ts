import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatStepperModule,
  MatIconModule,
  MatToolbarModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatChipsModule,
  MatProgressBarModule,
  MatDividerModule,
  MatTableModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTableModule,
    CdkTableModule
  ],
  declarations: [

  ],
})
export class MaterialModule { }

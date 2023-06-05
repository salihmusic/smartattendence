import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from 'src/app/service/sheet.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css'],
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SheetService,
    private router: Router
  ) {
    this.googleSheetForm = this.formBuilder.group({
      Date: formBuilder.control(''),
      Time: formBuilder.control(''),
      ID: formBuilder.control(''),
      FirstName: formBuilder.control(''),
      LastName: formBuilder.control(''),
    });
  }

  ngOnInit() {}

  public onSubmit() {
    console.log(this.googleSheetForm.value);

    const Date = this.googleSheetForm.value.Date;
    const Time = this.googleSheetForm.value.Time;
    const ID= this.googleSheetForm.value.ID;
    const FirstName = this.googleSheetForm.value.FirstName;
    const LastName = this.googleSheetForm.value.LastName;

    this.service.createSheet(Date, Time, ID, FirstName, LastName).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/list-data']);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SheetService } from 'src/app/service/sheet.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  updateSheetForm!: FormGroup;
  id!: number;
  data!: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: SheetService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateSheetForm = this.formBuilder.group({
      Date: ['', Validators.required],
      Time: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getSheetDataById(this.id).subscribe((res: any) => {
        console.log(res[0]);
        this.data = res[0];
        this.updateSheetForm.get('Date')?.setValue(this.data.Date);
        this.updateSheetForm.get('Time')?.setValue(this.data.Time);
        this.updateSheetForm.get('FirstName')?.setValue(this.data.FirstName);
        this.updateSheetForm.get('LastName')?.setValue(this.data.LastName);
      });
    });
  }

  onSubmit() {
    const { value } = this.updateSheetForm;
    console.log('value', value);

    const Date = this.updateSheetForm.value.Date;
    const Time = this.updateSheetForm.value.Time;
    const FirstName = this.updateSheetForm.value.FirstName;
    const LastName = this.updateSheetForm.value.LastName;

    this.service
      .updateSheet(this.id, Date, Time, FirstName, LastName)
      .subscribe({
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

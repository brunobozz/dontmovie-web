import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BackendApiService } from 'src/app/services/backend-api/backend-api.service';

@Component({
  selector: 'app-cmd-games-form',
  templateUrl: './cmd-games-form.component.html',
  styleUrls: ['./cmd-games-form.component.scss'],
})
export class CmdGamesFormComponent implements OnInit {
  public gameForm = new FormGroup({
    title: new FormControl('', Validators.required),
    platform: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
    rom: new FormControl('', Validators.required),
  });

  constructor(
    private apiService: BackendApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public validaCampo(campo: any) {
    return (
      this.gameForm.get(campo)?.invalid && this.gameForm.get(campo)?.touched
    );
  }

  async submitForm() {
    if (this.gameForm.valid) {
      this.postForm();
    } else {
      this.toastr.error('Campos inválidos');
    }
  }

  private postForm() {
    this.apiService.postData('/games', this.gameForm.value).subscribe(() => {
      this.toastr.success('Form foi');
    });
  }
}

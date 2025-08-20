import {Component, inject, OnInit} from '@angular/core';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import {EditorComponent, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {MatInputModule} from '@angular/material/input';
import {MatTextColumn} from '@angular/material/table';
import {MatButton} from '@angular/material/button';

@Component({
    selector: 'app-add-flashcard',
    imports: [
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        EditorComponent,
        MatInputModule,
        MatTextColumn,
        MatButton
    ],
    templateUrl: './add-flashcard.component.html',
    styleUrl: './add-flashcard.component.scss',
    providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
    ]
})
export class AddFlashcardComponent implements OnInit {

  #formBuilder: FormBuilder = inject(FormBuilder);

  public form: UntypedFormGroup = this.#formBuilder.group({
    deck: this.#formBuilder.control(null, [Validators.required]),
    front: this.#formBuilder.control(null, [Validators.required]),
    back: this.#formBuilder.control(null, [Validators.required]),
  });
  public decks: [{ key: string | number, value: string }] = [
    {
      key: 1,
      value: 'HTML/CSS'
    }
  ];
  public init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    base_url: '/tinymce',
    suffix: '.min',
    skin: 'oxide-dark',
    language: 'pl',
    language_url: "/tinymce/langs/pl.js"
  }

  ngOnInit() {

  }

  public sendForm() {
    console.log(this.form);
    return;
  }
}

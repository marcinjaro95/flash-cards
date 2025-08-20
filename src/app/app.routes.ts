import { Routes } from '@angular/router';
import {DecksListComponent} from './decks/decks-list/decks-list.component';
import {AddFlashcardComponent} from './flashcards/add-flashcard/add-flashcard.component';
import {FlashcardComponent} from './flashcards/flashcard/flashcard.component';

export const routes: Routes = [
  {
    path: '',
    component: DecksListComponent
  },
  {
    path: 'add',
    component: AddFlashcardComponent
  },
  {
    path: 'browse',
    component: FlashcardComponent
  },
  {
    path: 'login',
    component: DecksListComponent
  }
];

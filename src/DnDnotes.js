import React, { useEffect } from 'react';
import { useResetRecoilState, userRecoilValue } from 'recoil';
import NoteForm from './Components/noteForm';
import {
  inputs,
} from './atoms';

function DnDnotes() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am the DnD note taker
        </p>
      </header>
      <NoteForm/>
    </div>
  );
}

export default DnDnotes;

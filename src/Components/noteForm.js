import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  titleState,
  bodyState,
} from '../atoms';

function NoteForm() {
    const [
      title, 
      setTitle,
    ] = useRecoilState(titleState);

    const [
      body, 
      setBody,
    ] = useRecoilState(bodyState);

    const onChangeTitle = (event) => {
      setTitle(event.target.value);
    }

    const onChangeBody = (event) => {
      setBody(event.target.value);
    }
    
  return (
    <div>
      <label>Note Title</label>
      <br/>
      <input type='text' value={title} onChange={onChangeTitle}/>
      <br/>
      <label>Note Body</label>
        <br/>
      <textarea value={body} onChange={onChangeBody}/>
      <br/>
    </div>
  );
}

export default NoteForm;

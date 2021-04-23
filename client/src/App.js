import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <div className='movie-container'>
        <h2>Title</h2>
        <div>
          Content
        </div>
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='Title' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button">Post</button>
    </div>
  );
}

export default App;

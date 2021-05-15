import {useState} from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function App() {
  const [twitterContent, setTwitterContent] = useState({
    title: '',
    content: '',
  });

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
      setTwitterContent({
        ...twitterContent,
        [name]: value
      })
      console.log(twitterContent);
  };


  return (
    <div className="App">
      <h1>Twitter Clone</h1>
      <div className='twitter-container'>
        {viewContent.map(element => 
          <div>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input 
          className="title-input" 
          type='text' 
          placeholder='Title' 
          onChange={getValue}
          name='title' />
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
            setTwitterContent({
              ...twitterContent,
              content: data
            })
            console.log(twitterContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button"
      onClick={() => {
        console.log(viewContent);
        setViewContent(viewContent.concat({...twitterContent}));
      }}>Post</button>
    </div>
  );
}

export default App;

import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/theme-tomorrow';
import "ace-builds/src-noconflict/ext-language_tools"

const Editor = ({ fields = [] }) => {
  const customCompleter = {
    getCompletions: (editor, session, pos, prefix, cb) => {
      let _fields = []
      if (prefix.includes('$')) {
        _fields = _fields.concat(fields);
      }
      cb(null, _fields.map(f => {
        return {
          name: f,
          value: '$' + `{{${f}}}`,
          score: 1,
          meta: 'fields'
        };
      }));
    }
  };

  return (
    <AceEditor
      mode="handlebars"
      theme="tomorrow"
      name="details_editor"
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={false}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: [customCompleter],
        enableLiveAutocompletion: true
      }}
    />
  );
};

export default Editor

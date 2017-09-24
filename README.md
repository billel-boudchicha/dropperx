# `<Dropperx/>`
Wrap any function-as-child component to turn it into a [React Drag-n-Drop](https://www.npmjs.com/package/react-dnd) file-reader.

#### Usage:
```javascript
import Dropperx from 'dropperx'

// inside component tree
<Dropperx
  onDrop={files => this.setState({ files })}
  filter={file => file.size < 10000 && file.type === 'image/png')}
>
  {
    ({ isOver, canDrop, files, history }) => (
      <Overlay
        isOver={isOver || canDrop}
        title={`Drop your files here to import ${isOver ? '✋' : '✊'}`}
      >
        <Upload filesContents={files.map(file => file.content)} />
        {
          history.map(bundle => (
            <li>bundle</li>
          ))
        }
      </Overlay>
    )
  }
</Dropperx>
```

## Props
- `onDrop(files)`: Callback called with an array of files dropped. Get the contents of the file from `files[0].content`
- `filter`: Function passed to `files.filter(filter)`. Lets you control which files are read.

## Child Callback Function
#### Props
- `isOver`: Boolean that says whether cursor is over the target
- `canOver`: Boolean that states if able to drop on the window. This is true if the cursor is holding files
- `files`: Array of files that were last dropped. `null` if nothing has been dropped.
- `history`: Array of past dropped contents. `history[0]` contains the array of files last dropped.
- `__monitor__`: Escape hatch to access the React-DnD monitor object
const editorStyle = {
    padding: 20,
    border: "1px solid #f1f1f1",
    borderRadius: 10,
    minHeight: 369,
    maxHeight: 600,
    overflow: 'auto',
    background: 'white'
} as React.CSSProperties

const toolbarStyle = {
    border: "1px solid #f1f1f1",
    borderRadius: 10
} as React.CSSProperties

export default {
    toolbar: {
        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
        emoji: {
            //icon: emoji,
            // className: undefined,
            // component: undefined,
            // popupClassName: undefined,
            emojis: [
                '😀', '🥰'

            ]
        },
    },
    editorStyle,
    toolbarStyle

}

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>こんにちは、Tiptap!</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-base focus:outline-none min-h-[200px] w-full bg-white text-black rounded-lg',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="border rounded-lg mb-2 p-2 bg-gray-100">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('bold') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          太字
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('italic') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          斜体
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('strike') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          取消線
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          見出し
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('bulletList') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          箇条書き
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1.5 rounded mr-2 border text-gray-700 hover:bg-gray-200 ${
            editor.isActive('orderedList') ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white border-gray-300'
          }`}
        >
          番号リスト
        </button>
      </div>
      <div className="border rounded-lg">
        <EditorContent editor={editor} className="bg-white p-4" />
      </div>
    </div>
  )
}

export default TiptapEditor
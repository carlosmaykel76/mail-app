import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const KendoEditor = () => {
  return (
    <Editor
      tools={[
        [Bold, Italic, Underline, Strikethrough],
        //[Subscript, Superscript],
        [AlignLeft, AlignCenter, AlignRight, AlignJustify],
        [Indent, Outdent],
        [OrderedList, UnorderedList],
        [DeleteRow, DeleteColumn, DeleteTable],
        [MergeCells, SplitCell],
        [InsertTable],
        [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
        FontSize,
        FontName,
        FormatBlock,
        [Undo, Redo],
        [Link, Unlink, InsertImage, ViewHtml],
      ]}
      contentStyle={{ height: 200 }}
      //defaultContent={content}
    />
  );
};

export default KendoEditor;

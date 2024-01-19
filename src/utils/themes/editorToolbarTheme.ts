import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const editorToolbarTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    backgroundImage: '',
    foreground: '#424242',
    caret: '#000000',
    selection: '#f5f5f5',
    selectionMatch: '#f5f5f5',
    lineHighlight: 'transparent',
    gutterBackground: 'transparent',
    gutterForeground: '#000000',
    gutterBorder: 'transparent',
    fontFamily: 'Montserrat',
  },
  styles: [
    { tag: t.comment, color: '#2d2d2d' },
    { tag: t.variableName, color: '#004EC4' },
    { tag: [t.string, t.special(t.brace)], color: '#757575' },
    { tag: t.number, color: '#757575' },
    { tag: t.bool, color: '#757575' },
    { tag: t.null, color: '#757575' },
    { tag: t.keyword, color: '#F48400' },
    { tag: t.operator, color: '#757575' },
    { tag: t.className, color: '#757575' },
    { tag: t.definition(t.typeName), color: '#757575' },
    { tag: t.typeName, color: '#757575' },
    { tag: t.angleBracket, color: '#757575' },
    { tag: t.tagName, color: '#757575' },
    { tag: t.attributeName, color: '#757575' },
  ],
});

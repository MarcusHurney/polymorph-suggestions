import { formFieldThemeAPI } from './formField';
import { inputThemeAPI } from './input';
import { checkboxThemeAPI } from './checkbox';

// the remaining theme api's will be filled in
// once all components have been ported over to this pattern
export const rootThemeAPI = {
  formField: { ...formFieldThemeAPI },
  input: { ...inputThemeAPI },
  checkbox: { ...checkboxThemeAPI },
  textArea: {},
  button: {},
  bubble: {},
  toolTip: {},
  autoComplete: {},
  modal: {},
  numericInput: {},
  options: {},
  select: {}
};

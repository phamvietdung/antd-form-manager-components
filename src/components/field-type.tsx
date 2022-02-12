/**
 * @name IFieldType
 * @property {string} input - simple text
 * @property {string} password
 * @property {string} datetime
 * @property {string} datetimeRange
 * @property {string} datetimeRange
 * @property {string} time
 * @property {string} number
 * @property {string} textarea
 * @property {string} select
 * @property {string} heading
 * @property {string} radio
 * @property {string} checkbox
 * @property {string} selectMultiple
 * @property {string} hidden
 * @property {string} multipleValue
 *
 */
export type IFieldType = 'input' | 'password' | 'textarea' | 'autoComplete' | 'editor'
| 'datetime' | 'datetimeRange' | 'time' | 'datetime-group'
| 'number'  | 'money'
| 'select' | 'select2' | 'selectMultiple'
| 'heading' 
| 'radio' 
| 'checkbox' 
| 'confirm'  | 'hidden' | 'multiple-value' | 'tags' ;


import { TemplateFilter } from '@codebalancers/codegen/cb-codegen/app/template-filter';
import { TsTypeFilter } from './ts-type.filter';

export const filterIndex: TemplateFilter[] = [
  new TsTypeFilter()
];

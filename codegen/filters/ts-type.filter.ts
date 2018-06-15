import { TemplateFilter } from '@codebalancers/codegen/cb-codegen/app/template-filter';
import { TypeMappingUtil } from './type-mapping.util';
import { Environment } from 'nunjucks';

/**
 * Translate Java types into matching typescript/javascript types.
 */
export class TsTypeFilter implements TemplateFilter {

  public registerFilter(env: Environment): void {
    console.log('addTsTypeFilter');
    env.addFilter('tsType', (str) => TypeMappingUtil.mapType(str) || str);
  }
}

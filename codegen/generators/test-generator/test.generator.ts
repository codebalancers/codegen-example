import { TestModel } from './test.model';
import * as _path from 'path';
import { Artifact } from '@codebalancers/codegen/cb-codegen/app/generator/artifact';
import { GeneratorUtils } from '@codebalancers/codegen/cb-codegen/app/utils/generator.utils';
import * as _ from 'lodash';
import { Generator } from '@codebalancers/codegen/cb-codegen/templates/generator';

export class TestGenerator implements Generator {
  public generate(model: TestModel, targetBasePath: string): Artifact {
    const templateFileName = _path.join(__dirname, 'test.txt.tpl');
    const destinationFile = _path.join(targetBasePath, model.name, _.kebabCase(model.name) + '.txt');

    GeneratorUtils.generateAndWrite(templateFileName, destinationFile, model);

    return new Artifact(destinationFile, 3, false);
  }
}

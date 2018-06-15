import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { ModelProcessor } from '@codebalancers/codegen/cb-codegen/model-processor/model-processor';
import { Model } from '../../../schema/v1/model';
import { Artifact } from '@codebalancers/codegen/cb-codegen/app/generator/artifact';
import { TestModel } from '../../generators/test-generator/test.model';
import { TestGenerator } from '../../generators/test-generator/test.generator';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class TestModelProcessor implements ModelProcessor {
  public type = 'test';

  private testGenerator = new TestGenerator();

  process(model: Model, targetBasePath: string, config: {} | null | undefined): Observable<Artifact>[] {
    console.log('process', this.type);

    const o = Observable.of(_.cloneDeep(model))
      .map(m => this.mapTestModel(m))
      .map(mapTestModel => this.testGenerator.generate(mapTestModel, targetBasePath));

    return [ o ];
  }

  private mapTestModel(m: Model): TestModel {
    return {
      name: m.serviceName,
      package: m.javaPackage
    }
  }
}

import { ModelProcessor } from '@codebalancers/codegen/cb-codegen/model-processor/model-processor';
import { TestModelProcessor } from './test-mp/test.model-processor';

// -- all processors that shall be available must be registered here
export const processorIndex: ModelProcessor[] = [
  new TestModelProcessor()
];

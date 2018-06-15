import { LangUtils } from '@codebalancers/commons';

export class TypeMappingUtil {
  public static typeMapping: { [ idx: string ]: string } = {
    'String': 'string',
    'Integer': 'number',
    'Double': 'number',
    'Float': 'number',
    'Boolean': 'boolean',
    'BigInteger': 'number',
    'BigDecimal': 'number',
    'int': 'number',
    'double': 'number',
    'float': 'number',
    'boolean': 'boolean',
    'Void': 'void'
  };

  public static mapType(type: string): string {
    if (type.startsWith('List<')) {
      return this.mapArrayType(type);
    }

    return this.typeMapping[ type ];
  }

  private static mapArrayType(type: string): string {
    const origType = this.getGenericBaseType(type);

    const tsType = this.typeMapping[ origType ];
    if (LangUtils.isDefined(tsType)) {
      return tsType + '[]';
    }

    return origType + '[]';
  }

  private static getGenericBaseType(type: string): string {
    const myRe = new RegExp('\\w*<(\\w*\\.)*(\\w+)>');

    const res = myRe.exec(type);
    if (LangUtils.isUndefined(res)) {
      return null;
    }

    return res[ 2 ];
  }

  public static getImportType(type: string): string {
    const genericType = this.getGenericBaseType(type);

    if (LangUtils.isDefined(genericType)) {
      type = genericType;
    }

    const t = this.typeMapping[ type ];

    // no import for native type required
    if (LangUtils.isDefined(t)) {
      return null;
    }

    return type;
  }
}

/*! SES sources included by LavaMoat. Do not optimize or minify. */
;
// ses@1.15.0
(functors => options => {
  'use strict';

  const {
    Map,
    Object,
    ReferenceError,
    Reflect,
    TypeError,
  } = globalThis;
  const {
    create,
    defineProperties,
    defineProperty,
    freeze,
    fromEntries,
    getOwnPropertyDescriptors,
    getOwnPropertyNames,
    keys,
  } = Object;
  const { get, set } = Reflect;

  const {
  } = options || {};



  const cell = (name, value = undefined) => {
    const observers = [];
    return freeze({
      get: freeze(() => {
        return value;
      }),
      set: freeze((newValue) => {
        value = newValue;
        for (const observe of observers) {
          observe(value);
        }
      }),
      observe: freeze((observe) => {
        observers.push(observe);
        observe(value);
      }),
      enumerable: true,
    });
  };

  const cells = [
    {
      globalThis: cell("globalThis"),
      Array: cell("Array"),
      ArrayBuffer: cell("ArrayBuffer"),
      Date: cell("Date"),
      FinalizationRegistry: cell("FinalizationRegistry"),
      Float32Array: cell("Float32Array"),
      JSON: cell("JSON"),
      Map: cell("Map"),
      Math: cell("Math"),
      Number: cell("Number"),
      Object: cell("Object"),
      Promise: cell("Promise"),
      Proxy: cell("Proxy"),
      Reflect: cell("Reflect"),
      FERAL_REG_EXP: cell("FERAL_REG_EXP"),
      Set: cell("Set"),
      String: cell("String"),
      Symbol: cell("Symbol"),
      Uint8Array: cell("Uint8Array"),
      WeakMap: cell("WeakMap"),
      WeakSet: cell("WeakSet"),
      FERAL_ERROR: cell("FERAL_ERROR"),
      RangeError: cell("RangeError"),
      ReferenceError: cell("ReferenceError"),
      SyntaxError: cell("SyntaxError"),
      TypeError: cell("TypeError"),
      AggregateError: cell("AggregateError"),
      assign: cell("assign"),
      create: cell("create"),
      defineProperties: cell("defineProperties"),
      entries: cell("entries"),
      freeze: cell("freeze"),
      getOwnPropertyDescriptor: cell("getOwnPropertyDescriptor"),
      getOwnPropertyDescriptors: cell("getOwnPropertyDescriptors"),
      getOwnPropertyNames: cell("getOwnPropertyNames"),
      getPrototypeOf: cell("getPrototypeOf"),
      is: cell("is"),
      isFrozen: cell("isFrozen"),
      isSealed: cell("isSealed"),
      isExtensible: cell("isExtensible"),
      keys: cell("keys"),
      objectPrototype: cell("objectPrototype"),
      seal: cell("seal"),
      preventExtensions: cell("preventExtensions"),
      setPrototypeOf: cell("setPrototypeOf"),
      values: cell("values"),
      fromEntries: cell("fromEntries"),
      speciesSymbol: cell("speciesSymbol"),
      toStringTagSymbol: cell("toStringTagSymbol"),
      iteratorSymbol: cell("iteratorSymbol"),
      matchAllSymbol: cell("matchAllSymbol"),
      replaceSymbol: cell("replaceSymbol"),
      unscopablesSymbol: cell("unscopablesSymbol"),
      symbolKeyFor: cell("symbolKeyFor"),
      symbolFor: cell("symbolFor"),
      isInteger: cell("isInteger"),
      stringifyJson: cell("stringifyJson"),
      defineProperty: cell("defineProperty"),
      apply: cell("apply"),
      construct: cell("construct"),
      reflectGet: cell("reflectGet"),
      reflectGetOwnPropertyDescriptor: cell("reflectGetOwnPropertyDescriptor"),
      reflectHas: cell("reflectHas"),
      reflectIsExtensible: cell("reflectIsExtensible"),
      ownKeys: cell("ownKeys"),
      reflectPreventExtensions: cell("reflectPreventExtensions"),
      reflectSet: cell("reflectSet"),
      isArray: cell("isArray"),
      arrayPrototype: cell("arrayPrototype"),
      arrayBufferPrototype: cell("arrayBufferPrototype"),
      mapPrototype: cell("mapPrototype"),
      proxyRevocable: cell("proxyRevocable"),
      regexpPrototype: cell("regexpPrototype"),
      setPrototype: cell("setPrototype"),
      stringPrototype: cell("stringPrototype"),
      weakmapPrototype: cell("weakmapPrototype"),
      weaksetPrototype: cell("weaksetPrototype"),
      functionPrototype: cell("functionPrototype"),
      promisePrototype: cell("promisePrototype"),
      generatorPrototype: cell("generatorPrototype"),
      iteratorPrototype: cell("iteratorPrototype"),
      typedArrayPrototype: cell("typedArrayPrototype"),
      uncurryThis: cell("uncurryThis"),
      hasOwn: cell("hasOwn"),
      arrayFilter: cell("arrayFilter"),
      arrayForEach: cell("arrayForEach"),
      arrayIncludes: cell("arrayIncludes"),
      arrayJoin: cell("arrayJoin"),
      arrayMap: cell("arrayMap"),
      arrayFlatMap: cell("arrayFlatMap"),
      arrayPop: cell("arrayPop"),
      arrayPush: cell("arrayPush"),
      arraySlice: cell("arraySlice"),
      arraySome: cell("arraySome"),
      arraySort: cell("arraySort"),
      iterateArray: cell("iterateArray"),
      arrayBufferSlice: cell("arrayBufferSlice"),
      arrayBufferGetByteLength: cell("arrayBufferGetByteLength"),
      typedArraySet: cell("typedArraySet"),
      mapSet: cell("mapSet"),
      mapGet: cell("mapGet"),
      mapHas: cell("mapHas"),
      mapDelete: cell("mapDelete"),
      mapEntries: cell("mapEntries"),
      iterateMap: cell("iterateMap"),
      setAdd: cell("setAdd"),
      setDelete: cell("setDelete"),
      setForEach: cell("setForEach"),
      setHas: cell("setHas"),
      iterateSet: cell("iterateSet"),
      regexpExec: cell("regexpExec"),
      regexpReplace: cell("regexpReplace"),
      matchAllRegExp: cell("matchAllRegExp"),
      sealRegexp: cell("sealRegexp"),
      stringEndsWith: cell("stringEndsWith"),
      stringIncludes: cell("stringIncludes"),
      stringIndexOf: cell("stringIndexOf"),
      stringMatch: cell("stringMatch"),
      stringSearch: cell("stringSearch"),
      stringSlice: cell("stringSlice"),
      stringSplit: cell("stringSplit"),
      stringStartsWith: cell("stringStartsWith"),
      iterateString: cell("iterateString"),
      weakmapDelete: cell("weakmapDelete"),
      weakmapGet: cell("weakmapGet"),
      weakmapHas: cell("weakmapHas"),
      weakmapSet: cell("weakmapSet"),
      weaksetAdd: cell("weaksetAdd"),
      weaksetHas: cell("weaksetHas"),
      functionToString: cell("functionToString"),
      functionBind: cell("functionBind"),
      generatorNext: cell("generatorNext"),
      generatorThrow: cell("generatorThrow"),
      promiseAll: cell("promiseAll"),
      promiseCatch: cell("promiseCatch"),
      promiseThen: cell("promiseThen"),
      finalizationRegistryRegister: cell("finalizationRegistryRegister"),
      finalizationRegistryUnregister: cell("finalizationRegistryUnregister"),
      isPrimitive: cell("isPrimitive"),
      isError: cell("isError"),
      identity: cell("identity"),
      FERAL_EVAL: cell("FERAL_EVAL"),
      FERAL_FUNCTION: cell("FERAL_FUNCTION"),
      noEvalEvaluate: cell("noEvalEvaluate"),
      FERAL_STACK_GETTER: cell("FERAL_STACK_GETTER"),
      FERAL_STACK_SETTER: cell("FERAL_STACK_SETTER"),
      AsyncGeneratorFunctionInstance: cell("AsyncGeneratorFunctionInstance"),
    },
    {
    },
    {
      makeEnvironmentCaptor: cell("makeEnvironmentCaptor"),
      getEnvironmentOption: cell("getEnvironmentOption"),
      getEnvironmentOptionsList: cell("getEnvironmentOptionsList"),
      environmentOptionsListHas: cell("environmentOptionsListHas"),
    },
    {
    },
    {
      isBufferImmutable: cell("isBufferImmutable"),
      sliceBufferToImmutable: cell("sliceBufferToImmutable"),
      optTransferBufferToImmutable: cell("optTransferBufferToImmutable"),
    },
    {
    },
    {
    },
    {
      an: cell("an"),
      bestEffortStringify: cell("bestEffortStringify"),
      enJoin: cell("enJoin"),
    },
    {
    },
    {
    },
    {
      makeCacheMapKit: cell("makeCacheMapKit"),
    },
    {
      makeCacheMapKit: cell("makeCacheMapKit"),
    },
    {
      makeNoteLogArgsArrayKit: cell("makeNoteLogArgsArrayKit"),
    },
    {
      q: cell("q"),
      b: cell("b"),
      X: cell("X"),
      unredactedDetails: cell("unredactedDetails"),
      makeError: cell("makeError"),
      annotateError: cell("annotateError"),
      loggedErrorHandler: cell("loggedErrorHandler"),
      assert: cell("assert"),
      assertEqual: cell("assertEqual"),
      sanitizeError: cell("sanitizeError"),
      makeAssert: cell("makeAssert"),
    },
    {
      isTypedArray: cell("isTypedArray"),
      makeHardener: cell("makeHardener"),
    },
    {
      cauterizeProperty: cell("cauterizeProperty"),
    },
    {
      NativeErrors: cell("NativeErrors"),
      constantProperties: cell("constantProperties"),
      universalPropertyNames: cell("universalPropertyNames"),
      initialGlobalPropertyNames: cell("initialGlobalPropertyNames"),
      sharedGlobalPropertyNames: cell("sharedGlobalPropertyNames"),
      uniqueGlobalPropertyNames: cell("uniqueGlobalPropertyNames"),
      FunctionInstance: cell("FunctionInstance"),
      AsyncFunctionInstance: cell("AsyncFunctionInstance"),
      isAccessorPermit: cell("isAccessorPermit"),
      permitted: cell("permitted"),
    },
    {
      makeIntrinsicsCollector: cell("makeIntrinsicsCollector"),
      getGlobalIntrinsics: cell("getGlobalIntrinsics"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      minEnablements: cell("minEnablements"),
      moderateEnablements: cell("moderateEnablements"),
      severeEnablements: cell("severeEnablements"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      makeEvalFunction: cell("makeEvalFunction"),
    },
    {
      makeFunctionConstructor: cell("makeFunctionConstructor"),
    },
    {
      setGlobalObjectSymbolUnscopables: cell("setGlobalObjectSymbolUnscopables"),
      setGlobalObjectConstantProperties: cell("setGlobalObjectConstantProperties"),
      setGlobalObjectMutableProperties: cell("setGlobalObjectMutableProperties"),
      setGlobalObjectEvaluators: cell("setGlobalObjectEvaluators"),
    },
    {
      alwaysThrowHandler: cell("alwaysThrowHandler"),
      strictScopeTerminatorHandler: cell("strictScopeTerminatorHandler"),
      strictScopeTerminator: cell("strictScopeTerminator"),
    },
    {
      createSloppyGlobalsScopeTerminator: cell("createSloppyGlobalsScopeTerminator"),
    },
    {
      makeEvalScopeKit: cell("makeEvalScopeKit"),
    },
    {
      getSourceURL: cell("getSourceURL"),
    },
    {
      rejectHtmlComments: cell("rejectHtmlComments"),
      evadeHtmlCommentTest: cell("evadeHtmlCommentTest"),
      rejectImportExpressions: cell("rejectImportExpressions"),
      evadeImportExpressionTest: cell("evadeImportExpressionTest"),
      rejectSomeDirectEvalExpressions: cell("rejectSomeDirectEvalExpressions"),
      mandatoryTransforms: cell("mandatoryTransforms"),
      applyTransforms: cell("applyTransforms"),
      transforms: cell("transforms"),
    },
    {
      isValidIdentifierName: cell("isValidIdentifierName"),
      getScopeConstants: cell("getScopeConstants"),
    },
    {
      makeEvaluate: cell("makeEvaluate"),
    },
    {
      makeSafeEvaluator: cell("makeSafeEvaluator"),
    },
    {
      tameFunctionToString: cell("tameFunctionToString"),
    },
    {
      tameDomains: cell("tameDomains"),
    },
    {
      tameModuleSource: cell("tameModuleSource"),
    },
    {
      consoleLevelMethods: cell("consoleLevelMethods"),
      consoleOtherMethods: cell("consoleOtherMethods"),
      makeLoggingConsoleKit: cell("makeLoggingConsoleKit"),
      pumpLogToConsole: cell("pumpLogToConsole"),
      makeCausalConsole: cell("makeCausalConsole"),
      defineCausalConsoleFromLogger: cell("defineCausalConsoleFromLogger"),
      filterConsole: cell("filterConsole"),
    },
    {
      makeRejectionHandlers: cell("makeRejectionHandlers"),
    },
    {
      tameConsole: cell("tameConsole"),
    },
    {
      filterFileName: cell("filterFileName"),
      shortenCallSiteString: cell("shortenCallSiteString"),
      tameV8ErrorConstructor: cell("tameV8ErrorConstructor"),
    },
    {
      default: cell("default"),
    },
    {
      makeAlias: cell("makeAlias"),
      load: cell("load"),
      loadNow: cell("loadNow"),
    },
    {
      deferExports: cell("deferExports"),
      getDeferredExports: cell("getDeferredExports"),
    },
    {
      provideCompartmentEvaluator: cell("provideCompartmentEvaluator"),
      compartmentEvaluate: cell("compartmentEvaluate"),
    },
    {
      makeVirtualModuleInstance: cell("makeVirtualModuleInstance"),
      makeModuleInstance: cell("makeModuleInstance"),
    },
    {
      link: cell("link"),
      instantiate: cell("instantiate"),
    },
    {
      InertCompartment: cell("InertCompartment"),
      CompartmentPrototype: cell("CompartmentPrototype"),
      compartmentOptions: cell("compartmentOptions"),
      makeCompartmentConstructor: cell("makeCompartmentConstructor"),
    },
    {
      getAnonymousIntrinsics: cell("getAnonymousIntrinsics"),
    },
    {
      tameHarden: cell("tameHarden"),
    },
    {
      tameSymbolConstructor: cell("tameSymbolConstructor"),
    },
    {
      tameFauxDataProperty: cell("tameFauxDataProperty"),
      tameFauxDataProperties: cell("tameFauxDataProperties"),
    },
    {
      tameRegeneratorRuntime: cell("tameRegeneratorRuntime"),
    },
    {
      shimArrayBufferTransfer: cell("shimArrayBufferTransfer"),
    },
    {
      chooseReporter: cell("chooseReporter"),
      reportInGroup: cell("reportInGroup"),
    },
    {
      repairIntrinsics: cell("repairIntrinsics"),
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
  ];

  defineProperties(cells[3], getOwnPropertyDescriptors(cells[2]));

  defineProperties(cells[11], {"makeCacheMapKit": { value: cells[10]["makeCacheMapKit"] } });

  const namespaces = cells.map(cells => freeze(create(null, {
    ...cells,
    // Make this appear like an ESM module namespace object.
    [Symbol.toStringTag]: {
      value: 'Module',
      writable: false,
      enumerable: false,
      configurable: false,
    },
  })));

  for (let index = 0; index < namespaces.length; index += 1) {
    cells[index]['*'] = cell('*', namespaces[index]);
  }

function observeImports(map, importName, importIndex) {
  for (const [name, observers] of map.get(importName)) {
    const cell = cells[importIndex][name];
    if (cell === undefined) {
      throw new ReferenceError(`Cannot import name ${name} (has ${Object.getOwnPropertyNames(cells[importIndex]).join(', ')})`);
    }
    for (const observer of observers) {
      cell.observe(observer);
    }
  }
}

  functors[0]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      universalThis: cells[0].globalThis.set,
      Array: cells[0].Array.set,
      ArrayBuffer: cells[0].ArrayBuffer.set,
      Date: cells[0].Date.set,
      FinalizationRegistry: cells[0].FinalizationRegistry.set,
      Float32Array: cells[0].Float32Array.set,
      JSON: cells[0].JSON.set,
      Map: cells[0].Map.set,
      Math: cells[0].Math.set,
      Number: cells[0].Number.set,
      Object: cells[0].Object.set,
      Promise: cells[0].Promise.set,
      Proxy: cells[0].Proxy.set,
      Reflect: cells[0].Reflect.set,
      FERAL_REG_EXP: cells[0].FERAL_REG_EXP.set,
      Set: cells[0].Set.set,
      String: cells[0].String.set,
      Symbol: cells[0].Symbol.set,
      Uint8Array: cells[0].Uint8Array.set,
      WeakMap: cells[0].WeakMap.set,
      WeakSet: cells[0].WeakSet.set,
      FERAL_ERROR: cells[0].FERAL_ERROR.set,
      RangeError: cells[0].RangeError.set,
      ReferenceError: cells[0].ReferenceError.set,
      SyntaxError: cells[0].SyntaxError.set,
      TypeError: cells[0].TypeError.set,
      AggregateError: cells[0].AggregateError.set,
      assign: cells[0].assign.set,
      create: cells[0].create.set,
      defineProperties: cells[0].defineProperties.set,
      entries: cells[0].entries.set,
      freeze: cells[0].freeze.set,
      getOwnPropertyDescriptor: cells[0].getOwnPropertyDescriptor.set,
      getOwnPropertyDescriptors: cells[0].getOwnPropertyDescriptors.set,
      getOwnPropertyNames: cells[0].getOwnPropertyNames.set,
      getPrototypeOf: cells[0].getPrototypeOf.set,
      is: cells[0].is.set,
      isFrozen: cells[0].isFrozen.set,
      isSealed: cells[0].isSealed.set,
      isExtensible: cells[0].isExtensible.set,
      keys: cells[0].keys.set,
      objectPrototype: cells[0].objectPrototype.set,
      seal: cells[0].seal.set,
      preventExtensions: cells[0].preventExtensions.set,
      setPrototypeOf: cells[0].setPrototypeOf.set,
      values: cells[0].values.set,
      fromEntries: cells[0].fromEntries.set,
      speciesSymbol: cells[0].speciesSymbol.set,
      toStringTagSymbol: cells[0].toStringTagSymbol.set,
      iteratorSymbol: cells[0].iteratorSymbol.set,
      matchAllSymbol: cells[0].matchAllSymbol.set,
      replaceSymbol: cells[0].replaceSymbol.set,
      unscopablesSymbol: cells[0].unscopablesSymbol.set,
      symbolKeyFor: cells[0].symbolKeyFor.set,
      symbolFor: cells[0].symbolFor.set,
      isInteger: cells[0].isInteger.set,
      stringifyJson: cells[0].stringifyJson.set,
      defineProperty: cells[0].defineProperty.set,
      apply: cells[0].apply.set,
      construct: cells[0].construct.set,
      reflectGet: cells[0].reflectGet.set,
      reflectGetOwnPropertyDescriptor: cells[0].reflectGetOwnPropertyDescriptor.set,
      reflectHas: cells[0].reflectHas.set,
      reflectIsExtensible: cells[0].reflectIsExtensible.set,
      ownKeys: cells[0].ownKeys.set,
      reflectPreventExtensions: cells[0].reflectPreventExtensions.set,
      reflectSet: cells[0].reflectSet.set,
      isArray: cells[0].isArray.set,
      arrayPrototype: cells[0].arrayPrototype.set,
      arrayBufferPrototype: cells[0].arrayBufferPrototype.set,
      mapPrototype: cells[0].mapPrototype.set,
      proxyRevocable: cells[0].proxyRevocable.set,
      regexpPrototype: cells[0].regexpPrototype.set,
      setPrototype: cells[0].setPrototype.set,
      stringPrototype: cells[0].stringPrototype.set,
      weakmapPrototype: cells[0].weakmapPrototype.set,
      weaksetPrototype: cells[0].weaksetPrototype.set,
      functionPrototype: cells[0].functionPrototype.set,
      promisePrototype: cells[0].promisePrototype.set,
      generatorPrototype: cells[0].generatorPrototype.set,
      iteratorPrototype: cells[0].iteratorPrototype.set,
      typedArrayPrototype: cells[0].typedArrayPrototype.set,
      uncurryThis: cells[0].uncurryThis.set,
      hasOwn: cells[0].hasOwn.set,
      arrayFilter: cells[0].arrayFilter.set,
      arrayForEach: cells[0].arrayForEach.set,
      arrayIncludes: cells[0].arrayIncludes.set,
      arrayJoin: cells[0].arrayJoin.set,
      arrayMap: cells[0].arrayMap.set,
      arrayFlatMap: cells[0].arrayFlatMap.set,
      arrayPop: cells[0].arrayPop.set,
      arrayPush: cells[0].arrayPush.set,
      arraySlice: cells[0].arraySlice.set,
      arraySome: cells[0].arraySome.set,
      arraySort: cells[0].arraySort.set,
      iterateArray: cells[0].iterateArray.set,
      arrayBufferSlice: cells[0].arrayBufferSlice.set,
      arrayBufferGetByteLength: cells[0].arrayBufferGetByteLength.set,
      typedArraySet: cells[0].typedArraySet.set,
      mapSet: cells[0].mapSet.set,
      mapGet: cells[0].mapGet.set,
      mapHas: cells[0].mapHas.set,
      mapDelete: cells[0].mapDelete.set,
      mapEntries: cells[0].mapEntries.set,
      iterateMap: cells[0].iterateMap.set,
      setAdd: cells[0].setAdd.set,
      setDelete: cells[0].setDelete.set,
      setForEach: cells[0].setForEach.set,
      setHas: cells[0].setHas.set,
      iterateSet: cells[0].iterateSet.set,
      regexpExec: cells[0].regexpExec.set,
      regexpReplace: cells[0].regexpReplace.set,
      matchAllRegExp: cells[0].matchAllRegExp.set,
      sealRegexp: cells[0].sealRegexp.set,
      stringEndsWith: cells[0].stringEndsWith.set,
      stringIncludes: cells[0].stringIncludes.set,
      stringIndexOf: cells[0].stringIndexOf.set,
      stringMatch: cells[0].stringMatch.set,
      stringSearch: cells[0].stringSearch.set,
      stringSlice: cells[0].stringSlice.set,
      stringSplit: cells[0].stringSplit.set,
      stringStartsWith: cells[0].stringStartsWith.set,
      iterateString: cells[0].iterateString.set,
      weakmapDelete: cells[0].weakmapDelete.set,
      weakmapGet: cells[0].weakmapGet.set,
      weakmapHas: cells[0].weakmapHas.set,
      weakmapSet: cells[0].weakmapSet.set,
      weaksetAdd: cells[0].weaksetAdd.set,
      weaksetHas: cells[0].weaksetHas.set,
      functionToString: cells[0].functionToString.set,
      functionBind: cells[0].functionBind.set,
      generatorNext: cells[0].generatorNext.set,
      generatorThrow: cells[0].generatorThrow.set,
      promiseAll: cells[0].promiseAll.set,
      promiseCatch: cells[0].promiseCatch.set,
      promiseThen: cells[0].promiseThen.set,
      finalizationRegistryRegister: cells[0].finalizationRegistryRegister.set,
      finalizationRegistryUnregister: cells[0].finalizationRegistryUnregister.set,
      isPrimitive: cells[0].isPrimitive.set,
      isError: cells[0].isError.set,
      identity: cells[0].identity.set,
      FERAL_EVAL: cells[0].FERAL_EVAL.set,
      FERAL_FUNCTION: cells[0].FERAL_FUNCTION.set,
      noEvalEvaluate: cells[0].noEvalEvaluate.set,
      FERAL_STACK_GETTER: cells[0].FERAL_STACK_GETTER.set,
      FERAL_STACK_SETTER: cells[0].FERAL_STACK_SETTER.set,
      AsyncGeneratorFunctionInstance: cells[0].AsyncGeneratorFunctionInstance.set,
    },
    importMeta: {},
  });
  functors[1]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[2]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeEnvironmentCaptor: cells[2].makeEnvironmentCaptor.set,
      getEnvironmentOption: cells[2].getEnvironmentOption.set,
      getEnvironmentOptionsList: cells[2].getEnvironmentOptionsList.set,
      environmentOptionsListHas: cells[2].environmentOptionsListHas.set,
    },
    importMeta: {},
  });
  functors[3]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/env-options.js", 2);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[4]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      isBufferImmutable: cells[4].isBufferImmutable.set,
      sliceBufferToImmutable: cells[4].sliceBufferToImmutable.set,
      optTransferBufferToImmutable: cells[4].optTransferBufferToImmutable.set,
    },
    importMeta: {},
  });
  functors[5]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./immutable-arraybuffer-pony.js", 4);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[6]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/immutable-arraybuffer-shim.js", 5);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[7]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      an: cells[7].an.set,
      bestEffortStringify: cells[7].bestEffortStringify.set,
      enJoin: cells[7].enJoin.set,
    },
    importMeta: {},
  });
  functors[8]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[9]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[10]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeCacheMapKit: cells[10].makeCacheMapKit.set,
    },
    importMeta: {},
  });
  functors[11]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/cachemap.js", 10);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[12]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/cache-map", 11);
    },
    liveVar: {
    },
    onceVar: {
      makeNoteLogArgsArrayKit: cells[12].makeNoteLogArgsArrayKit.set,
    },
    importMeta: {},
  });
  functors[13]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "./stringify-utils.js", 7);
      observeImports(map, "./types.js", 8);
      observeImports(map, "./internal-types.js", 9);
      observeImports(map, "./note-log-args.js", 12);
    },
    liveVar: {
    },
    onceVar: {
      quote: cells[13].q.set,
      bare: cells[13].b.set,
      redactedDetails: cells[13].X.set,
      unredactedDetails: cells[13].unredactedDetails.set,
      makeError: cells[13].makeError.set,
      note: cells[13].annotateError.set,
      loggedErrorHandler: cells[13].loggedErrorHandler.set,
      assert: cells[13].assert.set,
      assertEqual: cells[13].assertEqual.set,
      sanitizeError: cells[13].sanitizeError.set,
      makeAssert: cells[13].makeAssert.set,
    },
    importMeta: {},
  });
  functors[14]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      isTypedArray: cells[14].isTypedArray.set,
      makeHardener: cells[14].makeHardener.set,
    },
    importMeta: {},
  });
  functors[15]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      cauterizeProperty: cells[15].cauterizeProperty.set,
    },
    importMeta: {},
  });
  functors[16]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      NativeErrors: cells[16].NativeErrors.set,
      constantProperties: cells[16].constantProperties.set,
      universalPropertyNames: cells[16].universalPropertyNames.set,
      initialGlobalPropertyNames: cells[16].initialGlobalPropertyNames.set,
      sharedGlobalPropertyNames: cells[16].sharedGlobalPropertyNames.set,
      uniqueGlobalPropertyNames: cells[16].uniqueGlobalPropertyNames.set,
      FunctionInstance: cells[16].FunctionInstance.set,
      AsyncFunctionInstance: cells[16].AsyncFunctionInstance.set,
      isAccessorPermit: cells[16].isAccessorPermit.set,
      permitted: cells[16].permitted.set,
    },
    importMeta: {},
  });
  functors[17]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./cauterize-property.js", 15);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./permits.js", 16);
    },
    liveVar: {
    },
    onceVar: {
      makeIntrinsicsCollector: cells[17].makeIntrinsicsCollector.set,
      getGlobalIntrinsics: cells[17].getGlobalIntrinsics.set,
    },
    importMeta: {},
  });
  functors[18]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./cauterize-property.js", 15);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[18].default.set,
    },
    importMeta: {},
  });
  functors[19]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[19].default.set,
    },
    importMeta: {},
  });
  functors[20]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[20].default.set,
    },
    importMeta: {},
  });
  functors[21]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[21].default.set,
    },
    importMeta: {},
  });
  functors[22]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[22].default.set,
    },
    importMeta: {},
  });
  functors[23]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      minEnablements: cells[23].minEnablements.set,
      moderateEnablements: cells[23].moderateEnablements.set,
      severeEnablements: cells[23].severeEnablements.set,
    },
    importMeta: {},
  });
  functors[24]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./enablements.js", 23);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[24].default.set,
    },
    importMeta: {},
  });
  functors[25]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[25].default.set,
    },
    importMeta: {},
  });
  functors[26]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeEvalFunction: cells[26].makeEvalFunction.set,
    },
    importMeta: {},
  });
  functors[27]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeFunctionConstructor: cells[27].makeFunctionConstructor.set,
    },
    importMeta: {},
  });
  functors[28]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./make-eval-function.js", 26);
      observeImports(map, "./make-function-constructor.js", 27);
      observeImports(map, "./permits.js", 16);
    },
    liveVar: {
    },
    onceVar: {
      setGlobalObjectSymbolUnscopables: cells[28].setGlobalObjectSymbolUnscopables.set,
      setGlobalObjectConstantProperties: cells[28].setGlobalObjectConstantProperties.set,
      setGlobalObjectMutableProperties: cells[28].setGlobalObjectMutableProperties.set,
      setGlobalObjectEvaluators: cells[28].setGlobalObjectEvaluators.set,
    },
    importMeta: {},
  });
  functors[29]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      alwaysThrowHandler: cells[29].alwaysThrowHandler.set,
      strictScopeTerminatorHandler: cells[29].strictScopeTerminatorHandler.set,
      strictScopeTerminator: cells[29].strictScopeTerminator.set,
    },
    importMeta: {},
  });
  functors[30]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./strict-scope-terminator.js", 29);
    },
    liveVar: {
    },
    onceVar: {
      createSloppyGlobalsScopeTerminator: cells[30].createSloppyGlobalsScopeTerminator.set,
    },
    importMeta: {},
  });
  functors[31]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeEvalScopeKit: cells[31].makeEvalScopeKit.set,
    },
    importMeta: {},
  });
  functors[32]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      getSourceURL: cells[32].getSourceURL.set,
    },
    importMeta: {},
  });
  functors[33]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./get-source-url.js", 32);
    },
    liveVar: {
    },
    onceVar: {
      rejectHtmlComments: cells[33].rejectHtmlComments.set,
      evadeHtmlCommentTest: cells[33].evadeHtmlCommentTest.set,
      rejectImportExpressions: cells[33].rejectImportExpressions.set,
      evadeImportExpressionTest: cells[33].evadeImportExpressionTest.set,
      rejectSomeDirectEvalExpressions: cells[33].rejectSomeDirectEvalExpressions.set,
      mandatoryTransforms: cells[33].mandatoryTransforms.set,
      applyTransforms: cells[33].applyTransforms.set,
      transforms: cells[33].transforms.set,
    },
    importMeta: {},
  });
  functors[34]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      isValidIdentifierName: cells[34].isValidIdentifierName.set,
      getScopeConstants: cells[34].getScopeConstants.set,
    },
    importMeta: {},
  });
  functors[35]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./scope-constants.js", 34);
    },
    liveVar: {
    },
    onceVar: {
      makeEvaluate: cells[35].makeEvaluate.set,
    },
    importMeta: {},
  });
  functors[36]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./strict-scope-terminator.js", 29);
      observeImports(map, "./sloppy-globals-scope-terminator.js", 30);
      observeImports(map, "./eval-scope.js", 31);
      observeImports(map, "./transforms.js", 33);
      observeImports(map, "./make-evaluate.js", 35);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeSafeEvaluator: cells[36].makeSafeEvaluator.set,
    },
    importMeta: {},
  });
  functors[37]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameFunctionToString: cells[37].tameFunctionToString.set,
    },
    importMeta: {},
  });
  functors[38]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameDomains: cells[38].tameDomains.set,
    },
    importMeta: {},
  });
  functors[39]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameModuleSource: cells[39].tameModuleSource.set,
    },
    importMeta: {},
  });
  functors[40]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      consoleLevelMethods: cells[40].consoleLevelMethods.set,
      consoleOtherMethods: cells[40].consoleOtherMethods.set,
      makeLoggingConsoleKit: cells[40].makeLoggingConsoleKit.set,
      pumpLogToConsole: cells[40].pumpLogToConsole.set,
      makeCausalConsole: cells[40].makeCausalConsole.set,
      defineCausalConsoleFromLogger: cells[40].defineCausalConsoleFromLogger.set,
      filterConsole: cells[40].filterConsole.set,
    },
    importMeta: {},
  });
  functors[41]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      makeRejectionHandlers: cells[41].makeRejectionHandlers.set,
    },
    importMeta: {},
  });
  functors[42]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "./assert.js", 13);
      observeImports(map, "./console.js", 40);
      observeImports(map, "./unhandled-rejection.js", 41);
    },
    liveVar: {
    },
    onceVar: {
      tameConsole: cells[42].tameConsole.set,
    },
    importMeta: {},
  });
  functors[43]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      filterFileName: cells[43].filterFileName.set,
      shortenCallSiteString: cells[43].shortenCallSiteString.set,
      tameV8ErrorConstructor: cells[43].tameV8ErrorConstructor.set,
    },
    importMeta: {},
  });
  functors[44]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "../permits.js", 16);
      observeImports(map, "./tame-v8-error-constructor.js", 43);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[44].default.set,
    },
    importMeta: {},
  });
  functors[45]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/env-options", 3);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeAlias: cells[45].makeAlias.set,
      load: cells[45].load.set,
      loadNow: cells[45].loadNow.set,
    },
    importMeta: {},
  });
  functors[46]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./module-load.js", 45);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      deferExports: cells[46].deferExports.set,
      getDeferredExports: cells[46].getDeferredExports.set,
    },
    importMeta: {},
  });
  functors[47]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./transforms.js", 33);
      observeImports(map, "./make-safe-evaluator.js", 36);
    },
    liveVar: {
    },
    onceVar: {
      provideCompartmentEvaluator: cells[47].provideCompartmentEvaluator.set,
      compartmentEvaluate: cells[47].compartmentEvaluate.set,
    },
    importMeta: {},
  });
  functors[48]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./module-proxy.js", 46);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment-evaluate.js", 47);
    },
    liveVar: {
    },
    onceVar: {
      makeVirtualModuleInstance: cells[48].makeVirtualModuleInstance.set,
      makeModuleInstance: cells[48].makeModuleInstance.set,
    },
    importMeta: {},
  });
  functors[49]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./module-instance.js", 48);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      link: cells[49].link.set,
      instantiate: cells[49].instantiate.set,
    },
    importMeta: {},
  });
  functors[50]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./global-object.js", 28);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./module-load.js", 45);
      observeImports(map, "./module-link.js", 49);
      observeImports(map, "./module-proxy.js", 46);
      observeImports(map, "./compartment-evaluate.js", 47);
      observeImports(map, "./make-safe-evaluator.js", 36);
    },
    liveVar: {
    },
    onceVar: {
      InertCompartment: cells[50].InertCompartment.set,
      CompartmentPrototype: cells[50].CompartmentPrototype.set,
      compartmentOptions: cells[50].compartmentOptions.set,
      makeCompartmentConstructor: cells[50].makeCompartmentConstructor.set,
    },
    importMeta: {},
  });
  functors[51]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment.js", 50);
    },
    liveVar: {
    },
    onceVar: {
      getAnonymousIntrinsics: cells[51].getAnonymousIntrinsics.set,
    },
    importMeta: {},
  });
  functors[52]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameHarden: cells[52].tameHarden.set,
    },
    importMeta: {},
  });
  functors[53]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameSymbolConstructor: cells[53].tameSymbolConstructor.set,
    },
    importMeta: {},
  });
  functors[54]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameFauxDataProperty: cells[54].tameFauxDataProperty.set,
      tameFauxDataProperties: cells[54].tameFauxDataProperties.set,
    },
    importMeta: {},
  });
  functors[55]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameRegeneratorRuntime: cells[55].tameRegeneratorRuntime.set,
    },
    importMeta: {},
  });
  functors[56]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      shimArrayBufferTransfer: cells[56].shimArrayBufferTransfer.set,
    },
    importMeta: {},
  });
  functors[57]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      chooseReporter: cells[57].chooseReporter.set,
      reportInGroup: cells[57].reportInGroup.set,
    },
    importMeta: {},
  });
  functors[58]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/env-options", 3);
      observeImports(map, "@endo/immutable-arraybuffer/shim.js", 6);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./make-hardener.js", 14);
      observeImports(map, "./intrinsics.js", 17);
      observeImports(map, "./permits-intrinsics.js", 18);
      observeImports(map, "./tame-function-constructors.js", 19);
      observeImports(map, "./tame-date-constructor.js", 20);
      observeImports(map, "./tame-math-object.js", 21);
      observeImports(map, "./tame-regexp-constructor.js", 22);
      observeImports(map, "./enable-property-overrides.js", 24);
      observeImports(map, "./tame-locale-methods.js", 25);
      observeImports(map, "./global-object.js", 28);
      observeImports(map, "./make-safe-evaluator.js", 36);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./tame-function-tostring.js", 37);
      observeImports(map, "./tame-domains.js", 38);
      observeImports(map, "./tame-module-source.js", 39);
      observeImports(map, "./error/tame-console.js", 42);
      observeImports(map, "./error/tame-error-constructor.js", 44);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./get-anonymous-intrinsics.js", 51);
      observeImports(map, "./compartment.js", 50);
      observeImports(map, "./tame-harden.js", 52);
      observeImports(map, "./tame-symbol-constructor.js", 53);
      observeImports(map, "./tame-faux-data-properties.js", 54);
      observeImports(map, "./tame-regenerator-runtime.js", 55);
      observeImports(map, "./shim-arraybuffer-transfer.js", 56);
      observeImports(map, "./reporting.js", 57);
    },
    liveVar: {
    },
    onceVar: {
      repairIntrinsics: cells[58].repairIntrinsics.set,
    },
    importMeta: {},
  });
  functors[59]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./assert-sloppy-mode.js", 1);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./lockdown.js", 58);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[60]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment.js", 50);
      observeImports(map, "./tame-function-tostring.js", 37);
      observeImports(map, "./intrinsics.js", 17);
      observeImports(map, "./reporting.js", 57);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[61]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[62]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/console.js", 40);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[63]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/lockdown-shim.js", 59);
      observeImports(map, "./src/compartment-shim.js", 60);
      observeImports(map, "./src/assert-shim.js", 61);
      observeImports(map, "./src/console-shim.js", 62);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });

  return cells[cells.length - 1]['*'].get();
})([
// === 0. ses ./src/commons.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/**
 * Captures native intrinsics during initialization, so vetted shims
 * (running between initialization of SES and calling lockdown) are free to
 * modify the environment without compromising the integrity of SES. For
 * example, a vetted shim can modify Object.assign because we capture and
 * export Object and assign here, then never again consult Object to get its
 * assign property.
 *
 * This pattern of use is enforced by eslint rules no-restricted-globals and
 * no-polymorphic-call.
 * We maintain the list of restricted globals in ../package.json.
 *
 * @module
 */

/* global globalThis */
/* eslint-disable no-restricted-globals */

// We cannot use globalThis as the local name since it would capture the
// lexical name.
const universalThis = globalThis;$h͏_once.universalThis(universalThis);


       const {
  Array,
  ArrayBuffer,
  Date,
  FinalizationRegistry,
  Float32Array,
  JSON,
  Map,
  Math,
  Number,
  Object,
  Promise,
  Proxy,
  Reflect,
  RegExp: FERAL_REG_EXP,
  Set,
  String,
  Symbol,
  Uint8Array,
  WeakMap,
  WeakSet,
} = globalThis;$h͏_once.Array(Array);$h͏_once.ArrayBuffer(ArrayBuffer);$h͏_once.Date(Date);$h͏_once.FinalizationRegistry(FinalizationRegistry);$h͏_once.Float32Array(Float32Array);$h͏_once.JSON(JSON);$h͏_once.Map(Map);$h͏_once.Math(Math);$h͏_once.Number(Number);$h͏_once.Object(Object);$h͏_once.Promise(Promise);$h͏_once.Proxy(Proxy);$h͏_once.Reflect(Reflect);$h͏_once.FERAL_REG_EXP(FERAL_REG_EXP);$h͏_once.Set(Set);$h͏_once.String(String);$h͏_once.Symbol(Symbol);$h͏_once.Uint8Array(Uint8Array);$h͏_once.WeakMap(WeakMap);$h͏_once.WeakSet(WeakSet);

       const {
  // The feral Error constructor is safe for internal use, but must not be
  // revealed to post-lockdown code in any compartment including the start
  // compartment since in V8 at least it bears stack inspection capabilities.
  Error: FERAL_ERROR,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  AggregateError,
} = globalThis;$h͏_once.FERAL_ERROR(FERAL_ERROR);$h͏_once.RangeError(RangeError);$h͏_once.ReferenceError(ReferenceError);$h͏_once.SyntaxError(SyntaxError);$h͏_once.TypeError(TypeError);$h͏_once.AggregateError(AggregateError);

       const {
  assign,
  create,
  defineProperties,
  entries,
  freeze,
  getOwnPropertyDescriptor,
  getOwnPropertyDescriptors,
  getOwnPropertyNames,
  getPrototypeOf,
  is,
  isFrozen,
  isSealed,
  isExtensible,
  keys,
  prototype: objectPrototype,
  seal,
  preventExtensions,
  setPrototypeOf,
  values,
  fromEntries,
} = Object;$h͏_once.assign(assign);$h͏_once.create(create);$h͏_once.defineProperties(defineProperties);$h͏_once.entries(entries);$h͏_once.freeze(freeze);$h͏_once.getOwnPropertyDescriptor(getOwnPropertyDescriptor);$h͏_once.getOwnPropertyDescriptors(getOwnPropertyDescriptors);$h͏_once.getOwnPropertyNames(getOwnPropertyNames);$h͏_once.getPrototypeOf(getPrototypeOf);$h͏_once.is(is);$h͏_once.isFrozen(isFrozen);$h͏_once.isSealed(isSealed);$h͏_once.isExtensible(isExtensible);$h͏_once.keys(keys);$h͏_once.objectPrototype(objectPrototype);$h͏_once.seal(seal);$h͏_once.preventExtensions(preventExtensions);$h͏_once.setPrototypeOf(setPrototypeOf);$h͏_once.values(values);$h͏_once.fromEntries(fromEntries);

       const {
  species: speciesSymbol,
  toStringTag: toStringTagSymbol,
  iterator: iteratorSymbol,
  matchAll: matchAllSymbol,
  replace: replaceSymbol,
  unscopables: unscopablesSymbol,
  keyFor: symbolKeyFor,
  for: symbolFor,
} = Symbol;$h͏_once.speciesSymbol(speciesSymbol);$h͏_once.toStringTagSymbol(toStringTagSymbol);$h͏_once.iteratorSymbol(iteratorSymbol);$h͏_once.matchAllSymbol(matchAllSymbol);$h͏_once.replaceSymbol(replaceSymbol);$h͏_once.unscopablesSymbol(unscopablesSymbol);$h͏_once.symbolKeyFor(symbolKeyFor);$h͏_once.symbolFor(symbolFor);

       const { isInteger } = Number;$h͏_once.isInteger(isInteger);

       const { stringify: stringifyJson } = JSON;

// Needed only for the Safari bug workaround below
$h͏_once.stringifyJson(stringifyJson);const{defineProperty:originalDefineProperty}=Object;

       const defineProperty = (object, prop, descriptor) => {
  // We used to do the following, until we had to reopen Safari bug
  // https://bugs.webkit.org/show_bug.cgi?id=222538#c17
  // Once this is fixed, we may restore it.
  // // Object.defineProperty is allowed to fail silently so we use
  // // Object.defineProperties instead.
  // return defineProperties(object, { [prop]: descriptor });

  // Instead, to workaround the Safari bug
  const result = originalDefineProperty(object, prop, descriptor);
  if (result !== object) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_DEFINE_PROPERTY_FAILED_SILENTLY.md
    throw TypeError(
      `Please report that the original defineProperty silently failed to set ${stringifyJson(
        String(prop),
      )}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`,
    );
  }
  return result;
};$h͏_once.defineProperty(defineProperty);

       const {
  apply,
  construct,
  get: reflectGet,
  getOwnPropertyDescriptor: reflectGetOwnPropertyDescriptor,
  has: reflectHas,
  isExtensible: reflectIsExtensible,
  ownKeys,
  preventExtensions: reflectPreventExtensions,
  set: reflectSet,
} = Reflect;$h͏_once.apply(apply);$h͏_once.construct(construct);$h͏_once.reflectGet(reflectGet);$h͏_once.reflectGetOwnPropertyDescriptor(reflectGetOwnPropertyDescriptor);$h͏_once.reflectHas(reflectHas);$h͏_once.reflectIsExtensible(reflectIsExtensible);$h͏_once.ownKeys(ownKeys);$h͏_once.reflectPreventExtensions(reflectPreventExtensions);$h͏_once.reflectSet(reflectSet);

       const { isArray, prototype: arrayPrototype } = Array;$h͏_once.isArray(isArray);$h͏_once.arrayPrototype(arrayPrototype);
       const { prototype: arrayBufferPrototype } = ArrayBuffer;$h͏_once.arrayBufferPrototype(arrayBufferPrototype);
       const { prototype: mapPrototype } = Map;$h͏_once.mapPrototype(mapPrototype);
       const { revocable: proxyRevocable } = Proxy;$h͏_once.proxyRevocable(proxyRevocable);
       const { prototype: regexpPrototype } = RegExp;$h͏_once.regexpPrototype(regexpPrototype);
       const { prototype: setPrototype } = Set;$h͏_once.setPrototype(setPrototype);
       const { prototype: stringPrototype } = String;$h͏_once.stringPrototype(stringPrototype);
       const { prototype: weakmapPrototype } = WeakMap;$h͏_once.weakmapPrototype(weakmapPrototype);
       const { prototype: weaksetPrototype } = WeakSet;$h͏_once.weaksetPrototype(weaksetPrototype);
       const { prototype: functionPrototype } = Function;$h͏_once.functionPrototype(functionPrototype);
       const { prototype: promisePrototype } = Promise;$h͏_once.promisePrototype(promisePrototype);
       const { prototype: generatorPrototype } = getPrototypeOf(
  // eslint-disable-next-line no-empty-function, func-names
  function* () {},
);$h͏_once.generatorPrototype(generatorPrototype);
       const iteratorPrototype = getPrototypeOf(
  // eslint-disable-next-line @endo/no-polymorphic-call
  getPrototypeOf(arrayPrototype.values()),
);$h͏_once.iteratorPrototype(iteratorPrototype);

       const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);$h͏_once.typedArrayPrototype(typedArrayPrototype);

const { bind } = functionPrototype;

/**
 * uncurryThis()
 * Equivalent of: fn => (thisArg, ...args) => apply(fn, thisArg, args)
 *
 * See those reference for a complete explanation:
 * http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
 * which only lives at
 * http://web.archive.org/web/20160805225710/http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
 *
 * @type {<F extends (this: any, ...args: any[]) => any>(fn: F) => ((thisArg: ThisParameterType<F>, ...args: Parameters<F>) => ReturnType<F>)}
 */
       const uncurryThis = bind.bind(bind.call); // eslint-disable-line @endo/no-polymorphic-call

// See https://github.com/endojs/endo/issues/2930
$h͏_once.uncurryThis(uncurryThis);if(!('hasOwn'in Object)){
  const ObjectPrototypeHasOwnProperty = objectPrototype.hasOwnProperty;
  const hasOwnShim = (obj, key) => {
    if (obj === undefined || obj === null) {
      // We need to add this extra test because of differences in
      // the order in which `hasOwn` vs `hasOwnProperty` validates
      // arguments.
      throw TypeError('Cannot convert undefined or null to object');
    }
    return apply(ObjectPrototypeHasOwnProperty, obj, [key]);
  };
  defineProperty(Object, 'hasOwn', {
    value: hasOwnShim,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

       const { hasOwn } = Object;
//
$h͏_once.hasOwn(hasOwn);const arrayFilter=uncurryThis(arrayPrototype.filter);$h͏_once.arrayFilter(arrayFilter);
       const arrayForEach = uncurryThis(arrayPrototype.forEach);$h͏_once.arrayForEach(arrayForEach);
       const arrayIncludes = uncurryThis(arrayPrototype.includes);$h͏_once.arrayIncludes(arrayIncludes);
       const arrayJoin = uncurryThis(arrayPrototype.join);
/** @type {<T, U>(thisArg: readonly T[], callbackfn: (value: T, index: number, array: T[]) => U, cbThisArg?: any) => U[]} */$h͏_once.arrayJoin(arrayJoin);
       const arrayMap = /** @type {any} */ (uncurryThis(arrayPrototype.map));$h͏_once.arrayMap(arrayMap);
       const arrayFlatMap = /** @type {any} */ (
  uncurryThis(arrayPrototype.flatMap)
);$h͏_once.arrayFlatMap(arrayFlatMap);
       const arrayPop = uncurryThis(arrayPrototype.pop);
/** @type {<T>(thisArg: T[], ...items: T[]) => number} */$h͏_once.arrayPop(arrayPop);
       const arrayPush = uncurryThis(arrayPrototype.push);$h͏_once.arrayPush(arrayPush);
       const arraySlice = uncurryThis(arrayPrototype.slice);$h͏_once.arraySlice(arraySlice);
       const arraySome = uncurryThis(arrayPrototype.some);$h͏_once.arraySome(arraySome);
       const arraySort = uncurryThis(arrayPrototype.sort);$h͏_once.arraySort(arraySort);
       const iterateArray = uncurryThis(arrayPrototype[iteratorSymbol]);
//
$h͏_once.iterateArray(iterateArray);const arrayBufferSlice=uncurryThis(arrayBufferPrototype.slice);
/** @type {(b: ArrayBuffer) => number} */$h͏_once.arrayBufferSlice(arrayBufferSlice);
       const arrayBufferGetByteLength = uncurryThis(
  // @ts-expect-error we know it is there on all conforming platforms
  getOwnPropertyDescriptor(arrayBufferPrototype, 'byteLength').get,
);
//
$h͏_once.arrayBufferGetByteLength(arrayBufferGetByteLength);const typedArraySet=uncurryThis(typedArrayPrototype.set);
//
$h͏_once.typedArraySet(typedArraySet);const mapSet=uncurryThis(mapPrototype.set);$h͏_once.mapSet(mapSet);
       const mapGet = uncurryThis(mapPrototype.get);$h͏_once.mapGet(mapGet);
       const mapHas = uncurryThis(mapPrototype.has);$h͏_once.mapHas(mapHas);
       const mapDelete = uncurryThis(mapPrototype.delete);$h͏_once.mapDelete(mapDelete);
       const mapEntries = uncurryThis(mapPrototype.entries);$h͏_once.mapEntries(mapEntries);
       const iterateMap = uncurryThis(mapPrototype[iteratorSymbol]);
//
$h͏_once.iterateMap(iterateMap);const setAdd=uncurryThis(setPrototype.add);$h͏_once.setAdd(setAdd);
       const setDelete = uncurryThis(setPrototype.delete);$h͏_once.setDelete(setDelete);
       const setForEach = uncurryThis(setPrototype.forEach);$h͏_once.setForEach(setForEach);
       const setHas = uncurryThis(setPrototype.has);$h͏_once.setHas(setHas);
       const iterateSet = uncurryThis(setPrototype[iteratorSymbol]);
//
/**
 * `regexpExec` is provided in exclusion of `regexpTest`, which would be
 * vulnerable to RegExp.prototype poisoning.
 */$h͏_once.iterateSet(iterateSet);
       const regexpExec = uncurryThis(regexpPrototype.exec);
/**
 * @type { &
 *   ((thisArg: RegExp, string: string, replaceValue: string) => string) &
 *   ((thisArg: RegExp, string: string, replacer: (substring: string, ...args: any[]) => string) => string)
 * }
 */$h͏_once.regexpExec(regexpExec);
       const regexpReplace = /** @type {any} */ (
  uncurryThis(regexpPrototype[replaceSymbol])
);$h͏_once.regexpReplace(regexpReplace);
       const matchAllRegExp = uncurryThis(regexpPrototype[matchAllSymbol]);$h͏_once.matchAllRegExp(matchAllRegExp);
const { _regexpConstructor, ...regexpDescriptors } =
  getOwnPropertyDescriptors(regexpPrototype);
arrayForEach(ownKeys(regexpDescriptors), key => {
  const desc = regexpDescriptors[/** @type {any} */ (key)];
  desc.configurable = false;
  if (desc.writable) desc.writable = false;
});
/**
 * Protect a RegExp instance against RegExp.prototype poisoning ("exec",
 * "flags", Symbol.replace, etc.).
 * @type {<T extends RegExp>(regexp: T) => T}
 */
       const sealRegexp = regexp =>
  seal(defineProperties(regexp, regexpDescriptors));
//
$h͏_once.sealRegexp(sealRegexp);const stringEndsWith=uncurryThis(stringPrototype.endsWith);$h͏_once.stringEndsWith(stringEndsWith);
       const stringIncludes = uncurryThis(stringPrototype.includes);$h͏_once.stringIncludes(stringIncludes);
       const stringIndexOf = uncurryThis(stringPrototype.indexOf);$h͏_once.stringIndexOf(stringIndexOf);
       const stringMatch = uncurryThis(stringPrototype.match);
// `stringReplace` is intentionally omitted because it would be vulnerable to
// RegExp.prototype poisoning; use `regexpReplace(re, str, replacer)` instead
// (and `sealRegexp` on its regular expressions).
$h͏_once.stringMatch(stringMatch);const stringSearch=uncurryThis(stringPrototype.search);$h͏_once.stringSearch(stringSearch);
       const stringSlice = uncurryThis(stringPrototype.slice);
/**
 * `stringSplit` should only be used with a string separator; regular
 * expressions are vulnerable to RegExp.prototype poisoning.
 * @type {(thisArg: string, separator: string, limit?: number) => string[]}
 */$h͏_once.stringSlice(stringSlice);
       const stringSplit = /** @type {any} */ (
  uncurryThis(stringPrototype.split)
);$h͏_once.stringSplit(stringSplit);
       const stringStartsWith = uncurryThis(stringPrototype.startsWith);$h͏_once.stringStartsWith(stringStartsWith);
       const iterateString = uncurryThis(stringPrototype[iteratorSymbol]);
//
$h͏_once.iterateString(iterateString);const weakmapDelete=uncurryThis(weakmapPrototype.delete);
/** @type {<K extends {}, V>(thisArg: WeakMap<K, V>, ...args: Parameters<WeakMap<K,V>['get']>) => ReturnType<WeakMap<K,V>['get']>} */$h͏_once.weakmapDelete(weakmapDelete);
       const weakmapGet = uncurryThis(weakmapPrototype.get);$h͏_once.weakmapGet(weakmapGet);
       const weakmapHas = uncurryThis(weakmapPrototype.has);$h͏_once.weakmapHas(weakmapHas);
       const weakmapSet = uncurryThis(weakmapPrototype.set);
//
$h͏_once.weakmapSet(weakmapSet);const weaksetAdd=uncurryThis(weaksetPrototype.add);$h͏_once.weaksetAdd(weaksetAdd);
       const weaksetHas = uncurryThis(weaksetPrototype.has);
//
$h͏_once.weaksetHas(weaksetHas);const functionToString=uncurryThis(functionPrototype.toString);$h͏_once.functionToString(functionToString);
       const functionBind = uncurryThis(bind);
//
$h͏_once.functionBind(functionBind);const generatorNext=uncurryThis(generatorPrototype.next);$h͏_once.generatorNext(generatorNext);
       const generatorThrow = uncurryThis(generatorPrototype.throw);
//
$h͏_once.generatorThrow(generatorThrow);const{all}=Promise;
       const promiseAll = promises => apply(all, Promise, [promises]);$h͏_once.promiseAll(promiseAll);
       const promiseCatch = uncurryThis(promisePrototype.catch);
/** @type {<T, TResult1 = T, TResult2 = never>(thisArg: T, onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null) => Promise<TResult1 | TResult2>} */$h͏_once.promiseCatch(promiseCatch);
       const promiseThen = /** @type {any} */ (
  uncurryThis(promisePrototype.then)
);
//
$h͏_once.promiseThen(promiseThen);const finalizationRegistryRegister=
  FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.register);$h͏_once.finalizationRegistryRegister(finalizationRegistryRegister);
       const finalizationRegistryUnregister =
  FinalizationRegistry &&
  uncurryThis(FinalizationRegistry.prototype.unregister);

/**
 * TODO Consolidate with `isPrimitive` that's currently in `@endo/pass-style`.
 * Layering constraints make this tricky, which is why we haven't yet figured
 * out how to do this.
 *
 * @type {(val: unknown) => val is (undefined
 * | null
 * | boolean
 * | number
 * | bigint
 * | string
 * | symbol)}
 */$h͏_once.finalizationRegistryUnregister(finalizationRegistryUnregister);
       const isPrimitive = val =>
  !val || (typeof val !== 'object' && typeof val !== 'function');

/**
 * isError tests whether an object inherits from the intrinsic
 * `Error.prototype`.
 * We capture the original error constructor as FERAL_ERROR to provide a clear
 * signal for reviewers that we are handling an object with excess authority,
 * like stack trace inspection, that we are carefully hiding from client code.
 * Checking instanceof happens to be safe, but to avoid uttering FERAL_ERROR
 * for such a trivial case outside commons.js, we provide a utility function.
 *
 * @param {any} value
 */$h͏_once.isPrimitive(isPrimitive);
       const isError = value => value instanceof FERAL_ERROR;

/**
 * @template T
 * @param {T} x
 */$h͏_once.isError(isError);
       const identity = x => x;

// The original unsafe untamed eval function, which must not escape.
// Sample at module initialization time, which is before lockdown can
// repair it.  Use it only to build powerless abstractions.
// eslint-disable-next-line no-eval
$h͏_once.identity(identity);const FERAL_EVAL=eval;

// The original unsafe untamed Function constructor, which must not escape.
// Sample at module initialization time, which is before lockdown can
// repair it.  Use it only to build powerless abstractions.
$h͏_once.FERAL_EVAL(FERAL_EVAL);const FERAL_FUNCTION=Function;$h͏_once.FERAL_FUNCTION(FERAL_FUNCTION);

       const noEvalEvaluate = () => {
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_EVAL.md
  throw TypeError('Cannot eval with evalTaming set to "no-eval" (SES_NO_EVAL)');
};

// ////////////////// FERAL_STACK_GETTER FERAL_STACK_SETTER ////////////////////

// The error repair mechanism is very similar to code in
// pass-style/src/error.js and these implementations should be kept in sync.

/**
 * We gratuitiously construct a TypeError instance using syntax in order to
 * obviate the possibility that code that ran before SES (for which we are
 * irreducable vulnerable) may have replaced the global TypeError constructor.
 * We treat the nature of this error instance as the source of truth for the
 * nature of runtime constructed errors on the platform, particularly whether
 * such errors will have an own "stack" property with getters and setters.
 * At time of writing (2025) we know of no comparable mechanism for obtaining a
 * host-generated base Error instance, but we corroborate the nature of the
 * global Error constructor's instances and refuse to initialize SES in an
 * environment where the syntactic TypeError and global Error produce
 * inconsistent "stack" properties.
 * @returns {TypeError}
 */$h͏_once.noEvalEvaluate(noEvalEvaluate);
const makeTypeError = () => {
  try {
    // @ts-expect-error deliberate TypeError
    null.null;
    throw TypeError('obligatory'); // To convince the type flow inferrence.
  } catch (error) {
    return error;
  }
};

const errorStackDesc = getOwnPropertyDescriptor(Error('obligatory'), 'stack');
const typeErrorStackDesc = getOwnPropertyDescriptor(makeTypeError(), 'stack');

let feralStackGetter;
let feralStackSetter;
if (typeErrorStackDesc && typeErrorStackDesc.get) {
  // We should only encounter this case on v8 because of its problematic
  // error own stack accessor behavior.
  // Note that FF/SpiderMonkey, Moddable/XS, and the error stack proposal
  // all inherit a stack accessor property from Error.prototype, which is
  // great. That case needs no heroics to secure.
  if (
    // In the v8 case as we understand it, all errors have an own stack
    // accessor property, but within the same realm, all these accessor
    // properties have the same getter and have the same setter.
    // This is therefore the case that we repair.
    errorStackDesc &&
    typeof typeErrorStackDesc.get === 'function' &&
    typeErrorStackDesc.get === errorStackDesc.get &&
    typeof typeErrorStackDesc.set === 'function' &&
    typeErrorStackDesc.set === errorStackDesc.set
  ) {
    // Otherwise, we have own stack accessor properties that are outside
    // our expectations, that therefore need to be understood better
    // before we know how to repair them.
    feralStackGetter = freeze(typeErrorStackDesc.get);
    feralStackSetter = freeze(typeErrorStackDesc.set);
  } else {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR.md
    throw TypeError(
      'Unexpected Error own stack accessor functions (SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR)',
    );
  }
}

/**
 * If on a v8 with the problematic error own stack accessor behavior,
 * `FERAL_STACK_GETTER` will be the shared getter of all those accessors
 * and `FERAL_STACK_SETTER` will be the shared setter. On any platform
 * without this problem, `FERAL_STACK_GETTER` and `FERAL_STACK_SETTER` are
 * both `undefined`.
 *
 * @type {(() => any) | undefined}
 */
       const FERAL_STACK_GETTER = feralStackGetter;

/**
 * If on a v8 with the problematic error own stack accessor behavior,
 * `FERAL_STACK_GETTER` will be the shared getter of all those accessors
 * and `FERAL_STACK_SETTER` will be the shared setter. On any platform
 * without this problem, `FERAL_STACK_GETTER` and `FERAL_STACK_SETTER` are
 * both `undefined`.
 *
 * @type {((newValue: any) => void) | undefined}
 */$h͏_once.FERAL_STACK_GETTER(FERAL_STACK_GETTER);
       const FERAL_STACK_SETTER = feralStackSetter;$h͏_once.FERAL_STACK_SETTER(FERAL_STACK_SETTER);

const getAsyncGeneratorFunctionInstance = () => {
  // Test for async generator function syntax support.
  try {
    // Wrapping one in an new Function lets the `hermesc` binary file
    // parse the Metro js bundle without SyntaxError, to generate the
    // optimised Hermes bytecode bundle, when `gradlew` is called to
    // assemble the release build APK for React Native prod Android apps.
    // Delaying the error until runtime lets us customise lockdown behaviour.
    return new FERAL_FUNCTION(
      'return (async function* AsyncGeneratorFunctionInstance() {})',
    )();
  } catch (error) {
    // Note: `Error.prototype.jsEngine` is only set by React Native runtime, not Hermes:
    // https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/hermes/executor/HermesExecutorFactory.cpp#L224-L230
    if (error.name === 'SyntaxError') {
      // Swallows Hermes error `async generators are unsupported` at runtime.
      // Note: `console` is not a JS built-in, so Hermes engine throws:
      // Uncaught ReferenceError: Property 'console' doesn't exist
      // See: https://github.com/facebook/hermes/issues/675
      // However React Native provides a `console` implementation when setting up error handling:
      // https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/InitializeCore.js
      return undefined;
    } else if (error.name === 'EvalError') {
      // eslint-disable-next-line no-empty-function
      return async function* AsyncGeneratorFunctionInstance() {};
    } else {
      throw error;
    }
  }
};

/**
 * If the platform supports async generator functions, this will be an
 * async generator function instance. Otherwise, it will be `undefined`.
 *
 * @type {AsyncGeneratorFunction | undefined}
 */
       const AsyncGeneratorFunctionInstance =
  getAsyncGeneratorFunctionInstance();$h͏_once.AsyncGeneratorFunctionInstance(AsyncGeneratorFunctionInstance);
})()
,
// === 1. ses ./src/assert-sloppy-mode.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]]]]]);

/** getThis returns globalThis in sloppy mode or undefined in strict mode. */
function getThis() {
  return this;
}

if (getThis()) {
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_SLOPPY.md
  throw TypeError(`SES failed to initialize, sloppy mode (SES_NO_SLOPPY)`);
}
})()
,
// === 2. env-options ./src/env-options.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/* global globalThis */
// @ts-check

// `@endo/env-options` needs to be imported quite early, and so should
// avoid importing from ses or anything that depends on ses.

// /////////////////////////////////////////////////////////////////////////////
// Prelude of cheap good - enough imitations of things we'd use or
// do differently if we could depend on ses

// eslint-disable-next-line no-restricted-globals
const localThis = globalThis;

const { Object, Reflect, Array, String, JSON, Error } = localThis;
const { freeze } = Object;
const { apply } = Reflect;

// Should be equivalent to the one in ses' commons.js even though it
// uses the other technique.
const uncurryThis =
  fn =>
  (receiver, ...args) =>
    apply(fn, receiver, args);
const arrayPush = uncurryThis(Array.prototype.push);
const arrayIncludes = uncurryThis(Array.prototype.includes);
const stringSplit = uncurryThis(String.prototype.split);

const q = JSON.stringify;

const Fail = (literals, ...args) => {
  let msg = literals[0];
  for (let i = 0; i < args.length; i += 1) {
    msg = `${msg}${args[i]}${literals[i + 1]}`;
  }
  throw Error(msg);
};

// end prelude
// /////////////////////////////////////////////////////////////////////////////

/**
 * `makeEnvironmentCaptor` provides a mechanism for getting environment
 * variables, if they are needed, and a way to catalog the names of all
 * the environment variables that were captured.
 *
 * @param {object} aGlobal
 * @param {boolean} [dropNames] Defaults to false. If true, don't track
 * names used.
 */
       const makeEnvironmentCaptor = (aGlobal, dropNames = false) => {
  /** @type {string[]} */
  const capturedEnvironmentOptionNames = [];

  /**
   * Gets an environment option by name and returns the option value or the
   * given default.
   *
   * @param {string} optionName
   * @param {string} defaultSetting
   * @param {string[]} [optOtherValues]
   * If provided, the option value must be included or match `defaultSetting`.
   * @returns {string}
   */
  const getEnvironmentOption = (
    optionName,
    defaultSetting,
    optOtherValues = undefined,
  ) => {
    typeof optionName === 'string' ||
      Fail`Environment option name ${q(optionName)} must be a string.`;
    typeof defaultSetting === 'string' ||
      Fail`Environment option default setting ${q(
        defaultSetting,
      )} must be a string.`;

    /** @type {string} */
    let setting = defaultSetting;
    const globalProcess = aGlobal.process || undefined;
    const globalEnv =
      (typeof globalProcess === 'object' && globalProcess.env) || undefined;
    if (typeof globalEnv === 'object') {
      if (optionName in globalEnv) {
        if (!dropNames) {
          arrayPush(capturedEnvironmentOptionNames, optionName);
        }
        const optionValue = globalEnv[optionName];
        // eslint-disable-next-line @endo/no-polymorphic-call
        typeof optionValue === 'string' ||
          Fail`Environment option named ${q(
            optionName,
          )}, if present, must have a corresponding string value, got ${q(
            optionValue,
          )}`;
        setting = optionValue;
      }
    }
    optOtherValues === undefined ||
      setting === defaultSetting ||
      arrayIncludes(optOtherValues, setting) ||
      Fail`Unrecognized ${q(optionName)} value ${q(
        setting,
      )}. Expected one of ${q([defaultSetting, ...optOtherValues])}`;
    return setting;
  };
  freeze(getEnvironmentOption);

  /**
   * @template {string} [T=string]
   * @param {string} optionName
   * @returns {T[]}
   */
  const getEnvironmentOptionsList = optionName => {
    const option = getEnvironmentOption(optionName, '');
    return freeze(option === '' ? [] : stringSplit(option, ','));
  };
  freeze(getEnvironmentOptionsList);

  /**
   * @template {string} [T=string]
   * @param {string} optionName
   * @param {T} element
   * @returns {boolean}
   */
  const environmentOptionsListHas = (optionName, element) =>
    arrayIncludes(getEnvironmentOptionsList(optionName), element);

  const getCapturedEnvironmentOptionNames = () => {
    return freeze([...capturedEnvironmentOptionNames]);
  };
  freeze(getCapturedEnvironmentOptionNames);

  return freeze({
    getEnvironmentOption,
    getEnvironmentOptionsList,
    environmentOptionsListHas,
    getCapturedEnvironmentOptionNames,
  });
};$h͏_once.makeEnvironmentCaptor(makeEnvironmentCaptor);
freeze(makeEnvironmentCaptor);

/**
 * For the simple case, where the global in question is `globalThis` and no
 * reporting of option names is desired.
 */
       const {
  getEnvironmentOption,
  getEnvironmentOptionsList,
  environmentOptionsListHas,
} = makeEnvironmentCaptor(localThis, true);$h͏_once.getEnvironmentOption(getEnvironmentOption);$h͏_once.getEnvironmentOptionsList(getEnvironmentOptionsList);$h͏_once.environmentOptionsListHas(environmentOptionsListHas);
})()
,
// === 3. env-options ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/env-options.js", []]]);
})()
,
// === 4. immutable-arraybuffer ./src/immutable-arraybuffer-pony.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/* global globalThis */

const {
  ArrayBuffer,
  Object,
  Reflect,
  Symbol,
  TypeError,
  Uint8Array,
  WeakMap,
  // Capture structuredClone before it can be scuttled.
  structuredClone: optStructuredClone
  // eslint-disable-next-line no-restricted-globals
} = globalThis;

const { freeze, defineProperty, getPrototypeOf, getOwnPropertyDescriptor } =
  Object;
const { apply, ownKeys } = Reflect;
const { toStringTag } = Symbol;

const { prototype: arrayBufferPrototype } = ArrayBuffer;
const { slice, transfer: optTransfer } = arrayBufferPrototype;
// @ts-expect-error TS doesn't know it'll be there
const { get: arrayBufferByteLength } = getOwnPropertyDescriptor(
  arrayBufferPrototype,
  'byteLength',
);

const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);
const { set: uint8ArraySet } = typedArrayPrototype;
// @ts-expect-error TS doesn't know it'll be there
const { get: uint8ArrayBuffer } = getOwnPropertyDescriptor(
  typedArrayPrototype,
  'buffer',
);

/**
 * Copy a range of values from a genuine ArrayBuffer exotic object into a new
 * ArrayBuffer.
 *
 * @param {ArrayBuffer} realBuffer
 * @param {number} [start]
 * @param {number} [end]
 * @returns {ArrayBuffer}
 */
const arrayBufferSlice = (realBuffer, start = undefined, end = undefined) =>
  apply(slice, realBuffer, [start, end]);

/**
 * Move the contents of a genuine ArrayBuffer exotic object into a new fresh
 * ArrayBuffer and detach the original source.
 * We can only do this on platforms that support `structuredClone` or
 * `ArrayBuffer.prototype.transfer`.
 * On other platforms, we can still emulate
 * `ArrayBuffer.prototoype.sliceToImmutable`, but not
 * `ArrayBuffer.prototype.transferToImmutable`.
 * Currently, these known-deficient platforms are
 * - Hermes
 * - Node.js <= 16
 * - Apparently some versions of JavaScriptCore that are still of concern.
 *
 * @param {ArrayBuffer} arrayBuffer
 * @returns {ArrayBuffer}
 */
let optArrayBufferTransfer;

if (optTransfer) {
  optArrayBufferTransfer = arrayBuffer => apply(optTransfer, arrayBuffer, []);
} else if (optStructuredClone) {
  optArrayBufferTransfer = arrayBuffer => {
    // Hopefully, a zero-length slice is cheap, but still enforces that
    // `arrayBuffer` is a genuine `ArrayBuffer` exotic object.
    arrayBufferSlice(arrayBuffer, 0, 0);
    return optStructuredClone(arrayBuffer, {
      transfer: [arrayBuffer],
    });
  };
} else {
  // Assignment is redundant, but remains for clarity.
  optArrayBufferTransfer = undefined;
}

/**
 * If we could use classes with private fields everywhere, this would have
 * been a `this.#buffer` private field on an `ImmutableArrayBufferInternal`
 * class. But we cannot do so on Hermes. So, instead, we
 * emulate the `this.#buffer` private field, including its use as a brand check.
 * Maps from all and only emulated Immutable ArrayBuffers to real ArrayBuffers.
 *
 * @type {Pick<WeakMap<ArrayBuffer, ArrayBuffer>, 'get' | 'has' | 'set'>}
 */
const buffers = new WeakMap();
// Avoid post-hoc prototype lookups.
for (const methodName of ['get', 'has', 'set']) {
  defineProperty(buffers, methodName, { value: buffers[methodName] });
}
const getBuffer = immuAB => {
  // Safe because this WeakMap owns its get method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  const result = buffers.get(immuAB);
  if (result) {
    return result;
  }
  throw TypeError('Not an emulated Immutable ArrayBuffer');
};

// Omits `constructor` so `Array.prototype.constructor` is inherited.
const ImmutableArrayBufferInternalPrototype = {
  __proto__: arrayBufferPrototype,
  get byteLength() {
    return apply(arrayBufferByteLength, getBuffer(this), []);
  },
  get detached() {
    getBuffer(this); // shim brand check
    return false;
  },
  get maxByteLength() {
    // Not underlying maxByteLength, which is irrelevant
    return apply(arrayBufferByteLength, getBuffer(this), []);
  },
  get resizable() {
    getBuffer(this); // shim brand check
    return false;
  },
  get immutable() {
    getBuffer(this); // shim brand check
    return true;
  },
  slice(start = undefined, end = undefined) {
    return arrayBufferSlice(getBuffer(this), start, end);
  },
  sliceToImmutable(start = undefined, end = undefined) {
    // eslint-disable-next-line no-use-before-define
    return sliceBufferToImmutable(getBuffer(this), start, end);
  },
  resize(_newByteLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot resize an immutable ArrayBuffer');
  },
  transfer(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  transferToFixedLength(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  transferToImmutable(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  /**
   * See https://github.com/endojs/endo/tree/master/packages/immutable-arraybuffer#purposeful-violation
   */
  [toStringTag]: 'ImmutableArrayBuffer',
};

// Better fidelity emulation of a class prototype
for (const key of ownKeys(ImmutableArrayBufferInternalPrototype)) {
  defineProperty(ImmutableArrayBufferInternalPrototype, key, {
    enumerable: false,
  });
}

/**
 * Emulates what would have been the encapsulated `ImmutableArrayBufferInternal`
 * class constructor. This function takes the `realBuffer` which its
 * result encapsulates. Security demands that this result has exclusive access
 * to the `realBuffer` it is given, which its callers must ensure.
 *
 * @param {ArrayBuffer} realBuffer
 * @returns {ArrayBuffer}
 */
const makeImmutableArrayBufferInternal = realBuffer => {
  const result = /** @type {ArrayBuffer} */ (
    /** @type {unknown} */ ({
      __proto__: ImmutableArrayBufferInternalPrototype,
    })
  );
  // Safe because this WeakMap owns its set method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  buffers.set(result, realBuffer);
  return result;
};
// Since `makeImmutableArrayBufferInternal` MUST not escape,
// this `freeze` is just belt-and-suspenders.
freeze(makeImmutableArrayBufferInternal);

/**
 * @param {ArrayBuffer} buffer
 * @returns {boolean}
 */
// eslint-disable-next-line @endo/no-polymorphic-call
       const isBufferImmutable = buffer => buffers.has(buffer);

/**
 * Creates an immutable slice of the given buffer.
 * @param {ArrayBuffer} buffer The original buffer.
 * @param {number} [start] The start index.
 * @param {number} [end] The end index.
 * @returns {ArrayBuffer} The sliced immutable ArrayBuffer.
 */$h͏_once.isBufferImmutable(isBufferImmutable);
       const sliceBufferToImmutable = (
  buffer,
  start = undefined,
  end = undefined,
) => {
  // Safe because this WeakMap owns its get method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  let realBuffer = buffers.get(buffer);
  if (realBuffer === undefined) {
    realBuffer = buffer;
  }
  return makeImmutableArrayBufferInternal(
    arrayBufferSlice(realBuffer, start, end),
  );
};$h͏_once.sliceBufferToImmutable(sliceBufferToImmutable);

let transferBufferToImmutable;
if (optArrayBufferTransfer) {
  /**
   * Transfer the contents to a new Immutable ArrayBuffer
   *
   * @param {ArrayBuffer} buffer The original buffer.
   * @param {number} [newLength] The start index.
   * @returns {ArrayBuffer}
   */
  transferBufferToImmutable = (buffer, newLength = undefined) => {
    if (newLength === undefined) {
      buffer = optArrayBufferTransfer(buffer);
    } else if (optTransfer) {
      buffer = apply(optTransfer, buffer, [newLength]);
    } else {
      buffer = optArrayBufferTransfer(buffer);
      const oldLength = buffer.byteLength;
      // eslint-disable-next-line @endo/restrict-comparison-operands
      if (newLength <= oldLength) {
        buffer = arrayBufferSlice(buffer, 0, newLength);
      } else {
        const oldTA = new Uint8Array(buffer);
        const newTA = new Uint8Array(newLength);
        apply(uint8ArraySet, newTA, [oldTA]);
        buffer = apply(uint8ArrayBuffer, newTA, []);
      }
    }
    const result = makeImmutableArrayBufferInternal(buffer);
    return /** @type {ArrayBuffer} */ (/** @type {unknown} */ (result));
  };
} else {
  transferBufferToImmutable = undefined;
}

       const optTransferBufferToImmutable = transferBufferToImmutable;$h͏_once.optTransferBufferToImmutable(optTransferBufferToImmutable);
})()
,
// === 5. immutable-arraybuffer ./src/immutable-arraybuffer-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let isBufferImmutable,sliceBufferToImmutable,optXferBuf2Immu;$h͏_imports([["./immutable-arraybuffer-pony.js", [["isBufferImmutable",[$h͏_a => (isBufferImmutable = $h͏_a)]],["sliceBufferToImmutable",[$h͏_a => (sliceBufferToImmutable = $h͏_a)]],["optTransferBufferToImmutable",[$h͏_a => (optXferBuf2Immu = $h͏_a)]]]]]);







const {
  ArrayBuffer,
  JSON,
  Object,
  Reflect
  // eslint-disable-next-line no-restricted-globals
} = globalThis;

// Even though the imported one is not exported by the pony as a live binding,
// TS doesn't know that,
// so it cannot do its normal flow-based inference. By making and using a local
// copy, no problem.
const optTransferBufferToImmutable = optXferBuf2Immu;

const { getOwnPropertyDescriptors, defineProperties, defineProperty } = Object;
const { ownKeys } = Reflect;
const { prototype: arrayBufferPrototype } = ArrayBuffer;
const { stringify } = JSON;

const arrayBufferMethods = {
  /**
   * Creates an immutable slice of the given buffer.
   *
   * @this {ArrayBuffer} buffer The original buffer.
   * @param {number} [start] The start index.
   * @param {number} [end] The end index.
   * @returns {ArrayBuffer} The sliced immutable ArrayBuffer.
   */
  sliceToImmutable(start = undefined, end = undefined) {
    return sliceBufferToImmutable(this, start, end);
  },

  /**
   * @this {ArrayBuffer}
   */
  get immutable() {
    return isBufferImmutable(this);
  },

  ...(optTransferBufferToImmutable
    ? {
        /**
         * Transfer the contents to a new immutable ArrayBuffer
         *
         * @this {ArrayBuffer} buffer The original buffer.
         * @param {number} [newLength] The start index.
         * @returns {ArrayBuffer} The new immutable ArrayBuffer.
         */
        transferToImmutable(newLength = undefined) {
          return optTransferBufferToImmutable(this, newLength);
        },
      }
    : {}),
};

// Better fidelity emulation of a class prototype
for (const key of ownKeys(arrayBufferMethods)) {
  defineProperty(arrayBufferMethods, key, {
    enumerable: false,
  });
}

// Modern shim practice frowns on conditional installation, at least for
// proposals prior to stage 3. This is so changes to the proposal since
// an old shim was distributed don't need to worry about the proposal
// breaking old code depending on the old shim. Thus, if we detect that
// we're about to overwrite a prior installation, we simply issue this
// warning and continue.
//
// TODO, if the primordials are frozen after the prior implementation, such as
// by `lockdown`, then this precludes overwriting as expected. However, for
// this case, the following warning text will be confusing.
//
// Allowing polymorphic calls because these occur during initialization.
// eslint-disable-next-line @endo/no-polymorphic-call
const overwrites = ownKeys(arrayBufferMethods).filter(
  key => key in arrayBufferPrototype,
);
if (overwrites.length > 0) {
  // eslint-disable-next-line @endo/no-polymorphic-call
  console.warn(
    `About to overwrite ArrayBuffer.prototype properties ${stringify(overwrites)}`,
  );
}

defineProperties(
  arrayBufferPrototype,
  getOwnPropertyDescriptors(arrayBufferMethods),
);
})()
,
// === 6. immutable-arraybuffer ./shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/immutable-arraybuffer-shim.js", []]]);
})()
,
// === 7. ses ./src/error/stringify-utils.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,isArray,arrayJoin,arraySlice,arraySort,arrayMap,keys,fromEntries,freeze,is,isError,setAdd,setHas,stringIncludes,stringStartsWith,stringifyJson,toStringTagSymbol;$h͏_imports([["../commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arraySlice",[$h͏_a => (arraySlice = $h͏_a)]],["arraySort",[$h͏_a => (arraySort = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["keys",[$h͏_a => (keys = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]],["stringIncludes",[$h͏_a => (stringIncludes = $h͏_a)]],["stringStartsWith",[$h͏_a => (stringStartsWith = $h͏_a)]],["stringifyJson",[$h͏_a => (stringifyJson = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]]]]]);






















/** @import {Stringable} from '../../types.js' */

/**
 * Joins English terms with commas and an optional conjunction.
 *
 * @param {(string | Stringable)[]} terms
 * @param {"and" | "or"} conjunction
 */
       const enJoin = (terms, conjunction) => {
  if (terms.length === 0) {
    return '(none)';
  } else if (terms.length === 1) {
    return terms[0];
  } else if (terms.length === 2) {
    const [first, second] = terms;
    return `${first} ${conjunction} ${second}`;
  } else {
    return `${arrayJoin(arraySlice(terms, 0, -1), ', ')}, ${conjunction} ${
      terms[terms.length - 1]
    }`;
  }
};

/**
 * Prepend the correct indefinite article onto a noun, typically a typeof
 * result, e.g., "an object" vs. "a number"
 *
 * @param {string} str The noun to prepend
 * @returns {string} The noun prepended with a/an
 */$h͏_once.enJoin(enJoin);
const an = str => {
  str = `${str}`;
  if (str.length >= 1 && stringIncludes('aeiouAEIOU', str[0])) {
    return `an ${str}`;
  }
  return `a ${str}`;
};$h͏_once.an(an);
freeze(an);


/**
 * Like `JSON.stringify` but does not blow up if given a cycle or a bigint.
 * This is not
 * intended to be a serialization to support any useful unserialization,
 * or any programmatic use of the resulting string. The string is intended
 * *only* for showing a human under benign conditions, in order to be
 * informative enough for some
 * logging purposes. As such, this `bestEffortStringify` has an
 * imprecise specification and may change over time.
 *
 * The current `bestEffortStringify` possibly emits too many "seen"
 * markings: Not only for cycles, but also for repeated subtrees by
 * object identity.
 *
 * As a best effort only for diagnostic interpretation by humans,
 * `bestEffortStringify` also turns various cases that normal
 * `JSON.stringify` skips or errors on, like `undefined` or bigints,
 * into strings that convey their meaning. To distinguish this from
 * strings in the input, these synthesized strings always begin and
 * end with square brackets. To distinguish those strings from an
 * input string with square brackets, and input string that starts
 * with an open square bracket `[` is itself placed in square brackets.
 *
 * @param {any} payload
 * @param {(string|number)=} spaces
 * @returns {string}
 */
const bestEffortStringify = (payload, spaces = undefined) => {
  const seenSet = new Set();
  const replacer = (_, val) => {
    switch (typeof val) {
      case 'object': {
        if (val === null) {
          return null;
        }
        if (setHas(seenSet, val)) {
          return '[Seen]';
        }
        setAdd(seenSet, val);
        if (isError(val)) {
          return `[${val.name}: ${val.message}]`;
        }
        if (toStringTagSymbol in val) {
          // For the built-ins that have or inherit a `Symbol.toStringTag`-named
          // property, most of them inherit the default `toString` method,
          // which will print in a similar manner: `"[object Foo]"` vs
          // `"[Foo]"`. The exceptions are
          //    * `Symbol.prototype`, `BigInt.prototype`, `String.prototype`
          //      which don't matter to us since we handle primitives
          //      separately and we don't care about primitive wrapper objects.
          //    * TODO
          //      `Date.prototype`, `TypedArray.prototype`.
          //      Hmmm, we probably should make special cases for these. We're
          //      not using these yet, so it's not urgent. But others will run
          //      into these.
          //
          // Once #2018 is closed, the only objects in our code that have or
          // inherit a `Symbol.toStringTag`-named property are remotables
          // or their remote presences.
          // This printing will do a good job for these without
          // violating abstraction layering. This behavior makes sense
          // purely in terms of JavaScript concepts. That's some of the
          // motivation for choosing that representation of remotables
          // and their remote presences in the first place.
          return `[${val[toStringTagSymbol]}]`;
        }
        if (isArray(val)) {
          return val;
        }
        const names = keys(val);
        if (names.length < 2) {
          return val;
        }
        let sorted = true;
        for (let i = 1; i < names.length; i += 1) {
          if (names[i - 1] >= names[i]) {
            sorted = false;
            break;
          }
        }
        if (sorted) {
          return val;
        }
        arraySort(names);
        const entries = arrayMap(names, name => [name, val[name]]);
        return fromEntries(entries);
      }
      case 'function': {
        return `[Function ${val.name || '<anon>'}]`;
      }
      case 'string': {
        if (stringStartsWith(val, '[')) {
          return `[${val}]`;
        }
        return val;
      }
      case 'undefined':
      case 'symbol': {
        return `[${String(val)}]`;
      }
      case 'bigint': {
        return `[${val}n]`;
      }
      case 'number': {
        if (is(val, NaN)) {
          return '[NaN]';
        } else if (val === Infinity) {
          return '[Infinity]';
        } else if (val === -Infinity) {
          return '[-Infinity]';
        }
        return val;
      }
      default: {
        return val;
      }
    }
  };
  try {
    return stringifyJson(payload, replacer, spaces);
  } catch (_err) {
    // Don't do anything more fancy here if there is any
    // chance that might throw, unless you surround that
    // with another try-catch-recovery. For example,
    // the caught thing might be a proxy or other exotic
    // object rather than an error. The proxy might throw
    // whenever it is possible for it to.
    return '[Something that failed to stringify]';
  }
};$h͏_once.bestEffortStringify(bestEffortStringify);
freeze(bestEffortStringify);
})()
,
// === 8. ses ./src/error/types.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check

/** @import {GenericErrorConstructor, AssertMakeErrorOptions, DetailsToken, Stringable} from '../../types.js' */

/**
 * @typedef {object} VirtualConsole
 * @property {Console['debug']} debug
 * @property {Console['log']} log
 * @property {Console['info']} info
 * @property {Console['warn']} warn
 * @property {Console['error']} error
 *
 * @property {Console['trace']} trace
 * @property {Console['dirxml']} dirxml
 * @property {Console['group']} group
 * @property {Console['groupCollapsed']} groupCollapsed
 *
 * @property {Console['assert']} assert
 * @property {Console['timeLog']} timeLog
 *
 * @property {Console['clear']} clear
 * @property {Console['count']} count
 * @property {Console['countReset']} countReset
 * @property {Console['dir']} dir
 * @property {Console['groupEnd']} groupEnd
 *
 * @property {Console['table']} table
 * @property {Console['time']} time
 * @property {Console['timeEnd']} timeEnd
 * @property {Console['timeStamp']} timeStamp
 */

/* This is deliberately *not* JSDoc, it is a regular comment.
 *
 * TODO: We'd like to add the following properties to the above
 * VirtualConsole, but they currently cause conflicts where
 * some Typescript implementations don't have these properties
 * on the Console type.
 *
 * @property {Console['profile']} profile
 * @property {Console['profileEnd']} profileEnd
 */

/**
 * @typedef {'debug' | 'log' | 'info' | 'warn' | 'error'} LogSeverity
 */

/**
 * @typedef ConsoleFilter
 * @property {(severity: LogSeverity) => boolean} canLog
 */

/**
 * @callback FilterConsole
 * @param {VirtualConsole} baseConsole
 * @param {ConsoleFilter} filter
 * @param {string} [topic]
 * @returns {VirtualConsole}
 */
})()
,
// === 9. ses ./src/error/internal-types.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check

/**
 * @import {VirtualConsole} from './types.js'
 */

/**
 * @typedef {readonly any[]} LogArgs
 *
 * This is an array suitable to be used as arguments of a console
 * level message *after* the format string argument. It is the result of
 * a `details` template string and consists of alternating literal strings
 * and substitution values, starting with a literal string. At least that
 * first literal string is always present.
 */

/**
 * @callback NoteCallback
 *
 * @param {Error} error
 * @param {LogArgs} noteLogArgs
 * @returns {void}
 */

/**
 * @callback GetStackString
 * @param {Error} error
 * @returns {string=}
 */

/**
 * @typedef {object} LoggedErrorHandler
 *
 * Used to parameterize `makeCausalConsole` to give it access to potentially
 * hidden information to augment the logging of errors.
 *
 * @property {GetStackString} getStackString
 * @property {(error: Error) => string} tagError
 * @property {() => void} resetErrorTagNum for debugging purposes only
 * @property {(error: Error) => (LogArgs | undefined)} getMessageLogArgs
 * @property {(error: Error) => (LogArgs | undefined)} takeMessageLogArgs
 * @property {(error: Error, callback?: NoteCallback) => LogArgs[] } takeNoteLogArgsArray
 */

// /////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {readonly [string, ...any[]]} LogRecord
 */

/**
 * @typedef {object} LoggingConsoleKit
 * @property {VirtualConsole} loggingConsole
 * @property {() => readonly LogRecord[]} takeLog
 */

/**
 * @typedef {object} MakeLoggingConsoleKitOptions
 * @property {boolean=} shouldResetForDebugging
 */

/**
 * @callback MakeLoggingConsoleKit
 *
 * A logging console just accumulates the contents of all permitted calls,
 * making them available to callers of `takeLog()`. Calling `takeLog()`
 * consumes these, so later calls to `takeLog()` will only provide a log of
 * calls that have happened since then.
 *
 * @param {LoggedErrorHandler} loggedErrorHandler
 * @param {MakeLoggingConsoleKitOptions=} options
 * @returns {LoggingConsoleKit}
 */

/**
 * @typedef {{
 *   NOTE: 'ERROR_NOTE:',
 *   MESSAGE: 'ERROR_MESSAGE:',
 *   CAUSE: 'cause:',
 *   ERRORS: 'errors:',
 * }} ErrorInfo
 */

/**
 * @typedef {ErrorInfo[keyof ErrorInfo]} ErrorInfoKind
 */

/**
 * @callback MakeCausalConsole
 *
 * Makes a causal console wrapper of a `baseConsole`, where the causal console
 * calls methods of the `loggedErrorHandler` to customize how it handles logged
 * errors.
 *
 * @param {VirtualConsole | undefined} baseConsole
 * @param {LoggedErrorHandler} loggedErrorHandler
 * @returns {VirtualConsole | undefined}
 */
})()
,
// === 10. cache-map ./src/cachemap.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check
/* global globalThis */
/* eslint-disable @endo/no-polymorphic-call */

// eslint-disable-next-line no-restricted-globals
const { Error, TypeError, WeakMap } = globalThis;
// eslint-disable-next-line no-restricted-globals
const { parse, stringify } = JSON;
// eslint-disable-next-line no-restricted-globals
const { isSafeInteger } = Number;
// eslint-disable-next-line no-restricted-globals
const { freeze } = Object;
// eslint-disable-next-line no-restricted-globals
const { toStringTag: toStringTagSymbol } = Symbol;

// eslint-disable-next-line no-restricted-globals
const UNKNOWN_KEY = Symbol('UNKNOWN_KEY');

/**
 * @template T
 * @typedef {T extends object ? { -readonly [K in keyof T]: T[K] } : never} WritableDeep
 *   Intentionally limited to local needs; refer to
 *   https://github.com/sindresorhus/type-fest if insufficient.
 */

/**
 * @template T
 * @param {T} value
 * @param {<U,>(name: string, value: U) => U} [reviver]
 * @returns {WritableDeep<T>}
 */
const deepCopyJsonable = (value, reviver) => {
  const encoded = stringify(value);
  const decoded = parse(encoded, reviver);
  return decoded;
};

const freezingReviver = (_name, value) => freeze(value);

/** @type {<T,>(value: T) => T} */
const deepCopyAndFreezeJsonable = value =>
  deepCopyJsonable(value, freezingReviver);

/**
 * A cache of bounded size, implementing the WeakMap interface but holding keys
 * strongly if created with a non-weak `makeMap` option of
 * {@link makeCacheMapKit}.
 *
 * @template K
 * @template V
 * @typedef {Pick<Map<K, V>, Exclude<keyof WeakMap<WeakKey, *>, 'set'>> & {set: (key: K, value: V) => WeakMapAPI<K, V>}} WeakMapAPI
 */

/**
 * @template K
 * @template V
 * @typedef {WeakMapAPI<K, V> & ({clear?: undefined} | Pick<Map<K, V>, 'clear'>)} SingleEntryMap
 */

/**
 * A cell of a doubly-linked ring (circular list) for a cache map.
 * Instances are not frozen, and so should be closely encapsulated.
 *
 * @template K
 * @template V
 * @typedef {object} CacheMapCell
 * @property {number} id for debugging
 * @property {CacheMapCell<K, V>} next
 * @property {CacheMapCell<K, V>} prev
 * @property {SingleEntryMap<K, V>} data
 */

/**
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} prev
 * @param {number} id
 * @param {SingleEntryMap<K, V>} data
 * @returns {CacheMapCell<K, V>}
 */
const appendNewCell = (prev, id, data) => {
  const next = prev?.next;
  const cell = { id, next, prev, data };
  prev.next = cell;
  next.prev = cell;
  return cell;
};

/**
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} cell
 * @param {CacheMapCell<K, V>} prev
 * @param {CacheMapCell<K, V>} [next]
 */
const moveCellAfter = (cell, prev, next = prev.next) => {
  if (cell === prev || cell === next) return; // already in position

  // Splice out cell.
  const { prev: oldPrev, next: oldNext } = cell;
  oldPrev.next = oldNext;
  oldNext.prev = oldPrev;

  // Splice in cell after prev.
  cell.prev = prev;
  cell.next = next;
  prev.next = cell;
  next.prev = cell;
};

/**
 * Clear out a cell to prepare it for future use. Its map is preserved when
 * possible, but must instead be replaced if the associated key is not known.
 *
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} cell
 * @param {K | UNKNOWN_KEY} oldKey
 * @param {() => SingleEntryMap<K, V>} [makeMap] required when the key is unknown
 */
const resetCell = (cell, oldKey, makeMap) => {
  if (oldKey !== UNKNOWN_KEY) {
    cell.data.delete(oldKey);
    return;
  }
  if (cell.data.clear) {
    cell.data.clear();
    return;
  }
  // WeakMap instances must be replaced when the key is unknown.
  if (!makeMap) {
    throw Error('internal: makeMap is required with UNKNOWN_KEY');
  }
  cell.data = makeMap();
};

const zeroMetrics = freeze({
  totalQueryCount: 0,
  totalHitCount: 0
  // TODO?
  // * method-specific counts
  // * liveTouchStats/evictedTouchStats { count, sum, mean, min, max }
  //   * p50/p90/p95/p99 via Ben-Haim/Tom-Tov streaming histograms
});
/** @typedef {typeof zeroMetrics} CacheMapMetrics */

/**
 * @template {MapConstructor | WeakMapConstructor} [C=WeakMapConstructor]
 * @template {Parameters<InstanceType<C>['set']>[0]} [K=Parameters<InstanceType<C>['set']>[0]]
 * @template {unknown} [V=unknown]
 * @typedef {object} CacheMapKit
 * @property {WeakMapAPI<K, V>} cache
 * @property {() => CacheMapMetrics} getMetrics
 */

/**
 * Create a bounded-size cache having WeakMap-compatible
 * `has`/`get`/`set`/`delete` methods, capable of supporting SES (specifically
 * `assert` error notes).
 * Key validity, comparison, and referential strength are controlled by the
 * `makeMap` option, which defaults to `WeakMap` but can be set to any producer
 * of objects with those methods (e.g., using `Map` allows for arbitrary keys
 * which will be strongly held).
 * Cache eviction policy is not currently configurable, but strives for a hit
 * ratio at least as good as
 * [LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU) (e.g., it
 * might be
 * [CLOCK](https://en.wikipedia.org/wiki/Page_replacement_algorithm#Clock)
 * or [SIEVE](https://sievecache.com/)).
 *
 * @template {MapConstructor | WeakMapConstructor} [C=WeakMapConstructor]
 * @template {Parameters<InstanceType<C>['set']>[0]} [K=Parameters<InstanceType<C>['set']>[0]]
 * @template {unknown} [V=unknown]
 * @param {number} capacity
 * @param {object} [options]
 * @param {C | (() => SingleEntryMap<K, V>)} [options.makeMap]
 * @returns {CacheMapKit<C, K, V>}
 */
       const makeCacheMapKit = (capacity, options = {}) => {
  if (!isSafeInteger(capacity) || capacity < 0) {
    throw TypeError(
      'capacity must be a non-negative safe integer number <= 2**53 - 1',
    );
  }

  /**
   * @template V
   * @type {<V,>() => SingleEntryMap<K, V>}
   */
  const makeMap = (MaybeCtor => {
    try {
      // @ts-expect-error
      MaybeCtor();
      return /** @type {any} */ (MaybeCtor);
    } catch (err) {
      // @ts-expect-error
      const constructNewMap = () => new MaybeCtor();
      return constructNewMap;
    }
  })(options.makeMap ?? WeakMap);
  const tag =
    /** @type {any} */ (makeMap()).clear === undefined
      ? 'WeakCacheMap'
      : 'CacheMap';

  /** @type {WeakMapAPI<K, CacheMapCell<K, V>>} */
  const keyToCell = makeMap();
  // @ts-expect-error this sentinel head is special
  const head = /** @type {CacheMapCell<K, V>} */ ({
    id: 0,
    // next and prev are established below as self-referential.
    next: undefined,
    prev: undefined,
    data: {
      has: () => {
        throw Error('internal: sentinel head cell has no data');
      },
    },
  });
  head.next = head;
  head.prev = head;
  let cellCount = 0;

  const metrics = deepCopyJsonable(zeroMetrics);
  const getMetrics = () => deepCopyAndFreezeJsonable(metrics);

  /**
   * Touching moves a cell to first position so LRU eviction can target the last
   * cell (`head.prev`).
   *
   * @type {(key: K) => (CacheMapCell<K, V> | undefined)}
   */
  const touchKey = key => {
    metrics.totalQueryCount += 1;
    const cell = keyToCell.get(key);
    if (!cell?.data.has(key)) return undefined;

    metrics.totalHitCount += 1;
    moveCellAfter(cell, head);
    return cell;
  };

  /** @type {WeakMapAPI<K, V>['has']} */
  const has = key => {
    const cell = touchKey(key);
    return cell !== undefined;
  };
  freeze(has);

  /** @type {WeakMapAPI<K, V>['get']} */
  const get = key => {
    const cell = touchKey(key);
    return cell?.data.get(key);
  };
  freeze(get);

  /** @type {WeakMapAPI<K, V>['set']} */
  const set = (key, value) => {
    let cell = touchKey(key);
    if (cell) {
      cell.data.set(key, value);
      // eslint-disable-next-line no-use-before-define
      return implementation;
    }

    if (cellCount < capacity) {
      // Add and use a new cell at first position.
      cell = appendNewCell(head, cellCount + 1, makeMap());
      cellCount += 1; // intentionally follows cell creation
      cell.data.set(key, value);
    } else if (capacity > 0) {
      // Reuse the current tail, moving it to first position.
      cell = head.prev;
      resetCell(/** @type {any} */ (cell), UNKNOWN_KEY, makeMap);
      cell.data.set(key, value);
      moveCellAfter(cell, head);
    }

    // Don't establish this entry until prior steps succeed.
    if (cell) keyToCell.set(key, cell);

    // eslint-disable-next-line no-use-before-define
    return implementation;
  };
  freeze(set);

  // "delete" is a keyword.
  const { delete: deleteEntry } = {
    /** @type {WeakMapAPI<K, V>['delete']} */
    delete: key => {
      const cell = keyToCell.get(key);
      if (!cell?.data.has(key)) {
        keyToCell.delete(key);
        return false;
      }
      moveCellAfter(cell, head.prev);
      resetCell(cell, key);
      keyToCell.delete(key);
      return true;
    },
  };
  freeze(deleteEntry);

  const implementation = /** @type {WeakMapAPI<K, V>} */ ({
    has,
    get,
    set,
    delete: deleteEntry,
    // eslint-disable-next-line jsdoc/check-types
    [/** @type {typeof Symbol.toStringTag} */ (toStringTagSymbol)]: tag,
  });
  freeze(implementation);

  const kit = { cache: implementation, getMetrics };
  return freeze(kit);
};$h͏_once.makeCacheMapKit(makeCacheMapKit);
freeze(makeCacheMapKit);
})()
,
// === 11. cache-map ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/cachemap.js", []]]);
})()
,
// === 12. ses ./src/error/note-log-args.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let makeCacheMapKit;$h͏_imports([["@endo/cache-map", [["makeCacheMapKit",[$h͏_a => (makeCacheMapKit = $h͏_a)]]]]]);





/**
 * @import {CacheMapKit} from '@endo/cache-map';
 * @import {LogArgs} from './internal-types.js';
 */

const { freeze } = Object;
const { isSafeInteger } = Number;

const defaultLoggedErrorsBudget = 1000;
const defaultArgsPerErrorBudget = 100;

/**
 * @param {number} [errorsBudget]
 * @param {number} [argsPerErrorBudget]
 */
       const makeNoteLogArgsArrayKit = (
  errorsBudget = defaultLoggedErrorsBudget,
  argsPerErrorBudget = defaultArgsPerErrorBudget,
) => {
  if (!isSafeInteger(argsPerErrorBudget) || argsPerErrorBudget < 1) {
    throw TypeError(
      'argsPerErrorBudget must be a safe positive integer number',
    );
  }

  /**
   * Maps from an error to an array of log args, where each log args is
   * remembered as an annotation on that error. This can be used, for example,
   * to keep track of additional causes of the error. The elements of any
   * log args may include errors which are associated with further annotations.
   * An augmented console, like the causal console of `console.js`, could
   * then retrieve the graph of such annotations.
   *
   * @type {CacheMapKit<WeakMapConstructor, Error, LogArgs[]>}
   */
  const { cache: noteLogArgsArrayMap } = makeCacheMapKit(errorsBudget);

  /**
   * @param {Error} error
   * @param {LogArgs} logArgs
   */
  const addLogArgs = (error, logArgs) => {
    const logArgsArray = noteLogArgsArrayMap.get(error);
    if (logArgsArray !== undefined) {
      if (logArgsArray.length >= argsPerErrorBudget) {
        logArgsArray.shift();
      }
      logArgsArray.push(logArgs);
    } else {
      noteLogArgsArrayMap.set(error, [logArgs]);
    }
  };
  freeze(addLogArgs);

  /**
   * @param {Error} error
   * @returns {LogArgs[] | undefined}
   */
  const takeLogArgsArray = error => {
    const result = noteLogArgsArrayMap.get(error);
    noteLogArgsArrayMap.delete(error);
    return result;
  };
  freeze(takeLogArgsArray);

  return freeze({
    addLogArgs,
    takeLogArgsArray,
  });
};$h͏_once.makeNoteLogArgsArrayKit(makeNoteLogArgsArrayKit);
freeze(makeNoteLogArgsArrayKit);
})()
,
// === 13. ses ./src/error/assert.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let RangeError,TypeError,WeakMap,arrayJoin,arrayMap,arrayPop,arrayPush,assign,freeze,defineProperty,globalThis,is,isError,regexpExec,regexpReplace,sealRegexp,stringIndexOf,stringSlice,stringStartsWith,weakmapDelete,weakmapGet,weakmapHas,weakmapSet,AggregateError,getOwnPropertyDescriptors,ownKeys,create,objectPrototype,hasOwn,an,bestEffortStringify,makeNoteLogArgsArrayKit;$h͏_imports([["../commons.js", [["RangeError",[$h͏_a => (RangeError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["regexpReplace",[$h͏_a => (regexpReplace = $h͏_a)]],["sealRegexp",[$h͏_a => (sealRegexp = $h͏_a)]],["stringIndexOf",[$h͏_a => (stringIndexOf = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]],["stringStartsWith",[$h͏_a => (stringStartsWith = $h͏_a)]],["weakmapDelete",[$h͏_a => (weakmapDelete = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapHas",[$h͏_a => (weakmapHas = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["AggregateError",[$h͏_a => (AggregateError = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]],["./stringify-utils.js", [["an",[$h͏_a => (an = $h͏_a)]],["bestEffortStringify",[$h͏_a => (bestEffortStringify = $h͏_a)]]]],["./types.js", []],["./internal-types.js", []],["./note-log-args.js", [["makeNoteLogArgsArrayKit",[$h͏_a => (makeNoteLogArgsArrayKit = $h͏_a)]]]]]);
















































/**
 * @import {BaseAssert, Assert, AssertionFunctions, AssertionUtilities, DeprecatedAssertionUtilities, Stringable, DetailsToken, MakeAssert} from '../../types.js';
 * @import {LogArgs, NoteCallback, LoggedErrorHandler} from './internal-types.js';
 */

// For internal debugging purposes, uncomment
// const internalDebugConsole = console;

// /////////////////////////////////////////////////////////////////////////////

/**
 * Maps the result of a `quote` or `bare` call back to its input value.
 *
 * @type {WeakMap<Stringable, any>}
 */
const declassifiers = new WeakMap();

/** @type {AssertionUtilities['quote']} */
const quote = (value, spaces = undefined) => {
  const result = freeze({
    toString: freeze(() => bestEffortStringify(value, spaces)),
  });
  weakmapSet(declassifiers, result, value);
  return result;
};$h͏_once.quote(quote);
freeze(quote);

const canBeBare = freeze(/^[\w:-]( ?[\w:-])*$/);

/**
 * @type {AssertionUtilities['bare']}
 */
const bare = (text, spaces = undefined) => {
  if (typeof text !== 'string' || !regexpExec(canBeBare, text)) {
    return quote(text, spaces);
  }
  const result = freeze({
    toString: freeze(() => text),
  });
  weakmapSet(declassifiers, result, text);
  return result;
};$h͏_once.bare(bare);
freeze(bare);

// /////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {{ template: TemplateStringsArray | string[], args: any[] }} DetailsParts
 *
 * The contents of a `details` template literal tag: literal strings (always at
 * least one) and arbitrary substitution values from in between them.
 *
 * Unquoted substitution values are sensitive (and are redacted in error
 * `message` strings), so a DetailsPart must not leak outside of this file.
 */

/**
 * Maps the result of a `details` tagged template literal back to a record of
 * that template literal's contents.
 *
 * @type {WeakMap<DetailsToken, DetailsParts>}
 */
const hiddenDetailsMap = new WeakMap();

/**
 * Construct an error message string from `details` template literal contents,
 * replacing unquoted substitution values with redactions.
 *
 * @param {DetailsParts} hiddenDetails
 * @returns {string}
 */
const getMessageString = ({ template, args }) => {
  const parts = [template[0]];
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    let argStr;
    if (weakmapHas(declassifiers, arg)) {
      argStr = `${arg}`;
    } else if (isError(arg)) {
      argStr = `(${an(arg.name)})`;
    } else {
      argStr = `(${an(typeof arg)})`;
    }
    arrayPush(parts, argStr, template[i + 1]);
  }
  return arrayJoin(parts, '');
};

/**
 * Define `toString` behavior for DetailsToken. To minimize the overhead of
 * creating new instances, we do this with an inherited `this`-sensitive method,
 * even though we normally avoid such sensitivity. To protect the method from
 * inappropriate application, it verifies that `this` is registered in
 * `redactedDetails` before doing interesting work.
 *
 * The behavior must not reveal anything redacted, so we use `getMessageString`
 * to return the same value as the message for a thrown assertion-failure error.
 */
const DetailsTokenProto = freeze({
  toString() {
    const hiddenDetails = weakmapGet(hiddenDetailsMap, this);
    if (hiddenDetails === undefined) {
      return '[Not a DetailsToken]';
    }
    return getMessageString(hiddenDetails);
  },
});
freeze(DetailsTokenProto.toString);

/**
 * Normally this is the function exported as `assert.details` and often
 * spelled `X`. However, if the `{errorTaming: 'unsafe'}` or
 * `{errorTaming: 'unsafe-debug'}` option is
 * given to `lockdown`, then `unredactedDetails` is used instead.
 *
 * There are some unconditional uses of `redactedDetails` in this module. All
 * of them should be uses where the template literal has no redacted (unquoted)
 * substitution values. In those cases, `redactedDetails` is equivalent to
 * `unredactedDetails`.
 *
 * @type {AssertionUtilities['details']}
 */
const redactedDetails = (template, ...args) => {
  // In case the result of this call is never used, perform as little processing
  // as possible here to keep things fast.
  const detailsToken = freeze({ __proto__: DetailsTokenProto });
  weakmapSet(hiddenDetailsMap, detailsToken, { template, args });
  return /** @type {DetailsToken} */ (/** @type {unknown} */ (detailsToken));
};$h͏_once.redactedDetails(redactedDetails);
freeze(redactedDetails);

/**
 * `unredactedDetails` is like `details` except that it does not redact
 * anything. It acts like `details` would act if all substitution values
 * were wrapped with the `quote` function above (the function normally
 * spelled `q`). If the `{errorTaming: 'unsafe'}`
 * or `{errorTaming: 'unsafe-debug'}` option is given to
 * `lockdown`, then the lockdown-shim arranges for the global `assert` to be
 * one whose `details` property is `unredactedDetails`.
 * This setting optimizes the debugging and testing experience at the price
 * of safety. `unredactedDetails` also sacrifices the speed of `details`,
 * which is usually fine in debugging and testing.
 *
 * @type {AssertionUtilities['details']}
 */
const unredactedDetails = (template, ...args) => {
  args = arrayMap(args, arg =>
    weakmapHas(declassifiers, arg) ? arg : quote(arg),
  );
  return redactedDetails(template, ...args);
};$h͏_once.unredactedDetails(unredactedDetails);
freeze(unredactedDetails);


const leadingSpacePattern = sealRegexp(/^ /);
const trailingSpacePattern = sealRegexp(/ $/);

/**
 * Get arguments suitable for a console logger function (e.g., `console.error`)
 * from `details` template literal contents, unquoting quoted substitution
 * values.
 *
 * @param {DetailsParts} hiddenDetails
 * @returns {LogArgs}
 */
const getLogArgs = ({ template, args }) => {
  const logArgs = [template[0]];
  for (let i = 0; i < args.length; i += 1) {
    let arg = args[i];
    if (weakmapHas(declassifiers, arg)) {
      arg = weakmapGet(declassifiers, arg);
    }
    // Remove substitution-adjacent spaces from template fixed-string parts
    // (since console logging inserts its own argument-separating spaces).
    const prevLiteralPart = regexpReplace(
      trailingSpacePattern,
      arrayPop(logArgs) || '',
      '',
    );
    if (prevLiteralPart !== '') {
      arrayPush(logArgs, prevLiteralPart);
    }
    const nextLiteralPart = regexpReplace(
      leadingSpacePattern,
      template[i + 1],
      '',
    );
    arrayPush(logArgs, arg, nextLiteralPart);
  }
  if (logArgs[logArgs.length - 1] === '') {
    arrayPop(logArgs);
  }
  return logArgs;
};

/**
 * Maps from an error object to arguments suitable for a privileged console
 * logger function such as `console.error`, including values that may be
 * redacted in the error's `message`.
 *
 * @type {WeakMap<Error, LogArgs>}
 */
const hiddenMessageLogArgs = new WeakMap();

// So each error tag will be unique.
let errorTagNum = 0;

/**
 * @type {WeakMap<Error, string>}
 */
const errorTags = new WeakMap();

/**
 * @param {Error} err
 * @param {string=} optErrorName
 * @returns {string}
 */
const tagError = (err, optErrorName = err.name) => {
  let errorTag = weakmapGet(errorTags, err);
  if (errorTag !== undefined) {
    return errorTag;
  }
  errorTagNum += 1;
  errorTag = `${optErrorName}#${errorTagNum}`;
  weakmapSet(errorTags, err, errorTag);
  return errorTag;
};

/**
 * Make reasonable best efforts to make a `Passable` error.
 *   - `sanitizeError` will remove any "extraneous" own properties already added
 *     by the host,
 *     such as `fileName`,`lineNumber` on FireFox or `line` on Safari.
 *   - If any such "extraneous" properties were removed, `sanitizeError` will
 *     annotate
 *     the error with them, so they still appear on the causal console
 *     log output for diagnostic purposes, but not be otherwise visible.
 *   - `sanitizeError` will ensure that any expected properties already
 *     added by the host are data
 *     properties, converting accessor properties to data properties as needed,
 *     such as `stack` on v8 (Chrome, Brave, Edge?)
 *   - `sanitizeError` will freeze the error, preventing any correct engine from
 *     adding or
 *     altering any of the error's own properties `sanitizeError` is done.
 *
 * However, `sanitizeError` will not, for example, `harden`
 * (i.e., deeply freeze)
 * or ensure that the `cause` or `errors` property satisfy the `Passable`
 * constraints. The purpose of `sanitizeError` is only to protect against
 * mischief the host may have already added to the error as created,
 * not to ensure that the error is actually Passable. For that,
 * see `toPassableError` in `@endo/pass-style`.
 *
 * @param {Error} error
 */
       const sanitizeError = error => {
  const descs = getOwnPropertyDescriptors(error);
  const {
    name: _nameDesc,
    message: _messageDesc,
    errors: _errorsDesc = undefined,
    cause: _causeDesc = undefined,
    stack: _stackDesc = undefined,
    ...restDescs
  } = descs;

  const restNames = ownKeys(restDescs);
  if (restNames.length >= 1) {
    for (const name of restNames) {
      delete error[name];
    }
    const dropped = create(objectPrototype, restDescs);
    const droppedDetails = redactedDetails`originally with properties ${quote(dropped)}`;
    // eslint-disable-next-line no-use-before-define
    note(error, droppedDetails);
  }
  for (const name of ownKeys(error)) {
    // @ts-expect-error TypeScript is still confused by symbols as property keys
    const desc = descs[name];
    if (desc && hasOwn(desc, 'get')) {
      const value = error[name]; // invokes the getter
      defineProperty(error, name, { value });
    }
  }
  freeze(error);
};

/**
 * @type {AssertionUtilities['makeError']}
 */$h͏_once.sanitizeError(sanitizeError);
const makeError = (
  optDetails = redactedDetails`Assert failed`,
  errConstructor = globalThis.Error,
  {
    errorName = undefined,
    cause = undefined,
    errors = undefined,
    sanitize = true,
  } = {},
) => {
  // Promote string-valued `optDetails` into a minimal DetailsParts
  // consisting of that string as the sole literal part with no substitutions.
  if (typeof optDetails === 'string') {
    optDetails = redactedDetails([optDetails]);
  }
  const hiddenDetails = weakmapGet(hiddenDetailsMap, optDetails);
  if (hiddenDetails === undefined) {
    throw TypeError(`unrecognized details ${quote(optDetails)}`);
  }
  const messageString = getMessageString(hiddenDetails);
  const opts = cause && { cause };
  let error;
  if (
    typeof AggregateError !== 'undefined' &&
    errConstructor === AggregateError
  ) {
    error = AggregateError(errors || [], messageString, opts);
  } else {
    const ErrorCtor = /** @type {ErrorConstructor} */ (errConstructor);
    error = ErrorCtor(messageString, opts);
    // Since we need to tolerate `errors` on an AggregateError, we may as well
    // tolerate it on all errors.
    if (errors !== undefined) {
      defineProperty(error, 'errors', {
        value: errors,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }
  weakmapSet(hiddenMessageLogArgs, error, getLogArgs(hiddenDetails));
  if (errorName !== undefined) {
    tagError(error, errorName);
  }
  if (sanitize) {
    sanitizeError(error);
  }
  // The next line is a particularly fruitful place to put a breakpoint.
  return error;
};$h͏_once.makeError(makeError);
freeze(makeError);

// /////////////////////////////////////////////////////////////////////////////

const { addLogArgs: addNoteLogArgs, takeLogArgsArray: takeAllNoteLogArgs } =
  makeNoteLogArgsArrayKit();

/**
 * An augmented console will normally only take the hidden noteArgs array once,
 * when it logs the error being annotated. Once that happens, further
 * annotations of that error should go to the console immediately. We arrange
 * that by accepting a note-callback function from the console as an optional
 * part of that taking operation. Normally there will only be at most one
 * callback per error, but that depends on console behavior which we should not
 * assume. We make this an array of callbacks so multiple registrations
 * are independent.
 *
 * @type {WeakMap<Error, NoteCallback[]>}
 */
const hiddenNoteCallbacks = new WeakMap();

/** @type {AssertionUtilities['note']} */
const note = (error, detailsNote) => {
  // Promote string-valued `detailsNote` into a minimal DetailsParts consisting
  // of that string as the sole literal part with no substitutions.
  if (typeof detailsNote === 'string') {
    detailsNote = redactedDetails([detailsNote]);
  }
  const hiddenDetails = weakmapGet(hiddenDetailsMap, detailsNote);
  if (hiddenDetails === undefined) {
    throw TypeError(`unrecognized details ${quote(detailsNote)}`);
  }
  const logArgs = getLogArgs(hiddenDetails);
  const callbacks = weakmapGet(hiddenNoteCallbacks, error);
  if (callbacks !== undefined) {
    for (const callback of callbacks) {
      callback(error, logArgs);
    }
  } else {
    addNoteLogArgs(error, logArgs);
  }
};$h͏_once.note(note);
freeze(note);

/**
 * The unprivileged form that just uses the de facto `error.stack` property.
 * The start compartment normally has a privileged `globalThis.getStackString`
 * which should be preferred if present.
 *
 * @param {Error} error
 * @returns {string}
 */
const defaultGetStackString = error => {
  if (!('stack' in error)) {
    return '';
  }
  const stackString = `${error.stack}`;
  const pos = stringIndexOf(stackString, '\n');
  if (stringStartsWith(stackString, ' ') || pos === -1) {
    return stackString;
  }
  return stringSlice(stackString, pos + 1); // exclude the initial newline
};

/** @type {LoggedErrorHandler} */
const loggedErrorHandler = {
  getStackString: globalThis.getStackString || defaultGetStackString,
  tagError: error => tagError(error),
  resetErrorTagNum: () => {
    errorTagNum = 0;
  },
  getMessageLogArgs: error => weakmapGet(hiddenMessageLogArgs, error),
  takeMessageLogArgs: error => {
    const logArgs = weakmapGet(hiddenMessageLogArgs, error);
    weakmapDelete(hiddenMessageLogArgs, error);
    return logArgs;
  },
  takeNoteLogArgsArray: (error, callback) => {
    const logArgsArray = takeAllNoteLogArgs(error);
    if (callback !== undefined) {
      const callbacks = weakmapGet(hiddenNoteCallbacks, error);
      if (callbacks) {
        arrayPush(callbacks, callback);
      } else {
        weakmapSet(hiddenNoteCallbacks, error, [callback]);
      }
    }
    return logArgsArray || [];
  },
};$h͏_once.loggedErrorHandler(loggedErrorHandler);
freeze(loggedErrorHandler);


// /////////////////////////////////////////////////////////////////////////////

/**
 * @type {MakeAssert}
 */
       const makeAssert = (optRaise = undefined, unredacted = false) => {
  const details = unredacted ? unredactedDetails : redactedDetails;
  const assertFailedDetails = details`Check failed`;

  /** @type {AssertionFunctions['fail']} */
  const fail = (
    optDetails = assertFailedDetails,
    errConstructor = undefined,
    options = undefined,
  ) => {
    const reason = makeError(optDetails, errConstructor, options);
    if (optRaise !== undefined) {
      optRaise(reason);
    }
    throw reason;
  };
  freeze(fail);

  /** @type {AssertionUtilities['Fail']} */
  const Fail = (template, ...args) => fail(details(template, ...args));

  // Don't freeze or export `assert` until we add methods.
  /** @type {BaseAssert} */
  const assert = (
    condition,
    optDetails = undefined,
    errConstructor = undefined,
    options = undefined,
  ) => {
    condition || fail(optDetails, errConstructor, options);
  };

  /** @type {AssertionFunctions['equal']} */
  const equal = (
    actual,
    expected,
    optDetails = undefined,
    errConstructor = undefined,
    options = undefined,
  ) => {
    is(actual, expected) ||
      fail(
        optDetails || details`Expected ${actual} is same as ${expected}`,
        errConstructor || RangeError,
        options,
      );
  };
  freeze(equal);

  /** @type {AssertionFunctions['typeof']} */
  const assertTypeof = (specimen, typename, optDetails) => {
    // This will safely fall through if typename is not a string,
    // which is what we want.
    // eslint-disable-next-line valid-typeof
    if (typeof specimen === typename) {
      return;
    }
    typeof typename === 'string' || Fail`${quote(typename)} must be a string`;

    if (optDetails === undefined) {
      // Embed the type phrase without quotes.
      const typeWithDeterminer = an(typename);
      optDetails = details`${specimen} must be ${bare(typeWithDeterminer)}`;
    }
    fail(optDetails, TypeError);
  };
  freeze(assertTypeof);

  /** @type {AssertionFunctions['string']} */
  const assertString = (specimen, optDetails = undefined) =>
    assertTypeof(specimen, 'string', optDetails);

  /** @type {Pick<AssertionFunctions, keyof AssertionFunctions>} */
  const assertionFunctions = {
    equal,
    typeof: assertTypeof,
    string: assertString,
    fail,
  };

  /** @type {AssertionUtilities} */
  const assertionUtilities = {
    makeError,
    note,
    details,
    Fail,
    quote,
    bare,
  };

  /** @type {DeprecatedAssertionUtilities} */
  const deprecated = { error: makeError, makeAssert };

  /** @type {Assert} */
  const finishedAssert = assign(assert, {
    ...assertionFunctions,
    ...assertionUtilities,
    ...deprecated,
  });
  return freeze(finishedAssert);
};$h͏_once.makeAssert(makeAssert);
freeze(makeAssert);

/** @type {Assert} */
const assert = makeAssert();$h͏_once.assert(assert);


// Internal, to obviate polymorphic dispatch, but may become rigorously
// consistent with @endo/error:

/** @type {AssertionFunctions['equal']} */
const assertEqual = assert.equal;$h͏_once.assertEqual(assertEqual);
})()
,
// === 14. ses ./src/make-hardener.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,TypeError,WeakSet,globalThis,apply,arrayForEach,defineProperty,freeze,getOwnPropertyDescriptor,getOwnPropertyDescriptors,getPrototypeOf,isInteger,isPrimitive,hasOwn,ownKeys,preventExtensions,setAdd,setForEach,setHas,toStringTagSymbol,typedArrayPrototype,weaksetAdd,weaksetHas,FERAL_STACK_GETTER,FERAL_STACK_SETTER,isError,assert;$h͏_imports([["./commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["isInteger",[$h͏_a => (isInteger = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["preventExtensions",[$h͏_a => (preventExtensions = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["setForEach",[$h͏_a => (setForEach = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["typedArrayPrototype",[$h͏_a => (typedArrayPrototype = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]],["FERAL_STACK_GETTER",[$h͏_a => (FERAL_STACK_GETTER = $h͏_a)]],["FERAL_STACK_SETTER",[$h͏_a => (FERAL_STACK_SETTER = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);





















































/**
 * @import {Harden} from '../types.js'
 */

// Obtain the string tag accessor of of TypedArray so we can indirectly use the
// TypedArray brand check it employs.
const typedArrayToStringTag = getOwnPropertyDescriptor(
  typedArrayPrototype,
  toStringTagSymbol,
);
assert(typedArrayToStringTag);
const getTypedArrayToStringTag = typedArrayToStringTag.get;
assert(getTypedArrayToStringTag);

// Exported for tests.
/**
 * Duplicates packages/marshal/src/helpers/passStyle-helpers.js to avoid a dependency.
 *
 * @param {unknown} object
 */
       const isTypedArray = object => {
  // The object must pass a brand check or toStringTag will return undefined.
  const tag = apply(getTypedArrayToStringTag, object, []);
  return tag !== undefined;
};

/**
 * Tests if a property key is an integer-valued canonical numeric index.
 * https://tc39.es/ecma262/#sec-canonicalnumericindexstring
 *
 * @param {string | symbol} propertyKey
 */$h͏_once.isTypedArray(isTypedArray);
const isCanonicalIntegerIndexString = propertyKey => {
  const n = +String(propertyKey);
  return isInteger(n) && String(n) === propertyKey;
};

/**
 * @template T
 * @param {ArrayLike<T>} array
 */
const freezeTypedArray = array => {
  preventExtensions(array);

  // Downgrade writable expandos to readonly, even if non-configurable.
  // We get each descriptor individually rather than using
  // getOwnPropertyDescriptors in order to fail safe when encountering
  // an obscure GraalJS issue where getOwnPropertyDescriptor returns
  // undefined for a property that does exist.
  arrayForEach(ownKeys(array), (/** @type {string | symbol} */ name) => {
    const desc = getOwnPropertyDescriptor(array, name);
    assert(desc);
    // TypedArrays are integer-indexed exotic objects, which define special
    // treatment for property names in canonical numeric form:
    // integers in range are permanently writable and non-configurable.
    // https://tc39.es/ecma262/#sec-integer-indexed-exotic-objects
    //
    // This is analogous to the data of a hardened Map or Set,
    // so we carve out this exceptional behavior but make all other
    // properties non-configurable.
    if (!isCanonicalIntegerIndexString(name)) {
      defineProperty(array, name, {
        ...desc,
        writable: false,
        configurable: false,
      });
    }
  });
};

/**
 * Create a `harden` function.
 *
 * @returns {Harden}
 */
       const makeHardener = () => {
  // Use a native hardener if possible.
  if (typeof globalThis.harden === 'function') {
    const safeHarden = globalThis.harden;
    return safeHarden;
  }

  const hardened = new WeakSet();

  const { harden } = {
    /**
     * @template T
     * @param {T} root
     * @returns {T}
     */
    harden(root) {
      const toFreeze = new Set();

      // If val is something we should be freezing but aren't yet,
      // add it to toFreeze.
      /**
       * @param {any} val
       */
      function enqueue(val) {
        if (isPrimitive(val)) {
          // ignore primitives
          return;
        }
        const type = typeof val;
        if (type !== 'object' && type !== 'function') {
          // future proof: break until someone figures out what it should do
          throw TypeError(`Unexpected typeof: ${type}`);
        }
        if (weaksetHas(hardened, val) || setHas(toFreeze, val)) {
          // Ignore if this is an exit, or we've already visited it
          return;
        }
        // console.warn(`adding ${val} to toFreeze`, val);
        setAdd(toFreeze, val);
      }

      /**
       * @param {any} obj
       */
      const baseFreezeAndTraverse = obj => {
        // Now freeze the object to ensure reactive
        // objects such as proxies won't add properties
        // during traversal, before they get frozen.

        // Object are verified before being enqueued,
        // therefore this is a valid candidate.
        // Throws if this fails (strict mode).
        // Also throws if the object is an ArrayBuffer or any TypedArray.
        if (isTypedArray(obj)) {
          freezeTypedArray(obj);
        } else {
          freeze(obj);
        }

        // we rely upon certain commitments of Object.freeze and proxies here

        // get stable/immutable outbound links before a Proxy has a chance to do
        // something sneaky.
        const descs = getOwnPropertyDescriptors(obj);
        const proto = getPrototypeOf(obj);
        enqueue(proto);

        arrayForEach(ownKeys(descs), (/** @type {string | symbol} */ name) => {
          // The 'name' may be a symbol, and TypeScript doesn't like us to
          // index arbitrary symbols on objects, so we pretend they're just
          // strings.
          const desc = descs[/** @type {string} */ (name)];
          // getOwnPropertyDescriptors is guaranteed to return well-formed
          // descriptors, but they still inherit from Object.prototype. If
          // someone has poisoned Object.prototype to add 'value' or 'get'
          // properties, then a simple 'if ("value" in desc)' or 'desc.value'
          // test could be confused. We use hasOwnProperty to be sure about
          // whether 'value' is present or not, which tells us for sure that
          // this is a data property.
          if (hasOwn(desc, 'value')) {
            enqueue(desc.value);
          } else {
            enqueue(desc.get);
            enqueue(desc.set);
          }
        });
      };

      const freezeAndTraverse =
        FERAL_STACK_GETTER === undefined && FERAL_STACK_SETTER === undefined
          ? // On platforms without v8's error own stack accessor problem,
            // don't pay for any extra overhead.
            baseFreezeAndTraverse
          : obj => {
              if (isError(obj)) {
                // Only pay the overhead if it first passes this cheap isError
                // check. Otherwise, it will be unrepaired, but won't be judged
                // to be a passable error anyway, so will not be unsafe.
                const stackDesc = getOwnPropertyDescriptor(obj, 'stack');
                if (
                  stackDesc &&
                  stackDesc.get === FERAL_STACK_GETTER &&
                  stackDesc.configurable
                ) {
                  // Can only repair if it is configurable. Otherwise, leave
                  // unrepaired, in which case it will not be judged passable,
                  // avoiding a safety problem.
                  defineProperty(obj, 'stack', {
                    // NOTE: Calls getter during harden, which seems dangerous.
                    // But we're only calling the problematic getter whose
                    // hazards we think we understand.
                    // @ts-expect-error TS should know FERAL_STACK_GETTER
                    // cannot be `undefined` here.
                    // See https://github.com/endojs/endo/pull/2232#discussion_r1575179471
                    value: apply(FERAL_STACK_GETTER, obj, []),
                  });
                }
              }
              return baseFreezeAndTraverse(obj);
            };

      const dequeue = () => {
        // New values added before forEach() has finished will be visited.
        setForEach(toFreeze, freezeAndTraverse);
      };

      /** @param {any} value */
      const markHardened = value => {
        weaksetAdd(hardened, value);
      };

      const commit = () => {
        setForEach(toFreeze, markHardened);
      };

      enqueue(root);
      dequeue();
      // console.warn("toFreeze set:", toFreeze);
      commit();

      return root;
    },
  };

  return harden;
};$h͏_once.makeHardener(makeHardener);
})()
,
// === 15. ses ./src/cauterize-property.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let hasOwn;$h͏_imports([["./commons.js", [["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]]]);

/**
 * @import {Reporter} from './reporting-types.js'
 */

/**
 * Delete `obj[prop]` or at least make it harmless.
 *
 * If the property was not expected, then emit a reporter-dependent warning
 * to bring attention to this case, so someone can determine what to do with it.
 *
 * If the property to be deleted is a function's `.prototype` property, this
 * will normally be because the function was supposed to be a
 * - builtin method or non-constructor function
 * - arrow function
 * - concise method
 *
 * all of whom are not supposed to have a `.prototype` property. Nevertheless,
 * on some platforms (like older versions of Hermes), or as a result of
 * some shim-based mods to the primordials (like core-js?), some of these
 * functions may accidentally be more like `function` functions with
 * an undeletable `.prototype` property. In these cases, if we can
 * set the value of that bogus `.prototype` property to `undefined`,
 * we do so, issuing a warning, rather than failing to initialize ses.
 *
 * @param {object} obj
 * @param {PropertyKey} prop
 * @param {boolean} known If deletion is expected, don't warn
 * @param {string} subPath Used for warning messages
 * @param {Reporter} reporter Where to issue warning or error.
 * @returns {void}
 */
       const cauterizeProperty = (
  obj,
  prop,
  known,
  subPath,
  { warn, error },
) => {
  // Either the object lacks a permit or the object doesn't match the
  // permit.
  // If the permit is specifically false, not merely undefined,
  // this is a property we expect to see because we know it exists in
  // some environments and we have expressly decided to exclude it.
  // Any other disallowed property is one we have not audited and we log
  // that we are removing it so we know to look into it, as happens when
  // the language evolves new features to existing intrinsics.
  if (!known) {
    warn(`Removing ${subPath}`);
  }
  try {
    delete obj[prop];
  } catch (err) {
    if (hasOwn(obj, prop)) {
      if (typeof obj === 'function' && prop === 'prototype') {
        obj.prototype = undefined;
        if (obj.prototype === undefined) {
          warn(`Tolerating undeletable ${subPath} === undefined`);
          return;
        }
      }
      error(`failed to delete ${subPath}`, err);
    } else {
      error(`deleting ${subPath} threw`, err);
    }
    throw err;
  }
};$h͏_once.cauterizeProperty(cauterizeProperty);
})()
,
// === 16. ses ./src/permits.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let arrayPush,arrayForEach;$h͏_imports([["./commons.js", [["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]]]]]);




/** @import {GenericErrorConstructor} from '../types.js' */

/**
 * Exports {@code permits}, a recursively defined
 * JSON record enumerating all intrinsics and their properties
 * according to ECMA specs.
 *
 * @author JF Paradis
 * @author Mark S. Miller
 *
 * @module
 */

/**
 * constantProperties
 * non-configurable, non-writable data properties of all global objects.
 * Must be powerless.
 * Maps from property name to the actual value
 */
       const constantProperties = {
  // *** Value Properties of the Global Object

  Infinity,
  NaN,
  undefined,
};

/**
 * universalPropertyNames
 * Properties of all global objects.
 * Must be powerless.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.constantProperties(constantProperties);
       const universalPropertyNames = {
  // *** Function Properties of the Global Object

  isFinite: 'isFinite',
  isNaN: 'isNaN',
  parseFloat: 'parseFloat',
  parseInt: 'parseInt',

  decodeURI: 'decodeURI',
  decodeURIComponent: 'decodeURIComponent',
  encodeURI: 'encodeURI',
  encodeURIComponent: 'encodeURIComponent',

  // *** Constructor Properties of the Global Object

  Array: 'Array',
  ArrayBuffer: 'ArrayBuffer',
  BigInt: 'BigInt',
  BigInt64Array: 'BigInt64Array',
  BigUint64Array: 'BigUint64Array',
  Boolean: 'Boolean',
  DataView: 'DataView',
  EvalError: 'EvalError',
  // https://github.com/tc39/proposal-float16array
  Float16Array: 'Float16Array',
  Float32Array: 'Float32Array',
  Float64Array: 'Float64Array',
  Int8Array: 'Int8Array',
  Int16Array: 'Int16Array',
  Int32Array: 'Int32Array',
  Map: 'Map',
  Number: 'Number',
  Object: 'Object',
  Promise: 'Promise',
  Proxy: 'Proxy',
  RangeError: 'RangeError',
  ReferenceError: 'ReferenceError',
  Set: 'Set',
  String: 'String',
  SyntaxError: 'SyntaxError',
  TypeError: 'TypeError',
  Uint8Array: 'Uint8Array',
  Uint8ClampedArray: 'Uint8ClampedArray',
  Uint16Array: 'Uint16Array',
  Uint32Array: 'Uint32Array',
  URIError: 'URIError',
  WeakMap: 'WeakMap',
  WeakSet: 'WeakSet',
  // https://github.com/tc39/proposal-iterator-helpers
  Iterator: 'Iterator',
  // https://github.com/tc39/proposal-async-iterator-helpers
  AsyncIterator: 'AsyncIterator',
  // https://github.com/endojs/endo/issues/550
  AggregateError: 'AggregateError',

  // https://github.com/tc39/proposal-explicit-resource-management
  // TODO DisposableStack, AsyncDisposableStack
  // DisposableStack: 'DisposableStack',
  // AsyncDisposableStack: 'AsyncDisposableStack',

  // https://tc39.es/proposal-shadowrealm/
  // TODO ShadowRealm
  // ShadowRealm: 'ShadowRealm',

  // *** Other Properties of the Global Object

  JSON: 'JSON',
  Reflect: 'Reflect',

  // *** Annex B

  escape: 'escape',
  unescape: 'unescape',

  // ESNext

  // https://github.com/tc39/proposal-source-phase-imports?tab=readme-ov-file#js-module-source
  ModuleSource: 'ModuleSource',

  lockdown: 'lockdown',
  harden: 'harden',

  HandledPromise: 'HandledPromise'  // TODO: Until Promise.delegate (see below).
};

/**
 * initialGlobalPropertyNames
 * Those found only on the initial global, i.e., the global of the
 * start compartment, as well as any compartments created before lockdown.
 * These may provide much of the power provided by the original.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.universalPropertyNames(universalPropertyNames);
       const initialGlobalPropertyNames = {
  // *** Constructor Properties of the Global Object

  Date: '%InitialDate%',
  Error: '%InitialError%',
  RegExp: '%InitialRegExp%',

  // Omit `Symbol`, because we want the original to appear on the
  // start compartment without passing through the permits mechanism, since
  // we want to preserve all its properties, even if we never heard of them.
  // Symbol: '%InitialSymbol%',

  // *** Other Properties of the Global Object

  Math: '%InitialMath%',

  // ESNext

  // From Error-stack proposal
  // Only on initial global. No corresponding
  // powerless form for other globals.
  getStackString: '%InitialGetStackString%'

  // TODO https://github.com/Agoric/SES-shim/issues/551
  // Need initial WeakRef and FinalizationGroup in
  // start compartment only.

  // TODO Temporal
  // https://github.com/tc39/proposal-temporal
  // Temporal: '%InitialTemporal%' // with Temporal.Now
};

/**
 * sharedGlobalPropertyNames
 * Those found only on the globals of new compartments created after lockdown,
 * which must therefore be powerless.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.initialGlobalPropertyNames(initialGlobalPropertyNames);
       const sharedGlobalPropertyNames = {
  // *** Constructor Properties of the Global Object

  Date: '%SharedDate%',
  Error: '%SharedError%',
  RegExp: '%SharedRegExp%',
  Symbol: '%SharedSymbol%',

  // *** Other Properties of the Global Object

  Math: '%SharedMath%'

  // TODO Temporal
  // https://github.com/tc39/proposal-temporal
  // Temporal: '%SharedTemporal%' // without Temporal.Now
};

/**
 * uniqueGlobalPropertyNames
 * Those made separately for each global, including the initial global
 * of the start compartment.
 * Maps from property name to the intrinsic name in the permits
 * (which is currently always the same).
 */$h͏_once.sharedGlobalPropertyNames(sharedGlobalPropertyNames);
       const uniqueGlobalPropertyNames = {
  // *** Value Properties of the Global Object

  globalThis: '%UniqueGlobalThis%',

  // *** Function Properties of the Global Object

  eval: '%UniqueEval%',

  // *** Constructor Properties of the Global Object

  Function: '%UniqueFunction%',

  // *** Other Properties of the Global Object

  // ESNext

  Compartment: '%UniqueCompartment%'
  // According to current agreements, eventually the Realm constructor too.
  // 'Realm',
};

// All the "subclasses" of Error. These are collectively represented in the
// ECMAScript spec by the meta variable NativeError.
/** @type {GenericErrorConstructor[]} */$h͏_once.uniqueGlobalPropertyNames(uniqueGlobalPropertyNames);
const NativeErrors = [
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
  // https://github.com/endojs/endo/issues/550
  // Commented out to accommodate platforms prior to AggregateError.
  // Instead, conditional push below.
  // AggregateError,
];$h͏_once.NativeErrors(NativeErrors);

if (typeof AggregateError !== 'undefined') {
  // Conditional, to accommodate platforms prior to AggregateError
  arrayPush(NativeErrors, AggregateError);
}



/**
 * <p>Each JSON record enumerates the disposition of the properties on
 *    some corresponding intrinsic object.
 *
 * <p>All records are made of key-value pairs where the key
 *    is the property to process, and the value is the associated
 *    dispositions a.k.a. the "permit". Those permits can be:
 * <ul>
 * <li>The boolean value "false", in which case this property is
 *     blacklisted and simply removed. Properties not mentioned
 *     are also considered blacklisted and are removed.
 * <li>A string value equal to a primitive ("number", "string", etc),
 *     in which case the property is permitted if its value property
 *     is typeof the given type. For example, {@code "Infinity"} leads to
 *     "number" and property values that fail {@code typeof "number"}.
 *     are removed.
 * <li>A string value equal to an intinsic name ("ObjectPrototype",
 *     "Array", etc), in which case the property permitted if its
 *     value property is equal to the value of the corresponfing
 *     intrinsics. For example, {@code Map.prototype} leads to
 *     "MapPrototype" and the property is removed if its value is
 *     not equal to %MapPrototype%
 * <li>Another record, in which case this property is simply
 *     permitted and that next record represents the disposition of
 *     the object which is its value. For example, {@code "Object"}
 *     leads to another record explaining what properties {@code
 *     "Object"} may have and how each such property should be treated.
 *
 * <p>Notes:
 * <li>"[[Proto]]" is used to refer to the "[[Prototype]]" internal
 *     slot, which says which object this object inherits from.
 * <li>"--proto--" is used to refer to the "__proto__" property name,
 *     which is the name of an accessor property on Object.prototype.
 *     In practice, it is used to access the [[Proto]] internal slot,
 *     but is distinct from the internal slot itself. We use
 *     "--proto--" rather than "__proto__" below because "__proto__"
 *     in an object literal is special syntax rather than a normal
 *     property definition.
 * <li>"ObjectPrototype" is the default "[[Proto]]" (when not specified).
 * <li>Constants "fn" and "getter" are used to keep the structure DRY.
 * <li>Symbol properties are listed as follow:
 *     <li>Well-known symbols use the "@@name" form.
 *     <li>Registered symbols use the "RegisteredSymbol(key)" form.
 *     <li>Unique symbols use the "UniqueSymbol(description)" form.
 */

// Function Instances
       const FunctionInstance = {
  '[[Proto]]': '%FunctionPrototype%',
  length: 'number',
  name: 'string'
  // Do not specify "prototype" here, since only Function instances that can
  // be used as a constructor have a prototype property. For constructors,
  // since prototype properties are instance-specific, we define it there.
};

// AsyncFunction Instances
$h͏_once.FunctionInstance(FunctionInstance);const AsyncFunctionInstance={
  // This property is not mentioned in ECMA 262, but is present in V8 and
  // necessary for lockdown to succeed.
  '[[Proto]]': '%AsyncFunctionPrototype%',
};

// Aliases
$h͏_once.AsyncFunctionInstance(AsyncFunctionInstance);const fn=FunctionInstance;
const asyncFn = AsyncFunctionInstance;

const getter = {
  get: fn,
  set: 'undefined',
};

// Possible but not encountered in the specs
// export const setter = {
//   get: 'undefined',
//   set: fn,
// };

const accessor = {
  get: fn,
  set: fn,
};

// eslint-disable-next-line func-names
const strict = function () {
  'use strict';
};

// TODO Remove this once we no longer support the Hermes that needed this.
arrayForEach(['caller', 'arguments'], prop => {
  try {
    strict[prop];
  } catch (e) {
    // https://github.com/facebook/hermes/blob/main/test/hermes/function-non-strict.js
    if (e.message === 'Restricted in strict mode') {
      // Fixed in Static Hermes: https://github.com/facebook/hermes/issues/1582
      FunctionInstance[prop] = accessor;
    }
  }
});

       const isAccessorPermit = permit => {
  return permit === getter || permit === accessor;
};

// NativeError Object Structure
$h͏_once.isAccessorPermit(isAccessorPermit);function NativeError(prototype){
  return {
    // Properties of the NativeError Constructors
    '[[Proto]]': '%SharedError%',

    // NativeError.prototype
    prototype,
  };
}

function NativeErrorPrototype(constructor) {
  return {
    // Properties of the NativeError Prototype Objects
    '[[Proto]]': '%ErrorPrototype%',
    constructor,
    message: 'string',
    name: 'string',
    // Redundantly present only on v8. Safe to remove.
    toString: false,
    // Superfluously present in some versions of V8.
    // https://github.com/tc39/notes/blob/master/meetings/2021-10/oct-26.md#:~:text=However%2C%20Chrome%2093,and%20node%2016.11.
    cause: false,
  };
}

// The TypedArray Constructors
function TypedArray(prototype) {
  return {
    // Properties of the TypedArray Constructors
    '[[Proto]]': '%TypedArray%',
    BYTES_PER_ELEMENT: 'number',
    prototype,
  };
}

function TypedArrayPrototype(constructor) {
  return {
    // Properties of the TypedArray Prototype Objects
    '[[Proto]]': '%TypedArrayPrototype%',
    BYTES_PER_ELEMENT: 'number',
    constructor,
  };
}

// Without Math.random
const CommonMath = {
  E: 'number',
  LN10: 'number',
  LN2: 'number',
  LOG10E: 'number',
  LOG2E: 'number',
  PI: 'number',
  SQRT1_2: 'number',
  SQRT2: 'number',
  '@@toStringTag': 'string',
  abs: fn,
  acos: fn,
  acosh: fn,
  asin: fn,
  asinh: fn,
  atan: fn,
  atanh: fn,
  atan2: fn,
  cbrt: fn,
  ceil: fn,
  clz32: fn,
  cos: fn,
  cosh: fn,
  exp: fn,
  expm1: fn,
  floor: fn,
  fround: fn,
  hypot: fn,
  imul: fn,
  log: fn,
  log1p: fn,
  log10: fn,
  log2: fn,
  max: fn,
  min: fn,
  pow: fn,
  round: fn,
  sign: fn,
  sin: fn,
  sinh: fn,
  sqrt: fn,
  tan: fn,
  tanh: fn,
  trunc: fn,
  // https://github.com/tc39/proposal-float16array
  f16round: fn,
  // https://github.com/tc39/proposal-math-sum
  sumPrecise: fn,

  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  idiv: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  idivmod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  imod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  imuldiv: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  irem: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  mod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
  irandom: false,
};

       const permitted = {
  // ECMA https://tc39.es/ecma262

  // The intrinsics object has no prototype to avoid conflicts.
  '[[Proto]]': null,

  // %ThrowTypeError%
  '%ThrowTypeError%': fn,

  // *** The Global Object

  // *** Value Properties of the Global Object
  Infinity: 'number',
  NaN: 'number',
  undefined: 'undefined',

  // *** Function Properties of the Global Object

  // eval
  '%UniqueEval%': fn,
  isFinite: fn,
  isNaN: fn,
  parseFloat: fn,
  parseInt: fn,
  decodeURI: fn,
  decodeURIComponent: fn,
  encodeURI: fn,
  encodeURIComponent: fn,

  // *** Fundamental Objects

  Object: {
    // Properties of the Object Constructor
    '[[Proto]]': '%FunctionPrototype%',
    assign: fn,
    create: fn,
    defineProperties: fn,
    defineProperty: fn,
    entries: fn,
    freeze: fn,
    fromEntries: fn,
    getOwnPropertyDescriptor: fn,
    getOwnPropertyDescriptors: fn,
    getOwnPropertyNames: fn,
    getOwnPropertySymbols: fn,
    getPrototypeOf: fn,
    is: fn,
    isExtensible: fn,
    isFrozen: fn,
    isSealed: fn,
    keys: fn,
    preventExtensions: fn,
    prototype: '%ObjectPrototype%',
    seal: fn,
    setPrototypeOf: fn,
    values: fn,
    'RegisteredSymbol(harden)': {
      ...fn,
      // Installed with hardenTaming: 'unsafe'
      isFake: 'boolean',
    },
    // https://github.com/tc39/proposal-accessible-object-hasownproperty
    hasOwn: fn,
    // https://github.com/tc39/proposal-array-grouping
    groupBy: fn,
    // Seen on QuickJS
    __getClass: false,
  },

  '%ObjectPrototype%': {
    // Properties of the Object Prototype Object
    '[[Proto]]': null,
    constructor: 'Object',
    hasOwnProperty: fn,
    isPrototypeOf: fn,
    propertyIsEnumerable: fn,
    toLocaleString: fn,
    toString: fn,
    valueOf: fn,

    // Annex B: Additional Properties of the Object.prototype Object

    // See note in header about the difference between [[Proto]] and --proto--
    // special notations.
    '--proto--': accessor,
    __defineGetter__: fn,
    __defineSetter__: fn,
    __lookupGetter__: fn,
    __lookupSetter__: fn,
  },

  '%UniqueFunction%': {
    // Properties of the Function Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%FunctionPrototype%',
  },

  '%InertFunction%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%FunctionPrototype%',
  },

  '%FunctionPrototype%': {
    apply: fn,
    bind: fn,
    call: fn,
    constructor: '%InertFunction%',
    toString: fn,
    '@@hasInstance': fn,
    // proposed but not yet std. To be removed if there
    caller: false,
    // proposed but not yet std. To be removed if there
    arguments: false,
    // Seen on QuickJS. TODO grab getter for use by console
    fileName: false,
    // Seen on QuickJS. TODO grab getter for use by console
    lineNumber: false,
  },

  Boolean: {
    // Properties of the Boolean Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%BooleanPrototype%',
  },

  '%BooleanPrototype%': {
    constructor: 'Boolean',
    toString: fn,
    valueOf: fn,
  },

  '%SharedSymbol%': {
    // Properties of the Symbol Constructor
    '[[Proto]]': '%FunctionPrototype%',
    asyncIterator: 'symbol',
    for: fn,
    hasInstance: 'symbol',
    isConcatSpreadable: 'symbol',
    iterator: 'symbol',
    keyFor: fn,
    match: 'symbol',
    matchAll: 'symbol',
    prototype: '%SymbolPrototype%',
    replace: 'symbol',
    search: 'symbol',
    species: 'symbol',
    split: 'symbol',
    toPrimitive: 'symbol',
    toStringTag: 'symbol',
    unscopables: 'symbol',
    // https://github.com/tc39/proposal-explicit-resource-management
    asyncDispose: 'symbol',
    // https://github.com/tc39/proposal-explicit-resource-management
    dispose: 'symbol',
    // Seen at core-js https://github.com/zloirock/core-js#ecmascript-symbol
    useSimple: false,
    // Seen at core-js https://github.com/zloirock/core-js#ecmascript-symbol
    useSetter: false,
    // Seen on QuickJS
    operatorSet: false,
  },

  '%SymbolPrototype%': {
    // Properties of the Symbol Prototype Object
    constructor: '%SharedSymbol%',
    description: getter,
    toString: fn,
    valueOf: fn,
    '@@toPrimitive': fn,
    '@@toStringTag': 'string',
  },

  '%InitialError%': {
    // Properties of the Error Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%ErrorPrototype%',
    // Non standard, v8 only, used by tap
    captureStackTrace: fn,
    // Non standard, v8 only, used by tap, tamed to accessor
    stackTraceLimit: accessor,
    // Non standard, v8 only, used by several, tamed to accessor
    prepareStackTrace: accessor,
    // https://github.com/tc39/proposal-is-error
    isError: fn,
  },

  '%SharedError%': {
    // Properties of the Error Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%ErrorPrototype%',
    // Non standard, v8 only, used by tap
    captureStackTrace: fn,
    // Non standard, v8 only, used by tap, tamed to accessor
    stackTraceLimit: accessor,
    // Non standard, v8 only, used by several, tamed to accessor
    prepareStackTrace: accessor,
    // https://github.com/tc39/proposal-is-error
    isError: fn,
  },

  '%ErrorPrototype%': {
    constructor: '%SharedError%',
    message: 'string',
    name: 'string',
    toString: fn,
    // proposed de-facto, assumed TODO
    // Seen on FF Nightly 88.0a1
    at: false,
    // Seen on FF and XS
    stack: accessor,
    // Superfluously present in some versions of V8.
    // https://github.com/tc39/notes/blob/master/meetings/2021-10/oct-26.md#:~:text=However%2C%20Chrome%2093,and%20node%2016.11.
    cause: false,
  },

  // NativeError

  EvalError: NativeError('%EvalErrorPrototype%'),
  RangeError: NativeError('%RangeErrorPrototype%'),
  ReferenceError: NativeError('%ReferenceErrorPrototype%'),
  SyntaxError: NativeError('%SyntaxErrorPrototype%'),
  TypeError: NativeError('%TypeErrorPrototype%'),
  URIError: NativeError('%URIErrorPrototype%'),
  // https://github.com/endojs/endo/issues/550
  AggregateError: NativeError('%AggregateErrorPrototype%'),

  // TODO SuppressedError
  // https://github.com/tc39/proposal-explicit-resource-management
  // SuppressedError: NativeError('%SuppressedErrorPrototype%'),

  '%EvalErrorPrototype%': NativeErrorPrototype('EvalError'),
  '%RangeErrorPrototype%': NativeErrorPrototype('RangeError'),
  '%ReferenceErrorPrototype%': NativeErrorPrototype('ReferenceError'),
  '%SyntaxErrorPrototype%': NativeErrorPrototype('SyntaxError'),
  '%TypeErrorPrototype%': NativeErrorPrototype('TypeError'),
  '%URIErrorPrototype%': NativeErrorPrototype('URIError'),
  // https://github.com/endojs/endo/issues/550
  '%AggregateErrorPrototype%': NativeErrorPrototype('AggregateError'),
  // TODO AggregateError .errors

  // TODO SuppressedError
  // https://github.com/tc39/proposal-explicit-resource-management
  // '%SuppressedErrorPrototype%': NativeErrorPrototype('SuppressedError'),
  // TODO SuppressedError .error
  // TODO SuppressedError .suppressed

  // *** Numbers and Dates

  Number: {
    // Properties of the Number Constructor
    '[[Proto]]': '%FunctionPrototype%',
    EPSILON: 'number',
    isFinite: fn,
    isInteger: fn,
    isNaN: fn,
    isSafeInteger: fn,
    MAX_SAFE_INTEGER: 'number',
    MAX_VALUE: 'number',
    MIN_SAFE_INTEGER: 'number',
    MIN_VALUE: 'number',
    NaN: 'number',
    NEGATIVE_INFINITY: 'number',
    parseFloat: fn,
    parseInt: fn,
    POSITIVE_INFINITY: 'number',
    prototype: '%NumberPrototype%',
  },

  '%NumberPrototype%': {
    // Properties of the Number Prototype Object
    constructor: 'Number',
    toExponential: fn,
    toFixed: fn,
    toLocaleString: fn,
    toPrecision: fn,
    toString: fn,
    valueOf: fn,
  },

  BigInt: {
    // Properties of the BigInt Constructor
    '[[Proto]]': '%FunctionPrototype%',
    asIntN: fn,
    asUintN: fn,
    prototype: '%BigIntPrototype%',
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    bitLength: false,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromArrayBuffer: false,
    // Seen on QuickJS
    tdiv: false,
    // Seen on QuickJS
    fdiv: false,
    // Seen on QuickJS
    cdiv: false,
    // Seen on QuickJS
    ediv: false,
    // Seen on QuickJS
    tdivrem: false,
    // Seen on QuickJS
    fdivrem: false,
    // Seen on QuickJS
    cdivrem: false,
    // Seen on QuickJS
    edivrem: false,
    // Seen on QuickJS
    sqrt: false,
    // Seen on QuickJS
    sqrtrem: false,
    // Seen on QuickJS
    floorLog2: false,
    // Seen on QuickJS
    ctz: false,
  },

  '%BigIntPrototype%': {
    constructor: 'BigInt',
    toLocaleString: fn,
    toString: fn,
    valueOf: fn,
    '@@toStringTag': 'string',
  },

  '%InitialMath%': {
    ...CommonMath,
    // `%InitialMath%.random()` has the standard unsafe behavior
    random: fn,
  },

  '%SharedMath%': {
    ...CommonMath,
    // `%SharedMath%.random()` is tamed to always throw
    random: fn,
  },

  '%InitialDate%': {
    // Properties of the Date Constructor
    '[[Proto]]': '%FunctionPrototype%',
    now: fn,
    parse: fn,
    prototype: '%DatePrototype%',
    UTC: fn,
  },

  '%SharedDate%': {
    // Properties of the Date Constructor
    '[[Proto]]': '%FunctionPrototype%',
    // `%SharedDate%.now()` is tamed to always throw
    now: fn,
    parse: fn,
    prototype: '%DatePrototype%',
    UTC: fn,
  },

  '%DatePrototype%': {
    constructor: '%SharedDate%',
    getDate: fn,
    getDay: fn,
    getFullYear: fn,
    getHours: fn,
    getMilliseconds: fn,
    getMinutes: fn,
    getMonth: fn,
    getSeconds: fn,
    getTime: fn,
    getTimezoneOffset: fn,
    getUTCDate: fn,
    getUTCDay: fn,
    getUTCFullYear: fn,
    getUTCHours: fn,
    getUTCMilliseconds: fn,
    getUTCMinutes: fn,
    getUTCMonth: fn,
    getUTCSeconds: fn,
    setDate: fn,
    setFullYear: fn,
    setHours: fn,
    setMilliseconds: fn,
    setMinutes: fn,
    setMonth: fn,
    setSeconds: fn,
    setTime: fn,
    setUTCDate: fn,
    setUTCFullYear: fn,
    setUTCHours: fn,
    setUTCMilliseconds: fn,
    setUTCMinutes: fn,
    setUTCMonth: fn,
    setUTCSeconds: fn,
    toDateString: fn,
    toISOString: fn,
    toJSON: fn,
    toLocaleDateString: fn,
    toLocaleString: fn,
    toLocaleTimeString: fn,
    toString: fn,
    toTimeString: fn,
    toUTCString: fn,
    valueOf: fn,
    '@@toPrimitive': fn,

    // Annex B: Additional Properties of the Date.prototype Object
    getYear: fn,
    setYear: fn,
    toGMTString: fn,
  },

  // Text Processing

  String: {
    // Properties of the String Constructor
    '[[Proto]]': '%FunctionPrototype%',
    fromCharCode: fn,
    fromCodePoint: fn,
    prototype: '%StringPrototype%',
    raw: fn,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromArrayBuffer: false,
  },

  '%StringPrototype%': {
    // Properties of the String Prototype Object
    length: 'number',
    charAt: fn,
    charCodeAt: fn,
    codePointAt: fn,
    concat: fn,
    constructor: 'String',
    endsWith: fn,
    includes: fn,
    indexOf: fn,
    lastIndexOf: fn,
    localeCompare: fn,
    match: fn,
    matchAll: fn,
    normalize: fn,
    padEnd: fn,
    padStart: fn,
    repeat: fn,
    replace: fn,
    replaceAll: fn, // ES2021
    search: fn,
    slice: fn,
    split: fn,
    startsWith: fn,
    substring: fn,
    toLocaleLowerCase: fn,
    toLocaleUpperCase: fn,
    toLowerCase: fn,
    toString: fn,
    toUpperCase: fn,
    trim: fn,
    trimEnd: fn,
    trimStart: fn,
    valueOf: fn,
    '@@iterator': fn,
    // Failed tc39 proposal
    // https://github.com/tc39/proposal-relative-indexing-method
    at: fn,
    // https://github.com/tc39/proposal-is-usv-string
    isWellFormed: fn,
    toWellFormed: fn,
    unicodeSets: fn,

    // Annex B: Additional Properties of the String.prototype Object
    substr: fn,
    anchor: fn,
    big: fn,
    blink: fn,
    bold: fn,
    fixed: fn,
    fontcolor: fn,
    fontsize: fn,
    italics: fn,
    link: fn,
    small: fn,
    strike: fn,
    sub: fn,
    sup: fn,
    trimLeft: fn,
    trimRight: fn,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    compare: false,
    // Seen on QuickJS
    __quote: false,
  },

  '%StringIteratorPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  '%InitialRegExp%': {
    // Properties of the RegExp Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%RegExpPrototype%',
    '@@species': getter,
    // https://github.com/tc39/proposal-regex-escaping
    escape: fn,

    // The https://github.com/tc39/proposal-regexp-legacy-features
    // are all optional, unsafe, and omitted
    input: false,
    $_: false,
    lastMatch: false,
    '$&': false,
    lastParen: false,
    '$+': false,
    leftContext: false,
    '$`': false,
    rightContext: false,
    "$'": false,
    $1: false,
    $2: false,
    $3: false,
    $4: false,
    $5: false,
    $6: false,
    $7: false,
    $8: false,
    $9: false,
  },

  '%SharedRegExp%': {
    // Properties of the RegExp Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%RegExpPrototype%',
    '@@species': getter,
    // https://github.com/tc39/proposal-regex-escaping
    escape: fn,
  },

  '%RegExpPrototype%': {
    // Properties of the RegExp Prototype Object
    constructor: '%SharedRegExp%',
    exec: fn,
    dotAll: getter,
    flags: getter,
    global: getter,
    hasIndices: getter,
    ignoreCase: getter,
    '@@match': fn,
    '@@matchAll': fn,
    multiline: getter,
    '@@replace': fn,
    '@@search': fn,
    source: getter,
    '@@split': fn,
    sticky: getter,
    test: fn,
    toString: fn,
    unicode: getter,
    unicodeSets: getter,

    // Annex B: Additional Properties of the RegExp.prototype Object
    compile: false  // UNSAFE and suppressed.
  },

  '%RegExpStringIteratorPrototype%': {
    // The %RegExpStringIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  // Indexed Collections

  Array: {
    // Properties of the Array Constructor
    '[[Proto]]': '%FunctionPrototype%',
    from: fn,
    isArray: fn,
    of: fn,
    prototype: '%ArrayPrototype%',
    '@@species': getter,

    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
    // https://tc39.es/proposal-array-from-async/
    fromAsync: fn,
  },

  '%ArrayPrototype%': {
    // Properties of the Array Prototype Object
    length: 'number',
    concat: fn,
    constructor: 'Array',
    copyWithin: fn,
    entries: fn,
    every: fn,
    fill: fn,
    filter: fn,
    find: fn,
    findIndex: fn,
    flat: fn,
    flatMap: fn,
    forEach: fn,
    includes: fn,
    indexOf: fn,
    join: fn,
    keys: fn,
    lastIndexOf: fn,
    map: fn,
    pop: fn,
    push: fn,
    reduce: fn,
    reduceRight: fn,
    reverse: fn,
    shift: fn,
    slice: fn,
    some: fn,
    sort: fn,
    splice: fn,
    toLocaleString: fn,
    toString: fn,
    unshift: fn,
    values: fn,
    '@@iterator': fn,
    '@@unscopables': {
      '[[Proto]]': null,
      copyWithin: 'boolean',
      entries: 'boolean',
      fill: 'boolean',
      find: 'boolean',
      findIndex: 'boolean',
      flat: 'boolean',
      flatMap: 'boolean',
      includes: 'boolean',
      keys: 'boolean',
      values: 'boolean',
      // Failed tc39 proposal
      // https://tc39.es/proposal-relative-indexing-method/
      // Seen on FF Nightly 88.0a1
      at: 'boolean',
      // See https://github.com/tc39/proposal-array-find-from-last
      findLast: 'boolean',
      findLastIndex: 'boolean',
      // https://github.com/tc39/proposal-change-array-by-copy
      toReversed: 'boolean',
      toSorted: 'boolean',
      toSpliced: 'boolean',
      with: 'boolean',
      // https://github.com/tc39/proposal-array-grouping
      group: 'boolean',
      groupToMap: 'boolean',
      groupBy: 'boolean',
    },
    // See https://github.com/tc39/proposal-array-find-from-last
    findLast: fn,
    findLastIndex: fn,
    // https://github.com/tc39/proposal-change-array-by-copy
    toReversed: fn,
    toSorted: fn,
    toSpliced: fn,
    with: fn,
    // https://github.com/tc39/proposal-array-grouping
    group: fn, // Not in proposal? Where?
    groupToMap: fn, // Not in proposal? Where?
    groupBy: fn,
    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
  },

  '%ArrayIteratorPrototype%': {
    // The %ArrayIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  // *** TypedArray Objects

  '%TypedArray%': {
    // Properties of the %TypedArray% Intrinsic Object
    '[[Proto]]': '%FunctionPrototype%',
    from: fn,
    of: fn,
    prototype: '%TypedArrayPrototype%',
    '@@species': getter,
  },

  '%TypedArrayPrototype%': {
    buffer: getter,
    byteLength: getter,
    byteOffset: getter,
    constructor: '%TypedArray%',
    copyWithin: fn,
    entries: fn,
    every: fn,
    fill: fn,
    filter: fn,
    find: fn,
    findIndex: fn,
    forEach: fn,
    includes: fn,
    indexOf: fn,
    join: fn,
    keys: fn,
    lastIndexOf: fn,
    length: getter,
    map: fn,
    reduce: fn,
    reduceRight: fn,
    reverse: fn,
    set: fn,
    slice: fn,
    some: fn,
    sort: fn,
    subarray: fn,
    toLocaleString: fn,
    toString: fn,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': getter,
    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
    // See https://github.com/tc39/proposal-array-find-from-last
    findLast: fn,
    findLastIndex: fn,
    // https://github.com/tc39/proposal-change-array-by-copy
    toReversed: fn,
    toSorted: fn,
    with: fn,
  },

  // The TypedArray Constructors

  BigInt64Array: TypedArray('%BigInt64ArrayPrototype%'),
  BigUint64Array: TypedArray('%BigUint64ArrayPrototype%'),
  // https://github.com/tc39/proposal-float16array
  Float16Array: TypedArray('%Float16ArrayPrototype%'),
  Float32Array: TypedArray('%Float32ArrayPrototype%'),
  Float64Array: TypedArray('%Float64ArrayPrototype%'),
  Int16Array: TypedArray('%Int16ArrayPrototype%'),
  Int32Array: TypedArray('%Int32ArrayPrototype%'),
  Int8Array: TypedArray('%Int8ArrayPrototype%'),
  Uint16Array: TypedArray('%Uint16ArrayPrototype%'),
  Uint32Array: TypedArray('%Uint32ArrayPrototype%'),
  Uint8ClampedArray: TypedArray('%Uint8ClampedArrayPrototype%'),
  Uint8Array: {
    ...TypedArray('%Uint8ArrayPrototype%'),
    // https://github.com/tc39/proposal-arraybuffer-base64
    fromBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    fromHex: fn,
  },

  '%BigInt64ArrayPrototype%': TypedArrayPrototype('BigInt64Array'),
  '%BigUint64ArrayPrototype%': TypedArrayPrototype('BigUint64Array'),
  // https://github.com/tc39/proposal-float16array
  '%Float16ArrayPrototype%': TypedArrayPrototype('Float16Array'),
  '%Float32ArrayPrototype%': TypedArrayPrototype('Float32Array'),
  '%Float64ArrayPrototype%': TypedArrayPrototype('Float64Array'),
  '%Int16ArrayPrototype%': TypedArrayPrototype('Int16Array'),
  '%Int32ArrayPrototype%': TypedArrayPrototype('Int32Array'),
  '%Int8ArrayPrototype%': TypedArrayPrototype('Int8Array'),
  '%Uint16ArrayPrototype%': TypedArrayPrototype('Uint16Array'),
  '%Uint32ArrayPrototype%': TypedArrayPrototype('Uint32Array'),
  '%Uint8ClampedArrayPrototype%': TypedArrayPrototype('Uint8ClampedArray'),
  '%Uint8ArrayPrototype%': {
    ...TypedArrayPrototype('Uint8Array'),
    // https://github.com/tc39/proposal-arraybuffer-base64
    setFromBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    setFromHex: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    toBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    toHex: fn,
  },

  // *** Keyed Collections

  Map: {
    // Properties of the Map Constructor
    '[[Proto]]': '%FunctionPrototype%',
    '@@species': getter,
    prototype: '%MapPrototype%',
    // https://github.com/tc39/proposal-array-grouping
    groupBy: fn,
  },

  '%MapPrototype%': {
    clear: fn,
    constructor: 'Map',
    delete: fn,
    entries: fn,
    forEach: fn,
    get: fn,
    has: fn,
    keys: fn,
    set: fn,
    size: getter,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': 'string',
  },

  '%MapIteratorPrototype%': {
    // The %MapIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  Set: {
    // Properties of the Set Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%SetPrototype%',
    '@@species': getter,
    // Seen on QuickJS
    groupBy: false,
  },

  '%SetPrototype%': {
    add: fn,
    clear: fn,
    constructor: 'Set',
    delete: fn,
    entries: fn,
    forEach: fn,
    has: fn,
    keys: fn,
    size: getter,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': 'string',
    // See https://github.com/tc39/proposal-set-methods
    intersection: fn,
    // See https://github.com/tc39/proposal-set-methods
    union: fn,
    // See https://github.com/tc39/proposal-set-methods
    difference: fn,
    // See https://github.com/tc39/proposal-set-methods
    symmetricDifference: fn,
    // See https://github.com/tc39/proposal-set-methods
    isSubsetOf: fn,
    // See https://github.com/tc39/proposal-set-methods
    isSupersetOf: fn,
    // See https://github.com/tc39/proposal-set-methods
    isDisjointFrom: fn,
  },

  '%SetIteratorPrototype%': {
    // The %SetIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  WeakMap: {
    // Properties of the WeakMap Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%WeakMapPrototype%',
  },

  '%WeakMapPrototype%': {
    constructor: 'WeakMap',
    delete: fn,
    get: fn,
    has: fn,
    set: fn,
    '@@toStringTag': 'string',
  },

  WeakSet: {
    // Properties of the WeakSet Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%WeakSetPrototype%',
  },

  '%WeakSetPrototype%': {
    add: fn,
    constructor: 'WeakSet',
    delete: fn,
    has: fn,
    '@@toStringTag': 'string',
  },

  // *** Structured Data

  ArrayBuffer: {
    // Properties of the ArrayBuffer Constructor
    '[[Proto]]': '%FunctionPrototype%',
    isView: fn,
    prototype: '%ArrayBufferPrototype%',
    '@@species': getter,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromString: false,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromBigInt: false,
  },

  '%ArrayBufferPrototype%': {
    byteLength: getter,
    constructor: 'ArrayBuffer',
    slice: fn,
    '@@toStringTag': 'string',
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    concat: false,
    // See https://github.com/tc39/proposal-resizablearraybuffer
    transfer: fn,
    resize: fn,
    resizable: getter,
    maxByteLength: getter,
    // https://github.com/tc39/proposal-arraybuffer-transfer
    transferToFixedLength: fn,
    detached: getter,
    // https://github.com/endojs/endo/pull/2309#issuecomment-2155513240
    // to be proposed
    transferToImmutable: fn,
    sliceToImmutable: fn,
    immutable: getter,
  },

  // If this exists, it is purely an artifact of how we currently shim
  // `transferToImmutable`. As natively implemented, there would be no
  // such extra prototype.
  '%ImmutableArrayBufferPrototype%': {
    '[[Proto]]': '%ArrayBufferPrototype%',
    byteLength: getter,
    slice: fn,
    // See https://github.com/endojs/endo/tree/master/packages/immutable-arraybuffer#purposeful-violation
    '@@toStringTag': 'string',
    // See https://github.com/tc39/proposal-resizablearraybuffer
    transfer: fn,
    resize: fn,
    resizable: getter,
    maxByteLength: getter,
    // https://github.com/tc39/proposal-arraybuffer-transfer
    transferToFixedLength: fn,
    detached: getter,
    // https://github.com/endojs/endo/pull/2309#issuecomment-2155513240
    // to be proposed
    transferToImmutable: fn,
    sliceToImmutable: fn,
    immutable: getter,
  },

  // SharedArrayBuffer Objects
  SharedArrayBuffer: false, // UNSAFE and purposely suppressed.
  '%SharedArrayBufferPrototype%': false, // UNSAFE and purposely suppressed.

  DataView: {
    // Properties of the DataView Constructor
    '[[Proto]]': '%FunctionPrototype%',
    BYTES_PER_ELEMENT: 'number', // Non std but undeletable on Safari.
    prototype: '%DataViewPrototype%',
  },

  '%DataViewPrototype%': {
    buffer: getter,
    byteLength: getter,
    byteOffset: getter,
    constructor: 'DataView',
    getBigInt64: fn,
    getBigUint64: fn,
    // https://github.com/tc39/proposal-float16array
    getFloat16: fn,
    getFloat32: fn,
    getFloat64: fn,
    getInt8: fn,
    getInt16: fn,
    getInt32: fn,
    getUint8: fn,
    getUint16: fn,
    getUint32: fn,
    setBigInt64: fn,
    setBigUint64: fn,
    // https://github.com/tc39/proposal-float16array
    setFloat16: fn,
    setFloat32: fn,
    setFloat64: fn,
    setInt8: fn,
    setInt16: fn,
    setInt32: fn,
    setUint8: fn,
    setUint16: fn,
    setUint32: fn,
    '@@toStringTag': 'string',
  },

  // Atomics
  Atomics: false, // UNSAFE and suppressed.

  JSON: {
    parse: fn,
    stringify: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-json-parse-with-source/
    rawJSON: fn,
    isRawJSON: fn,
  },

  // *** Control Abstraction Objects

  // https://github.com/tc39/proposal-iterator-helpers
  Iterator: {
    // Properties of the Iterator Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%IteratorPrototype%',
    from: fn,
    // https://github.com/tc39/proposal-joint-iteration
    zip: fn,
    zipKeyed: fn,
    // https://github.com/tc39/proposal-iterator-sequencing
    concat: fn,
  },

  '%IteratorPrototype%': {
    // The %IteratorPrototype% Object
    '@@iterator': fn,
    // https://github.com/tc39/proposal-iterator-helpers
    constructor: 'Iterator',
    map: fn,
    filter: fn,
    take: fn,
    drop: fn,
    flatMap: fn,
    reduce: fn,
    toArray: fn,
    forEach: fn,
    some: fn,
    every: fn,
    find: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-async-iterator-helpers
    toAsync: fn,
    // https://github.com/tc39/proposal-explicit-resource-management
    // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
    '@@dispose': false,
  },

  // https://github.com/tc39/proposal-iterator-helpers
  '%WrapForValidIteratorPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    return: fn,
  },

  // https://github.com/tc39/proposal-iterator-helpers
  '%IteratorHelperPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    return: fn,
    '@@toStringTag': 'string',
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  AsyncIterator: {
    // Properties of the Iterator Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%AsyncIteratorPrototype%',
    from: fn,
  },

  '%AsyncIteratorPrototype%': {
    // The %AsyncIteratorPrototype% Object
    '@@asyncIterator': fn,
    // https://github.com/tc39/proposal-async-iterator-helpers
    constructor: 'AsyncIterator',
    map: fn,
    filter: fn,
    take: fn,
    drop: fn,
    flatMap: fn,
    reduce: fn,
    toArray: fn,
    forEach: fn,
    some: fn,
    every: fn,
    find: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-explicit-resource-management
    // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
    '@@asyncDispose': false,
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  '%WrapForValidAsyncIteratorPrototype%': {
    '[[Proto]]': '%AsyncIteratorPrototype%',
    next: fn,
    return: fn,
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  '%AsyncIteratorHelperPrototype%': {
    '[[Proto]]': '%AsyncIteratorPrototype%',
    next: fn,
    return: fn,
    '@@toStringTag': 'string',
  },

  '%InertGeneratorFunction%': {
    // Properties of the GeneratorFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%Generator%',
  },

  '%Generator%': {
    // Properties of the GeneratorFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertGeneratorFunction%',
    prototype: '%GeneratorPrototype%',
    '@@toStringTag': 'string',
  },

  '%InertAsyncGeneratorFunction%': {
    // Properties of the AsyncGeneratorFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%AsyncGenerator%',
  },

  '%AsyncGenerator%': {
    // Properties of the AsyncGeneratorFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertAsyncGeneratorFunction%',
    prototype: '%AsyncGeneratorPrototype%',
    // length prop added here for React Native jsc-android
    // https://github.com/endojs/endo/issues/660
    // https://github.com/react-native-community/jsc-android-buildscripts/issues/181
    length: 'number',
    '@@toStringTag': 'string',
  },

  '%GeneratorPrototype%': {
    // Properties of the Generator Prototype Object
    '[[Proto]]': '%IteratorPrototype%',
    constructor: '%Generator%',
    next: fn,
    return: fn,
    throw: fn,
    '@@toStringTag': 'string',
  },

  '%AsyncGeneratorPrototype%': {
    // Properties of the AsyncGenerator Prototype Object
    '[[Proto]]': '%AsyncIteratorPrototype%',
    constructor: '%AsyncGenerator%',
    next: fn,
    return: fn,
    throw: fn,
    '@@toStringTag': 'string',
  },

  // TODO: To be replaced with Promise.delegate
  //
  // The HandledPromise global variable shimmed by `@agoric/eventual-send/shim`
  // implements an initial version of the eventual send specification at:
  // https://github.com/tc39/proposal-eventual-send
  //
  // We will likely change this to add a property to Promise called
  // Promise.delegate and put static methods on it, which will necessitate
  // another permits change to update to the current proposed standard.
  HandledPromise: {
    '[[Proto]]': 'Promise',
    applyFunction: fn,
    applyFunctionSendOnly: fn,
    applyMethod: fn,
    applyMethodSendOnly: fn,
    get: fn,
    getSendOnly: fn,
    prototype: '%PromisePrototype%',
    resolve: fn,
  },

  // https://github.com/tc39/proposal-source-phase-imports?tab=readme-ov-file#js-module-source

  ModuleSource: {
    '[[Proto]]': '%AbstractModuleSource%',
    prototype: '%ModuleSourcePrototype%',
  },

  '%ModuleSourcePrototype%': {
    '[[Proto]]': '%AbstractModuleSourcePrototype%',
    constructor: 'ModuleSource',
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-compartments
    bindings: getter,
    needsImport: getter,
    needsImportMeta: getter,
    // @endo/module-source provides a legacy interface
    imports: getter,
    exports: getter,
    reexports: getter,
  },

  '%AbstractModuleSource%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%AbstractModuleSourcePrototype%',
  },

  '%AbstractModuleSourcePrototype%': {
    constructor: '%AbstractModuleSource%',
  },

  Promise: {
    // Properties of the Promise Constructor
    '[[Proto]]': '%FunctionPrototype%',
    all: fn,
    allSettled: fn,
    // https://github.com/Agoric/SES-shim/issues/550
    any: fn,
    prototype: '%PromisePrototype%',
    race: fn,
    reject: fn,
    resolve: fn,
    // https://github.com/tc39/proposal-promise-with-resolvers
    withResolvers: fn,
    '@@species': getter,
    // https://github.com/tc39/proposal-promise-try
    try: fn,
  },

  '%PromisePrototype%': {
    // Properties of the Promise Prototype Object
    catch: fn,
    constructor: 'Promise',
    finally: fn,
    then: fn,
    '@@toStringTag': 'string',
    // Non-standard, used in node to prevent async_hooks from breaking
    'UniqueSymbol(async_id_symbol)': accessor,
    'UniqueSymbol(trigger_async_id_symbol)': accessor,
    'UniqueSymbol(destroyed)': accessor,
  },

  '%InertAsyncFunction%': {
    // Properties of the AsyncFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%AsyncFunctionPrototype%',
  },

  '%AsyncFunctionPrototype%': {
    // Properties of the AsyncFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertAsyncFunction%',
    // length prop added here for React Native jsc-android
    // https://github.com/endojs/endo/issues/660
    // https://github.com/react-native-community/jsc-android-buildscripts/issues/181
    length: 'number',
    '@@toStringTag': 'string',
  },

  // Reflection

  Reflect: {
    // The Reflect Object
    // Not a function object.
    apply: fn,
    construct: fn,
    defineProperty: fn,
    deleteProperty: fn,
    get: fn,
    getOwnPropertyDescriptor: fn,
    getPrototypeOf: fn,
    has: fn,
    isExtensible: fn,
    ownKeys: fn,
    preventExtensions: fn,
    set: fn,
    setPrototypeOf: fn,
    '@@toStringTag': 'string',
  },

  Proxy: {
    // Properties of the Proxy Constructor
    '[[Proto]]': '%FunctionPrototype%',
    revocable: fn,
  },

  // Appendix B

  // Annex B: Additional Properties of the Global Object

  escape: fn,
  unescape: fn,

  // Proposed

  '%UniqueCompartment%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%CompartmentPrototype%',
    toString: fn,
  },

  '%InertCompartment%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%CompartmentPrototype%',
    toString: fn,
  },

  '%CompartmentPrototype%': {
    constructor: '%InertCompartment%',
    evaluate: fn,
    globalThis: getter,
    name: getter,
    import: asyncFn,
    load: asyncFn,
    importNow: fn,
    module: fn,
    '@@toStringTag': 'string',
  },

  lockdown: fn,
  harden: { ...fn, isFake: 'boolean' },

  '%InitialGetStackString%': fn,
};$h͏_once.permitted(permitted);
})()
,
// === 17. ses ./src/intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let cauterizeProperty,TypeError,WeakSet,arrayFilter,create,defineProperty,entries,freeze,getOwnPropertyDescriptor,getOwnPropertyDescriptors,globalThis,is,isPrimitive,hasOwn,values,weaksetHas,constantProperties,sharedGlobalPropertyNames,universalPropertyNames,permitted;$h͏_imports([["./cauterize-property.js", [["cauterizeProperty",[$h͏_a => (cauterizeProperty = $h͏_a)]]]],["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["values",[$h͏_a => (values = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]],["./permits.js", [["constantProperties",[$h͏_a => (constantProperties = $h͏_a)]],["sharedGlobalPropertyNames",[$h͏_a => (sharedGlobalPropertyNames = $h͏_a)]],["universalPropertyNames",[$h͏_a => (universalPropertyNames = $h͏_a)]],["permitted",[$h͏_a => (permitted = $h͏_a)]]]]]);

























/**
 * @import {Reporter} from './reporting-types.js'
 */

const isFunction = obj => typeof obj === 'function';

// Like defineProperty, but throws if it would modify an existing property.
// We use this to ensure that two conflicting attempts to define the same
// property throws, causing SES initialization to fail. Otherwise, a
// conflict between, for example, two of SES's internal permits might
// get masked as one overwrites the other. Accordingly, the thrown error
// complains of a "Conflicting definition".
function initProperty(obj, name, desc) {
  if (hasOwn(obj, name)) {
    const preDesc = getOwnPropertyDescriptor(obj, name);
    if (
      !preDesc ||
      !is(preDesc.value, desc.value) ||
      preDesc.get !== desc.get ||
      preDesc.set !== desc.set ||
      preDesc.writable !== desc.writable ||
      preDesc.enumerable !== desc.enumerable ||
      preDesc.configurable !== desc.configurable
    ) {
      throw TypeError(`Conflicting definitions of ${name}`);
    }
  }
  defineProperty(obj, name, desc);
}

// Like defineProperties, but throws if it would modify an existing property.
// This ensures that the intrinsics added to the intrinsics collector object
// graph do not overlap.
function initProperties(obj, descs) {
  for (const [name, desc] of entries(descs)) {
    initProperty(obj, name, desc);
  }
}

// sampleGlobals creates an intrinsics object, suitable for
// interinsicsCollector.addIntrinsics, from the named properties of a global
// object.
function sampleGlobals(globalObject, newPropertyNames) {
  const newIntrinsics = { __proto__: null };
  for (const [globalName, intrinsicName] of entries(newPropertyNames)) {
    if (hasOwn(globalObject, globalName)) {
      newIntrinsics[intrinsicName] = globalObject[globalName];
    }
  }
  return newIntrinsics;
}

/**
 * @param {Reporter} reporter
 */
       const makeIntrinsicsCollector = reporter => {
  /** @type {Record<any, any>} */
  const intrinsics = create(null);
  let pseudoNatives;

  const addIntrinsics = newIntrinsics => {
    initProperties(intrinsics, getOwnPropertyDescriptors(newIntrinsics));
  };
  freeze(addIntrinsics);

  // For each intrinsic, if it has a `.prototype` property, use the
  // permits to find out the intrinsic name for that prototype and add it
  // to the intrinsics.
  const completePrototypes = () => {
    for (const [name, intrinsic] of entries(intrinsics)) {
      if (isPrimitive(intrinsic)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (!hasOwn(intrinsic, 'prototype')) {
        // eslint-disable-next-line no-continue
        continue;
      }
      const permit = permitted[name];
      if (typeof permit !== 'object') {
        throw TypeError(`Expected permit object at permits.${name}`);
      }
      const namePrototype = permit.prototype;
      if (!namePrototype) {
        cauterizeProperty(
          intrinsic,
          'prototype',
          false,
          `${name}.prototype`,
          reporter,
        );
        // eslint-disable-next-line no-continue
        continue;
      }
      if (
        typeof namePrototype !== 'string' ||
        !hasOwn(permitted, namePrototype)
      ) {
        throw TypeError(`Unrecognized ${name}.prototype permits entry`);
      }
      const intrinsicPrototype = intrinsic.prototype;
      if (hasOwn(intrinsics, namePrototype)) {
        if (intrinsics[namePrototype] !== intrinsicPrototype) {
          throw TypeError(`Conflicting bindings of ${namePrototype}`);
        }
        // eslint-disable-next-line no-continue
        continue;
      }
      intrinsics[namePrototype] = intrinsicPrototype;
    }
  };
  freeze(completePrototypes);

  const finalIntrinsics = () => {
    freeze(intrinsics);
    pseudoNatives = new WeakSet(arrayFilter(values(intrinsics), isFunction));
    return intrinsics;
  };
  freeze(finalIntrinsics);

  const isPseudoNative = obj => {
    if (!pseudoNatives) {
      throw TypeError(
        'isPseudoNative can only be called after finalIntrinsics',
      );
    }
    return weaksetHas(pseudoNatives, obj);
  };
  freeze(isPseudoNative);

  const intrinsicsCollector = {
    addIntrinsics,
    completePrototypes,
    finalIntrinsics,
    isPseudoNative,
  };
  freeze(intrinsicsCollector);

  addIntrinsics(constantProperties);
  addIntrinsics(sampleGlobals(globalThis, universalPropertyNames));

  return intrinsicsCollector;
};

/**
 * getGlobalIntrinsics()
 * Doesn't tame, delete, or modify anything. Samples globalObject to create an
 * intrinsics record containing only the permitted global variables, listed
 * by the intrinsic names appropriate for new globals, i.e., the globals of
 * newly constructed compartments.
 *
 * WARNING:
 * If run before lockdown, the returned intrinsics record will carry the
 * *original* unsafe (feral, untamed) bindings of these global variables.
 *
 * @param {object} globalObject
 * @param {Reporter} reporter
 */$h͏_once.makeIntrinsicsCollector(makeIntrinsicsCollector);
       const getGlobalIntrinsics = (globalObject, reporter) => {
  // TODO pass a proper reporter to `makeIntrinsicsCollector`
  const { addIntrinsics, finalIntrinsics } = makeIntrinsicsCollector(reporter);

  addIntrinsics(sampleGlobals(globalObject, sharedGlobalPropertyNames));

  return finalIntrinsics();
};$h͏_once.getGlobalIntrinsics(getGlobalIntrinsics);
})()
,
// === 18. ses ./src/permits-intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let permitted,FunctionInstance,isAccessorPermit,Map,String,Symbol,TypeError,arrayFilter,arrayIncludes,arrayMap,entries,getOwnPropertyDescriptor,getPrototypeOf,isPrimitive,mapGet,hasOwn,ownKeys,symbolKeyFor,cauterizeProperty;$h͏_imports([["./permits.js", [["permitted",[$h͏_a => (permitted = $h͏_a)]],["FunctionInstance",[$h͏_a => (FunctionInstance = $h͏_a)]],["isAccessorPermit",[$h͏_a => (isAccessorPermit = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["Symbol",[$h͏_a => (Symbol = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["symbolKeyFor",[$h͏_a => (symbolKeyFor = $h͏_a)]]]],["./cauterize-property.js", [["cauterizeProperty",[$h͏_a => (cauterizeProperty = $h͏_a)]]]]]);
































































/**
 * @import {Reporter} from './reporting-types.js'
 */

/**
 * Removes all non-allowed properties found by recursively and
 * reflectively walking own property chains.
 *
 * @param {object} intrinsics
 * @param {(virtualizedNativeFunction: object) => void} markVirtualizedNativeFunction
 * @param {Reporter} reporter
 */
               function removeUnpermittedIntrinsics(
  intrinsics,
  markVirtualizedNativeFunction,
  reporter,
) {
  // These primitives are allowed for permits.
  const primitives = ['undefined', 'boolean', 'number', 'string', 'symbol'];

  // These symbols are allowed as well-known symbols
  const wellKnownSymbolNames = new Map(
    Symbol
      ? arrayMap(
          arrayFilter(
            entries(permitted['%SharedSymbol%']),
            ([name, permit]) =>
              permit === 'symbol' && typeof Symbol[name] === 'symbol',
          ),
          ([name]) => [Symbol[name], `@@${name}`],
        )
      : [],
  );

  /**
   * asStringPropertyName()
   *
   * @param {string} path
   * @param {string | symbol} prop
   */
  function asStringPropertyName(path, prop) {
    if (typeof prop === 'string') {
      return prop;
    }

    const wellKnownSymbol = mapGet(wellKnownSymbolNames, prop);

    if (typeof prop === 'symbol') {
      if (wellKnownSymbol) {
        return wellKnownSymbol;
      } else {
        const registeredKey = symbolKeyFor(prop);
        if (registeredKey !== undefined) {
          return `RegisteredSymbol(${registeredKey})`;
        } else {
          return `Unique${String(prop)}`;
        }
      }
    }

    throw TypeError(`Unexpected property name type ${path} ${prop}`);
  }

  /*
   * visitPrototype()
   * Validate the object's [[prototype]] against a permit.
   */
  function visitPrototype(path, obj, protoName) {
    if (isPrimitive(obj)) {
      throw TypeError(`Object expected: ${path}, ${String(obj)}, ${protoName}`);
    }
    const proto = getPrototypeOf(obj);

    // Null prototype.
    if (proto === null && protoName === null) {
      return;
    }

    // Assert: protoName, if provided, is a string.
    if (protoName !== undefined && typeof protoName !== 'string') {
      throw TypeError(`Malformed permit ${path}.__proto__`);
    }

    // If permit not specified, default to Object.prototype.
    if (proto === intrinsics[protoName || '%ObjectPrototype%']) {
      return;
    }

    // We can't clean [[Prototype]], therefore abort.
    throw TypeError(
      `Unexpected [[Prototype]] at ${path}.__proto__ (expected ${protoName || '%ObjectPrototype%'})`,
    );
  }

  /*
   * isAllowedPropertyValue()
   * enforce permit for a single property value.
   */
  function isAllowedPropertyValue(path, value, prop, permit) {
    if (typeof permit === 'object') {
      // eslint-disable-next-line no-use-before-define
      visitProperties(path, value, permit);
      // The property is allowed.
      return true;
    }

    if (permit === false) {
      // A boolan 'false' permit specifies the removal of a property.
      // We require a more specific permit instead of allowing 'true'.
      return false;
    }

    if (typeof permit === 'string') {
      // A string permit can have one of two meanings:

      if (prop === 'prototype' || prop === 'constructor') {
        // For prototype and constructor value properties, the permit
        // is the name of an intrinsic.
        // Assumption: prototype and constructor cannot be primitives.
        // Assert: the permit is the name of an intrinsic.
        // Assert: the property value is equal to that intrinsic.

        if (hasOwn(intrinsics, permit)) {
          if (value !== intrinsics[permit]) {
            throw TypeError(`Does not match permit for ${path}`);
          }
          return true;
        }
      } else {
        // For all other properties, the permit is the name of a primitive.
        // Assert: the permit is the name of a primitive.
        // Assert: the property value type is equal to that primitive.

        // eslint-disable-next-line no-lonely-if
        if (arrayIncludes(primitives, permit)) {
          // eslint-disable-next-line valid-typeof
          if (typeof value !== permit) {
            throw TypeError(
              `At ${path} expected ${permit} not ${typeof value}`,
            );
          }
          return true;
        }
      }
    }

    throw TypeError(
      `Unexpected property ${prop} with permit ${permit} at ${path}`,
    );
  }

  /*
   * isAllowedProperty()
   * Check whether a single property is allowed.
   */
  function isAllowedProperty(path, obj, prop, permit) {
    const desc = getOwnPropertyDescriptor(obj, prop);
    if (!desc) {
      throw TypeError(`Property ${prop} not found at ${path}`);
    }

    // Is this a value property?
    if (hasOwn(desc, 'value')) {
      if (isAccessorPermit(permit)) {
        throw TypeError(`Accessor expected at ${path}`);
      }
      return isAllowedPropertyValue(path, desc.value, prop, permit);
    }
    if (!isAccessorPermit(permit)) {
      throw TypeError(`Accessor not expected at ${path}`);
    }
    return (
      isAllowedPropertyValue(`${path}<get>`, desc.get, prop, permit.get) &&
      isAllowedPropertyValue(`${path}<set>`, desc.set, prop, permit.set)
    );
  }

  /*
   * getSubPermit()
   */
  function getSubPermit(obj, permit, prop) {
    const permitProp = prop === '__proto__' ? '--proto--' : prop;
    if (hasOwn(permit, permitProp)) {
      return permit[permitProp];
    }

    if (typeof obj === 'function') {
      if (hasOwn(FunctionInstance, permitProp)) {
        return FunctionInstance[permitProp];
      }
    }

    return undefined;
  }

  /*
   * visitProperties()
   * Visit all properties for a permit.
   */
  function visitProperties(path, obj, permit) {
    if (obj === undefined || obj === null) {
      return;
    }

    const protoName = permit['[[Proto]]'];
    visitPrototype(path, obj, protoName);

    if (typeof obj === 'function') {
      markVirtualizedNativeFunction(obj);
    }

    for (const prop of ownKeys(obj)) {
      const propString = asStringPropertyName(path, prop);
      const subPath = `${path}.${propString}`;
      const subPermit = getSubPermit(obj, permit, propString);

      if (!subPermit || !isAllowedProperty(subPath, obj, prop, subPermit)) {
        cauterizeProperty(obj, prop, subPermit === false, subPath, reporter);
      }
    }
  }

  // Start path with 'intrinsics' to clarify that properties are not
  // removed from the global object by the permitting operation.
  visitProperties('intrinsics', intrinsics, permitted);
}$h͏_once.default(      removeUnpermittedIntrinsics);
})()
,
// === 19. ses ./src/tame-function-constructors.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,SyntaxError,TypeError,defineProperties,getPrototypeOf,setPrototypeOf,freeze,AsyncGeneratorFunctionInstance;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["AsyncGeneratorFunctionInstance",[$h͏_a => (AsyncGeneratorFunctionInstance = $h͏_a)]]]]]);










// This module replaces the original `Function` constructor, and the original
// `%GeneratorFunction%`, `%AsyncFunction%` and `%AsyncGeneratorFunction%`,
// with safe replacements that throw if invoked.
//
// These are all reachable via syntax, so it isn't sufficient to just
// replace global properties with safe versions. Our main goal is to prevent
// access to the `Function` constructor through these starting points.
//
// After modules block is done, the originals must no longer be reachable,
// unless a copy has been made, and functions can only be created by syntax
// (using eval) or by invoking a previously saved reference to the originals.
//
// Typically, this module will not be used directly, but via the
// [lockdown - shim] which handles all necessary repairs and taming in SES.
//
// Relation to ECMA specifications
//
// The taming of constructors really wants to be part of the standard, because
// new constructors may be added in the future, reachable from syntax, and this
// list must be updated to match.
//
// In addition, the standard needs to define four new intrinsics for the safe
// replacement functions. See [./permits-intrinsics.js].
//
// Adapted from SES/Caja
// Copyright (C) 2011 Google Inc.
// https://github.com/google/caja/blob/master/src/com/google/caja/ses/startSES.js
// https://github.com/google/caja/blob/master/src/com/google/caja/ses/repairES5.js

/**
 * tameFunctionConstructors()
 * This block replaces the original Function constructor, and the original
 * %GeneratorFunction% %AsyncFunction% and %AsyncGeneratorFunction%, with
 * safe replacements that throw if invoked.
 */
               function tameFunctionConstructors() {
  try {
    // Verify that the method is not callable.
    // eslint-disable-next-line @endo/no-polymorphic-call
    FERAL_FUNCTION.prototype.constructor('return 1');
  } catch (ignore) {
    // Throws, no need to patch.
    return freeze({});
  }

  const newIntrinsics = {};

  /*
   * The process to repair constructors:
   * 1. Create an instance of the function by evaluating syntax
   * 2. Obtain the prototype from the instance
   * 3. Create a substitute tamed constructor
   * 4. Replace the original constructor with the tamed constructor
   * 5. Replace tamed constructor prototype property with the original one
   * 6. Replace its [[Prototype]] slot with the tamed constructor of Function
   */
  function repairFunction(name, intrinsicName, declaration) {
    let FunctionInstance;
    try {
      // eslint-disable-next-line no-eval, no-restricted-globals
      FunctionInstance = (0, eval)(declaration);
    } catch (e) {
      if (e instanceof SyntaxError) {
        // Prevent failure on platforms where async and/or generators
        // are not supported.
        return;
      }
      // Re-throw
      throw e;
    }
    const FunctionPrototype = getPrototypeOf(FunctionInstance);

    // Prevents the evaluation of source when calling constructor on the
    // prototype of functions.
    // eslint-disable-next-line func-names
    const InertConstructor = function () {
      throw TypeError(
        'Function.prototype.constructor is not a valid constructor.',
      );
    };
    defineProperties(InertConstructor, {
      prototype: { value: FunctionPrototype },
      name: {
        value: name,
        writable: false,
        enumerable: false,
        configurable: true,
      },
    });

    defineProperties(FunctionPrototype, {
      constructor: { value: InertConstructor },
    });

    // Reconstructs the inheritance among the new tamed constructors
    // to mirror the original specified in normal JS.
    if (InertConstructor !== FERAL_FUNCTION.prototype.constructor) {
      setPrototypeOf(InertConstructor, FERAL_FUNCTION.prototype.constructor);
    }

    newIntrinsics[intrinsicName] = InertConstructor;
  }

  // Here, the order of operation is important: Function needs to be repaired
  // first since the other repaired constructors need to inherit from the
  // tamed Function function constructor.

  repairFunction('Function', '%InertFunction%', '(function(){})');
  repairFunction(
    'GeneratorFunction',
    '%InertGeneratorFunction%',
    '(function*(){})',
  );
  repairFunction(
    'AsyncFunction',
    '%InertAsyncFunction%',
    '(async function(){})',
  );

  if (AsyncGeneratorFunctionInstance !== undefined) {
    repairFunction(
      'AsyncGeneratorFunction',
      '%InertAsyncGeneratorFunction%',
      '(async function*(){})',
    );
  }

  return newIntrinsics;
}$h͏_once.default(      tameFunctionConstructors);
})()
,
// === 20. ses ./src/tame-date-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Date,TypeError,apply,construct,defineProperties;$h͏_imports([["./commons.js", [["Date",[$h͏_a => (Date = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]]]]]);









               function tameDateConstructor() {
  const OriginalDate = Date;
  const DatePrototype = OriginalDate.prototype;

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    /**
     * `%SharedDate%.now()` throw a `TypeError` starting with "secure mode".
     * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
     */
    now() {
      throw TypeError('secure mode Calling %SharedDate%.now() throws');
    },
  };

  /**
   * Tame the Date constructor.
   * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
   *
   * Common behavior
   *   * `new Date(x)` coerces x into a number and then returns a Date
   *     for that number of millis since the epoch
   *   * `new Date(NaN)` returns a Date object which stringifies to
   *     'Invalid Date'
   *   * `new Date(undefined)` returns a Date object which stringifies to
   *     'Invalid Date'
   *
   * OriginalDate (normal standard) behavior preserved by
   * `%InitialDate%`.
   *   * `Date(anything)` gives a string with the current time
   *   * `new Date()` returns the current time, as a Date object
   *
   * `%SharedDate%` behavior
   *   * `Date(anything)` throws a TypeError starting with "secure mode"
   *   * `new Date()` throws a TypeError starting with "secure mode"
   *
   * @param {{powers?: string}} [opts]
   */
  const makeDateConstructor = ({ powers = 'none' } = {}) => {
    let ResultDate;
    if (powers === 'original') {
      // eslint-disable-next-line no-shadow
      ResultDate = function Date(...rest) {
        if (new.target === undefined) {
          return apply(OriginalDate, undefined, rest);
        }
        return construct(OriginalDate, rest, new.target);
      };
    } else {
      // eslint-disable-next-line no-shadow
      ResultDate = function Date(...rest) {
        if (new.target === undefined) {
          throw TypeError(
            'secure mode Calling %SharedDate% constructor as a function throws',
          );
        }
        if (rest.length === 0) {
          throw TypeError(
            'secure mode Calling new %SharedDate%() with no arguments throws',
          );
        }
        return construct(OriginalDate, rest, new.target);
      };
    }

    defineProperties(ResultDate, {
      length: { value: 7 },
      prototype: {
        value: DatePrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      parse: {
        value: OriginalDate.parse,
        writable: true,
        enumerable: false,
        configurable: true,
      },
      UTC: {
        value: OriginalDate.UTC,
        writable: true,
        enumerable: false,
        configurable: true,
      },
    });
    return ResultDate;
  };
  const InitialDate = makeDateConstructor({ powers: 'original' });
  const SharedDate = makeDateConstructor({ powers: 'none' });

  defineProperties(InitialDate, {
    now: {
      value: OriginalDate.now,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });
  defineProperties(SharedDate, {
    now: {
      value: tamedMethods.now,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });

  defineProperties(DatePrototype, {
    constructor: { value: SharedDate },
  });

  return {
    '%InitialDate%': InitialDate,
    '%SharedDate%': SharedDate,
  };
}$h͏_once.default(      tameDateConstructor);
})()
,
// === 21. ses ./src/tame-math-object.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Math,TypeError,create,getOwnPropertyDescriptors,objectPrototype;$h͏_imports([["./commons.js", [["Math",[$h͏_a => (Math = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]]]]]);







               function tameMathObject() {
  const originalMath = Math;
  const initialMath = originalMath; // to follow the naming pattern

  const { random: _, ...otherDescriptors } =
    getOwnPropertyDescriptors(originalMath);

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    /**
     * `%SharedMath%.random()` throws a TypeError starting with "secure mode".
     * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
     */
    random() {
      throw TypeError('secure mode %SharedMath%.random() throws');
    },
  };

  const sharedMath = create(objectPrototype, {
    ...otherDescriptors,
    random: {
      value: tamedMethods.random,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });

  return {
    '%InitialMath%': initialMath,
    '%SharedMath%': sharedMath,
  };
}$h͏_once.default(      tameMathObject);
})()
,
// === 22. ses ./src/tame-regexp-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,TypeError,construct,defineProperties,getOwnPropertyDescriptor,speciesSymbol;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["speciesSymbol",[$h͏_a => (speciesSymbol = $h͏_a)]]]]]);








               function tameRegExpConstructor(regExpTaming = 'safe') {
  const RegExpPrototype = FERAL_REG_EXP.prototype;

  const makeRegExpConstructor = (_ = {}) => {
    // RegExp has non-writable static properties we need to omit.
    /**
     * @param  {Parameters<typeof FERAL_REG_EXP>} rest
     */
    const ResultRegExp = function RegExp(...rest) {
      if (new.target === undefined) {
        return FERAL_REG_EXP(...rest);
      }
      return construct(FERAL_REG_EXP, rest, new.target);
    };

    defineProperties(ResultRegExp, {
      length: { value: 2 },
      prototype: {
        value: RegExpPrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
    // Hermes does not have `Symbol.species`. We should support such platforms.
    if (speciesSymbol) {
      const speciesDesc = getOwnPropertyDescriptor(
        FERAL_REG_EXP,
        speciesSymbol,
      );
      if (!speciesDesc) {
        throw TypeError('no RegExp[Symbol.species] descriptor');
      }
      defineProperties(ResultRegExp, {
        [speciesSymbol]: speciesDesc,
      });
    }
    return ResultRegExp;
  };

  const InitialRegExp = makeRegExpConstructor();
  const SharedRegExp = makeRegExpConstructor();

  if (regExpTaming !== 'unsafe') {
    // @ts-expect-error Deleted properties must be optional
    delete RegExpPrototype.compile;
  }
  defineProperties(RegExpPrototype, {
    constructor: { value: SharedRegExp },
  });

  return {
    '%InitialRegExp%': InitialRegExp,
    '%SharedRegExp%': SharedRegExp,
  };
}$h͏_once.default(      tameRegExpConstructor);
})()
,
// === 23. ses ./src/enablements.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let toStringTagSymbol,iteratorSymbol;$h͏_imports([["./commons.js", [["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["iteratorSymbol",[$h͏_a => (iteratorSymbol = $h͏_a)]]]]]);

/**
 * Exports {@code enablements}, a recursively defined
 * JSON record defining the optimum set of intrinsics properties
 * that need to be "repaired" before hardening is applied on
 * enviromments subject to the override mistake.
 *
 * @author JF Paradis
 * @author Mark S. Miller
 *
 * @module
 */

/**
 * <p>Because "repairing" replaces data properties with accessors, every
 * time a repaired property is accessed, the associated getter is invoked,
 * which degrades the runtime performance of all code executing in the
 * repaired enviromment, compared to the non-repaired case. In order
 * to maintain performance, we only repair the properties of objects
 * for which hardening causes a breakage of their normal intended usage.
 *
 * There are three unwanted cases:
 * <ul>
 * <li>Overriding properties on objects typically used as records,
 *     namely {@code "Object"} and {@code "Array"}. In the case of arrays,
 *     the situation is unintentional, a given program might not be aware
 *     that non-numerical properties are stored on the underlying object
 *     instance, not on the array. When an object is typically used as a
 *     map, we repair all of its prototype properties.
 * <li>Overriding properties on objects that provide defaults on their
 *     prototype and that programs typically set using an assignment, such as
 *     {@code "Error.prototype.message"} and {@code "Function.prototype.name"}
 *     (both default to "").
 * <li>Setting-up a prototype chain, where a constructor is set to extend
 *     another one. This is typically set by assignment, for example
 *     {@code "Child.prototype.constructor = Child"}, instead of invoking
 *     Object.defineProperty();
 *
 * <p>Each JSON record enumerates the disposition of the properties on
 * some corresponding intrinsic object.
 *
 * <p>For each such record, the values associated with its property
 * names can be:
 * <ul>
 * <li>true, in which case this property is simply repaired. The
 *     value associated with that property is not traversed. For
 *     example, {@code "Function.prototype.name"} leads to true,
 *     meaning that the {@code "name"} property of {@code
 *     "Function.prototype"} should be repaired (which is needed
 *     when inheriting from @code{Function} and setting the subclass's
 *     {@code "prototype.name"} property). If the property is
 *     already an accessor property, it is not repaired (because
 *     accessors are not subject to the override mistake).
 * <li>"*", in which case this property is not repaired but the
 *     value associated with that property are traversed and repaired.
 * <li>Another record, in which case this property is not repaired
 *     and that next record represents the disposition of the object
 *     which is its value. For example,{@code "FunctionPrototype"}
 *     leads to another record explaining which properties {@code
 *     Function.prototype} need to be repaired.
 */

/**
 * Minimal enablements when all the code is modern and known not to
 * step into the override mistake, except for the following pervasive
 * cases.
 */
       const minEnablements = {
  '%ObjectPrototype%': {
    toString: true,
  },

  '%FunctionPrototype%': {
    toString: true  // set by "rollup"
  },

  '%ErrorPrototype%': {
    name: true  // set by "precond", "ava", "node-fetch"
  },

  '%IteratorPrototype%': {
    toString: true,
    // https://github.com/tc39/proposal-iterator-helpers
    constructor: true,
    // https://github.com/tc39/proposal-iterator-helpers
    [toStringTagSymbol]: true,
  },
};

/**
 * Moderate enablements are usually good enough for legacy compat.
 */$h͏_once.minEnablements(minEnablements);
       const moderateEnablements = {
  ...minEnablements,

  '%ObjectPrototype%': {
    toString: true,
    valueOf: true,
  },

  '%ArrayPrototype%': {
    toString: true,
    push: true, // set by "Google Analytics"
    concat: true, // set by mobx generated code (old TS compiler?)
    [iteratorSymbol]: true  // set by mobx generated code (old TS compiler?)
  },

  '%IteratorPrototype%': {
    [iteratorSymbol]: true  // is sometimes used in custom iterators and generators implementations eg. @rive-app/canvas
  },

  // Function.prototype has no 'prototype' property to enable.
  // Function instances have their own 'name' and 'length' properties
  // which are configurable and non-writable. Thus, they are already
  // non-assignable anyway.
  '%FunctionPrototype%': {
    constructor: true, // set by "regenerator-runtime"
    bind: true, // set by "underscore", "express"
    toString: true  // set by "rollup"
  },

  '%ErrorPrototype%': {
    constructor: true, // set by "fast-json-patch", "node-fetch"
    message: true,
    name: true, // set by "precond", "ava", "node-fetch", "node 14"
    toString: true  // set by "bluebird"
  },

  '%TypeErrorPrototype%': {
    constructor: true, // set by "readable-stream"
    message: true, // set by "tape"
    name: true  // set by "readable-stream", "node 14"
  },

  '%SyntaxErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%RangeErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%URIErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%EvalErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%ReferenceErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  // https://github.com/endojs/endo/issues/550
  '%AggregateErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"?
  },

  '%PromisePrototype%': {
    constructor: true  // set by "core-js"
  },

  '%TypedArrayPrototype%': '*', // set by https://github.com/feross/buffer

  '%Generator%': {
    constructor: true,
    name: true,
    toString: true,
  },
};

/**
 * The 'severe' enablement are needed because of issues tracked at
 * https://github.com/endojs/endo/issues/576
 *
 * They are like the `moderate` enablements except for the entries below.
 */$h͏_once.moderateEnablements(moderateEnablements);
       const severeEnablements = {
  ...moderateEnablements,

  /**
   * Rollup (as used at least by vega) and webpack
   * (as used at least by regenerator) both turn exports into assignments
   * to a big `exports` object that inherits directly from
   * `Object.prototype`. Some of the exported names we've seen include
   * `hasOwnProperty`, `constructor`, and `toString`. But the strategy used
   * by rollup and webpack potentionally turns any exported name
   * into an assignment rejected by the override mistake. That's why
   * the `severe` enablements takes the extreme step of enabling
   * everything on `Object.prototype`.
   *
   * In addition, code doing inheritance manually will often override
   * the `constructor` property on the new prototype by assignment. We've
   * seen this several times.
   *
   * The cost of enabling all these is that they create a miserable debugging
   * experience specifically on Node.
   * https://github.com/Agoric/agoric-sdk/issues/2324
   * explains how it confused the Node console.
   *
   * (TODO Reexamine the vscode situation. I think it may have improved
   * since the following paragraph was written.)
   *
   * The vscode debugger's object inspector shows the own data properties of
   * an object, which is typically what you want, but also shows both getter
   * and setter for every accessor property whether inherited or own.
   * With the `'*'` setting here, all the properties inherited from
   * `Object.prototype` are accessors, creating an unusable display as seen
   * at As explained at
   * https://github.com/endojs/endo/blob/master/packages/ses/docs/lockdown.md#overridetaming-options
   * Open the triangles at the bottom of that section.
   */
  '%ObjectPrototype%': '*',

  /**
   * The widely used Buffer defined at https://github.com/feross/buffer
   * on initialization, manually creates the equivalent of a subclass of
   * `TypedArray`, which it then initializes by assignment. These assignments
   * include enough of the `TypeArray` methods that here, the `severe`
   * enablements just enable them all.
   */
  '%TypedArrayPrototype%': '*',

  /**
   * Needed to work with Immer before https://github.com/immerjs/immer/pull/914
   * is accepted.
   */
  '%MapPrototype%': '*',

  /**
   * Needed to work with Immer before https://github.com/immerjs/immer/pull/914
   * is accepted.
   */
  '%SetPrototype%': '*',
};$h͏_once.severeEnablements(severeEnablements);
})()
,
// === 24. ses ./src/enable-property-overrides.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,TypeError,arrayForEach,defineProperty,getOwnPropertyDescriptor,getOwnPropertyDescriptors,isPrimitive,hasOwn,ownKeys,setHas,minEnablements,moderateEnablements,severeEnablements;$h͏_imports([["./commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]]]],["./enablements.js", [["minEnablements",[$h͏_a => (minEnablements = $h͏_a)]],["moderateEnablements",[$h͏_a => (moderateEnablements = $h͏_a)]],["severeEnablements",[$h͏_a => (severeEnablements = $h͏_a)]]]]]);
























/** @import {Reporter} from './reporting-types.js' */

/**
 * For a special set of properties defined in the `enablement` list,
 * `enablePropertyOverrides` ensures that the effect of freezing does not
 * suppress the ability to override these properties on derived objects by
 * simple assignment.
 *
 * Because of lack of sufficient foresight at the time, ES5 unfortunately
 * specified that a simple assignment to a non-existent property must fail if
 * it would override an non-writable data property of the same name in the
 * shadow of the prototype chain. In retrospect, this was a mistake, the
 * so-called "override mistake". But it is now too late and we must live with
 * the consequences.
 *
 * As a result, simply freezing an object to make it tamper proof has the
 * unfortunate side effect of breaking previously correct code that is
 * considered to have followed JS best practices, if this previous code used
 * assignment to override.
 *
 * For the enabled properties, `enablePropertyOverrides` effectively shims what
 * the assignment behavior would have been in the absence of the override
 * mistake. However, the shim produces an imperfect emulation. It shims the
 * behavior by turning these data properties into accessor properties, where
 * the accessor's getter and setter provide the desired behavior. For
 * non-reflective operations, the illusion is perfect. However, reflective
 * operations like `getOwnPropertyDescriptor` see the descriptor of an accessor
 * property rather than the descriptor of a data property. At the time of this
 * writing, this is the best we know how to do.
 *
 * To the getter of the accessor we add a property named
 * `'originalValue'` whose value is, as it says, the value that the
 * data property had before being converted to an accessor property. We add
 * this extra property to the getter for two reason:
 *
 * The harden algorithm walks the own properties reflectively, i.e., with
 * `getOwnPropertyDescriptor` semantics, rather than `[[Get]]` semantics. When
 * it sees an accessor property, it does not invoke the getter. Rather, it
 * proceeds to walk both the getter and setter as part of its transitive
 * traversal. Without this extra property, `enablePropertyOverrides` would have
 * hidden the original data property value from `harden`, which would be bad.
 * Instead, by exposing that value in an own data property on the getter,
 * `harden` finds and walks it anyway.
 *
 * We enable a form of cooperative emulation, giving reflective code an
 * opportunity to cooperate in upholding the illusion. When such cooperative
 * reflective code sees an accessor property, where the accessor's getter
 * has an `originalValue` property, it knows that the getter is
 * alleging that it is the result of the `enablePropertyOverrides` conversion
 * pattern, so it can decide to cooperatively "pretend" that it sees a data
 * property with that value.
 *
 * @param {Record<string, any>} intrinsics
 * @param {'min' | 'moderate' | 'severe'} overrideTaming
 * @param {Reporter} reporter
 * @param {Iterable<string | symbol>} [overrideDebug]
 */
               function enablePropertyOverrides(
  intrinsics,
  overrideTaming,
  { warn },
  overrideDebug = [],
) {
  const debugProperties = new Set(overrideDebug);
  function enable(path, obj, prop, desc) {
    if ('value' in desc && desc.configurable) {
      const { value } = desc;

      const isDebug = setHas(debugProperties, prop);

      // We use concise method syntax to be `this` sensitive, but still
      // omit a prototype property or [[Construct]] behavior.
      // @ts-expect-error We know there is an accessor descriptor there
      const { get: getter, set: setter } = getOwnPropertyDescriptor(
        {
          get [prop]() {
            return value;
          },
          set [prop](newValue) {
            if (obj === this) {
              throw TypeError(
                `Cannot assign to read only property '${String(
                  prop,
                )}' of '${path}'`,
              );
            }
            if (hasOwn(this, prop)) {
              this[prop] = newValue;
            } else {
              if (isDebug) {
                warn(TypeError(`Override property ${prop}`));
              }
              defineProperty(this, prop, {
                value: newValue,
                writable: true,
                enumerable: true,
                configurable: true,
              });
            }
          },
        },
        prop,
      );

      defineProperty(getter, 'originalValue', {
        value,
        writable: false,
        enumerable: false,
        configurable: false,
      });

      defineProperty(obj, prop, {
        get: getter,
        set: setter,
        enumerable: desc.enumerable,
        configurable: desc.configurable,
      });
    }
  }

  function enableProperty(path, obj, prop) {
    const desc = getOwnPropertyDescriptor(obj, prop);
    if (!desc) {
      return;
    }
    enable(path, obj, prop, desc);
  }

  function enableAllProperties(path, obj) {
    const descs = getOwnPropertyDescriptors(obj);
    if (!descs) {
      return;
    }
    // TypeScript does not allow symbols to be used as indexes because it
    // cannot recokon types of symbolized properties.
    arrayForEach(ownKeys(descs), prop => enable(path, obj, prop, descs[prop]));
  }

  function enableProperties(path, obj, plan) {
    for (const prop of ownKeys(plan)) {
      const desc = getOwnPropertyDescriptor(obj, prop);
      if (!desc || desc.get || desc.set) {
        // No not a value property, nothing to do.
        // eslint-disable-next-line no-continue
        continue;
      }

      // In case `prop` is a symbol, we first coerce it with `String`,
      // purely for diagnostic purposes.
      const subPath = `${path}.${String(prop)}`;
      const subPlan = plan[prop];

      if (subPlan === true) {
        enableProperty(subPath, obj, prop);
      } else if (subPlan === '*') {
        enableAllProperties(subPath, desc.value);
      } else if (!isPrimitive(subPlan)) {
        enableProperties(subPath, desc.value, subPlan);
      } else {
        throw TypeError(`Unexpected override enablement plan ${subPath}`);
      }
    }
  }

  let plan;
  switch (overrideTaming) {
    case 'min': {
      plan = minEnablements;
      break;
    }
    case 'moderate': {
      plan = moderateEnablements;
      break;
    }
    case 'severe': {
      plan = severeEnablements;
      break;
    }
    default: {
      throw TypeError(`unrecognized overrideTaming ${overrideTaming}`);
    }
  }

  // Do the repair.
  enableProperties('root', intrinsics, plan);
}$h͏_once.default(      enablePropertyOverrides);
})()
,
// === 25. ses ./src/tame-locale-methods.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Number,String,TypeError,defineProperty,getOwnPropertyNames,isPrimitive,regexpExec,assert;$h͏_imports([["./commons.js", [["Number",[$h͏_a => (Number = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail, quote: q } = assert;

const localePattern = /^(\w*[a-z])Locale([A-Z]\w*)$/;

// Use concise methods to obtain named functions without constructor
// behavior or `.prototype` property.
const tamedMethods = {
  // See https://tc39.es/ecma262/#sec-string.prototype.localecompare
  localeCompare(arg) {
    if (this === null || this === undefined) {
      throw TypeError(
        'Cannot localeCompare with null or undefined "this" value',
      );
    }
    const s = `${this}`;
    const that = `${arg}`;
    if (s < that) {
      return -1;
    }
    if (s > that) {
      return 1;
    }
    s === that || Fail`expected ${q(s)} and ${q(that)} to compare`;
    return 0;
  },

  toString() {
    return `${this}`;
  },
};

const nonLocaleCompare = tamedMethods.localeCompare;
const numberToString = tamedMethods.toString;

               function tameLocaleMethods(intrinsics, localeTaming = 'safe') {
  if (localeTaming === 'unsafe') {
    return;
  }

  defineProperty(String.prototype, 'localeCompare', {
    value: nonLocaleCompare,
  });

  for (const intrinsicName of getOwnPropertyNames(intrinsics)) {
    const intrinsic = intrinsics[intrinsicName];
    if (!isPrimitive(intrinsic)) {
      for (const methodName of getOwnPropertyNames(intrinsic)) {
        const match = regexpExec(localePattern, methodName);
        if (match) {
          typeof intrinsic[methodName] === 'function' ||
            Fail`expected ${q(methodName)} to be a function`;
          const nonLocaleMethodName = `${match[1]}${match[2]}`;
          const method = intrinsic[nonLocaleMethodName];
          typeof method === 'function' ||
            Fail`function ${q(nonLocaleMethodName)} not found`;
          defineProperty(intrinsic, methodName, { value: method });
        }
      }
    }
  }

  // Numbers are special because toString accepts a radix instead of ignoring
  // all of the arguments that we would otherwise forward.
  defineProperty(Number.prototype, 'toLocaleString', {
    value: numberToString,
  });
}$h͏_once.default(      tameLocaleMethods);
})()
,
// === 26. ses ./src/make-eval-function.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/**
 * makeEvalFunction()
 * A safe version of the native eval function which relies on
 * the safety of `safe-eval` for confinement, unless `no-eval`
 * is specified (then a TypeError is thrown on use).
 *
 * @param {Function} evaluator
 */
       const makeEvalFunction = evaluator => {
  // We use the concise method syntax to create an eval without a
  // [[Construct]] behavior (such that the invocation "new eval()" throws
  // TypeError: eval is not a constructor"), but which still accepts a
  // 'this' binding.
  const newEval = {
    eval(source) {
      if (typeof source !== 'string') {
        // As per the runtime semantic of PerformEval [ECMAScript 18.2.1.1]:
        // If Type(source) is not String, return source.
        // TODO Recent proposals from Mike Samuel may change this non-string
        // rule. Track.
        return source;
      }
      return evaluator(source);
    },
  }.eval;

  return newEval;
};$h͏_once.makeEvalFunction(makeEvalFunction);
})()
,
// === 27. ses ./src/make-function-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,arrayJoin,arrayPop,defineProperties,getPrototypeOf,assert;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);








const { Fail } = assert;

/*
 * makeFunctionConstructor()
 * A safe version of the native Function which relies on
 * the safety of `safe-eval` for confinement, unless `no-eval`
 * is specified (then a TypeError is thrown on use).
 */
       const makeFunctionConstructor = evaluator => {
  // Define an unused parameter to ensure Function.length === 1
  const newFunction = function Function(_body) {
    // Sanitize all parameters at the entry point.
    // eslint-disable-next-line prefer-rest-params
    const bodyText = `${arrayPop(arguments) || ''}`;
    // eslint-disable-next-line prefer-rest-params
    const parameters = `${arrayJoin(arguments, ',')}`;

    // Are parameters and bodyText valid code, or is someone
    // attempting an injection attack? This will throw a SyntaxError if:
    // - parameters doesn't parse as parameters
    // - bodyText doesn't parse as a function body
    // - either contain a call to super() or references a super property.
    //
    // It seems that XS may still be vulnerable to the attack explained at
    // https://github.com/tc39/ecma262/pull/2374#issuecomment-813769710
    // where `new Function('/*', '*/ ) {')` would incorrectly validate.
    // Before we worried about this, we check the parameters and bodyText
    // together in one call
    // ```js
    // new FERAL_FUNCTION(parameters, bodyTest);
    // ```
    // However, this check is vulnerable to that bug. Aside from that case,
    // all engines do seem to validate the parameters, taken by themselves,
    // correctly. And all engines do seem to validate the bodyText, taken
    // by itself correctly. So with the following two checks, SES builds a
    // correct safe `Function` constructor by composing two calls to an
    // original unsafe `Function` constructor that may suffer from this bug
    // but is otherwise correctly validating.
    //
    // eslint-disable-next-line no-new
    new FERAL_FUNCTION(parameters, '');
    // eslint-disable-next-line no-new
    new FERAL_FUNCTION(bodyText);

    // Safe to be combined. Defeat potential trailing comments.
    // TODO: since we create an anonymous function, the 'this' value
    // isn't bound to the global object as per specs, but set as undefined.
    const src = `(function anonymous(${parameters}\n) {\n${bodyText}\n})`;
    return evaluator(src);
  };

  defineProperties(newFunction, {
    // Ensure that any function created in any evaluator in a realm is an
    // instance of Function in any evaluator of the same realm.
    prototype: {
      value: FERAL_FUNCTION.prototype,
      writable: false,
      enumerable: false,
      configurable: false,
    },
  });

  // Assert identity of Function.__proto__ accross all compartments
  getPrototypeOf(FERAL_FUNCTION) === FERAL_FUNCTION.prototype ||
    Fail`Function prototype is the same accross compartments`;
  getPrototypeOf(newFunction) === FERAL_FUNCTION.prototype ||
    Fail`Function constructor prototype is the same across compartments`;

  return newFunction;
};$h͏_once.makeFunctionConstructor(makeFunctionConstructor);
})()
,
// === 28. ses ./src/global-object.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,assign,create,defineProperty,entries,freeze,hasOwn,unscopablesSymbol,makeEvalFunction,makeFunctionConstructor,constantProperties,universalPropertyNames;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["unscopablesSymbol",[$h͏_a => (unscopablesSymbol = $h͏_a)]]]],["./make-eval-function.js", [["makeEvalFunction",[$h͏_a => (makeEvalFunction = $h͏_a)]]]],["./make-function-constructor.js", [["makeFunctionConstructor",[$h͏_a => (makeFunctionConstructor = $h͏_a)]]]],["./permits.js", [["constantProperties",[$h͏_a => (constantProperties = $h͏_a)]],["universalPropertyNames",[$h͏_a => (universalPropertyNames = $h͏_a)]]]]]);













/**
 * The host's ordinary global object is not provided by a `with` block, so
 * assigning to Symbol.unscopables has no effect.
 * Since this shim uses `with` blocks to create a confined lexical scope for
 * guest programs, we cannot emulate the proper behavior.
 * With this shim, assigning Symbol.unscopables causes the given lexical
 * names to fall through to the terminal scope proxy.
 * But, we can install this setter to prevent a program from proceding on
 * this false assumption.
 *
 * @param {object} globalObject
 */
       const setGlobalObjectSymbolUnscopables = globalObject => {
  defineProperty(
    globalObject,
    unscopablesSymbol,
    freeze(
      assign(create(null), {
        set: freeze(() => {
          throw TypeError(
            `Cannot set Symbol.unscopables of a Compartment's globalThis`,
          );
        }),
        enumerable: false,
        configurable: false,
      }),
    ),
  );
};

/**
 * setGlobalObjectConstantProperties()
 * Initializes a new global object using a process similar to ECMA specifications
 * (SetDefaultGlobalBindings). This process is split between this function and
 * `setGlobalObjectMutableProperties`.
 *
 * @param {object} globalObject
 */$h͏_once.setGlobalObjectSymbolUnscopables(setGlobalObjectSymbolUnscopables);
       const setGlobalObjectConstantProperties = globalObject => {
  for (const [name, constant] of entries(constantProperties)) {
    defineProperty(globalObject, name, {
      value: constant,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }
};

/**
 * setGlobalObjectMutableProperties()
 * Create new global object using a process similar to ECMA specifications
 * (portions of SetRealmGlobalObject and SetDefaultGlobalBindings).
 * `newGlobalPropertyNames` should be either `initialGlobalPropertyNames` or
 * `sharedGlobalPropertyNames`.
 *
 * @param {object} globalObject
 * @param {object} args
 * @param {object} args.intrinsics
 * @param {object} args.newGlobalPropertyNames
 * @param {Function} args.makeCompartmentConstructor
 * @param {(object) => void} args.markVirtualizedNativeFunction
 * @param {Compartment} [args.parentCompartment]
 */$h͏_once.setGlobalObjectConstantProperties(setGlobalObjectConstantProperties);
       const setGlobalObjectMutableProperties = (
  globalObject,
  {
    intrinsics,
    newGlobalPropertyNames,
    makeCompartmentConstructor,
    markVirtualizedNativeFunction,
    parentCompartment,
  },
) => {
  for (const [name, intrinsicName] of entries(universalPropertyNames)) {
    if (hasOwn(intrinsics, intrinsicName)) {
      defineProperty(globalObject, name, {
        value: intrinsics[intrinsicName],
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }

  for (const [name, intrinsicName] of entries(newGlobalPropertyNames)) {
    if (hasOwn(intrinsics, intrinsicName)) {
      defineProperty(globalObject, name, {
        value: intrinsics[intrinsicName],
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }

  const perCompartmentGlobals = {
    globalThis: globalObject,
  };

  perCompartmentGlobals.Compartment = freeze(
    makeCompartmentConstructor(
      makeCompartmentConstructor,
      intrinsics,
      markVirtualizedNativeFunction,
      {
        parentCompartment,
        enforceNew: true,
      },
    ),
  );

  // TODO These should still be tamed according to the permits before
  // being made available.
  for (const [name, value] of entries(perCompartmentGlobals)) {
    defineProperty(globalObject, name, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
    if (typeof value === 'function') {
      markVirtualizedNativeFunction(value);
    }
  }
};

/**
 * setGlobalObjectEvaluators()
 * Set the eval and the Function evaluator on the global object with given evalTaming policy.
 *
 * @param {object} globalObject
 * @param {Function} evaluator
 * @param {(object) => void} markVirtualizedNativeFunction
 */$h͏_once.setGlobalObjectMutableProperties(setGlobalObjectMutableProperties);
       const setGlobalObjectEvaluators = (
  globalObject,
  evaluator,
  markVirtualizedNativeFunction,
) => {
  {
    const f = freeze(makeEvalFunction(evaluator));
    markVirtualizedNativeFunction(f);
    defineProperty(globalObject, 'eval', {
      value: f,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
  {
    const f = freeze(makeFunctionConstructor(evaluator));
    markVirtualizedNativeFunction(f);
    defineProperty(globalObject, 'Function', {
      value: f,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
};$h͏_once.setGlobalObjectEvaluators(setGlobalObjectEvaluators);
})()
,
// === 29. ses ./src/strict-scope-terminator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Proxy,String,TypeError,ReferenceError,create,freeze,getOwnPropertyDescriptors,assert;$h͏_imports([["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail, quote: q } = assert;

/**
 * `freeze` but not `harden` the proxy target so it remains trapping.
 * Thus, it should not be shared outside this module.
 *
 * @see https://github.com/endojs/endo/blob/master/packages/ses/docs/preparing-for-stabilize.md
 */
const objTarget = freeze({ __proto__: null });

/**
 * alwaysThrowHandler
 * This is an object that throws if any property is called. It's used as
 * a proxy handler which throws on any trap called.
 * It's made from a proxy with a get trap that throws. It's safe to
 * create one and share it between all Proxy handlers.
 */
       const alwaysThrowHandler = new Proxy(
  objTarget,
  freeze({
    get(_shadow, prop) {
      Fail`Please report unexpected scope handler trap: ${q(String(prop))}`;
    },
  }),
);

/*
 * scopeProxyHandlerProperties
 * scopeTerminatorHandler manages a strictScopeTerminator Proxy which serves as
 * the final scope boundary that will always return "undefined" in order
 * to prevent access to "start compartment globals".
 */$h͏_once.alwaysThrowHandler(alwaysThrowHandler);
const scopeProxyHandlerProperties = {
  get(_shadow, _prop) {
    return undefined;
  },

  set(_shadow, prop, _value) {
    // We should only hit this if the has() hook returned true matches the v8
    // ReferenceError message "Uncaught ReferenceError: xyz is not defined"
    throw ReferenceError(`${String(prop)} is not defined`);
  },

  has(_shadow, prop) {
    // we must at least return true for all properties on the realm globalThis
    return true;
  },

  // note: this is likely a bug of safari
  // https://bugs.webkit.org/show_bug.cgi?id=195534
  getPrototypeOf(_shadow) {
    return null;
  },

  // See https://github.com/endojs/endo/issues/1510
  // TODO: report as bug to v8 or Chrome, and record issue link here.
  getOwnPropertyDescriptor(_shadow, prop) {
    // Coerce with `String` in case prop is a symbol.
    const quotedProp = q(String(prop));
    // eslint-disable-next-line @endo/no-polymorphic-call
    console.warn(
      `getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${quotedProp}`,
      TypeError().stack,
    );
    return undefined;
  },

  // See https://github.com/endojs/endo/issues/1490
  // TODO Report bug to JSC or Safari
  ownKeys(_shadow) {
    return [];
  },
};

// The scope handler's prototype is a proxy that throws if any trap other
// than get/set/has are run (like getOwnPropertyDescriptors, apply,
// getPrototypeOf).
       const strictScopeTerminatorHandler = freeze(
  create(
    alwaysThrowHandler,
    getOwnPropertyDescriptors(scopeProxyHandlerProperties),
  ),
);$h͏_once.strictScopeTerminatorHandler(strictScopeTerminatorHandler);

       const strictScopeTerminator = new Proxy(
  objTarget,
  strictScopeTerminatorHandler,
);$h͏_once.strictScopeTerminator(strictScopeTerminator);
})()
,
// === 30. ses ./src/sloppy-globals-scope-terminator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Proxy,create,freeze,getOwnPropertyDescriptors,reflectSet,strictScopeTerminatorHandler,alwaysThrowHandler;$h͏_imports([["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["reflectSet",[$h͏_a => (reflectSet = $h͏_a)]]]],["./strict-scope-terminator.js", [["strictScopeTerminatorHandler",[$h͏_a => (strictScopeTerminatorHandler = $h͏_a)]],["alwaysThrowHandler",[$h͏_a => (alwaysThrowHandler = $h͏_a)]]]]]);











/**
 * `freeze` but not `harden` the proxy target so it remains trapping.
 * Thus, it should not be shared outside this module.
 *
 * @see https://github.com/endojs/endo/blob/master/packages/ses/docs/preparing-for-stabilize.md
 */
const objTarget = freeze({ __proto__: null });

/*
 * createSloppyGlobalsScopeTerminator()
 * strictScopeTerminatorHandler manages a scopeTerminator Proxy which serves as
 * the final scope boundary that will always return "undefined" in order
 * to prevent access to "start compartment globals". When "sloppyGlobalsMode"
 * is true, the Proxy will perform sets on the "globalObject".
 */
       const createSloppyGlobalsScopeTerminator = globalObject => {
  const scopeProxyHandlerProperties = {
    // inherit scopeTerminator behavior
    ...strictScopeTerminatorHandler,

    // Redirect set properties to the globalObject.
    set(_shadow, prop, value) {
      return reflectSet(globalObject, prop, value);
    },

    // Always claim to have a potential property in order to be the recipient of a set
    has(_shadow, _prop) {
      return true;
    },
  };

  // The scope handler's prototype is a proxy that throws if any trap other
  // than get/set/has are run (like getOwnPropertyDescriptors, apply,
  // getPrototypeOf).
  const sloppyGlobalsScopeTerminatorHandler = freeze(
    create(
      alwaysThrowHandler,
      getOwnPropertyDescriptors(scopeProxyHandlerProperties),
    ),
  );

  const sloppyGlobalsScopeTerminator = new Proxy(
    objTarget,
    sloppyGlobalsScopeTerminatorHandler,
  );

  return sloppyGlobalsScopeTerminator;
};$h͏_once.createSloppyGlobalsScopeTerminator(createSloppyGlobalsScopeTerminator);
freeze(createSloppyGlobalsScopeTerminator);
})()
,
// === 31. ses ./src/eval-scope.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_EVAL,create,defineProperties,freeze,assert;$h͏_imports([["./commons.js", [["FERAL_EVAL",[$h͏_a => (FERAL_EVAL = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);



const { Fail } = assert;

// We attempt to frustrate stack bumping attacks on the safe evaluator
// (`make-safe-evaluator.js`).
// A stack bumping attack forces an API call to throw a stack overflow
// `RangeError` at an inopportune time.
// The attacker arranges for the stack to be sufficiently deep that the API
// consumes exactly enough stack frames to throw an exception.
//
// For the safe evaluator, an exception thrown between adding and then deleting
// `eval` on `evalScope` could leak the real `eval` to an attacker's lexical
// scope.
// This would be sufficiently disastrous that we guard against it twice.
// First, we delete `eval` from `evalScope` immediately before rendering it to
// the guest program's lexical scope.
//
// If the attacker manages to arrange for `eval` to throw an exception after we
// call `allowNextEvalToBeUnsafe` but before the guest program accesses `eval`,
// it would be able to access `eval` once more in its own code.
// Although they could do no harm with a direct `eval`, they would be able to
// escape to the true global scope with an indirect `eval`.
//
//   prepareStack(depth, () => {
//     (eval)('');
//   });
//   const unsafeEval = (eval);
//   const safeEval = (eval);
//   const realGlobal = unsafeEval('globalThis');
//
// To protect against that case, we also delete `eval` from the `evalScope` in
// a `finally` block surrounding the call to the safe evaluator.
// The only way to reach this case is if `eval` remains on `evalScope` due to
// an attack, so we assume that attack would have have invalided our isolation
// and revoke all future access to the evaluator.
//
// To defeat a stack bumping attack, we must use fewer stack frames to recover
// in that `finally` block than we used in the `try` block.
// We have no reliable guarantees about how many stack frames a block of
// JavaScript will consume.
// Function inlining, tail-call optimization, variations in the size of a stack
// frame, and block scopes may affect the depth of the stack.
// The only number of acceptable stack frames to use in the finally block is
// zero.
// We only use property assignment and deletion in the safe evaluator's
// `finally` block.
// We use `delete evalScope.eval` to withhold the evaluator.
// We assign an envelope object over `evalScopeKit.revoked` to revoke the
// evaluator.
//
// This is why we supply a meaningfully named function for
// `allowNextEvalToBeUnsafe` but do not provide a corresponding
// `revokeAccessToUnsafeEval` or even simply `revoke`.
// These recovery routines are expressed inline in the safe evaluator.

       const makeEvalScopeKit = () => {
  const evalScope = create(null);
  const oneTimeEvalProperties = freeze({
    eval: {
      get() {
        delete evalScope.eval;
        return FERAL_EVAL;
      },
      enumerable: false,
      configurable: true,
    },
  });

  const evalScopeKit = {
    evalScope,
    allowNextEvalToBeUnsafe() {
      const { revoked } = evalScopeKit;
      if (revoked !== null) {
        Fail`a handler did not reset allowNextEvalToBeUnsafe ${revoked.err}`;
      }
      // Allow next reference to eval produce the unsafe FERAL_EVAL.
      // We avoid defineProperty because it consumes an extra stack frame taming
      // its return value.
      defineProperties(evalScope, oneTimeEvalProperties);
    },
    /** @type {null | { err: any }} */
    revoked: null,
  };

  return evalScopeKit;
};$h͏_once.makeEvalScopeKit(makeEvalScopeKit);
})()
,
// === 32. ses ./src/get-source-url.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,regexpExec,stringSlice;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]]]]]);

// Captures a key and value of the form #key=value or @key=value
const sourceMetaEntryRegExp =
  '\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)';
// Captures either a one-line or multi-line comment containing
// one #key=value or @key=value.
// Produces two pairs of capture groups, but the initial two may be undefined.
// On account of the mechanics of regular expressions, scanning from the end
// does not allow us to capture every pair, so getSourceURL must capture and
// trim until there are no matching comments.
const sourceMetaEntriesRegExp = new FERAL_REG_EXP(
  `(?:\\s*//${sourceMetaEntryRegExp}|/\\*${sourceMetaEntryRegExp}\\s*\\*/)\\s*$`,
);

/**
 * @param {string} src
 */
       const getSourceURL = src => {
  let sourceURL = '<unknown>';

  // Our regular expression matches the last one or two comments with key value
  // pairs at the end of the source, avoiding a scan over the entire length of
  // the string, but at the expense of being able to capture all the (key,
  // value) pair meta comments at the end of the source, which may include
  // sourceMapURL in addition to sourceURL.
  // So, we sublimate the comments out of the source until no source or no
  // comments remain.
  while (src.length > 0) {
    const match = regexpExec(sourceMetaEntriesRegExp, src);
    if (match === null) {
      break;
    }
    src = stringSlice(src, 0, src.length - match[0].length);

    // We skip $0 since it contains the entire match.
    // The match contains four capture groups,
    // two (key, value) pairs, the first of which
    // may be undefined.
    // On the off-chance someone put two sourceURL comments in their code with
    // different commenting conventions, the latter has precedence.
    if (match[3] === 'sourceURL') {
      sourceURL = match[4];
    } else if (match[1] === 'sourceURL') {
      sourceURL = match[2];
    }
  }

  return sourceURL;
};$h͏_once.getSourceURL(getSourceURL);
})()
,
// === 33. ses ./src/transforms.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,SyntaxError,regexpReplace,sealRegexp,stringSearch,stringSlice,stringSplit,freeze,getSourceURL;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["regexpReplace",[$h͏_a => (regexpReplace = $h͏_a)]],["sealRegexp",[$h͏_a => (sealRegexp = $h͏_a)]],["stringSearch",[$h͏_a => (stringSearch = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]]]],["./get-source-url.js", [["getSourceURL",[$h͏_a => (getSourceURL = $h͏_a)]]]]]);













/**
 * Find the first occurence of the given pattern and return
 * the location as the approximate line number.
 *
 * @param {string} src
 * @param {RegExp} pattern
 * @returns {number}
 */
function getLineNumber(src, pattern) {
  const index = stringSearch(src, pattern);
  if (index < 0) {
    return -1;
  }

  // The importPattern incidentally captures an initial \n in
  // an attempt to reject a . prefix, so we need to offset
  // the line number in that case.
  const adjustment = src[index] === '\n' ? 1 : 0;

  return stringSplit(stringSlice(src, 0, index), '\n').length + adjustment;
}

// /////////////////////////////////////////////////////////////////////////////

const htmlCommentPattern = sealRegexp(
  new FERAL_REG_EXP(`(?:${'<'}!--|--${'>'})`, 'g'),
);

/**
 * Conservatively reject the source text if it may contain text that some
 * JavaScript parsers may treat as an html-like comment. To reject without
 * parsing, `rejectHtmlComments` will also reject some other text as well.
 *
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-html-like-comments
 * explains that JavaScript parsers may or may not recognize html
 * comment tokens "<" immediately followed by "!--" and "--"
 * immediately followed by ">" in non-module source text, and treat
 * them as a kind of line comment. Since otherwise both of these can
 * appear in normal JavaScript source code as a sequence of operators,
 * we have the terrifying possibility of the same source code parsing
 * one way on one correct JavaScript implementation, and another way
 * on another.
 *
 * This shim takes the conservative strategy of just rejecting source
 * text that contains these strings anywhere. Note that this very
 * source file is written strangely to avoid mentioning these
 * character strings explicitly.
 *
 * We do not write the regexp in a straightforward way, so that an
 * apparennt html comment does not appear in this file. Thus, we avoid
 * rejection by the overly eager rejectDangerousSources.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectHtmlComments = src => {
  const lineNumber = getLineNumber(src, htmlCommentPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_HTML_COMMENT_REJECTED.md
  throw SyntaxError(
    `Possible HTML comment rejected at ${name}:${lineNumber}. (SES_HTML_COMMENT_REJECTED)`,
  );
};

/**
 * An optional transform to place ahead of `rejectHtmlComments` to evade *that*
 * rejection. However, it may change the meaning of the program.
 *
 * This evasion replaces each alleged html comment with the space-separated
 * JavaScript operator sequence that it may mean, assuming that it appears
 * outside of a comment or literal string, in source code where the JS
 * parser makes no special case for html comments (like module source code).
 * In that case, this evasion preserves the meaning of the program, though it
 * does change the souce column numbers on each effected line.
 *
 * If the html comment appeared in a literal (a string literal, regexp literal,
 * or a template literal), then this evasion will change the meaning of the
 * program by changing the text of that literal.
 *
 * If the html comment appeared in a JavaScript comment, then this evasion does
 * not change the meaning of the program because it only changes the contents of
 * those comments.
 *
 * @param {string} src
 * @returns {string}
 */$h͏_once.rejectHtmlComments(rejectHtmlComments);
       const evadeHtmlCommentTest = src => {
  const replaceFn = match => (match[0] === '<' ? '< ! --' : '-- >');
  return regexpReplace(htmlCommentPattern, src, replaceFn);
};

// /////////////////////////////////////////////////////////////////////////////
$h͏_once.evadeHtmlCommentTest(evadeHtmlCommentTest);
const importPattern = sealRegexp(
  new FERAL_REG_EXP('(^|[^.]|\\.\\.\\.)\\bimport(\\s*(?:\\(|/[/*]))', 'g'),
);

/**
 * Conservatively reject the source text if it may contain a dynamic
 * import expression. To reject without parsing, `rejectImportExpressions` will
 * also reject some other text as well.
 *
 * The proposed dynamic import expression is the only syntax currently
 * proposed, that can appear in non-module JavaScript code, that
 * enables direct access to the outside world that cannot be
 * suppressed or intercepted without parsing and rewriting. Instead,
 * this shim conservatively rejects any source text that seems to
 * contain such an expression. To do this safely without parsing, we
 * must also reject some valid programs, i.e., those containing
 * apparent import expressions in literal strings or comments.
 *
 * The current conservative rule looks for the identifier "import"
 * followed by either an open paren or something that looks like the
 * beginning of a comment. We assume that we do not need to worry
 * about html comment syntax because that was already rejected by
 * rejectHtmlComments.
 *
 * this \s *must* match all kinds of syntax-defined whitespace. If e.g.
 * U+2028 (LINE SEPARATOR) or U+2029 (PARAGRAPH SEPARATOR) is treated as
 * whitespace by the parser, but not matched by /\s/, then this would admit
 * an attack like: import\u2028('power.js') . We're trying to distinguish
 * something like that from something like importnotreally('power.js') which
 * is perfectly safe.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectImportExpressions = src => {
  const lineNumber = getLineNumber(src, importPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_IMPORT_REJECTED.md
  throw SyntaxError(
    `Possible import expression rejected at ${name}:${lineNumber}. (SES_IMPORT_REJECTED)`,
  );
};

/**
 * An optional transform to place ahead of `rejectImportExpressions` to evade
 * *that* rejection. However, it may change the meaning of the program.
 *
 * This evasion replaces each suspicious `import` identifier with `__import__`.
 * If the alleged import expression appears in a JavaScript comment, this
 * evasion will not change the meaning of the program. If it appears in a
 * literal (string literal, regexp literal, or a template literal), then this
 * evasion will change the contents of that literal. If it appears as code
 * where it would be parsed as an expression, then it might or might not change
 * the meaning of the program, depending on the binding, if any, of the lexical
 * variable `__import__`.
 *
 * @param {string} src
 * @returns {string}
 */$h͏_once.rejectImportExpressions(rejectImportExpressions);
       const evadeImportExpressionTest = src => {
  const replaceFn = (_, p1, p2) => `${p1}__import__${p2}`;
  return regexpReplace(importPattern, src, replaceFn);
};

// /////////////////////////////////////////////////////////////////////////////
$h͏_once.evadeImportExpressionTest(evadeImportExpressionTest);
const someDirectEvalPattern = new FERAL_REG_EXP(
  '(^|[^.])\\beval(\\s*\\()',
  'g',
);

/**
 * Heuristically reject some text that seems to contain a direct eval
 * expression, with both false positives and false negavives. To reject without
 * parsing, `rejectSomeDirectEvalExpressions` may will also reject some other
 * text as well. It may also accept source text that contains a direct eval
 * written oddly, such as `(eval)(src)`. This false negative is not a security
 * vulnerability. Rather it is a compat hazard because it will execute as
 * an indirect eval under the SES-shim but as a direct eval on platforms that
 * support SES directly (like XS).
 *
 * The shim cannot correctly emulate a direct eval as explained at
 * https://github.com/Agoric/realms-shim/issues/12
 * If we did not reject direct eval syntax, we would
 * accidentally evaluate these with an emulation of indirect eval. To
 * prevent future compatibility problems, in shifting from use of the
 * shim to genuine platform support for the proposal, we should
 * instead statically reject code that seems to contain a direct eval
 * expression.
 *
 * As with the dynamic import expression, to avoid a full parse, we do
 * this approximately with a regexp, that will also reject strings
 * that appear safely in comments or strings. Unlike dynamic import,
 * if we miss some, this only creates future compat problems, not
 * security problems. Thus, we are only trying to catch innocent
 * occurrences, not malicious one. In particular, `(eval)(...)` is
 * direct eval syntax that would not be caught by the following regexp.
 *
 * Exported for unit tests.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectSomeDirectEvalExpressions = src => {
  const lineNumber = getLineNumber(src, someDirectEvalPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_EVAL_REJECTED.md
  throw SyntaxError(
    `Possible direct eval expression rejected at ${name}:${lineNumber}. (SES_EVAL_REJECTED)`,
  );
};

// /////////////////////////////////////////////////////////////////////////////

/**
 * A transform that bundles together the transforms that must unconditionally
 * happen last in order to ensure safe evaluation without parsing.
 *
 * @param {string} source
 * @returns {string}
 */$h͏_once.rejectSomeDirectEvalExpressions(rejectSomeDirectEvalExpressions);
       const mandatoryTransforms = source => {
  source = rejectHtmlComments(source);
  source = rejectImportExpressions(source);
  return source;
};

/**
 * Starting with `source`, apply each transform to the result of the
 * previous one, returning the result of the last transformation.
 *
 * @param {string} source
 * @param {((str: string) => string)[]} transforms
 * @returns {string}
 */$h͏_once.mandatoryTransforms(mandatoryTransforms);
       const applyTransforms = (source, transforms) => {
  for (let i = 0, l = transforms.length; i < l; i += 1) {
    const transform = transforms[i];
    source = transform(source);
  }
  return source;
};

// export all as a frozen object
$h͏_once.applyTransforms(applyTransforms);const transforms=freeze({
  rejectHtmlComments: freeze(rejectHtmlComments),
  evadeHtmlCommentTest: freeze(evadeHtmlCommentTest),
  rejectImportExpressions: freeze(rejectImportExpressions),
  evadeImportExpressionTest: freeze(evadeImportExpressionTest),
  rejectSomeDirectEvalExpressions: freeze(rejectSomeDirectEvalExpressions),
  mandatoryTransforms: freeze(mandatoryTransforms),
  applyTransforms: freeze(applyTransforms),
});$h͏_once.transforms(transforms);
})()
,
// === 34. ses ./src/scope-constants.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let arrayFilter,arrayIncludes,getOwnPropertyDescriptor,getOwnPropertyNames,hasOwn,regexpExec,Set,setHas;$h͏_imports([["./commons.js", [["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["Set",[$h͏_a => (Set = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]]]]]);










/**
 * reservedNames
 * In JavaScript you cannot use reserved words as variable names (except for
 * "eval", which is specially reserved to prevent shadowing).
 * https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-identifier-names
 */
const reservedNames = new Set([
  // 11.6.2.1 Keywords
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',

  // Also reserved when parsing strict mode code
  'let',
  'static',

  // 11.6.2.2 Future Reserved Words
  'enum',

  // Also reserved when parsing strict mode code
  'implements',
  'package',
  'protected',
  'interface',
  'private',
  'public',

  // Reserved but not mentioned in specs
  'await',

  'null',
  'true',
  'false',

  'this',
  'arguments',

  // Reserved by us
  'eval',
]);

/**
 * identifierPattern
 * Simplified validation of identifier names: may only contain alphanumeric
 * characters (or "$" or "_"), and may not start with a digit. This is safe
 * and does not reduces the compatibility of the shim. The motivation for
 * this limitation was to decrease the complexity of the implementation,
 * and to maintain a resonable level of performance.
 * Note: \w is equivalent [a-zA-Z_0-9]
 * See 11.6.1 Identifier Names
 */
const identifierPattern = /^[a-zA-Z_$][\w$]*$/;

/**
 * isValidIdentifierName()
 * Is a value allowed as an arbitrary identifier name?
 *
 * @param {string} name
 */
       const isValidIdentifierName = name =>
  !setHas(reservedNames, name) && !!regexpExec(identifierPattern, name);

/*
 * isImmutableDataProperty
 */$h͏_once.isValidIdentifierName(isValidIdentifierName);

function isImmutableDataProperty(obj, name) {
  const desc = getOwnPropertyDescriptor(obj, name);
  return (
    desc &&
    //
    // The getters will not have .writable, don't let the falsyness of
    // 'undefined' trick us: test with === false, not ! . However descriptors
    // inherit from the (potentially poisoned) global object, so we might see
    // extra properties which weren't really there. Accessor properties have
    // 'get/set/enumerable/configurable', while data properties have
    // 'value/writable/enumerable/configurable'.
    desc.configurable === false &&
    desc.writable === false &&
    //
    // Checks for data properties because they're the only ones we can
    // optimize (accessors are most likely non-constant). Descriptors can't
    // can't have accessors and value properties at the same time, therefore
    // this check is sufficient. Using explicit own property deal with the
    // case where Object.prototype has been poisoned.
    hasOwn(desc, 'value')
  );
}

/**
 * getScopeConstants()
 * What variable names might be brought into scope? These include all
 * property names which can be variable names, including the names
 * of inherited properties. It excludes symbols and names which are
 * keywords. We drop symbols safely. Currently, this shim refuses
 * service if any of the names are keywords or keyword-like. This is
 * safe and only affects performance optimization.
 *
 * @param {object} globalObject
 * @param {object} moduleLexicals
 */
       const getScopeConstants = (globalObject, moduleLexicals = {}) => {
  // getOwnPropertyNames() does ignore Symbols so we don't need to
  // filter them out.
  const globalObjectNames = getOwnPropertyNames(globalObject);
  const moduleLexicalNames = getOwnPropertyNames(moduleLexicals);

  // Collect all valid & immutable identifiers from the endowments.
  const moduleLexicalConstants = arrayFilter(
    moduleLexicalNames,
    name =>
      isValidIdentifierName(name) &&
      isImmutableDataProperty(moduleLexicals, name),
  );

  // Collect all valid & immutable identifiers from the global that
  // are also not present in the endowments (immutable or not).
  const globalObjectConstants = arrayFilter(
    globalObjectNames,
    name =>
      // Can't define a constant: it would prevent a
      // lookup on the endowments.
      !arrayIncludes(moduleLexicalNames, name) &&
      isValidIdentifierName(name) &&
      isImmutableDataProperty(globalObject, name),
  );

  return {
    globalObjectConstants,
    moduleLexicalConstants,
  };
};$h͏_once.getScopeConstants(getScopeConstants);
})()
,
// === 35. ses ./src/make-evaluate.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,arrayJoin,apply,getScopeConstants;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]]]],["./scope-constants.js", [["getScopeConstants",[$h͏_a => (getScopeConstants = $h͏_a)]]]]]);




/**
 * buildOptimizer()
 * Given an array of identifiers, the optimizer returns a `const` declaration
 * destructuring `this.${name}`.
 *
 * @param {Array<string>} constants
 * @param {string} name
 */
function buildOptimizer(constants, name) {
  // No need to build an optimizer when there are no constants.
  if (constants.length === 0) return '';
  // Use 'this' to avoid going through the scope proxy, which is unnecessary
  // since the optimizer only needs references to the safe global.
  // Destructure the constants from the target scope object.
  return `const {${arrayJoin(constants, ',')}} = this.${name};`;
}

/**
 * makeEvaluate()
 * Create an 'evaluate' function with the correct optimizer inserted.
 *
 * @param {object} context
 * @param {object} context.evalScope
 * @param {object} context.moduleLexicals
 * @param {object} context.globalObject
 * @param {object} context.scopeTerminator
 */
       const makeEvaluate = context => {
  const { globalObjectConstants, moduleLexicalConstants } = getScopeConstants(
    context.globalObject,
    context.moduleLexicals,
  );
  const globalObjectOptimizer = buildOptimizer(
    globalObjectConstants,
    'globalObject',
  );
  const moduleLexicalOptimizer = buildOptimizer(
    moduleLexicalConstants,
    'moduleLexicals',
  );

  // Create a function in sloppy mode, so that we can use 'with'. It returns
  // a function in strict mode that evaluates the provided code using direct
  // eval, and thus in strict mode in the same scope. We must be very careful
  // to not create new names in this scope

  // 1: we use multiple nested 'with' to catch all free variable names. The
  // `this` value of the outer sloppy function holds the different scope
  // layers, from inner to outer:
  //    a) `evalScope` which must release the `FERAL_EVAL` as 'eval' once for
  //       every invocation of the inner `evaluate` function in order to
  //       trigger direct eval. The direct eval semantics is what allows the
  //       evaluated code to lookup free variable names on the other scope
  //       objects and not in global scope.
  //    b) `moduleLexicals` which provide a way to introduce free variables
  //       that are not available on the globalObject.
  //    c) `globalObject` is the global scope object of the evaluator, aka the
  //       Compartment's `globalThis`.
  //    d) `scopeTerminator` is a proxy object which prevents free variable
  //       lookups to escape to the start compartment's global object.
  // 2: `optimizer`s catch constant variable names for speed.
  // 3: The inner strict `evaluate` function should be passed two parameters:
  //    a) its arguments[0] is the source to be directly evaluated.
  //    b) its 'this' is the this binding seen by the code being
  //       directly evaluated (the globalObject).

  // Notes:
  // - The `optimizer` strings only lookup values on the `globalObject` and
  //   `moduleLexicals` objects by construct. Keywords like 'function' are
  //   reserved and cannot be used as a variable, so they are excluded from the
  //   optimizer. Furthermore to prevent shadowing 'eval', while a valid
  //   identifier, that name is also explicitly excluded.
  // - when 'eval' is looked up in the `evalScope`, the powerful unsafe eval
  //   intrinsic is returned after automatically removing it from the
  //   `evalScope`. Any further reference to 'eval' in the evaluate string will
  //   get the tamed evaluator from the `globalObject`, if any.

  // TODO https://github.com/endojs/endo/issues/816
  // The optimizer currently runs under sloppy mode, and although we doubt that
  // there is any vulnerability introduced just by running the optimizer
  // sloppy, we are much more confident in the semantics of strict mode.
  // The `evaluate` function can be and is reused across multiple evaluations.
  // Since the optimizer should not be re-evaluated every time, it cannot be
  // inside the `evaluate` closure. While we could potentially nest an
  // intermediate layer of `() => {'use strict'; ${optimizers}; ...`, it
  // doesn't seem worth the overhead and complexity.
  const evaluateFactory = FERAL_FUNCTION(`
    with (this.scopeTerminator) {
      with (this.globalObject) {
        with (this.moduleLexicals) {
          with (this.evalScope) {
            ${globalObjectOptimizer}
            ${moduleLexicalOptimizer}
            return function() {
              'use strict';
              return eval(arguments[0]);
            };
          }
        }
      }
    }
  `);

  return apply(evaluateFactory, context, []);
};$h͏_once.makeEvaluate(makeEvaluate);
})()
,
// === 36. ses ./src/make-safe-evaluator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let apply,arrayFlatMap,freeze,identity,strictScopeTerminator,createSloppyGlobalsScopeTerminator,makeEvalScopeKit,applyTransforms,mandatoryTransforms,makeEvaluate,assert;$h͏_imports([["./commons.js", [["apply",[$h͏_a => (apply = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["identity",[$h͏_a => (identity = $h͏_a)]]]],["./strict-scope-terminator.js", [["strictScopeTerminator",[$h͏_a => (strictScopeTerminator = $h͏_a)]]]],["./sloppy-globals-scope-terminator.js", [["createSloppyGlobalsScopeTerminator",[$h͏_a => (createSloppyGlobalsScopeTerminator = $h͏_a)]]]],["./eval-scope.js", [["makeEvalScopeKit",[$h͏_a => (makeEvalScopeKit = $h͏_a)]]]],["./transforms.js", [["applyTransforms",[$h͏_a => (applyTransforms = $h͏_a)]],["mandatoryTransforms",[$h͏_a => (mandatoryTransforms = $h͏_a)]]]],["./make-evaluate.js", [["makeEvaluate",[$h͏_a => (makeEvaluate = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail } = assert;

/**
 * makeSafeEvaluator()
 * Build the low-level operation used by all evaluators:
 * eval(), Function(), Compartment.prototype.evaluate().
 *
 * @param {object} options
 * @param {object} options.globalObject
 * @param {object} [options.moduleLexicals]
 * @param {Array<import('./lockdown.js').Transform>} [options.globalTransforms]
 * @param {boolean} [options.sloppyGlobalsMode]
 */
       const makeSafeEvaluator = ({
  globalObject,
  moduleLexicals = {},
  globalTransforms = [],
  sloppyGlobalsMode = false,
}) => {
  const scopeTerminator = sloppyGlobalsMode
    ? createSloppyGlobalsScopeTerminator(globalObject)
    : strictScopeTerminator;
  const evalScopeKit = makeEvalScopeKit();
  const { evalScope } = evalScopeKit;

  const evaluateContext = freeze({
    evalScope,
    moduleLexicals,
    globalObject,
    scopeTerminator,
  });

  // Defer creating the actual evaluator to first use.
  // Creating a compartment should be possible in no-eval environments
  // It also allows more global constants to be captured by the optimizer
  let evaluate;
  const provideEvaluate = () => {
    if (!evaluate) {
      evaluate = makeEvaluate(evaluateContext);
    }
  };

  /**
   * @param {string} source
   * @param {object} [options]
   * @param {Array<import('./lockdown.js').Transform>} [options.localTransforms]
   */
  const safeEvaluate = (source, options) => {
    const { localTransforms = [] } = options || {};
    provideEvaluate();

    // Execute the mandatory transforms last to ensure that any rewritten code
    // meets those mandatory requirements.
    source = applyTransforms(
      source,
      arrayFlatMap(
        [localTransforms, globalTransforms, [mandatoryTransforms]],
        identity,
      ),
    );

    let err;
    try {
      // Allow next reference to eval produce the unsafe FERAL_EVAL.
      // eslint-disable-next-line @endo/no-polymorphic-call
      evalScopeKit.allowNextEvalToBeUnsafe();

      // Ensure that "this" resolves to the safe global.
      return apply(evaluate, globalObject, [source]);
    } catch (e) {
      // stash the child-code error in hopes of debugging the internal failure
      err = e;
      throw e;
    } finally {
      const unsafeEvalWasStillExposed = 'eval' in evalScope;
      delete evalScope.eval;
      if (unsafeEvalWasStillExposed) {
        // Barring a defect in the SES shim, the evalScope should allow the
        // powerful, unsafe  `eval` to be used by `evaluate` exactly once, as the
        // very first name that it attempts to access from the lexical scope.
        // A defect in the SES shim could throw an exception after we set
        // `evalScope.eval` and before `evaluate` calls `eval` internally.
        // If we get here, SES is very broken.
        // This condition is one where this vat is now hopelessly confused, and
        // the vat as a whole should be aborted.
        // No further code should run.
        // All immediately reachable state should be abandoned.
        // However, that is not yet possible, so we at least prevent further
        // variable resolution via the scopeHandler, and throw an error with
        // diagnostic info including the thrown error if any from evaluating the
        // source code.
        evalScopeKit.revoked = { err };
        // TODO A GOOD PLACE TO PANIC(), i.e., kill the vat incarnation.
        // See https://github.com/Agoric/SES-shim/issues/490
        Fail`handler did not reset allowNextEvalToBeUnsafe ${err}`;
      }
    }
  };

  return { safeEvaluate };
};$h͏_once.makeSafeEvaluator(makeSafeEvaluator);
})()
,
// === 37. ses ./src/tame-function-tostring.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakSet,defineProperty,freeze,functionPrototype,functionToString,stringEndsWith,weaksetAdd,weaksetHas;$h͏_imports([["./commons.js", [["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["functionPrototype",[$h͏_a => (functionPrototype = $h͏_a)]],["functionToString",[$h͏_a => (functionToString = $h͏_a)]],["stringEndsWith",[$h͏_a => (stringEndsWith = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]]]);










const nativeSuffix = ') { [native code] }';

// Note: Top level mutable state. Does not make anything worse, since the
// patching of `Function.prototype.toString` is also globally stateful. We
// use this top level state so that multiple calls to `tameFunctionToString` are
// idempotent, rather than creating redundant indirections.
let markVirtualizedNativeFunction;

/**
 * Replace `Function.prototype.toString` with one that recognizes
 * shimmed functions as honorary native functions.
 */
       const tameFunctionToString = () => {
  if (markVirtualizedNativeFunction === undefined) {
    const virtualizedNativeFunctions = new WeakSet();

    const tamingMethods = {
      toString() {
        const str = functionToString(this);
        if (
          stringEndsWith(str, nativeSuffix) ||
          !weaksetHas(virtualizedNativeFunctions, this)
        ) {
          return str;
        }
        return `function ${this.name}() { [native code] }`;
      },
    };

    defineProperty(functionPrototype, 'toString', {
      value: tamingMethods.toString,
    });

    markVirtualizedNativeFunction = freeze(func =>
      weaksetAdd(virtualizedNativeFunctions, func),
    );
  }
  return markVirtualizedNativeFunction;
};$h͏_once.tameFunctionToString(tameFunctionToString);
})()
,
// === 38. ses ./src/tame-domains.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,globalThis,getOwnPropertyDescriptor,defineProperty;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]]]]]);Object.defineProperty(tameDomains,'name',{value:"tameDomains"});$h͏_once.tameDomains(tameDomains);








       function tameDomains(domainTaming = 'safe') {
  if (domainTaming === 'unsafe') {
    return;
  }

  // Protect against the hazard presented by Node.js domains.
  const globalProcess = globalThis.process || undefined;
  if (typeof globalProcess === 'object') {
    // Check whether domains were initialized.
    const domainDescriptor = getOwnPropertyDescriptor(globalProcess, 'domain');
    if (domainDescriptor !== undefined && domainDescriptor.get !== undefined) {
      // The domain descriptor on Node.js initially has value: null, which
      // becomes a get, set pair after domains initialize.
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_DOMAINS.md
      throw TypeError(
        `SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)`,
      );
    }
    // Prevent domains from initializing.
    // This is clunky because the exception thrown from the domains package does
    // not direct the user's gaze toward a knowledge base about the problem.
    // The domain module merely throws an exception when it attempts to define
    // the domain property of the process global during its initialization.
    // We have no better recourse because Node.js uses defineProperty too.
    defineProperty(globalProcess, 'domain', {
      value: null,
      configurable: false,
      writable: false,
      enumerable: false,
    });
  }
}
})()
,
// === 39. ses ./src/tame-module-source.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let functionPrototype,getPrototypeOf,globalThis,objectPrototype,setPrototypeOf;$h͏_imports([["./commons.js", [["functionPrototype",[$h͏_a => (functionPrototype = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]]]]]);







       const tameModuleSource = () => {
  const newIntrinsics = {};

  const ModuleSource = globalThis.ModuleSource;
  if (ModuleSource !== undefined) {
    newIntrinsics.ModuleSource = ModuleSource;

    // We introduce ModuleSource.[[Proto]] === AbstractModuleSource
    // and ModuleSource.prototype.[[Proto]] === AbstractModuleSource.prototype
    // if that layer is absent because the permitting system can more
    // gracefully tolerate the absence of an expected prototype than the
    // presence of an unexpected prototype,.
    function AbstractModuleSource() {
      // no-op safe to super()
    }

    const ModuleSourceProto = getPrototypeOf(ModuleSource);
    if (ModuleSourceProto === functionPrototype) {
      setPrototypeOf(ModuleSource, AbstractModuleSource);
      newIntrinsics['%AbstractModuleSource%'] = AbstractModuleSource;
      newIntrinsics['%AbstractModuleSourcePrototype%'] =
        AbstractModuleSource.prototype;
    } else {
      newIntrinsics['%AbstractModuleSource%'] = ModuleSourceProto;
      newIntrinsics['%AbstractModuleSourcePrototype%'] =
        ModuleSourceProto.prototype;
    }

    const ModuleSourcePrototype = ModuleSource.prototype;
    if (ModuleSourcePrototype !== undefined) {
      newIntrinsics['%ModuleSourcePrototype%'] = ModuleSourcePrototype;

      // ModuleSource.prototype.__proto__ should be the
      // AbstractModuleSource.prototype.
      const ModuleSourcePrototypeProto = getPrototypeOf(ModuleSourcePrototype);
      if (ModuleSourcePrototypeProto === objectPrototype) {
        setPrototypeOf(ModuleSource.prototype, AbstractModuleSource.prototype);
      }
    }
  }

  return newIntrinsics;
};$h͏_once.tameModuleSource(tameModuleSource);
})()
,
// === 40. ses ./src/error/console.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakSet,arrayFilter,arrayFlatMap,arrayMap,arrayPop,arrayPush,defineProperty,freeze,fromEntries,isError,stringEndsWith,stringIncludes,stringSplit,weaksetAdd,weaksetHas;$h͏_imports([["../commons.js", [["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["stringEndsWith",[$h͏_a => (stringEndsWith = $h͏_a)]],["stringIncludes",[$h͏_a => (stringIncludes = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]]]);
























/**
 * @import {FilterConsole, LogSeverity, VirtualConsole} from './types.js'
 * @import {ErrorInfo, ErrorInfoKind, LogRecord, NoteCallback, LoggedErrorHandler, MakeCausalConsole, MakeLoggingConsoleKit} from "./internal-types.js";
 */

/**
 * Explicitly set a function's name, supporting use of arrow functions for which
 * source text doesn't include a name and no initial name is set by
 * NamedEvaluation
 * https://tc39.es/ecma262/multipage/syntax-directed-operations.html#sec-runtime-semantics-namedevaluation
 * Instead, we hope that tooling uses only the explicit `name` property.
 *
 * @template {Function} F
 * @param {string} name
 * @param {F} fn
 * @returns {F}
 */
const defineName = (name, fn) => defineProperty(fn, 'name', { value: name });

// For our internal debugging purposes, uncomment
// const internalDebugConsole = console;

// The permitted console methods, from:
// Whatwg "living standard" https://console.spec.whatwg.org/
// Node https://nodejs.org/dist/latest-v14.x/docs/api/console.html
// MDN https://developer.mozilla.org/en-US/docs/Web/API/Console_API
// TypeScript https://openstapps.gitlab.io/projectmanagement/interfaces/_node_modules__types_node_globals_d_.console.html
// Chrome https://developers.google.com/web/tools/chrome-devtools/console/api

// All console level methods have parameters (fmt?, ...args)
// where the argument sequence `fmt?, ...args` formats args according to
// fmt if fmt is a format string. Otherwise, it just renders them all as values
// separated by spaces.
// https://console.spec.whatwg.org/#formatter
// https://nodejs.org/docs/latest/api/util.html#util_util_format_format_args

// For the causal console, all occurrences of `fmt, ...args` or `...args` by
// itself must check for the presence of an error to ask the
// `loggedErrorHandler` to handle.
// In theory we should do a deep inspection to detect for example an array
// containing an error. We currently do not detect these and may never.

/** @typedef {keyof VirtualConsole | 'profile' | 'profileEnd'} ConsoleProps */

/**
 * Those console methods whose actual parameters are `(fmt?, ...args)`
 * even if their TypeScript types claim otherwise.
 *
 * Each is paired with what we consider to be their log severity level.
 * This is the same as the log severity of these on other
 * platform console implementations when they all agree.
 *
 * @type {readonly [ConsoleProps, LogSeverity | undefined][]}
 */
       const consoleLevelMethods = freeze([
  ['debug', 'debug'], // (fmt?, ...args) verbose level on Chrome
  ['log', 'log'], // (fmt?, ...args) info level on Chrome
  ['info', 'info'], // (fmt?, ...args)
  ['warn', 'warn'], // (fmt?, ...args)
  ['error', 'error'], // (fmt?, ...args)

  ['trace', 'log'], // (fmt?, ...args)
  ['dirxml', 'log'], // (fmt?, ...args)          but TS typed (...data)
  ['group', 'log'], // (fmt?, ...args)           but TS typed (...label)
  ['groupCollapsed', 'log']  // (fmt?, ...args)  but TS typed (...label)
]);

/**
 * Those console methods other than those already enumerated by
 * `consoleLevelMethods`.
 *
 * Each is paired with what we consider to be their log severity level.
 * This is the same as the log severity of these on other
 * platform console implementations when they all agree.
 *
 * @type {readonly [ConsoleProps, LogSeverity | undefined][]}
 */$h͏_once.consoleLevelMethods(consoleLevelMethods);
       const consoleOtherMethods = freeze([
  ['assert', 'error'], // (value, fmt?, ...args)
  ['timeLog', 'log'], // (label?, ...args) no fmt string

  // Insensitive to whether any argument is an error. All arguments can pass
  // thru to baseConsole as is.
  ['clear', undefined], // ()
  ['count', 'info'], // (label?)
  ['countReset', undefined], // (label?)
  ['dir', 'log'], // (item, options?)
  ['groupEnd', 'log'], // ()
  // In theory tabular data may be or contain an error. However, we currently
  // do not detect these and may never.
  ['table', 'log'], // (tabularData, properties?)
  ['time', 'info'], // (label?)
  ['timeEnd', 'info'], // (label?)

  // Node Inspector only, MDN, and TypeScript, but not whatwg
  ['profile', undefined], // (label?)
  ['profileEnd', undefined], // (label?)
  ['timeStamp', undefined]  // (label?)
]);

/** @type {readonly [ConsoleProps, LogSeverity | undefined][]} */$h͏_once.consoleOtherMethods(consoleOtherMethods);
const consoleMethodPermits = freeze([
  ...consoleLevelMethods,
  ...consoleOtherMethods,
]);

/**
 * consoleOmittedProperties is currently unused. I record and maintain it here
 * with the intention that it be treated like the `false` entries in the main
 * SES permits: that seeing these on the original console is expected, but
 * seeing anything else that's outside the permits is surprising and should
 * provide a diagnostic.
 *
 * const consoleOmittedProperties = freeze([
 *   'memory', // Chrome
 *   'exception', // FF, MDN
 *   '_ignoreErrors', // Node
 *   '_stderr', // Node
 *   '_stderrErrorHandler', // Node
 *   '_stdout', // Node
 *   '_stdoutErrorHandler', // Node
 *   '_times', // Node
 *   'context', // Chrome, Node
 *   'record', // Safari
 *   'recordEnd', // Safari
 *
 *   'screenshot', // Safari
 *   // Symbols
 *   '@@toStringTag', // Chrome: "Object", Safari: "Console"
 *   // A variety of other symbols also seen on Node
 * ]);
 */

// //////////////////////////// Logging Console ////////////////////////////////

/** @type {MakeLoggingConsoleKit} */
       const makeLoggingConsoleKit = (
  loggedErrorHandler,
  { shouldResetForDebugging = false } = {},
) => {
  if (shouldResetForDebugging) {
    // eslint-disable-next-line @endo/no-polymorphic-call
    loggedErrorHandler.resetErrorTagNum();
  }

  // Not frozen!
  let logArray = [];

  const loggingConsole = fromEntries(
    arrayMap(consoleMethodPermits, ([name, _]) => {
      /**
       * @param {...any} args
       */
      const method = defineName(name, (...args) => {
        arrayPush(logArray, [name, ...args]);
      });
      return [name, freeze(method)];
    }),
  );
  freeze(loggingConsole);

  const takeLog = () => {
    const result = freeze(logArray);
    logArray = [];
    return result;
  };
  freeze(takeLog);

  const typedLoggingConsole = /** @type {VirtualConsole} */ (loggingConsole);

  return freeze({ loggingConsole: typedLoggingConsole, takeLog });
};$h͏_once.makeLoggingConsoleKit(makeLoggingConsoleKit);
freeze(makeLoggingConsoleKit);

/**
 * Makes the same calls on a `baseConsole` that were made on a
 * `loggingConsole` to produce this `log`. In this way, a logging console
 * can be used as a buffer to delay the application of these calls to a
 * `baseConsole`.
 *
 * @param {LogRecord[]} log
 * @param {VirtualConsole} baseConsole
 */
       const pumpLogToConsole = (log, baseConsole) => {
  for (const [name, ...args] of log) {
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[name](...args);
  }
};
// //////////////////////////// Causal Console /////////////////////////////////

/** @type {ErrorInfo} */$h͏_once.pumpLogToConsole(pumpLogToConsole);
const ErrorInfo = {
  NOTE: 'ERROR_NOTE:',
  MESSAGE: 'ERROR_MESSAGE:',
  CAUSE: 'cause:',
  ERRORS: 'errors:',
};
freeze(ErrorInfo);

/** @type {MakeCausalConsole} */
       const makeCausalConsole = (baseConsole, loggedErrorHandler) => {
  if (!baseConsole) {
    return undefined;
  }

  const { getStackString, tagError, takeMessageLogArgs, takeNoteLogArgsArray } =
    loggedErrorHandler;

  /**
   * @param {ReadonlyArray<any>} logArgs
   * @param {Array<any>} subErrorsSink
   * @returns {any}
   */
  const extractErrorArgs = (logArgs, subErrorsSink) => {
    const argTags = arrayMap(logArgs, arg => {
      if (isError(arg)) {
        arrayPush(subErrorsSink, arg);
        return `(${tagError(arg)})`;
      }
      return arg;
    });
    return argTags;
  };

  /**
   * @param {LogSeverity} severity
   * @param {Error} error
   * @param {ErrorInfoKind} kind
   * @param {readonly any[]} logArgs
   * @param {Array<Error>} subErrorsSink
   */
  const logErrorInfo = (severity, error, kind, logArgs, subErrorsSink) => {
    const errorTag = tagError(error);
    const errorName =
      kind === ErrorInfo.MESSAGE ? `${errorTag}:` : `${errorTag} ${kind}`;
    const argTags = extractErrorArgs(logArgs, subErrorsSink);
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[severity](errorName, ...argTags);
  };

  /**
   * Logs the `subErrors` within a group name mentioning `optTag`.
   *
   * @param {LogSeverity} severity
   * @param {Error[]} subErrors
   * @param {string | undefined} optTag
   * @returns {void}
   */
  const logSubErrors = (severity, subErrors, optTag = undefined) => {
    if (subErrors.length === 0) {
      return;
    }
    if (subErrors.length === 1 && optTag === undefined) {
      // eslint-disable-next-line no-use-before-define
      logError(severity, subErrors[0]);
      return;
    }
    let label;
    if (subErrors.length === 1) {
      label = `Nested error`;
    } else {
      label = `Nested ${subErrors.length} errors`;
    }
    if (optTag !== undefined) {
      label = `${label} under ${optTag}`;
    }
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole.group(label);
    try {
      for (const subError of subErrors) {
        // eslint-disable-next-line no-use-before-define
        logError(severity, subError);
      }
    } finally {
      if (baseConsole.groupEnd) {
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole.groupEnd();
      }
    }
  };

  const errorsLogged = new WeakSet();

  /** @type {(severity: LogSeverity) => NoteCallback} */
  const makeNoteCallback = severity => (error, noteLogArgs) => {
    const subErrors = [];
    // Annotation arrived after the error has already been logged,
    // so just log the annotation immediately, rather than remembering it.
    logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
    logSubErrors(severity, subErrors, tagError(error));
  };

  /**
   * @param {LogSeverity} severity
   * @param {Error} error
   */
  const logError = (severity, error) => {
    if (weaksetHas(errorsLogged, error)) {
      return;
    }
    const errorTag = tagError(error);
    weaksetAdd(errorsLogged, error);
    const subErrors = [];
    const messageLogArgs = takeMessageLogArgs(error);
    const noteLogArgsArray = takeNoteLogArgsArray(
      error,
      makeNoteCallback(severity),
    );
    // Show the error's most informative error message
    if (messageLogArgs === undefined) {
      // If there is no message log args, then just show the message that
      // the error itself carries.
      // eslint-disable-next-line @endo/no-polymorphic-call
      baseConsole[severity](`${errorTag}:`, error.message);
    } else {
      // If there is one, we take it to be strictly more informative than the
      // message string carried by the error, so show it *instead*.
      logErrorInfo(
        severity,
        error,
        ErrorInfo.MESSAGE,
        messageLogArgs,
        subErrors,
      );
    }
    // After the message but before any other annotations, show the stack.
    let stackString = getStackString(error);
    if (
      typeof stackString === 'string' &&
      stackString.length >= 1 &&
      !stringEndsWith(stackString, '\n')
    ) {
      stackString += '\n';
    }
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[severity](stackString);
    // Show the other annotations on error
    if (error.cause) {
      logErrorInfo(severity, error, ErrorInfo.CAUSE, [error.cause], subErrors);
    }
    // @ts-expect-error AggregateError has an `errors` property.
    if (error.errors) {
      // @ts-expect-error AggregateError has an `errors` property.
      logErrorInfo(severity, error, ErrorInfo.ERRORS, error.errors, subErrors);
    }
    for (const noteLogArgs of noteLogArgsArray) {
      logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
    }
    // explain all the errors seen in the messages already emitted.
    logSubErrors(severity, subErrors, errorTag);
  };

  const levelMethods = arrayMap(consoleLevelMethods, ([level, _]) => {
    /**
     * @param {...any} logArgs
     */
    const levelMethod = defineName(level, (...logArgs) => {
      const subErrors = [];
      const argTags = extractErrorArgs(logArgs, subErrors);
      if (baseConsole[level]) {
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole[level](...argTags);
      }
      // @ts-expect-error ConsoleProp vs LogSeverity mismatch
      logSubErrors(level, subErrors);
    });
    return [level, freeze(levelMethod)];
  });
  const otherMethodNames = arrayFilter(
    consoleOtherMethods,
    ([name, _]) => name in baseConsole,
  );
  const otherMethods = arrayMap(otherMethodNames, ([name, _]) => {
    /**
     * @param {...any} args
     */
    const otherMethod = defineName(name, (...args) => {
      // @ts-ignore
      // eslint-disable-next-line @endo/no-polymorphic-call
      baseConsole[name](...args);
      return undefined;
    });
    return [name, freeze(otherMethod)];
  });

  const causalConsole = fromEntries([...levelMethods, ...otherMethods]);
  return /** @type {VirtualConsole} */ (freeze(causalConsole));
};$h͏_once.makeCausalConsole(makeCausalConsole);
freeze(makeCausalConsole);

/**
 * @typedef {(...args: unknown[]) => void} Logger
 */

/**
 * This is a rather horrible kludge to indent the output to a logger in
 * the case where some arguments are strings containing newlines. Part of
 * the problem is that console-like loggers, including the one in ava,
 * join the string arguments of the log message with a space.
 * Because of this, there's an extra space at the beginning of each of
 * the split lines. So this kludge compensated by putting an extra empty
 * string at the beginning, so that the logger will add the same extra
 * joiner.
 * TODO: Fix this horrible kludge, and indent in a sane manner.
 *
 * @param {string} str
 * @param {string} sep
 * @param {string[]} indents
 * @returns {string[]}
 */
const indentAfterAllSeps = (str, sep, indents) => {
  const [firstLine, ...restLines] = stringSplit(str, sep);
  const indentedRest = arrayFlatMap(restLines, line => [sep, ...indents, line]);
  return ['', firstLine, ...indentedRest];
};

/**
 * @param {LoggedErrorHandler} loggedErrorHandler
 */
       const defineCausalConsoleFromLogger = loggedErrorHandler => {
  /**
   * Implement the `VirtualConsole` API badly by turning all calls into
   * calls on `tlogger`. We need to do this to have `console` logging
   * turn into calls to Ava's `t.log`, so these console log messages
   * are output in the right place.
   *
   * @param {Logger} tlogger
   * @returns {VirtualConsole}
   */
  const makeCausalConsoleFromLogger = tlogger => {
    const indents = [];
    const logWithIndent = (...args) => {
      if (indents.length > 0) {
        args = arrayFlatMap(args, arg =>
          typeof arg === 'string' && stringIncludes(arg, '\n')
            ? indentAfterAllSeps(arg, '\n', indents)
            : [arg],
        );
        args = [...indents, ...args];
      }
      return tlogger(...args);
    };

    const baseConsole = fromEntries([
      ...arrayMap(consoleLevelMethods, ([name]) => [
        name,
        defineName(name, (...args) => logWithIndent(...args)),
      ]),
      ...arrayMap(consoleOtherMethods, ([name]) => [
        name,
        defineName(name, (...args) => logWithIndent(name, ...args)),
      ]),
    ]);
    // https://console.spec.whatwg.org/#grouping
    for (const name of ['group', 'groupCollapsed']) {
      if (baseConsole[name]) {
        baseConsole[name] = defineName(name, (...args) => {
          if (args.length >= 1) {
            // Prefix the logged data with "group" or "groupCollapsed".
            logWithIndent(...args);
          }
          // A single space is enough;
          // the host console will separate them with additional spaces.
          arrayPush(indents, ' ');
        });
      } else {
        baseConsole[name] = defineName(name, () => {});
      }
    }
    baseConsole.groupEnd = defineName(
      'groupEnd',
      baseConsole.groupEnd
        ? (...args) => {
            arrayPop(indents);
          }
        : () => {},
    );
    harden(baseConsole);
    const causalConsole = makeCausalConsole(
      /** @type {VirtualConsole} */ (baseConsole),
      loggedErrorHandler,
    );
    return /** @type {VirtualConsole} */ (causalConsole);
  };
  return freeze(makeCausalConsoleFromLogger);
};$h͏_once.defineCausalConsoleFromLogger(defineCausalConsoleFromLogger);
freeze(defineCausalConsoleFromLogger);

// ///////////////////////// Filter Console ////////////////////////////////////

/** @type {FilterConsole} */
       const filterConsole = (baseConsole, filter, _topic = undefined) => {
  // TODO do something with optional topic string
  const methodPermits = arrayFilter(
    consoleMethodPermits,
    ([name, _]) => name in baseConsole,
  );
  const methods = arrayMap(methodPermits, ([name, severity]) => {
    /**
     * @param {...any} args
     */
    const method = defineName(name, (...args) => {
      // eslint-disable-next-line @endo/no-polymorphic-call
      if (severity === undefined || filter.canLog(severity)) {
        // @ts-ignore
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole[name](...args);
      }
    });
    return [name, freeze(method)];
  });
  const filteringConsole = fromEntries(methods);
  return /** @type {VirtualConsole} */ (freeze(filteringConsole));
};$h͏_once.filterConsole(filterConsole);
freeze(filterConsole);
})()
,
// === 41. ses ./src/error/unhandled-rejection.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FinalizationRegistry,Map,mapGet,mapDelete,WeakMap,mapSet,finalizationRegistryRegister,weakmapSet,weakmapGet,mapEntries,mapHas;$h͏_imports([["../commons.js", [["FinalizationRegistry",[$h͏_a => (FinalizationRegistry = $h͏_a)]],["Map",[$h͏_a => (Map = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapDelete",[$h͏_a => (mapDelete = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["finalizationRegistryRegister",[$h͏_a => (finalizationRegistryRegister = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["mapEntries",[$h͏_a => (mapEntries = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]]]]]);














/**
 * Create rejection-tracking machinery compatible with Node.js and browsers.
 *
 * Note that modern browsers *prevent* access to the 'unhandledrejection' and
 * 'rejectionhandled' events needed:
 * - in cross-origin mode, like when served from file://
 * - in the browser console (interactively typed-in code)
 * - in the debugger
 *
 * Then, they just look like: `Uncaught (in promise) Error: ...` and don't
 * implement the machinery.
 *
 * The solution is to serve your web page from an http:// or https:// web server
 * and execute actual code.
 *
 * @param {(reason: unknown) => void} reportReason report the reason for an
 * unhandled rejection.
 */
       const makeRejectionHandlers = reportReason => {
  if (FinalizationRegistry === undefined) {
    return undefined;
  }

  /** @typedef {number} ReasonId */
  let lastReasonId = 0;

  /** @type {Map<ReasonId, unknown>} */
  const idToReason = new Map();

  /** @type {(() => void) | undefined} */
  let cancelChecking;

  const removeReasonId = reasonId => {
    mapDelete(idToReason, reasonId);
    if (cancelChecking && idToReason.size === 0) {
      // No more unhandled rejections to check, just cancel the check.
      cancelChecking();
      cancelChecking = undefined;
    }
  };

  /** @type {WeakMap<Promise, ReasonId>} */
  const promiseToReasonId = new WeakMap();

  /**
   * Clean up and report the reason for a GCed unhandled rejection.
   *
   * @param {ReasonId} heldReasonId
   */
  const finalizeDroppedPromise = heldReasonId => {
    if (mapHas(idToReason, heldReasonId)) {
      const reason = mapGet(idToReason, heldReasonId);
      removeReasonId(heldReasonId);
      reportReason(reason);
    }
  };

  /** @type {FinalizationRegistry<ReasonId>} */
  const promiseToReason = new FinalizationRegistry(finalizeDroppedPromise);

  /**
   * Track a rejected promise and its corresponding reason if there is no
   * rejection handler synchronously attached.
   *
   * @param {unknown} reason
   * @param {Promise} pr
   */
  const unhandledRejectionHandler = (reason, pr) => {
    lastReasonId += 1;
    const reasonId = lastReasonId;

    // Update bookkeeping.
    mapSet(idToReason, reasonId, reason);
    weakmapSet(promiseToReasonId, pr, reasonId);
    finalizationRegistryRegister(promiseToReason, pr, reasonId, pr);
  };

  /**
   * Deal with the addition of a handler to a previously rejected promise.
   *
   * Just remove it from our list.  Let the FinalizationRegistry or
   * processTermination report any GCed unhandled rejected promises.
   *
   * @param {Promise} pr
   */
  const rejectionHandledHandler = pr => {
    const reasonId = weakmapGet(promiseToReasonId, pr);
    removeReasonId(reasonId);
  };

  /**
   * Report all the unhandled rejections, now that we are abruptly terminating
   * the agent cluster.
   */
  const processTerminationHandler = () => {
    for (const [reasonId, reason] of mapEntries(idToReason)) {
      removeReasonId(reasonId);
      reportReason(reason);
    }
  };

  return {
    rejectionHandledHandler,
    unhandledRejectionHandler,
    processTerminationHandler,
  };
};$h͏_once.makeRejectionHandlers(makeRejectionHandlers);
})()
,
// === 42. ses ./src/error/tame-console.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,apply,defineProperty,freeze,globalThis,defaultHandler,makeCausalConsole,makeRejectionHandlers;$h͏_imports([["../commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./assert.js", [["loggedErrorHandler",[$h͏_a => (defaultHandler = $h͏_a)]]]],["./console.js", [["makeCausalConsole",[$h͏_a => (makeCausalConsole = $h͏_a)]]]],["./unhandled-rejection.js", [["makeRejectionHandlers",[$h͏_a => (makeRejectionHandlers = $h͏_a)]]]]]);













/**
 * @import {VirtualConsole} from './types.js'
 * @import {GetStackString} from './internal-types.js';
 */

const failFast = message => {
  throw TypeError(message);
};

const wrapLogger = (logger, thisArg) =>
  freeze((...args) => apply(logger, thisArg, args));

/**
 * Wrap console unless suppressed.
 * At the moment, the console is considered a host power in the start
 * compartment, and not a primordial. Hence it is absent from the whilelist
 * and bypasses the intrinsicsCollector.
 *
 * @param {"safe" | "unsafe"} consoleTaming
 * @param {"platform" | "exit" | "abort" | "report" | "none"} [errorTrapping]
 * @param {"report" | "none"} [unhandledRejectionTrapping]
 * @param {GetStackString=} optGetStackString
 */
       const tameConsole = (
  consoleTaming = 'safe',
  errorTrapping = 'platform',
  unhandledRejectionTrapping = 'report',
  optGetStackString = undefined,
) => {
  let loggedErrorHandler;
  if (optGetStackString === undefined) {
    loggedErrorHandler = defaultHandler;
  } else {
    loggedErrorHandler = {
      ...defaultHandler,
      getStackString: optGetStackString,
    };
  }

  // eslint-disable-next-line no-restricted-globals
  const originalConsole = /** @type {VirtualConsole} */ (
    // eslint-disable-next-line no-nested-ternary
    typeof globalThis.console !== 'undefined'
      ? globalThis.console
      : typeof globalThis.print === 'function'
        ? // Make a good-enough console for eshost (including only functions that
          // log at a specific level with no special argument interpretation).
          // https://console.spec.whatwg.org/#logging
          (p => freeze({ debug: p, log: p, info: p, warn: p, error: p }))(
            // eslint-disable-next-line no-undef
            wrapLogger(globalThis.print),
          )
        : undefined
  );

  // Upgrade a log-only console (as in `eshost -h SpiderMonkey`).
  if (originalConsole && originalConsole.log) {
    for (const methodName of ['warn', 'error']) {
      if (!originalConsole[methodName]) {
        defineProperty(originalConsole, methodName, {
          value: wrapLogger(originalConsole.log, originalConsole),
        });
      }
    }
  }

  const ourConsole = /** @type {VirtualConsole} */ (
    consoleTaming === 'unsafe'
      ? originalConsole
      : makeCausalConsole(originalConsole, loggedErrorHandler)
  );

  // Attach platform-specific error traps such that any error that gets thrown
  // at top-of-turn (the bottom of stack) will get logged by our causal
  // console, revealing the diagnostic information associated with the error,
  // including the stack from when the error was created.

  // In the following Node.js and web browser cases, `process` and `window` are
  // spelled as `globalThis` properties to avoid the overweaning gaze of
  // Parcel, which dutifully installs an unnecessary `process` shim if we ever
  // utter that. That unnecessary shim forces the whole bundle into sloppy mode,
  // which in turn breaks SES's strict mode invariant.

  // Disable the polymorphic check for the rest of this file.  It's too noisy
  // when dealing with platform APIs.
  /* eslint-disable @endo/no-polymorphic-call */

  // Node.js
  const globalProcess = globalThis.process || undefined;
  if (
    errorTrapping !== 'none' &&
    typeof globalProcess === 'object' &&
    typeof globalProcess.on === 'function'
  ) {
    let terminate;
    if (errorTrapping === 'platform' || errorTrapping === 'exit') {
      const { exit } = globalProcess;
      // If there is a function-valued process.on but no function-valued process.exit,
      // fail early without caring whether errorTrapping is "platform" only by default.
      typeof exit === 'function' || failFast('missing process.exit');
      terminate = () => exit(globalProcess.exitCode || -1);
    } else if (errorTrapping === 'abort') {
      terminate = globalProcess.abort;
      typeof terminate === 'function' || failFast('missing process.abort');
    }

    globalProcess.on('uncaughtException', error => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNCAUGHT_EXCEPTION.md
      ourConsole.error('SES_UNCAUGHT_EXCEPTION:', error);
      if (terminate) {
        terminate();
      }
    });
  }
  if (
    unhandledRejectionTrapping !== 'none' &&
    typeof globalProcess === 'object' &&
    typeof globalProcess.on === 'function'
  ) {
    const handleRejection = reason => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNHANDLED_REJECTION.md
      ourConsole.error('SES_UNHANDLED_REJECTION:', reason);
      // 'platform' and 'report' just log the reason.
    };
    // Maybe track unhandled promise rejections.
    const h = makeRejectionHandlers(handleRejection);
    if (h) {
      // Rejection handlers are supported.
      globalProcess.on('unhandledRejection', h.unhandledRejectionHandler);
      globalProcess.on('rejectionHandled', h.rejectionHandledHandler);
      globalProcess.on('exit', h.processTerminationHandler);
    }
  }

  // Browser
  const globalWindow = globalThis.window || undefined;
  if (
    errorTrapping !== 'none' &&
    typeof globalWindow === 'object' &&
    typeof globalWindow.addEventListener === 'function'
  ) {
    globalWindow.addEventListener('error', event => {
      event.preventDefault();
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNCAUGHT_EXCEPTION.md
      ourConsole.error('SES_UNCAUGHT_EXCEPTION:', event.error);
      // 'platform' and 'report' just log the reason.
      if (errorTrapping === 'exit' || errorTrapping === 'abort') {
        globalWindow.location.href = `about:blank`;
      }
    });
  }
  if (
    unhandledRejectionTrapping !== 'none' &&
    typeof globalWindow === 'object' &&
    typeof globalWindow.addEventListener === 'function'
  ) {
    const handleRejection = reason => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNHANDLED_REJECTION.md
      ourConsole.error('SES_UNHANDLED_REJECTION:', reason);
    };

    const h = makeRejectionHandlers(handleRejection);
    if (h) {
      // Rejection handlers are supported.
      globalWindow.addEventListener('unhandledrejection', event => {
        event.preventDefault();
        h.unhandledRejectionHandler(event.reason, event.promise);
      });

      globalWindow.addEventListener('rejectionhandled', event => {
        event.preventDefault();
        h.rejectionHandledHandler(event.promise);
      });

      globalWindow.addEventListener('beforeunload', _event => {
        h.processTerminationHandler();
      });
    }
  }
  /* eslint-enable @endo/no-polymorphic-call */

  return { console: ourConsole };
};$h͏_once.tameConsole(tameConsole);
})()
,
// === 43. ses ./src/error/tame-v8-error-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakMap,WeakSet,apply,arrayFilter,arrayJoin,arrayMap,arraySlice,create,defineProperties,fromEntries,reflectSet,regexpExec,weakmapGet,weakmapSet,weaksetAdd,weaksetHas,TypeError;$h͏_imports([["../commons.js", [["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arraySlice",[$h͏_a => (arraySlice = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["reflectSet",[$h͏_a => (reflectSet = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]]]]]);



















// Permit names from https://v8.dev/docs/stack-trace-api
// Permiting only the names used by error-stack-shim/src/v8StackFrames
// callSiteToFrame to shim the error stack proposal.
const safeV8CallSiteMethodNames = [
  // suppress 'getThis' definitely
  'getTypeName',
  // suppress 'getFunction' definitely
  'getFunctionName',
  'getMethodName',
  'getFileName',
  'getLineNumber',
  'getColumnNumber',
  'getEvalOrigin',
  'isToplevel',
  'isEval',
  'isNative',
  'isConstructor',
  'isAsync',
  // suppress 'isPromiseAll' for now
  // suppress 'getPromiseIndex' for now

  // Additional names found by experiment, absent from
  // https://v8.dev/docs/stack-trace-api
  'getPosition',
  'getScriptNameOrSourceURL',

  'toString'  // TODO replace to use only permitted info
];

// TODO this is a ridiculously expensive way to attenuate callsites.
// Before that matters, we should switch to a reasonable representation.
const safeV8CallSiteFacet = callSite => {
  const methodEntry = name => {
    const method = callSite[name];
    return [name, () => apply(method, callSite, [])];
  };
  const o = fromEntries(arrayMap(safeV8CallSiteMethodNames, methodEntry));
  return create(o, {});
};

const safeV8SST = sst => arrayMap(sst, safeV8CallSiteFacet);

// If it has `/node_modules/` anywhere in it, on Node it is likely
// to be a dependent package of the current package, and so to
// be an infrastructure frame to be dropped from concise stack traces.
const FILENAME_NODE_DEPENDENTS_CENSOR = /\/node_modules\//;

// If it begins with `internal/` or `node:internal` then it is likely
// part of the node infrustructre itself, to be dropped from concise
// stack traces.
const FILENAME_NODE_INTERNALS_CENSOR = /^(?:node:)?internal\//;

// Frames within SES `assert.js` should be dropped from concise stack traces, as
// these are just steps towards creating the error object in question.
const FILENAME_ASSERT_CENSOR = /\/packages\/ses\/src\/error\/assert\.js$/;

// Frames within the `eventual-send` shim should be dropped so that concise
// deep stacks omit the internals of the eventual-sending mechanism causing
// asynchronous messages to be sent.
// Note that the eventual-send package will move from agoric-sdk to
// Endo, so this rule will be of general interest.
const FILENAME_EVENTUAL_SEND_CENSOR = /\/packages\/eventual-send\/src\//;

// Frames within the `ses-ava` package should be dropped from concise stack
// traces, as they just support exposing error details to AVA.
const FILENAME_SES_AVA_CENSOR = /\/packages\/ses-ava\/src\/ses-ava-test\.js$/;

// Any stack frame whose `fileName` matches any of these censor patterns
// will be omitted from concise stacks.
// TODO Enable users to configure FILENAME_CENSORS via `lockdown` options.
const FILENAME_CENSORS = [
  FILENAME_NODE_DEPENDENTS_CENSOR,
  FILENAME_NODE_INTERNALS_CENSOR,
  FILENAME_ASSERT_CENSOR,
  FILENAME_EVENTUAL_SEND_CENSOR,
  FILENAME_SES_AVA_CENSOR,
];

// Should a stack frame with this as its fileName be included in a concise
// stack trace?
// Exported only so it can be unit tested.
// TODO Move so that it applies not just to v8.
       const filterFileName = fileName => {
  if (fileName === null) {
    // Seems to suppress builtins like `Array.every (<anonymous>)`
    return false;
  }
  for (const filter of FILENAME_CENSORS) {
    if (regexpExec(filter, fileName)) {
      return false;
    }
  }
  return true;
};

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix, ending in a `/.../` should get dropped.
// Anything to the left of the likely path text is kept.
// Everything to the right of `/.../` is kept. Thus
// `'Object.bar (/vat-v1/.../errors/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (errors/test/deep-send.test.js:13:21)'`.
//
// See thread starting at
// https://github.com/Agoric/agoric-sdk/issues/2326#issuecomment-773020389
$h͏_once.filterFileName(filterFileName);const CALLSITE_ELLIPSIS_PATTERN1=/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix consisting of `.../` should get dropped.
// Anything to the left of the likely path text is kept.
// Everything to the right of `.../` is kept. Thus
// `'Object.bar (.../errors/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (errors/test/deep-send.test.js:13:21)'`.
//
// See thread starting at
// https://github.com/Agoric/agoric-sdk/issues/2326#issuecomment-773020389
const CALLSITE_ELLIPSIS_PATTERN2 = /^((?:.*[( ])?)\.\.\.\/(.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix, ending in a `/` and prior to `package/` should get
// dropped.
// Anything to the left of the likely path prefix text is kept. `package/` and
// everything to its right is kept. Thus
// `'Object.bar (/Users/markmiller/src/ongithub/agoric/agoric-sdk/packages/errors/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (packages/errors/test/deep-send.test.js:13:21)'`.
// Note that `/packages/` is a convention for monorepos encouraged by
// lerna.
const CALLSITE_PACKAGES_PATTERN = /^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix of the form `file://` but not `file:///` gets
// dropped.
// Anything to the left of the likely path prefix text is kept. Everything to
// the right of `file://` is kept. Thus
// `'Object.bar (file:///Users/markmiller/src/ongithub/endojs/endo/packages/errors/test/deep-send.test.js:13:21)'` is unchanged but
// `'Object.bar (file://test/deep-send.test.js:13:21)'`

// simplifies to
// `'Object.bar (test/deep-send.test.js:13:21)'`.
// The reason is that `file:///` usually precedes an absolute path which is
// clickable without removing the `file:///`, whereas `file://` usually precedes
// a relative path which, for whatever vscode reason, is not clickable until the
// `file://` is removed.
const CALLSITE_FILE_2SLASH_PATTERN = /^((?:.*[( ])?)file:\/\/([^/].*)$/;

// The use of these callSite patterns below assumes that any match will bind
// capture groups containing the parts of the original string we want
// to keep. The parts outside those capture groups will be dropped from concise
// stacks.
// TODO Enable users to configure CALLSITE_PATTERNS via `lockdown` options.
const CALLSITE_PATTERNS = [
  CALLSITE_ELLIPSIS_PATTERN1,
  CALLSITE_ELLIPSIS_PATTERN2,
  CALLSITE_PACKAGES_PATTERN,
  CALLSITE_FILE_2SLASH_PATTERN,
];

// For a stack frame that should be included in a concise stack trace, if
// `callSiteString` is the original stringified stack frame, return the
// possibly-shorter stringified stack frame that should be shown instead.
// Exported only so it can be unit tested.
// TODO Move so that it applies not just to v8.
/**
 * @param {string} callSiteString
 */
       const shortenCallSiteString = callSiteString => {
  for (const filter of CALLSITE_PATTERNS) {
    const match = regexpExec(filter, callSiteString);
    if (match) {
      return arrayJoin(arraySlice(match, 1), '');
    }
  }
  return callSiteString;
};$h͏_once.shortenCallSiteString(shortenCallSiteString);

       const tameV8ErrorConstructor = (
  OriginalError,
  InitialError,
  errorTaming,
  stackFiltering,
) => {
  if (errorTaming === 'unsafe-debug') {
    throw TypeError(
      'internal: v8+unsafe-debug special case should already be done',
    );
  }
  // TODO: Proper CallSite types
  /** @typedef {{}} CallSite */

  const originalCaptureStackTrace = OriginalError.captureStackTrace;

  const omitFrames =
    stackFiltering === 'concise' || stackFiltering === 'omit-frames';

  const shortenPaths =
    stackFiltering === 'concise' || stackFiltering === 'shorten-paths';

  // const callSiteFilter = _callSite => true;
  const callSiteFilter = callSite => {
    if (omitFrames) {
      // eslint-disable-next-line @endo/no-polymorphic-call
      if (callSite.getFunctionName()?.startsWith('__HIDE_')) {
        return false;
      }
      // eslint-disable-next-line @endo/no-polymorphic-call
      return filterFileName(callSite.getFileName());
    }
    return true;
  };

  const callSiteStringifier = callSite => {
    let callSiteString = `${callSite}`;
    if (shortenPaths) {
      callSiteString = shortenCallSiteString(callSiteString);
    }
    return `\n  at ${callSiteString}`;
  };

  const stackStringFromSST = (_error, sst) =>
    arrayJoin(
      arrayMap(arrayFilter(sst, callSiteFilter), callSiteStringifier),
      '',
    );

  /**
   * @typedef {object} StructuredStackInfo
   * @property {CallSite[]} callSites
   * @property {undefined} [stackString]
   */

  /**
   * @typedef {object} ParsedStackInfo
   * @property {undefined} [callSites]
   * @property {string} stackString
   */

  // Mapping from error instance to the stack for that instance.
  // The stack info is either the structured stack trace
  // or the generated tamed stack string
  /** @type {WeakMap<Error, ParsedStackInfo | StructuredStackInfo>} */
  const stackInfos = new WeakMap();

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    // The optional `optFn` argument is for cutting off the bottom of
    // the stack --- for capturing the stack only above the topmost
    // call to that function. Since this isn't the "real" captureStackTrace
    // but instead calls the real one, if no other cutoff is provided,
    // we cut this one off.
    captureStackTrace(error, optFn = tamedMethods.captureStackTrace) {
      if (typeof originalCaptureStackTrace === 'function') {
        // OriginalError.captureStackTrace is only on v8
        apply(originalCaptureStackTrace, OriginalError, [error, optFn]);
        return;
      }
      reflectSet(error, 'stack', '');
    },
    // Shim of proposed special power, to reside by default only
    // in the start compartment, for getting the stack traceback
    // string associated with an error.
    // See https://tc39.es/proposal-error-stacks/
    getStackString(error) {
      let stackInfo = weakmapGet(stackInfos, error);

      if (stackInfo === undefined) {
        // The following will call `prepareStackTrace()` synchronously
        // which will populate stackInfos
        // eslint-disable-next-line no-void
        void error.stack;
        stackInfo = weakmapGet(stackInfos, error);
        if (!stackInfo) {
          stackInfo = { stackString: '' };
          weakmapSet(stackInfos, error, stackInfo);
        }
      }

      // prepareStackTrace() may generate the stackString
      // if errorTaming === 'unsafe'

      if (stackInfo.stackString !== undefined) {
        return stackInfo.stackString;
      }

      const stackString = stackStringFromSST(error, stackInfo.callSites);
      weakmapSet(stackInfos, error, { stackString });

      return stackString;
    },
    prepareStackTrace(error, sst) {
      if (errorTaming === 'unsafe') {
        const stackString = stackStringFromSST(error, sst);
        weakmapSet(stackInfos, error, { stackString });
        return `${error}${stackString}`;
      } else {
        weakmapSet(stackInfos, error, { callSites: sst });
        return '';
      }
    },
  };

  // A prepareFn is a prepareStackTrace function.
  // An sst is a `structuredStackTrace`, which is an array of
  // callsites.
  // A user prepareFn is a prepareFn defined by a client of this API,
  // and provided by assigning to `Error.prepareStackTrace`.
  // A user prepareFn should only receive an attenuated sst, which
  // is an array of attenuated callsites.
  // A system prepareFn is the prepareFn created by this module to
  // be installed on the real `Error` constructor, to receive
  // an original sst, i.e., an array of unattenuated callsites.
  // An input prepareFn is a function the user assigns to
  // `Error.prepareStackTrace`, which might be a user prepareFn or
  // a system prepareFn previously obtained by reading
  // `Error.prepareStackTrace`.

  const defaultPrepareFn = tamedMethods.prepareStackTrace;

  OriginalError.prepareStackTrace = defaultPrepareFn;

  // A weakset branding some functions as system prepareFns, all of which
  // must be defined by this module, since they can receive an
  // unattenuated sst.
  const systemPrepareFnSet = new WeakSet([defaultPrepareFn]);

  const systemPrepareFnFor = inputPrepareFn => {
    if (weaksetHas(systemPrepareFnSet, inputPrepareFn)) {
      return inputPrepareFn;
    }
    // Use concise methods to obtain named functions without constructors.
    const systemMethods = {
      prepareStackTrace(error, sst) {
        weakmapSet(stackInfos, error, { callSites: sst });
        return inputPrepareFn(error, safeV8SST(sst));
      },
    };
    weaksetAdd(systemPrepareFnSet, systemMethods.prepareStackTrace);
    return systemMethods.prepareStackTrace;
  };

  // Note `stackTraceLimit` accessor already defined by
  // tame-error-constructor.js
  defineProperties(InitialError, {
    captureStackTrace: {
      value: tamedMethods.captureStackTrace,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    prepareStackTrace: {
      get() {
        return OriginalError.prepareStackTrace;
      },
      set(inputPrepareStackTraceFn) {
        if (typeof inputPrepareStackTraceFn === 'function') {
          const systemPrepareFn = systemPrepareFnFor(inputPrepareStackTraceFn);
          OriginalError.prepareStackTrace = systemPrepareFn;
        } else {
          OriginalError.prepareStackTrace = defaultPrepareFn;
        }
      },
      enumerable: false,
      configurable: true,
    },
  });

  return tamedMethods.getStackString;
};$h͏_once.tameV8ErrorConstructor(tameV8ErrorConstructor);
})()
,
// === 44. ses ./src/error/tame-error-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_ERROR,apply,construct,defineProperties,setPrototypeOf,getOwnPropertyDescriptor,defineProperty,getOwnPropertyDescriptors,NativeErrors,tameV8ErrorConstructor;$h͏_imports([["../commons.js", [["FERAL_ERROR",[$h͏_a => (FERAL_ERROR = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["../permits.js", [["NativeErrors",[$h͏_a => (NativeErrors = $h͏_a)]]]],["./tame-v8-error-constructor.js", [["tameV8ErrorConstructor",[$h͏_a => (tameV8ErrorConstructor = $h͏_a)]]]]]);












// Present on at least FF and XS. Proposed by Error-proposal. The original
// is dangerous, so tameErrorConstructor replaces it with a safe one.
// We grab the original here before it gets replaced.
const stackDesc = getOwnPropertyDescriptor(FERAL_ERROR.prototype, 'stack');
const stackGetter = stackDesc && stackDesc.get;

// Use concise methods to obtain named functions without constructors.
const tamedMethods = {
  getStackString(error) {
    if (typeof stackGetter === 'function') {
      return apply(stackGetter, error, []);
    } else if ('stack' in error) {
      // The fallback is to just use the de facto `error.stack` if present
      return `${error.stack}`;
    }
    return '';
  },
};
let initialGetStackString = tamedMethods.getStackString;

               function tameErrorConstructor(
  errorTaming = 'safe',
  stackFiltering = 'concise',
) {
  const ErrorPrototype = FERAL_ERROR.prototype;

  const { captureStackTrace: originalCaptureStackTrace } = FERAL_ERROR;
  const platform =
    typeof originalCaptureStackTrace === 'function' ? 'v8' : 'unknown';

  const makeErrorConstructor = (_ = {}) => {
    // eslint-disable-next-line no-shadow
    const ResultError = function Error(...rest) {
      let error;
      if (new.target === undefined) {
        error = apply(FERAL_ERROR, this, rest);
      } else {
        error = construct(FERAL_ERROR, rest, new.target);
      }
      if (platform === 'v8') {
        // TODO Likely expensive!
        apply(originalCaptureStackTrace, FERAL_ERROR, [error, ResultError]);
      }
      return error;
    };
    defineProperties(ResultError, {
      length: { value: 1 },
      prototype: {
        value: ErrorPrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
    return ResultError;
  };
  const InitialError = makeErrorConstructor({ powers: 'original' });
  const SharedError = makeErrorConstructor({ powers: 'none' });
  defineProperties(ErrorPrototype, {
    constructor: { value: SharedError },
  });

  for (const NativeError of NativeErrors) {
    setPrototypeOf(NativeError, SharedError);
  }

  // https://v8.dev/docs/stack-trace-api#compatibility advises that
  // programmers can "always" set `Error.stackTraceLimit`
  // even on non-v8 platforms. On non-v8
  // it will have no effect, but this advice only makes sense
  // if the assignment itself does not fail, which it would
  // if `Error` were naively frozen. Hence, we add setters that
  // accept but ignore the assignment on non-v8 platforms.
  defineProperties(InitialError, {
    stackTraceLimit: {
      get() {
        if (typeof FERAL_ERROR.stackTraceLimit === 'number') {
          // FERAL_ERROR.stackTraceLimit is only on v8
          return FERAL_ERROR.stackTraceLimit;
        }
        return undefined;
      },
      set(newLimit) {
        if (typeof newLimit !== 'number') {
          // silently do nothing. This behavior doesn't precisely
          // emulate v8 edge-case behavior. But given the purpose
          // of this emulation, having edge cases err towards
          // harmless seems the safer option.
          return;
        }
        if (typeof FERAL_ERROR.stackTraceLimit === 'number') {
          // FERAL_ERROR.stackTraceLimit is only on v8
          FERAL_ERROR.stackTraceLimit = newLimit;
          // We place the useless return on the next line to ensure
          // that anything we place after the if in the future only
          // happens if the then-case does not.
          // eslint-disable-next-line no-useless-return
          return;
        }
      },
      // WTF on v8 stackTraceLimit is enumerable
      enumerable: false,
      configurable: true,
    },
  });

  if (errorTaming === 'unsafe-debug' && platform === 'v8') {
    // This case is a kludge to work around
    // https://github.com/endojs/endo/issues/1798
    // https://github.com/endojs/endo/issues/2348
    // https://github.com/Agoric/agoric-sdk/issues/8662

    defineProperties(InitialError, {
      prepareStackTrace: {
        get() {
          return FERAL_ERROR.prepareStackTrace;
        },
        set(newPrepareStackTrace) {
          FERAL_ERROR.prepareStackTrace = newPrepareStackTrace;
        },
        enumerable: false,
        configurable: true,
      },
      captureStackTrace: {
        value: FERAL_ERROR.captureStackTrace,
        writable: true,
        enumerable: false,
        configurable: true,
      },
    });

    const descs = getOwnPropertyDescriptors(InitialError);
    defineProperties(SharedError, {
      stackTraceLimit: descs.stackTraceLimit,
      prepareStackTrace: descs.prepareStackTrace,
      captureStackTrace: descs.captureStackTrace,
    });

    return {
      '%InitialGetStackString%': initialGetStackString,
      '%InitialError%': InitialError,
      '%SharedError%': SharedError,
    };
  }

  // The default SharedError much be completely powerless even on v8,
  // so the lenient `stackTraceLimit` accessor does nothing on all
  // platforms.
  defineProperties(SharedError, {
    stackTraceLimit: {
      get() {
        return undefined;
      },
      set(_newLimit) {
        // do nothing
      },
      enumerable: false,
      configurable: true,
    },
  });

  if (platform === 'v8') {
    // `SharedError.prepareStackTrace`, if it exists, must also be
    // powerless. However, from what we've heard, depd expects to be able to
    // assign to it without the assignment throwing. It is normally a function
    // that returns a stack string to be magically added to error objects.
    // However, as long as we're adding a lenient standin, we may as well
    // accommodate any who expect to get a function they can call and get
    // a string back. This prepareStackTrace is a do-nothing function that
    // always returns the empty string.
    defineProperties(SharedError, {
      prepareStackTrace: {
        get() {
          return () => '';
        },
        set(_prepareFn) {
          // do nothing
        },
        enumerable: false,
        configurable: true,
      },
      captureStackTrace: {
        value: (errorish, _constructorOpt) => {
          defineProperty(errorish, 'stack', {
            value: '',
          });
        },
        writable: false,
        enumerable: false,
        configurable: true,
      },
    });
  }

  if (platform === 'v8') {
    initialGetStackString = tameV8ErrorConstructor(
      FERAL_ERROR,
      InitialError,
      errorTaming,
      stackFiltering,
    );
  } else if (errorTaming === 'unsafe' || errorTaming === 'unsafe-debug') {
    // v8 has too much magic around their 'stack' own property for it to
    // coexist cleanly with this accessor. So only install it on non-v8

    // Error.prototype.stack property as proposed at
    // https://tc39.es/proposal-error-stacks/
    // with the fix proposed at
    // https://github.com/tc39/proposal-error-stacks/issues/46
    // On others, this still protects from the override mistake,
    // essentially like enable-property-overrides.js would
    // once this accessor property itself is frozen, as will happen
    // later during lockdown.
    //
    // However, there is here a change from the intent in the current
    // state of the proposal. If experience tells us whether this change
    // is a good idea, we should modify the proposal accordingly. There is
    // much code in the world that assumes `error.stack` is a string. So
    // where the proposal accommodates secure operation by making the
    // property optional, we instead accommodate secure operation by
    // having the secure form always return only the stable part, the
    // stringified error instance, and omitting all the frame information
    // rather than omitting the property.
    defineProperties(ErrorPrototype, {
      stack: {
        get() {
          return initialGetStackString(this);
        },
        set(newValue) {
          defineProperties(this, {
            stack: {
              value: newValue,
              writable: true,
              enumerable: true,
              configurable: true,
            },
          });
        },
      },
    });
  } else {
    // v8 has too much magic around their 'stack' own property for it to
    // coexist cleanly with this accessor. So only install it on non-v8
    defineProperties(ErrorPrototype, {
      stack: {
        get() {
          // https://github.com/tc39/proposal-error-stacks/issues/46
          // allows this to not add an unpleasant newline. Otherwise
          // we should fix this.
          return `${this}`;
        },
        set(newValue) {
          defineProperties(this, {
            stack: {
              value: newValue,
              writable: true,
              enumerable: true,
              configurable: true,
            },
          });
        },
      },
    });
  }

  return {
    '%InitialGetStackString%': initialGetStackString,
    '%InitialError%': InitialError,
    '%SharedError%': SharedError,
  };
}$h͏_once.default(      tameErrorConstructor);
})()
,
// === 45. ses ./src/module-load.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getenv,Map,Set,TypeError,arrayJoin,arrayMap,arrayPush,arraySome,create,freeze,generatorNext,generatorThrow,getOwnPropertyNames,isArray,isPrimitive,mapGet,mapHas,mapSet,promiseThen,setAdd,values,weakmapGet,weakmapHas,makeError,annotateError,q,b,X;$h͏_imports([["@endo/env-options", [["getEnvironmentOption",[$h͏_a => (getenv = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["Set",[$h͏_a => (Set = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arraySome",[$h͏_a => (arraySome = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["generatorNext",[$h͏_a => (generatorNext = $h͏_a)]],["generatorThrow",[$h͏_a => (generatorThrow = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["promiseThen",[$h͏_a => (promiseThen = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["values",[$h͏_a => (values = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapHas",[$h͏_a => (weakmapHas = $h͏_a)]]]],["./error/assert.js", [["makeError",[$h͏_a => (makeError = $h͏_a)]],["annotateError",[$h͏_a => (annotateError = $h͏_a)]],["q",[$h͏_a => (q = $h͏_a)]],["b",[$h͏_a => (b = $h͏_a)]],["X",[$h͏_a => (X = $h͏_a)]]]]]);


























const noop = () => {};

const asyncTrampoline = async (generatorFunc, args, errorWrapper) => {
  await null;
  const iterator = generatorFunc(...args);
  let result = generatorNext(iterator);
  while (!result.done) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const val = await result.value;
      result = generatorNext(iterator, val);
    } catch (error) {
      result = generatorThrow(iterator, errorWrapper(error));
    }
  }
  return result.value;
};

const syncTrampoline = (generatorFunc, args) => {
  const iterator = generatorFunc(...args);
  let result = generatorNext(iterator);
  while (!result.done) {
    try {
      result = generatorNext(iterator, result.value);
    } catch (error) {
      result = generatorThrow(iterator, error);
    }
  }
  return result.value;
};

// `makeAlias` constructs compartment specifier tuples for the `aliases`
// private field of compartments.
// These aliases allow a compartment to alias an internal module specifier to a
// module specifier in an external compartment, and also to create internal
// aliases.
// Both are facilitated by the moduleMap Compartment constructor option.
       const makeAlias = (compartment, specifier) =>
  freeze({ compartment, specifier });

// `resolveAll` pre-computes resolutions of all imports within the compartment
// in which a module was loaded.
$h͏_once.makeAlias(makeAlias);const resolveAll=(imports,resolveHook,fullReferrerSpecifier)=>{
  const resolvedImports = create(null);
  for (const importSpecifier of imports) {
    const fullSpecifier = resolveHook(importSpecifier, fullReferrerSpecifier);
    resolvedImports[importSpecifier] = fullSpecifier;
  }
  return freeze(resolvedImports);
};

const loadModuleSource = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  moduleSource,
  enqueueJob,
  selectImplementation,
  moduleLoads,
  importMeta,
) => {
  const { resolveHook, name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  const { imports } = moduleSource;
  if (
    !isArray(imports) ||
    arraySome(imports, specifier => typeof specifier !== 'string')
  ) {
    throw makeError(
      X`Invalid module source: 'imports' must be an array of strings, got ${imports} for module ${q(moduleSpecifier)} of compartment ${q(compartmentName)}`,
    );
  }

  // resolve all imports relative to this referrer module.
  const resolvedImports = resolveAll(imports, resolveHook, moduleSpecifier);
  const moduleRecord = freeze({
    compartment,
    moduleSource,
    moduleSpecifier,
    resolvedImports,
    importMeta,
  });

  // Enqueue jobs to load this module's shallow dependencies.
  for (const fullSpecifier of values(resolvedImports)) {
    // Behold: recursion.
    // eslint-disable-next-line no-use-before-define
    enqueueJob(memoizedLoadWithErrorAnnotation, [
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      fullSpecifier,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    ]);
  }

  return moduleRecord;
};

function* loadWithoutErrorAnnotation(
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  enqueueJob,
  selectImplementation,
  moduleLoads,
) {
  const {
    importHook,
    importNowHook,
    moduleMap,
    moduleMapHook,
    moduleRecords,
    parentCompartment,
  } = weakmapGet(compartmentPrivateFields, compartment);

  if (mapHas(moduleRecords, moduleSpecifier)) {
    return mapGet(moduleRecords, moduleSpecifier);
  }

  // Follow moduleMap, or moduleMapHook if present.
  let moduleDescriptor = moduleMap[moduleSpecifier];
  if (moduleDescriptor === undefined && moduleMapHook !== undefined) {
    moduleDescriptor = moduleMapHook(moduleSpecifier);
  }
  if (moduleDescriptor === undefined) {
    const moduleHook = selectImplementation(importHook, importNowHook);
    if (moduleHook === undefined) {
      const moduleHookName = selectImplementation(
        'importHook',
        'importNowHook',
      );
      throw makeError(
        X`${b(moduleHookName)} needed to load module ${q(
          moduleSpecifier,
        )} in compartment ${q(compartment.name)}`,
      );
    }
    moduleDescriptor = moduleHook(moduleSpecifier);
    // Uninitialized module namespaces throw if we attempt to coerce them into
    // promises.
    if (!weakmapHas(moduleAliases, moduleDescriptor)) {
      moduleDescriptor = yield moduleDescriptor;
    }
  }

  if (typeof moduleDescriptor === 'string') {
    // eslint-disable-next-line @endo/no-polymorphic-call
    throw makeError(
      X`Cannot map module ${q(moduleSpecifier)} to ${q(
        moduleDescriptor,
      )} in parent compartment, use {source} module descriptor`,
      TypeError,
    );
  } else if (!isPrimitive(moduleDescriptor)) {
    // In this shim (and not in XS, and not in the standard we imagine), we
    // allow a module namespace object to stand in for a module descriptor that
    // describes its original {compartment, specifier} so that it can be used
    // to create a link.
    let aliasDescriptor = weakmapGet(moduleAliases, moduleDescriptor);
    if (aliasDescriptor !== undefined) {
      moduleDescriptor = aliasDescriptor;
    }

    if (moduleDescriptor.namespace !== undefined) {
      // { namespace: string, compartment?: Compartment }
      // Namespace module descriptors link to a module instance.

      if (typeof moduleDescriptor.namespace === 'string') {
        // The default compartment is the *parent*, not this child compartment.
        // This is a difference from the legacy {specifier, compartment} module
        // descriptor.
        const {
          compartment: aliasCompartment = parentCompartment,
          namespace: aliasSpecifier,
        } = moduleDescriptor;
        if (
          isPrimitive(aliasCompartment) ||
          !weakmapHas(compartmentPrivateFields, aliasCompartment)
        ) {
          throw makeError(
            X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
          );
        }
        // Behold: recursion.
        // eslint-disable-next-line no-use-before-define
        const aliasRecord = yield memoizedLoadWithErrorAnnotation(
          compartmentPrivateFields,
          moduleAliases,
          aliasCompartment,
          aliasSpecifier,
          enqueueJob,
          selectImplementation,
          moduleLoads,
        );
        mapSet(moduleRecords, moduleSpecifier, aliasRecord);
        return aliasRecord;
      }

      // All remaining objects must either be a module namespace, or be
      // promoted into a module namespace with a virtual module source.
      if (!isPrimitive(moduleDescriptor.namespace)) {
        const { namespace } = moduleDescriptor;
        // Brand-check SES shim module exports namespaces:
        aliasDescriptor = weakmapGet(moduleAliases, namespace);
        if (aliasDescriptor !== undefined) {
          moduleDescriptor = aliasDescriptor;
          // Fall through to processing the resulting {compartment, specifier}
          // alias.
        } else {
          // Promote an arbitrary object to a module namespace with a virtual
          // module source.
          // { namespace: Object }
          const exports = getOwnPropertyNames(namespace);
          /** @type {import('../types.js').VirtualModuleSource} */
          const moduleSource = {
            imports: [],
            exports,
            execute(env) {
              for (const name of exports) {
                env[name] = namespace[name];
              }
            },
          };
          const importMeta = undefined;
          const moduleRecord = loadModuleSource(
            compartmentPrivateFields,
            moduleAliases,
            compartment,
            moduleSpecifier,
            moduleSource,
            enqueueJob,
            selectImplementation,
            moduleLoads,
            importMeta,
          );
          mapSet(moduleRecords, moduleSpecifier, moduleRecord);
          return moduleRecord;
        }
      } else {
        throw makeError(
          X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
        );
      }
    }

    if (moduleDescriptor.source !== undefined) {
      // Module source descriptors create an instance from a module source.
      // The descriptor may contain the module source, or refer to a source
      // loaded in a particular compartment.

      if (typeof moduleDescriptor.source === 'string') {
        // { source: string, importMeta?, specifier?: string, compartment? }
        // A string source is the specifier for a different module source.
        // That source may come from this compartment's parent (default), or
        // from a specified compartment, and the specified compartment may be
        // this compartment to make a duplicate.

        const {
          source: loaderSpecifier,
          specifier: instanceSpecifier = moduleSpecifier,
          compartment: loaderCompartment = parentCompartment,
          importMeta = undefined,
        } = moduleDescriptor;

        // Induce the compartment, possibly a different compartment
        // to load a module source.

        // Behold: recursion.
        // eslint-disable-next-line no-use-before-define
        const loaderRecord = yield memoizedLoadWithErrorAnnotation(
          compartmentPrivateFields,
          moduleAliases,
          loaderCompartment,
          loaderSpecifier,
          enqueueJob,
          selectImplementation,
          moduleLoads,
        );

        // Extract the source of the module from the loader compartment's
        // record.
        const { moduleSource } = loaderRecord;

        // Instantiate that source in our own compartment, possibly with a
        // different specifier for resolving its own imports.
        const moduleRecord = loadModuleSource(
          compartmentPrivateFields,
          moduleAliases,
          compartment,
          instanceSpecifier,
          moduleSource,
          enqueueJob,
          selectImplementation,
          moduleLoads,
          importMeta,
        );
        mapSet(moduleRecords, moduleSpecifier, moduleRecord);
        return moduleRecord;
      } else {
        // { source: ModuleSource, importMeta?, specifier?: string }
        // We assume all non-string module sources are any of the supported
        // kinds of module source: PrecompiledModuleSource,
        // VirtualModuleSource, or a native ModuleSource.

        const {
          source: moduleSource,
          specifier: aliasSpecifier = moduleSpecifier,
          importMeta,
        } = moduleDescriptor;

        const aliasRecord = loadModuleSource(
          compartmentPrivateFields,
          moduleAliases,
          compartment,
          aliasSpecifier,
          moduleSource,
          enqueueJob,
          selectImplementation,
          moduleLoads,
          importMeta,
        );
        mapSet(moduleRecords, moduleSpecifier, aliasRecord);
        return aliasRecord;
      }
    }

    if (moduleDescriptor.archive !== undefined) {
      // { archive: Archive, path: string }
      // We do not support this XS-native module descriptor.
      throw makeError(
        X`Unsupported archive module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
      );
    }

    // { record, specifier?, compartment?, importMeta? }
    // A (legacy) module descriptor for when we find the module source (record)
    // but at a different specifier than requested.
    // Providing this {specifier, record} descriptor serves as an ergonomic
    // short-hand for stashing the record, returning a {compartment, specifier}
    // reference, bouncing the module hook, then producing the source (record)
    // when module hook receives the response specifier.
    if (moduleDescriptor.record !== undefined) {
      const {
        compartment: aliasCompartment = compartment,
        specifier: aliasSpecifier = moduleSpecifier,
        record: moduleSource,
        importMeta,
      } = moduleDescriptor;

      const aliasRecord = loadModuleSource(
        compartmentPrivateFields,
        moduleAliases,
        aliasCompartment,
        aliasSpecifier,
        moduleSource,
        enqueueJob,
        selectImplementation,
        moduleLoads,
        importMeta,
      );
      mapSet(moduleRecords, moduleSpecifier, aliasRecord);
      mapSet(moduleRecords, aliasSpecifier, aliasRecord);
      return aliasRecord;
    }

    // { specifier: string, compartment: Compartment }
    // A (legacy) module descriptor that describes a link to a module instance
    // in a specified compartment.
    if (
      moduleDescriptor.compartment !== undefined &&
      moduleDescriptor.specifier !== undefined
    ) {
      if (
        isPrimitive(moduleDescriptor.compartment) ||
        !weakmapHas(compartmentPrivateFields, moduleDescriptor.compartment) ||
        typeof moduleDescriptor.specifier !== 'string'
      ) {
        throw makeError(
          X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
        );
      }
      // Behold: recursion.
      // eslint-disable-next-line no-use-before-define
      const aliasRecord = yield memoizedLoadWithErrorAnnotation(
        compartmentPrivateFields,
        moduleAliases,
        moduleDescriptor.compartment,
        moduleDescriptor.specifier,
        enqueueJob,
        selectImplementation,
        moduleLoads,
      );
      mapSet(moduleRecords, moduleSpecifier, aliasRecord);
      return aliasRecord;
    }

    // A (legacy) behavior: If we do not recognize the module descriptor as a
    // module descriptor, we assume that it is a module source (record):
    const moduleSource = moduleDescriptor;
    const moduleRecord = loadModuleSource(
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      moduleSpecifier,
      moduleSource,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    );
    // Memoize.
    mapSet(moduleRecords, moduleSpecifier, moduleRecord);
    return moduleRecord;
  } else {
    throw makeError(
      X`module descriptor must be a string or object for specifier ${q(
        moduleSpecifier,
      )} in compartment ${q(compartment.name)}`,
    );
  }
}

const memoizedLoadWithErrorAnnotation = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  enqueueJob,
  selectImplementation,
  moduleLoads,
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  // Prevent data-lock from recursion into branches visited in dependent loads.
  let compartmentLoading = mapGet(moduleLoads, compartment);
  if (compartmentLoading === undefined) {
    compartmentLoading = new Map();
    mapSet(moduleLoads, compartment, compartmentLoading);
  }
  let moduleLoading = mapGet(compartmentLoading, moduleSpecifier);
  if (moduleLoading !== undefined) {
    return moduleLoading;
  }

  moduleLoading = selectImplementation(asyncTrampoline, syncTrampoline)(
    loadWithoutErrorAnnotation,
    [
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      moduleSpecifier,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    ],
    error => {
      // eslint-disable-next-line @endo/no-polymorphic-call
      annotateError(
        error,
        X`${error.message}, loading ${q(moduleSpecifier)} in compartment ${q(
          compartmentName,
        )}`,
      );
      throw error;
    },
  );

  mapSet(compartmentLoading, moduleSpecifier, moduleLoading);

  return moduleLoading;
};

/**
 * If `aggregateErrors` is `false`, the `errors` property of the fulfilled object
 * will always be empty.
 * @param {{errors?: Error[], noAggregateErrors?: boolean}} [options]
 */
const asyncJobQueue = ({ errors = [], noAggregateErrors = false } = {}) => {
  /** @type {Set<Promise<undefined>>} */
  const pendingJobs = new Set();

  /**
   * Enqueues a job that starts immediately but won't be awaited until drainQueue is called.
   *
   * @template {(...args: any[]) => Promise<void>} F
   * @param {F} func - An async function to execute
   * @param {Parameters<F>} args - Arguments to pass to the function
   * @returns {void}
   */
  const enqueueJob = (func, args) => {
    setAdd(
      pendingJobs,
      promiseThen(func(...args), noop, error => {
        if (noAggregateErrors) {
          throw error;
        } else {
          arrayPush(errors, error);
        }
      }),
    );
  };
  /**
   * Sequentially awaits pending jobs and returns an array of errors
   */
  const drainQueue = async () => {
    await null;
    for (const job of pendingJobs) {
      // eslint-disable-next-line no-await-in-loop
      await job;
    }
  };
  return { enqueueJob, drainQueue, errors };
};

/**
 * If `aggregateErrors` is `false`, the `errors` property of the returned object
 * will always be empty.
 * @param {{errors?: Error[], noAggregateErrors?: boolean}} [options]
 */
const syncJobQueue = ({ errors = [], noAggregateErrors = false } = {}) => {
  let current = [];
  let next = [];

  /**
   * Enqueues a job
   *
   * @template {(...args: any[]) => void} F
   * @param {F} func - An async function to execute
   * @param {Parameters<F>} args - Arguments to pass to the function
   * @returns {void}
   */
  const enqueueJob = (func, args) => {
    arrayPush(next, [func, args]);
  };
  const drainQueue = () => {
    // Attention: load bearing flow order. Calling another enqueued function in the
    // synchronous usecase must happen after the one that enqueued it has finished.
    // Jobs enqueued in one pass do not interleave with jobs resulting from them.
    // It's necessary for efficient memoization and to break cycles.
    for (const [func, args] of current) {
      try {
        func(...args);
      } catch (error) {
        if (noAggregateErrors) {
          throw error;
        } else {
          arrayPush(errors, error);
        }
      }
    }
    current = next;
    next = [];
    if (current.length > 0) drainQueue();
  };
  return { enqueueJob, drainQueue, errors };
};

/**
 * @param {object} options
 * @param {Array<Error>} options.errors
 * @param {string} options.errorPrefix
 */
const throwAggregateError = ({ errors, errorPrefix }) => {
  // Throw an aggregate error if there were any errors.
  if (errors.length > 0) {
    const verbose =
      /** @type {'' | 'verbose'} */
      (getenv('COMPARTMENT_LOAD_ERRORS', '', ['verbose'])) === 'verbose';
    throw TypeError(
      `${errorPrefix} (${errors.length} underlying failures: ${arrayJoin(
        arrayMap(errors, error => error.message + (verbose ? error.stack : '')),
        ', ',
      )}`,
    );
  }
};

const preferSync = (_asyncImpl, syncImpl) => syncImpl;
const preferAsync = (asyncImpl, _syncImpl) => asyncImpl;

/**
 * `load` asynchronously gathers the module records for a module and its
 * transitive dependencies.
 * The module records refer to each other by a reference to the dependency's
 * compartment and the specifier of the module within its own compartment.
 * This graph is then ready to be synchronously linked and executed.
 * @param {WeakMap<Compartment, any>} compartmentPrivateFields
 * @param {WeakMap<object, object>} moduleAliases
 * @param {Compartment} compartment
 * @param {string} moduleSpecifier - The module specifier to load.
 * @param {{ noAggregateErrors?: boolean}} options
 */
       const load = async (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  { noAggregateErrors = false } = {},
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  /** @type {Map<object, Map<string, Promise<Record<any, any>>>>} */
  const moduleLoads = new Map();

  const { enqueueJob, drainQueue, errors } = asyncJobQueue({
    noAggregateErrors,
  });

  enqueueJob(memoizedLoadWithErrorAnnotation, [
    compartmentPrivateFields,
    moduleAliases,
    compartment,
    moduleSpecifier,
    enqueueJob,
    preferAsync,
    moduleLoads,
  ]);

  await drainQueue();

  throwAggregateError({
    errors,
    errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(
      compartmentName,
    )}`,
  });
};

/**
 * `loadNow` synchronously gathers the module records for a specified module
 * and its transitive dependencies.
 * The module records refer to each other by a reference to the dependency's
 * compartment and the specifier of the module within its own compartment.
 * This graph is then ready to be synchronously linked and executed.
 * @param {WeakMap<Compartment, any>} compartmentPrivateFields
 * @param {WeakMap<object, object>} moduleAliases
 * @param {Compartment} compartment
 * @param {string} moduleSpecifier - The module specifier to load.
 * @param {{ noAggregateErrors?: boolean}} options
 */$h͏_once.load(load);

       const loadNow = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  { noAggregateErrors = false } = {},
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  /** @type {Map<object, Map<string, Promise<Record<any, any>>>>} */
  const moduleLoads = new Map();

  const { enqueueJob, drainQueue, errors } = syncJobQueue({
    noAggregateErrors,
  });

  enqueueJob(memoizedLoadWithErrorAnnotation, [
    compartmentPrivateFields,
    moduleAliases,
    compartment,
    moduleSpecifier,
    enqueueJob,
    preferSync,
    moduleLoads,
  ]);

  drainQueue();

  throwAggregateError({
    errors,
    errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(
      compartmentName,
    )}`,
  });
};$h͏_once.loadNow(loadNow);
})()
,
// === 46. ses ./src/module-proxy.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let makeAlias,Proxy,TypeError,create,freeze,mapGet,mapHas,mapSet,ownKeys,reflectGet,reflectGetOwnPropertyDescriptor,reflectHas,reflectIsExtensible,reflectPreventExtensions,toStringTagSymbol,weakmapSet,assert;$h͏_imports([["./module-load.js", [["makeAlias",[$h͏_a => (makeAlias = $h͏_a)]]]],["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["reflectGet",[$h͏_a => (reflectGet = $h͏_a)]],["reflectGetOwnPropertyDescriptor",[$h͏_a => (reflectGetOwnPropertyDescriptor = $h͏_a)]],["reflectHas",[$h͏_a => (reflectHas = $h͏_a)]],["reflectIsExtensible",[$h͏_a => (reflectIsExtensible = $h͏_a)]],["reflectPreventExtensions",[$h͏_a => (reflectPreventExtensions = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);































const { quote: q } = assert;

// `deferExports` creates a module's exports proxy, proxied exports, and
// activator.
// A `Compartment` can create a module for any module specifier, regardless of
// whether it is loadable or executable, and use that object as a token that
// can be fed into another compartment's module map.
// Only after the specified module has been analyzed is it possible for the
// module namespace proxy to behave properly, so it throws exceptions until
// after the compartment has begun executing the module.
// The module instance must freeze the proxied exports and activate the exports
// proxy before executing the module.
//
// The module exports proxy's behavior differs from the ECMAScript 262
// specification for "module namespace exotic objects" only in that according
// to the specification value property descriptors have a non-writable "value"
// and this implementation models all properties with accessors.
//
// https://tc39.es/ecma262/#sec-module-namespace-exotic-objects
//
       const deferExports = () => {
  let active = false;
  const exportsTarget = create(null, {
    // Make this appear like an ESM module namespace object.
    [toStringTagSymbol]: {
      value: 'Module',
      writable: false,
      enumerable: false,
      configurable: false,
    },
  });
  return freeze({
    activate() {
      active = true;
    },
    exportsTarget,
    exportsProxy: new Proxy(exportsTarget, {
      get(_target, name, receiver) {
        if (!active) {
          throw TypeError(
            `Cannot get property ${q(
              name,
            )} of module exports namespace, the module has not yet begun to execute`,
          );
        }
        return reflectGet(exportsTarget, name, receiver);
      },
      set(_target, name, _value) {
        throw TypeError(
          `Cannot set property ${q(name)} of module exports namespace`,
        );
      },
      has(_target, name) {
        if (!active) {
          throw TypeError(
            `Cannot check property ${q(
              name,
            )}, the module has not yet begun to execute`,
          );
        }
        return reflectHas(exportsTarget, name);
      },
      deleteProperty(_target, name) {
        throw TypeError(
          `Cannot delete property ${q(name)}s of module exports namespace`,
        );
      },
      ownKeys(_target) {
        if (!active) {
          throw TypeError(
            'Cannot enumerate keys, the module has not yet begun to execute',
          );
        }
        return ownKeys(exportsTarget);
      },
      getOwnPropertyDescriptor(_target, name) {
        if (!active) {
          throw TypeError(
            `Cannot get own property descriptor ${q(
              name,
            )}, the module has not yet begun to execute`,
          );
        }
        return reflectGetOwnPropertyDescriptor(exportsTarget, name);
      },
      preventExtensions(_target) {
        if (!active) {
          throw TypeError(
            'Cannot prevent extensions of module exports namespace, the module has not yet begun to execute',
          );
        }
        return reflectPreventExtensions(exportsTarget);
      },
      isExtensible() {
        if (!active) {
          throw TypeError(
            'Cannot check extensibility of module exports namespace, the module has not yet begun to execute',
          );
        }
        return reflectIsExtensible(exportsTarget);
      },
      getPrototypeOf(_target) {
        return null;
      },
      setPrototypeOf(_target, _proto) {
        throw TypeError('Cannot set prototype of module exports namespace');
      },
      defineProperty(_target, name, _descriptor) {
        throw TypeError(
          `Cannot define property ${q(name)} of module exports namespace`,
        );
      },
      apply(_target, _thisArg, _args) {
        throw TypeError(
          'Cannot call module exports namespace, it is not a function',
        );
      },
      construct(_target, _args) {
        throw TypeError(
          'Cannot construct module exports namespace, it is not a constructor',
        );
      },
    }),
  });
};

/**
 * @typedef {object} DeferredExports
 * @property {Record<string, any>} exportsTarget - The object to which a
 * module's exports will be added.
 * @property {Record<string, any>} exportsProxy - A proxy over the `exportsTarget`,
 * used to expose its "exports" to other compartments.
 * @property {() => void} activate - Activate the `exportsProxy` such that it can
 * be used as a module namespace object.
 */

/**
 * Memoizes the creation of a deferred module exports namespace proxy for any
 * arbitrary full specifier in a compartment. It also records the compartment
 * and specifier affiliated with that module exports namespace proxy so it
 * can be used as an alias into another compartment when threaded through
 * a compartment's `moduleMap` argument.
 *
 * @param {*} compartment - The compartment to retrieve deferred exports from.
 * @param {*} compartmentPrivateFields - The private fields of the compartment.
 * @param {*} moduleAliases - The module aliases of the compartment.
 * @param {string} specifier - The module specifier to retrieve deferred exports for.
 * @returns {DeferredExports} - The deferred exports for the module specifier of
 * the compartment.
 */$h͏_once.deferExports(deferExports);
       const getDeferredExports = (
  compartment,
  compartmentPrivateFields,
  moduleAliases,
  specifier,
) => {
  const { deferredExports } = compartmentPrivateFields;
  if (!mapHas(deferredExports, specifier)) {
    const deferred = deferExports();
    weakmapSet(
      moduleAliases,
      deferred.exportsProxy,
      makeAlias(compartment, specifier),
    );
    mapSet(deferredExports, specifier, deferred);
  }
  return mapGet(deferredExports, specifier);
};$h͏_once.getDeferredExports(getDeferredExports);
})()
,
// === 47. ses ./src/compartment-evaluate.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,arrayPush,create,getOwnPropertyDescriptors,evadeHtmlCommentTest,evadeImportExpressionTest,rejectSomeDirectEvalExpressions,makeSafeEvaluator;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["./transforms.js", [["evadeHtmlCommentTest",[$h͏_a => (evadeHtmlCommentTest = $h͏_a)]],["evadeImportExpressionTest",[$h͏_a => (evadeImportExpressionTest = $h͏_a)]],["rejectSomeDirectEvalExpressions",[$h͏_a => (rejectSomeDirectEvalExpressions = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]]]);













       const provideCompartmentEvaluator = (compartmentFields, options) => {
  const { sloppyGlobalsMode = false, __moduleShimLexicals__ = undefined } =
    options;

  let safeEvaluate;

  if (__moduleShimLexicals__ === undefined && !sloppyGlobalsMode) {
    ({ safeEvaluate } = compartmentFields);
  } else {
    // The scope proxy or global lexicals are different from the
    // shared evaluator so we need to build a new one

    let { globalTransforms } = compartmentFields;
    const { globalObject } = compartmentFields;

    let moduleLexicals;
    if (__moduleShimLexicals__ !== undefined) {
      // When using `evaluate` for ESM modules, as should only occur from the
      // module-shim's module-instance.js, we do not reveal the SES-shim's
      // module-to-program translation, as this is not standardizable behavior.
      // However, the `localTransforms` will come from the `__shimTransforms__`
      // Compartment option in this case, which is a non-standardizable escape
      // hatch so programs designed specifically for the SES-shim
      // implementation may opt-in to use the same transforms for `evaluate`
      // and `import`, at the expense of being tightly coupled to SES-shim.
      globalTransforms = undefined;

      moduleLexicals = create(
        null,
        getOwnPropertyDescriptors(__moduleShimLexicals__),
      );
    }

    ({ safeEvaluate } = makeSafeEvaluator({
      globalObject,
      moduleLexicals,
      globalTransforms,
      sloppyGlobalsMode,
    }));
  }

  return { safeEvaluate };
};$h͏_once.provideCompartmentEvaluator(provideCompartmentEvaluator);

       const compartmentEvaluate = (compartmentFields, source, options) => {
  // Perform this check first to avoid unnecessary sanitizing.
  // TODO Maybe relax string check and coerce instead:
  // https://github.com/tc39/proposal-dynamic-code-brand-checks
  if (typeof source !== 'string') {
    throw TypeError('first argument of evaluate() must be a string');
  }

  // Extract options, and shallow-clone transforms.
  const {
    transforms = [],
    __evadeHtmlCommentTest__ = false,
    __evadeImportExpressionTest__ = false,
    __rejectSomeDirectEvalExpressions__ = true  // Note default on
  } = options;
  const localTransforms = [...transforms];
  if (__evadeHtmlCommentTest__ === true) {
    arrayPush(localTransforms, evadeHtmlCommentTest);
  }
  if (__evadeImportExpressionTest__ === true) {
    arrayPush(localTransforms, evadeImportExpressionTest);
  }
  if (__rejectSomeDirectEvalExpressions__ === true) {
    arrayPush(localTransforms, rejectSomeDirectEvalExpressions);
  }

  const { safeEvaluate } = provideCompartmentEvaluator(
    compartmentFields,
    options,
  );

  return safeEvaluate(source, {
    localTransforms,
  });
};$h͏_once.compartmentEvaluate(compartmentEvaluate);
})()
,
// === 48. ses ./src/module-instance.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let assert,getDeferredExports,ReferenceError,SyntaxError,TypeError,arrayForEach,arrayIncludes,arrayPush,arraySome,arraySort,create,defineProperty,entries,freeze,isArray,keys,mapGet,weakmapGet,reflectHas,assign,compartmentEvaluate;$h͏_imports([["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]],["./module-proxy.js", [["getDeferredExports",[$h͏_a => (getDeferredExports = $h͏_a)]]]],["./commons.js", [["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arraySome",[$h͏_a => (arraySome = $h͏_a)]],["arraySort",[$h͏_a => (arraySort = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["keys",[$h͏_a => (keys = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["reflectHas",[$h͏_a => (reflectHas = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]]]],["./compartment-evaluate.js", [["compartmentEvaluate",[$h͏_a => (compartmentEvaluate = $h͏_a)]]]]]);

























const { quote: q } = assert;

       const makeVirtualModuleInstance = (
  compartmentPrivateFields,
  moduleSource,
  compartment,
  moduleAliases,
  moduleSpecifier,
  resolvedImports,
) => {
  const { exportsProxy, exportsTarget, activate } = getDeferredExports(
    compartment,
    weakmapGet(compartmentPrivateFields, compartment),
    moduleAliases,
    moduleSpecifier,
  );

  const notifiers = create(null);

  if (moduleSource.exports) {
    if (
      !isArray(moduleSource.exports) ||
      arraySome(moduleSource.exports, name => typeof name !== 'string')
    ) {
      throw TypeError(
        `SES virtual module source "exports" property must be an array of strings for module ${moduleSpecifier}`,
      );
    }
    arrayForEach(moduleSource.exports, name => {
      let value = exportsTarget[name];
      const updaters = [];

      const get = () => value;

      const set = newValue => {
        value = newValue;
        for (const updater of updaters) {
          updater(newValue);
        }
      };

      defineProperty(exportsTarget, name, {
        get,
        set,
        enumerable: true,
        configurable: false,
      });

      notifiers[name] = update => {
        arrayPush(updaters, update);
        update(value);
      };
    });
    // This is enough to support import * from cjs - the '*' field doesn't need to be in exports nor exportsTarget because import will only ever access it via notifiers
    notifiers['*'] = update => {
      update(exportsTarget);
    };
  }

  const localState = {
    activated: false,
  };
  return freeze({
    notifiers,
    exportsProxy,
    execute() {
      if (reflectHas(localState, 'errorFromExecute')) {
        throw localState.errorFromExecute;
      }
      if (!localState.activated) {
        activate();
        localState.activated = true;
        try {
          // eslint-disable-next-line @endo/no-polymorphic-call
          moduleSource.execute(exportsTarget, compartment, resolvedImports);
        } catch (err) {
          localState.errorFromExecute = err;
          throw err;
        }
      }
    },
  });
};

// `makeModuleInstance` takes a module's compartment record, the live import
// namespace, and a global object; and produces a module instance.
// The module instance carries the proxied module exports namespace (the
// "exports"), notifiers to update the module's internal import namespace, and
// an idempotent execute function.
// The module exports namespace is a proxy to the proxied exports namespace
// that the execution of the module instance populates.
$h͏_once.makeVirtualModuleInstance(makeVirtualModuleInstance);const makeModuleInstance=(
  privateFields,
  moduleAliases,
  moduleRecord,
  importedInstances,
) => {
  const {
    compartment,
    moduleSpecifier,
    moduleSource,
    importMeta: moduleRecordMeta,
  } = moduleRecord;
  const {
    reexports: exportAlls = [],
    __syncModuleProgram__: functorSource,
    __fixedExportMap__: fixedExportMap = {},
    __liveExportMap__: liveExportMap = {},
    __reexportMap__: reexportMap = {},
    __needsImport__: needsImport = false,
    __needsImportMeta__: needsImportMeta = false,
    __syncModuleFunctor__,
  } = moduleSource;

  const compartmentFields = weakmapGet(privateFields, compartment);

  const { __shimTransforms__, resolveHook, importMetaHook, compartmentImport } =
    compartmentFields;

  const { exportsProxy, exportsTarget, activate } = getDeferredExports(
    compartment,
    compartmentFields,
    moduleAliases,
    moduleSpecifier,
  );

  // {_exportName_: getter} module exports namespace
  // object (eventually proxied).
  const exportsProps = create(null);

  // {_localName_: accessor} proxy traps for moduleLexicals and live bindings.
  // The moduleLexicals object is frozen and the corresponding properties of
  // moduleLexicals must be immutable, so we copy the descriptors.
  const moduleLexicals = create(null);

  // {_localName_: init(initValue) -> initValue} used by the
  // rewritten code to initialize exported fixed bindings.
  const onceVar = create(null);

  // {_localName_: update(newValue)} used by the rewritten code to
  // both initialize and update live bindings.
  const liveVar = create(null);

  const importMeta = create(null);
  if (moduleRecordMeta) {
    assign(importMeta, moduleRecordMeta);
  }
  if (needsImportMeta && importMetaHook) {
    importMetaHook(moduleSpecifier, importMeta);
  }

  /** @type {(fullSpecifier: string) => Promise<ModuleExportsNamespace>} */
  let dynamicImport;
  if (needsImport) {
    /** @param {string} importSpecifier */
    dynamicImport = async importSpecifier =>
      compartmentImport(resolveHook(importSpecifier, moduleSpecifier));
  }

  // {_localName_: [{get, set, notify}]} used to merge all the export updaters.
  const localGetNotify = create(null);

  // {[importName: string]: notify(update(newValue))} Used by code that imports
  // one of this module's exports, so that their update function will
  // be notified when this binding is initialized or updated.
  const notifiers = create(null);

  arrayForEach(entries(fixedExportMap), ([fixedExportName, [localName]]) => {
    let fixedGetNotify = localGetNotify[localName];
    if (!fixedGetNotify) {
      // fixed binding state
      let value;
      let tdz = true;
      /** @type {null | Array<(value: any) => void>} */
      let optUpdaters = [];

      // tdz sensitive getter
      const get = () => {
        if (tdz) {
          throw ReferenceError(`binding ${q(localName)} not yet initialized`);
        }
        return value;
      };

      // leave tdz once
      const init = freeze(initValue => {
        // init with initValue of a declared const binding, and return
        // it.
        if (!tdz) {
          throw TypeError(
            `Internal: binding ${q(localName)} already initialized`,
          );
        }
        value = initValue;
        const updaters = optUpdaters;
        optUpdaters = null;
        tdz = false;
        for (const updater of updaters || []) {
          updater(initValue);
        }
        return initValue;
      });

      // If still tdz, register update for notification later.
      // Otherwise, update now.
      const notify = updater => {
        if (updater === init) {
          // Prevent recursion.
          return;
        }
        if (tdz) {
          arrayPush(optUpdaters || [], updater);
        } else {
          updater(value);
        }
      };

      // Need these for additional exports of the local variable.
      fixedGetNotify = {
        get,
        notify,
      };
      localGetNotify[localName] = fixedGetNotify;
      onceVar[localName] = init;
    }

    exportsProps[fixedExportName] = {
      get: fixedGetNotify.get,
      set: undefined,
      enumerable: true,
      configurable: false,
    };

    notifiers[fixedExportName] = fixedGetNotify.notify;
  });

  arrayForEach(
    entries(liveExportMap),
    ([liveExportName, [localName, setProxyTrap]]) => {
      let liveGetNotify = localGetNotify[localName];
      if (!liveGetNotify) {
        // live binding state
        let value;
        let tdz = true;
        const updaters = [];

        // tdz sensitive getter
        const get = () => {
          if (tdz) {
            throw ReferenceError(
              `binding ${q(liveExportName)} not yet initialized`,
            );
          }
          return value;
        };

        // This must be usable locally for the translation of initializing
        // a declared local live binding variable.
        //
        // For reexported variable, this is also an update function to
        // register for notification with the downstream import, which we
        // must assume to be live. Thus, it can be called independent of
        // tdz but always leaves tdz. Such reexporting creates a tree of
        // bindings. This lets the tree be hooked up even if the imported
        // module instance isn't initialized yet, as may happen in cycles.
        const update = freeze(newValue => {
          value = newValue;
          tdz = false;
          for (const updater of updaters) {
            updater(newValue);
          }
        });

        // tdz sensitive setter
        const set = newValue => {
          if (tdz) {
            throw ReferenceError(`binding ${q(localName)} not yet initialized`);
          }
          value = newValue;
          for (const updater of updaters) {
            updater(newValue);
          }
        };

        // Always register the updater function.
        // If not in tdz, also update now.
        const notify = updater => {
          if (updater === update) {
            // Prevent recursion.
            return;
          }
          arrayPush(updaters, updater);
          if (!tdz) {
            updater(value);
          }
        };

        liveGetNotify = {
          get,
          notify,
        };

        localGetNotify[localName] = liveGetNotify;
        if (setProxyTrap) {
          defineProperty(moduleLexicals, localName, {
            get,
            set,
            enumerable: true,
            configurable: false,
          });
        }
        liveVar[localName] = update;
      }

      exportsProps[liveExportName] = {
        get: liveGetNotify.get,
        set: undefined,
        enumerable: true,
        configurable: false,
      };

      notifiers[liveExportName] = liveGetNotify.notify;
    },
  );

  const notifyStar = update => {
    update(exportsTarget);
  };
  notifiers['*'] = notifyStar;

  const wireUpExportNotifier = (exportName, notify) => {
    if (!notifiers[exportName] && notify !== false) {
      notifiers[exportName] = notify;

      // exported live binding state
      let value;
      const update = newValue => (value = newValue);
      notify(update);
      exportsProps[exportName] = {
        get() {
          return value;
        },
        set: undefined,
        enumerable: true,
        configurable: false,
      };
    }
  };

  // Per the calling convention for the moduleFunctor generated from
  // an ESM, the `imports` function gets called once up front
  // to populate or arrange the population of imports and reexports.
  // The generated code produces an `updateRecord`: the means for
  // the linker to update the imports and exports of the module.
  // The updateRecord must conform to moduleAnalysis.imports
  // updateRecord = Map<specifier, importUpdaters>
  // importUpdaters = Map<importName, [update(newValue)*]>
  function imports(updateRecord) {
    // By the time imports is called, the importedInstances should already be
    // initialized with module instances that satisfy
    // imports.
    // importedInstances = Map[_specifier_, { notifiers, module, execute }]
    // notifiers = { [importName: string]: notify(update(newValue))}

    // export * cannot export default.
    const candidateAll = create(null);
    candidateAll.default = false;
    for (const [specifier, importUpdaters] of updateRecord) {
      const instance = mapGet(importedInstances, specifier);
      // The module instance object is an internal literal, does not bind this,
      // and never revealed outside the SES shim.
      // There are two instantiation sites for instances and they are both in
      // this module.
      // eslint-disable-next-line @endo/no-polymorphic-call
      instance.execute(); // bottom up cycle tolerant
      const { notifiers: importNotifiers } = instance;
      for (const [importName, updaters] of importUpdaters) {
        const importNotify = importNotifiers[importName];
        if (!importNotify) {
          throw SyntaxError(
            `The requested module '${specifier}' does not provide an export named '${importName}'`,
          );
        }
        for (const updater of updaters) {
          importNotify(updater);
        }
      }
      if (arrayIncludes(exportAlls, specifier)) {
        // Make all these imports candidates.
        // Note names don't change in reexporting all
        for (const [importAndExportName, importNotify] of entries(
          importNotifiers,
        )) {
          if (candidateAll[importAndExportName] === undefined) {
            candidateAll[importAndExportName] = importNotify;
          } else {
            // Already a candidate: remove ambiguity.
            candidateAll[importAndExportName] = false;
          }
        }
      }
      if (reexportMap[specifier]) {
        // Set up reexport notifiers instantly so they are available in cycles.
        for (const [localName, exportedName] of reexportMap[specifier]) {
          wireUpExportNotifier(exportedName, importNotifiers[localName]);
        }
      }
    }

    for (const [exportName, notify] of entries(candidateAll)) {
      wireUpExportNotifier(exportName, notify);
    }

    // Sort the module exports namespace as per spec.
    // The module exports namespace will be wrapped in a module namespace
    // exports proxy which will serve as a "module exports namespace exotic
    // object".
    // Sorting properties is not generally reliable because some properties may
    // be symbols, and symbols do not have an inherent relative order, but
    // since all properties of the exports namespace must be keyed by a string
    // and the string must correspond to a valid identifier, sorting these
    // properties works for this specific case.
    arrayForEach(arraySort(keys(exportsProps)), k =>
      defineProperty(exportsTarget, k, exportsProps[k]),
    );

    freeze(exportsTarget);
    activate();
  }

  let optFunctor;
  if (__syncModuleFunctor__ !== undefined) {
    optFunctor = __syncModuleFunctor__;
  } else {
    optFunctor = compartmentEvaluate(compartmentFields, functorSource, {
      globalObject: compartment.globalThis,
      transforms: __shimTransforms__,
      __moduleShimLexicals__: moduleLexicals,
    });
  }
  let didThrow = false;
  let thrownError;
  function execute() {
    if (optFunctor) {
      // uninitialized
      const functor = optFunctor;
      optFunctor = null;
      // initializing - call with `this` of `undefined`.
      try {
        functor(
          freeze({
            imports: freeze(imports),
            onceVar: freeze(onceVar),
            liveVar: freeze(liveVar),
            import: dynamicImport,
            importMeta,
          }),
        );
      } catch (e) {
        didThrow = true;
        thrownError = e;
      }
      // initialized
    }
    if (didThrow) {
      throw thrownError;
    }
  }

  return freeze({
    notifiers,
    exportsProxy,
    execute,
  });
};$h͏_once.makeModuleInstance(makeModuleInstance);
})()
,
// === 49. ses ./src/module-link.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let assert,makeModuleInstance,makeVirtualModuleInstance,Map,ReferenceError,TypeError,entries,isArray,isPrimitive,mapGet,mapHas,mapSet,weakmapGet;$h͏_imports([["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]],["./module-instance.js", [["makeModuleInstance",[$h͏_a => (makeModuleInstance = $h͏_a)]],["makeVirtualModuleInstance",[$h͏_a => (makeVirtualModuleInstance = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]]]]]);



















const { Fail, quote: q } = assert;

// `link` creates `ModuleInstances` and `ModuleNamespaces` for a module and its
// transitive dependencies and connects their imports and exports.
// After linking, the resulting working set is ready to be executed.
// The linker only concerns itself with module namespaces that are objects with
// property descriptors for their exports, which the Compartment proxies with
// the actual `ModuleNamespace`.
       const link = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
) => {
  const { name: compartmentName, moduleRecords } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  const moduleRecord = mapGet(moduleRecords, moduleSpecifier);
  if (moduleRecord === undefined) {
    throw ReferenceError(
      `Missing link to module ${q(moduleSpecifier)} from compartment ${q(
        compartmentName,
      )}`,
    );
  }

  // Mutual recursion so there's no confusion about which
  // compartment is in context: the module record may be in another
  // compartment, denoted by moduleRecord.compartment.
  // eslint-disable-next-line no-use-before-define
  return instantiate(compartmentPrivateFields, moduleAliases, moduleRecord);
};$h͏_once.link(link);

function mayBePrecompiledModuleSource(moduleSource) {
  return typeof moduleSource.__syncModuleProgram__ === 'string';
}

function validatePrecompiledModuleSource(moduleSource, moduleSpecifier) {
  const { __fixedExportMap__, __liveExportMap__ } = moduleSource;
  !isPrimitive(__fixedExportMap__) ||
    Fail`Property '__fixedExportMap__' of a precompiled module source must be an object, got ${q(
      __fixedExportMap__,
    )}, for module ${q(moduleSpecifier)}`;
  !isPrimitive(__liveExportMap__) ||
    Fail`Property '__liveExportMap__' of a precompiled module source must be an object, got ${q(
      __liveExportMap__,
    )}, for module ${q(moduleSpecifier)}`;
}

function mayBeVirtualModuleSource(moduleSource) {
  return typeof moduleSource.execute === 'function';
}

function validateVirtualModuleSource(moduleSource, moduleSpecifier) {
  const { exports } = moduleSource;
  isArray(exports) ||
    Fail`Invalid module source: 'exports' of a virtual module source must be an array, got ${q(
      exports,
    )}, for module ${q(moduleSpecifier)}`;
}

function validateModuleSource(moduleSource, moduleSpecifier) {
  !isPrimitive(moduleSource) ||
    Fail`Invalid module source: must be of type object, got ${q(
      moduleSource,
    )}, for module ${q(moduleSpecifier)}`;
  const { imports, exports, reexports = [] } = moduleSource;
  isArray(imports) ||
    Fail`Invalid module source: 'imports' must be an array, got ${q(
      imports,
    )}, for module ${q(moduleSpecifier)}`;
  isArray(exports) ||
    Fail`Invalid module source: 'exports' must be an array, got ${q(
      exports,
    )}, for module ${q(moduleSpecifier)}`;
  isArray(reexports) ||
    Fail`Invalid module source: 'reexports' must be an array if present, got ${q(
      reexports,
    )}, for module ${q(moduleSpecifier)}`;
}

       const instantiate = (
  compartmentPrivateFields,
  moduleAliases,
  moduleRecord,
) => {
  const { compartment, moduleSpecifier, resolvedImports, moduleSource } =
    moduleRecord;
  const { instances } = weakmapGet(compartmentPrivateFields, compartment);

  // Memoize.
  if (mapHas(instances, moduleSpecifier)) {
    return mapGet(instances, moduleSpecifier);
  }

  validateModuleSource(moduleSource, moduleSpecifier);

  const importedInstances = new Map();
  let moduleInstance;
  if (mayBePrecompiledModuleSource(moduleSource)) {
    validatePrecompiledModuleSource(moduleSource, moduleSpecifier);
    moduleInstance = makeModuleInstance(
      compartmentPrivateFields,
      moduleAliases,
      moduleRecord,
      importedInstances,
    );
  } else if (mayBeVirtualModuleSource(moduleSource)) {
    validateVirtualModuleSource(moduleSource, moduleSpecifier);
    moduleInstance = makeVirtualModuleInstance(
      compartmentPrivateFields,
      moduleSource,
      compartment,
      moduleAliases,
      moduleSpecifier,
      resolvedImports,
    );
  } else {
    throw TypeError(`Invalid module source, got ${q(moduleSource)}`);
  }

  // Memoize.
  mapSet(instances, moduleSpecifier, moduleInstance);

  // Link dependency modules.
  for (const [importSpecifier, resolvedSpecifier] of entries(resolvedImports)) {
    const importedInstance = link(
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      resolvedSpecifier,
    );
    mapSet(importedInstances, importSpecifier, importedInstance);
  }

  return moduleInstance;
};$h͏_once.instantiate(instantiate);
})()
,
// === 50. ses ./src/compartment.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Map,TypeError,WeakMap,arrayFlatMap,assign,defineProperties,identity,promiseThen,toStringTagSymbol,weakmapGet,weakmapSet,setGlobalObjectSymbolUnscopables,setGlobalObjectConstantProperties,setGlobalObjectMutableProperties,setGlobalObjectEvaluators,assert,assertEqual,q,sharedGlobalPropertyNames,load,loadNow,link,getDeferredExports,compartmentEvaluate,makeSafeEvaluator;$h͏_imports([["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["identity",[$h͏_a => (identity = $h͏_a)]],["promiseThen",[$h͏_a => (promiseThen = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]]]],["./global-object.js", [["setGlobalObjectSymbolUnscopables",[$h͏_a => (setGlobalObjectSymbolUnscopables = $h͏_a)]],["setGlobalObjectConstantProperties",[$h͏_a => (setGlobalObjectConstantProperties = $h͏_a)]],["setGlobalObjectMutableProperties",[$h͏_a => (setGlobalObjectMutableProperties = $h͏_a)]],["setGlobalObjectEvaluators",[$h͏_a => (setGlobalObjectEvaluators = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]],["assertEqual",[$h͏_a => (assertEqual = $h͏_a)]],["q",[$h͏_a => (q = $h͏_a)]]]],["./permits.js", [["sharedGlobalPropertyNames",[$h͏_a => (sharedGlobalPropertyNames = $h͏_a)]]]],["./module-load.js", [["load",[$h͏_a => (load = $h͏_a)]],["loadNow",[$h͏_a => (loadNow = $h͏_a)]]]],["./module-link.js", [["link",[$h͏_a => (link = $h͏_a)]]]],["./module-proxy.js", [["getDeferredExports",[$h͏_a => (getDeferredExports = $h͏_a)]]]],["./compartment-evaluate.js", [["compartmentEvaluate",[$h͏_a => (compartmentEvaluate = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]]]);




































































/**
 * @import {ImportHook, ImportMetaHook, ImportNowHook, ModuleDescriptor, ModuleExportsNamespace, ModuleMap, ModuleMapHook, ResolveHook, ModuleSource, CompartmentOptions} from '../types.js'
 * @import {Transform} from './lockdown.js'
 * @import {DeferredExports} from './module-proxy.js'
 */

/**
 * Associates every public module exports namespace with its corresponding
 * compartment and specifier so they can be used to link modules across
 * compartments. The mechanism to thread an alias is to use the
 * {@link Compartment.module} function to obtain the exports namespace of a foreign
 * module and pass it into another compartment's `moduleMap` constructor option
 * @type {WeakMap<ModuleExportsNamespace, Compartment>}
 *
 */
const moduleAliases = new WeakMap();

/**
 * Private fields for `Compartment` instances
 * @typedef {object} CompartmentFields
 * @property {string} name
 * @property {object} globalObject
 * @property {Array<Transform>} globalTransforms
 * @property {(source: string, options?: {localTransforms?: Array<Transform>}) => void} safeEvaluate
 * @property {ResolveHook} resolveHook
 * @property {ImportHook} importHook
 * @property {ImportNowHook} importNowHook
 * @property {ModuleMap} moduleMap
 * @property {ModuleMapHook} moduleMapHook
 * @property {ImportMetaHook} importMetaHook
 * @property {Map<string, ModuleSource>} moduleRecords
 * @property {Array<Transform>} __shimTransforms__
 * @property {DeferredExports} deferredExports
 * @property {Map<string, ModuleDescriptor>} instances
 * @property {Compartment} [parentCompartment]
 * @property {boolean} noNamespaceBox
 * @property {(fullSpecifier: string) => Promise<ModuleExportsNamespace>} compartmentImport
 * @property {boolean} [noAggregateLoadErrors]
 */

/**
 * Captures the private state for each {@link Compartment}
 * @type {WeakMap<Compartment, CompartmentFields>}
 */
const privateFields = new WeakMap();

       const InertCompartment = function Compartment(
  _endowments = {},
  _modules = {},
  _options = {},
) {
  throw TypeError(
    'Compartment.prototype.constructor is not a valid constructor.',
  );
};

/**
 * @param {Compartment} compartment
 * @param {string} specifier
 * @returns {{namespace: ModuleExportsNamespace}}
 */$h͏_once.InertCompartment(InertCompartment);
const compartmentImportNow = (compartment, specifier) => {
  const { execute, exportsProxy } = link(
    privateFields,
    moduleAliases,
    compartment,
    specifier,
  );
  execute();
  return exportsProxy;
};

/** @type {Compartment & {constructor: typeof InertCompartment}} */
       const CompartmentPrototype = {
  constructor: InertCompartment,

  get globalThis() {
    return /** @type {CompartmentFields} */ (weakmapGet(privateFields, this))
      .globalObject;
  },

  get name() {
    return /** @type {CompartmentFields} */ (weakmapGet(privateFields, this))
      .name;
  },

  evaluate(source, options = {}) {
    const compartmentFields = weakmapGet(privateFields, this);
    return compartmentEvaluate(compartmentFields, source, options);
  },

  module(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of module() must be a string');
    }

    const { exportsProxy } = getDeferredExports(
      this,
      weakmapGet(privateFields, this),
      moduleAliases,
      specifier,
    );

    return exportsProxy;
  },

  async import(specifier) {
    const { noNamespaceBox, noAggregateLoadErrors } =
      /** @type {CompartmentFields} */ (weakmapGet(privateFields, this));

    if (typeof specifier !== 'string') {
      throw TypeError('first argument of import() must be a string');
    }

    return promiseThen(
      load(privateFields, moduleAliases, this, specifier, {
        noAggregateErrors: noAggregateLoadErrors,
      }),
      () => {
        // The namespace box is a contentious design and likely to be a breaking
        // change in an appropriately numbered future version.
        const namespace = compartmentImportNow(
          /** @type {Compartment} */ (this),
          specifier,
        );
        if (noNamespaceBox) {
          return namespace;
        }
        // Legacy behavior: box the namespace object so that thenable modules
        // do not get coerced into a promise accidentally.
        return { namespace };
      },
    );
  },

  async load(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of load() must be a string');
    }

    const { noAggregateLoadErrors } = /** @type {CompartmentFields} */ (
      weakmapGet(privateFields, this)
    );

    return load(privateFields, moduleAliases, this, specifier, {
      noAggregateErrors: noAggregateLoadErrors,
    });
  },

  importNow(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of importNow() must be a string');
    }
    const { noAggregateLoadErrors } = /** @type {CompartmentFields} */ (
      weakmapGet(privateFields, this)
    );

    loadNow(privateFields, moduleAliases, this, specifier, {
      noAggregateErrors: noAggregateLoadErrors,
    });
    return compartmentImportNow(/** @type {Compartment} */ (this), specifier);
  },
};

// This causes `String(new Compartment())` to evaluate to `[object Compartment]`.
// The descriptor follows the conventions of other globals with @@toStringTag
// properties, e.g. Math.
$h͏_once.CompartmentPrototype(CompartmentPrototype);defineProperties(CompartmentPrototype,{
  [toStringTagSymbol]: {
    value: 'Compartment',
    writable: false,
    enumerable: false,
    configurable: true,
  },
});

defineProperties(InertCompartment, {
  prototype: { value: CompartmentPrototype },
});

/**
 * @callback MakeCompartmentConstructor
 * @param {MakeCompartmentConstructor} targetMakeCompartmentConstructor
 * @param {Record<string, any>} intrinsics
 * @param {(object: object) => void} markVirtualizedNativeFunction
 * @param {object} [options]
 * @param {Compartment} [options.parentCompartment]
 * @param {boolean} [options.enforceNew]
 * @returns {Compartment['constructor']}
 */

/**
 * "Options bag"-style `Compartment` constructor arguments.
 * @typedef {[options?: CompartmentOptions & { __options__: true }]} CompartmentOptionsArgs
 */

/**
 * Legacy `Compartment` constructor arguments.
 *
 * @deprecated
 * @typedef {[globals?: Map<string, any>, modules?: Map<string, ModuleDescriptor>, options?: CompartmentOptions]} LegacyCompartmentOptionsArgs
 */

/**
 * In order to facilitate migration from the deprecated signature of the
 * compartment constructor,
 *
 * `new Compartent(globals?, modules?, options?)`
 *
 * to the new signature:
 *
 * `new Compartment(options?)`
 *
 * ...where globals and modules are expressed in the options bag instead of
 * positional arguments, this function detects the temporary sigil __options__
 * on the first argument and coerces compartments arguments into a single
 * compartments object.
 * @param {CompartmentOptionsArgs|LegacyCompartmentOptionsArgs} args
 * @returns {CompartmentOptions}
 */
       const compartmentOptions = (...args) => {
  if (args.length === 0) {
    return {};
  }
  if (
    args.length === 1 &&
    typeof args[0] === 'object' &&
    args[0] !== null &&
    '__options__' in args[0]
  ) {
    const { __options__, ...options } = args[0];
    assert(
      __options__ === true,
      `Compartment constructor only supports true __options__ sigil, got ${__options__}`,
    );
    return options;
  } else {
    const [
      globals = /** @type {Map<string, any>} */ ({}),
      modules = /** @type {Map<string, ModuleDescriptor>} */ ({}),
      options = {},
    ] = /** @type {LegacyCompartmentOptionsArgs} */ (args);
    assertEqual(
      options.modules,
      undefined,
      `Compartment constructor must receive either a module map argument or modules option, not both`,
    );
    assertEqual(
      options.globals,
      undefined,
      `Compartment constructor must receive either globals argument or option, not both`,
    );
    return {
      ...options,
      globals,
      modules,
    };
  }
};

/** @type {MakeCompartmentConstructor} */$h͏_once.compartmentOptions(compartmentOptions);
       const makeCompartmentConstructor = (
  targetMakeCompartmentConstructor,
  intrinsics,
  markVirtualizedNativeFunction,
  { parentCompartment = undefined, enforceNew = false } = {},
) => {
  /**
   *
   * @param {CompartmentOptionsArgs|LegacyCompartmentOptionsArgs} args
   */
  function Compartment(...args) {
    if (enforceNew && new.target === undefined) {
      throw TypeError(
        "Class constructor Compartment cannot be invoked without 'new'",
      );
    }

    // Extract options, and shallow-clone transforms.
    const {
      name = '<unknown>',
      transforms = [],
      __shimTransforms__ = [],
      globals: endowmentsOption = {},
      modules: moduleMapOption = {},
      resolveHook,
      importHook,
      importNowHook,
      moduleMapHook,
      importMetaHook,
      __noNamespaceBox__: noNamespaceBox = false,
      noAggregateLoadErrors = false,
    } = compartmentOptions(...args);
    const globalTransforms = arrayFlatMap(
      [transforms, __shimTransforms__],
      identity,
    );
    const endowments = { __proto__: null, ...endowmentsOption };
    const moduleMap = { __proto__: null, ...moduleMapOption };

    // Map<FullSpecifier, ModuleCompartmentRecord>
    const moduleRecords = new Map();
    // Map<FullSpecifier, ModuleInstance>
    const instances = new Map();
    // Map<FullSpecifier, {ExportsProxy, ProxiedExports, activate()}>
    const deferredExports = new Map();

    const globalObject = {};

    const compartment = this;

    setGlobalObjectSymbolUnscopables(globalObject);

    // We must initialize all constant properties first because
    // `makeSafeEvaluator` may use them to create optimized bindings
    // in the evaluator.
    // TODO: consider merging into a single initialization if internal
    // evaluator is no longer eagerly created
    setGlobalObjectConstantProperties(globalObject);

    const { safeEvaluate } = makeSafeEvaluator({
      globalObject,
      globalTransforms,
      sloppyGlobalsMode: false,
    });

    setGlobalObjectMutableProperties(globalObject, {
      intrinsics,
      newGlobalPropertyNames: sharedGlobalPropertyNames,
      makeCompartmentConstructor: targetMakeCompartmentConstructor,
      parentCompartment: this,
      markVirtualizedNativeFunction,
    });

    // TODO: maybe add evalTaming to the Compartment constructor 3rd options?
    setGlobalObjectEvaluators(
      globalObject,
      safeEvaluate,
      markVirtualizedNativeFunction,
    );

    assign(globalObject, endowments);

    /**
     * In support dynamic import in a module source loaded by this compartment,
     * like `await import(importSpecifier)`, induces this compartment to import
     * a module, returning a promise for the resulting module exports
     * namespace.
     * Unlike `compartment.import`, never creates a box object for the
     * namespace as that behavior is deprecated and inconsistent with the
     * standard behavior of dynamic import.
     * Obliges the caller to resolve import specifiers to their corresponding
     * full specifier.
     * That is, every module must have its own dynamic import function that
     * closes over the surrounding module's full module specifier and calls
     * through to this function.
     * @param {string} fullSpecifier - A full specifier is a key in the
     * compartment's module memo.
     * The method `compartment.import` accepts a full specifier, but dynamic
     * import accepts an import specifier and resolves it to a full specifier
     * relative to the calling module's full specifier.
     * @returns {Promise<ModuleExportsNamespace>}
     */
    const compartmentImport = async fullSpecifier => {
      if (typeof resolveHook !== 'function') {
        throw TypeError(
          `Compartment does not support dynamic import: no configured resolveHook for compartment ${q(name)}`,
        );
      }
      await load(privateFields, moduleAliases, compartment, fullSpecifier, {
        noAggregateErrors: noAggregateLoadErrors,
      });
      const { execute, exportsProxy } = link(
        privateFields,
        moduleAliases,
        compartment,
        fullSpecifier,
      );
      execute();
      return exportsProxy;
    };

    weakmapSet(privateFields, this, {
      name: `${name}`,
      globalTransforms,
      globalObject,
      safeEvaluate,
      resolveHook,
      importHook,
      importNowHook,
      moduleMap,
      moduleMapHook,
      importMetaHook,
      moduleRecords,
      __shimTransforms__,
      deferredExports,
      instances,
      parentCompartment,
      noNamespaceBox,
      compartmentImport,
      noAggregateLoadErrors,
    });
  }

  Compartment.prototype = CompartmentPrototype;

  return Compartment;
};$h͏_once.makeCompartmentConstructor(makeCompartmentConstructor);
})()
,
// === 51. ses ./src/get-anonymous-intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,Float32Array,Map,Set,String,getOwnPropertyDescriptor,getPrototypeOf,iterateArray,iterateMap,iterateSet,iterateString,matchAllRegExp,matchAllSymbol,regexpPrototype,globalThis,assign,AsyncGeneratorFunctionInstance,ArrayBuffer,InertCompartment;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["Float32Array",[$h͏_a => (Float32Array = $h͏_a)]],["Map",[$h͏_a => (Map = $h͏_a)]],["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["iterateArray",[$h͏_a => (iterateArray = $h͏_a)]],["iterateMap",[$h͏_a => (iterateMap = $h͏_a)]],["iterateSet",[$h͏_a => (iterateSet = $h͏_a)]],["iterateString",[$h͏_a => (iterateString = $h͏_a)]],["matchAllRegExp",[$h͏_a => (matchAllRegExp = $h͏_a)]],["matchAllSymbol",[$h͏_a => (matchAllSymbol = $h͏_a)]],["regexpPrototype",[$h͏_a => (regexpPrototype = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["AsyncGeneratorFunctionInstance",[$h͏_a => (AsyncGeneratorFunctionInstance = $h͏_a)]],["ArrayBuffer",[$h͏_a => (ArrayBuffer = $h͏_a)]]]],["./compartment.js", [["InertCompartment",[$h͏_a => (InertCompartment = $h͏_a)]]]]]);





















/**
 * Object.getConstructorOf()
 * Helper function to improve readability, similar to Object.getPrototypeOf().
 *
 * @param {object} obj
 */
function getConstructorOf(obj) {
  return getPrototypeOf(obj).constructor;
}

// getAnonymousIntrinsics uses a utility function to construct an arguments
// object, since it cannot have one of its own and also be a const export.
function makeArguments() {
  // eslint-disable-next-line prefer-rest-params
  return arguments;
}

/**
 * getAnonymousIntrinsics()
 * Get the intrinsics not otherwise reachable by named own property
 * traversal from the global object.
 *
 * @returns {object}
 */
       const getAnonymousIntrinsics = () => {
  const InertFunction = FERAL_FUNCTION.prototype.constructor;

  // 9.2.4.1 %ThrowTypeError%

  const argsCalleeDesc = getOwnPropertyDescriptor(makeArguments(), 'callee');
  const ThrowTypeError = argsCalleeDesc && argsCalleeDesc.get;

  // 21.1.5.2 The %StringIteratorPrototype% Object

  // eslint-disable-next-line no-new-wrappers
  const StringIteratorObject = iterateString(new String());
  const StringIteratorPrototype = getPrototypeOf(StringIteratorObject);

  // 21.2.7.1 The %RegExpStringIteratorPrototype% Object
  const RegExpStringIterator =
    regexpPrototype[matchAllSymbol] && matchAllRegExp(/./);
  const RegExpStringIteratorPrototype =
    RegExpStringIterator && getPrototypeOf(RegExpStringIterator);

  // 22.1.5.2 The %ArrayIteratorPrototype% Object

  // eslint-disable-next-line no-array-constructor
  const ArrayIteratorObject = iterateArray([]);
  const ArrayIteratorPrototype = getPrototypeOf(ArrayIteratorObject);

  // 22.2.1 The %TypedArray% Intrinsic Object

  const TypedArray = getPrototypeOf(Float32Array);

  // 23.1.5.2 The %MapIteratorPrototype% Object

  const MapIteratorObject = iterateMap(new Map());
  const MapIteratorPrototype = getPrototypeOf(MapIteratorObject);

  // 23.2.5.2 The %SetIteratorPrototype% Object

  const SetIteratorObject = iterateSet(new Set());
  const SetIteratorPrototype = getPrototypeOf(SetIteratorObject);

  // 25.1.2 The %IteratorPrototype% Object

  const IteratorPrototype = getPrototypeOf(ArrayIteratorPrototype);

  // 25.2.1 The GeneratorFunction Constructor

  // eslint-disable-next-line no-empty-function
  function* GeneratorFunctionInstance() {}
  const GeneratorFunction = getConstructorOf(GeneratorFunctionInstance);

  // 25.2.3 Properties of the GeneratorFunction Prototype Object

  const Generator = GeneratorFunction.prototype;

  // 25.7.1 The AsyncFunction Constructor

  // eslint-disable-next-line no-empty-function
  async function AsyncFunctionInstance() {}
  const AsyncFunction = getConstructorOf(AsyncFunctionInstance);

  const intrinsics = {
    '%InertFunction%': InertFunction,
    '%ArrayIteratorPrototype%': ArrayIteratorPrototype,
    '%InertAsyncFunction%': AsyncFunction,
    '%Generator%': Generator,
    '%InertGeneratorFunction%': GeneratorFunction,
    '%IteratorPrototype%': IteratorPrototype,
    '%MapIteratorPrototype%': MapIteratorPrototype,
    '%RegExpStringIteratorPrototype%': RegExpStringIteratorPrototype,
    '%SetIteratorPrototype%': SetIteratorPrototype,
    '%StringIteratorPrototype%': StringIteratorPrototype,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%InertCompartment%': InertCompartment,
  };

  if (AsyncGeneratorFunctionInstance !== undefined) {
    // 25.3.1 The AsyncGeneratorFunction Constructor

    const AsyncGeneratorFunction = getConstructorOf(
      AsyncGeneratorFunctionInstance,
    );

    // 25.3.2.2 AsyncGeneratorFunction.prototype
    const AsyncGenerator = AsyncGeneratorFunction.prototype;
    // 25.5.1 Properties of the AsyncGenerator Prototype Object
    const AsyncGeneratorPrototype = AsyncGenerator.prototype;
    const AsyncIteratorPrototype = getPrototypeOf(AsyncGeneratorPrototype);

    assign(intrinsics, {
      '%AsyncGenerator%': AsyncGenerator,
      '%InertAsyncGeneratorFunction%': AsyncGeneratorFunction,
      '%AsyncGeneratorPrototype%': AsyncGeneratorPrototype,
      '%AsyncIteratorPrototype%': AsyncIteratorPrototype,
    });
  }

  if (globalThis.Iterator) {
    intrinsics['%IteratorHelperPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.Iterator.from([]).take(0),
    );
    intrinsics['%WrapForValidIteratorPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.Iterator.from({
        next() {
          return { value: undefined };
        },
      }),
    );
  }

  if (globalThis.AsyncIterator) {
    intrinsics['%AsyncIteratorHelperPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.AsyncIterator.from([]).take(0),
    );
    intrinsics['%WrapForValidAsyncIteratorPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.AsyncIterator.from({ next() {} }),
    );
  }

  const ab = new ArrayBuffer(0);
  // eslint-disable-next-line @endo/no-polymorphic-call
  const iab = ab.sliceToImmutable();
  const iabProto = getPrototypeOf(iab);
  if (iabProto !== ArrayBuffer.prototype) {
    // In a native implementation, these will be the same prototype
    intrinsics['%ImmutableArrayBufferPrototype%'] = iabProto;
  }

  return intrinsics;
};$h͏_once.getAnonymousIntrinsics(getAnonymousIntrinsics);
})()
,
// === 52. ses ./src/tame-harden.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let freeze;$h͏_imports([["./commons.js", [["freeze",[$h͏_a => (freeze = $h͏_a)]]]]]);


/** @import {Harden} from '../types.js'; */

/** @type {(safeHarden: Harden, hardenTaming: 'safe' | 'unsafe') => Harden} */
       const tameHarden = (safeHarden, hardenTaming) => {
  if (hardenTaming === 'safe') {
    return safeHarden;
  }

  // In on the joke
  Object.isExtensible = () => false;
  Object.isFrozen = () => true;
  Object.isSealed = () => true;
  Reflect.isExtensible = () => false;

  // @ts-expect-error secret property
  if (safeHarden.isFake) {
    // The "safe" hardener is already a fake hardener.
    // Just use it.
    return safeHarden;
  }

  const fakeHarden = arg => arg;
  fakeHarden.isFake = true;
  return freeze(fakeHarden);
};$h͏_once.tameHarden(tameHarden);
freeze(tameHarden);
})()
,
// === 53. ses ./src/tame-symbol-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Symbol,entries,fromEntries,getOwnPropertyDescriptors,defineProperties,arrayMap,functionBind;$h͏_imports([["./commons.js", [["Symbol",[$h͏_a => (Symbol = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["functionBind",[$h͏_a => (functionBind = $h͏_a)]]]]]);









/**
 * This taming provides a tamed alternative to the original `Symbol` constructor
 * that starts off identical, except that all its properties are "temporarily"
 * configurable. The original `Symbol` constructor remains unmodified on
 * the start compartment's global. The tamed alternative is used as the shared
 * `Symbol` constructor on constructed compartments.
 *
 * Starting these properties as configurable assumes two succeeding phases of
 * processing: A permit enforcement phase, that
 * removes all properties not on the permits (which requires them to be
 * configurable) and a global hardening step that freezes all primordials,
 * returning these properties to their expected non-configurable status.
 *
 * The ses shim is constructed to eventually enable vetted shims to run between
 * repair and global hardening. However, such vetted shims would normally
 * run in the start compartment, which continues to use the original unmodified
 * `Symbol`, so they should not normally be affected by the temporary
 * configurability of these properties.
 *
 * Note that the spec refers to the global `Symbol` function as the
 * ["Symbol Constructor"](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-constructor)
 * even though it has a call behavior (can be called as a function) and does not
 * not have a construct behavior (cannot be called with `new`). Accordingly,
 * to tame it, we must replace it with a function without a construct
 * behavior.
 */
       const tameSymbolConstructor = () => {
  const OriginalSymbol = Symbol;
  const SymbolPrototype = OriginalSymbol.prototype;

  // Bypass Hermes bug, fixed in: https://github.com/facebook/hermes/commit/00f18c89c720e1c34592bb85a1a8d311e6e99599
  // Make a "copy" of the primordial [Symbol "constructor"](https://tc39.es/ecma262/#sec-symbol-description) which maintains all observable behavior. The primordial explicitly throws on `[[Construct]]` and has a `[[Call]]` which ignores the receiver. Binding also maintains the `toString` source as a native function. The `name` is restored below when copying own properties.
  const SharedSymbol = functionBind(Symbol, undefined);

  defineProperties(SymbolPrototype, {
    constructor: {
      value: SharedSymbol
      // leave other `constructor` attributes as is
    },
  });

  const originalDescsEntries = entries(
    getOwnPropertyDescriptors(OriginalSymbol),
  );
  const descs = fromEntries(
    arrayMap(originalDescsEntries, ([name, desc]) => [
      name,
      { ...desc, configurable: true },
    ]),
  );
  defineProperties(SharedSymbol, descs);

  return { '%SharedSymbol%': SharedSymbol };
};$h͏_once.tameSymbolConstructor(tameSymbolConstructor);
})()
,
// === 54. ses ./src/tame-faux-data-properties.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getOwnPropertyDescriptor,apply,defineProperty,toStringTagSymbol;$h͏_imports([["./commons.js", [["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]]]]]);






const throws = thunk => {
  try {
    thunk();
    return false;
  } catch (er) {
    return true;
  }
};

/**
 * Exported for convenience of unit testing. Harmless, but not expected
 * to be useful by itself.
 *
 * @param {any} obj
 * @param {string|symbol} prop
 * @param {any} expectedValue
 * @returns {boolean}
 * Returns whether `tameFauxDataProperty` turned the property in question
 * from an apparent faux data property into the actual data property it
 * seemed to emulate.
 * If this function returns `false`, then we hope no effects happened.
 * However, sniffing out if an accessor property seems to be a faux data
 * property requires invoking the getter and setter functions that might
 * possibly have side effects.
 * `tameFauxDataProperty` is not in a position to tell.
 */
       const tameFauxDataProperty = (obj, prop, expectedValue) => {
  if (obj === undefined) {
    // The object does not exist in this version of the platform
    return false;
  }
  const desc = getOwnPropertyDescriptor(obj, prop);
  if (!desc || 'value' in desc) {
    // The property either doesn't exist, or is already an actual data property.
    return false;
  }
  const { get, set } = desc;
  if (typeof get !== 'function' || typeof set !== 'function') {
    // A faux data property has both a getter and a setter
    return false;
  }
  if (get() !== expectedValue) {
    // The getter called by itself should produce the expectedValue
    return false;
  }
  if (apply(get, obj, []) !== expectedValue) {
    // The getter called with `this === obj` should also return the
    // expectedValue.
    return false;
  }
  const testValue = 'Seems to be a setter';
  const subject1 = { __proto__: null };
  apply(set, subject1, [testValue]);
  if (subject1[prop] !== testValue) {
    // The setter called with an unrelated object as `this` should
    // set the property on the object.
    return false;
  }
  const subject2 = { __proto__: obj };
  apply(set, subject2, [testValue]);
  if (subject2[prop] !== testValue) {
    // The setter called on an object that inherits from `obj` should
    // override the property from `obj` as if by assignment.
    return false;
  }
  if (!throws(() => apply(set, obj, [expectedValue]))) {
    // The setter called with `this === obj` should throw without having
    // caused any effect.
    // This is the test that has the greatest danger of leaving behind some
    // persistent side effect. The most obvious one is to emulate a
    // successful assignment to the property. That's why this test
    // uses `expectedValue`, so that case is likely not to actually
    // change anything.
    return false;
  }
  if ('originalValue' in get) {
    // The ses-shim uniquely, as far as we know, puts an `originalValue`
    // property on the getter, so that reflect property tranversal algorithms,
    // like `harden`, will traverse into the enulated value without
    // calling the getter. That does not happen until `permits-intrinsics.js`
    // which is much later. So if we see one this early, we should
    // not assume we understand what's going on.
    return false;
  }

  // We assume that this code runs before any untrusted code runs, so
  // we do not need to worry about the above conditions passing because of
  // malicious intent. In fact, it runs even before vetted shims are supposed
  // to run, between repair and hardening. Given that, after all these tests
  // pass, we have adequately validated that the property in question is
  // an accessor function whose purpose is suppressing the override mistake,
  // i.e., enabling a non-writable property to be overridden by assignment.
  // In that case, here we *temporarily* turn it into the data property
  // it seems to emulate, but writable so that it does not trigger the
  // override mistake while in this temporary state.

  // For those properties that are also listed in `enablements.js`,
  // that phase will re-enable override for these properties, but
  // via accessor functions that SES controls, so we know what they are
  // doing. In addition, the getter functions installed by
  // `enable-property-overrides.js` have an `originalValue` field
  // enabling meta-traversal code like harden to visit the original value
  // without calling the getter.

  if (desc.configurable === false) {
    // Even though it seems to be a faux data property, we're unable to fix it.
    return false;
  }

  // Many of the `return false;` cases above plausibly should be turned into
  // errors, or an least generate warnings. However, for those, the checks
  // following this phase are likely to signal an error anyway.

  // At this point, we have passed all our sniff checks for validating that
  // it seems to be a faux data property with the expected value. Turn
  // it into the actual data property it emulates, but writable so there is
  // not yet an override mistake problem.

  defineProperty(obj, prop, {
    value: expectedValue,
    writable: true,
    enumerable: desc.enumerable,
    configurable: true,
  });

  return true;
};

/**
 * In JavaScript, the so-called "override mistake" is the inability to
 * override an inherited non-writable data property by assignment. A common
 * workaround is to instead define an accessor property that acts like
 * a non-writable data property, except that it allows an object that
 * inherits this property to override it by assignment. Let's call
 * an access property that acts this way a "faux data property". In this
 * ses-shim, `enable-property-overrides.js` makes the properties listed in
 * `enablements.js` into faux data properties.
 *
 * But the ses-shim is not alone in use of this trick. Starting with the
 * [Iterator Helpers proposal](https://github.com/tc39/proposal-iterator-helpers),
 * some properties are defined as (what we call) faux data properties.
 * Some of these are new properties (`Interator.prototype.constructor`) and
 * some are old data properties converted to accessor properties
 * (`Iterator.prototype[String.toStringTag]`). So the ses-shim needs to be
 * prepared for some enumerated set of properties to already be faux data
 * properties in the platform prior to our initialization.
 *
 * For these possible faux data properties, it is important that
 * `permits.js` describe each as a data property, so that it can further
 * constrain the apparent value (that allegedly would be returned by the
 * getter) according to its own permits.
 *
 * However, at the time of this writing, the precise behavior specified
 * by the iterator-helpers proposal for these faux data properties is
 * novel. We should not be too confident that all further such platform
 * additions do what we would now expect. So, for each of these possible
 * faux data properties, we do some sniffing to see if it behaves as we
 * currently expect a faux data property to act. If not, then
 * `tameFauxDataProperties` tries not to modify it, leaving it to later
 * checks, especially `permits-intrinsics.js`, to error when it sees an
 * unexpected accessor.
 *
 * If one of these enumerated accessor properties does seem to be
 * a faithful faux data property, then `tameFauxDataProperties` itself
 * *tempoarily* turns it into the actual data property that it seems to emulate.
 * This data property starts as writable, so that in this state it will
 * not trigger the override mistake, i.e., assignment to an object inheriting
 * this property is allowed to succeed at overriding this property.
 *
 * For those properties that should be a faux data property rather than an
 * actual one, such as those from the iterator-helpers proposal,
 * they should be listed as such in `enablements.js`, so
 * `enable-property-overrides.js` will turn it back into a faux data property.
 * But one controlled by the ses-shim, whose behavior we understand.
 *
 * `tameFauxDataProperties`, which turns these into actual data properties,
 * happens during the `repairIntrinsics` phase
 * of `lockdown`, before even vetted shim are supposed to run.
 * `enable-property-overrides.js` runs after vetted shims, turning the
 * appropriate ones back into faux data properties. Thus vetted shims
 * can observe the possibly non-conforming state where these are temporarily
 * actual data properties, rather than faux data properties.
 *
 * Coordinate the property enumeration here
 * with `enablements.js`, so the appropriate properties are
 * turned back to faux data properties.
 *
 * @param {Record<any,any>} intrinsics
 */$h͏_once.tameFauxDataProperty(tameFauxDataProperty);
       const tameFauxDataProperties = intrinsics => {
  // https://github.com/tc39/proposal-iterator-helpers
  tameFauxDataProperty(
    intrinsics['%IteratorPrototype%'],
    'constructor',
    intrinsics.Iterator,
  );
  // https://github.com/tc39/proposal-iterator-helpers
  tameFauxDataProperty(
    intrinsics['%IteratorPrototype%'],
    toStringTagSymbol,
    'Iterator',
  );
};$h͏_once.tameFauxDataProperties(tameFauxDataProperties);
})()
,
// === 55. ses ./src/tame-regenerator-runtime.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let defineProperty,iteratorPrototype,iteratorSymbol,hasOwn;$h͏_imports([["./commons.js", [["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["iteratorPrototype",[$h͏_a => (iteratorPrototype = $h͏_a)]],["iteratorSymbol",[$h͏_a => (iteratorSymbol = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]]]);






       const tameRegeneratorRuntime = () => {
  const iter = iteratorPrototype[iteratorSymbol];
  defineProperty(iteratorPrototype, iteratorSymbol, {
    configurable: true,
    get() {
      return iter;
    },
    set(value) {
      // ignore the assignment on IteratorPrototype
      if (this === iteratorPrototype) return;
      if (hasOwn(this, iteratorSymbol)) {
        this[iteratorSymbol] = value;
      }
      defineProperty(this, iteratorSymbol, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    },
  });
};$h͏_once.tameRegeneratorRuntime(tameRegeneratorRuntime);
})()
,
// === 56. ses ./src/shim-arraybuffer-transfer.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let ArrayBuffer,arrayBufferPrototype,arrayBufferSlice,arrayBufferGetByteLength,Uint8Array,typedArraySet,globalThis,TypeError,defineProperty;$h͏_imports([["./commons.js", [["ArrayBuffer",[$h͏_a => (ArrayBuffer = $h͏_a)]],["arrayBufferPrototype",[$h͏_a => (arrayBufferPrototype = $h͏_a)]],["arrayBufferSlice",[$h͏_a => (arrayBufferSlice = $h͏_a)]],["arrayBufferGetByteLength",[$h͏_a => (arrayBufferGetByteLength = $h͏_a)]],["Uint8Array",[$h͏_a => (Uint8Array = $h͏_a)]],["typedArraySet",[$h͏_a => (typedArraySet = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]]]]]);











       const shimArrayBufferTransfer = () => {
  if (typeof arrayBufferPrototype.transfer === 'function') {
    // Assume already exists so does not need to be shimmed.
    // Such conditional shimming is ok in this case since ArrayBuffer.p.transfer
    // is already officially part of JS.
    //
    // Empty object because this shim has nothing for `addIntrinsics` to add.
    return {};
  }
  const clone = globalThis.structuredClone;
  if (typeof clone !== 'function') {
    // On a platform with neither `Array.prototype.transfer`
    // nor `structuredClone`, this shim does nothing.
    // For example, Node <= 16 has neither.
    //
    // Empty object because this shim has nothing for `addIntrinsics` to add.
    return {};
    // TODO Rather than doing nothing, should the endo ses-shim throw
    // in this case?
    // throw TypeError(
    //   `Can only shim missing ArrayBuffer.prototype.transfer on a platform with "structuredClone"`,
    // );
    // For example, endo no longer supports Node <= 16. All browsers have
    // `structuredClone`. XS has `Array.prototype.transfer`. Are there still
    // any platforms without both that Endo should still support?
    // What about Hermes?
  }

  /**
   * @type {ThisType<ArrayBuffer>}
   */
  const methods = {
    /**
     * @param {number} [newLength]
     */
    transfer(newLength = undefined) {
      // Using this builtin getter also ensures that `this` is a genuine
      // ArrayBuffer.
      const oldLength = arrayBufferGetByteLength(this);
      if (newLength === undefined || newLength === oldLength) {
        return clone(this, { transfer: [this] });
      }
      if (typeof newLength !== 'number') {
        throw TypeError(`transfer newLength if provided must be a number`);
      }
      if (newLength > oldLength) {
        const result = new ArrayBuffer(newLength);
        const taOld = new Uint8Array(this);
        const taNew = new Uint8Array(result);
        typedArraySet(taNew, taOld);
        // Using clone only to detach, and only after the copy succeeds
        clone(this, { transfer: [this] });
        return result;
      } else {
        const result = arrayBufferSlice(this, 0, newLength);
        // Using clone only to detach, and only after the slice succeeds
        clone(this, { transfer: [this] });
        return result;
      }
    },
  };

  defineProperty(arrayBufferPrototype, 'transfer', {
    // @ts-expect-error
    value: methods.transfer,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  // Empty object because this shim has nothing for `addIntrinsics` to add.
  return {};
};$h͏_once.shimArrayBufferTransfer(shimArrayBufferTransfer);
})()
,
// === 57. ses ./src/reporting.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,assert;$h͏_imports([["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);


/**
 * @import {Reporter, GroupReporter} from './reporting-types.js'
 */

/* eslint-disable @endo/no-polymorphic-call */
/**
 * To address https://github.com/endojs/endo/issues/2908,
 * the `consoleReporter` uses the current `console` rather
 * than the original one.
 *
 * @type {GroupReporter}
 */
const consoleReporter = {
  warn(...args) {
    globalThis.console.warn(...args);
  },
  error(...args) {
    globalThis.console.error(...args);
  },
  ...(globalThis.console?.groupCollapsed
    ? {
        groupCollapsed(...args) {
          globalThis.console.groupCollapsed(...args);
        },
      }
    : undefined),
  ...(globalThis.console?.groupEnd
    ? {
        groupEnd() {
          globalThis.console.groupEnd();
        },
      }
    : undefined),
};
/* eslint-enable @endo/no-polymorphic-call */

/**
 * Creates a suitable reporter for internal errors and warnings out of the
 * Node.js console.error to ensure all messages go to stderr, including the
 * group label.
 * Accounts for the extra space introduced by console.error as a delimiter
 * between the indent and subsequent arguments.
 *
 * @param {(...message: Array<any>) => void} print
 */
const makeReportPrinter = print => {
  let indent = false;
  /** @param {Array<any>} args */
  const printIndent = (...args) => {
    if (indent) {
      print(' ', ...args);
    } else {
      print(...args);
    }
  };
  return /** @type {GroupReporter} */ ({
    warn(...args) {
      printIndent(...args);
    },
    error(...args) {
      printIndent(...args);
    },
    groupCollapsed(...args) {
      assert(!indent);
      print(...args);
      indent = true;
    },
    groupEnd() {
      indent = false;
    },
  });
};

const mute = () => {};

/**
 * @param {"platform" | "console" | "none"} reporting
 */
       const chooseReporter = reporting => {
  if (reporting === 'none') {
    return makeReportPrinter(mute);
  }
  if (globalThis.console !== undefined) {
    if (
      reporting === 'console' || // asks for console explicitly
      globalThis.window === globalThis || // likely on browser
      globalThis.importScripts !== undefined // likely on worker
    ) {
      // reporter just delegates directly to the current console
      return consoleReporter;
    }
    assert(reporting === 'platform');
    // On Node.js, we send all feedback to stderr, regardless of purported level.
    // This uses `consoleReporter.error` instead of `console.error` because we
    // want the constructed reporter to use the `console.error` of the current
    // `console`, not the `console` that was installed when the reporter
    // was created.
    return makeReportPrinter(consoleReporter.error);
  }
  if (globalThis.print !== undefined) {
    return makeReportPrinter(globalThis.print);
  }
  return makeReportPrinter(mute);
};

/**
 * @param {string} groupLabel
 * @param {GroupReporter} console
 * @param {(internalConsole: Reporter) => void} callback
 */$h͏_once.chooseReporter(chooseReporter);
       const reportInGroup = (groupLabel, console, callback) => {
  const { warn, error, groupCollapsed, groupEnd } = console;
  const grouping = groupCollapsed && groupEnd;
  let groupStarted = false;
  try {
    return callback({
      warn(...args) {
        if (grouping && !groupStarted) {
          groupCollapsed(groupLabel);
          groupStarted = true;
        }
        warn(...args);
      },
      error(...args) {
        if (grouping && !groupStarted) {
          groupCollapsed(groupLabel);
          groupStarted = true;
        }
        error(...args);
      },
    });
  } finally {
    if (grouping && groupStarted) {
      groupEnd();
      groupStarted = false;
    }
  }
};$h͏_once.reportInGroup(reportInGroup);
})()
,
// === 58. ses ./src/lockdown.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getenv,FERAL_FUNCTION,FERAL_EVAL,TypeError,arrayFilter,globalThis,is,ownKeys,stringSplit,symbolFor,noEvalEvaluate,getOwnPropertyNames,getPrototypeOf,makeHardener,makeIntrinsicsCollector,removeUnpermittedIntrinsics,tameFunctionConstructors,tameDateConstructor,tameMathObject,tameRegExpConstructor,enablePropertyOverrides,tameLocaleMethods,setGlobalObjectConstantProperties,setGlobalObjectMutableProperties,setGlobalObjectEvaluators,makeSafeEvaluator,initialGlobalPropertyNames,tameFunctionToString,tameDomains,tameModuleSource,tameConsole,tameErrorConstructor,assert,makeAssert,getAnonymousIntrinsics,makeCompartmentConstructor,tameHarden,tameSymbolConstructor,tameFauxDataProperties,tameRegeneratorRuntime,shimArrayBufferTransfer,reportInGroup,chooseReporter;$h͏_imports([["@endo/env-options", [["getEnvironmentOption",[$h͏_a => (getenv = $h͏_a)]]]],["@endo/immutable-arraybuffer/shim.js", []],["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["FERAL_EVAL",[$h͏_a => (FERAL_EVAL = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["symbolFor",[$h͏_a => (symbolFor = $h͏_a)]],["noEvalEvaluate",[$h͏_a => (noEvalEvaluate = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]]]],["./make-hardener.js", [["makeHardener",[$h͏_a => (makeHardener = $h͏_a)]]]],["./intrinsics.js", [["makeIntrinsicsCollector",[$h͏_a => (makeIntrinsicsCollector = $h͏_a)]]]],["./permits-intrinsics.js", [["default",[$h͏_a => (removeUnpermittedIntrinsics = $h͏_a)]]]],["./tame-function-constructors.js", [["default",[$h͏_a => (tameFunctionConstructors = $h͏_a)]]]],["./tame-date-constructor.js", [["default",[$h͏_a => (tameDateConstructor = $h͏_a)]]]],["./tame-math-object.js", [["default",[$h͏_a => (tameMathObject = $h͏_a)]]]],["./tame-regexp-constructor.js", [["default",[$h͏_a => (tameRegExpConstructor = $h͏_a)]]]],["./enable-property-overrides.js", [["default",[$h͏_a => (enablePropertyOverrides = $h͏_a)]]]],["./tame-locale-methods.js", [["default",[$h͏_a => (tameLocaleMethods = $h͏_a)]]]],["./global-object.js", [["setGlobalObjectConstantProperties",[$h͏_a => (setGlobalObjectConstantProperties = $h͏_a)]],["setGlobalObjectMutableProperties",[$h͏_a => (setGlobalObjectMutableProperties = $h͏_a)]],["setGlobalObjectEvaluators",[$h͏_a => (setGlobalObjectEvaluators = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]],["./permits.js", [["initialGlobalPropertyNames",[$h͏_a => (initialGlobalPropertyNames = $h͏_a)]]]],["./tame-function-tostring.js", [["tameFunctionToString",[$h͏_a => (tameFunctionToString = $h͏_a)]]]],["./tame-domains.js", [["tameDomains",[$h͏_a => (tameDomains = $h͏_a)]]]],["./tame-module-source.js", [["tameModuleSource",[$h͏_a => (tameModuleSource = $h͏_a)]]]],["./error/tame-console.js", [["tameConsole",[$h͏_a => (tameConsole = $h͏_a)]]]],["./error/tame-error-constructor.js", [["default",[$h͏_a => (tameErrorConstructor = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]],["makeAssert",[$h͏_a => (makeAssert = $h͏_a)]]]],["./get-anonymous-intrinsics.js", [["getAnonymousIntrinsics",[$h͏_a => (getAnonymousIntrinsics = $h͏_a)]]]],["./compartment.js", [["makeCompartmentConstructor",[$h͏_a => (makeCompartmentConstructor = $h͏_a)]]]],["./tame-harden.js", [["tameHarden",[$h͏_a => (tameHarden = $h͏_a)]]]],["./tame-symbol-constructor.js", [["tameSymbolConstructor",[$h͏_a => (tameSymbolConstructor = $h͏_a)]]]],["./tame-faux-data-properties.js", [["tameFauxDataProperties",[$h͏_a => (tameFauxDataProperties = $h͏_a)]]]],["./tame-regenerator-runtime.js", [["tameRegeneratorRuntime",[$h͏_a => (tameRegeneratorRuntime = $h͏_a)]]]],["./shim-arraybuffer-transfer.js", [["shimArrayBufferTransfer",[$h͏_a => (shimArrayBufferTransfer = $h͏_a)]]]],["./reporting.js", [["reportInGroup",[$h͏_a => (reportInGroup = $h͏_a)]],["chooseReporter",[$h͏_a => (chooseReporter = $h͏_a)]]]]]);































































/** @import {LockdownOptions} from '../types.js' */

const { Fail, details: X, quote: q } = assert;

/** @type {Error=} */
let priorRepairIntrinsics;

/** @type {Error=} */
let priorHardenIntrinsics;

// Build a harden() with an empty fringe.
// Gate it on lockdown.
/**
 * @template T
 * @param {T} ref
 * @returns {T}
 */
const safeHarden = makeHardener();

/**
 * @callback Transform
 * @param {string} source
 * @returns {string}
 */

/**
 * @callback CompartmentConstructor
 * @param {object} endowments
 * @param {object} moduleMap
 * @param {object} [options]
 * @param {Array<Transform>} [options.transforms]
 * @param {Array<Transform>} [options.__shimTransforms__]
 */

// TODO https://github.com/endojs/endo/issues/814
// Lockdown currently allows multiple calls provided that the specified options
// of every call agree.  With experience, we have observed that lockdown should
// only ever need to be called once and that simplifying lockdown will improve
// the quality of audits.

const probeHostEvaluators = () => {
  let functionAllowed;
  try {
    functionAllowed = FERAL_FUNCTION('return true')();
  } catch (_error) {
    // We reach here if the Function() constructor is outright forbidden by a
    // strict Content Security Policy (containing either a `default-src` or a
    // `script-src` directive), not been implemented in the host, or the host
    // is configured to throw an exception instead of `new Function`.
    functionAllowed = false;
  }

  let evalAllowed;
  try {
    evalAllowed = FERAL_EVAL('true');
  } catch (_error) {
    // We reach here if `eval` is outright forbidden by a strict Content Security Policy,
    // not implemented in the host, or the host is configured to throw an exception.
    // We allow this for SES usage that delegates the responsibility to isolate
    // guest code to production code generation.
    evalAllowed = false;
  }

  let directEvalAllowed;
  if (functionAllowed && evalAllowed) {
    directEvalAllowed = FERAL_FUNCTION(
      'eval',
      'SES_changed',
      `\
        eval("SES_changed = true");
        return SES_changed;
      `,
    )(FERAL_EVAL, false);
    // If we get here and SES_changed stayed false, that means the eval was sloppy
    // and indirect, which generally creates a new global.
    // We are going to throw an exception for failing to initialize SES, but
    // good neighbors clean up.
    if (!directEvalAllowed) {
      delete globalThis.SES_changed;
    }
  }

  return { functionAllowed, evalAllowed, directEvalAllowed };
};

/**
 * @param {LockdownOptions} [options]
 */
       const repairIntrinsics = (options = {}) => {
  // First time, absent options default to 'safe'.
  // Subsequent times, absent options default to first options.
  // Thus, all present options must agree with first options.
  // Reconstructing `option` here also ensures that it is a well
  // behaved record, with only own data properties.
  //
  // The `overrideTaming` is not a safety issue. Rather it is a tradeoff
  // between code compatibility, which is better with the `'moderate'`
  // setting, and tool compatibility, which is better with the `'min'`
  // setting. See
  // https://github.com/Agoric/SES-shim/blob/master/packages/ses/README.md#enabling-override-by-assignment)
  // for an explanation of when to use which.
  //
  // The `stackFiltering` is not a safety issue. Rather it is a tradeoff
  // between relevance and completeness of the stack frames shown on the
  // console. Setting`stackFiltering` to `'verbose'` applies no filters, providing
  // the raw stack frames that can be quite verbose. Setting
  // `stackFrameFiltering` to`'concise'` limits the display to the stack frame
  // information most likely to be relevant, eliminating distracting frames
  // such as those from the infrastructure. However, the bug you're trying to
  // track down might be in the infrastructure, in which case the `'verbose'` setting
  // is useful. See
  // [`stackFiltering` options](https://github.com/Agoric/SES-shim/blob/master/packages/ses/docs/lockdown.md#stackfiltering-options)
  // for an explanation.

  const {
    errorTaming = /** @type {'safe' | 'unsafe' | 'unsafe-debug'} */ (
      getenv('LOCKDOWN_ERROR_TAMING', 'safe', ['unsafe', 'unsafe-debug'])
    ),
    errorTrapping = /** @type {'platform' | 'none' | 'report' | 'abort' | 'exit'} */ (
      getenv('LOCKDOWN_ERROR_TRAPPING', 'platform', [
        'none',
        'report',
        'abort',
        'exit',
      ])
    ),
    reporting = /** @type {'platform' | 'console' | 'none'} */ (
      getenv('LOCKDOWN_REPORTING', 'platform', ['console', 'none'])
    ),
    unhandledRejectionTrapping = /** @type {'none' | 'report'} */ (
      getenv('LOCKDOWN_UNHANDLED_REJECTION_TRAPPING', 'report', ['none'])
    ),
    regExpTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_REGEXP_TAMING', 'safe', ['unsafe'])
    ),
    localeTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_LOCALE_TAMING', 'safe', ['unsafe'])
    ),
    consoleTaming = /** @type {'unsafe' | 'safe'} */ (
      getenv('LOCKDOWN_CONSOLE_TAMING', 'safe', ['unsafe'])
    ),
    overrideTaming = /** @type {'moderate' | 'min' | 'severe'} */ (
      getenv('LOCKDOWN_OVERRIDE_TAMING', 'moderate', ['min', 'severe'])
    ),
    stackFiltering = /** @type {'concise' | 'omit-frames' | 'shorten-paths' | 'verbose'} */ (
      getenv('LOCKDOWN_STACK_FILTERING', 'concise', [
        'omit-frames',
        'shorten-paths',
        'verbose',
      ])
    ),
    domainTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_DOMAIN_TAMING', 'safe', ['unsafe'])
    ),
    evalTaming = /** @type {'safe-eval' | 'unsafe-eval' | 'no-eval'} */ (
      getenv('LOCKDOWN_EVAL_TAMING', 'safe-eval', [
        'unsafe-eval',
        'no-eval',
        // deprecated
        'safeEval',
        'unsafeEval',
        'noEval',
      ])
    ),
    overrideDebug = /** @type {string[]} */ (
      arrayFilter(
        stringSplit(getenv('LOCKDOWN_OVERRIDE_DEBUG', ''), ','),
        /** @param {string} debugName */
        debugName => debugName !== '',
      )
    ),
    legacyRegeneratorRuntimeTaming = /** @type {'safe' | 'unsafe-ignore'} */ (
      getenv('LOCKDOWN_LEGACY_REGENERATOR_RUNTIME_TAMING', 'safe', [
        'unsafe-ignore',
      ])
    ),
    __hardenTaming__ = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_HARDEN_TAMING', 'safe', ['unsafe'])
    ),
    dateTaming, // deprecated
    mathTaming, // deprecated
    ...extraOptions
  } = options;

  // Assert that only supported options were passed.
  // Use Reflect.ownKeys to reject symbol-named properties as well.
  const extraOptionsNames = ownKeys(extraOptions);
  extraOptionsNames.length === 0 ||
    Fail`lockdown(): non supported option ${q(extraOptionsNames)}`;

  const reporter = chooseReporter(reporting);
  const { warn } = reporter;

  if (dateTaming !== undefined) {
    warn(
      `SES The 'dateTaming' option is deprecated and does nothing. In the future specifying it will be an error.`,
    );
  }
  if (mathTaming !== undefined) {
    warn(
      `SES The 'mathTaming' option is deprecated and does nothing. In the future specifying it will be an error.`,
    );
  }

  priorRepairIntrinsics === undefined ||
    // eslint-disable-next-line @endo/no-polymorphic-call
    assert.fail(
      X`Already locked down at ${priorRepairIntrinsics} (SES_ALREADY_LOCKED_DOWN)`,
      TypeError,
    );
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_ALREADY_LOCKED_DOWN.md
  priorRepairIntrinsics = TypeError('Prior lockdown (SES_ALREADY_LOCKED_DOWN)');
  // Tease V8 to generate the stack string and release the closures the stack
  // trace retained:
  priorRepairIntrinsics.stack;

  const { functionAllowed, evalAllowed, directEvalAllowed } =
    probeHostEvaluators();

  if (
    directEvalAllowed === false &&
    evalTaming === 'safe-eval' &&
    (functionAllowed || evalAllowed)
  ) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_DIRECT_EVAL.md
    throw TypeError(
      "SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct eval (dynamically scoped eval) (SES_DIRECT_EVAL)",
    );
  }

  /**
   * Because of packagers and bundlers, etc, multiple invocations of lockdown
   * might happen in separate instantiations of the source of this module.
   * In that case, each one sees its own `firstOptions` variable, so the test
   * above will not detect that lockdown has already happened. We
   * unreliably test some telltale signs that lockdown has run, to avoid
   * trying to lock down a locked down environment. Although the test is
   * unreliable, this is consistent with the SES threat model. SES provides
   * security only if it runs first in a given realm, or if everything that
   * runs before it is SES-aware and cooperative. Neither SES nor anything
   * can protect itself from corrupting code that runs first. For these
   * purposes, code that turns a realm into something that passes these
   * tests without actually locking down counts as corrupting code.
   *
   * The specifics of what this tests for may change over time, but it
   * should be consistent with any setting of the lockdown options.
   */
  const seemsToBeLockedDown = () => {
    return (
      globalThis.Function.prototype.constructor !== globalThis.Function &&
      // @ts-ignore harden is absent on globalThis type def.
      typeof globalThis.harden === 'function' &&
      // @ts-ignore lockdown is absent on globalThis type def.
      typeof globalThis.lockdown === 'function' &&
      globalThis.Date.prototype.constructor !== globalThis.Date &&
      typeof globalThis.Date.now === 'function' &&
      // @ts-ignore does not recognize that Date constructor is a special
      // Function.
      // eslint-disable-next-line @endo/no-polymorphic-call
      is(globalThis.Date.prototype.constructor.now(), NaN)
    );
  };

  if (seemsToBeLockedDown()) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_MULTIPLE_INSTANCES.md
    throw TypeError(
      `Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)`,
    );
  }

  /**
   * 1. TAME powers & gather intrinsics first.
   */

  tameDomains(domainTaming);

  // Replace Function.prototype.toString with one that recognizes
  // shimmed functions as honorary native functions.
  const markVirtualizedNativeFunction = tameFunctionToString();

  const { addIntrinsics, completePrototypes, finalIntrinsics } =
    makeIntrinsicsCollector(reporter);

  const tamedHarden = tameHarden(safeHarden, __hardenTaming__);
  addIntrinsics({ harden: tamedHarden });

  addIntrinsics(tameFunctionConstructors());

  addIntrinsics(tameDateConstructor());
  addIntrinsics(tameErrorConstructor(errorTaming, stackFiltering));
  addIntrinsics(tameMathObject());
  addIntrinsics(tameRegExpConstructor(regExpTaming));
  addIntrinsics(tameSymbolConstructor());
  addIntrinsics(shimArrayBufferTransfer());
  addIntrinsics(tameModuleSource());

  addIntrinsics(getAnonymousIntrinsics());

  completePrototypes();

  const intrinsics = finalIntrinsics();

  // Install Object[@harden] or abort.
  const symbolForHarden = symbolFor('harden');
  const priorHarden = intrinsics.Object[symbolForHarden];
  if (priorHarden) {
    // By convention, if a module like @endo/harden gets used before lockdown,
    // it will install itself as a non-configurable, non-writable property over
    // Object[@harden] so that versions of SES predating the introduction of
    // Object[@harden] will fail to lockdown because they cannot remove an
    // unknown intrinsic.
    // All newer versions explicitly check for Object[@harden] (here).
    // The @endo/harden implementation additionally captures a stack trace
    // where harden was first used to assist developers in tracking down the
    // hardened module that was initialized before lockdown.
    if (priorHarden.lockdownError) {
      throw priorHarden.lockdownError;
    }
    // And in the event a library installs Object[@harden] without leaving a
    // hint, we fall back to a generic lockdown error.
    throw new TypeError(
      'Cannot lockdown (repairIntrinsics) if a prior harden implementation has been used and installed. Check for libraries using @endo/harden before lockdown.',
    );
  }
  intrinsics.Object[symbolForHarden] = tamedHarden;

  const hostIntrinsics = { __proto__: null };

  // The Node.js Buffer is a derived class of Uint8Array, and as such is often
  // passed around where a Uint8Array is expected.
  if (typeof globalThis.Buffer === 'function') {
    hostIntrinsics.Buffer = globalThis.Buffer;
  }

  /**
   * Wrap console unless suppressed.
   * At the moment, the console is considered a host power in the start
   * compartment, and not a primordial. Hence it is absent from the whilelist
   * and bypasses the intrinsicsCollector.
   *
   * @type {((error: any) => string | undefined) | undefined}
   */
  let optGetStackString;
  if (errorTaming === 'safe') {
    optGetStackString = intrinsics['%InitialGetStackString%'];
  }
  const consoleRecord = tameConsole(
    consoleTaming,
    errorTrapping,
    unhandledRejectionTrapping,
    optGetStackString,
  );
  globalThis.console = /** @type {Console} */ (consoleRecord.console);

  // The untamed Node.js console cannot itself be hardened as it has mutable
  // internal properties, but some of these properties expose internal versions
  // of classes from node's "primordials" concept.
  // eslint-disable-next-line no-underscore-dangle
  if (typeof (/** @type {any} */ (consoleRecord.console)._times) === 'object') {
    // SafeMap is a derived Map class used internally by Node
    // There doesn't seem to be a cleaner way to reach it.
    hostIntrinsics.SafeMap = getPrototypeOf(
      // eslint-disable-next-line no-underscore-dangle
      /** @type {any} */ (consoleRecord.console)._times,
    );
  }

  // The default `assert` installed by `assert-shim.js` does not redact errors,
  // leaving `lockdown` or `repairIntrinsics` with the obligation to replace it
  // with a redacting version, unless the caller opts-out with errorTaming set
  // to `unsafe` or `unsafe-debug`.
  // The inverse was true through version 1.13.0, except the configuration
  // was disregarded and the redacting `assert` left in place if lexical
  // `assert` differed from `globalThis.assert`.
  // @ts-ignore assert is absent on globalThis type def.
  if (errorTaming !== 'unsafe' && errorTaming !== 'unsafe-debug') {
    globalThis.assert = makeAssert();
  }

  // Replace *Locale* methods with their non-locale equivalents
  tameLocaleMethods(intrinsics, localeTaming);

  tameFauxDataProperties(intrinsics);

  /**
   * 2. Enforce PERMITS on shared intrinsics
   */

  // Remove non-standard properties.
  // All remaining functions encountered during whitelisting are
  // branded as honorary native functions.
  reportInGroup(
    'SES Removing unpermitted intrinsics',
    reporter,
    groupReporter =>
      removeUnpermittedIntrinsics(
        intrinsics,
        markVirtualizedNativeFunction,
        groupReporter,
      ),
  );

  // Initialize the powerful initial global, i.e., the global of the
  // start compartment, from the intrinsics.

  setGlobalObjectConstantProperties(globalThis);

  setGlobalObjectMutableProperties(globalThis, {
    intrinsics,
    newGlobalPropertyNames: initialGlobalPropertyNames,
    makeCompartmentConstructor,
    markVirtualizedNativeFunction,
  });

  if (
    evalTaming === 'no-eval' ||
    // deprecated
    evalTaming === 'noEval'
  ) {
    setGlobalObjectEvaluators(
      globalThis,
      noEvalEvaluate,
      markVirtualizedNativeFunction,
    );
  } else if (
    evalTaming === 'safe-eval' ||
    // deprecated
    evalTaming === 'safeEval'
  ) {
    const { safeEvaluate } = makeSafeEvaluator({ globalObject: globalThis });
    setGlobalObjectEvaluators(
      globalThis,
      safeEvaluate,
      markVirtualizedNativeFunction,
    );
  } else if (
    evalTaming === 'unsafe-eval' ||
    // deprecated
    evalTaming === 'unsafeEval'
  ) {
    // Leave eval function and Function constructor of the initial
    // compartment intact.
    // Other compartments will not have access to these evaluators unless a
    // guest program escapes containment.
  }

  /**
   * 3. HARDEN to share the intrinsics.
   *
   * We define hardenIntrinsics here so that options are in scope, but return
   * it to the caller because we intend to eventually allow vetted shims to run
   * between repairs and the hardening of intrinsics and so we can benchmark
   * repair separately from hardening.
   */

  const hardenIntrinsics = () => {
    priorHardenIntrinsics === undefined ||
      // eslint-disable-next-line @endo/no-polymorphic-call
      assert.fail(
        X`Already locked down at ${priorHardenIntrinsics} (SES_ALREADY_LOCKED_DOWN)`,
        TypeError,
      );
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_ALREADY_LOCKED_DOWN.md
    priorHardenIntrinsics = TypeError(
      'Prior lockdown (SES_ALREADY_LOCKED_DOWN)',
    );
    // Tease V8 to generate the stack string and release the closures the stack
    // trace retained:
    priorHardenIntrinsics.stack;

    // Circumvent the override mistake.
    // TODO consider moving this to the end of the repair phase, and
    // therefore before vetted shims rather than afterwards. It is not
    // clear yet which is better.
    // @ts-ignore enablePropertyOverrides does its own input validation
    reportInGroup('SES Enabling property overrides', reporter, groupReporter =>
      enablePropertyOverrides(
        intrinsics,
        overrideTaming,
        groupReporter,
        overrideDebug,
      ),
    );
    if (legacyRegeneratorRuntimeTaming === 'unsafe-ignore') {
      tameRegeneratorRuntime();
    }

    // Finally register and optionally freeze all the intrinsics. This
    // must be the operation that modifies the intrinsics.
    const toHarden = {
      intrinsics,
      hostIntrinsics,
      globals: {
        // Harden evaluators
        Function: globalThis.Function,
        eval: globalThis.eval,
        // @ts-ignore Compartment does exist on globalThis
        Compartment: globalThis.Compartment,

        // Harden Symbol
        Symbol: globalThis.Symbol,
      },
    };

    // Harden Symbol and properties for initialGlobalPropertyNames in the host realm
    for (const prop of getOwnPropertyNames(initialGlobalPropertyNames)) {
      toHarden.globals[prop] = globalThis[prop];
    }

    tamedHarden(toHarden);

    return tamedHarden;
  };

  return hardenIntrinsics;
};$h͏_once.repairIntrinsics(repairIntrinsics);
})()
,
// === 59. ses ./src/lockdown-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,repairIntrinsics;$h͏_imports([["./assert-sloppy-mode.js", []],["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./lockdown.js", [["repairIntrinsics",[$h͏_a => (repairIntrinsics = $h͏_a)]]]]]);








/** @import {LockdownOptions} from '../types.js' */

/**
 * @param {LockdownOptions} [options]
 */
globalThis.lockdown = options => {
  const hardenIntrinsics = repairIntrinsics(options);
  globalThis.harden = hardenIntrinsics();
};

/**
 * @param {LockdownOptions} [options]
 */
globalThis.repairIntrinsics = options => {
  const hardenIntrinsics = repairIntrinsics(options);
  // Reveal hardenIntrinsics after repairs.
  globalThis.hardenIntrinsics = () => {
    // Reveal harden after hardenIntrinsics.
    // Harden is dangerous before hardenIntrinsics because hardening just
    // about anything will inadvertently render intrinsics irreparable.
    // Also, for modules that must work both before or after lockdown (code
    // that is portable between JS and SES), the existence of harden in global
    // scope signals whether such code should attempt to use harden in the
    // defense of its own API.
    // @ts-ignore harden not yet recognized on globalThis.
    globalThis.harden = hardenIntrinsics();
  };
};
})()
,
// === 60. ses ./src/compartment-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,makeCompartmentConstructor,tameFunctionToString,getGlobalIntrinsics,chooseReporter;$h͏_imports([["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./compartment.js", [["makeCompartmentConstructor",[$h͏_a => (makeCompartmentConstructor = $h͏_a)]]]],["./tame-function-tostring.js", [["tameFunctionToString",[$h͏_a => (tameFunctionToString = $h͏_a)]]]],["./intrinsics.js", [["getGlobalIntrinsics",[$h͏_a => (getGlobalIntrinsics = $h͏_a)]]]],["./reporting.js", [["chooseReporter",[$h͏_a => (chooseReporter = $h͏_a)]]]]]);





const markVirtualizedNativeFunction = tameFunctionToString();

const muteReporter = chooseReporter('none');

// @ts-ignore Compartment is definitely on globalThis.
globalThis.Compartment = makeCompartmentConstructor(
  makeCompartmentConstructor,
  // Any reporting that would need to be done should have already been done
  // during `lockdown()`.
  // See https://github.com/endojs/endo/pull/2624#discussion_r1840979770
  getGlobalIntrinsics(globalThis, muteReporter),
  markVirtualizedNativeFunction,
  {
    enforceNew: true,
  },
);
})()
,
// === 61. ses ./src/assert-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,makeAssert;$h͏_imports([["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/assert.js", [["makeAssert",[$h͏_a => (makeAssert = $h͏_a)]]]]]);


globalThis.assert = makeAssert(undefined, true);
})()
,
// === 62. ses ./src/console-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let symbolFor,globalThis,defineCausalConsoleFromLogger,loggedErrorHandler;$h͏_imports([["./commons.js", [["symbolFor",[$h͏_a => (symbolFor = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/console.js", [["defineCausalConsoleFromLogger",[$h͏_a => (defineCausalConsoleFromLogger = $h͏_a)]]]],["./error/assert.js", [["loggedErrorHandler",[$h͏_a => (loggedErrorHandler = $h͏_a)]]]]]);



// TODO possible additional exports. Some are privileged.
// export { loggedErrorHandler };
// export {
//   makeCausalConsole,
//   consoleLevelMethods,
//   consoleOtherMethods,
//   makeLoggingConsoleKit,
//   filterConsole,
//   pumpLogToConsole,
// } from './src/error/console.js';
// export { assertLogs, throwsAndLogs } from './src/error/throws-and-logs.js';

/**
 * Makes a Console like the
 * [SES causal `console`](https://github.com/endojs/endo/blob/master/packages/ses/src/error/README.md)
 * but whose output is redirected to the supplied `logger` function.
 */
const makeCausalConsoleFromLoggerForSesAva =
  defineCausalConsoleFromLogger(loggedErrorHandler);

/**
 *`makeCausalConsoleFromLoggerForSesAva` is privileged because it exposes
 * unredacted error info onto the `Logger` provided by the caller. It
 * should not be made available to non-privileged code.
 *
 * Further, we consider this particular API choice to be experimental
 * and may change in the future. It is currently only intended for use by
 * `@endo/ses-ava`, with which it will be co-maintained.
 *
 * Thus, this `console-shim.js` makes `makeCausalConsoleFromLoggerForSesAva`
 * available on `globalThis` which it *assumes* is the global of the start
 * compartment and is therefore allowed to hold powers that should not be
 * available in constructed compartments. It makes it available as the value of
 * a global property named by a registered symbol named
 * `MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA`.
 *
 * Anyone accessing this, including `@endo/ses-ava`, should feature test for
 * this and be tolerant of its absence. It may indeed disappear from later
 * versions of the ses-shim.
 */
const MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA = symbolFor(
  'MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA',
);

globalThis[MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA] =
  makeCausalConsoleFromLoggerForSesAva;
})()
,
// === 63. ses ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/lockdown-shim.js", []],["./src/compartment-shim.js", []],["./src/assert-shim.js", []],["./src/console-shim.js", []]]);
})()
,
])()
;/*! end SES */
(()=>{"use strict";var e={},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,globalThis.location;var a=globalThis.setTimeout,s=globalThis.clearTimeout,o=globalThis.document,n=(globalThis.trustedTypes,globalThis.self);let l=[];r.amdO={},(()=>{var e=[];r.O=(t,a,s,o)=>{if(a){o=o||0;for(var n=e.length;n>0&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[a,s,o];return}for(var l=1/0,n=0;n<e.length;n++){for(var[a,s,o]=e[n],c=!0,i=0;i<a.length;i++)(!1&o||l>=o)&&Object.keys(r.O).every(e=>r.O[e](a[i]))?a.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(n--,1);var m=s();void 0!==m&&(t=m)}}return t}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(a,s){if(1&s&&(a=this(a)),8&s||"object"==typeof a&&a&&(4&s&&a.__esModule||16&s&&"function"==typeof a.then))return a;var o=Object.create(null);r.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var l=2&s&&a;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>n[e]=()=>a[e]);return n.default=()=>a,r.d(o,n),o}})(),r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>""+(({285:"js-319e4a23",400:"js-11db994e",507:"js-08a87103",528:"js-bea06544",793:"js-67bd426a",899:"js-a5ce148e",929:"js-cb2d071c",1242:"js-efdee510",1271:"js-90f4ce23",1389:"js-77484acd",1602:"js-a80c5518",1684:"js-5fa74877",2079:"js-c87e6db1",2434:"js-631f4c9e",2610:"js-0bc0478e",2698:"js-3008bd9a",3076:"js-14a3bead",3429:"js-b072491a",3681:"js-426c2515",3962:"js-a58ebfdb",4237:"js-ab970d54",4325:"js-0afb10a3",4485:"js-375fd71e",4587:"js-229eafb5",4651:"js-aeb219ec",5882:"js-b65d7fa2",5903:"js-66622693",5952:"js-5a94f17d",5981:"js-7a99002b",6016:"js-182f79bf",6475:"js-49d0a293",6660:"js-71051298",6827:"js-3ef0a243",6842:"js-ed3f89ec",6898:"js-059be3de",6919:"js-64bbdc38",7536:"js-1dddcf58",7619:"js-eaa8b4e8",7675:"js-f5829bbb",7936:"js-7d9e07a4",8618:"js-343d8719",8635:"js-d55b92e6",8767:"js-9fdd03a1",8851:"js-c28e38e0",9421:"js-0c1fb56a",9461:"js-d178847c",9755:"js-b54e48f8",9780:"js-27ac8936",9792:"js-f6e85d72",9932:"js-2b4841d6"})[e]||e)+"."+({285:"08c9778f1861e49a01a5",400:"d3a519ff38498234742f",507:"b5e4d085211931e34019",528:"9b0728fbc1b11d2c42e3",793:"1003f05ad7f87ea4170a",899:"f3b4c9ed4bf9ed4e2610",929:"e21531431eddefb02445",1242:"7e13ef565903b4680921",1271:"86a8cb92db8f69aa36d6",1389:"716bd3d72bcf767313c5",1602:"54a46e6ce68f982d0757",1684:"96a411f544ae95eb522a",2079:"3b73e26f1dfca8e579ed",2434:"a8e3feb32dff3fcf77fb",2610:"c28d5550ccc76b62c9eb",2698:"2e30a1a08436a86bdad4",3028:"8b7316ceec3c03dba30a",3076:"3e90b651c68f63199d9e",3411:"4636525ddb2178d7e7c8",3429:"076a1dd309d461d550d6",3560:"f37b16cf5cbe7bb77c8f",3681:"682caa36682f6df22f7b",3962:"7e32ea3177d433e8e87b",4237:"e2d90d78214fb21bed1c",4325:"2e5936fdfc8308aed49b",4485:"4514a0a1c11c812afcfc",4587:"842f60a2cfd2be273f00",4651:"b06cd7514dcec4905d85",5882:"7335590a21690c210f02",5903:"5b7ba45f4f89b02ec08f",5952:"ab12f3e15532bbdc1e47",5981:"00643735324fd548de0a",6016:"d27573baf2e32e73599b",6475:"d9d2d1e59d23aedd1e39",6660:"1417eb5a792196f6a560",6827:"b0e81ae2892986c27481",6842:"814c8ded8927fccc5319",6898:"e0a4b9f174b02454a29b",6919:"53081c6118d907fee9e3",7408:"e23447030ed65946a872",7536:"87d248eee140ec66f737",7619:"c40e1c13170cd2fc75b2",7675:"597c9af7d7c0fb0376c8",7936:"1451f398fc9e00673824",8618:"9274644d561c7d9296a8",8635:"ab8c1a5cc79c4b9ef6c0",8767:"cfa61bd2877e82477756",8851:"c23905341796c916802f",9421:"b608c7668c1b215cc840",9461:"5e53a2db2b94f5734531",9755:"2cb25ea75afd84bdd69a",9780:"7e97d81a872308e2aa0e",9792:"511480a93d4aa8cac929",9932:"ee88bc42540fa511405e",9962:"57e6b59a3bb0d512a363"})[e]+".js",r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={};r.l=(t,n,l,c)=>{if(e[t])return void e[t].push(n);if(void 0!==l)for(var i,m,p=o.getElementsByTagName("script"),u=0;u<p.length;u++){var h=p[u];if(h.getAttribute("src")==t){i=h;break}}i||(m=!0,(i=o.createElement("script")).charset="utf-8",r.nc&&i.setAttribute("nonce",r.nc),i.src=t),e[t]=[n];var g=(r,a)=>{i.onerror=i.onload=null,s(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(e=>e(a)),r)return r(a)},d=a(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),m&&o.head.appendChild(i)}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=9121,l.push(e=>{"function"!=typeof SNOW&&(()=>{let e;var t,r,a,s={586:(e,t,r)=>{let a=r(228),{getFramesArray:s,getFrameTag:o}=r(648),{getOnload:n,setOnload:l,removeAttribute:c,addEventListener:i}=r(14);e.exports=function(e){for(let t=0;t<e.length;t++){let r=s(e[t],!0);for(let e=0;e<r.length;e++)!function(e){if(!o(e))return;i(e,"load",function(){a(e)});let t=n(e);t&&(l(e,null),c(e,"onload"),l(e,t))}(r[e])}}},750:(e,t,r)=>{let{Object:a}=r(14);e.exports=function(e){e&&a.getOwnPropertyDescriptor(e,"")}},407:e=>{let t=Object.getOwnPropertyDescriptor(window,"length").get,r=t.bind(window),a=Object.getOwnPropertyDescriptor(Document.prototype,"createElement").value.bind(o),s=Object.getOwnPropertyDescriptor(Node.prototype,"appendChild").value.bind(o.documentElement),n=Object.getOwnPropertyDescriptor(Node.prototype,"removeChild").value.bind(o.documentElement);e.exports={getLength:t,runInNewRealm:function(e){let t=r(),o=a("IFRAME");s(o);let l=e(window[t]);return n(o),l}}},832:(e,t,r)=>{let{Object:a,Function:s}=r(14),{isTagFramable:o}=r(648),{error:n,ERR_EXTENDING_FRAMABLES_BLOCKED:l}=r(312);e.exports=function(e){let t=a.getOwnPropertyDescriptor(e.CustomElementRegistry.prototype,"define");t.configurable=t.writable=!0;let r=t.value;t.value=function(e,t,a){if(a&&o(a.extends+""))throw n(l,e,a);return s.prototype.call.call(r,this,e,t,a)},a.defineProperty(e.CustomElementRegistry.prototype,"define",t)}},228:(e,t,r)=>{let a=r(750),{getLength:s}=r(407),{shadows:o,toArray:n,getFramesArray:l,getContentWindowOfFrame:c,getOwnerWindowOfNode:i}=r(648),{Object:m,getFrameElement:p,Function:u,isConnected:h}=r(14),{forEachOpened:g}=r(134);function d(e,t){let r=function e(t,r){var a;let n=u.prototype.call.call(s,t);for(let s=0;s<n;s++){if(a=t[s],null===m.getPrototypeOf.call(t,a))continue;if(p(t[s])===r)return t[s];let o=e(t[s],r);if(o)return o}for(let a=0;a<o.length;a++){let s=o[a];if(!h(s)||i(s)!==t)continue;let n=l(s,!1);for(let t=0;t<n.length;t++){let a=n[t],s=c(a);if(a===r)return s;let o=e(s,r);if(o)return o}}return null}(e,t);return r&&top.SNOW_WINDOW(r),!!r}e.exports=function(e){e=n(e);for(let t=0;t<e.length;t++){let r=e[t];"object"==typeof r&&null!==r&&(a(r),d(top,r)||g(d,r))}}},328:(e,t,r)=>{let{getFramesArray:a,getDeclarativeShadows:s}=r(648),{document:o,getChildElementCount:n,setInnerHTML:l}=r(14),{error:c,ERR_DECLARATIVE_SHADOWS_BLOCKED:i,ERR_HTML_FRAMES_SRCDOC_BLOCKED:m}=r(312);e.exports={assertHTML:function(e){for(let t=0;t<e.length;t++){let r=o.createElement("html");if(l(r,e[t]),n(r)){if(s(r).length>0)throw c(i,e[t]);let o=a(r,!1);for(let a=0;a<o.length;a++){let s=o[a];if(r.getAttribute.call(s,"srcdoc"))throw c(m,e[t])}}}}}},352:(e,t,r)=>{let a=r(228),s=r(716),o=r(832),n=r(583),l=r(278),c=r(459),i=r(58),m=r(744),p=r(294),{hookShadowDOM:u}=r(373),{Array:h,push:g,addEventListener:d,getFrameElement:b}=r(14),{makeDescriptorSetter:k}=r(648),{isMarked:y,mark:f}=r(111),{error:j,ERR_CB_MUST_BE_FUNCTION:w,ERR_MARK_NEW_WINDOW_FAILED:v}=r(312),x=k("SNOW_WINDOW",function(e){O(e)}),E=k("SNOW_FRAME",function(e){a(e)}),T=k("SNOW",q);function O(e,t,r){if(!r&&function e(t){try{let e=!y(t);return e&&f(t),e}catch(e){j(v,t,e)}return e(t)}(e)){T(e),function(e){let t=b(e);d(t,"load",function(){a(t)})}(e),s(e),o(e),n(e),l(e),c(e,"load"),i(e),u(e),p(e),m(e);for(let t=0;t<_.length;t++)if(_[t](e))return}t&&t(e)}let _=new h;function q(e,t){if("function"!=typeof e&&j(w,e))return;x(top),E(top);let r=1===g(_,e),a=t||window;O(a,e,!r&&a===top)}e.exports=q},58:(e,t,r)=>{let{error:a,ERR_NON_TOP_DOCUMENT_WRITE_BLOCKED:s}=r(312),{protectShadows:o}=r(373),n=r(586),{getFramesArray:l,shadows:c}=r(648),{getParentElement:i,getCommonAncestorContainer:m,slice:p,Object:u,Function:h}=r(14),{assertHTML:g}=r(328),d=r(228),b={Range:["insertNode"],DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln","execCommand"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]},k=u.getOwnPropertyNames(b);e.exports=function(e){for(let t=0;t<k.length;t++){let r=k[t],y=b[r];for(let t=0;t<y.length;t++){let b=y[t],k=u.getOwnPropertyDescriptor(e[r].prototype,b);if(!k)continue;let f=k.set?"set":"value",j="Range"===r,w="write"===b||"writeln"===b;k[f]=function(e,t,r){return function(){if(r&&this!==top.document)throw a(s,this);let u=p(arguments),b=t?m(this):i(this)||this;n(u),n(c),g(u);let k=h.prototype.apply.call(e,this,u);return d(l(b,!1)),d(u),o(!0),k}}(k[f],j,w),k.configurable=!0,"value"===f&&(k.writable=!0),u.defineProperty(e[r].prototype,b,k)}}}},459:(e,t,r)=>{let a=r(228),{removeEventListener:s,addEventListener:o,slice:n,Map:l,Object:c}=r(14),i=new l;e.exports=function(e,t){c.defineProperty(e.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:function(r,s,l){let c=s;return r===t&&(i.has(s)||i.set(s,function(){a(this);let e=n(arguments);s&&(s.handleEvent?s.handleEvent.apply(s,e):s.apply(this,e))}),c=i.get(s)),o(this||e,r,c,l)}}),c.defineProperty(e.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:function(r,a,o){let n=a;return r===t&&(n=i.get(a),i.delete(a)),s(this||e,r,n,o)}})}},312:e=>{let{Error:t}=globalThis,{from:r}=Array,a=Function.prototype.apply.bind(console.error,console);function s(e){let s=r(arguments);return a(s),new t(e)}function o(e){return`SNOW ERROR (CODE:${e}):`}e.exports={error:function(e,t,r,a){switch(e){case 7:return s(o(7),`blocking ${r} object:`,t,`of type "${a}" (not in allow list)`,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/87#issuecomment-1586868353",".");case 6:return s(o(6),`blocking extension attempt ("${t}") of framable elements such as provided`,r,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".");case 1:return s(o(1),"failed to mark new window:",t,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","error caught:",r);case 2:return s(o(2),'first argument must be of type "function", instead got:',t,".","therefore, snow bailed and is not applied to the page until this is fixed.");case 3:return s(o(3),'blocking open attempt to "javascript:" url:',t,"by window: ",r,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");case 4:return s(o(4),"blocking access to property:",`"${t}"`,"of opened window: ",r,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".");case 5:return s(o(5),"blocking html string that includes a representation of a declarative shadow:",`"${t}"`,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");case 8:return s(o(8),'blocking html string that includes a representation of a framable element with the "srcdoc" attribute:',`"${t}"`,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/???",".");case 9:return s(o(9),"blocking document.write\\ln action on a document that is not the top most document:",t,".","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/???",".")}},generateErrorMessage:o,ERR_MARK_NEW_WINDOW_FAILED:1,ERR_OPENED_PROP_ACCESS_BLOCKED:4,ERR_OPEN_JS_SCHEME_BLOCKED:3,ERR_CB_MUST_BE_FUNCTION:2,ERR_DECLARATIVE_SHADOWS_BLOCKED:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6,ERR_BLOB_TYPE_BLOCKED:7,ERR_HTML_FRAMES_SRCDOC_BLOCKED:8,ERR_NON_TOP_DOCUMENT_WRITE_BLOCKED:9}},111:(e,t,r)=>{let{Map:a,Object:s,Array:o}=r(14),n=new o,l=new a;e.exports={isMarked:function(e){if(!l.has(e))return!1;let t=s.getOwnPropertyDescriptor(e,"SNOW_ID");if(!t||!s.hasOwnProperty.call(t,"value")||"function"!=typeof t.value)return!1;let r=l.get(e);return t.value(n)===r},mark:function(e){let t=new o,r=s.create(null);r.value=e=>e===n&&t,s.defineProperty(e,"SNOW_ID",r),l.set(e,t)}}},14:(e,t,r)=>{let{runInNewRealm:a}=r(407);e.exports=function(e){let t=function(e){let{EventTarget:t}=e;return a(function(e){let{URL:r,Proxy:a,JSON:s,Attr:o,String:n,Function:l,Map:c,Node:i,Document:m,DocumentFragment:p,Blob:u,ShadowRoot:h,Object:g,Reflect:d,Array:b,Element:k,HTMLElement:y,Range:f,HTMLIFrameElement:j,HTMLFrameElement:w,HTMLObjectElement:v}=e,x={URL:r,Proxy:a,JSON:s,Attr:o,String:n,Function:l,Map:c,Node:i,Document:m,DocumentFragment:p,Blob:u,ShadowRoot:h,Object:g,Reflect:d,Array:b,Element:k,HTMLElement:y,Range:f,EventTarget:t,HTMLIFrameElement:j,HTMLFrameElement:w,HTMLObjectElement:v};return x.document={createElement:e.document.createElement.bind(e.document)},x})}(e),{document:r,Proxy:s,Function:o,String:n,Map:l,Node:c,Document:i,DocumentFragment:m,Blob:p,ShadowRoot:u,Object:h,Reflect:g,Array:d,Element:b,HTMLElement:k,Range:y,EventTarget:f,HTMLIFrameElement:j,HTMLFrameElement:w,HTMLObjectElement:v}=t;return h.assign(t,{iframeContentWindow:h.getOwnPropertyDescriptor(j.prototype,"contentWindow").get,frameContentWindow:h.getOwnPropertyDescriptor(w.prototype,"contentWindow").get,objectContentWindow:h.getOwnPropertyDescriptor(v.prototype,"contentWindow").get,createElement:h.getOwnPropertyDescriptor(i.prototype,"createElement").value,slice:h.getOwnPropertyDescriptor(d.prototype,"slice").value,push:h.getOwnPropertyDescriptor(d.prototype,"push").value,split:h.getOwnPropertyDescriptor(n.prototype,"split").value,nodeType:h.getOwnPropertyDescriptor(c.prototype,"nodeType").get,isConnected:h.getOwnPropertyDescriptor(c.prototype,"isConnected").get,tagName:h.getOwnPropertyDescriptor(b.prototype,"tagName").get,getInnerHTML:h.getOwnPropertyDescriptor(b.prototype,"innerHTML").get,setInnerHTML:h.getOwnPropertyDescriptor(b.prototype,"innerHTML").set,toString:h.getOwnPropertyDescriptor(h.prototype,"toString").value,getOnload:h.getOwnPropertyDescriptor(k.prototype,"onload").get,setOnload:h.getOwnPropertyDescriptor(k.prototype,"onload").set,getAttribute:h.getOwnPropertyDescriptor(b.prototype,"getAttribute").value,setAttribute:h.getOwnPropertyDescriptor(b.prototype,"setAttribute").value,removeAttribute:h.getOwnPropertyDescriptor(b.prototype,"removeAttribute").value,remove:h.getOwnPropertyDescriptor(b.prototype,"remove").value,addEventListener:h.getOwnPropertyDescriptor(f.prototype,"addEventListener").value,removeEventListener:h.getOwnPropertyDescriptor(f.prototype,"removeEventListener").value,getChildElementCount:h.getOwnPropertyDescriptor(b.prototype,"childElementCount").get,getFrameElement:h.getOwnPropertyDescriptor(e,"frameElement").get,getParentElement:h.getOwnPropertyDescriptor(c.prototype,"parentElement").get,getOwnerDocument:h.getOwnPropertyDescriptor(c.prototype,"ownerDocument").get,getDefaultView:h.getOwnPropertyDescriptor(i.prototype,"defaultView").get,getBlobFileType:h.getOwnPropertyDescriptor(p.prototype,"type").get,getPreviousElementSibling:h.getOwnPropertyDescriptor(b.prototype,"previousElementSibling").get,getCommonAncestorContainer:h.getOwnPropertyDescriptor(y.prototype,"commonAncestorContainer").get}),{document:r,Proxy:s,Object:h,Reflect:g,Function:o,Node:c,Element:b,Document:i,DocumentFragment:m,Blob:p,ShadowRoot:u,Array:d,Map:l,getContentWindow:function(e,r){switch(r){case"IFRAME":return t.iframeContentWindow.call(e);case"FRAME":return t.frameContentWindow.call(e);case"OBJECT":return t.objectContentWindow.call(e);default:return null}},stringToLowerCase:function(e){return t.String.prototype.toLowerCase.call(e)},stringStartsWith:function(e,r){return t.String.prototype.startsWith.call(e,r)},parse:function(e,r){return t.JSON.parse(e,r)},stringify:function(e,r,a){return t.JSON.stringify(e,r,a)},slice:function(e,r,a){return t.slice.call(e,r,a)},push:function(e,r){return t.push.call(e,r)},split:function(e,r){return t.split.call(e,r)},nodeType:function(e){return t.nodeType.call(e)},isConnected:function(e){return t.isConnected.call(e)},tagName:function(e){return t.tagName.call(e)},toString:function(e){return t.toString.call(e)},getOnload:function(e){return t.getOnload.call(e)},setOnload:function(e,r){return t.setOnload.call(e,r)},remove:function(e){return t.remove.call(e)},removeAttribute:function(e,r){return t.removeAttribute.call(e,r)},getAttribute:function(e,r){return t.getAttribute.call(e,r)},setAttribute:function(e,r,a){return t.setAttribute.call(e,r,a)},addEventListener:function(e,r,a,s){return t.Function.prototype.call.call(t.addEventListener,e,r,a,s)},removeEventListener:function(e,r,a,s){return t.Function.prototype.call.call(t.removeEventListener,e,r,a,s)},createElement:function(e,r,a){return t.createElement.call(e,r,a)},getInnerHTML:function(e){return t.getInnerHTML.call(e)},setInnerHTML:function(e,r){return t.setInnerHTML.call(e,r)},getChildElementCount:function(e){return t.getChildElementCount.call(e)},getFrameElement:function(e){return t.Function.prototype.call.call(t.getFrameElement,e)},getParentElement:function(e){return t.getParentElement.call(e)},getOwnerDocument:function(e){return t.getOwnerDocument.call(e)},getDefaultView:function(e){return t.getDefaultView.call(e)},getBlobFileType:function(e){return t.getBlobFileType.call(e)},getPreviousElementSibling:function(e){return t.getPreviousElementSibling.call(e)},getCommonAncestorContainer:function(e){return t.getCommonAncestorContainer.call(e)}}}(top)},583:(e,t,r)=>{let{stringToLowerCase:a,stringStartsWith:s,slice:o,Function:n,Object:l}=r(14),{error:c,ERR_OPEN_JS_SCHEME_BLOCKED:i}=r(312),{proxy:m,getProxyByOpened:p}=r(134);function u(e){let t=l.getOwnPropertyDescriptor(e.MessageEvent.prototype,"source"),r=t.get;t.get=function(){let e=r.call(this);return p(e)||e},l.defineProperty(e.MessageEvent.prototype,"source",t)}function h(e,t,r,l){return r(e),function(){let r=o(arguments),p=r[0];if(s(a(p+""),"javascript"))throw c(i,p+"",e);let u=n.prototype.apply.call(t,this,r);return u?!l&&r.length<3?u:m(u):null}}e.exports=function(e){l.defineProperty(e,"open",{value:h(e,e.open,u,!0)}),l.defineProperty(e.Document.prototype,"open",{value:h(e,e.document.open,u,!1)})}},134:(e,t,r)=>{let{Object:a,Proxy:s,Reflect:o,Map:n}=r(14),{error:l,ERR_OPENED_PROP_ACCESS_BLOCKED:c}=r(312),i=new n;function m(e){return i.get(e)}e.exports={proxy:function(e){let t=a.create(null);if(a.defineProperty(t,"closed",{get:function(){return e.closed}}),a.defineProperty(t,"close",{value:function(){return e.close()}}),a.defineProperty(t,"focus",{value:function(){return e.focus()}}),a.defineProperty(t,"postMessage",{value:function(t,r,a){return e.postMessage(t,r,a)}}),!i.has(e)){top.SNOW_WINDOW(e);let r=new s(t,{get:function(t,r){let a=o.get(t,r);if(o.has(t,r))return a;if(o.has(e,r))throw l(c,r,e);return a},set:function(){}});i.set(e,r)}return m(e)},getProxyByOpened:m,forEachOpened:function(e,t){for(let r of i.keys())e(r,t)}}},278:(e,t,r)=>{let{Object:a,slice:s,Function:o}=r(14),{proxy:n}=r(134);function l(e,t){let r=a.getOwnPropertyDescriptor(e[t].prototype,"window"),s=r.get;r.get=function(){return n(s.call(this))},a.defineProperty(e[t].prototype,"window",r)}e.exports=function(e){var t;e?.documentPictureInPicture?.requestWindow&&(e.documentPictureInPicture.requestWindow=(t=e.documentPictureInPicture.requestWindow,l(e,"DocumentPictureInPictureEvent"),l(e,"DocumentPictureInPicture"),async function(){let e=s(arguments),r=await o.prototype.apply.call(t,this,e);return r?n(r):null}))}},373:(e,t,r)=>{let a=r(228),{getFramesArray:s,shadows:o}=r(648),{Object:n,Function:l,isConnected:c}=r(14);function i(e){for(let t=0;t<o.length;t++){let r=o[t];(!e||c(r))&&a(s(r,!1))}}e.exports={hookShadowDOM:function(e){let t=n.getOwnPropertyDescriptor(e.Element.prototype,"attachShadow");t.configurable=t.writable=!0;let r=t.value;t.value=function(e){let t=l.prototype.call.call(r,this,e);return o.push(t),i(!0),t},n.defineProperty(e.Element.prototype,"attachShadow",t)},protectShadows:i}},294:(e,t,r)=>{let{trustedHTMLs:a}=r(648),{Object:s,Function:o}=r(14);e.exports=function(e){if(void 0===e.TrustedTypePolicy)return;let t=s.getOwnPropertyDescriptor(e.TrustedTypePolicy.prototype,"createHTML");t.configurable=t.writable=!0;let r=t.value;a.push(e.trustedTypes.emptyHTML),t.value=function(e,t){let s=o.prototype.call.call(r,this,e,t);return a.push(s),s},s.defineProperty(e.TrustedTypePolicy.prototype,"createHTML",t)}},716:(e,t,r)=>{let{Object:a,Array:s,getBlobFileType:o}=r(14),{error:n,ERR_BLOB_TYPE_BLOCKED:l}=r(312),c="KIND",i="TYPE",m="Blob",p="File",u="MediaSource",h=new s,g=new s("","text/javascript","text/css","application/javascript","application/css","image/jpeg","image/jpg","image/png","audio/ogg; codecs=opus","video/mp4","application/pdf","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");function d(e,t){return function(r,s){let n=new e(r,s);return a.defineProperty(n,c,{value:t}),t!==m&&t!==p||a.defineProperty(n,i,{value:o(n)}),h.push(n),n}}e.exports=function(e){(function(e){let t=e.URL.createObjectURL;a.defineProperty(e.URL,"createObjectURL",{value:function(e){return h.includes(e)&&function(e){let t=e[c];if(t===m||t===p){let r=e[i];if(!g.includes(r))throw n(l,e,t,r)}}(e),t(e)}})})(e),function(e){let t=e[p],r=d(t,p);function s(e,t){return r(e,t)}a.setPrototypeOf(t.prototype,s.prototype),a.setPrototypeOf(s.prototype,e[m].prototype),e[p]=s,a.defineProperty(t.prototype,"constructor",{value:s})}(e),function(e){let t=e[m],r=d(t,m);function s(e,t){return r(e,t)}a.setPrototypeOf(t.prototype,s.prototype),e[m]=s,a.defineProperty(t.prototype,"constructor",{value:s})}(e),function(e){let t=e[u],r=d(t,u);function s(e,t){return r(e,t)}a.setPrototypeOf(s,t),e[u]=s,a.defineProperty(t.prototype,"constructor",{value:s})}(e)}},648:(e,t,r)=>{let{tagName:a,nodeType:s,slice:o,Array:n,parse:l,stringify:c,Node:i,Document:m,DocumentFragment:p,Element:u,ShadowRoot:h,getContentWindow:g,getDefaultView:d,getOwnerDocument:b,stringToLowerCase:k,Object:y}=r(14),f=new n,j=new n;function w(e){return f.includes(e)}function v(e){if(w(e))return h;switch(s(e)){case i.prototype.DOCUMENT_NODE:return m;case i.prototype.DOCUMENT_FRAGMENT_NODE:return p;default:return u}}function x(e){let t=k(e);return"iframe"===t||"frame"===t||"object"===t||"embed"===t}function E(e){if(!e||"object"!=typeof e||s(e)!==u.prototype.ELEMENT_NODE||w(e))return null;let t=a(e);return x(t)?t:null}function T(e){return n.isArray(e)||(e=new n(e)),e}function O(e,t){let r=!1;for(let a=0;a<t.length;a++)e.includes(t[a])||(e.push(t[a]),r=!0);return r}e.exports={getDeclarativeShadows:function(e){return v(e).prototype.querySelectorAll.call(e,"template[shadowroot]")},makeDescriptorSetter:function(e,t){let r=y.create(null);return r.value=t,function(t){y.getOwnPropertyDescriptor(t,e)||y.defineProperty(t,e,r)}},toArray:T,isTagFramable:x,getOwnerWindowOfNode:function(e){return d(b(e))},getContentWindowOfFrame:function(e){return g(e,E(e))},getFramesArray:function(e,t){let r=new n;return null===e||"object"!=typeof e||j.includes(e)||!function(e){if(w(e))return!0;let t=s(e);return t===u.prototype.ELEMENT_NODE||t===u.prototype.DOCUMENT_FRAGMENT_NODE||t===u.prototype.DOCUMENT_NODE}(e)||(O(r,o(v(e).prototype.querySelectorAll.call(e,"iframe,frame,object,embed"))),t&&O(r,T(e))),r},getFrameTag:E,shadows:f,trustedHTMLs:j}},744:(e,t,r)=>{let{runInNewRealm:a}=r(407),{Map:s,toString:o,stringStartsWith:n,Blob:l}=r(14),c=new s,{createObjectURL:i,revokeObjectURL:m}=URL;e.exports=function(e){e.URL.revokeObjectURL=function(e){let t=c.get(e);return t&&(m(t),c.delete(t)),m(e)},function(e){let t=e.Worker;e.Worker=function(e,r){let s="string"==typeof e?e:o(e);return n(s,"blob")?new t(function(e){if(!c.has(e)){let t=`(function() { Object.defineProperty(URL, 'createObjectURL', { value: () => { throw new Error(\`
BLOCKED BY SNOW:
Creating URL objects is not allowed under Snow protection within Web Workers.
If this prevents your application from running correctly, please visit/report at https://github.com/LavaMoat/snow/pull/89#issuecomment-1589359673.
Learn more at https://github.com/LavaMoat/snow/pull/89\`) }}) }())

`+a(function(t){let r,a=new t.XMLHttpRequest;return a.open("GET",e,!1),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&(r=a.responseText)},a.send(),r});c.set(e,i(new l([t],{type:"text/javascript"})))}return c.get(e)}(s),r):new t(s,r)}}(e)}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return s[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t=l(352),r=l.n(t),Object.defineProperty(a=window,"SNOW",{value:function(t,r){e(t,r||a)}}),e=r(),a!==top&&(e=top.SNOW,a.SNOW(()=>{},a))})()}),l.push(e=>{!function(){let e=console.log.bind(console),t=!n.document;Object.defineProperty(n,"SCUTTLER",{value:(r,a)=>{t?a(r):n.SNOW(t=>{e("Snow detected a new realm creation attempt in MetaMask. Performing scuttling on new realm.",t),a(t)},r)}})}()}),Object.freeze(l),r.p="",(()=>{r.b=void 0!==o&&o.baseURI||n.location.href;var e={9121:0};r.f.j=(t,a)=>{var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)a.push(s[2]);else if(9121!=t){var o=new Promise((r,a)=>s=e[t]=[r,a]);a.push(s[2]=o);var n=r.p+r.u(t),l=Error();r.l(n,a=>{if(r.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+` failed.
(`+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,s[1](l)}},"chunk-"+t,t)}else e[t]=0},r.O.j=t=>0===e[t];var t=(t,a)=>{var s,o,[n,l,c]=a,i=0;if(n.some(t=>0!==e[t])){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(c)var m=c(r)}for(t&&t(a);i<n.length;i++)o=n[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},a=globalThis.webpackChunk=globalThis.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{let e=Object.create(null);e.root="$root$",e.idmap=[["$root$",[594450,299150,237381,299150,796213,217768,217768,796213,886418,530953,530953,886418,777544,36915,36915,777544,311734,916379,311734,378831,572738,378831,542780,16979,26319,797095,680440,680440,177540,914665,177540,932791,76184,6877,500855,229976,841993,674156,846973,362705,362705,858572,197434,197434,587279,482903,482903,115726,671054,671054,480021,823803,823803,650710,520803,520803,108120,869949,869949,942566,59555,59555,659212,967746,967746,105557,871008,871008,787631,848896,848896,499985,300652,300652,964451,5696,5696,659677,555974,721127,733477,507148,369436,369436,369436,369436,816402,816402,816402,816402,686898,686898,686898,686898,32667,32667,32667,32667,30943,30943,30943,30943,205009,205009,205009,205009,740953,740953,740953,740953,226535,226535,226535,226535,586297,586297,586297,586297,284999,284999,284999,284999,434062,434062,434062,434062,149235,149235,149235,149235,636925,636925,636925,636925,640469,640469,640469,640469,218033,218033,218033,218033,218033,864451,894521,894521,894521,894521,894521,378335,9510,9510,9510,9510,9510,866910,796404,796404,796404,796404,796404,985544,116516,203531,967110,474631,285624,956738,70846,994922,986693,23560,740764,591859,775770,692796,758285,594768,397937,421008,809873,595765,120572,630496,732121,127757,910940,796407,312757,783026,459565,415051,586651,786814,323131,454159,739451,6651,221527,459940,41656,335270,502981,594794,376213,254518,115809,979303,514218,822376,983821,838560,454810,607854,628695,934424,743098,36430,312902,823640,88014,68812,429864,699533,649403,598905,525468,995629,363786,613545,460258,713317,401607,901903,650981,41728,186417,262279,682801,290859,343111,703382,95949,786688,268405,622172,990970,4565,511042,75695,436821,459396,730319,961214,163611,993164,286593,489876,46152,634730,933330,737445,556079,566580,154961,893476,673907,82911,740863,111725,865505,809654,421046,732537,803200,724253,277318,825267,900106,278798,65283,88978,271912,55742,897654,602702,977378,910626,557213,670478,160628,141713,249957,493305,147487,922347,878208,109889,820831,37837,181921,6324,910413,87796,688843,106875,939679,495168,310867,797424,114917,799846,614855,680094,61625,335,133598,155710,556109,695963,914431,9220,908199,775150,829802,766116,439413,742673,186186,782219,871895,627009,255018,550795,485870,943297,414770,587028,254890,401981,530868,542527,155429,434306,906665,917429,295704,659119,719928,925942,37192,640764,738945,115960,32501,599433,891765,464865,366092,833342,796110,607702,203619,150517,587109,399362,3460,74296,476801,513258,565758,367149,24094,542565,917073,393675,707502,583767,854269,796474,774501,922394,694615,4186,841860,364209,368891,892800,441949,329519,931352,546800,894873,571086,583053,991625,198708,251327,524313,284232,674061,199438,529480,91448,359807,221154,773990,324784,232567,78458,947162,216729,76216,936431,234959,547010,311232,596842,722513,247929,307890,667911,990285,760928,777012,289341,807424,507049,331413,5973,54160,130872,58401,199861,14919,189389,905366,596554,366456,706222,820949,864348,319838,332203,333188,729671,136109,829108,719376,298677,65756,715891,763360,947082,59121,235643,562429,503448,41519,109312,96146,402280,427615,685555,968559,302884,198451,587569,717504,688355,455550,331846,241759,116274,16961,495389,452288,526194,366932,745385,890944,250862,96673,798422,320889,988368,186747,324746,202929,120693,232937,3417,42594,649994,866621,189620,864173,821136,608291,316864,288768,571371,775092,15165,52600,430606,130750,257521,381315,196051,392107,156721,936389,609043,233001,648883,398225,270671,177348,271691,68920,992332,490565,468871,165139,326364,208234,419277,574013,78400,120209,506672,133848,189945,117580,169666,808576,38029,19836,185311,623236,152411,420990,83819,511037,707863,302781,178096,246683,306970,624985,454091,858621,462284,890491,678742,401085,538218,291146,891732,297214,638113,680573,925153,326457,491359,323195,841793,663185,117455,66399,124431,283017,722361,559474,582361,762048,767946,806987,222729,847681,908734,11188,605565,706229,49392,380583,91994,408161,133516,130723,997222,373824,618373,526126,512203,658268,28017,985130,696439,28872,286989,688713,457972,648975,792706,492061,527512,45251,466758,251457,854700,987606,329939,80296,212589,665618,509855,25540,490073,847566,73899,388511,60626,368729,904196,208595,866262,91245,475304,990295,317194,951508,945513,775458,139247,453688,756733,428710,232611,472652,451041,166221,146888,72435,948726,486073,118308,194175,596786,494085,63360,669642,600663,45500,7249,469134,71147,701728,927379,634521,267935,736053,99301,206865,393695,186243,311925,433462,1051,140580,562945,295282,724391,982336,908717,929343,504714,285770,513017,132476,159673,479036,767283,570702,425037,727200,773703,914853,575125,301416,812667,481686,72417,950852,651988,415506,219661,521824,217862,204267,405272,70213,868418,519735,377588,606481,830654,830755,85892,938247,112021,687208,353531,363175,135221,256758,934066,201729,295716,156187,80321,72246,766142,950709,489352,557023,841130,604784,34038,744349,303646,963096,720299,657027,133635,532639,53577,170330,613519,226488,35941,206841,826300,130111,691901,495946,703885,62e4,29800,774643,227406,390049,693124,841914,627375,64099,396944,99500,880233,815358,53987,252783,870480,846589,655746,541111,654027,435025,157350,999077,653176,595799,882978,315697,92564,346200,163843,449566,407627,391032,72196,193761,536850,173319,422760,696469,639393,86678,934011,878652,559289,271613,627920,952099,163993,951998,637673,137068,727343,552954,191557,10264,27310,647635,742464,668845,962474,162015,73628,203154,299097,193590,761179,271294,271395,947216,590909,388602,46639,456364,473321,658502,644907,660301,962464,604034,715863,900186,788175,574618,254467,590938,424408,113276,57063,880273,826876,764477,120556,333304,568740,645930,268804,375262,241912,26956,962416,513348,490335,139668,262541,179113,105338,213406,158637,124397,245749,39377,363910,703198,380855,69244,381969,941503,181443,330242,113848,505071,691284,254629,70935,38950,712116,546219,788152,808069,580752,682988,89507,261645,445272,116839,670429,119278,232851,425348,292830,416817,105653,813321,991718,858753,987181,654019,510168,976809,702176,23471,222236,541255,592492,586229,687209,921141,777006,659579,603880,392838,80769,440900,606319,842658,476857,189332,859915,530189,608182,618693,880909,532878,645999,133714,692322,132693,185734,335267,37855,359902,661287,156889,698891,833621,471326,812095,954376,97813,289036,927166,559855,220893,656270,491016,858323,247404,709085,499763,329904,153738,879271,705363,332764,4568,930353,784402,288612,196201,158332,208019,701191,612650,401073,585844,939284,443377,784289,24394,426021,118190,138454,344531,862760,38439,180415,878638,706890,327731,583078,117947,299165,610332,78513,648954,568185,538874,938591,337214,482747,276602,535272,202431,760805,386522,200058,835729,300425,732546,578173,45294,41073,439874,195993,299316,159472,176919,355852,432155,725115,717486,313418,882597,696054,712383,793997,506484,617209,32002,166852,638063,259634,909521,16026,565654,44061,30642,335517,815108,22831,911361,126370,15744,789763,879958,978512,918739,874029,282078,622999,764130,541984,243549,802870,836658,171421,519136,365283,257429,816752,969402,21795,222260,930171,541909,336960,348809,610378,459766,294935,826674,666499,233479,976907,496775,899869,130331,682428,324357,374064,909478,584358,437628,782747,82405,475308,915579,776500,57562,305739,375074,411969,247767,984679,969716,100073,781654,857665,424727,157102,636968,806201,813897,434268,515168,720063,466213,940337,538710,36696,294777,550967,441670,104728,186495,277315,68878,428217,181726,813939,157794,25860,396773,959588,508115,16809,388434,123455,898537,479248,655204,356333,119023,323358,442722,937237,635876,853927,875532,488538,365337,968565,431534,870721,692464,379531,992396,516868,418635,657218,285063,739354,116255,720578,57279,107804,915363,59904,214597,595901,267208,504580,353735,403526,72617,114533,983916,783574,684289,867458,578423,365919,176570,29963,572318,969917,896832,564122,866766,188199,738455,783714,28369,882584,126142,548631,300704,596829,846327,561417,683683,42824,794921,59862,875450,474787,55638,306585,114168,842283,163305,637720,632894,727300,329345,394678,233651,233043,383280,72828,748349,310728,805921,477082,711413,264070,544942,24296,580832,469885,167134,570578,984409,713633,955414,676073,766527,763797,791791,37557,167643,159315,260199,403225,221656,916595,926745,948569,42395,558203,272342,811437,105049,281753,434296,524512,334111,333592,946802,309750,783431,666766,379738,863294,606965,828126,847258,443820,763073,447238,135047,809745,768344,438376,497825,523414,909122,507335,893638,231769,339829,312787,220464,523162,57260,596396,270642,826042,34121,913620,532747,432514,658684,322244,859504,302876,430900,87488,740674,757559,163636,916174,219500,309281,926266,461386,793923,846442,189596,37902,285412,92513,658805,350241,452614,86664,97695,46847,542429,778368,824240,439748,328436,441,548764,581207,166879,225813,14600,766372,536827,243160,768132,901497,123391,766322,628367,83679,836293,849177,275148,836441,652119,378247,92326,304002,535411,134727,21873,749153,941311,518706,592990,481394,855769,777732,440976,518833,422132,239128,103321,659173,825133,87998,763220,685780,31234,988600,289750,201686,872582,92786,601504,95180,271641,351309,220693,165972,155180,887717,15151,50468,503843,30860,14299,173674,204325,302579,500590,744093,72297,631275,383687,184790,320821,13296,319424,362418,626438,724180,883775,997595,896559,694068,84701,326563,229540,143918,504732,399151,250095,920499,745e3,948835,483596,317678,866900,738663,147278,914515,559167,973802,179946,440369,994682,437173,502968,137937,599645,572640,156760,577683,614852,922549,549991,929366,906153,536266,712587,198717,162560,431423,575214,300047,277416,473064,67529,406044,553670,588498,373472,387131,336576,739472,449024,153068,193969,477738,797300,444837,663195,510172,914878,389461,723605,870445,516776,969124,229640,763548,27223,100008,896090,517299,322064,426195,942236,861029,991074,326162,603534,86428,58925,736170,610696,379277,806084,818881,647168,512664,896336,247392,795223,873702,89724,975269,364679,882409,639898,264198,78052,285217,478976,221349,980062,829272,569337,471641,473907,807720,549169,409823,168798,306639,698694,426939,398011,454704,630841,391677,820311,387192,692002,762550,669909,943202,707455,158374,173611,886376,637330,988110,182747,121216,781342,771669,448350,713700,52918,391163,186362,227980,108933,182020,858067,215353,654352,355123,266923,465243,941581,824017,309172,72e3,424075,816467,774153,523891,130920,157479,821781,751557,523311,998879,611770,80583,195439,709971,776323,7815,531728,487135,791796,97719,93769,651095,890194,880416,990105,178665,641762,107580,911455,827460,195603,170951,981909,663870,110303,425462,311441,172153,102190,989433,899497,335683,956861,313484,838517,228816,751741,918540,87314,419309,498784,947276,258380,904346,606760,650836,938685,935603,332647,160087,904247,138409,763639,22677,771201,920342,542159,502459,832430,118670,410111,310311,599948,777051,240497,936854,766597,770418,336795,580445,212528,369840,3625,458899,864106,483507,706671,333259,706537,134272,924063,394791,963273,468041,365689,831329,332427,383358,281726,532082,706439,968055,954870,617936,66760,748811,619470,984423,584243,662090,312710,943804,439281,646241,476407,553346,149861,348264,175150,92491,299211,205136,25183,504622,143472,936112,910606,445495,340737,785449,426613,345949,564260,866708,654639,7533,297075,345661,338865,853249,510353,776320,220562,916926,507003,210509,816519,810964,860603,334205,600831,82353,477055,76318,460383,883931,640655,26973,65725,865797,204427,102320,414580,507321,628478,92627,967142,769682,935614,924056,920540,291323,703303,639498,671656,668852,294150,164684,2920,983556,426639,30294,507837,306814,349723,481382,901773,642350,443068,764670,15392,753808,782895,301622,86907,760994,623654,677890,14029,644757,974280,73579,72187,930626,334823,197875,221526,593130,473377,589562,374195,870087,957948,309114,235029,503344,280821,165937,968255,210771,161413,960178,84955,672911,628530,341616,886125,123231,309950,488862,369920,278332,556354,137622,731409,668673,918227,721755,834923,748717,590151,621358,46127,242100,282835,920122,202561,957854,963266,982287,114274,683996,598667,572356,371052,68772,250286,112094,841612,242326,661692,992582,341595,832670,217865,934899,929371,263022,858909,560094,590446,35091,763985,209234,570330,156955,783063,145153,100900,657624,894949,90301,612903,598607,820736,768829,441308,620852,558236,166532,793735,885276,656685,270692,443634,996788,734221,353660,641334,973629,982773,950230,91909,262371,656252,382583,865210,591058,102609,340687,410716,738903,754720,658718,462893,410931,825066,55273,136447,25102,120925,356743,64006,292106,518992,318443,934644,747598,23483,932542,768427,585670,923381,788932,564570,96537,764960,484302,20317,825361,357470,809581,713117,715390,438797,850089,256080,914475,901506,862262,23299,524670,854029,373889,810814,361705,848587,560304,458606,451069,456641,201242,138623,710362,185433,145034,83014,401781,2299,913702,970043,92532,819157,274796,260723,779865,646826,507206,67957,312332,702802,439786,144944,238886,784108,730597,985728,855451,315282,991697,224610,633090,437313,423694,482133,37408,914827,667202,389610,286418,766707,747707,540866,990087,139842,185127,810462,860007,603742,662509,980385,244894,31213,599224,796178,997100,202565,909904,481654,202064,902635,669217,25038,735311,946502,68806,705106,256638,240066,830914,757923,421203,248550,26133,403416,551044,835391,334265,114174,439117,596472,536084,870543,64858,789151,247924,378456,116048,936276,187090,689786,854912,920038,344617,254042,491305,937746,756509,593226,403634,27906,270006,532690,300046,406639,740366,42768,152336,269256,429184,610923,638228,25456,11795,401138,634419,558726,673265,604239,295494,136088,527011,449367,331651,624250,189241,248866,206538,635349,497432,403485,738215,650,458416,730280,116882,285749,994864,914703,891545,406861,123784,906588,805326,120054,649071,772294,52599,266692,815614,245680,520418,876747,839975,105967,119789,89340,88905,907569,702458,211314,633723,923682,782399,677245,144988,847993,648210,570601,423262,227481,577237,580585,695094,331134,667551,282038,745095,790882,662664,828305,227323,479376,676525,635607,784671,117567,962857,790804,271525,747835,108178,108439,622922,831553,943971,168671,303727,726607,992377,234958,912231,158175,536188,759595,493063,453450,785859,537238,996526,251087,325135,770845,201631,286434,515923,702294,487429,445274,283042,756497,641315,556888,357594,806911,787719,861710,631672,177505,13176,818906,739164,772638,155862,749965,492949,228153,744239,704901,887281,372171,131666,934381,920623,545791,755047,456401,815841,785935,132019,146759,934460,411449,321194,812553,944833,865985,821436,466808,951571,876488,274709,586614,542386,404499,225761,562719,829140,812582,99981,73095,221677,652499,956853,726999,498603,743771,656615,536529,288827,814393,41601,324457,47913,807895,303879,565861,992565,830636,332471,666011,181231,825617,186943,990790,17967,854598,16415,696128,138915,652167,889767,866625,193945,671839,228677,571745,801121,554376,705195,153753,324039,377558,660063,22335,319961,281995,413700,652318,528804,956517,255301,174520,624404,778063,860339,58631,731136,687507,775072,239231,832678,697141,745766,657754,394579,922047,397361,118834,178712,614323,253042,245806,815583,816245,866991,736172,458156,153059,689851,193035,540603,58836,447614,132516,244174,732623,960117,832514,204502,724194,993051,297292,649943,428050,486840,596364,67661,17e4,22793,213650,475274,977222,92531,349450,705406,647731,962986,105734,543007,840374,780555,627038,825461,829627,323673,2899,920117,299871,372363,294938,907606,153294,46164,253814,626481,850926,516020,434424,198588,522442,247938,63681,730027,776141,939195,518332,55035,565478,307136,576384,373177,543246,160873,581843,920427,808227,646289,24809,987701,240735,392667,758363,496017,68102,591049,724803,293941,626667,620065,285053,4142,762430,437622,684835,29667,377495,574193,517186,59939,510995,159307,333332,71353,811940,996697,906283,616212,507475,499749,459979,804154,361734,413661,325870,709723,783169,733814,382043,525721,435602,110927,940962,271077,597436,909344,115884,396200,734845,514981,227600,135974,668795,479271,157234,815479,926912,999156,764141,631442,411419,377818,58017,163310,503157,146802,21211,599211,429866,888319,469964,248463,378036,241144,752271,465339,878202,489076,87191,488848,655850,167105,863470,910689,935892,639155,292485,982928,958695,859830,355816,24831,88320,509486,411360,596414,923286,497272,269243,857243,811077,388064,882016,576988,665309,43089,364756,821858,483801,590656,85965,354779,194181,219115,568648,94448,365161,436232,680245,914125,807605,75433,420151,738012,912047,34899,963493,263294,314876,794857,362020,615924,997403,894123,998025,212814,598649,83432,467907,41937,556097,544813,598480,511265,178121,950887,759027,156852,299401,16512,40926,353183,295857,197067,133195,480242,909506,423533,926412,676864,974672,906309,390808,634547,54724,562421,181768,731728,801516,210462,388296,617651,32052,483831,760264,259016,953118,858863,595468,444504,51953,969898,291319,492784,20760,802184,271326,943398,146194,97740,818798,936007,161863,905687,358254,121854,962331,734381,377946,290194,885830,585134,137627,722198,41348,577279,84944,442100,725411,196425,435671,90260,608416,911131,321505,725613,99027,375922,786881,123073,895280,201044,8737,264607,953449,145502,218924,927737,217702,235807,330965,793174,911552,137557,734910,424898,251845,153030,831703,91050,17198,777040,953215,411290,593258,553038,220372,287867,443900,70435,799580,783566,483405,125393,517452,199448,308203,349465,77691,160099,389097,11253,475252,253529,622713,673913,911134,636447,198444,729866,303643,886363,480031,737117,563632,29472,283003,619745,489019,17079,84849,774281,240314,255544,588298,112604,377163,780829,331351,545149,312680,672632,646552,857172,878875,237997,419362,212290,529023,71427,59293,667436,209284,146188,358623,358343,34045,762115,520169,514753,801689,429780,546243,580253,703346,762526,152256,80127,134236,367611,86111,518684,430679,439122,919074,376012,729688,278457,683,959614,258833,561864,798806,34125,529247,766204,50550,361507,904573,201249,440770,362254,182824,298789,107381,373492,17856,388205,148496,478420,105522,25990,73338,882298,130780,64478,728620,126660,728497,728284,509289,125894,700823,554218,158221,170455,634120,435e3,60572,811491,187306,917214,145865,48750,383073,172165,954726,678863,272491,705098,401515,521128,411926,757011,770399,57593,127565,411930,970945,715276,99643,523315,762661,530690,553607,942895,895175,545423,374753,222779,97966,308734,454293,20450,406515,770574,934623,102985,589022,273573,899210,889814,581716,352412,281351,204283,81892,606308,268282,391327,618277,251474,827370,943912,756098,821931,568893,725736,531004,46754,724270,220313,632690,327253,273370,687165,514800,237106,606807,947266,435210,761649,894193,288157,64235,704292,279623,222455,639698,150350,529244,205818,954614,771042,11775,104429,255734,170232,290944,41488,130428,192449,741212,618052,224052,705120,19684,748049,566805,24609,4515,608972,302684,136630,442938,725103,639362,868143,162444,849443,67606,819736,296053,185878,32637,944674,997783,656054,197852,426171,480753,317095,376461,637312,483388,479731,909582,826686,55768,349028,573873,431319,716297,243403,385672,405970,944976,825745,898837,475281,704588,751804,544952,367566,378442,614547,551518,256718,19155,65036,980632,737513,662067,71707,436954,958709,220202,13126,37083,625546,931025,567064,31309,669165,919388,341331,291680,454735,590343,614821,452489,157944,904445,266391,331276,280889,739646,440193,697136,63682,98035,988876,606736,351651,433332,473025,923484,392503,768388,79194,679718,320847,928780,944348,542492,432142,880332,845806,109704,826305,192832,685986,8024,882921,977064,819219,376084,289561,439984,122536,588575,975908,319381,127015,915785,375185,692499,298191,762780,56675,93534,764540,473625,892267,970962,785015,318630,354699,554606,914826,237837,733686,34474,676432,404186,815629,837287,890154,812994,127388,307698,725873,744850,531325,75514,749035,383145,2844,586677,886705,169727,863459,690554,140775,629273,189692,397773,107886,440952,596790,100573,851987,909381,508112,793574,311736,773318,250594,296780,989288,779719,7103,428484,577300,161356,972866,35986,897360,384043,401870,278441,303124,65896,711994,212971,844418,932586,758438,624720,585928,794646,113366,437054,21920,273978,189726,957604,84886,237154,915742,63342,768110,621902,926791,943819,515405,720698,916272,15289,495749,711540,904678,842004,983736,493816,521607,797056,400566,145102,429758,341695,950913,451249,738,431877,665028,283875,262667,743207,383026,589642,332028,456827,653098,587,216415,188221,718246,231728,579847,365377,731047,858032,438749,626041,175436,655335,587295,767807,377109,750001,170237,171229,18361,498624,328746,422909,66305,621856,117253,484157,300833,18921,287961,521276,594108,910919,756036,934812,599962,236538,482442,521640,753908,515672,71239,856034,595502,459837,703279,681292,874088,29563,229880,780671,658152,90317,386691,954349,704169,770100,156549,465594,813366,984688,686834,972238,435956,625526,641316,765124,864468,221628,887590,575774,638940,732006,674924,80931,746828,370236,530980,185331,386019,251239,520143,880009,154565,606122,693281,487115,457965,424068,337735,823673,73050,854353,4486,317021,368872,851389,148887,460333,286545,697179,871251,767248,682685,745332,881061,394749,772961,173030,794360,277336,94630,22249,899443,956166,65068,831125,98703,873084,266180,599425,80339,690109,810649,965639,974535,92988,185615,142014,111644,221475,318808,280560,50133,907109,139833,808681,616245,194735,357801,15250,827013,434024,352136,836401,774243,309037,715386,921836,83555,128567,409325,253628,637450,238304,768968,797948,517846,872200,426898,868415,455478,724935,748222,7215,147133,543960,921828,972896,948362,700159,285133,22958,45181,5685,511357,16467,715918,818658,103651,364289,27057,537127,863373,208459,881245,832065,586577,451083,487208,208566,339566,814086,414744,37315,501100,998125,420322,277121,769544,102905,123556,185517,972380,801189,440776,585453,578926,954280,5281,806625,589569,260677,414410,19374,653069,720262,469496,84852,430167,931507,951903,779370,682566,805626,533132,698208,324143,306214,564039,711615,938742,575483,929354,220566,398785,706990,266892,821328,787544,399431,273136,580610,110814,382045,456825,591425,298298,635299,911485,213751,66681,656317,389316,277933,228394,669378,691897,854110,320337,122175,788614,148249,640421,825057,555426,639049,4930,879429,303374,826596,691241,809120,88087,680927,6690,396132,479447,705612,379049,930574,946235,9805,39321,579303,504423,848843,813908,493059,532912,514919,834018,658924,81170,43710,618932,165851,367058,464478,389726,147599,153692,782113,254735,458261,451881,866567,103261,964779,982587,236940,86965,477232,143394,374470,561092,446068,295627,339169,567230,998797,858928,138865,675318,415221,812045,164983,182721,118997,840483,657700,238175,458446,97441,9123,947290,299539,9943,31342,493070,337736,838269,520124,333530,6121,945519,865137,200006,67093,328861,599e3,780991,534115,668751,323291,908355,394810,361713,296260,784598,491698,104758,711457,904438,880724,313535,288166,33922,119681,928062,422113,742052,530932,8456,521981,71826,643246,965657,776598,568615,711023,716229,227894,912445,482118,61283,331822,468528,158259,890051,577576,876272,136775,218196,438174,402735,564993,824781,748792,200266,52212,535177,972962,272721,815953,706902,398778,145657,837844,78714,29438,828787,710100,841929,674382,504507,684936,16750,922749,113337,463885,183876,746769,436892,638846,345297,334836,981834,736552,198956,45779,446649,474185,532115,724593,436199,725528,850891,543427,946251,157395,338184,264013,193055,489220,178100,602532,622784,700850,424073,28508,390340,373748,429120,697363,240854,544187,140778,393980,226183,788289,853619,646178,43588,286524,747485,386645,573713,559873,526800,661377,762418,785591,607335,603735,318768,497023,737739,312641,17513,742303,381122,422607,261523,425195,619454,858493,979536,90004,716004,290185,712177,575510,237095,778093,236669,743241,633785,815268,194351,90507,563933,583064,507096,169889,81598,229326,453643,810437,886067,522317,665541,494704,355933,163723,166133,523391,4374,914022,900463,332414,782343,472961,78766,760831,105214,327563,696778,275024,267782,393740,401864,532203,638927,493404,493332,544323,841759,960315,946554,309724,107230,937403,538093,574356,541417,574211,274584,141057,501056,983375,454744,160461,950659,489060,175449,725018,188175,99490,592181,712894,108116,782189,401379,933520,116372,196358,748994,745671,732186,906980,149040,885175,60046,387651,923956,260184,691232,772409,247755,376906,465188,518307,464183,7500,194510,949320,678606,885711,603343,560670,810839,434718,916824,629456,918935,435766,9038,851887,236622,279323,312584,711024,110407,859689,106828,981344,156540,792570,234950,842856,273404,397171,830377,60192,476637,852991,748364,438835,767902,633683,306650,829751,278072,957449,972160,517899,420736,567637,550141,237219,81523,336680,667629,139354,313847,496324,488326,341441,461487,170904,367699,440490,117903,414774,714879,378033,764467,892014,321602,497305,880687,253573,294151,167472,84274,3139,275059,682705,124599,735929,924066,888867,896595,117235,964816,637778,23565,790453,448138,581831,875258,253127,588917,344827,614781,314793,711055,959519,609949,244970,225087,900,773417,540993,431218,572213,789006,320059,995477,300110,974209,969617,759791,209062,577205,20429,136426,791774,596271,757330,412522,895462,269185,345791,16930,139284,732257,529944,439113,79443,276717,539322,44135,519740,600540,591197,809726,863339,338028,425123,236123,122505,234852,409629,437165,184899,667855,927512,143195,447213,920006,172013,589628,904249,290254,745565,398278,108474,591053,768466,104231,410006,547950,346667,458417,863566,298136,855637,512755,264727,563451,763115,648698,176022,126177,906057,488674,248313,136862,286831,461720,644854,519632,950544,730994,405795,971301,334100,503301,454050,110010,869782,79865,784686,217445,667505,79222,507922,765919,57605,609654,433285,58568,111985,128364,320077,493134,302764]],["bowser",[598640,598640,684003]],["webextension-polyfill",[413279,392248,392248,413279]],["loglevel",[171097,681050,681050,171097]],["@metamask/snaps-rpc-methods",[689132,434878,434878,689132,593680,210734,116336,607421,164539,899342,467304,590622,253170,294311,412158,112406,911111,763859,46547,796466,477945,472860,315290,212396,709716,130982,473144,288852,129293,181432,981945,815131,927714,305776,850379,825459,402414,538650,871069,850493,218959,113452,60968,899403,760734,377753,910256,655121,372996,18435,62458,992416,459849,600068,832436,776458,89132,846787,355340,521406,982071,14158,53049,16908,134718,645495,301028,230448,999482,969866,840672,660073,253662,802191,247141]],["@metamask/permission-controller",[241361,462105,462105,241361,29947,441099,441099,29947,766840,280346,914085,408613,324825,282953,775377,479312,523419,831851]],["@metamask/base-controller",[552558,418920,418920,552558,100209,293889,293889,100209,401593,811690]],["immer",[115691,950515,950515,115691,696906,92365,149501,319222]],["@metamask/rpc-errors",[805248,711210,711210,711210,805248,581327,353959,353959,353959,581327,144008,132002,132002,132002,144008,16905,584553,584553,584553,16905,703640,703640,703640,703640,703640,283232,875088,875088,875088,875088,875088,945500,135299,135299,135299,135299,135299,491065,207534,207534,207534,207534,207534,764010,195057,195057,195057,195057,195057,220075]],["@metamask/utils",[745085,812805,812805,812805,745085,908743,447519,447519,447519,908743,142282,297564,297564,142282,705025,818337,818337,705025,760184,973594,973594,760184,896639,554839,554839,554839,896639,258862,258862,549140,798190,761788,269530,269530,269530,269530,269530,269530,269530,812046,536560,536560,536560,536560,536560,536560,536560,489064,691991,691991,691991,691991,691991,691991,691991,418181,570302,570302,570302,570302,570302,570302,570302,513458,933647,933647,933647,933647,933647,933647,933647,303557,204179,204179,204179,204179,204179,204179,204179,876025,870601,870601,870601,870601,870601,870601,870601,823663,418021,418021,418021,418021,418021,418021,418021,201839,755244,755244,755244,755244,755244,755244,755244,51464,334031,334031,334031,334031,334031,334031,334031,173921,699844,699844,699844,699844,699844,699844,699844,776272,502257,502257,502257,502257,502257,502257,502257,433151,38333,38333,38333,38333,38333,38333,38333,698087,379054,379054,379054,379054,379054,379054,379054,845970,507060,507060,507060,507060,507060,507060,507060,939256,301885,301885,301885,301885,301885,301885,301885,832995,364705,364705,364705,364705,364705,364705,364705,319939,103453,103453,103453,103453,103453,103453,103453,791443,432315,432315,432315,432315,432315,432315,432315,108401,572433,572433,572433,572433,572433,572433,572433,609419,481009,481009,481009,481009,481009,481009,481009,231267,166378,166378,166378,166378,166378,166378,166378,456038,889333,889333,889333,889333,889333,889333,889333,47631,230855,230855,230855,230855,230855,230855,230855,161277,145202,745928,851754,787916,971968,558490,894651,935406,114328,182498,211600,934538,624460,815212,832018]],["@metamask/rpc-errors>fast-safe-stringify",[754255,101292,101292,101292,754255]],["@metamask/superstruct",[356583,448967,448967,448967,356583,449070,982944,982944,982944,449070,244231,612815,612815,612815,244231,355608,411554,411554,411554,355608,784225,652825,652825,652825,784225,342672,290266,290266,290266,342672,142827,545203,545203,545203,142827,497177,497177,497177,497177,497177,497177,497177,295771,179379,179379,179379,179379,179379,179379,179379,572857,315560,315560,315560,315560,315560,315560,315560,159784,628674,628674,628674,628674,628674,628674,628674,605470,599805,599805,599805,599805,599805,599805,599805,878379,638737,638737,638737,638737,638737,638737,638737,460719,147698,147698,147698,147698,147698,147698,147698,174074,5136,5136,5136,5136,5136,5136,5136,269960]],["@metamask/snaps-sdk",[722837,721117,721117,722837,879771,728195,728195,879771,443697,78121,78121,443697,647388,814006,814006,647388,937053,33029,33029,937053,188320,434322,434322,188320,818365,300005,300005,818365,614130,971188,971188,614130,797999,159167,159167,797999,609948,689686,689686,609948,544299,254995,254995,544299,499490,879516,879516,499490,186119,833399,833399,186119,484068,5654,5654,484068,174638,869864,869864,174638,676358,157392,157392,676358,382906,984524,984524,382906,453945,633089,633089,453945,461893,414221,414221,461893,706524,833414,833414,706524,335562,988068,988068,335562,515828,32014,32014,515828,861913,694729,694729,861913,208554,80332,80332,208554,955187,936435,936435,955187,45217,597361,597361,45217,102782,285081,37511,681294,514309,878884,392154,115412,64798,699048,495699,555968,216155,29765,884824,773466,396124,57202,274422,163980,78974,842294,825129,429922,896514,559152,98414,902760,344706,657612]],["@noble/hashes",[661330,943940,943940,661330,671955,975651,975651,671955,477964,716070,716070,477964,798518,362108,117154,720343,288537,505886,645584,772169,65716,496153,501585,691176,27084,38578,202356,237402,85428,347774,367013,459925,494212,399502,864832,128961,780441,41903,361367,57158,15426,850479,163684,641239,451786,279307,992212,770999]],["lodash",[456895,859340,859340,456895,703623,722604,38620,433789,928863,47548,462732,668205,896540,726927,369940,13645,394939,697058,744305,504273,505062,438993,975932,184084,423679,461663,693608,564009,513194,939690,789007,933290,15361,104045,948312,605271,998084,494319,378768,454001,166136,810914,492973,383565,213676,758387,261432,782268,281657,734277,826448,196025,740036,928680,953568,185971,308731,481803,11616,225953,465022,289577,502503,305590,621923,109528,339886,440477,52547,169811,507307,837054,223116,250846,186265,68055,145831,936218,822539,971279,576629,402516,241421,133527,989410,653160,136467,361178,272175,692677,556600,995922,951867,658647,328821,37766,279177,14786,212003,162389,760824,579481,799648,729875,311588,764347,517141,133630,586053,138115,202665,522306,832771,665940,851077,72890,749347,384714,602190,567069,671945,303922,58095,984180,295215,775138,980341,868916,721248,276617,743714,690007,347302,164325,463851,909440,927445,623755,247742,485063,471378,481585,236872,337087,513580,500610,665681,165238,247835,978696,428926,771899,618431,857178,769200,633411,766570,371259,830728,646272,112437,685544,619507,695038,137234,760697,122368,986377,566425,55750,21937,124162,55422,319805,704597,862430,674312,771954,685209,396502,813523,510185,508394,984271,257776,168474,338971,386042,653552,504559,11604,255991,245780,861862,260393,260153,498256,175458,366931,991966,702879,794238,136471,944880,171577,91158,767785,665697,75570,828974,616685,834725,873198,700365,641229,631328,286210,756305,254517,89524,33586,342073,912220,358633,771366,867029,711744,135471,891013,484412,403448,558909,855675,807822,580484,553939,423,660966,667537,532006,487091,46751,699180,439107,174506,418788,871429,296e3,997225,469896,186049,284431,433752,856549,928442,920277,309292,844065,921849,422966,280621,188312,987173,283238,961475,433702,910005,833325,919816,939132,72999,497781,868080,756483,897579,655676,631293,863344,987137,197614,122080,241297,821432,905621,859564,436820,298730,302407,947365,127750,392515,682329,459722,590267,524621,171118,329778,733395,467343,365563,170906,945343,726804,653538,108041,871614,631123,271916,323304,931579,563252,647294,23879,841476,29025,476031,408798,786045,706892,831939,376972,806927,679571,310326,709499,547269,835792]],["luxon",[984381,525037,525037,984381,835060,347022,347022,835060,600473,360569,360569,600473,695358,961520,961520,695358,868766,925752,925752,868766,122552,208570,208570,122552,891728,951906,951906,891728,512986,316244,316244,512986,603476,392134,392134,603476,597054,493104,493104,597054,835203,283707,283707,835203,750628,831022,831022,750628,912276,640846,640846,912276,232712,419186,419186,232712,774810,794204,794204,774810,948972,451798,451798,948972,138292,938102,938102,138292,686333,821213,821213,686333,14631,446655,446655,14631,210164,731318,731318,210164,317588,352134,352134,317588,991213,442525,442525,991213,78565,85013,85013,78565,775158,263496,263496,775158,305921,417476]],["@metamask/object-multiplex",[541726,993027,993027,541726,657887,136940,136940,657887,967744,373445,373445,967744]],["@metamask/object-multiplex>readable-stream",[540031,66066,66066,540031,75284,472387,75284,472387,593545,846686,593545,846686,478633,839488,839488,478633,934344,691259,934344,691259,446267,835990,446267,835990,304208,284911,284911,304208,108694,659909,108694,659909,103508,729063,103508,729063,181531,183588,181531,183588,838926,319353,838926,319353,258565,884578,884578,258565,15394,292787,15394,292787,666688,737465,737465,666688,979662,554907,979662,554907]],["webpack>events",[780063,998088,998088,780063]],["buffer",[971567,916794,971567,916794]],["base64-js",[685590,223159,223159,685590]],["buffer>ieee754",[170059,305992,305992,170059]],["process",[378326,208835,208835,208835,378326]],["pumpify>inherits",[985738,509847,985738,509847]],["@storybook/react>util-deprecate",[381763,79894,381763,79894]],["browserify>string_decoder",[938453,242714,938453,242714]],["mockttp>express>safe-buffer",[677197,495670,677197,495670]],["@metamask/object-multiplex>once",[688655,842744,842744,688655]],["@metamask/object-multiplex>once>wrappy",[885067,368616,885067,368616]],["@metamask/post-message-stream",[927785,543433,927785,543433,755593,822105,755593,822105,107927,359799,107927,359799,524382,23400,23400,524382,620498,465868,465868,620498,101274,379148,101274,379148,74883,411515,74883,411515]],["@metamask/post-message-stream>readable-stream",[456224,365149,365149,456224,387923,280932,387923,280932,506348,621123,621123,506348,508142,846471,846471,508142,430723,437116,430723,437116,377228,538997,538997,377228,158647,164196,164196,158647,128093,85990,85990,128093,976199,335992,335992,976199,149890,68193,68193,149890,490137,702682,702682,490137,864992,742819,742819,864992,67395,525366,525366,67395,938361,450432,938361,450432,122587,883886,883886,122587]],["readable-stream",[252334,485697,252334,485697,632914,754857,632914,754857,708566,153089,153089,708566,769584,568577,568577,769584,588847,683024,588847,683024,868387,181536,868387,181536,194535,703102,194535,703102,827525,22250,827525,22250,816718,261069,261069,816718,831171,259290,259290,831171,613318,978529,978529,613318,425934,837911,425934,837911,338568,494639,494639,338568,68266,930607,68266,930607,699960,425493,699960,425493,449219,602416,602416,449219,452547,548444,452547,548444,900457,464812,900457,464812,252859,895890,895890,252859,761124,73701,761124,73701,777352,586805,586805,777352,809090,44565,809090,44565,448492,770587,770587,448492,631222,443305,443305,631222,294855,730636,294855,730636]],["openai>abort-controller",[581808,113795,581808,113795]],["extension-port-stream",[48050,48050,969581,770467,895286,770467,803058,803058,250413,283079,283079,284896]],["uuid",[834669,301170,834669,659008,659008,485791,123628,123628,112471,951545,951545,16478,921766,923533,921766,282003,516074,731163,761366,585925,605078,724966,849401,132168,38401,576324,621501,506589,299896,106555,707602,620897,400872,720579,739070]],["@metamask/providers",[944401,946822,683527,116263,733762,798563,748698,152704,946170,611766,604632,725087,78279,178618,482392,958440]],["@metamask/json-rpc-engine",[993793,129385,372429,157637,422356,350026,422356,140667,140667,787307,858594,858594,858594,858594,858594,414686,354466,354466,354466,354466,354466,243714,96214,96214,96214,96214,96214,238502,742547,742547,742547,742547,742547,601837,905416,905416,905416,905416,905416,54212,574527,574527,574527,574527,574527,199509,97002,97002,97002,97002,97002,703174,482742,482742,482742,482742,482742,548170,647553,647553,647553,647553,647553,870967,897312,897312,897312,897312,897312,106420,19352,19352,19352,19352,19352,402896,556620,556620,556620,556620,556620,578748,813216,813216,813216,813216,813216,51364,498989,395037,886027,698064,382403,847163,314307,438025,908297,391113,199481,692881,821030,69388,53248,894454]],["@metamask/json-rpc-middleware-stream",[407394,407394,643984,577656]],["@metamask/safe-event-emitter",[664053,664053,177805,532596,323341]],["@metamask/json-rpc-middleware-stream>readable-stream",[558254,304983,558254,329687,329687,942412,847866,925777,847866,306788,682145,306788,63063,700528,63063,752314,752314,235139,724843,867208,724843,859321,960094,859321,710347,710347,839868,104760,942755,104760,156997,156997,915142,825326,906781,825326,424983,424983,123210,820213,820213,979496,278031,278031,813254]],["@metamask/providers>is-stream",[84773,902544]],["@metamask/providers>readable-stream",[478694,817741,719599,433634,660418,769499,577916,406951,217247,206930,125282,275885,272419,616714,31329,655772,609843,919766,352992,789321,871965,777480,834278,373035,366175,31356,131581,670086,167911,360996]],["eslint>fast-deep-equal",[170210,932993,170210]],["@metamask/multichain-api-client",[991999,675768,676687,412454,220677,366196,56710,4712]],["@metamask/solana-wallet-standard",[819292,309289,158133,29645,876553]],["@metamask/solana-wallet-standard>@wallet-standard/wallet",[295412,302163]],["@metamask/test-dapp-solana>@solana/wallet-standard-chains",[826167]],["@metamask/solana-wallet-standard>@solana/wallet-standard-features",[527170,943760,45444,598497]],["@metamask/solana-wallet-standard>@wallet-standard/features",[716207,986059,694718]],["bs58",[121295,121295]],["bs58>base-x",[908463,908463]],["nock>debug",[952574,952574,465273,683075,683075,617648]],["mocha>ms",[254660,254660,134281]],["@sentry/browser",[717309,717309,639781,845226,845226,382128,494688,494688,564350,902419,902419,366523,943544,943544,795966,273521,273521,155001,47810,47810,466024,503510,503510,753036,550041,550041,892145,443227,443227,14635,868888,868888,455142,266615,266615,535279,130760,130760,982238,642735,642735,162183,360023,360023,810087,851781,851781,571893,392788,392788,279802,707995,707995,185635,106438,106438,748028,224245,224245,195829,747402,747402,723808,659129,659129,43417,591386,591386,244880,369735,369735,472847,216295,216295,763935,537252,537252,96434,327566,327566,538564,553205,553205,606189]],["@sentry/browser>@sentry/core",[718800,718800,410710,67904,67904,352158,608119,608119,682631,960196,960196,920938,16278,16278,943924,818747,818747,39859,198066,198066,671480,973234,973234,665016,597014,597014,172900,71409,71409,466737,933190,933190,123532,973149,973149,355989,812863,812863,78463,96331,96331,276435,77614,77614,542764,16686,16686,827284,267276,267276,187474,777217,777217,548697,836164,836164,98154,276277,276277,15797,24708,24708,664746,145834,145834,778552,768881,768881,865961,140722,140722,911216,105388,105388,52018,179184,179184,713966,173177,173177,468417,584222,584222,709356,793111,793111,931263,884405,884405,612717,125617,125617,189193,719149,719149,967173,155682,155682,295088,136244,136244,513234,587044,587044,550866,76838,76838,298556,290264,290264,577102,187763,187763,598723,92376,92376,848294,724666,724666,175384,48718,48718,201740,367877,367877,187973,191895,191895,411335,691963,691963,122411,115433,115433,778313,254759,254759,960767,986746,986746,59824,808106,808106,488560,138706,138706,420376,534098,534098,5152,405971,405971,934379,532725,532725,902309,631905,631905,369793,438774,438774,707212,192279,192279,939543,719509,719509,178061,803537,803537,329537,137891,137891,341035,884488,884488,461582,901814,901814,444284,837971,837971,285803,153839,153839,398471,730074,730074,704776,441227,441227,538979,903226,903226,17072]],["@sentry/utils",[988217,988217,490521,230337,230337,769233,538600,538600,109910,25605,25605,370861,562298,562298,462128,107842,107842,613608,680985,680985,414753,471265,471265,708521,97407,97407,84607,834028,834028,1090,397718,397718,665812,40209,40209,605257,37853,37853,650773,572858,572858,973544,644094,644094,566612,696294,696294,814508,620209,620209,151201,895315,895315,536275,85182,85182,402228,654761,654761,879561,940344,940344,148366,586312,586312,316310,16786,16786,513064,766221,766221,646493,425535,425535,74263,384255,384255,401967,837075,837075,785755,450579,450579,669891,494945,494945,283049,906769,906769,182881,388006,388006,520348,648017,648017,950825,179329,179329,38561,821016,821016,6246,830339,830339,716547,571825,571825,497577,799130,799130,856928,834529,834529,833097,424264,424264,709502,851338,851338,921368]],["@sentry/browser>@sentry-internal/browser-utils",[104168,104168,74342,756025,756025,814601,12796,12796,765698,225669,225669,662925,133481,133481,71337,714599,714599,993671,932294,932294,821396,417860,417860,879954,956742,956742,57324,495242,495242,314408,882555,882555,621827,184748,184748,51450,303818,303818,234512,898026,898026,515400,259463,259463,975431,533858,533858,56680,327140,327140,956354,132076,132076,978802,681747,681747,768571,406097,406097,441265,764651,764651,19467,863531,863531,676979,459517,459517,702053,185335,185335,772879,234598,234598,138716,117529,117529,903217,858586,858586,33040,185746,185746,566632]],["@sentry/browser>@sentry-internal/replay",[117172,117172,949306]],["@sentry/browser>@sentry-internal/replay-canvas",[928535,928535,986415]],["@sentry/browser>@sentry-internal/feedback",[666012,666012,178066]],["nanoid",[250653,531589]],["@metamask/utils>pony-cause",[642069,762565,357464,178430,181686,341875,826117,207912,67282,400317]],["@fortawesome/fontawesome-free",[411525,411525,411525,411525,1527,1527,1527,1527,70035,70035,70035,70035]],["@metamask/messenger",[547368,547368,547368,547368,547368,132468,446337,446337,446337,446337,446337,92275,728930,324960]],["@metamask/network-controller>@metamask/eth-json-rpc-infura>@metamask/eth-json-rpc-provider",[163433,163433,163433,163433,163433,64567,139596,139596,139596,139596,139596,36276,357480,357480,357480,357480,357480,291600,666594,666594,666594,666594,666594,865022]],["@metamask/chain-agnostic-permission>@metamask/api-specs",[99790,99790,99790,99790,99790,173810,934683,934683,934683,934683,934683,212257,892406,751601]],["eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>ethjs-schema",[613122,613122,613122,613122,613122,938438]],["eth-method-registry",[852032,852032,852032,852032,852032,662176,243922,243922,243922,243922,243922,917370,432999,260406]],["@toruslabs/eccrypto>elliptic",[917768,917768,917768,917768,917768,917768,917768,306768,834229,673096,220827,598866,393187,520526,439410,350877,431844,857725,595344,504347,995991,723810,56160,560923,505841,601480,445919,671066,206133,648722,26161,756924,31289,266482,24812,385483,543260,97907]],["crypto-browserify>browserify-sign",[184715,184715,184715,184715,184715,184715,184715,786493,661841,661841,661841,661841,661841,661841,661841,499691,229144,750771,629953,373124,543294,370063,210639,136066]],["ethereumjs-util>ethereum-cryptography>browserify-aes",[589543,589543,589543,589543,589543,589543,589543,24625,825934,440057,626837,194324,787881,73708,52778,104667,160855,310542,626996,521195,227691,766738,699211,652708,958896,128441,564143,948188,445506,166623,29628,425693,328328,412627,496770,36685,522302,564395,120362,422535]],["crypto-browserify>diffie-hellman",[53365,53365,53365,53365,53365,53365,53365,705123,487876,746787,837063,678158,7702,432433]],["crypto-browserify>public-encrypt>parse-asn1",[890535,890535,890535,890535,890535,890535,890535,502553,996481,905318,392140,657421,199968,756021,784517,910026]],["currency-formatter",[758533,758533,758533,758533,758533,925051,888624,888624,888624,888624,888624,841452,187270,105291,14644,160041]],["@metamask/contract-metadata",[243179,243179,243179,243179,243179,130541,238366]],["@rive-app/react-canvas>@rive-app/canvas",[236494,236494,236494,236494,236494,888132]],["react-markdown>property-information",[709064,709064,709064,709064,709064,927244,109794,287738,489890,136933,887583,897558,815182,918358,95526,293780,222985,625821,403939,713726,993601,651420,403493]],["unicode-confusables",[531743,531743,531743,531743,531743,540270]],["@metamask/snaps-execution-environments",[449787,449787,897911]],["@ledgerhq/hw-app-eth>@ledgerhq/cryptoassets-evm-signatures",[938612,938612,848707,848707,477649,477649,908299,908299,696055,696055,480075,480075,668059,668059,89350,89350,867849,867849,745686,745686,274109,274109,743225,743225,366551,366551,443852,443852,762051,762051,895421,895421,334270,334270,67928,67928,950401,950401,384717,384717,610625,610625,95776,95776,579237,579237,594750,594750,419682,419682,255154,255154,199597,199597,248848,248848,250685,250685,258052,258052,116736,116736,462622,462622,124859,124859,404282,404282,626884,626884,78373,78373,163015,163015,590888,590888,37908,37908,591272,591272,9231,9231,347020,347020,819889,819889,416093,416093,605933,605933,527390,527390,236883,236883,616814,616814,210703,210703,518851,518851,787985,787985,519988,519988,169781,169781,524815,524815,902902,902902,545688,545688,730571,730571,322847,322847,983883,983883,835776,835776,672311,672311,765119,230970,369002]],["@metamask/snaps-utils>@metamask/slip44",[847408,976920]],["@metamask/logo",[663411,844113,739929]],["@metamask/ppom-validator>@metamask/controller-utils",[7688,44208,156152,261765,473335,650229,990812]],["@metamask/message-signing-snap",[41218]],["@metamask/assets-controllers>@metamask/abi-utils>@metamask/utils",[67236,82434,86584,152946,335160,382352,403644,443005,443526,486520,524429,602405,672573,760297,835140,861840,876007,957598,980828,984122,990402]],["@metamask/perps-controller>@metamask/abi-utils>@metamask/utils",[79050,185556,260050,293448,315141,408080,453552,481610,565621,577182,583069,584870,598924,601482,630273,667016,721999,765685,813124,907068,980656]],["@blockaid/ppom_release",[96043,89962]],["@metamask/multichain-api-middleware>@metamask/api-specs",[128623,314788,67384]],["eslint>ajv",[160908,982794,22840,865495,905255,939992,556499,817839,109455,842794,46280,160900,399783,432165,730478,559436,598054,386041,536262,485510,588225,537395,61161,604333,818119,385673,909501,441643,579407,912348,139792,146789,513315,655827,863282,547293,181169,311483,824281,52163,351368,465692]],["@metamask/gator-permissions-controller>@metamask/abi-utils>@metamask/utils",[162248,279794,296082,336582,398830,402812,475288,532135,607205,608880,646692,652494,711832,715618,757331,761098,824035,916807,921323,932986,969018]],["@metamask/solana-wallet-snap",[217919]],["@metamask/tron-wallet-snap",[266372]],["@metamask/smart-transactions-controller",[342310,500412,631561,30449,273538,847512,878349,541149,407608,194050,612157,95789,492777]],["@metamask/transaction-pay-controller>@metamask/ramps-controller",[696700,300900]],["@metamask/gator-permissions-snap",[757501]],["@metamask/ens-resolver-snap",[764550]],["@metamask/bitcoin-wallet-snap",[886357]],["@metamask/permissions-kernel-snap",[957987]],["@metamask/institutional-wallet-snap",[986376]],["viem>abitype",[150706,173179,146485,246690,283116,864721,345489,749845,64090,633441,291216,441602,17047]],["currency-formatter>accounting",[241927,946836]],["eth-lattice-keyring>gridplus-sdk>aes-js",[972828,496439]],["chalk>ansi-styles",[780723,845064]],["@metamask/controller-utils>@spruceid/siwe-parser>apg-js",[980349,622282,488665,40754,118675,47036,216202,771733,190686,388682,14699,442480,119008,46509,388091,431304,537939,469328,245981,88738,548907,90040,135322,736427,496562,397721,74176,1305,557404,204777,77118,133543,555014,872735,383737,862316,939116,283691,670078,397251,810722,506465,720843,965892,820724,778263,151097,649272]],["string.prototype.matchall>es-abstract>array-buffer-byte-length",[664167]],["crypto-browserify>public-encrypt>parse-asn1>asn1.js",[8083,528754,818286,597323,954382,42905,542561,630692,139067,61716,964662,421105,853593,25932,728554,199503,561813,121098,208103,404132,540274,571735,600205,784994,746236,933023,502048,509011]],["@ngraveio/bc-ur>assert",[158196,63741,788609,100734,784333,151184,215851,883762]],["string.prototype.matchall>get-intrinsic>async-function",[264913,779198]],["string.prototype.matchall>get-intrinsic>async-generator-function",[998538,848185]],["async-mutex",[788581,34965,350147,558744,919969,368386,629233,945539]],["string.prototype.matchall>es-abstract>available-typed-arrays",[94121,855401]],["@metamask/ppom-validator>await-semaphore",[792539]],["wait-on>axios",[776451,235935,47793,329788,527358,260798,365459,374258,686914,732582,423956,516138,561903,653978,337521,138428,627273,307443,2556,743479,302569,247769,757315,17975,132519,793963,196434,447923,269126,621558,727629,736027,577145,347359,183401,738874,279845,337049,573038,435085,443032,771027,405386,272145,456048,685727,933203,35829,451360,652455]],["@metamask/snaps-controllers>tar-stream>b4a",[627539,537710,521570,263164,561576,955346]],["@babel/runtime",[810356,32990,406527,463565,709371,757709,753341,45735,387539,49901,610333,439119,500069,426393,240401,266103,487263,871820,762014,867478,124255,600393,432550,225841,771190,125579,431951,612823,451055,91673,374426,560458,485489,876190,656227,449859,896478,93072,991026,800928,517524,841024,877159,71586,146436,999227,502349,440484,935191,140039,532895,127119,854717,560901,6490,91796,952165,498421,325057,98105,597347,688947,228937,369953,457812,824076,783093,138312,505660,779786,474658,711646,34276]],["react-markdown>unified>bail",[370001]],["@ensdomains/content-hash>multihashes>multibase>base-x",[874484,628251]],["base32-encode",[91703]],["bitcoin-address-validation>bech32",[54716]],["bignumber.js",[60746,468257]],["bitcoin-address-validation",[272909,879040]],["@metamask/design-system-react>blo",[749193,999084,150609,904710]],["ethereumjs-util>bn.js",[461532,298495]],["@toruslabs/eccrypto>elliptic>brorand",[754298,700493]],["crypto-browserify>browserify-cipher",[647133,589534]],["crypto-browserify>browserify-cipher>browserify-des",[838705,213314,87289,769094]],["crypto-browserify>public-encrypt>browserify-rsa",[494167,172788]],["crypto-browserify>browserify-sign>readable-stream>isarray",[333311,828544]],["crypto-browserify>browserify-sign>readable-stream",[728536,484145,19341,389274,597375,34862,146351,207368,482435,49634,348815,85840,440559,954630,423506,400143,24961,691350]],["crypto-browserify>browserify-sign>readable-stream>safe-buffer",[639389,228612]],["crypto-browserify>browserify-sign>readable-stream>string_decoder",[161690,813931]],["crypto-browserify>browserify-sign>readable-stream>string_decoder>safe-buffer",[791641,68876]],["ethereumjs-util>ethereum-cryptography>bs58check",[387887,283092,388962,767265]],["ethereumjs-util>ethereum-cryptography>bs58check>bs58",[434124,411447]],["terser>source-map-support>buffer-from",[734479]],["ethereumjs-util>ethereum-cryptography>browserify-aes>buffer-xor",[64679,820382]],["stream-http>builtin-status-codes",[535522,538673]],["@metamask/snaps-utils>validate-npm-package-name>builtins",[283844,81481]],["string.prototype.matchall>call-bind>call-bind-apply-helpers",[161613,647304,763902,635101,653002,186343,26796,723547,106983,873110,569214,870079]],["string.prototype.matchall>call-bind",[705035,908492,870428,567943]],["string.prototype.matchall>call-bound",[270335,727164]],["@ngraveio/bc-ur>cbor-sync",[14269,632362]],["eth-lattice-keyring>gridplus-sdk>cbor",[523374,676204,802575,378612,571022,875424,877262,363109,457912,62656,366230,178783,871634]],["chalk>supports-color",[381047,469146]],["chalk",[289568,912963,620047,652378,280227,995050]],["chart.js",[137490,464071]],["@ensdomains/content-hash>cids>uint8arrays",[868615,205516,357568]],["@ensdomains/content-hash>cids",[707215,584728]],["ethereumjs-util>create-hash>cipher-base",[554885,372024]],["@metamask/jazzicon>color>clone",[901347]],["clsx",[92288]],["cockatiel",[945924,926489,755020,945180,519577,550106,826585,182234,177086,50519,84889,686779,606424,940367,286308,991321,503798,811100,791579,126685,822175,380736,90053,893114,966758,496021,780659,690468,902516,507271,733066,514296,324161,939590,911475,181214,229411,286985,524656,516526]],["chalk>ansi-styles>color-convert",[997664,286427,179422,547055,32004,969867]],["jest-canvas-mock>moo-color>color-name",[469804,865747]],["@metamask/jazzicon>color>color-string",[362611]],["react-markdown>comma-separated-tokens",[142527]],["remote-redux-devtools>socketcluster-client>component-emitter",[372675]],["@metamask/notification-services-controller>@contentful/rich-text-html-renderer",[777316,528475]],["copy-to-clipboard",[258205]],["core-js-pure",[977075,353883,445047,347599,20560,968682,103107,151859,493823,907471,719418,604916,654273,748841,892910,536708,171391,978775,324522,258224,765917,485365,666050,48724,465210,145412,646878,534096,878832,820394,876763,413491,330636,464270,227906,884024,12759,873303,821049,792385,360330,933068,928937,757537,370579,550184,188366,169640,44943,227607,114407,752223,25884,167878,974770,55696,747440,431842,662482,665580,400874,961964,692487,655559,613408,785818,277389,76589,899114,985456,407322,660948,652078,468876,916872,303606,54840,361546,875224,35086,745597,207845,685672,194094,828095,785151,260437,885109,856768,703066,739256,281378,300024,782214,42848,251954,850958,776008,895202,376588,948638,278892,118560,702630,665216,239218,798491,356579,807583,673319,576773,498293,330035,103339,277064,522818,234303,305727,508591,322167,120990,644976,587510,425440]],["readable-stream-2>core-util-is",[734263,711510]],["eth-lattice-keyring>gridplus-sdk>crc-32",[944285]],["@ngraveio/bc-ur>crc",[852556,152617,524523,416638,232305,946884,76563,761450,230219,739574,457640,524395,299098,389601,136322,807767,858449,61918,878551,796502,274359,40594,902251,888882,463838,633555,244414,219649]],["@ngraveio/bc-ur>crc>buffer",[359088,797843]],["crypto-browserify>create-ecdh",[65084,966069]],["ethereumjs-util>create-hash",[311953,765236,906989,825936]],["crypto-browserify>create-hmac",[889832,209475,812935,954968]],["cron-parser",[528063,310998,495081,582032,433256,418605,44598,439869,205227,212712]],["crypto-browserify",[325914,554365]],["@metamask/ppom-validator>crypto-js",[471792,180019,981178,117376,741309,602073,284030,619280,303801,1972,941380,953041,983925,840925,380204,597575,983058,170649,13944,531696,950736,385713,256885,718952,135462,899533,944041,533942,86557,806074,67012,874575,826321,926728,824624,897196,51071,166601,584919]],["react-beautiful-dnd>css-box-model",[200635]],["@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer>css-vendor",[552681]],["@date-io/luxon",[402851]],["@metamask/eth-token-tracker>deep-equal",[747174]],["deep-freeze-strict",[317764,627685]],["addons-linter>deepmerge",[900583,239016]],["string.prototype.matchall>define-properties>define-data-property",[562089,316328]],["string.prototype.matchall>define-properties",[624233,919684]],["crypto-browserify>browserify-cipher>browserify-des>des.js",[104109,609652,398216,226565,762931,911426,731279,181690,624295,699112,609466,434961]],["react-transition-group>dom-helpers",[815834,819347,475843]],["dompurify",[88174]],["@segment/analytics-node>@segment/analytics-core>dset",[433864,354970]],["eslint-plugin-react>es-iterator-helpers>has-proto>dunder-proto",[76359,826936]],["@ensdomains/content-hash>multihashes>buffer",[117552]],["@ensdomains/content-hash>multihashes>multibase",[300094,284650,816561,512424,518529]],["@ensdomains/content-hash>multihashes",[941633,942494]],["@ensdomains/content-hash>multihashes>varint",[643732,490408,755064,262278]],["@ensdomains/content-hash",[687154,356437,451783]],["string.prototype.matchall>call-bind>es-define-property",[861807,42678]],["string.prototype.matchall>es-errors",[592005,602240,382711,123456,782051,529354,542599,701026,331300,999363,998630,444699,492449,29270]],["@metamask/eth-token-tracker>deep-equal>es-get-iterator",[89048]],["string.prototype.matchall>es-object-atoms",[428557,588684]],["eth-chainlist",[654063,511445]],["eth-ens-namehash",[206422,558791]],["eth-lattice-keyring",[952149]],["eth-lattice-keyring>@ethereumjs/util>ethereum-cryptography",[592314,347794,592781]],["eth-lattice-keyring>@ethereumjs/util>@ethereumjs/rlp",[621952]],["eth-lattice-keyring>@ethereumjs/util",[752653,986280,439138,507597,953807,430793,554335,179264,827649,586527,790569,450906,622779,131149,174743]],["eth-lattice-keyring>@ethereumjs/util>ethereum-cryptography>@noble/curves",[450927,179401,119968,479374,83071,119428,860803]],["eth-lattice-keyring>@ethereumjs/util>ethereum-cryptography>@noble/hashes",[529766,127207,669609,142176,361558,583378,715738,799524]],["eth-lattice-keyring>rlp",[597577]],["ethereum-cryptography",[159084,4007]],["ethereumjs-util",[756854,701181,512477,671352,328669,362242,609919,500520,475168,801305,260161,482062,472431,850844,818896,7201,467537,822020,527514,738955,57111,134666,481899,567856]],["ethereumjs-util>ethereum-cryptography",[894002,357147,496988,263109,988970,95453,110404,492315]],["@metamask/keyring-controller>ethereumjs-wallet",[391504,512249,741697,562210,610527,894416]],["@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",[723983,120412,620662,585825,823638,143313,267378,431383,94970,51747,61648,199175,361274,987807,749005,442534,1869,748852,564783,260262,29554,283155]],["@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",[531412,290409,303999,613084,456873,75560,388918,393539,681987,461780,681551,968770,356547,945458,701971,858500,206354,213421,255583,606439,892253,826014,851954,169479]],["@ethereumjs/tx>@ethereumjs/common",[207769,507665,379396,617778,138049,636873,921628,12150,177717,932733,428097,246417,77547,731571,301776,440598]],["@ethereumjs/tx>@ethereumjs/rlp",[971047,626536,738130]],["@ethereumjs/tx",[282703,18559,325733,56061,673015,986319,373475,407539,571637,732013,100452,584390,11213,443901,34514,126896,215366,792400,362706,279528,1546,155e3,419035,830723,988296,460714,815357,26581,579062,242676,127469,821621,369284,127314]],["@ethereumjs/tx>ethereum-cryptography",[271465,377217,775440,81446]],["@ethereumjs/tx>ethereum-cryptography>@noble/hashes",[228143,130407,362180,742134,960329,532953,74869,224661]],["@ethereumjs/tx>@ethereumjs/util",[296648,892667,437881,478459,310188,18546,29433,898069,906238,416527,336422,899217,632496,890415,543178,874349,384377,888838,341872,671762,586720,99683,44355,81010,349456,206296,160942,32394,262336,580203,314507,605645,197133,110418,741736,944516,448578,399909,47909,855224,173930,388655,743151,657076,54798,881019,49107,481986,199456,783798,516864,198965,932477,596187,894563,925263,83895,211645,949237]],["@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography",[287361,567417,291166,401868,687760,301302,219828,452197,732,535309,110377]],["@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/curves",[622643,224981,266786,495448,108099,796262,617072,79210,568478,278956,710609,162209,678298,778004,671003,238315,47822,107004,762871]],["@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/hashes",[929920,445115,915253,963426,625500,813303,945026,533968,969910,476244,224683,582179,792721,321705,481449,17401,511241,543657,926645,285861,447856,10780,610068,359750]],["ethers",[794947,863901,528824,21543,164293,898768]],["@ethersproject/abi",[928097,2720,290117,105312,81505,485050,871050,923263,207619,363328,460704,403119,849027,380106,552281,520234,295467,611782,450337,275648,395068,402741,60548,408505,283353,715904,393718,40473,173862,651911,552364,629915]],["ethers>@ethersproject/abstract-provider",[120883,445174,721768,211701]],["ethers>@ethersproject/abstract-signer",[654687,320760,659701,230706]],["ethers>@ethersproject/address",[498871,317262,45988,998381]],["ethers>@ethersproject/base64",[880138,893747,307335,384786]],["ethers>@ethersproject/basex",[873202,529193]],["@ethersproject/bignumber",[726731,532192,323489,657036,234740,631229,367302]],["@ethersproject/bytes",[524443,977952,993558,198589]],["ethers>@ethersproject/constants",[885644,123039,965659,101866,227151,738178,44399,27869]],["@ethersproject/contracts",[790916,295523,264926,838617]],["ethers>@ethersproject/hash",[252953,578030,886384,896313,248528,151353,410943,815496,130488,234299,580813,460094,407015,412718,974082,475953,603345,79978]],["@ethersproject/hdnode",[42014,413049,49182,563965]],["ethers>@ethersproject/json-wallets",[156057,778052,649603,580226,459908,585497,611720,10921,37426,110781,141830,749805]],["ethers>@ethersproject/json-wallets>aes-js",[302968,144725]],["ethers>@ethersproject/keccak256",[453002,283449]],["ethers>@ethersproject/logger",[795733,329882,697489,851298]],["ethers>@ethersproject/networks",[948074,332071,484058,366639]],["ethers>@ethersproject/pbkdf2",[424913,25643]],["ethers>@ethersproject/properties",[990744,338777,830724,599317]],["@ethersproject/providers",[873437,203284,213037,728024,916802,683411,235086,404593,31,286156,698803,675682,416895,861302,128840,504409,396515,345834,700531,732500,930847,613248,26301,819790,702541,440652,288881,981328,806355,937786,243681,144240,272585,48080,380392,386903,935424,451241,73094,375693]],["@ethersproject/providers>bech32",[399580,579841]],["ethers>@ethersproject/random",[997866,247023,401282,774575,4058,942107,604816,862331]],["ethers>@ethersproject/rlp",[603988,864089,990142,820707]],["ethers>@ethersproject/sha2",[451058,600141,805929,429146,116409,75056,323064,314693]],["ethers>@ethersproject/signing-key",[659946,629441,823777,234380,255468,608111]],["ethers>@ethersproject/solidity",[911877,543716,743720,244921]],["ethers>@ethersproject/strings",[66393,855040,465085,745124,936523,116944,687166,340519,782665,795768]],["@ethersproject/transactions",[482925,46308,387833,894e3]],["ethers>@ethersproject/units",[202520,315087,471253,91170]],["ethers>@ethersproject/wallet",[309353,979240,853669,923412]],["ethers>@ethersproject/web",[213497,254712,800395,55410,465246,699423]],["ethers>@ethersproject/wordlists",[995917,119054,948339,792456,400906,289311,760345,489572]],["eth-method-registry>@metamask/ethjs-contract>ethjs-abi",[452332,889857,814363,43470]],["crypto-browserify>browserify-cipher>evp_bytestokey",[406869,626238]],["react-markdown>unified>extend",[203585]],["lightweight-charts>fancy-canvas",[443436,631652,243582,128943,418818]],["@metamask/snaps-controllers>tar-stream>fast-fifo",[771765,121649]],["fast-json-patch",[793403,713905,614020,583955]],["fast-json-stable-stringify",[323260,134899]],["@metamask/snaps-utils>fast-xml-parser",[212862,635939,418097,311719,701721,56201,574526,314871,499075]],["webpack-cli>fastest-levenshtein",[70144]],["@metamask/notification-services-controller>firebase>@firebase/app",[470481]],["@metamask/notification-services-controller>firebase",[578075,512308,656851]],["@metamask/notification-services-controller>firebase>@firebase/app>@firebase/component",[616041]],["@metamask/notification-services-controller>firebase>@firebase/installations",[687603]],["@metamask/notification-services-controller>firebase>@firebase/app>@firebase/logger",[38518]],["@metamask/notification-services-controller>firebase>@firebase/messaging",[265738,92734]],["@metamask/notification-services-controller>firebase>@firebase/util",[41392]],["react-focus-lock>focus-lock",[664882,653567,135719,367975,716734,578063,365187,360116,130680,697295,780392,176839,826111,417071,997295,750025,906089,153956,296640,341413,837793]],["browserify>util>which-typed-array>for-each",[227345,541290]],["browserify>has>function-bind",[500185,68276,819495,796300]],["string.prototype.matchall>set-function-name>functions-have-names",[645102]],["fuse.js",[863985]],["string.prototype.matchall>get-intrinsic>generator-function",[735833,359060]],["string.prototype.matchall>get-intrinsic",[933,399154]],["@metamask/snaps-controllers>get-npm-tarball-url",[352717]],["remote-redux-devtools>redux-devtools-core>get-params",[31908]],["string.prototype.matchall>es-abstract>get-proto",[487929,744104,685451,193624,296369,622892]],["@metamask/logo>gl-mat4",[979173,740435,717641,58879,974021,733652]],["@metamask/logo>gl-vec3",[239384]],["react-hot-toast>goober",[656304]],["string.prototype.matchall>gopd",[809614,768613,114642,377379]],["eth-lattice-keyring>gridplus-sdk",[879893]],["eth-lattice-keyring>gridplus-sdk>bignumber.js",[365514,616649]],["eth-lattice-keyring>gridplus-sdk>bs58check",[610304,474878]],["eth-lattice-keyring>gridplus-sdk>cbor-bigdecimal",[845384]],["eth-lattice-keyring>gridplus-sdk>@ethereumjs/rlp",[16740,622981]],["eth-lattice-keyring>gridplus-sdk>ox",[756542,83634,813419,839404,227593,672368,843652,783926,969079]],["eth-lattice-keyring>gridplus-sdk>secp256k1",[616671,663367,595409]],["eth-lattice-keyring>gridplus-sdk>zod",[307154,898097,441776,802943,237255,985695,691039,801201,217552,41781,735342,890796,83311,404972,723837,794795,742289,105324,440392,522092,147313,151411,291925,426578,652352,307400,686146,789236,207501,988355,21552,792908,5344,859237,142633,560250,589378,657936,185201,50520,428744,541788,177138,824701,891933,192578,735710,859685,351848,363801,637727,747625,288185,191617,151243,12864,658563,564157,1482,985893,400610,499052,937970,986816,573325,110555,883567,52513,288132,50364,467730,678785,90549,487593]],["string.prototype.matchall>es-abstract>unbox-primitive>has-bigints",[733838]],["eslint-plugin-react>es-iterator-helpers>has-property-descriptors",[584368,18839]],["string.prototype.matchall>has-symbols",[432088,160055,480278,694053]],["jsdom>form-data>es-set-tostringtag>has-tostringtag",[197300,520737]],["ethers>@ethersproject/sha2>hash.js",[610111,179206,57764,95065,233827,283376,816721,387824,935732,970813,466610,957289,587418,438047,567879,303286,88054,344805,80193,105962,132485,225300,439794,864269]],["eslint-plugin-react>hasown",[704149,810364]],["@metamask/eth-qr-keyring>hdkey",[507520,821827]],["he",[106115]],["@toruslabs/eccrypto>elliptic>hmac-drbg",[939456,178403]],["react-redux>hoist-non-react-statics",[339394,779833]],["react-redux>hoist-non-react-statics>react-is",[810621,337392,29065,113132]],["https-browserify",[301126,965339]],["human-standard-token-abi",[8858,944211]],["humanize-duration",[477355]],["@material-ui/core>@material-ui/styles>jss-plugin-camel-case>hyphenate-style-name",[667589]],["@metamask/notification-services-controller>firebase>@firebase/app>idb",[877272,346418]],["eth-ens-namehash>idna-uts46-hx",[870019,683712,593891,122252]],["eth-ens-namehash>idna-uts46-hx>punycode",[33245,465768]],["react-markdown>style-to-object>inline-style-parser",[395196]],["string.prototype.matchall>internal-slot",[228431]],["ip-regex",[357910,198465]],["browserify>util>is-arguments",[790588,635067]],["string.prototype.matchall>es-abstract>is-array-buffer",[78062]],["@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-bigint",[1771]],["@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-boolean-object",[841928]],["string.prototype.matchall>es-abstract>is-callable",[76176,714961]],["@metamask/eth-token-tracker>deep-equal>is-date-object",[952632]],["eth-method-registry>@metamask/ethjs-query>promise-to-callback>is-fn",[948405,754084]],["browserify>util>is-generator-function",[664264,673321]],["eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>is-hex-prefixed",[433028,414841]],["@material-ui/core>@material-ui/styles>jss>is-in-browser",[445903]],["@metamask/eth-token-tracker>deep-equal>es-get-iterator>is-map",[107274]],["@ngraveio/bc-ur>assert>is-nan",[742216,247643,453632,277973,461010,935775,787145,924544]],["@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-number-object",[523543]],["mocha>yargs-unparser>is-plain-obj",[119552]],["string.prototype.matchall>es-abstract>is-regex",[129042,969219]],["string.prototype.matchall>es-abstract>is-set",[275840]],["string.prototype.matchall>es-abstract>is-shared-array-buffer",[610558]],["eslint-plugin-react>array-includes>is-string",[118857]],["string.prototype.matchall>es-abstract>es-to-primitive>is-symbol",[613340]],["browserify>util>is-typed-array",[242256,518327]],["@open-rpc/schema-utils-js>is-url",[409836]],["@metamask/eth-token-tracker>deep-equal>which-collection>is-weakmap",[46066]],["@metamask/eth-token-tracker>deep-equal>which-collection>is-weakset",[954136]],["@lavamoat/webpack>json-stable-stringify>isarray",[664074,841407]],["@open-rpc/test-coverage>isomorphic-fetch",[605701]],["@segment/analytics-node>jose",[116941,723893,8143,218007,953385,248337,23030,463860,577658,98100,501763,850867,796358,925336,178168,968646,989618,877324,589323,430659,851454,569824,115208,740178,566761,67737,171121,322590,755924,435518,53295,134823,898354,527336,936995,909979,615640,892346,663478,373544,732642,877028,896511,244431,260779,395627,678296,470658,222891,371843,352649,378729]],["@ensdomains/content-hash>js-base64",[461462]],["eth-ens-namehash>js-sha3",[617375,227864]],["remote-redux-devtools>jsan",[425053,427767,151109,965556,341696]],["@ngraveio/bc-ur>jsbi",[623474,847743]],["@metamask/ppom-validator>json-rpc-random-id",[458834,84187]],["@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver>@json-schema-spec/json-pointer",[684339]],["@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",[106132,574712]],["@open-rpc/schema-utils-js>@json-schema-tools/meta-schema",[912036]],["@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",[648208,482871,859621,916668,24892]],["@open-rpc/schema-utils-js>@json-schema-tools/dereferencer>@json-schema-tools/traverse",[442980]],["eslint>ajv>json-schema-traverse",[30541]],["eslint>json-stable-stringify-without-jsonify",[559918]],["@metamask/message-manager>jsonschema",[489291,195728,17116,618744,657789]],["@material-ui/core>@material-ui/styles>jss-plugin-camel-case",[795681]],["@material-ui/core>@material-ui/styles>jss-plugin-default-unit",[900771]],["@material-ui/core>@material-ui/styles>jss-plugin-global",[260661]],["@material-ui/core>@material-ui/styles>jss-plugin-nested",[810269]],["@material-ui/core>@material-ui/styles>jss-plugin-props-sort",[730053]],["@material-ui/core>@material-ui/styles>jss-plugin-rule-value-function",[26005]],["@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer",[715957]],["@material-ui/core>@material-ui/styles>jss",[56885]],["ethereumjs-util>ethereum-cryptography>keccak",[599140,750345,987323,2560,288841,289124,188166,527441,883926,655949,877926,399137]],["ethereumjs-util>ethereum-cryptography>keccak>readable-stream",[527114,519857,571099,535004,618502,817375,236194,770465,364924,234549,740257,722326,418218,751113,779550,611239,234258,75205,893883,7176,634352,43819,172721,972964,45304,141293,546544,731291,450640,261453]],["@ngraveio/bc-ur>@keystonehq/alias-sampling",[868785,836484]],["@keystonehq/bc-ur-registry-eth",[2593,544829]],["@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",[124e3,249615,646539,987339,883483,191052,265655,682001,459024,747747,927029,804119,773884,939286,564315,867283,794735,534855,467722,573995,57636,976399,527355,2977,231626,67798]],["@metamask/json-rpc-engine>klona",[699479,747362,654181,810045]],["chart.js>@kurkle/color",[283251]],["@lavamoat/lavadome-react",[494708]],["@ledgerhq/hw-transport-webhid>@ledgerhq/devices",[695006,42324]],["@ledgerhq/hw-transport-webhid>@ledgerhq/devices>semver",[486088,901711,122508,5166,292487,989346,909957,327803,66184,206080,960393,248308,762961,898423,219259,81032,734082,853846,421895,93192,48037,281017,50122,632189,756398,2911,898721,599021,124306,997168,829019,238402,723811,375822,273435,744484,867350,254004,308262,852453,156827,35765,196336,153063,832090]],["@ledgerhq/hw-app-eth>@ledgerhq/domain-service",[565967,224675,862553]],["@ledgerhq/errors",[419422,30649,315100,964081]],["@ledgerhq/hw-app-eth>@ledgerhq/evm-tools",[977702,454077,819304]],["@ledgerhq/hw-app-eth",[551257,268879,30606,705565,113800,104027,383317,568746,104586,687439,463313,536227,63684,906779]],["@ledgerhq/hw-app-eth>bignumber.js",[784124]],["@ledgerhq/hw-transport-webhid",[53406]],["@ledgerhq/hw-transport-webhid>@ledgerhq/hw-transport",[127439]],["@ledgerhq/hw-transport",[469552]],["@ledgerhq/hw-app-eth>@ledgerhq/evm-tools>@ledgerhq/live-env",[265370,373941]],["@ledgerhq/hw-app-eth>@ledgerhq/logs",[878528,137921]],["@metamask/passkey-controller>@levischuck/tiny-cbor",[782634,493552,220019]],["lightweight-charts",[194859]],["remote-redux-devtools>socketcluster-client>linked-list",[262580,759067]],["currency-formatter>locale-currency",[700534,789077,531208,802055]],["localforage",[368717,544654]],["@google/genai>protobufjs>long",[35849,223361]],["lottie-web",[908216]],["@segment/analytics-node>@lukeed/uuid",[43220,198902]],["@metamask/snaps-utils>marked",[44747,355251]],["@material-ui/core",[49010,552688,790259,21872,197978,170398,100552,838528,396782,543658,584260,879781,591568,556067,867733,961716,544100,296646,841216,776972,648998,493356,575320,567186,233704,59195,872190,504080,236064,701121,121188,911065,630282,727576,788119,369532,999580,696800,37362,626134,111836,462194,411324,219192,226320,979172,39120,542839,370038,728702,808748,295066,500448,538008,859432,833614,3766,24883,352795,139969,56016,845216,68390,407643,804726,633479,59892,451631,854989,490442,659834,115813,366407,504646,830963,469489,890522,239424,829951,809651,718,399720,734278,870754,553125,155723,716153,876678,354382,742210,419474,640595,158214,292717,668048,830888,238636,729951,164897,447228]],["@material-ui/core>clsx",[731119]],["@material-ui/pickers",[179479,529434,501164,774913,839660,560469,813135,60069,282680,358624,163711,313833]],["@material-ui/pickers>clsx",[813427]],["@material-ui/core>@material-ui/styles",[317325,972965,169438,836449,506219,507443,718600,878017,194961,828803,362703,662818,970755,647279,375407,715075]],["@material-ui/core>@material-ui/system",[102641,859569,901465,563304]],["@material-ui/core>@material-ui/utils",[417475,292436]],["eslint-plugin-react>array-includes>math-intrinsics",[570615,662346,692337,877e3,608107,682992,304569,779452,963442,462667,742296,745689,439486,939663,96533,463028]],["ethereumjs-util>create-hash>md5.js",[689828,618979]],["ethereumjs-util>create-hash>md5.js>hash-base",[943779,368942]],["ethereumjs-util>create-hash>md5.js>hash-base>readable-stream",[614793,909868,653790,295891,556543,503288,144684,138273,789326,646997,271873,727408,938792,877081,700460,348143,703581,399348,555963,269826,757227,160302,973505,696310,388078,400525,708830,531483,377502,644997]],["@storybook/addon-docs>remark-external-links>mdast-util-definitions",[603936]],["react-markdown>remark-parse>mdast-util-from-markdown",[284865,839200]],["react-markdown>remark-parse>mdast-util-from-markdown>mdast-util-to-string",[350350]],["react-markdown>remark-rehype>mdast-util-to-hast",[540226,130453,542795,571047,645553,467157,658367,370310,191532,247600,195532,646177,55227,532167,695298,866355,215432,235812,964922,157984,694268,56788,577504,868166,712147,127017,361014,281038,317058,943308]],["react-markdown>remark-rehype>mdast-util-to-hast>mdurl",[590387]],["react-beautiful-dnd>memoize-one",[62147]],["@metamask/jazzicon>mersenne-twister",[760322]],["@metamask/abi-utils",[299205,961858,321138,548249,785400,867055,287633,743732,637609,553588,367419,558282,755921,756330,601499,936392,620595,252332,532046,29607,188300,986563,104527,985810,939255,833750,713501,968912,502414,666335,838797,191844,311312,34475,479238,212005,205067,974538,627674,458081]],["@metamask/account-api",[153586,529498,809904,974800,321829,474907,384170,809910,689812]],["@metamask/account-tree-controller",[187952,97640,885713,873836,293239,175270,796463,734827,993561,408041,349391,788527,216591,122341,931609,981064,393349,606160,816987,758496,574357,524339,6814,98970,636453]],["@metamask/accounts-controller",[454359,987279,529068]],["@metamask/accounts-controller>ethereum-cryptography",[264592,612662]],["@metamask/accounts-controller>ethereum-cryptography>@noble/hashes",[292769,653288,724563,629163]],["@metamask/address-book-controller",[719194]],["@metamask/announcement-controller",[540917]],["@metamask/approval-controller",[65997,241917,153453,394813]],["@metamask/assets-controller",[913517,618295,279549,390130,371528,833870,96869,168359,374360,514773,506990,96830,286672,285684,50327,64906,968666,615137,646318,935223,989832,349843,19837,548733,269575,979117,340969,711103,913292,200649,502199,912395,641245,350266]],["@metamask/assets-controller>bignumber.js",[963294,694204]],["@metamask/assets-controllers",[504120,693674,80576,811220,527184,694863,399475,383559,47056,473404,885680,987378,828388,518779,51554,642744,75857,881017,269791,633591,348157,558774,525289,455121,76667,625436,496218,99926,155938,252816,227462,314747,602744,44406,698513,650464,629210,469521,469817,158708,337947,232858,963666]],["@metamask/assets-controllers>@metamask/abi-utils",[653800,989813,983414,110978,760370,934351,460080,842351,762042,927643,574295,843075,843852,379982,978932,665897,410782,79244,40400,532064]],["@metamask/seedless-onboarding-controller>@metamask/auth-network-utils",[499592]],["@metamask/bridge-controller",[173624,197267,436243,394184,229718,440534,213142,663872,487592,748512,641650,550293,839517,474207,66216,282570,404283,912763,917425,619489,218494,182348,203612,76538,527704,269405,930221,182317,10669,511992,408776,402914,614223,475583,584207,408516,770001,290025]],["@metamask/bridge-controller>bignumber.js",[280389,990088]],["@metamask/bridge-controller>@metamask/controller-utils",[469238,599460]],["@metamask/bridge-status-controller",[239596,786748,593922,76114,283379,82763,634723,359698,277373,662620,602225,651356,549320,703316,564583,740984,230491,156424,765681,563764]],["@metamask/bridge-status-controller>bignumber.js",[23339]],["@metamask/bridge-status-controller>@metamask/controller-utils",[75375]],["@metamask/browser-passworder",[814320]],["@metamask/chain-agnostic-permission",[77523,746723,444501,296639,846671,849231,8655,825365,139341,156479,745814,728810,85904,626630,862259,155749,198095,381375,145096,816634,787218]],["@metamask/claims-controller",[724617,330808,921469,515813,3824,36693]],["@metamask/claims-controller>@metamask/controller-utils",[337098,498606,596979,397155,778386]],["@metamask/client-controller",[911765,23088]],["@metamask/connectivity-controller",[304893,440931,110931]],["@metamask/controller-utils",[465709,17605,395771,672307,725088,657638,30018,790580,496705,331489,644174,217912]],["@metamask/core-backend",[129697,234697,926115,52275,994506,209656,562425,852281,118914,396880,440116,943334,955781,64637,736094,947988,476069]],["@metamask/delegation-controller",[718255,299338,563262]],["@metamask/delegation-core",[472678,846404]],["@metamask/delegation-deployments",[94993]],["@metamask/design-system-react",[47233,314756,927951,848558,758832,842111,381150,985268,452304,912629,926968,201718,266965,306392,541292,261181,126528,449565,679968,248477,805600,466770,657580,480116,185194,641816,498658,219384,65874,380917,823445,849803,93278,602435,254465,814520,3372,639263,719082,640713,998246,443273,884056,844326,783173,157994,498677,783088,287721,588106,600838,344809,268870,168743,49421,729079,386745,330793,852336,446947,53669,40106,405165,323966,907319,518206,126134,287002,672992,38914,529775,828116,866927,836726,793216,508323,838490,158250,221371,216346,922726,170533,281244,804968,78990,623197,147602,853169,687513,180781,223901,879575,655301,533632,913802,870677,343043,592479,578429,68593,519559,455836,283931,75451,516438,790558,895370,596940,395528,488581,311698,972938,616203,581745,450435,868118,510243,160370,785016,903273,48845,409644,634850,310583,608887,723576,424341,992164,848365,112038,116791,966872,538324,460390,339262,679085,746812,738935,762644,942959,661447,290070,237457,376193,237405,124856,540463,486359,439550,527442,855034,146950,759310,108379,829471,160687,410701,346414,355670,392800,508533,80649,742351,546947,340390,773742,690034,458646,838175,434186,675319,712964,568085,579952,139911,437840,100791,593902,995163,531462,27150,68323,982635,282311,2762,327468,938132,166537,153472,244701,197951,290605,407699,465560,539783,621719,913807,559099,17635,281051,353187,302175,746005,832190,566707,890954,962428,931231,424502,876365,157783,799163,154468,955662,243877,970443,494800,694394,435684,949098,976849,687949,148696,411275,709071,244569,181902,806198,958152,67493,186304,507803,748507,627871,216793,534408,622832,449341,407554,720483,118991,845022,241686,811571,576040,990900,412524,174795,195120,183745,158317,296263,34997,518491,756741,21263,757654,21292,21875,937069,274207,72180,60938,331498,492670,582814,382707,50627,431037,524405,192794,432914,250778,877291,205278,879638,35721,618485,644493,632419,935664,831404,785427,86660,112120,479746,983857,364588,104095,181657,153108,65093,874176,454831,33539,180219,459182,746150,671492,775075,255145,439295,309111,60209,963245,451902,305955,827933,797460,934509,904306,652230,222496,445973,53784,845417,68940,314356,87288,520430,398412,303362,564250]],["@metamask/design-system-react>@radix-ui/react-slot>@radix-ui/react-compose-refs",[128659]],["@metamask/design-system-react>@radix-ui/react-slot",[700694]],["@metamask/design-system-shared",[506410,683772,584942,833304,79038,918070,206576,918318,556734,568894,706794,789292,305142,848574,75734]],["@metamask/design-tokens",[150197,347861,522686,831424,274241,681561,875644,941630,932782,288228,354226,784672,633612,857446,456111,92071,482988,759766,57071,158967,592338,91504,236763,377043,783158,83024,4796,681886,520522,870912,868103,416063,167203,912067,580960,711582,43562,225344,733721,914025,690691,451587,838442,500944,18657,972017,394478,528328]],["@metamask/eip-5792-middleware",[963674,566799,493678,157520,829199,601902,756243,15722,226158]],["@metamask/eip-5792-middleware>@metamask/transaction-controller",[348777]],["@metamask/eip-7702-internal-rpc-middleware",[318343,676991,295595,10715,132291]],["@metamask/ens-controller",[367577]],["@metamask/ens-controller>@metamask/controller-utils",[201938,103586,147221]],["@metamask/network-controller>@metamask/eth-block-tracker",[347118,601556,341783,336767]],["@metamask/eth-hd-keyring",[205942,780268,739583,152791]],["@metamask/eth-hd-keyring>ethereum-cryptography",[780922,739412,731631,342271]],["@metamask/eth-hd-keyring>ethereum-cryptography>@noble/curves",[392145,354273,257179,187339,803300,862530,511521,987385,86744,182506,275501,87749]],["@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes",[792524,701194,248241,414585,527563,592843,474660,185198,612378,361060,628989,749245,536710,109800,147274,842060,459303,591967,546308,455150]],["@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32>@scure/base",[46154,907904]],["@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32",[483953,66889]],["@metamask/eth-json-rpc-filters",[546759,117104,286386,573696,790498,757918,166189,939862,992949]],["@metamask/network-controller>@metamask/eth-json-rpc-infura",[597837,54642,744077,975366,611576,717129,473067,196288,391341,877372]],["@metamask/eth-json-rpc-middleware",[189713,881809,957027,878843,962778,576704,910743,368847,430431,313439,629507,936027,681384,581722,197542,4275,121009,980845,729132,112281,14889,865707,585259,360458,400071,367359,247270,454375,706620,8462,852692,641076]],["@metamask/eth-json-rpc-provider",[449129,884465,55711,566247]],["@metamask/eth-ledger-bridge-keyring",[77378,408424,238152,916461,638646,712450]],["@metamask/eth-qr-keyring",[806955,807147,985537,995456,961658]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography",[613096,64855,765773,837272,908046,748037]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth",[45117,545448,11448,593961]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>@ethereumjs/rlp",[427158,506783]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util",[761087,184430,977461,587542,650359,439612,924906,168567,499760,447377,209107,413456,145273,317236,910697,771662,748299,463212,260913,416838,365684,344007,218868,242063,392833,287160,451854,819879,106166,208833]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>uuid",[649953,76104,506592,186669,550868,242547,260475,719200,713983,551096,301766,724869,301443,573002,743621,419314,33238,751815,986623,695274,125928,695305,946844,39135,68131,711250,255195,241376,544660,809993]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry",[470297,909710,879846,337251,934292,749247,555919,182666,115358,71375,500906,961101,122720,638779,807629,675722,133557,906622,624951,550736,996720,311425,816816,300971,85578,177355,887673,76268,496447,161856,470600,815607,791890,22739,366027,949592,297008,700095,99602,337695,648167,738274,547987,456406,93215,261574,399949,782172,525856,67503,746060,461683]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/curves",[889447,854064,109372,23489,397454,30493,933636,803659,388218,774223,291818,197653,959172,158115]],["@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/hashes",[923857,562204,824280,772775,996388,274209,101525,245326,778756,545235,377027,402728,408688,953679,671835,860498]],["@metamask/eth-qr-keyring>uuid",[589243,646280,894057,852884,435635,329214,611514,433739,427112,579133,995985,42756]],["@metamask/controller-utils>@metamask/eth-query",[404176,605895]],["@metamask/eth-sig-util",[57209,621236,614147,47994,889949,162924,694157,371046,876521,884718,937867,852576]],["@metamask/eth-sig-util>ethereum-cryptography",[518254,457095,519021,131710,369916,961865]],["@metamask/eth-sig-util>@ethereumjs/rlp",[543820,799901]],["@metamask/eth-sig-util>@ethereumjs/util",[390601,789352,224572,853979,102198,729945,875209,212876,230947,193298,971309,670186,495838,669475,374639,198564,260237,227526,952208,743747,525453,627626,297342,789337,415846,361511,7824,679441,3683,209472]],["@metamask/eth-sig-util>ethereum-cryptography>@noble/curves",[394542,220803,492549,591346,247916,629229,755930,498307,173752,849595,206056,416989,576783,790586]],["@metamask/eth-sig-util>ethereum-cryptography>@noble/hashes",[570641,556322,88131,173646,59242,403269,760501,5324,926106,845139,337099,889070,529574,122679,780128,755859]],["@metamask/eth-sig-util>@scure/base",[96959,302420]],["@metamask/keyring-controller>@metamask/eth-simple-keyring",[670726,688668,466615,232031]],["@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography",[460532,544758,400353,11305]],["@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography>@noble/hashes",[223880,932770,741197,685957,828940,812262,95840,310270]],["@metamask/eth-snap-keyring",[814566,616374,902219,428805,769031,509330,688285,995880,686329,538699,628634,264624]],["@metamask/eth-snap-keyring>uuid",[580730,287168,748716,32493]],["@metamask/eth-token-tracker",[521476,255353,767110]],["@metamask/eth-token-tracker>@metamask/eth-block-tracker",[607723,614362,46097,696478,624895]],["@metamask/eth-trezor-keyring",[194445,914197,763152,264654,751374]],["@metamask/etherscan-link",[695223,947264,303495,314846,712830,64025,26449,759868,174599,450656,894858,971443,633713,466760]],["eth-method-registry>@metamask/ethjs-contract",[304931,149490,171151,679598,814390,22205]],["eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-filter",[724381,9590]],["eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format",[95618,407843]],["eth-method-registry>@metamask/ethjs-query",[883348,700457]],["eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-rpc",[482131,46392]],["@metamask/controller-utils>@metamask/ethjs-unit",[886634,797809]],["eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-util",[854571,820764]],["@metamask/gas-fee-controller",[310020,431866,65293,599413,899051,160643]],["@metamask/gator-permissions-controller",[142192,429712,884890,713139,875670,686681,424392,769132,872242,335505,466266,936022,38997,925520,110501,156998,547895,651900,747652,314123,287660,763604,505027]],["@metamask/gator-permissions-controller>@metamask/abi-utils",[37582,610268,74844,764636,488652,845545,73598,935085,442168,161685,820573,7757,681258,391364,466390,193591,786764,716418,294318,132430]],["@metamask/gator-permissions-controller>@metamask/transaction-controller",[313427]],["@metamask/geolocation-controller",[315609,542024,656154]],["@metamask/geolocation-controller>@metamask/controller-utils",[664050,444439]],["@metamask/hw-wallet-sdk",[784717,493765,853955,722299,959623,649775,925338,711044,832813,273429]],["@metamask/jazzicon",[762823,983303,256985]],["@metamask/jazzicon>color>color-convert",[793961,698052,665773]],["@metamask/jazzicon>color>color-convert>color-name",[670366]],["@metamask/jazzicon>color",[796458]],["@metamask/snaps-sdk>@metamask/key-tree",[429080,508238,141769,734086,682109,697917,35275,650475,256046,385992,476536,872266,217774,693932,224378,854828,42741,379669,53921,88321,677015,64263,94947,401771,732112,302322,963624,376978,611777,480665,100468,500846,433368,410574,515430,268988,611155,920131,949840,460538,111999,568607]],["@metamask/keyring-api",[416067,341483,477322,619756,179447,201831,848319,161271,39610,431348,713873,751817,510751,979855,17121,612293,614973,861320,996882,957740,139070,189687,886319,373585,618809,607893,867525,853429,792581,530237,467236,354630,207513,871089,242317,928525,546277,970519,402239,456416,906646,311332,711298,76572,348554,556744,595704,469546,622416,670158,674397,756597,914976,161934,896322,573028,53221,286141,727517,689297]],["@metamask/keyring-controller",[308565,280501,511133,893653,869959,43319]],["@metamask/keyring-internal-api",[976690]],["@metamask/keyring-internal-snap-client",[342395]],["@metamask/eth-hd-keyring>@metamask/keyring-sdk",[413567,314527,210385,523985,693228,779182,172550,714140,932754]],["@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography",[42337,824745,142909,103525]],["@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography>@noble/hashes",[785108,465454,411983,756415,720650,10928,845020,821114]],["@metamask/eth-hd-keyring>@metamask/keyring-sdk>uuid",[831052,905303,697490,280255,345719,409470,682642,266243]],["@metamask/keyring-snap-client",[576446,656228]],["@metamask/keyring-snap-client>uuid",[580723,973252,292899,616586,210603,81254,968219,724414]],["@metamask/eth-snap-keyring>@metamask/keyring-snap-sdk",[517441]],["@metamask/keyring-utils",[61683,790539,156635,707315,924572,551277,554909,90678,364524]],["@metamask/logging-controller",[312137,704480,864342]],["@metamask/message-manager",[892833,778884,822403,888514]],["@metamask/message-manager>@metamask/controller-utils",[834756,187024,733931]],["@metamask/metamask-eth-abis",[409227,110546,986848,571397,501128,632915,785012,294601,285981,882628]],["@metamask/multichain-account-service",[122562,948806,720318,259468,670304,448197,466573,724898,112872,326291,550478,184157,266869,813193,614513,280918,251721,534335]],["@metamask/multichain-account-service>@metamask/accounts-controller>ethereum-cryptography",[209271,291919]],["@metamask/multichain-account-service>@metamask/accounts-controller",[585140]],["@metamask/multichain-account-service>@metamask/keyring-api",[833627,902292,115743,265759,986791,139960,706668,675113,426583,375159,438505,508517,156442,974934,684511,836644,809822,42767,335442,570633,163764,928894,943448,84318,672239,203946,964131,204065,193601,967596,573437,526941,717108,600997,410920,224692,598398,409873,472181,371418,91819,200717,411436,572455,355688,434553,100876,911284,171541,218240]],["@metamask/multichain-account-service>@metamask/keyring-snap-client",[232086,642339,858567,793192]],["@metamask/multichain-account-service>@metamask/keyring-snap-client>@metamask/keyring-api",[444365,1014,667813,425945,569013,763642,255002,344815,351909,564557,946883,328496,687108,301640,651825,955890,225304,217085,31192,857391,250162,750588,70218,900220,611885,445563,607882,475083,856175,321410,398083,5230,478774,916664,634983,188771,892451,202062,806997,670602,458943,907546,564434,224679,783842]],["@metamask/multichain-account-service>@metamask/keyring-snap-client>uuid",[517052,833666,264718,225267]],["@metamask/multichain-account-service>@metamask/accounts-controller>ethereum-cryptography>@noble/hashes",[494044,602569,286136,170430]],["@metamask/multichain-api-middleware",[201424,360985,365988,964508,781281,882710,706021,290262,44375]],["@metamask/multichain-network-controller",[583231,578631,305556,951493,90101,365769,238301,15549]],["@metamask/multichain-transactions-controller",[842180]],["@metamask/name-controller",[140701,166701,314403,803418,801175,193354,514121,419490,562227,530451,420226]],["@metamask/name-controller>@metamask/controller-utils",[812830,820184]],["@metamask/network-controller",[152289,469233,24414,418084,918748,877882,479558,762180,636061,143149,310464,339710,552682,368268,85702,964084]],["@metamask/network-enablement-controller",[115630,103362,723871,317286]],["@metamask/transaction-controller>@metamask/nonce-tracker",[877795,753684,111187,775896]],["@metamask/transaction-controller>@metamask/nonce-tracker>async-mutex",[616599,793012,955353,224172,751816,596941,857279,517950,538693,420968,997852,160583]],["@metamask/notification-services-controller",[767678,197760,713351,749512,375746,510708,221890,346373,989029,599565,495805,303728,767898,308033,64369,760231,923231,543059,390923,795086,995144,291105,604977,192982,19676,651806,543884,629492,984642,787532,914806,713264,101843,349332,433170,106145,565553]],["@metamask/notification-services-controller>bignumber.js",[807275,666371]],["@metamask/notification-services-controller>@metamask/controller-utils",[519746,645160,192551,833287]],["@metamask/controller-utils>@metamask/ethjs-unit>@metamask/number-to-bn",[611538,360646]],["@metamask/obs-store",[122300,283244,854077,232983,214299,983819]],["@metamask/obs-store>readable-stream",[445831,40045,529089,27195,517819,945999,802572,844312,874307,621489,496410,923699,561854,739558,779210]],["@metamask/passkey-controller",[138773,691697,749002,772780,218032,567228,474063,485540,376804,971807,697881,466756,253699,798478,270306,504249,665784]],["@metamask/permission-log-controller",[975030,259599]],["@metamask/perps-controller",[913593,94234,861371,146767,814201,16793,375098,981240,798777,829841,584052,689897,585609,887722,109005,852270,531124,58920,672347,880754,346778,748123,679054,305148,131776,594397,146835,526637,245918,972819,999037,550715,789705,172336,386261,99578,643012,491588,147715,741649,826868,395119,731783,3893,272322,550375,545599,196734,174548,364166]],["@metamask/perps-controller>@metamask/abi-utils",[868788,384121,755786,754006,985566,219571,706940,894907,334918,754647,473419,730423,116976,272986,600352,453061,496754,866792,331284,386804]],["@metamask/phishing-controller",[910698,661700,179655,841681,94168,379764,311290,477648]],["@metamask/phishing-controller>ethereum-cryptography",[13676,461490]],["@metamask/phishing-controller>ethereum-cryptography>@noble/hashes",[530685,323927,260127,151383]],["@metamask/polling-controller",[816571,716003,481268,729986,217732]],["@metamask/ppom-validator",[439250,774755,44440,317324]],["@metamask/profile-metrics-controller",[279742,449601]],["@metamask/profile-metrics-controller>@metamask/controller-utils",[37653,814310]],["@metamask/profile-sync-controller",[863513,953791,497660,562397,408685,87602,326838,893813,340094,726774,773579,370622,473528,146021,992137,978355,703447,699912,125644,574168,785066,743929,392077,54190,931824,798631,628147,192614,266123,399923,958387,183531,432448]],["@metamask/rate-limit-controller",[960504]],["@metamask/react-data-query",[574018]],["@metamask/react-data-query>@tanstack/query-core",[635404,150029,206549,332205,633538,721876,690899,12569,236783,210534,804467,117168,543348,394846,375448]],["@metamask/remote-feature-flag-controller",[347168,773330,771708,969624,949849,647409]],["@metamask/scure-bip39",[81675,595876,951037,592190]],["@metamask/scure-bip39>@noble/hashes",[239227,827658,284016,494981,401576,932221,282772,980895,826338,88469,493384,938735,614013,40134,602281,879240,153848,835673]],["@metamask/scure-bip39>@scure/base",[763261,817596]],["@metamask/seedless-onboarding-controller",[58316,676672,489740,44298,987160,597094,568481,673982]],["@metamask/selected-network-controller",[722670,500662]],["@metamask/shield-controller",[395525,645148,264749,298080,392003]],["@metamask/shield-controller>@metamask/controller-utils",[755073,669506]],["@metamask/shield-controller>@metamask/transaction-controller",[229162]],["@metamask/signature-controller",[353121,602709,415436,535278,80579,147818,585130,521464]],["@metamask/signature-controller>@metamask/controller-utils",[326668,889967,121359,81400,961651]],["@metamask/smart-transactions-controller>bignumber.js",[22178]],["@metamask/smart-transactions-controller>@metamask/controller-utils",[111303,578374]],["@metamask/smart-transactions-controller>@metamask/transaction-controller",[977646]],["@metamask/snaps-controllers",[741600,461950,944997,730480,313696,675694,577326,444711,757707,597831,148130,630702,367752,794568,556807,979892,75248,346729,211576,561294,579802,67054,409994,297171,711526,892007]],["@metamask/snaps-controllers>concat-stream",[620330]],["@metamask/snaps-controllers>readable-stream",[66178,326552,254274,917006,838196,904542,773003,601617,123226,613720,794997,516256,531867,961593,204183]],["@metamask/snaps-registry",[517254,416543]],["@metamask/snaps-utils",[988950,722312,358e3,214250,125517,156828,912022,83472,685502,90404,191510,96974,253358,752260,968074,62099,353963,939241,90157,903038,631524,987002,480218,642135,919190,385966,98911,712,67069,430595,914420,776622,790516,619193,666849,274065,630249,668987,305082,54872,106292,431050,761368,246146,650976,290282,88074,439215,252164,556550,958657,237825,355897,843881,140657,871120,676798,392380,749974,649571,116243,504536,190258,64902,467320,988931,298523]],["@metamask/snaps-utils>validate-npm-package-name",[226237,266332]],["@metamask/storage-service",[284695,338363,108300]],["@metamask/subscription-controller",[687301,371900,861421,135109,942463,234144,31201,663425]],["@metamask/subscription-controller>bignumber.js",[6934]],["@metamask/subscription-controller>@metamask/transaction-controller",[372586]],["@metamask/network-controller>@metamask/swappable-obj-proxy",[832336,17647,665751,871023,354249,101126,526066,480251]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup",[503758,296670,555861,874103,805151,139746,344341,59707,592245,486454,655886,693492,249917]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup>@metamask/auth-network-utils",[642486,264439,218420,192016,485152,448843,617821,995070]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup>@toruslabs/http-helpers",[875592]],["@metamask/transaction-controller",[294998,788457,443975,204471,736572,900682,8862,333136,401604,780690,592361,600993,910917,857157,885377,24889,897424,354166,53002,334940,473678,623476,450915,730691,348372,283806,972974,721372,777496,174838,633519,909935,622702,795104,546292,247702,493646,581224,850156,459550,992657,491993,129438,196832,97519,755199,482355,660227,907315,451275,699924,607402,454515,446675,619783,684871,158388,883847,200881,601673,660502,113784,366703,523615,774464,976022,637434,907628,795886,757560,731521,317161,735330,685128,598279,145895,579150,486568,590020,420762,940636,71530,317525,941717,212734,15420,57529,978561,600795,80667,16762,910368,284742,133660,769434,963648]],["@metamask/transaction-controller>bignumber.js",[717341,70861]],["@metamask/transaction-pay-controller",[989e3,40909,460820,481511,286559,265252,376762,114558,3374,807109,719107,714298,363506,536724,70208,968903,382126,955395,926586,658276,293522,899465,948928,387286,729938,710291,654705,279765,932378,789235,132650,225985,971863,130406,911876,990999,782936,367401,482232,926676,571657,628972,641985,252102,685993,702673,976393,515223,620880]],["@metamask/transaction-pay-controller>bignumber.js",[708476]],["@metamask/user-operation-controller",[160354,667827,379274,826455,272010,249322,941891,390665,355601,484013,798564,792355]],["@metamask/user-operation-controller>@metamask/controller-utils",[672125,699697,773499]],["@metamask/user-operation-controller>@metamask/transaction-controller",[195479]],["eth-lattice-keyring>@ethereumjs/util>micro-ftch",[203639,879158]],["react-markdown>remark-parse>mdast-util-from-markdown>micromark",[387601,122266,432225,626280,757024,913200,160413,147528,861137,619473,236757,144508,588891,784573,517015,961766,129245,429198,677964,465465,703367,779357,345752,115271,877216,763528,167141,32735,852994,857909,55976,505862,434122,166022,596678,386920,646592,993242,367096,754388,13320,68733,350100,725077,971933,91494,942864,191006,749567,255771,970745,678462,995783,369e3,835101,300725,935714,804392,971206,156518,472696,415431,158366,920522,667890,542008,89161,50096,619258,513233,50571]],["crypto-browserify>diffie-hellman>miller-rabin",[434884,183009]],["@toruslabs/eccrypto>elliptic>minimalistic-assert",[147749,993586]],["@toruslabs/eccrypto>elliptic>minimalistic-crypto-utils",[178175,276212]],["@ensdomains/content-hash>cids>multibase",[514284,721316,563455,535426,840247]],["@ensdomains/content-hash>multicodec>uint8arrays",[402713,27360,46652,383281,812563,811595]],["@ensdomains/content-hash>multicodec",[454260,475676,558519,588582]],["@ensdomains/content-hash>cids>multibase>@multiformats/base-x",[362219]],["@metamask/assets-controllers>multiformats",[421247,393293,796271,2180,861651,963547,981279,272323,255843,945202,415178,371330,164284,603409,6659,959605,62677,694756,526898,815982,650504,649495,102959,81894,617877,935420,558696,86192,814198,137398,64844,367504,748102]],["@ensdomains/content-hash>cids>multihashes>uint8arrays",[870659,689713,816796]],["@ensdomains/content-hash>cids>multihashes>varint",[882867,172319,215425,642209]],["@ensdomains/content-hash>cids>multihashes",[215067,508380]],["@ngraveio/bc-ur",[750651,526436,893188,347103,210805,816060,334683,314138,715987,226530,608778,862909,585651,776950,912490,396333,10198,903681,757357,669916,216814,767373,916561,84968]],["@ngraveio/bc-ur>bignumber.js",[853482,574149]],["@metamask/perps-controller>@nktkas/hyperliquid",[768199,270625,820195,962124,150470,549794,43298,973117,832381,478198,829250,241692,798836,160051,73209,675165,740695,104310,527994,129948,711139,762251,719646,766095,949468,954322,541472,202414,789670,977346,451435,738241,841060,692635,392167,570471,387209,874382,741333,828565,152238,988742,262760,659457,385194,197246,942032,683450,875493,783164,84664,938067,628785,394517,852059,268552,565131,65043,621657,937165,841020,434482,326519,259296,320642,18560,658208,611035,926684,79597,501794,478362,998918,89070,343698,875859,344020,447958,437988,726860,666918,255330,132690,597190,562644,748273,155866,337336,88335,417884,773136,497865,179640,276499,614844,658842,562132,206361,51875,327618,55766,629027,271713,93865,872495,64224,429317,496559,126567,109780,793757,855435,557761,136260,812171,640785,899800,172348,429670,896315,412173,275874,893166,489879,583071,706675,13122,341190,782054,440042,950833,918025,152777,383673,533203,117695,368592,711065,148576,682241,723835,232607,172122,160212,70157,769328,684830,425034,209458,592829,342125,977395,183434,478572,604365,49749,902314,715410,703655,924503,832482,134558,798285,910337,275152,327938,453765,423124,827366,747952,749123,792057,77635,951449,735072,238252,58517,469299,734273,810924,395241,760659]],["@metamask/perps-controller>@nktkas/hyperliquid>@noble/hashes",[720738,59573,104737]],["@metamask/perps-controller>@nktkas/hyperliquid>@nktkas/rews",[745286]],["@noble/ciphers",[539353,103250,215500,193952,305394]],["@noble/curves",[245215,761030,90800,657726,341076,992425,610537,522803,792499,391582,927500,909314,489928,446266,838156,673049,982322,589072,557246,215644,362271,620493,36773,58340,805134,312851,422644]],["@metamask/snaps-utils>fast-xml-parser>@nodable/entities",[282373,975253]],["eth-lattice-keyring>gridplus-sdk>cbor>nofilter",[903011]],["eth-method-registry>@metamask/ethjs-contract>ethjs-abi>number-to-bn",[545984,55795]],["react>object-assign",[858524,580513]],["string.prototype.matchall>es-abstract>object-inspect",[75518,427195]],["@ngraveio/bc-ur>assert>object-is",[628587,180974,331205,864250,129730,288097,827856,669991]],["@lavamoat/webpack>json-stable-stringify>object-keys",[1314,69051,959646,266165,109346,910229]],["gulp>vinyl-fs>object.assign",[302547,108822,983725,7337,461066,724264]],["@open-rpc/meta-schema",[429094]],["@open-rpc/schema-utils-js",[426923,835483,312700]],["@metamask/assets-controller>p-limit",[451646]],["react-syntax-highlighter>refractor>parse-entities",[512920]],["path-browserify",[386023]],["@metamask/snaps-utils>fast-xml-parser>path-expression-matcher",[473330,294568,239362]],["crypto-browserify>pbkdf2",[428172,887331,2216,80295,303271,952964,86900,80105,522749,696696,910166,85317]],["crypto-browserify>pbkdf2>create-hash",[396674,484895,533972,205939]],["crypto-browserify>pbkdf2>ripemd160",[719133,652176]],["crypto-browserify>pbkdf2>ripemd160>hash-base",[571210,552081]],["pify",[182678]],["@material-ui/core>popper.js",[975427]],["@popperjs/core",[818832,659638,149922,757155,843022,954239,978752,492560,70361,872787,826916,947862,226744,762019,302530,638543,120185,864542,351475,172285,25019,335526,750319,33565,568598,814127,262272,553918,131500,3598,589833,532874,680243,773577,925448,908905,790791,326635,183817,794063,218858,50696,289140,513223,891016,134115,330629,815258,206556,201918,104262,886298,674110,400267]],["string.prototype.matchall>es-abstract>typed-array-length>possible-typed-array-names",[676397,267058]],["readable-stream-2>process-nextick-args",[102393,951712]],["eth-method-registry>@metamask/ethjs-query>promise-to-callback",[587668,555821]],["prop-types",[991606,787332,557789]],["@google/genai>protobufjs>@protobufjs/aspromise",[28178,35757]],["@google/genai>protobufjs>@protobufjs/base64",[16754,380567]],["@google/genai>protobufjs>@protobufjs/codegen",[80225,675374]],["@google/genai>protobufjs>@protobufjs/eventemitter",[846230,855605]],["@google/genai>protobufjs>@protobufjs/fetch",[873489,895260]],["@google/genai>protobufjs>@protobufjs/float",[328223,179442]],["@google/genai>protobufjs>@protobufjs/inquire",[102313,255290,536800]],["@google/genai>protobufjs",[507776,960613,54984,351947,599071,265120,96183,762632,31787,643600,28e3,923043,792509,798400,138217,864122,761437,798572,35271,424830,961051,682188,299467,391222,592094,277049,233393,956568,929078,305297,481277,818306,615815,179394,730044,281537,23346,649399,275867,506830,119463,440818,566535,550602,350553,807996,720035,677694,306722,488703,540186,319347,151942,971709,411124,626081,817362,85127,19298,363917,173310,218825]],["@google/genai>protobufjs>@protobufjs/path",[628850,437271]],["@google/genai>protobufjs>@protobufjs/pool",[725269,476366]],["@google/genai>protobufjs>@protobufjs/utf8",[843255,966234]],["crypto-browserify>public-encrypt",[584160,353663,139006,288869,8891,889634,277769,576758,710908,574303,97677,372704]],["punycode",[844744,478759]],["qrcode-generator",[929736]],["qrcode.react",[174799]],["mockttp>express>qs",[315677,185960,556189,90124,498449,717698,579775,169116,770603,80776]],["@metamask/snaps-controllers>tar-stream>streamx>queue-tick",[24228]],["react-beautiful-dnd>raf-schd",[930197]],["crypto-browserify>randombytes",[62174,883369]],["crypto-browserify>randomfill",[96103,938026]],["react-beautiful-dnd",[556653]],["react-chartjs-2",[173127]],["react-focus-lock>react-clientside-effect",[132165]],["react-compiler-runtime",[844129,303280]],["react-devtools-core",[38588]],["react-dom",[54490,1159,879505,421522]],["react-dom>scheduler",[355808,707611,285234,628313]],["react-popper>react-fast-compare",[101875]],["react-focus-lock",[921718,124676,171702,977522,59129,679770,304417]],["react-hot-toast",[638891]],["react-idle-timer",[282382]],["react-redux>react-is",[714527,502770,610502,753371]],["react-markdown",[909295,966680,66117,973839]],["react-popper",[646948,897908]],["react-redux",[169835,176578,228907,473584,872169,314102,601618,291331,956152,132837,62629,578600,684723,966284,369148,772362,630119,733602,721075,691857,23106,196108,745865,314701,77364,541328,470995,48084,193183,738790,5637,160697,52906,322489,235140,263695,525300,701844,202818,421859]],["react-router-dom",[994112]],["react-router-dom>react-router",[107495]],["react-simple-file-input",[742431]],["react-tippy",[971180]],["react-tippy>popper.js",[762337]],["react-toggle-button",[490926]],["react-transition-group",[131350,936137,829556,996331,639130,84954,284003]],["react",[336620,740770,23591,860012,694737,276592]],["@metamask/snaps-controllers>readable-web-to-node-stream",[185911]],["@metamask/snaps-controllers>readable-web-to-node-stream>readable-stream",[142272,176810,513564,433448,878666,343052,619877,959995,99080,222566,578847,302450,472649,157503,771129]],["remote-redux-devtools>redux-devtools-core",[650496,172251,778624]],["remote-redux-devtools>redux-devtools-core>nanoid",[659269]],["remote-redux-devtools>redux-devtools-instrument",[217867]],["redux-thunk",[411596,488961]],["redux",[781107,60416]],["@reduxjs/toolkit",[363117,55820]],["@reduxjs/toolkit>reselect",[800725,93958,280614,317341]],["string.prototype.matchall>regexp.prototype.flags",[85627,330037,167986,739552]],["react-markdown>remark-parse",[11815]],["react-markdown>remark-rehype",[607537]],["react-router-dom>@remix-run/router",[682660]],["remote-redux-devtools",[398548,712044,120443,417589]],["remote-redux-devtools>redux-devtools-core>remotedev-serialize",[205061,464435,274996]],["reselect",[320826,491616]],["@metamask/snaps-utils>rfdc",[397348,965459]],["@material-ui/pickers>rifm",[347901]],["ethereumjs-util>create-hash>ripemd160",[777899,67700]],["ethereumjs-util>create-hash>ripemd160>hash-base",[571642,346203]],["ethereumjs-util>create-hash>ripemd160>hash-base>readable-stream",[551538,285643,723865,43604,679445,438430,567434,946039,493940,900663,728171,816462,446872,409345,423684,972431,686967,379370,672997,172368,63822,605971,508079,462220,682597,542298,366234,516851,952405,816782]],["@rive-app/react-canvas",[913965]],["ethereumjs-util>rlp",[138403,724840]],["remote-redux-devtools>rn-host-detect",[653154]],["wait-on>rxjs",[246511,330355,733160,526292,288855,861952,352984,545828,924791,333101,473262,386675,445667,534931,284905,598869,455485,181684]],["string.prototype.matchall>es-abstract>safe-regex-test",[92025,316702]],["@metamask/eth-json-rpc-middleware>safe-stable-stringify",[330764,584294,612980,269593]],["remote-redux-devtools>socketcluster-client>sc-channel",[891709]],["remote-redux-devtools>socketcluster-client>sc-errors",[601342,520309]],["remote-redux-devtools>socketcluster-client>sc-formatter",[38652]],["ethers>@ethersproject/json-wallets>scrypt-js",[587226,305583]],["@scure/base",[167794,54584,401064,591315]],["ethereumjs-util>ethereum-cryptography>secp256k1",[139216,667525,524053,173156,634699,670816]],["@segment/analytics-node>@segment/analytics-core",[184523,20572,946716,160977,265654,443705,549335,863234,102288,171519,847214,706813,956877,889906,420293,416644,847051,12916,781258,194733,564798,599055,558012,395707,858693,210822,70932,282999,417256,58131,681279,175194,160021,489300,433490,243329]],["@segment/analytics-node>@segment/analytics-generic-utils",[267284,927339,556176,958351]],["@segment/analytics-node",[737101,617928,968015,34948,950625,905068,529724,340597,703484,955779,65280,677885,335978,654187,778153,926980,881020,385801,668435,365146,653229,726152,32883,143928,744764,94823,135879,991406,163263,271148,340730,679751,23300,462823,71633,521632,885160,808463,279322,525457,816565,499454]],["semver",[539237,300736,801015,601198,673188,23533,599249,102998,3310,563167,620631,130698,520364,212669,464838,980803,887195,846768,843432,148533,230370,481665,523337,783212,605657,930980,143902,630655,279024,685987,712800,547847,645178,944893,275905,223550,74207,256030,444259,348400,220692,829373,677238,159585,9090,675323,315317,771932,526710,838869,588412,248391,250377,321564,606005,231148,343546,24503,466097,869544,197544,884499,917098,389193,618315,661824,993225,469878,502116,297891,934487,467260,36974,927927,692636,589551,839933,458014,103370,568925,872547,71608,282429,261200,213832,330975,919006,908975,696027,400386]],["string.prototype.matchall>call-bind>set-function-length",[874449,530974]],["string.prototype.matchall>set-function-name",[81814]],["eth-method-registry>@metamask/ethjs-query>promise-to-callback>set-immediate-shim",[408243,859550]],["@ngraveio/bc-ur>sha.js",[363368,505109,158146,312053,576585,797502,268651,132806,741756,774747,381195,971836,588986,637803,240184,699859]],["string.prototype.matchall>side-channel>side-channel-list",[547412,592227]],["string.prototype.matchall>side-channel>side-channel-map",[344459,651190]],["string.prototype.matchall>side-channel>side-channel-weakmap",[176959,160534]],["string.prototype.matchall>side-channel",[114231,800360]],["@simplewebauthn/browser",[931567,322193,35049,750119,891367,134797,80287,833807,430850,345592,454807,482346,328784,955988,311050,216354,130116,537185,998633,693695,173983,534444,600306,934135,50783]],["@metamask/assets-controllers>single-call-balance-checker-abi",[523973,800904]],["@metamask/profile-sync-controller>siwe",[314810,733878,179635,6888,218340]],["@metamask/profile-sync-controller>siwe>@spruceid/siwe-parser",[814630,151927,193476]],["remote-redux-devtools>socketcluster-client",[94862,963198,844684,280959,672552,46337,701487]],["remote-redux-devtools>socketcluster-client>buffer",[627940]],["remote-redux-devtools>socketcluster-client>clone",[430638]],["remote-redux-devtools>socketcluster-client>querystring",[29941,676013,554315]],["remote-redux-devtools>socketcluster-client>uuid",[192925,998316,648025,107216,905155]],["@solana/addresses",[500089,87145]],["@solana/addresses>@solana/codecs-core",[839037,531837]],["@solana/addresses>@solana/codecs-strings",[694842,726472]],["@solana/addresses>@solana/errors",[410059,652139]],["react-markdown>space-separated-tokens",[127668]],["@metamask/controller-utils>@spruceid/siwe-parser",[129409,955286,827111,751528,100020,890577]],["@metamask/profile-sync-controller>siwe>@stablelib/random>@stablelib/binary",[465903]],["@metamask/profile-sync-controller>siwe>@stablelib/random>@stablelib/binary>@stablelib/int",[283731]],["@metamask/profile-sync-controller>siwe>@stablelib/random",[536751,497547,291974,859089]],["@metamask/profile-sync-controller>siwe>@stablelib/random>@stablelib/wipe",[896039]],["string.prototype.matchall>es-abstract>stop-iteration-iterator",[181996]],["stream-browserify",[594950,985631]],["stream-browserify>readable-stream",[249192,52799,982626,305685,794353,969524,207664,588091,464002,836603,109279,903300,124413,311802,765283,522422,69755,32544,719265,715374,500040,994407,93530,699075,284417,525412,312964,864599]],["stream-http",[683392,899161,802719,99248,947198,162465,270320,482901]],["stream-http>readable-stream",[748454,493781,657508,408375,50326,410939,823306,874757,790745,719184,512565,81802,786999,665564,363357,626160,331753,23086,324940,201511,988137,113306,790540,184437,382647,930722,189546,891549,193050,438859]],["@metamask/snaps-controllers>tar-stream>streamx",[976112]],["eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix",[341529,646944]],["@metamask/snaps-utils>fast-xml-parser>strnum",[381586]],["react-markdown>style-to-object",[230916]],["mockttp>@httptoolkit/subscriptions-transport-ws>symbol-observable",[992594,795713]],["@metamask/design-system-react>tailwind-merge",[704044]],["@metamask/core-backend>@tanstack/query-core",[858328,439038,161171,173115,781356,748346,29564,358746,273977,156121,870863,455135,616835,747931,424192,203094,667857,915553,935826,637584,545940,178462,962554,202888,138672,217142,983043,964579,101148,869222]],["@tanstack/react-query",[224732,866471,511705,493565,237278,630844,599973,940025,967358,842109]],["@tanstack/react-query>@tanstack/query-core",[652413,302985,236190,461608,205762,632922,959783,915115,53199]],["@tanstack/react-virtual",[207896]],["@tanstack/react-virtual>@tanstack/virtual-core",[737520,282889]],["@metamask/snaps-controllers>tar-stream",[562629,79433,575068,710146,102375]],["react-beautiful-dnd>css-box-model>tiny-invariant",[387325]],["@ngraveio/bc-ur>sha.js>to-buffer",[971502,715425]],["base32-encode>to-data-view",[351418]],["copy-to-clipboard>toggle-selection",[876026]],["@metamask/seedless-onboarding-controller>@metamask/auth-network-utils>@toruslabs/constants",[633972]],["@toruslabs/eccrypto",[510991]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup>@toruslabs/fetch-node-details",[547778]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup>@toruslabs/fetch-node-details>@toruslabs/http-helpers",[33204]],["@metamask/seedless-onboarding-controller>@metamask/toprf-secure-backup>@toruslabs/fetch-node-details>@toruslabs/fnd-base",[29546,186037,340414,389327]],["@trezor/connect-web>@trezor/connect-common",[381636,494623,745347,556102,881967,439606,32142,371709]],["@metamask/eth-trezor-keyring>@trezor/connect-plugin-ethereum",[654736]],["@trezor/connect-web",[904484,511005,895143,802974,690222,475227,777401,839726,770573,676994,161947,940370,883249,58278,334331,948414,942600,115319,72012,264637,448771,272084,387724,932425]],["@trezor/connect-web>@trezor/connect",[216078,728359,553483,845438,342593,531360,92633,771544,458880,122517,507351,12270,763550,832029,277055,644936,819892,965279,151165,451946,515009,497326,95052,345251,735653,283080,740975,150522,56800,841885,323965,941442,478494,799799,823473,740096,203181,161174,574164,860263,946769,108752,999030,896867,701362,659703,764876,699779,620541,40574,989991,715952,327912,945725,75084,314251,595757,773642,517530,195279,390491,989118,74383,646784,190159,794554,517669,381398,231494,686693,878923,608124,655131,43960,416188,905327,996616,986858,767847,725136,949565,792108,274388,10025,565501,360800,3467,620568,66501,347648,266718,141773,489630,329191,40275,997540]],["@trezor/connect-web>@trezor/connect>@trezor/device-utils",[781842,913937,903089,886318,358991,103192,586775,817832,406597,670190,892554,292761,389452,716385]],["@trezor/connect-web>@trezor/connect-common>@trezor/env-utils",[314353,410764,973721,53958,759514,893317]],["@trezor/connect-web>@trezor/connect>@trezor/protobuf",[534276,331427,969356,206351,783184,822449,523596,974893,239021,192040,224121,669094,889390,311145]],["@trezor/connect-web>@trezor/connect>@trezor/schema-utils",[948506,547183,735599,508198,261702,379509,736876,813617,484613,342180,359360,585053,984401,122668,463685,898126]],["@trezor/connect-web>@trezor/connect>@trezor/schema-utils>@sinclair/typebox",[103796,247839,160650,147967,448635,444812,93946,382219,538649,573014,652547,91810,410871,393392,268431,468448,757749,783082,572055,702304,689850,155699,86268,318295,814483,410500,204592,471615,906404,187089,896175,137584,72857,51590,200299,627324,696340,387371,751934,59823,169820,8659,976667,175584,928016,406295,8156,793685,861799,593712,972501,54028,423120,346487,216042,517437,848148,32976,123788,526787,848245,600804,501984,242637,842182,351009,283058,575449,220944,562097,422288,31199,616756,86775,304363,110900,760233,266034,811224,732863,683755,731968,466580,433803,504217,816546,756897,925046,830570,684089,430971,25964,547506,972457,529967,51314,271501,664900,760170,6909,549043,214286,849448,257519,407783,929194,607170,621237,806053,932286,830144,672327,804343,343978,168041,409462,329881,593512,552736,687162,208829,606394,778184,507671,799516,798959,722688,171039,997471,206718,254583,652606,130473,57744,201769,49638,825131,156134,118804,408619,100733,834870,843683,817460,834141,595154,781247,127040,341314,877395,447676,362667,617912,409603,63092,47863,893015,195856,469696,695871,407776,31117,379348,791141,670079,813696,293830,34641,971642,549475,725168,778113,498822,853339,560885,650258,505749,197250,367026,96669,50892,463315,345602,132911,50615,713608,409653,955668,56643,331519,988942,525073,688581,678102,259428,50501,848123,277379,102130,971233,65932,364835,332271,559614,540152,301031,838363,638924,916792,753591,236703,119200,26584,792063,170758,904973,111776,99035,260556,590019,298565,791780,174218,59605,481167,808800,922572,673921,367215,561224,827098,596773,720281,362796,159565,390546,738595,634166,905518,178057,349811,160244,415965,93690,466e3,980367,747896,583259,404401,868260,994890,39217,467452,208399,733547,637094,259932,415827,186315,901930,635952,851479,271739,424426,632188,69587,238830,854521,160863,274396,365852,859375,951275,355440,319196,381147,657502,979371,436271,899128,854335,412896,37588,608015,454835,646480,449922,529709,937600,476897,314851,846752,912057,761770,655535,722276,587870,118003,430514,621097,769314,582371,712099,245444,215793,538011,856465,194706,639144,980539,50320,845483,891552,874423,265631,609038,957389,661966,741595,394828,8688,859079,876464,763083,172991,239292,60711,880937,844162,465701,319867,335570,878559,956704,403763,331682,181915,503150,373225,112236,626993,630094,505954,16791,995631,188342,28818,691341,191637,836330,239055,66004,628264,257695,588569,788050,888891,117284,81164,668354,380795,685526,780967,229684,467378,482649,717272,398387,96495,889739,913407,818560,10071,805096,842900,408437,583492,312491,653368,201099,136823,897100,871056,557183,249206,50686,799272,810711,220746,421427,724670,48745,561555,856410,808118,850066,219050,468373,778881,804806,952005,719546,671534,210369,354589,383298,771350,405919,786415,489560,528259,813970]],["@trezor/connect-web>@trezor/connect>@trezor/transport",[203388,10733]],["@trezor/connect-web>@trezor/utils",[486057,680084,507929,54404,87568,746311,727253,540608,196811,707804,514914,600807,309599,144958,818546,488143,610477,979738,312634,245289,473116,711619,184625,377702,853904,551151,400898,673885,702946,149083,392260,686691,671958,198189,354450,468313,163960,345701,376797,105122,167371,317668,707446,127677,777833,821066,662552,810337,114422,871167,805328,891001,834661,635766,267207,315922,961652,286889,240990,549067,755685,624942,85057,763770,297908,710215,668094,977779,887517,151988,442780,391697,672322,618189,398672,38717,689593,639474,386474,484081,753182,773861,674656,814213,842779,771622,668030,402625,470425,312898,232420,706191,257808,682727,118452,805501,396482,97101,152458,914171,744625,193114,644889,168562,328877,700160,360391,563218,897150,327897,562303,364734,267640,3283,303251,34512,140895,337688,656658,245471]],["@trezor/connect-web>@trezor/utils>bignumber.js",[549083,521034]],["@trezor/connect-web>@trezor/connect>@trezor/blockchain-link>@trezor/websocket-client",[487483,922962,464687,34818,363330,47679]],["react-markdown>unified>trough",[652804]],["@zxing/library>ts-custom-error",[325932]],["ts-mixer",[96481,227662]],["tslib",[770591,92295]],["tweetnacl",[74552,990115]],["string.prototype.matchall>es-abstract>typed-array-buffer",[813364,572815]],["browserify>concat-stream>typedarray",[935771]],["@trezor/connect-web>@trezor/connect-common>@trezor/env-utils>ua-parser-js",[690253,959498]],["@metamask/keyring-controller>ulid",[498756,31299,896795,599794]],["react-markdown>unified",[286837]],["react-markdown>unified>is-buffer",[287094]],["react-markdown>remark-rehype>mdast-util-to-hast>unist-builder",[7900]],["react-markdown>remark-rehype>mdast-util-to-hast>unist-util-generated",[602721]],["react-markdown>unist-util-visit>unist-util-is",[498559]],["react-markdown>remark-rehype>mdast-util-to-hast>unist-util-position",[679975]],["react-markdown>vfile>unist-util-stringify-position",[296107]],["react-markdown>unist-util-visit>unist-util-visit-parents",[949742,776279]],["react-markdown>unist-util-visit",[498679]],["uri-js",[565e3,925475]],["browserify>url>punycode",[646246,855041]],["browserify>url",[251820,558163]],["react-focus-lock>use-callback-ref",[989992,415976,334392]],["react-beautiful-dnd>use-memo-one",[214897]],["react-focus-lock>use-sidecar",[886509]],["@tanstack/react-query>use-sync-external-store",[11853,941760]],["@metamask/keyring-controller>ethereumjs-wallet>utf8",[670655,32600]],["browserify>util",[320722,204191,826803,807928,333961,276330]],["@metamask/perps-controller>@nktkas/hyperliquid>valibot",[869691]],["@metamask/controller-utils>@spruceid/siwe-parser>valid-url",[221490]],["sass-embedded>varint",[136914,562618,78542,182884]],["react-markdown>vfile>vfile-message",[166301]],["react-markdown>vfile",[621468,461651]],["react-markdown>vfile>is-buffer",[444576]],["react-markdown>vfile>replace-ext",[68215]],["viem",[674715,546714,911973,132844,941986,492688,306605,885351,804027,506576,1054,816385,525638,683260,220332,643959,656079,684075,283405,345173,640633,707051,718316,570625,264232,880922,753115,113464,627079,120472,30888,778351,191805,967731,203917,426943,338842,191824,347862,480239,739919,13662,621094,551211,212479,307879,255573,349282,27153,673975,466978,151844,271723]],["@ensdomains/content-hash>multihashes>web-encoding",[193574]],["web-vitals",[811870]],["@open-rpc/test-coverage>isomorphic-fetch>whatwg-fetch",[768451]],["@metamask/eth-token-tracker>deep-equal>which-boxed-primitive",[114003]],["@metamask/eth-token-tracker>deep-equal>which-collection",[539681]],["browserify>util>which-typed-array",[708759,601644]],["@metamask/snaps-controllers>@xstate/fsm",[266383]],["watchify>xtend",[457827,445334]],["@metamask/assets-controller>p-limit>yocto-queue",[951874]],["@zxing/browser",[594168,717209,855256,301448,145953,754576,877446,657902,729074,147414,585117,342264]],["@zxing/library",[723205,165773,895334,762947,993255,567973,923877,70813,161840,879385,696739,312627,696602,579657,946912,389157,795293,73343,414480,225176,35702,604879,292589,7139,511410,398319,809671,204042,693466,659159,980892,939171,865388,305577,413135,810595,96263,226658,887774,99546,217403,490735,13619,731411,639014,902900,964206,996484,674724,475173,533622,545034,633978,887588,344837,30383,410854,395347,137253,966391,330187,993733,102076,182358,943402,350110,256598,715814,881821,77429,543903,267647,33047,222151,467294,10967,480383,754217,726724,690012,524483,353827,633971,420387,326170,605398,862070,48100,135525,826170,888951,689980,342062,265347,30700,283130,384185,608296,148535,344937,131671,744838,992729,364077,781645,181600,702808,214711,37933,550786,66029,51355,211185,602724,873614,618221,595812,517495,978368,764246,853708,429613,58251,720949,805970,322242,366804,959134,313691,972327,849943,4886,770429,177378,618081,130552,628900,348944,283402,638450,636179,403738,935949,350023,520474,331102,173036,177605,281891,599545,358354,448788,382336,367456,290552,935419,576257,907072,739843,495292,845566,231804,491694,245586,812169,731223,1880,568293,476225,981228,812056,447649,701767,5641,717651,643367,643977,512766,157062,454274,670237,628824,426748,470216,226843,734567,84931,391484,863850,36393,200985,192328,398079,805428,606450,104640,318681,290294,162502,38382,452848,118907,105846,245348,220502,147843,448751]]],e.unenforceable=[639266,667544,201783,902731,201783,902731,950514,20168,68724,440830,639266,667544,343966,685066,980564,245672,337994,490513,901409,383972,531854,744643,400495,792981,623661,762634,638581,588776,733258,715050,950514,20168,68724,440830,960548,639266,667544,343966,685066,980564,245672,337994,490513,901409,383972,531854,744643,400495,792981,623661,762634,638581,588776,733258,715050,950514,20168,68724,440830,960548,639266,667544,201783,902731,685066,236305,792981,623661,343966,762634,638581,490513,901409,383972,531854,744643,400495,980564,588776,733258,715050,245672,337994,794832,343966,685066,980564,245672,337994,490513,901409,383972,531854,744643,400495,792981,623661,762634,638581,588776,733258,715050,950514,20168,68724,440830,960548,639266,667544,343966,685066,980564,245672,337994,490513,901409,383972,531854,744643,400495,792981,623661,762634,638581,588776,733258,715050,950514,20168,68724,440830,960548,639266,667544,343966,685066,980564,245672,337994,490513,901409,383972,531854,744643,400495,792981,623661,762634,638581,588776,733258,715050,950514,20168,68724,440830,960548,639266,667544,201783,902731,685066,236305,792981,623661,343966,762634,638581,490513,901409,383972,531854,744643,400495,980564,588776,733258,715050,245672,337994,794832,20168,74754,121455,201783,236305,245672,337994,343966,371173,383972,400495,439181,446179,490513,492752,531854,588776,619200,623661,638581,639266,667544,685066,705444,715050,733258,744643,762634,792981,794832,901409,902731,950514,960548,980564,833028],e.ctxm=[536800,536800,211635],e.kch=[2669,7091,7145,5864,7962,4549,3602,1522,2118,887,5796,4377,7547,6209,9313,2776,9121,7986,3028,7408,3560,3411,9780,8651,9962,528,1389,793,6475,6827,5903,9461,2079,1271,7936,5981,4237,9932,929,1242,6898,8767,8635,2434,3681,1602,9755,3429,9421,5882,8618,3076,3962,2610,5952,4485,9792,7619,4587,507,899,1684,8851,6016,7536,400,6919,4325,2698,6660,285,6842,4651,7675],e.externals={},e.options={scuttleGlobalThis:{enabled:!0,scuttlerName:"SCUTTLER",exceptions:["window","Proxy","toString","getComputedStyle","addEventListener","removeEventListener","ShadowRoot","HTMLElement","HTMLFormElement","Element","pageXOffset","pageYOffset","visualViewport","Reflect","Set","Object","navigator","harden","console","WeakSet","Event","EventTarget","Image","fetch","AbortController","OffscreenCanvas","/cdc_[a-zA-Z0-9]+_[a-zA-Z]+/iu","name","performance","parseFloat","innerWidth","innerHeight","Symbol","Math","DOMRect","Number","Array","crypto","Function","Uint8Array","String","Promise","JSON","Date","RegExp","__SENTRY__","appState","extra","stateHooks","sentryHooks","sentry","logEncryptedVault","history","getSelection","opr","devicePixelRatio","ResizeObserver","setTimeout","clearTimeout","webpackChunk"]},lockdown:{consoleTaming:"unsafe",errorTaming:"unsafe",stackFiltering:"verbose",overrideTaming:"severe",localeTaming:"unsafe",errorTrapping:"none",reporting:"none"}},(()=>{let t={exports:{}};t.exports;let{Object:r,Array:a,Error:s,RegExp:o,Set:n,console:l,Proxy:c,Reflect:i}=globalThis,{assign:m,getOwnPropertyNames:p,getOwnPropertyDescriptor:u,create:h,defineProperty:g}=r,d=function(e,t){return r.getOwnPropertyNames(e).filter(r=>e[r]===t[r]).concat(["Compartment","Error","globalThis"])}(new Compartment().globalThis,globalThis),{isArray:b,from:k}=a,{getPrototypeOf:y}=i,{warn:f}=l;t.exports={scuttle:function(e,t){let r=function(e,t=h(null)){let r={enabled:!0,exceptions:[],scuttlerName:""},a=m(h(null),!0===t?r:t,{scuttlerFunc:(e,t)=>t(e)},{exceptions:(t?.exceptions||r.exceptions).map(e=>(function(e){if(!e.startsWith("/"))return e;let t=e.split("/");return new o(t.slice(1,-1).join("/"),t[t.length-1])})(e))});if(a.scuttlerName){if(!e[a.scuttlerName])throw new s(`LavaMoat - 'scuttlerName' function "${a.scuttlerName}" expected on globalRef.To learn more visit https://github.com/LavaMoat/LavaMoat/pull/462.`);a.scuttlerFunc=e[a.scuttlerName]}return a}(e,t);if(r.enabled){if(!b(r.exceptions))throw new s(`LavaMoat - exceptions must be an array, got ${typeof r.exceptions}`);r.scuttlerFunc(e,e=>(function(e,t=[]){let r=[];(function(e){let t=[],r=e;for(;r&&("object"==typeof r||"function"==typeof r);)t.push(r),r=y(r);return t})(e).forEach(e=>r.push(...p(e)));let a=new n([...d,...t]),l=h(null);r.forEach(t=>{let r,n,{get:i,set:m}={get:function(){throw new s(`LavaMoat - property "${t}" of globalThis is inaccessible under scuttling mode. To learn more visit https://github.com/LavaMoat/LavaMoat/pull/360.`)},set:function(){f(`LavaMoat - property "${t}" of globalThis cannot be set under scuttling mode. To learn more visit https://github.com/LavaMoat/LavaMoat/pull/360.`)}};if(r=a,n=t,k(r).some(e=>"string"==typeof e&&e===n||e instanceof o&&e.test(n)))return;let p=u(e,t);if(p?.configurable===!0)p={configurable:!1,set:m,get:i};else{if(p?.writable!==!0)return;p={configurable:!1,writable:!1,value:new c(l,{getPrototypeOf:i,get:i,set:m})}}g(e,t,p)})})(e,r.exceptions))}}},e.scuttling=t.exports})(),e.policy={resources:{"@babel/runtime":{globals:{regeneratorRuntime:"write"}},"@metamask/notification-services-controller>@contentful/rich-text-html-renderer":{globals:{SuppressedError:!0}},"@date-io/luxon":{packages:{luxon:!0}},"@ethereumjs/tx>@ethereumjs/common":{packages:{"@ethereumjs/tx>@ethereumjs/util":!0,"webpack>events":!0}},"@ethereumjs/tx>@ethereumjs/rlp":{globals:{TextEncoder:!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>@ethereumjs/rlp":{globals:{TextEncoder:!0}},"@metamask/eth-sig-util>@ethereumjs/rlp":{globals:{TextEncoder:!0}},"@ethereumjs/tx":{packages:{"@ethereumjs/tx>@ethereumjs/common":!0,"@ethereumjs/tx>@ethereumjs/rlp":!0,"@ethereumjs/tx>@ethereumjs/util":!0,"@ethereumjs/tx>ethereum-cryptography":!0}},"@ethereumjs/tx>@ethereumjs/util":{globals:{"console.warn":!0,fetch:!0},packages:{"@ethereumjs/tx>@ethereumjs/rlp":!0,"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/curves":!0,"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography":!0,"webpack>events":!0,"@ethereumjs/tx>ethereum-cryptography>@noble/curves":!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util":{globals:{"Buffer.alloc":!0,"Buffer.allocUnsafe":!0,"Buffer.byteLength":!0,"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0,"console.warn":!0},packages:{"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>@ethereumjs/rlp":!0,buffer:!0,"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography":!0,"webpack>events":!0,"eth-lattice-keyring>@ethereumjs/util>micro-ftch":!0}},"@metamask/eth-sig-util>@ethereumjs/util":{globals:{"Buffer.alloc":!0,"Buffer.allocUnsafe":!0,"Buffer.byteLength":!0,"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0,"console.warn":!0},packages:{"@metamask/eth-sig-util>@ethereumjs/rlp":!0,buffer:!0,"@metamask/eth-sig-util>ethereum-cryptography":!0,"webpack>events":!0,"eth-lattice-keyring>@ethereumjs/util>micro-ftch":!0}},"@ethersproject/abi":{globals:{"console.log":!0},packages:{"ethers>@ethersproject/address":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/constants":!0,"ethers>@ethersproject/hash":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/strings":!0}},"ethers>@ethersproject/abstract-provider":{packages:{"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0}},"ethers>@ethersproject/abstract-signer":{packages:{"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0}},"ethers>@ethersproject/address":{packages:{"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/rlp":!0}},"ethers>@ethersproject/base64":{globals:{atob:!0,btoa:!0},packages:{"@ethersproject/bytes":!0}},"ethers>@ethersproject/basex":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/properties":!0}},"@ethersproject/bignumber":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethereumjs-util>bn.js":!0}},"@ethersproject/bytes":{packages:{"ethers>@ethersproject/logger":!0}},"ethers>@ethersproject/constants":{packages:{"@ethersproject/bignumber":!0}},"@ethersproject/contracts":{globals:{setTimeout:!0},packages:{"@ethersproject/abi":!0,"ethers>@ethersproject/abstract-provider":!0,"ethers>@ethersproject/abstract-signer":!0,"ethers>@ethersproject/address":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"@ethersproject/transactions":!0}},"ethers>@ethersproject/hash":{packages:{"ethers>@ethersproject/address":!0,"ethers>@ethersproject/base64":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/strings":!0}},"@ethersproject/hdnode":{packages:{"ethers>@ethersproject/basex":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/pbkdf2":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/sha2":!0,"ethers>@ethersproject/signing-key":!0,"ethers>@ethersproject/strings":!0,"@ethersproject/transactions":!0,"ethers>@ethersproject/wordlists":!0}},"ethers>@ethersproject/json-wallets":{packages:{"ethers>@ethersproject/address":!0,"@ethersproject/bytes":!0,"@ethersproject/hdnode":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/pbkdf2":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/random":!0,"ethers>@ethersproject/strings":!0,"@ethersproject/transactions":!0,"ethers>@ethersproject/json-wallets>aes-js":!0,"ethers>@ethersproject/json-wallets>scrypt-js":!0}},"ethers>@ethersproject/keccak256":{packages:{"@ethersproject/bytes":!0,"eth-ens-namehash>js-sha3":!0}},"ethers>@ethersproject/logger":{globals:{console:!0}},"ethers>@ethersproject/networks":{packages:{"ethers>@ethersproject/logger":!0}},"ethers>@ethersproject/pbkdf2":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/sha2":!0}},"ethers>@ethersproject/properties":{packages:{"ethers>@ethersproject/logger":!0}},"@ethersproject/providers":{globals:{WebSocket:!0,clearInterval:!0,clearTimeout:!0,"console.log":!0,"console.warn":!0,setInterval:!0,setTimeout:!0},packages:{"ethers>@ethersproject/abstract-provider":!0,"ethers>@ethersproject/abstract-signer":!0,"ethers>@ethersproject/address":!0,"ethers>@ethersproject/base64":!0,"ethers>@ethersproject/basex":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/constants":!0,"ethers>@ethersproject/hash":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/networks":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/random":!0,"ethers>@ethersproject/sha2":!0,"ethers>@ethersproject/strings":!0,"@ethersproject/transactions":!0,"ethers>@ethersproject/web":!0,"@ethersproject/providers>bech32":!0}},"ethers>@ethersproject/random":{globals:{"crypto.getRandomValues":!0},packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0}},"ethers>@ethersproject/rlp":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0}},"ethers>@ethersproject/sha2":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/sha2>hash.js":!0}},"ethers>@ethersproject/signing-key":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethereumjs-util>bn.js":!0,"ethers>@ethersproject/sha2>hash.js":!0}},"ethers>@ethersproject/solidity":{packages:{"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/sha2":!0,"ethers>@ethersproject/strings":!0}},"ethers>@ethersproject/strings":{packages:{"@ethersproject/bytes":!0,"ethers>@ethersproject/constants":!0,"ethers>@ethersproject/logger":!0}},"@ethersproject/transactions":{packages:{"ethers>@ethersproject/address":!0,"@ethersproject/bignumber":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/constants":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/rlp":!0,"ethers>@ethersproject/signing-key":!0}},"ethers>@ethersproject/units":{packages:{"@ethersproject/bignumber":!0,"ethers>@ethersproject/logger":!0}},"ethers>@ethersproject/wallet":{packages:{"ethers>@ethersproject/abstract-provider":!0,"ethers>@ethersproject/abstract-signer":!0,"ethers>@ethersproject/address":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/hash":!0,"@ethersproject/hdnode":!0,"ethers>@ethersproject/json-wallets":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/random":!0,"ethers>@ethersproject/signing-key":!0,"@ethersproject/transactions":!0}},"ethers>@ethersproject/web":{globals:{clearTimeout:!0,fetch:!0,setTimeout:!0},packages:{"ethers>@ethersproject/base64":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/strings":!0}},"ethers>@ethersproject/wordlists":{packages:{"ethers>@ethersproject/hash":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0}},"@keystonehq/bc-ur-registry-eth":{globals:{"Buffer.from":!0},packages:{"@ethereumjs/tx>@ethereumjs/util":!0,"@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry":!0,buffer:!0,"@metamask/eth-qr-keyring>hdkey":!0,uuid:!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth":{globals:{"Buffer.from":!0},packages:{"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util":!0,"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry":!0,buffer:!0,"@metamask/eth-qr-keyring>hdkey":!0,"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>uuid":!0}},"@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry":{globals:{Buffer:!0,define:!0},packages:{"@ngraveio/bc-ur":!0,"ethereumjs-util>ethereum-cryptography>bs58check":!0,buffer:!0,tslib:!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@keystonehq/bc-ur-registry":{globals:{Buffer:!0,define:!0},packages:{"@ngraveio/bc-ur":!0,"ethereumjs-util>ethereum-cryptography>bs58check":!0,buffer:!0,tslib:!0}},"@lavamoat/lavadome-react":{globals:{"console.warn":!0,document:!0,navigation:!0,Array:!0,Clipboard:!0,Document:!0,DocumentFragment:!0,Element:!0,Event:!0,EventTarget:!0,Function:!0,JSON:!0,NavigateEvent:!0,NavigationDestination:!0,Node:!0,Number:!0,Object:!0,String:!0,Weakmap:!0},packages:{react:!0}},"@ledgerhq/hw-transport-webhid>@ledgerhq/devices":{globals:{"Buffer.alloc":!0,"Buffer.concat":!0},packages:{"@ledgerhq/errors":!0,buffer:!0,"@ledgerhq/hw-transport-webhid>@ledgerhq/devices>semver":!0}},"@ledgerhq/hw-app-eth>@ledgerhq/domain-service":{packages:{"@ledgerhq/hw-app-eth>@ledgerhq/logs":!0,"wait-on>axios":!0}},"@ledgerhq/errors":{globals:{"console.warn":!0}},"@ledgerhq/hw-app-eth>@ledgerhq/evm-tools":{packages:{"ethers>@ethersproject/constants":!0,"ethers>@ethersproject/hash":!0,"@ledgerhq/hw-app-eth>@ledgerhq/cryptoassets-evm-signatures":!0,"@ledgerhq/hw-app-eth>@ledgerhq/evm-tools>@ledgerhq/live-env":!0,"wait-on>axios":!0,"@metamask/ppom-validator>crypto-js":!0}},"@ledgerhq/hw-app-eth":{globals:{"Buffer.alloc":!0,"Buffer.concat":!0,"Buffer.from":!0,"console.warn":!0},packages:{"@ethersproject/abi":!0,"ethers>@ethersproject/rlp":!0,"@ethersproject/transactions":!0,"@ledgerhq/hw-app-eth>@ledgerhq/cryptoassets-evm-signatures":!0,"@ledgerhq/hw-app-eth>@ledgerhq/domain-service":!0,"@ledgerhq/errors":!0,"@ledgerhq/hw-app-eth>@ledgerhq/evm-tools":!0,"@ledgerhq/hw-app-eth>@ledgerhq/logs":!0,"wait-on>axios":!0,"@ledgerhq/hw-app-eth>bignumber.js":!0,buffer:!0,semver:!0}},"@ledgerhq/hw-transport-webhid":{globals:{"Buffer.from":!0,navigator:!0},packages:{"@ledgerhq/hw-transport-webhid>@ledgerhq/devices":!0,"@ledgerhq/errors":!0,"@ledgerhq/hw-transport-webhid>@ledgerhq/hw-transport":!0,"@ledgerhq/hw-app-eth>@ledgerhq/logs":!0,buffer:!0}},"@ledgerhq/hw-transport-webhid>@ledgerhq/hw-transport":{globals:{"Buffer.alloc":!0,"Buffer.concat":!0,"Buffer.from":!0,clearTimeout:!0,"console.warn":!0,setTimeout:!0},packages:{"@ledgerhq/errors":!0,"@ledgerhq/hw-app-eth>@ledgerhq/logs":!0,buffer:!0,"webpack>events":!0}},"@ledgerhq/hw-app-eth>@ledgerhq/evm-tools>@ledgerhq/live-env":{globals:{"console.warn":!0},packages:{"wait-on>rxjs":!0}},"@ledgerhq/hw-app-eth>@ledgerhq/logs":{globals:{__ledgerLogsListen:"write","console.error":!0}},"@material-ui/core":{globals:{addEventListener:!0,clearInterval:!0,clearTimeout:!0,"console.error":!0,"console.warn":!0,document:!0,getComputedStyle:!0,getSelection:!0,"performance.now":!0,removeEventListener:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/styles":!0,"@material-ui/core>@material-ui/system":!0,"@material-ui/core>@material-ui/utils":!0,"@material-ui/core>clsx":!0,"@material-ui/core>popper.js":!0,"prop-types":!0,react:!0,"react-dom":!0,"react-redux>react-is":!0,"react-transition-group":!0}},"@material-ui/pickers":{globals:{addEventListener:!0,innerHeight:!0,orientation:!0,removeEventListener:!0,screen:!0},packages:{"@babel/runtime":!0,"@material-ui/core":!0,"@material-ui/pickers>clsx":!0,"prop-types":!0,react:!0,"react-transition-group":!0,"@material-ui/pickers>rifm":!0}},"@material-ui/core>@material-ui/styles":{globals:{"console.error":!0,"console.warn":!0,"document.createComment":!0,"document.head":!0},packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/utils":!0,"react-redux>hoist-non-react-statics":!0,"@material-ui/core>@material-ui/styles>jss-plugin-camel-case":!0,"@material-ui/core>@material-ui/styles>jss-plugin-default-unit":!0,"@material-ui/core>@material-ui/styles>jss-plugin-global":!0,"@material-ui/core>@material-ui/styles>jss-plugin-nested":!0,"@material-ui/core>@material-ui/styles>jss-plugin-props-sort":!0,"@material-ui/core>@material-ui/styles>jss-plugin-rule-value-function":!0,"@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer":!0,"@material-ui/core>@material-ui/styles>jss":!0,"prop-types":!0,react:!0}},"@material-ui/core>@material-ui/system":{globals:{"console.error":!0},packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/utils":!0,"prop-types":!0}},"@material-ui/core>@material-ui/utils":{packages:{"@babel/runtime":!0}},"@metamask/abi-utils":{packages:{"@metamask/superstruct":!0,"@metamask/utils":!0}},"@metamask/approval-controller":{globals:{"console.info":!0},packages:{"@metamask/base-controller":!0,"@metamask/rpc-errors":!0,nanoid:!0}},"@metamask/assets-controller":{globals:{"performance.now":!0},packages:{"@metamask/controller-utils":!0,"@metamask/utils":!0,"@metamask/assets-controller>bignumber.js":!0}},"@metamask/assets-controllers":{globals:{"Intl.NumberFormat":!0,URL:!0,"console.error":!0},packages:{"@ethersproject/contracts":!0,"@ethersproject/providers":!0,"@metamask/account-api":!0,"@metamask/controller-utils":!0,"@metamask/keyring-api":!0,"@metamask/utils":!0,"ethereumjs-util>bn.js":!0,"@metamask/assets-controllers>multiformats":!0,reselect:!0,"@metamask/assets-controllers>single-call-balance-checker-abi":!0}},"@metamask/base-controller":{globals:{"console.error":!0},packages:{immer:!0}},"@metamask/bridge-controller":{globals:{URLSearchParams:!0,"console.warn":!0},packages:{"ethers>@ethersproject/address":!0,"ethers>@ethersproject/constants":!0,"@ethersproject/contracts":!0,"@ethersproject/providers":!0,"@metamask/bridge-controller>@metamask/controller-utils":!0,"@metamask/keyring-api":!0,"@metamask/metamask-eth-abis":!0,"@metamask/multichain-network-controller":!0,"@metamask/superstruct":!0,"@metamask/utils":!0,"@metamask/bridge-controller>bignumber.js":!0,lodash:!0,reselect:!0,"@metamask/bridge-controller>@metamask/multichain-network-controller":!0}},"@metamask/chain-agnostic-permission":{packages:{"@metamask/chain-agnostic-permission>@metamask/api-specs":!0,"@metamask/controller-utils":!0,"@metamask/permission-controller":!0,"@metamask/utils":!0,lodash:!0}},"@metamask/claims-controller":{packages:{"@metamask/claims-controller>@metamask/controller-utils":!0}},"@metamask/controller-utils":{globals:{"Buffer.from":!0,URL:!0,"console.error":!0,fetch:!0,setTimeout:!0},packages:{"@metamask/controller-utils>@metamask/ethjs-unit":!0,"@metamask/utils":!0,"@metamask/controller-utils>@spruceid/siwe-parser":!0,"ethereumjs-util>bn.js":!0,buffer:!0,cockatiel:!0,"eth-ens-namehash":!0,"eslint>fast-deep-equal":!0,lodash:!0}},"@metamask/bridge-controller>@metamask/controller-utils":{globals:{"Buffer.from":!0,"console.error":!0,fetch:!0,setTimeout:!0},packages:{"@metamask/controller-utils>@metamask/ethjs-unit":!0,"@metamask/utils":!0,"ethereumjs-util>bn.js":!0,buffer:!0,"eth-ens-namehash":!0,"eslint>fast-deep-equal":!0,lodash:!0}},"@metamask/name-controller>@metamask/controller-utils":{globals:{"Buffer.from":!0,"console.error":!0,fetch:!0,setTimeout:!0},packages:{"@metamask/controller-utils>@metamask/ethjs-unit":!0,"@metamask/utils":!0,"ethereumjs-util>bn.js":!0,buffer:!0,"eth-ens-namehash":!0,"eslint>fast-deep-equal":!0,lodash:!0}},"@metamask/notification-services-controller>@metamask/controller-utils":{globals:{"Buffer.from":!0,"console.error":!0,fetch:!0,setTimeout:!0},packages:{"@metamask/controller-utils>@metamask/ethjs-unit":!0,"@metamask/utils":!0,"ethereumjs-util>bn.js":!0,buffer:!0,cockatiel:!0,"eth-ens-namehash":!0,"eslint>fast-deep-equal":!0,lodash:!0}},"@metamask/core-backend":{globals:{URL:!0,fetch:!0},packages:{"@metamask/core-backend>@tanstack/query-core":!0}},"@metamask/delegation-core":{packages:{"@metamask/abi-utils":!0,"@metamask/utils":!0,"@noble/hashes":!0}},"@metamask/design-system-react":{globals:{"console.warn":!0},packages:{"@metamask/design-system-shared":!0,"@metamask/jazzicon":!0,"@metamask/design-system-react>@radix-ui/react-slot":!0,"@metamask/design-system-react>blo":!0,react:!0,"@metamask/design-system-react>tailwind-merge":!0}},"@metamask/design-system-shared":{packages:{"@metamask/utils":!0}},"@metamask/eth-token-tracker>@metamask/eth-block-tracker":{globals:{clearTimeout:!0,"console.error":!0,setTimeout:!0},packages:{"@metamask/safe-event-emitter":!0,"@metamask/utils":!0,"@metamask/ppom-validator>json-rpc-random-id":!0}},"@metamask/network-controller>@metamask/eth-block-tracker":{globals:{clearTimeout:!0,"console.error":!0,setTimeout:!0},packages:{"@metamask/safe-event-emitter":!0,"@metamask/utils":!0,"@metamask/ppom-validator>json-rpc-random-id":!0}},"@metamask/eth-hd-keyring":{globals:{"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0,TextEncoder:!0},packages:{"@ethereumjs/tx>@ethereumjs/util":!0,"@metamask/eth-sig-util":!0,"@metamask/snaps-sdk>@metamask/key-tree":!0,"@metamask/keyring-api":!0,"@metamask/eth-hd-keyring>@metamask/keyring-sdk":!0,"@metamask/scure-bip39":!0,"@metamask/utils":!0,"@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32":!0,buffer:!0,"@metamask/eth-hd-keyring>ethereum-cryptography":!0}},"@metamask/network-controller>@metamask/eth-json-rpc-infura":{globals:{fetch:!0,setTimeout:!0},packages:{"@metamask/network-controller>@metamask/eth-json-rpc-infura>@metamask/eth-json-rpc-provider":!0,"@metamask/json-rpc-engine":!0,"@metamask/rpc-errors":!0,"@metamask/utils":!0}},"@metamask/eth-json-rpc-middleware":{globals:{setTimeout:!0},packages:{"@metamask/rpc-errors":!0,"@metamask/utils":!0,"@metamask/json-rpc-engine>klona":!0,"@metamask/eth-json-rpc-middleware>safe-stable-stringify":!0}},"@metamask/eth-json-rpc-provider":{packages:{"@metamask/json-rpc-engine":!0,nanoid:!0}},"@metamask/network-controller>@metamask/eth-json-rpc-infura>@metamask/eth-json-rpc-provider":{packages:{"@metamask/json-rpc-engine":!0,"@metamask/rpc-errors":!0,"@metamask/safe-event-emitter":!0,uuid:!0}},"@metamask/eth-ledger-bridge-keyring":{packages:{"@ethereumjs/tx":!0,"@ethereumjs/tx>@ethereumjs/util":!0,"@metamask/utils":!0}},"@metamask/eth-qr-keyring":{globals:{"Buffer.concat":!0,"Buffer.from":!0},packages:{"@ethereumjs/tx>@ethereumjs/rlp":!0,"@ethereumjs/tx":!0,"@ethereumjs/tx>@ethereumjs/util":!0,"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth":!0,"@metamask/utils":!0,buffer:!0,"@metamask/eth-qr-keyring>hdkey":!0,"@metamask/eth-qr-keyring>uuid":!0}},"@metamask/controller-utils>@metamask/eth-query":{packages:{"@metamask/ppom-validator>json-rpc-random-id":!0,"watchify>xtend":!0}},"@metamask/eth-sig-util":{globals:{"Buffer.byteLength":!0,"Buffer.concat":!0,"Buffer.from":!0},packages:{"@metamask/eth-sig-util>@ethereumjs/rlp":!0,"@metamask/eth-sig-util>@ethereumjs/util":!0,"@metamask/abi-utils":!0,"@metamask/utils":!0,"@metamask/eth-sig-util>@scure/base":!0,buffer:!0,"@metamask/eth-sig-util>ethereum-cryptography":!0,tweetnacl:!0}},"@metamask/keyring-controller>@metamask/eth-simple-keyring":{globals:{"Buffer.concat":!0,"Buffer.from":!0},packages:{"@ethereumjs/tx>@ethereumjs/util":!0,"@metamask/eth-sig-util":!0,"@metamask/keyring-api":!0,"@metamask/eth-hd-keyring>@metamask/keyring-sdk":!0,"@metamask/utils":!0,buffer:!0,"@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography":!0,"crypto-browserify>randombytes":!0}},"@metamask/eth-token-tracker":{globals:{"console.warn":!0},packages:{"@babel/runtime":!0,"@ethersproject/bignumber":!0,"@ethersproject/contracts":!0,"@ethersproject/providers":!0,"@metamask/eth-token-tracker>@metamask/eth-block-tracker":!0,"@metamask/safe-event-emitter":!0,"ethereumjs-util>bn.js":!0,"@metamask/eth-token-tracker>deep-equal":!0,"human-standard-token-abi":!0}},"@metamask/etherscan-link":{globals:{URL:!0}},"eth-method-registry>@metamask/ethjs-contract":{packages:{"@babel/runtime":!0,"eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-filter":!0,"eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-util":!0,"eth-method-registry>@metamask/ethjs-contract>ethjs-abi":!0,"eth-ens-namehash>js-sha3":!0,"eth-method-registry>@metamask/ethjs-query>promise-to-callback":!0}},"eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-filter":{globals:{clearInterval:!0,setInterval:!0}},"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format":{packages:{"eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-util":!0,"@metamask/controller-utils>@metamask/ethjs-unit>@metamask/number-to-bn":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>ethjs-schema":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix":!0}},"eth-method-registry>@metamask/ethjs-query":{globals:{console:!0},packages:{"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-rpc":!0,"eth-method-registry>@metamask/ethjs-query>promise-to-callback":!0}},"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-rpc":{packages:{"eth-method-registry>@metamask/ethjs-query>promise-to-callback":!0}},"@metamask/controller-utils>@metamask/ethjs-unit":{packages:{"@metamask/controller-utils>@metamask/ethjs-unit>@metamask/number-to-bn":!0,"ethereumjs-util>bn.js":!0}},"eth-method-registry>@metamask/ethjs-contract>@metamask/ethjs-util":{globals:{"Buffer.byteLength":!0,"Buffer.from":!0},packages:{buffer:!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>is-hex-prefixed":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix":!0}},"@metamask/gas-fee-controller":{globals:{clearInterval:!0,"console.error":!0,setInterval:!0},packages:{"@metamask/controller-utils":!0,"@metamask/controller-utils>@metamask/eth-query":!0,"@metamask/polling-controller":!0,"ethereumjs-util>bn.js":!0,uuid:!0}},"@metamask/jazzicon":{globals:{"document.createElement":!0,"document.createElementNS":!0},packages:{"@metamask/jazzicon>color":!0,"@metamask/jazzicon>mersenne-twister":!0}},"@metamask/json-rpc-engine":{packages:{"@metamask/messenger":!0,"@metamask/rpc-errors":!0,"@metamask/safe-event-emitter":!0,"@metamask/utils":!0,"deep-freeze-strict":!0,"@metamask/json-rpc-engine>klona":!0}},"@metamask/json-rpc-middleware-stream":{globals:{"console.warn":!0,setTimeout:!0},packages:{"@metamask/safe-event-emitter":!0,"@metamask/utils":!0,"@metamask/json-rpc-middleware-stream>readable-stream":!0}},"@metamask/snaps-sdk>@metamask/key-tree":{globals:{"crypto.subtle":!0,ed25519:!0,ed25519Bip32:!0,secp256k1:!0},packages:{"@metamask/scure-bip39":!0,"@metamask/utils":!0,"@noble/curves":!0,"@noble/hashes":!0,"@scure/base":!0}},"@metamask/keyring-api":{packages:{"@metamask/keyring-utils":!0,"@metamask/superstruct":!0,"@metamask/utils":!0,"bitcoin-address-validation":!0}},"@metamask/keyring-controller":{globals:{"console.error":!0},packages:{"@ethereumjs/tx>@ethereumjs/util":!0,"@metamask/base-controller":!0,"@metamask/eth-hd-keyring":!0,"@metamask/eth-sig-util":!0,"@metamask/keyring-controller>@metamask/eth-simple-keyring":!0,"@metamask/utils":!0,"async-mutex":!0,"@metamask/keyring-controller>ethereumjs-wallet":!0,lodash:!0,"@metamask/keyring-controller>ulid":!0}},"@metamask/eth-hd-keyring>@metamask/keyring-sdk":{packages:{"@ethereumjs/tx":!0,"@metamask/eth-sig-util":!0,"@metamask/keyring-api":!0,"@metamask/superstruct":!0,"@metamask/utils":!0,"async-mutex":!0,"@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography":!0,"@metamask/eth-hd-keyring>@metamask/keyring-sdk>uuid":!0}},"@metamask/keyring-snap-client":{packages:{"@metamask/keyring-api":!0,"@metamask/keyring-utils":!0,"@metamask/superstruct":!0,"@metamask/keyring-snap-client>uuid":!0}},"@metamask/keyring-utils":{globals:{URL:!0},packages:{"@metamask/superstruct":!0,"@metamask/utils":!0,"bitcoin-address-validation":!0}},"@metamask/logo":{globals:{addEventListener:!0,"document.body.appendChild":!0,"document.createElementNS":!0,innerHeight:!0,innerWidth:!0,requestAnimationFrame:!0},packages:{"@metamask/logo>gl-mat4":!0,"@metamask/logo>gl-vec3":!0}},"@metamask/messenger":{globals:{"console.error":!0}},"@metamask/multichain-network-controller":{packages:{"@metamask/keyring-api":!0,"@metamask/network-controller":!0,"@metamask/utils":!0,"@metamask/multichain-network-controller>@metamask/keyring-api":!0}},"@metamask/name-controller":{packages:{"@metamask/base-controller":!0,"@metamask/name-controller>@metamask/controller-utils":!0}},"@metamask/network-controller":{globals:{"Intl.NumberFormat":!0,URL:!0,setTimeout:!0},packages:{"@metamask/base-controller":!0,"@metamask/connectivity-controller":!0,"@metamask/controller-utils":!0,"@metamask/network-controller>@metamask/eth-block-tracker":!0,"@metamask/network-controller>@metamask/eth-json-rpc-infura":!0,"@metamask/eth-json-rpc-middleware":!0,"@metamask/eth-json-rpc-provider":!0,"@metamask/controller-utils>@metamask/eth-query":!0,"@metamask/json-rpc-engine":!0,"@metamask/rpc-errors":!0,"@metamask/network-controller>@metamask/swappable-obj-proxy":!0,"@metamask/utils":!0,cockatiel:!0,"addons-linter>deepmerge":!0,"eslint>fast-deep-equal":!0,immer:!0,lodash:!0,reselect:!0,"uri-js":!0,uuid:!0}},"@metamask/transaction-controller>@metamask/nonce-tracker":{packages:{"@ethersproject/providers":!0,"@ngraveio/bc-ur>assert":!0,"@metamask/transaction-controller>@metamask/nonce-tracker>async-mutex":!0}},"@metamask/notification-services-controller":{globals:{"Intl.NumberFormat":!0,"console.error":!0,fetch:!0},packages:{"@metamask/notification-services-controller>@contentful/rich-text-html-renderer":!0,"@metamask/base-controller":!0,"@metamask/notification-services-controller>@metamask/controller-utils":!0,"@metamask/utils":!0,"@metamask/notification-services-controller>bignumber.js":!0,lodash:!0,loglevel:!0,semver:!0,uuid:!0}},"@metamask/controller-utils>@metamask/ethjs-unit>@metamask/number-to-bn":{packages:{"ethereumjs-util>bn.js":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix":!0}},"@metamask/object-multiplex":{globals:{"console.warn":!0},packages:{"@metamask/object-multiplex>once":!0,"@metamask/object-multiplex>readable-stream":!0}},"@metamask/permission-controller":{globals:{"console.error":!0},packages:{"@metamask/base-controller":!0,"@metamask/controller-utils":!0,"@metamask/rpc-errors":!0,"@metamask/utils":!0,"deep-freeze-strict":!0,immer:!0,nanoid:!0}},"@metamask/polling-controller":{globals:{clearTimeout:!0,"console.error":!0,setTimeout:!0},packages:{"@metamask/base-controller":!0,"fast-json-stable-stringify":!0,uuid:!0}},"@metamask/post-message-stream":{globals:{"MessageEvent.prototype":!0,WorkerGlobalScope:!0,addEventListener:!0,browser:!0,chrome:!0,"location.origin":!0,postMessage:!0,removeEventListener:!0},packages:{"@metamask/utils":!0,"@metamask/post-message-stream>readable-stream":!0}},"@metamask/providers":{globals:{console:!0},packages:{"@metamask/json-rpc-engine":!0,"@metamask/json-rpc-middleware-stream":!0,"@metamask/rpc-errors":!0,"@metamask/safe-event-emitter":!0,"eslint>fast-deep-equal":!0,"@metamask/providers>is-stream":!0,"@metamask/providers>readable-stream":!0}},"@metamask/react-data-query":{packages:{"@metamask/utils":!0,"@metamask/react-data-query>@tanstack/query-core":!0}},"@metamask/rpc-errors":{packages:{"@metamask/utils":!0,"@metamask/rpc-errors>fast-safe-stringify":!0}},"@metamask/safe-event-emitter":{globals:{setTimeout:!0},packages:{"webpack>events":!0}},"@metamask/scure-bip39":{globals:{TextEncoder:!0},packages:{"@metamask/scure-bip39>@noble/hashes":!0,"@metamask/scure-bip39>@scure/base":!0}},"@metamask/smart-transactions-controller":{packages:{"@metamask/superstruct":!0,"@metamask/utils":!0,reselect:!0}},"@metamask/snaps-execution-environments":{globals:{"document.getElementById":!0},packages:{"@metamask/post-message-stream":!0,"@metamask/snaps-utils":!0,"@metamask/utils":!0}},"@metamask/snaps-rpc-methods":{packages:{"@metamask/permission-controller":!0,"@metamask/rpc-errors":!0,"@metamask/snaps-sdk":!0,"@metamask/snaps-utils":!0,"@metamask/superstruct":!0,"@metamask/utils":!0}},"@metamask/snaps-sdk":{globals:{URL:!0},packages:{"@metamask/superstruct":!0,"@metamask/utils":!0,luxon:!0}},"@metamask/snaps-utils":{globals:{File:!0,FileReader:!0,TextDecoder:!0,URL:!0,"console.error":!0,"console.log":!0,"console.warn":!0,"document.body.appendChild":!0,"document.createElement":!0,fetch:!0,navigator:!0},packages:{"@metamask/snaps-sdk>@metamask/key-tree":!0,"@metamask/permission-controller":!0,"@metamask/snaps-utils>@metamask/slip44":!0,"@metamask/snaps-sdk":!0,"@metamask/superstruct":!0,"@metamask/utils":!0,"@scure/base":!0,chalk:!0,"cron-parser":!0,"fast-json-stable-stringify":!0,luxon:!0,"@metamask/snaps-utils>marked":!0,"@metamask/snaps-utils>rfdc":!0,"@metamask/snaps-utils>validate-npm-package-name":!0}},"@metamask/transaction-controller":{globals:{"Buffer.from":!0,clearTimeout:!0,"console.error":!0,fetch:!0,setTimeout:!0},packages:{"@ethereumjs/tx>@ethereumjs/common":!0,"@ethereumjs/tx":!0,"@ethersproject/abi":!0,"@ethersproject/contracts":!0,"@ethersproject/providers":!0,"ethers>@ethersproject/wallet":!0,"@metamask/base-controller":!0,"@metamask/controller-utils":!0,"@metamask/gas-fee-controller":!0,"@metamask/metamask-eth-abis":!0,"@metamask/network-controller":!0,"@metamask/transaction-controller>@metamask/nonce-tracker":!0,"@metamask/rpc-errors":!0,"@metamask/utils":!0,"async-mutex":!0,"@metamask/transaction-controller>bignumber.js":!0,"ethereumjs-util>bn.js":!0,buffer:!0,"eth-method-registry":!0,"webpack>events":!0,lodash:!0,uuid:!0}},"@metamask/utils":{globals:{Buffer:!0,TextDecoder:!0,TextEncoder:!0,crypto:!0},packages:{"@metamask/superstruct":!0,"@noble/hashes":!0,"@scure/base":!0,buffer:!0,"nock>debug":!0,lodash:!0,"@metamask/utils>pony-cause":!0,semver:!0}},"@ngraveio/bc-ur":{globals:{"Buffer.alloc":!0,"Buffer.allocUnsafe":!0,"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{"@ngraveio/bc-ur>@keystonehq/alias-sampling":!0,"@ngraveio/bc-ur>assert":!0,"@ngraveio/bc-ur>bignumber.js":!0,buffer:!0,"@ngraveio/bc-ur>cbor-sync":!0,"@ngraveio/bc-ur>crc":!0,"@ngraveio/bc-ur>jsbi":!0,"@ngraveio/bc-ur>sha.js":!0}},"@noble/curves":{packages:{"@noble/hashes":!0}},"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/curves":{globals:{TextEncoder:!0},packages:{"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/curves":{globals:{TextEncoder:!0},packages:{"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/curves":{globals:{TextEncoder:!0},packages:{"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-sig-util>ethereum-cryptography>@noble/curves":{globals:{TextEncoder:!0},packages:{"@metamask/eth-sig-util>ethereum-cryptography>@noble/hashes":!0}},"@noble/hashes":{globals:{TextDecoder:!0,TextEncoder:!0,crypto:!0}},"@metamask/scure-bip39>@noble/hashes":{globals:{TextEncoder:!0,crypto:!0}},"@ethereumjs/tx>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0}},"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0,crypto:!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0,crypto:!0}},"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0,crypto:!0}},"@metamask/eth-sig-util>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0,crypto:!0}},"@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0}},"@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography>@noble/hashes":{globals:{TextEncoder:!0}},"@popperjs/core":{globals:{Element:!0,HTMLElement:!0,ShadowRoot:!0,document:!0,"navigator.userAgent":!0,"navigator.userAgentData":!0,devicePixelRatio:!0}},"@google/genai>protobufjs>@protobufjs/codegen":{globals:{"console.log":!0}},"@google/genai>protobufjs>@protobufjs/fetch":{globals:{XMLHttpRequest:!0},packages:{"@google/genai>protobufjs>@protobufjs/aspromise":!0,"@google/genai>protobufjs>@protobufjs/inquire":!0}},"@metamask/design-system-react>@radix-ui/react-slot>@radix-ui/react-compose-refs":{packages:{react:!0}},"@metamask/design-system-react>@radix-ui/react-slot":{packages:{"@metamask/design-system-react>@radix-ui/react-slot>@radix-ui/react-compose-refs":!0,react:!0}},"@reduxjs/toolkit":{globals:{AbortController:!0,__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:!0,__REDUX_DEVTOOLS_EXTENSION__:!0,console:!0,process:!0,queueMicrotask:!0,requestAnimationFrame:!0,setTimeout:!0},packages:{immer:!0,process:!0,redux:!0,"redux-thunk":!0,"@reduxjs/toolkit>reselect":!0}},"react-router-dom>@remix-run/router":{globals:{AbortController:!0,DOMException:!0,FormData:!0,Headers:!0,Request:!0,Response:!0,URL:!0,URLSearchParams:!0,console:!0,"document.defaultView":!0,history:!0}},"@rive-app/react-canvas>@rive-app/canvas":{globals:{AudioContext:!1,Blob:!0,DOMMatrix:!1,FinalizationRegistry:!1,HTMLCanvasElement:!0,Image:!0,Iterator:!1,MouseEvent:!1,Path2D:!0,Request:!0,ResizeObserver:!1,TextDecoder:!0,"URL.createObjectURL":!0,"URL.revokeObjectURL":!0,WebAssembly:!0,XMLHttpRequest:!1,cancelAnimationFrame:!0,clearInterval:!0,clearTimeout:!0,console:!0,crypto:!1,define:!1,devicePixelRatio:!0,document:!1,fetch:!1,h:!1,importScripts:!1,navigator:!1,"performance.now":!0,prompt:!1,readline:!1,requestAnimationFrame:!0,setTimeout:!0,webkitAudioContext:!1,location:!1,"document.createElement":!0,"navigator.userAgent":!0}},"@rive-app/react-canvas":{globals:{IntersectionObserver:!0,ResizeObserver:!0,addEventListener:!0,clearTimeout:!0,"console.error":!0,devicePixelRatio:!0,"document.documentElement.clientHeight":!0,"document.documentElement.clientWidth":!0,innerHeight:!0,innerWidth:!0,matchMedia:!0,removeEventListener:!0,setTimeout:!0},packages:{"@rive-app/react-canvas>@rive-app/canvas":!0,react:!0}},"@scure/base":{globals:{TextDecoder:!0,TextEncoder:!0}},"@metamask/eth-sig-util>@scure/base":{globals:{TextDecoder:!0,TextEncoder:!0}},"@metamask/scure-bip39>@scure/base":{globals:{TextDecoder:!0,TextEncoder:!0}},"@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32>@scure/base":{globals:{TextDecoder:!0,TextEncoder:!0}},"@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32":{packages:{"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/curves":!0,"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes":!0,"@metamask/eth-hd-keyring>ethereum-cryptography>@scure/bip32>@scure/base":!0}},"@segment/analytics-node>@segment/analytics-core":{globals:{clearTimeout:!0,console:!0,setTimeout:!0},packages:{"@segment/analytics-node>@lukeed/uuid":!0,"@segment/analytics-node>@segment/analytics-generic-utils":!0,"@segment/analytics-node>@segment/analytics-core>dset":!0,tslib:!0}},"@segment/analytics-node>@segment/analytics-generic-utils":{globals:{"console.warn":!0}},"@segment/analytics-node":{globals:{AbortController:!0,EdgeRuntime:!1,URL:!0,WebSocketPair:!1,WorkerGlobalScope:!1,clearTimeout:!0,"console.warn":!0,fetch:!0,importScripts:!1,process:!0,setTimeout:!0},packages:{"@segment/analytics-node>@lukeed/uuid":!0,"@segment/analytics-node>@segment/analytics-core":!0,"@segment/analytics-node>@segment/analytics-generic-utils":!0,"@segment/analytics-node>jose":!0,process:!0}},"@sentry/browser>@sentry-internal/browser-utils":{globals:{"PerformanceEventTiming.prototype":!0,PerformanceObserver:!0,"XMLHttpRequest.prototype":!0,__SENTRY_DEBUG__:!0,addEventListener:!0,clearTimeout:!0,performance:!0,removeEventListener:!0,setTimeout:!0},packages:{"@sentry/browser>@sentry/core":!0,"@sentry/utils":!0}},"@sentry/browser>@sentry-internal/feedback":{globals:{FormData:!0,HTMLFormElement:!0,__SENTRY_DEBUG__:!0,cancelAnimationFrame:!0,clearTimeout:!0,"document.createElement":!0,"document.createElementNS":!0,"document.createTextNode":!0,isSecureContext:!0,requestAnimationFrame:!0,setTimeout:!0},packages:{"@sentry/browser>@sentry/core":!0,"@sentry/utils":!0}},"@sentry/browser>@sentry-internal/replay-canvas":{globals:{Blob:!0,HTMLCanvasElement:!0,HTMLImageElement:!0,ImageData:!0,"URL.createObjectURL":!0,WeakRef:!0,Worker:!0,cancelAnimationFrame:!0,"console.error":!0,createImageBitmap:!0,document:!0},packages:{"@sentry/browser>@sentry/core":!0,"@sentry/utils":!0}},"@sentry/browser>@sentry-internal/replay":{globals:{Blob:!0,CSSConditionRule:!0,CSSGroupingRule:!0,CSSMediaRule:!0,CSSRule:!0,CSSSupportsRule:!0,Document:!0,DragEvent:!0,Element:!0,FormData:!0,HTMLElement:!0,HTMLFormElement:!0,Headers:!0,MouseEvent:!0,MutationObserver:!0,"Node.DOCUMENT_FRAGMENT_NODE":!0,"Node.prototype.contains":!0,PointerEvent:!0,TextEncoder:!0,URL:!0,URLSearchParams:!0,Worker:!0,__RRWEB_EXCLUDE_IFRAME__:!0,__RRWEB_EXCLUDE_SHADOW_DOM__:!0,__SENTRY_DEBUG__:!0,__SENTRY_EXCLUDE_REPLAY_WORKER__:!0,__rrMutationObserver:!0,addEventListener:!0,clearTimeout:!0,"console.debug":!0,"console.error":!0,"console.warn":!0,"customElements.get":!0,document:!0,innerHeight:!0,innerWidth:!0,"location.href":!0,"location.origin":!0,parent:!0,setTimeout:!0},packages:{"@sentry/browser>@sentry-internal/browser-utils":!0,"@sentry/browser>@sentry/core":!0,"@sentry/utils":!0}},"@sentry/browser":{globals:{"PerformanceObserver.supportedEntryTypes":!0,Request:!0,URL:!0,"XMLHttpRequest.prototype":!0,__SENTRY_DEBUG__:!0,__SENTRY_RELEASE__:!0,addEventListener:!0,"console.error":!0,"indexedDB.open":!0,"performance.timeOrigin":!0,setTimeout:!0},packages:{"@sentry/browser>@sentry-internal/browser-utils":!0,"@sentry/browser>@sentry-internal/feedback":!0,"@sentry/browser>@sentry-internal/replay-canvas":!0,"@sentry/browser>@sentry-internal/replay":!0,"@sentry/browser>@sentry/core":!0,"@sentry/utils":!0}},"@sentry/browser>@sentry/core":{globals:{Headers:!0,Request:!0,URL:!0,__SENTRY_DEBUG__:!0,__SENTRY_TRACING__:!0,clearInterval:!0,clearTimeout:!0,"console.log":!0,"console.warn":!0,setInterval:!0,setTimeout:!0},packages:{"@sentry/utils":!0}},"@sentry/utils":{globals:{CustomEvent:!0,DOMError:!0,DOMException:!0,EdgeRuntime:!0,Element:!0,ErrorEvent:!0,Event:!0,HTMLElement:!0,Headers:!0,Request:!0,Response:!0,TextDecoder:!0,TextEncoder:!0,__SENTRY_BROWSER_BUNDLE__:!0,__SENTRY_DEBUG__:!0,clearTimeout:!0,"console.error":!0,document:!0,module:!0,process:!0,setTimeout:!0,"performance.now":!0,"performance.timeOrigin":!0,devicePixelRatio:!0,"navigator.userAgent":!0,"navigator.language":!0,"navigator.userAgentData":!0,crypto:!0,onunhandledrejection:!0,addEventListener:!0,PerformanceObserver:!0,"chrome.app":!0,"chrome.runtime":!0,location:!1,top:!0,"location.href":!0},packages:{process:!0}},"@simplewebauthn/browser":{globals:{AbortController:!0,AbortSignal:!0,PublicKeyCredential:!0,atob:!0,btoa:!0,"console.warn":!0,"document.querySelectorAll":!0,"location.hostname":!0,"navigator.credentials.create":!0,"navigator.credentials.get":!0}},"@solana/addresses":{globals:{"Intl.Collator":!0,TextEncoder:!0,"crypto.subtle.digest":!0,"crypto.subtle.exportKey":!0},packages:{"@solana/addresses>@solana/assertions":!0,"@solana/addresses>@solana/codecs-core":!0,"@solana/addresses>@solana/codecs-strings":!0,"@solana/addresses>@solana/errors":!0}},"@solana/addresses>@solana/codecs-core":{packages:{"@solana/addresses>@solana/errors":!0}},"@solana/addresses>@solana/codecs-strings":{globals:{TextDecoder:!0,TextEncoder:!0,atob:!0,btoa:!0},packages:{"@solana/addresses>@solana/codecs-core":!0,"@solana/addresses>@solana/errors":!0}},"@solana/addresses>@solana/errors":{globals:{btoa:!0}},"@metamask/controller-utils>@spruceid/siwe-parser":{globals:{"console.error":!0,"console.log":!0},packages:{"@noble/hashes":!0,"@metamask/controller-utils>@spruceid/siwe-parser>apg-js":!0}},"@metamask/core-backend>@tanstack/query-core":{globals:{AbortController:!0,addEventListener:!1,clearInterval:!0,clearTimeout:!0,"console.error":!0,removeEventListener:!0,setInterval:!0,setTimeout:!0,document:!1,"document.visibilityState":!0}},"@metamask/react-data-query>@tanstack/query-core":{globals:{AbortController:!0,addEventListener:!0,clearTimeout:!0,console:!0,document:!0,navigator:!0,removeEventListener:!0,setTimeout:!0}},"@tanstack/react-query>@tanstack/query-core":{globals:{AbortController:!0,addEventListener:!1,clearInterval:!0,clearTimeout:!0,document:!1,navigator:!0,removeEventListener:!0,setInterval:!0,setTimeout:!0}},"@tanstack/react-query":{globals:{ReactQueryClientContext:"write"},packages:{"@tanstack/react-query>@tanstack/query-core":!0,react:!0,"@tanstack/react-query>use-sync-external-store":!0}},"@tanstack/react-virtual":{globals:{document:!0,scrollY:!0},packages:{"@tanstack/react-virtual>@tanstack/virtual-core":!0,react:!0,"react-dom":!0}},"@tanstack/react-virtual>@tanstack/virtual-core":{globals:{"console.info":!0,"console.warn":!0,requestAnimationFrame:!0}},"@trezor/connect-web>@trezor/connect-common":{globals:{"console.warn":!0,"localStorage.getItem":!0,"localStorage.setItem":!0,navigator:!0,setTimeout:!0,window:!0},packages:{"@trezor/connect-web>@trezor/connect-common>@trezor/env-utils":!0,"@trezor/connect-web>@trezor/utils":!0,tslib:!0}},"@trezor/connect-web":{globals:{URLSearchParams:!0,__TREZOR_CONNECT_SRC:!0,addEventListener:!0,btoa:!0,chrome:!0,clearInterval:!0,clearTimeout:!0,"console.warn":!0,"document.body":!0,"document.createElement":!0,"document.createTextNode":!0,"document.getElementById":!0,"document.querySelectorAll":!0,"location.origin":!0,navigator:!0,open:!0,origin:!0,removeEventListener:!0,setInterval:!0,setTimeout:!0},packages:{"@trezor/connect-web>@trezor/connect-common":!0,"@trezor/connect-web>@trezor/connect":!0,"@trezor/connect-web>@trezor/utils":!0,"@trezor/connect-web>@trezor/connect>@trezor/blockchain-link>@trezor/websocket-client":!0,"webpack>events":!0,tslib:!0}},"@trezor/connect-web>@trezor/connect":{packages:{"@trezor/connect-web>@trezor/connect>@trezor/device-utils":!0,"@trezor/connect-web>@trezor/connect>@trezor/protobuf":!0,"@trezor/connect-web>@trezor/connect>@trezor/schema-utils":!0,"@trezor/connect-web>@trezor/connect>@trezor/transport":!0,"@trezor/connect-web>@trezor/utils":!0,tslib:!0}},"@trezor/connect-web>@trezor/connect>@trezor/device-utils":{packages:{tslib:!0}},"@trezor/connect-web>@trezor/connect-common>@trezor/env-utils":{globals:{innerHeight:!0,innerWidth:!0,"location.hostname":!0,"location.origin":!0,"navigator.languages":!0,"navigator.platform":!0,"navigator.userAgent":!0,process:!0,"screen.height":!0,"screen.width":!0},packages:{process:!0,"@trezor/connect-web>@trezor/connect-common>@trezor/env-utils>ua-parser-js":!0}},"@trezor/connect-web>@trezor/connect>@trezor/protobuf":{globals:{"Buffer.from":!0},packages:{"@trezor/connect-web>@trezor/connect>@trezor/schema-utils":!0,buffer:!0,"@google/genai>protobufjs>long":!0,"@google/genai>protobufjs":!0,tslib:!0}},"@trezor/connect-web>@trezor/connect>@trezor/schema-utils":{globals:{Buffer:!0,"console.warn":!0},packages:{"@trezor/connect-web>@trezor/connect>@trezor/schema-utils>@sinclair/typebox":!0,buffer:!0,"ts-mixer":!0}},"@trezor/connect-web>@trezor/utils":{globals:{AbortController:!0,Blob:!0,"Buffer.alloc":!0,"Buffer.allocUnsafe":!0,"Intl.NumberFormat":!0,TextEncoder:!0,clearInterval:!0,clearTimeout:!0,"console.error":!0,"console.info":!0,"console.log":!0,"console.warn":!0,"crypto.getRandomValues":!0,setInterval:!0,setTimeout:!0},packages:{"@trezor/connect-web>@trezor/utils>bignumber.js":!0,buffer:!0,"webpack>events":!0,tslib:!0}},"@trezor/connect-web>@trezor/connect>@trezor/blockchain-link>@trezor/websocket-client":{globals:{WebSocket:!0,clearTimeout:!0,setTimeout:!0},packages:{"@trezor/connect-web>@trezor/utils":!0,"webpack>events":!0,tslib:!0}},"@zxing/browser":{globals:{HTMLElement:!0,HTMLImageElement:!0,HTMLVideoElement:!0,clearTimeout:!0,"console.error":!0,"console.warn":!0,document:!0,navigator:!0,setTimeout:!0},packages:{"@zxing/library":!0}},"@zxing/library":{globals:{HTMLImageElement:!0,HTMLVideoElement:!0,TextDecoder:!0,TextEncoder:!0,"URL.createObjectURL":!0,btoa:!0,"console.log":!0,"console.warn":!0,document:!0,navigator:!0,setTimeout:!0},packages:{"@zxing/library>ts-custom-error":!0}},"openai>abort-controller":{globals:{AbortController:!0}},"currency-formatter>accounting":{globals:{define:!0}},"ethers>@ethersproject/json-wallets>aes-js":{globals:{define:!0}},"eth-lattice-keyring>gridplus-sdk>aes-js":{globals:{define:!0}},"chalk>ansi-styles":{packages:{"chalk>ansi-styles>color-convert":!0}},"@metamask/controller-utils>@spruceid/siwe-parser>apg-js":{packages:{buffer:!0}},"string.prototype.matchall>es-abstract>array-buffer-byte-length":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>es-abstract>is-array-buffer":!0}},"crypto-browserify>public-encrypt>parse-asn1>asn1.js":{packages:{"ethereumjs-util>bn.js":!0,buffer:!0,"pumpify>inherits":!0,"@toruslabs/eccrypto>elliptic>minimalistic-assert":!0}},"@ngraveio/bc-ur>assert":{globals:{console:!0,"process.emitWarning":!0,"process.stderr":!0},packages:{"string.prototype.matchall>call-bind":!0,"@ngraveio/bc-ur>assert>is-nan":!0,"@ngraveio/bc-ur>assert>object-is":!0,"gulp>vinyl-fs>object.assign":!0,process:!0,"browserify>util":!0}},"async-mutex":{globals:{clearTimeout:!0,setTimeout:!0}},"@metamask/transaction-controller>@metamask/nonce-tracker>async-mutex":{globals:{clearTimeout:!0,setTimeout:!0},packages:{tslib:!0}},"string.prototype.matchall>es-abstract>available-typed-arrays":{packages:{"string.prototype.matchall>es-abstract>typed-array-length>possible-typed-array-names":!0}},"wait-on>axios":{globals:{AbortController:!0,Blob:!0,Buffer:!1,FormData:!0,ReadableStream:!0,URL:!0,URLSearchParams:!0,WorkerGlobalScope:!0,XMLHttpRequest:!0,btoa:!0,clearTimeout:!0,"console.warn":!0,document:!0,fetch:!0,importScripts:!0,"location.href":!0,navigator:!0,process:!0,queueMicrotask:!0,setImmediate:!0,setTimeout:!0,postMessage:!0,Request:!0,Response:!0,TextEncoder:!0,"Buffer.alloc":!0,"Buffer.byteLength":!0,"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{buffer:!0,"core-js-pure":!0,process:!0}},"@ensdomains/content-hash>multihashes>multibase>base-x":{packages:{"mockttp>express>safe-buffer":!0}},"bignumber.js":{globals:{crypto:!0,define:!0}},"@ledgerhq/hw-app-eth>bignumber.js":{globals:{crypto:!0}},"@metamask/assets-controller>bignumber.js":{globals:{crypto:!0}},"@metamask/bridge-controller>bignumber.js":{globals:{crypto:!0}},"@metamask/notification-services-controller>bignumber.js":{globals:{crypto:!0}},"@metamask/transaction-controller>bignumber.js":{globals:{crypto:!0}},"@ngraveio/bc-ur>bignumber.js":{globals:{crypto:!0,define:!0}},"@trezor/connect-web>@trezor/utils>bignumber.js":{globals:{crypto:!0,define:!0}},"@metamask/design-system-react>blo":{globals:{btoa:!0}},"ethereumjs-util>bn.js":{globals:{Buffer:!0}},bowser:{globals:{define:!0}},"@toruslabs/eccrypto>elliptic>brorand":{globals:{crypto:!0,msCrypto:!0}},"ethereumjs-util>ethereum-cryptography>browserify-aes":{globals:{"Buffer.concat":!0},packages:{buffer:!0,"ethereumjs-util>ethereum-cryptography>browserify-aes>buffer-xor":!0,"ethereumjs-util>create-hash>cipher-base":!0,"crypto-browserify>browserify-cipher>evp_bytestokey":!0,"pumpify>inherits":!0,"mockttp>express>safe-buffer":!0}},"crypto-browserify>browserify-cipher":{packages:{"ethereumjs-util>ethereum-cryptography>browserify-aes":!0,"crypto-browserify>browserify-cipher>browserify-des":!0,"crypto-browserify>browserify-cipher>evp_bytestokey":!0}},"crypto-browserify>browserify-cipher>browserify-des":{globals:{Buffer:!0},packages:{buffer:!0,"ethereumjs-util>create-hash>cipher-base":!0,"crypto-browserify>browserify-cipher>browserify-des>des.js":!0,"pumpify>inherits":!0}},"crypto-browserify>public-encrypt>browserify-rsa":{packages:{"ethereumjs-util>bn.js":!0,"crypto-browserify>randombytes":!0,"mockttp>express>safe-buffer":!0}},"crypto-browserify>browserify-sign":{packages:{"ethereumjs-util>bn.js":!0,"crypto-browserify>public-encrypt>browserify-rsa":!0,"ethereumjs-util>create-hash":!0,"crypto-browserify>create-hmac":!0,"@toruslabs/eccrypto>elliptic":!0,"pumpify>inherits":!0,"crypto-browserify>public-encrypt>parse-asn1":!0,"crypto-browserify>browserify-sign>readable-stream":!0,"mockttp>express>safe-buffer":!0}},"ethereumjs-util>ethereum-cryptography>bs58check>bs58":{packages:{"@ensdomains/content-hash>multihashes>multibase>base-x":!0}},"ethereumjs-util>ethereum-cryptography>bs58check":{packages:{"ethereumjs-util>ethereum-cryptography>bs58check>bs58":!0,"ethereumjs-util>create-hash":!0,"mockttp>express>safe-buffer":!0}},buffer:{globals:{console:!0,SharedArrayBuffer:!0},packages:{"base64-js":!0,"buffer>ieee754":!0}},"ethereumjs-util>ethereum-cryptography>browserify-aes>buffer-xor":{globals:{Buffer:!0},packages:{buffer:!0}},"@ngraveio/bc-ur>crc>buffer":{globals:{console:!0},packages:{"base64-js":!0,"buffer>ieee754":!0}},"remote-redux-devtools>socketcluster-client>buffer":{globals:{console:!0},packages:{"base64-js":!0,"buffer>ieee754":!0}},"@metamask/snaps-utils>validate-npm-package-name>builtins":{globals:{"process.version":!0},packages:{process:!0,semver:!0}},"string.prototype.matchall>call-bind>call-bind-apply-helpers":{packages:{"string.prototype.matchall>es-errors":!0,"browserify>has>function-bind":!0}},"string.prototype.matchall>call-bind":{packages:{"string.prototype.matchall>call-bind>call-bind-apply-helpers":!0,"string.prototype.matchall>call-bind>es-define-property":!0,"string.prototype.matchall>get-intrinsic":!0,"string.prototype.matchall>call-bind>set-function-length":!0}},"string.prototype.matchall>call-bound":{packages:{"string.prototype.matchall>call-bind>call-bind-apply-helpers":!0,"string.prototype.matchall>get-intrinsic":!0}},"@ngraveio/bc-ur>cbor-sync":{globals:{Buffer:!0,define:!0},packages:{buffer:!0}},chalk:{packages:{"chalk>ansi-styles":!0,"chalk>supports-color":!0}},"chart.js":{globals:{"Intl.NumberFormat":!0,MutationObserver:!0,OffscreenCanvas:!0,Path2D:!0,ResizeObserver:!0,addEventListener:!0,clearTimeout:!0,"console.error":!0,"console.warn":!0,devicePixelRatio:!0,document:!0,removeEventListener:!0,requestAnimationFrame:!0,setTimeout:!0},packages:{"chart.js>@kurkle/color":!0}},"ethereumjs-util>create-hash>cipher-base":{packages:{"pumpify>inherits":!0,"mockttp>express>safe-buffer":!0,"stream-browserify":!0,"browserify>string_decoder":!0}},"@metamask/jazzicon>color>clone":{globals:{Buffer:!0},packages:{buffer:!0}},"remote-redux-devtools>socketcluster-client>clone":{globals:{Buffer:!0},packages:{"remote-redux-devtools>socketcluster-client>buffer":!0}},cockatiel:{globals:{AbortController:!0,AbortSignal:!0,WeakRef:!0,performance:!0,"process.hrtime.bigint":!0,setTimeout:!0},packages:{process:!0}},"chalk>ansi-styles>color-convert":{packages:{"jest-canvas-mock>moo-color>color-name":!0}},"@metamask/jazzicon>color>color-convert":{packages:{"@metamask/jazzicon>color>color-convert>color-name":!0}},"@metamask/jazzicon>color>color-string":{packages:{"jest-canvas-mock>moo-color>color-name":!0}},"@metamask/jazzicon>color":{packages:{"@metamask/jazzicon>color>clone":!0,"@metamask/jazzicon>color>color-convert":!0,"@metamask/jazzicon>color>color-string":!0}},"copy-to-clipboard":{globals:{clipboardData:!0,"console.error":!0,"console.warn":!0,"document.body.appendChild":!0,"document.body.removeChild":!0,"document.createElement":!0,"document.createRange":!0,"document.execCommand":!0,"document.getSelection":!0,"navigator.userAgent":!0,prompt:!0},packages:{"copy-to-clipboard>toggle-selection":!0}},"core-js-pure":{globals:{"Bun.version":!0,"Deno.version":!0,document:!0,setTimeout:!0,"navigator.userAgent":!0,MessageChannel:!0,location:!0}},"readable-stream-2>core-util-is":{globals:{"Buffer.isBuffer":!0},packages:{buffer:!0}},"@ngraveio/bc-ur>crc":{packages:{"@ngraveio/bc-ur>crc>buffer":!0}},"crypto-browserify>create-ecdh":{globals:{Buffer:!0},packages:{"ethereumjs-util>bn.js":!0,buffer:!0,"@toruslabs/eccrypto>elliptic":!0}},"ethereumjs-util>create-hash":{packages:{"ethereumjs-util>create-hash>cipher-base":!0,"pumpify>inherits":!0,"ethereumjs-util>create-hash>md5.js":!0,"ethereumjs-util>create-hash>ripemd160":!0,"@ngraveio/bc-ur>sha.js":!0}},"crypto-browserify>pbkdf2>create-hash":{globals:{Buffer:!0},packages:{buffer:!0}},"crypto-browserify>create-hmac":{packages:{"ethereumjs-util>create-hash>cipher-base":!0,"ethereumjs-util>create-hash":!0,"pumpify>inherits":!0,"ethereumjs-util>create-hash>ripemd160":!0,"mockttp>express>safe-buffer":!0,"@ngraveio/bc-ur>sha.js":!0}},"cron-parser":{packages:{luxon:!0}},"crypto-browserify":{packages:{"crypto-browserify>browserify-cipher":!0,"crypto-browserify>browserify-sign":!0,"crypto-browserify>create-ecdh":!0,"ethereumjs-util>create-hash":!0,"crypto-browserify>create-hmac":!0,"crypto-browserify>diffie-hellman":!0,"crypto-browserify>pbkdf2":!0,"crypto-browserify>public-encrypt":!0,"crypto-browserify>randombytes":!0,"crypto-browserify>randomfill":!0}},"@metamask/ppom-validator>crypto-js":{globals:{crypto:!0,define:!0,msCrypto:!0}},"react-beautiful-dnd>css-box-model":{globals:{getComputedStyle:!0,pageXOffset:!0,pageYOffset:!0},packages:{"react-beautiful-dnd>css-box-model>tiny-invariant":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer>css-vendor":{globals:{"document.createElement":!0,"document.documentElement":!0,getComputedStyle:!0},packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/styles>jss>is-in-browser":!0}},"currency-formatter":{packages:{"currency-formatter>accounting":!0,"currency-formatter>locale-currency":!0,"react>object-assign":!0}},"nock>debug":{globals:{console:!0,document:!0,localStorage:!0,navigator:!0,process:!0},packages:{"mocha>ms":!0,process:!0}},"@metamask/eth-token-tracker>deep-equal":{packages:{"string.prototype.matchall>es-abstract>array-buffer-byte-length":!0,"string.prototype.matchall>call-bind":!0,"@metamask/eth-token-tracker>deep-equal>es-get-iterator":!0,"string.prototype.matchall>get-intrinsic":!0,"browserify>util>is-arguments":!0,"string.prototype.matchall>es-abstract>is-array-buffer":!0,"@metamask/eth-token-tracker>deep-equal>is-date-object":!0,"string.prototype.matchall>es-abstract>is-regex":!0,"string.prototype.matchall>es-abstract>is-shared-array-buffer":!0,"@lavamoat/webpack>json-stable-stringify>isarray":!0,"@ngraveio/bc-ur>assert>object-is":!0,"@lavamoat/webpack>json-stable-stringify>object-keys":!0,"gulp>vinyl-fs>object.assign":!0,"string.prototype.matchall>regexp.prototype.flags":!0,"string.prototype.matchall>side-channel":!0,"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive":!0,"@metamask/eth-token-tracker>deep-equal>which-collection":!0,"browserify>util>which-typed-array":!0}},"string.prototype.matchall>define-properties>define-data-property":{packages:{"string.prototype.matchall>call-bind>es-define-property":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>gopd":!0}},"string.prototype.matchall>define-properties":{packages:{"string.prototype.matchall>define-properties>define-data-property":!0,"eslint-plugin-react>es-iterator-helpers>has-property-descriptors":!0,"@lavamoat/webpack>json-stable-stringify>object-keys":!0}},"crypto-browserify>browserify-cipher>browserify-des>des.js":{packages:{"pumpify>inherits":!0,"@toruslabs/eccrypto>elliptic>minimalistic-assert":!0}},"crypto-browserify>diffie-hellman":{globals:{Buffer:!0},packages:{"ethereumjs-util>bn.js":!0,buffer:!0,"crypto-browserify>diffie-hellman>miller-rabin":!0,"crypto-browserify>randombytes":!0}},dompurify:{globals:{"console.warn":!0}},"eslint-plugin-react>es-iterator-helpers>has-proto>dunder-proto":{packages:{"string.prototype.matchall>call-bind>call-bind-apply-helpers":!0,"string.prototype.matchall>gopd":!0}},"@toruslabs/eccrypto>elliptic":{packages:{"ethereumjs-util>bn.js":!0,"@toruslabs/eccrypto>elliptic>brorand":!0,"ethers>@ethersproject/sha2>hash.js":!0,"@toruslabs/eccrypto>elliptic>hmac-drbg":!0,"pumpify>inherits":!0,"@toruslabs/eccrypto>elliptic>minimalistic-assert":!0,"@toruslabs/eccrypto>elliptic>minimalistic-crypto-utils":!0}},"@metamask/eth-token-tracker>deep-equal>es-get-iterator":{globals:{process:!0},packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>get-intrinsic":!0,"string.prototype.matchall>has-symbols":!0,"browserify>util>is-arguments":!0,"@metamask/eth-token-tracker>deep-equal>es-get-iterator>is-map":!0,"string.prototype.matchall>es-abstract>is-set":!0,"eslint-plugin-react>array-includes>is-string":!0,"@lavamoat/webpack>json-stable-stringify>isarray":!0,process:!0,"string.prototype.matchall>es-abstract>stop-iteration-iterator":!0}},"eth-ens-namehash":{globals:{Buffer:!0,name:"write"},packages:{buffer:!0,"eth-ens-namehash>idna-uts46-hx":!0,"eth-ens-namehash>js-sha3":!0}},"eth-method-registry":{packages:{"eth-method-registry>@metamask/ethjs-contract":!0,"eth-method-registry>@metamask/ethjs-query":!0}},"@ethereumjs/tx>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0,module:!0},packages:{"@ethereumjs/tx>ethereum-cryptography>@noble/hashes":!0}},"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0,module:!0},packages:{"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/curves":!0,"@ethereumjs/tx>@ethereumjs/util>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0},packages:{"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/curves":!0,"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>@ethereumjs/util>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-hd-keyring>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0,module:!0},packages:{"@metamask/eth-hd-keyring>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-sig-util>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0},packages:{"@metamask/eth-sig-util>ethereum-cryptography>@noble/curves":!0,"@metamask/eth-sig-util>ethereum-cryptography>@noble/hashes":!0}},"@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0,module:!0},packages:{"@metamask/keyring-controller>@metamask/eth-simple-keyring>ethereum-cryptography>@noble/hashes":!0}},"@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography":{globals:{TextDecoder:!0,crypto:!0,module:!0},packages:{"@metamask/eth-hd-keyring>@metamask/keyring-sdk>ethereum-cryptography>@noble/hashes":!0}},"ethereumjs-util>ethereum-cryptography":{globals:{"Buffer.from":!0},packages:{buffer:!0,"ethereumjs-util>ethereum-cryptography>keccak":!0,"crypto-browserify>randombytes":!0,"ethereumjs-util>ethereum-cryptography>secp256k1":!0}},"@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography":{globals:{"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{"@ngraveio/bc-ur>assert":!0,"ethereumjs-util>ethereum-cryptography>bs58check":!0,buffer:!0,"crypto-browserify>create-hmac":!0,"ethers>@ethersproject/sha2>hash.js":!0,"ethereumjs-util>ethereum-cryptography>keccak":!0,"crypto-browserify>randombytes":!0,"mockttp>express>safe-buffer":!0,"ethereumjs-util>ethereum-cryptography>secp256k1":!0}},"ethereumjs-util":{globals:{Buffer:!0},packages:{"@ngraveio/bc-ur>assert":!0,"ethereumjs-util>bn.js":!0,buffer:!0,"ethereumjs-util>create-hash":!0,"ethereumjs-util>ethereum-cryptography":!0,"ethereumjs-util>rlp":!0}},"@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util":{globals:{Buffer:!0},packages:{"@ngraveio/bc-ur>assert":!0,"ethereumjs-util>bn.js":!0,buffer:!0,"ethereumjs-util>create-hash":!0,"@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography":!0,"ethereumjs-util>rlp":!0}},"@metamask/keyring-controller>ethereumjs-wallet":{globals:{"Buffer.alloc":!0,"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{"eth-lattice-keyring>gridplus-sdk>aes-js":!0,"ethereumjs-util>ethereum-cryptography>bs58check":!0,buffer:!0,"crypto-browserify":!0,"@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography":!0,"@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util":!0,"crypto-browserify>randombytes":!0,"ethers>@ethersproject/json-wallets>scrypt-js":!0,"@metamask/keyring-controller>ethereumjs-wallet>utf8":!0,uuid:!0}},ethers:{packages:{"@ethersproject/abi":!0,"ethers>@ethersproject/address":!0,"ethers>@ethersproject/base64":!0,"ethers>@ethersproject/basex":!0,"@ethersproject/bytes":!0,"ethers>@ethersproject/hash":!0,"@ethersproject/hdnode":!0,"ethers>@ethersproject/json-wallets":!0,"ethers>@ethersproject/keccak256":!0,"ethers>@ethersproject/logger":!0,"ethers>@ethersproject/properties":!0,"ethers>@ethersproject/random":!0,"ethers>@ethersproject/rlp":!0,"ethers>@ethersproject/sha2":!0,"ethers>@ethersproject/signing-key":!0,"ethers>@ethersproject/solidity":!0,"ethers>@ethersproject/strings":!0,"@ethersproject/transactions":!0,"ethers>@ethersproject/units":!0,"ethers>@ethersproject/wallet":!0,"ethers>@ethersproject/web":!0}},"eth-method-registry>@metamask/ethjs-contract>ethjs-abi":{globals:{Buffer:!0},packages:{"ethereumjs-util>bn.js":!0,buffer:!0,"eth-ens-namehash>js-sha3":!0,"eth-method-registry>@metamask/ethjs-contract>ethjs-abi>number-to-bn":!0}},"webpack>events":{globals:{console:!0}},"crypto-browserify>browserify-cipher>evp_bytestokey":{packages:{"ethereumjs-util>create-hash>md5.js":!0,"mockttp>express>safe-buffer":!0}},"extension-port-stream":{globals:{AggregateError:!0,"navigator.userAgent.includes":!0,"performance.now":!0,queueMicrotask:!0,scheduler:!0,setTimeout:!0},packages:{"readable-stream":!0}},"lightweight-charts>fancy-canvas":{globals:{ResizeObserver:!0,"document.body":!0}},"react-focus-lock>focus-lock":{globals:{HTMLIFrameElement:!0,"Node.DOCUMENT_FRAGMENT_NODE":!0,"Node.DOCUMENT_NODE":!0,"Node.DOCUMENT_POSITION_CONTAINED_BY":!0,"Node.DOCUMENT_POSITION_CONTAINS":!0,"Node.ELEMENT_NODE":!0,"console.error":!0,"console.warn":!0,document:!0,getComputedStyle:!0,setTimeout:!0}},"browserify>util>which-typed-array>for-each":{packages:{"string.prototype.matchall>es-abstract>is-callable":!0}},"fuse.js":{globals:{console:!0,define:!0}},"string.prototype.matchall>get-intrinsic":{globals:{AggregateError:!0,FinalizationRegistry:!0,Float16Array:!0,WeakRef:!0,Atomics:!0,SharedArrayBuffer:!0},packages:{"string.prototype.matchall>get-intrinsic>async-function":!0,"string.prototype.matchall>get-intrinsic>async-generator-function":!0,"string.prototype.matchall>call-bind>call-bind-apply-helpers":!0,"string.prototype.matchall>call-bind>es-define-property":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>es-object-atoms":!0,"browserify>has>function-bind":!0,"string.prototype.matchall>get-intrinsic>generator-function":!0,"string.prototype.matchall>es-abstract>get-proto":!0,"string.prototype.matchall>gopd":!0,"string.prototype.matchall>has-symbols":!0,"eslint-plugin-react>hasown":!0,"eslint-plugin-react>array-includes>math-intrinsics":!0}},"remote-redux-devtools>redux-devtools-core>get-params":{globals:{GetParams:"write"}},"string.prototype.matchall>es-abstract>get-proto":{packages:{"eslint-plugin-react>es-iterator-helpers>has-proto>dunder-proto":!0,"string.prototype.matchall>es-object-atoms":!0}},"react-hot-toast>goober":{globals:{__nonce__:!0,_goober:!0,"document.createElement":!0,"document.head":!0}},"eslint-plugin-react>es-iterator-helpers>has-property-descriptors":{packages:{"string.prototype.matchall>call-bind>es-define-property":!0}},"jsdom>form-data>es-set-tostringtag>has-tostringtag":{packages:{"string.prototype.matchall>has-symbols":!0}},"ethereumjs-util>create-hash>md5.js>hash-base":{packages:{"pumpify>inherits":!0,"ethereumjs-util>create-hash>md5.js>hash-base>readable-stream":!0,"mockttp>express>safe-buffer":!0}},"ethereumjs-util>create-hash>ripemd160>hash-base":{packages:{"pumpify>inherits":!0,"ethereumjs-util>create-hash>ripemd160>hash-base>readable-stream":!0,"mockttp>express>safe-buffer":!0}},"crypto-browserify>pbkdf2>ripemd160>hash-base":{globals:{Buffer:!0},packages:{buffer:!0,"pumpify>inherits":!0,"stream-browserify":!0}},"ethers>@ethersproject/sha2>hash.js":{packages:{"pumpify>inherits":!0,"@toruslabs/eccrypto>elliptic>minimalistic-assert":!0}},"eslint-plugin-react>hasown":{packages:{"browserify>has>function-bind":!0}},"@metamask/eth-qr-keyring>hdkey":{packages:{"@ngraveio/bc-ur>assert":!0,"ethereumjs-util>ethereum-cryptography>bs58check":!0,"crypto-browserify":!0,"ethereumjs-util>create-hash>ripemd160":!0,"mockttp>express>safe-buffer":!0,"ethereumjs-util>ethereum-cryptography>secp256k1":!0}},he:{globals:{define:!0}},"@toruslabs/eccrypto>elliptic>hmac-drbg":{packages:{"ethers>@ethersproject/sha2>hash.js":!0,"@toruslabs/eccrypto>elliptic>minimalistic-assert":!0,"@toruslabs/eccrypto>elliptic>minimalistic-crypto-utils":!0}},"react-redux>hoist-non-react-statics":{packages:{"react-redux>hoist-non-react-statics>react-is":!0}},"https-browserify":{packages:{"stream-http":!0,"browserify>url":!0}},"humanize-duration":{globals:{define:!0}},"eth-ens-namehash>idna-uts46-hx":{globals:{define:!0},packages:{"eth-ens-namehash>idna-uts46-hx>punycode":!0}},"string.prototype.matchall>internal-slot":{packages:{"string.prototype.matchall>es-errors":!0,"eslint-plugin-react>hasown":!0,"string.prototype.matchall>side-channel":!0}},"browserify>util>is-arguments":{packages:{"string.prototype.matchall>call-bind":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"string.prototype.matchall>es-abstract>is-array-buffer":{packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>get-intrinsic":!0}},"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-bigint":{packages:{"string.prototype.matchall>es-abstract>unbox-primitive>has-bigints":!0}},"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-boolean-object":{packages:{"string.prototype.matchall>call-bound":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"string.prototype.matchall>es-abstract>is-callable":{globals:{document:!0}},"@metamask/eth-token-tracker>deep-equal>is-date-object":{packages:{"string.prototype.matchall>call-bound":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"browserify>util>is-generator-function":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>get-intrinsic>generator-function":!0,"string.prototype.matchall>es-abstract>get-proto":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0,"string.prototype.matchall>es-abstract>safe-regex-test":!0}},"@material-ui/core>@material-ui/styles>jss>is-in-browser":{globals:{document:!0}},"@ngraveio/bc-ur>assert>is-nan":{packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>define-properties":!0}},"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-number-object":{packages:{"string.prototype.matchall>call-bound":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"string.prototype.matchall>es-abstract>is-regex":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>gopd":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0,"eslint-plugin-react>hasown":!0}},"string.prototype.matchall>es-abstract>is-shared-array-buffer":{packages:{"string.prototype.matchall>call-bound":!0}},"eslint-plugin-react>array-includes>is-string":{packages:{"string.prototype.matchall>call-bound":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"string.prototype.matchall>es-abstract>es-to-primitive>is-symbol":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>has-symbols":!0,"string.prototype.matchall>es-abstract>safe-regex-test":!0}},"browserify>util>is-typed-array":{packages:{"browserify>util>which-typed-array":!0}},"@metamask/eth-token-tracker>deep-equal>which-collection>is-weakset":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>get-intrinsic":!0}},"@segment/analytics-node>jose":{globals:{CryptoKey:!0,TextDecoder:!0,TextEncoder:!0,atob:!0,btoa:!0,crypto:!0}},"eth-ens-namehash>js-sha3":{globals:{define:!0,process:!0},packages:{process:!0}},"remote-redux-devtools>jsan":{globals:{"console.warn":!0}},"@ngraveio/bc-ur>jsbi":{globals:{define:!0}},"@material-ui/core>@material-ui/styles>jss-plugin-camel-case":{packages:{"@material-ui/core>@material-ui/styles>jss-plugin-camel-case>hyphenate-style-name":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-default-unit":{globals:{CSS:!0},packages:{"@material-ui/core>@material-ui/styles>jss":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-global":{packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/styles>jss":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-nested":{packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/styles>jss>tiny-warning":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-rule-value-function":{packages:{"@material-ui/core>@material-ui/styles>jss":!0,"@material-ui/core>@material-ui/styles>jss>tiny-warning":!0}},"@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer":{packages:{"@material-ui/core>@material-ui/styles>jss-plugin-vendor-prefixer>css-vendor":!0,"@material-ui/core>@material-ui/styles>jss":!0}},"@material-ui/core>@material-ui/styles>jss":{globals:{CSS:!0,"document.createElement":!0,"document.querySelector":!0},packages:{"@babel/runtime":!0,"@material-ui/core>@material-ui/styles>jss>is-in-browser":!0,"@material-ui/core>@material-ui/styles>jss>tiny-warning":!0}},"ethereumjs-util>ethereum-cryptography>keccak":{globals:{"Buffer.alloc":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{buffer:!0,"ethereumjs-util>ethereum-cryptography>keccak>readable-stream":!0}},"lightweight-charts":{globals:{Image:!0,ResizeObserver:!0,URL:!0,cancelAnimationFrame:!0,chrome:!0,clearTimeout:!0,devicePixelRatio:!0,"document.activeElement":!0,"document.body":!0,"document.createElement":!0,"document.documentElement":!0,"document.getElementById":!0,"document.getSelection":!0,getComputedStyle:!0,"location.href":!0,"navigator.language":!0,"navigator.platform":!0,"navigator.userAgent.toLowerCase":!0,"navigator.userAgentData":!0,"performance.now":!0,queueMicrotask:!0,requestAnimationFrame:!0,setTimeout:!0},packages:{"lightweight-charts>fancy-canvas":!0}},"currency-formatter>locale-currency":{globals:{countryCode:!0}},localforage:{globals:{Blob:!0,BlobBuilder:!0,FileReader:!0,IDBKeyRange:!0,MSBlobBuilder:!0,MozBlobBuilder:!0,OIndexedDB:!0,WebKitBlobBuilder:!0,atob:!0,btoa:!0,"console.error":!0,"console.info":!0,"console.warn":!0,define:!0,fetch:!0,indexedDB:!0,localStorage:!0,mozIndexedDB:!0,msIndexedDB:!0,"navigator.platform":!0,"navigator.userAgent":!0,openDatabase:!0,setTimeout:!0,webkitIndexedDB:!0}},lodash:{globals:{define:!0,_:!0,setTimeout:!0,clearTimeout:!0}},loglevel:{globals:{console:!0,define:!0,"document.cookie":!0,localStorage:!0,log:"write",navigator:!0}},"@google/genai>protobufjs>long":{globals:{"WebAssembly.Instance":!0,"WebAssembly.Module":!0,define:!0}},"lottie-web":{globals:{Blob:!0,Howl:!0,OffscreenCanvas:!0,"URL.createObjectURL":!0,Worker:!0,XMLHttpRequest:!0,bodymovin:"write",clearInterval:!0,console:!0,define:!0,"document.body":!0,"document.createElement":!0,"document.createElementNS":!0,"document.getElementsByClassName":!0,"document.getElementsByTagName":!0,"document.querySelectorAll":!0,"document.readyState":!0,"location.origin":!0,"location.pathname":!0,navigator:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0}},luxon:{globals:{Intl:!0}},"@metamask/snaps-utils>marked":{globals:{"console.error":!0,"console.warn":!0}},"ethereumjs-util>create-hash>md5.js":{packages:{"ethereumjs-util>create-hash>md5.js>hash-base":!0,"pumpify>inherits":!0,"mockttp>express>safe-buffer":!0}},"@storybook/addon-docs>remark-external-links>mdast-util-definitions":{packages:{"react-markdown>unist-util-visit":!0}},"react-markdown>remark-parse>mdast-util-from-markdown":{packages:{"react-markdown>remark-parse>mdast-util-from-markdown>mdast-util-to-string":!0,"react-markdown>remark-parse>mdast-util-from-markdown>micromark":!0,"react-syntax-highlighter>refractor>parse-entities":!0,"react-markdown>vfile>unist-util-stringify-position":!0}},"react-markdown>remark-rehype>mdast-util-to-hast":{globals:{"console.warn":!0},packages:{"@storybook/addon-docs>remark-external-links>mdast-util-definitions":!0,"react-markdown>remark-rehype>mdast-util-to-hast>mdurl":!0,"react-markdown>remark-rehype>mdast-util-to-hast>unist-builder":!0,"react-markdown>remark-rehype>mdast-util-to-hast>unist-util-generated":!0,"react-markdown>remark-rehype>mdast-util-to-hast>unist-util-position":!0,"react-markdown>unist-util-visit":!0}},"eth-lattice-keyring>@ethereumjs/util>micro-ftch":{globals:{"Buffer.concat":!0,Headers:!0,TextDecoder:!0,URL:!0,btoa:!0,fetch:!0,process:!0},packages:{buffer:!0,"https-browserify":!0,process:!0,"stream-http":!0,"browserify>url":!0,"browserify>util":!0}},"react-markdown>remark-parse>mdast-util-from-markdown>micromark":{packages:{"react-syntax-highlighter>refractor>parse-entities":!0}},"crypto-browserify>diffie-hellman>miller-rabin":{packages:{"ethereumjs-util>bn.js":!0,"@toruslabs/eccrypto>elliptic>brorand":!0}},"@metamask/assets-controllers>multiformats":{globals:{TextDecoder:!0,TextEncoder:!0,"console.warn":!0}},nanoid:{globals:{"crypto.getRandomValues":!0}},"eth-method-registry>@metamask/ethjs-contract>ethjs-abi>number-to-bn":{packages:{"ethereumjs-util>bn.js":!0,"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix":!0}},"string.prototype.matchall>es-abstract>object-inspect":{globals:{HTMLElement:!0,WeakRef:!0}},"@ngraveio/bc-ur>assert>object-is":{packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>define-properties":!0}},"gulp>vinyl-fs>object.assign":{packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>define-properties":!0,"string.prototype.matchall>es-object-atoms":!0,"string.prototype.matchall>has-symbols":!0,"@lavamoat/webpack>json-stable-stringify>object-keys":!0}},"@metamask/object-multiplex>once":{packages:{"@metamask/object-multiplex>once>wrappy":!0}},"crypto-browserify>public-encrypt>parse-asn1":{packages:{"crypto-browserify>public-encrypt>parse-asn1>asn1.js":!0,"ethereumjs-util>ethereum-cryptography>browserify-aes":!0,"crypto-browserify>browserify-cipher>evp_bytestokey":!0,"crypto-browserify>pbkdf2":!0,"mockttp>express>safe-buffer":!0}},"react-syntax-highlighter>refractor>parse-entities":{globals:{"document.createElement":!0}},"path-browserify":{globals:{"process.cwd":!0},packages:{process:!0}},"crypto-browserify>pbkdf2":{globals:{crypto:!0,process:!0,queueMicrotask:!0,setImmediate:!0,setTimeout:!0},packages:{"crypto-browserify>pbkdf2>create-hash":!0,process:!0,"crypto-browserify>pbkdf2>ripemd160":!0,"mockttp>express>safe-buffer":!0,"@ngraveio/bc-ur>sha.js":!0,"@ngraveio/bc-ur>sha.js>to-buffer":!0}},"@material-ui/core>popper.js":{globals:{MSInputMethodContext:!0,"Node.DOCUMENT_POSITION_FOLLOWING":!0,cancelAnimationFrame:!0,"console.warn":!0,devicePixelRatio:!0,document:!0,getComputedStyle:!0,innerHeight:!0,innerWidth:!0,navigator:!0,requestAnimationFrame:!0,setTimeout:!0}},"react-tippy>popper.js":{globals:{MSInputMethodContext:!0,"Node.DOCUMENT_POSITION_FOLLOWING":!0,cancelAnimationFrame:!0,"console.warn":!0,devicePixelRatio:!0,document:!0,getComputedStyle:!0,innerHeight:!0,innerWidth:!0,"navigator.userAgent":!0,requestAnimationFrame:!0,setTimeout:!0}},process:{globals:{clearTimeout:!0,setTimeout:!0}},"readable-stream-2>process-nextick-args":{globals:{process:!0},packages:{process:!0}},"eth-method-registry>@metamask/ethjs-query>promise-to-callback":{packages:{"eth-method-registry>@metamask/ethjs-query>promise-to-callback>is-fn":!0,"eth-method-registry>@metamask/ethjs-query>promise-to-callback>set-immediate-shim":!0}},"react-markdown>property-information":{packages:{"watchify>xtend":!0}},"@google/genai>protobufjs":{globals:{process:!0,setTimeout:!0},packages:{"@google/genai>protobufjs>@protobufjs/aspromise":!0,"@google/genai>protobufjs>@protobufjs/base64":!0,"@google/genai>protobufjs>@protobufjs/codegen":!0,"@google/genai>protobufjs>@protobufjs/eventemitter":!0,"@google/genai>protobufjs>@protobufjs/fetch":!0,"@google/genai>protobufjs>@protobufjs/float":!0,"@google/genai>protobufjs>@protobufjs/inquire":!0,"@google/genai>protobufjs>@protobufjs/path":!0,"@google/genai>protobufjs>@protobufjs/pool":!0,"@google/genai>protobufjs>@protobufjs/utf8":!0}},"crypto-browserify>public-encrypt":{packages:{"ethereumjs-util>bn.js":!0,"crypto-browserify>public-encrypt>browserify-rsa":!0,"ethereumjs-util>create-hash":!0,"crypto-browserify>public-encrypt>parse-asn1":!0,"crypto-browserify>randombytes":!0,"mockttp>express>safe-buffer":!0}},"browserify>url>punycode":{globals:{define:!0}},"qrcode.react":{globals:{Path2D:!0,devicePixelRatio:!0},packages:{react:!0}},"mockttp>express>qs":{packages:{"string.prototype.matchall>side-channel":!0}},"react-beautiful-dnd>raf-schd":{globals:{cancelAnimationFrame:!0,requestAnimationFrame:!0}},"crypto-browserify>randombytes":{globals:{crypto:!0,msCrypto:!0,"process.nextTick":!0},packages:{process:!0,"mockttp>express>safe-buffer":!0}},"crypto-browserify>randomfill":{globals:{crypto:!0,msCrypto:!0,"process.browser":!0,"process.nextTick":!0},packages:{process:!0,"crypto-browserify>randombytes":!0,"mockttp>express>safe-buffer":!0}},react:{packages:{"react>object-assign":!0}},"react-beautiful-dnd":{globals:{"Element.prototype":!0,__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:!0,cancelAnimationFrame:!0,clearTimeout:!0,console:!0,document:!0,getComputedStyle:!0,pageXOffset:!0,pageYOffset:!0,requestAnimationFrame:!0,scrollBy:!0,setTimeout:!0,addEventListener:!0,removeEventListener:!0},packages:{"@babel/runtime":!0,"react-beautiful-dnd>css-box-model":!0,"react-beautiful-dnd>memoize-one":!0,"react-beautiful-dnd>raf-schd":!0,react:!0,"react-dom":!0,"react-redux":!0,redux:!0,"react-beautiful-dnd>use-memo-one":!0}},"react-chartjs-2":{globals:{setTimeout:!0},packages:{"chart.js":!0,react:!0}},"react-focus-lock>react-clientside-effect":{packages:{"@babel/runtime":!0,react:!0}},"react-compiler-runtime":{globals:{"console.error":!0},packages:{react:!0}},"react-devtools-core":{globals:{CSSStyleRule:!0,ElementTypeClass:!0,ElementTypeForwardRef:!0,ElementTypeFunction:!0,ElementTypeMemo:!0,ElementTypeVirtual:!0,ErrorEvent:!0,HTMLElement:!0,LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY:!0,LOCAL_STORAGE_OPEN_IN_EDITOR_URL:!0,"Node.ELEMENT_NODE":!0,SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY:!0,SESSION_STORAGE_RECORD_TIMELINE_KEY:!0,SESSION_STORAGE_RELOAD_AND_PROFILE_KEY:!0,URL:!0,WebSocket:!0,__REACT_DEVTOOLS_COMPONENT_FILTERS__:!0,__REACT_DEVTOOLS_GLOBAL_HOOK__:!0,__REACT_DEVTOOLS_TARGET_WINDOW__:!0,cancelAnimationFrame:!0,chrome:!0,clearTimeout:!0,console:!0,define:!0,devicePixelRatio:!0,devtoolsJestTestScheduler:!0,dispatchEvent:!0,document:!0,getComputedStyle:!0,getInObject:!0,innerHeight:!0,innerWidth:!0,"localStorage.getItem":!0,"localStorage.removeItem":!0,"localStorage.setItem":!0,localStorageGetItem:!0,localStorageSetItem:!0,"navigator.userAgent":!0,performance:!0,queueMicrotask:!0,"regeneratorRuntime.mark":!0,"regeneratorRuntime.wrap":!0,reportError:!0,requestAnimationFrame:!0,"sessionStorage.getItem":!0,"sessionStorage.removeItem":!0,"sessionStorage.setItem":!0,sessionStorageGetItem:!0,sessionStorageRemoveItem:!0,sessionStorageSetItem:!0,setInObject:!0,setTimeout:!0}},"react-dom":{globals:{MSApp:!0,__REACT_DEVTOOLS_GLOBAL_HOOK__:!0,addEventListener:!0,clearTimeout:!0,clipboardData:!0,"console.error":!0,document:!0,removeEventListener:!0,setTimeout:!0,event:!1,HTMLIFrameElement:!0},packages:{"react>object-assign":!0,react:!0,"react-dom>scheduler":!0}},"react-popper>react-fast-compare":{globals:{Element:!0,"console.warn":!0}},"react-focus-lock":{globals:{addEventListener:!0,"console.error":!0,"console.warn":!0,document:!0,removeEventListener:!0,setTimeout:!0},packages:{"@babel/runtime":!0,"react-focus-lock>focus-lock":!0,"prop-types":!0,react:!0,"react-focus-lock>react-clientside-effect":!0,"react-focus-lock>use-callback-ref":!0,"react-focus-lock>use-sidecar":!0}},"react-hot-toast":{globals:{MutationObserver:!0,clearTimeout:!0,matchMedia:!0,setTimeout:!0},packages:{"react-hot-toast>goober":!0,react:!0}},"react-idle-timer":{globals:{clearTimeout:!0,document:!0,setTimeout:!0},packages:{"prop-types":!0,react:!0}},"react-markdown":{globals:{"console.warn":!0},packages:{"react-markdown>comma-separated-tokens":!0,"prop-types":!0,"react-markdown>property-information":!0,react:!0,"react-redux>react-is":!0,"react-markdown>remark-parse":!0,"react-markdown>remark-rehype":!0,"react-markdown>space-separated-tokens":!0,"react-markdown>style-to-object":!0,"react-markdown>unified":!0,"react-markdown>unist-util-visit":!0,"react-markdown>vfile":!0}},"react-popper":{globals:{document:!0},packages:{"@popperjs/core":!0,react:!0,"react-popper>react-fast-compare":!0}},"react-redux":{globals:{document:!0},packages:{"@babel/runtime":!0,"react-redux>hoist-non-react-statics":!0,"prop-types":!0,react:!0,"react-dom":!0,"react-redux>react-is":!0}},"react-router-dom":{globals:{FormData:!0,URL:!0,URLSearchParams:!0,__reactRouterVersion:"write",addEventListener:!0,confirm:!0,document:!0,"location.href":!0,removeEventListener:!0,scrollTo:!0,scrollY:!0,"sessionStorage.getItem":!0,"sessionStorage.setItem":!0,setTimeout:!0,history:!0},packages:{"react-router-dom>@remix-run/router":!0,react:!0,"react-dom":!0,"react-router-dom>react-router":!0}},"react-router-dom>react-router":{globals:{"console.error":!0,"console.warn":!0},packages:{"react-router-dom>@remix-run/router":!0,react:!0}},"react-simple-file-input":{globals:{File:!0,FileReader:!0,"console.warn":!0},packages:{"prop-types":!0,react:!0}},"react-tippy":{globals:{Element:!0,MSStream:!0,MutationObserver:!0,addEventListener:!0,clearTimeout:!0,"console.error":!0,"console.warn":!0,define:!0,document:!0,getComputedStyle:!0,innerHeight:!0,innerWidth:!0,"navigator.maxTouchPoints":!0,"navigator.msMaxTouchPoints":!0,"navigator.userAgent":!0,performance:!0,requestAnimationFrame:!0,setTimeout:!0},packages:{"react-tippy>popper.js":!0,react:!0,"react-dom":!0}},"react-toggle-button":{globals:{clearTimeout:!0,"console.warn":!0,define:!0,performance:!0,setTimeout:!0,requestAnimationFrame:!0,cancelAnimationFrame:!0},packages:{react:!0}},"react-transition-group":{globals:{Element:!0,setTimeout:!0},packages:{"@babel/runtime":!0,"react-transition-group>dom-helpers":!0,"prop-types":!0,react:!0,"react-dom":!0}},"readable-stream":{globals:{AbortController:!0,AbortSignal:!0,AggregateError:!0,Blob:!0,queueMicrotask:!0},packages:{"openai>abort-controller":!0,buffer:!0,"webpack>events":!0,process:!0,"browserify>string_decoder":!0}},"@metamask/json-rpc-middleware-stream>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"@metamask/object-multiplex>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"@metamask/post-message-stream>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"@metamask/providers>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"crypto-browserify>browserify-sign>readable-stream":{globals:{"process.browser":!0,"process.stderr":!0,"process.stdout":!0,"process.version.slice":!0,setImmediate:!0},packages:{"core-js-pure":!0,"readable-stream-2>core-util-is":!0,"webpack>events":!0,"pumpify>inherits":!0,"crypto-browserify>browserify-sign>readable-stream>isarray":!0,process:!0,"readable-stream-2>process-nextick-args":!0,"crypto-browserify>browserify-sign>readable-stream>safe-buffer":!0,"crypto-browserify>browserify-sign>readable-stream>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"ethereumjs-util>create-hash>md5.js>hash-base>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"ethereumjs-util>create-hash>ripemd160>hash-base>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"ethereumjs-util>ethereum-cryptography>keccak>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"stream-browserify>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},"stream-http>readable-stream":{globals:{"process.nextTick":!0,"process.stderr":!0,"process.stdout":!0},packages:{buffer:!0,"webpack>events":!0,"pumpify>inherits":!0,process:!0,"browserify>string_decoder":!0,"@storybook/react>util-deprecate":!0}},redux:{globals:{console:!0},packages:{"@babel/runtime":!0}},"remote-redux-devtools>redux-devtools-core":{globals:{ErrorUtils:!0,console:!0,devToolsOptions:!0,onerror:"write",serializeState:!0},packages:{"remote-redux-devtools>redux-devtools-core>get-params":!0,"remote-redux-devtools>jsan":!0,lodash:!0,"remote-redux-devtools>redux-devtools-core>nanoid":!0,"remote-redux-devtools>redux-devtools-core>remotedev-serialize":!0}},"remote-redux-devtools>redux-devtools-instrument":{globals:{chrome:!0,"console.error":!0,process:!0,setTimeout:!0},packages:{lodash:!0,process:!0,"mockttp>@httptoolkit/subscriptions-transport-ws>symbol-observable":!0}},"string.prototype.matchall>regexp.prototype.flags":{packages:{"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>define-properties":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>es-abstract>get-proto":!0,"string.prototype.matchall>gopd":!0,"string.prototype.matchall>set-function-name":!0}},"react-markdown>remark-parse":{packages:{"react-markdown>remark-parse>mdast-util-from-markdown":!0}},"react-markdown>remark-rehype":{packages:{"react-markdown>remark-rehype>mdast-util-to-hast":!0}},"remote-redux-devtools":{globals:{"console.log":!0,"console.warn":!0,fetch:!0,setTimeout:!0},packages:{"remote-redux-devtools>jsan":!0,"remote-redux-devtools>redux-devtools-core":!0,"remote-redux-devtools>redux-devtools-instrument":!0,"remote-redux-devtools>rn-host-detect":!0,"remote-redux-devtools>socketcluster-client":!0}},"react-markdown>vfile>replace-ext":{packages:{"path-browserify":!0}},reselect:{globals:{WeakRef:!0,"console.warn":!0}},"@metamask/snaps-utils>rfdc":{globals:{Buffer:!0},packages:{buffer:!0}},"@material-ui/pickers>rifm":{globals:{"console.error":!0,"document.addEventListener":!0,"document.removeEventListener":!0},packages:{"@babel/runtime":!0,react:!0}},"ethereumjs-util>create-hash>ripemd160":{packages:{buffer:!0,"ethereumjs-util>create-hash>ripemd160>hash-base":!0,"pumpify>inherits":!0}},"crypto-browserify>pbkdf2>ripemd160":{globals:{Buffer:!0},packages:{buffer:!0,"crypto-browserify>pbkdf2>ripemd160>hash-base":!0,"pumpify>inherits":!0}},"ethereumjs-util>rlp":{globals:{"Buffer.concat":!0,"Buffer.from":!0,"Buffer.isBuffer":!0},packages:{"ethereumjs-util>bn.js":!0,buffer:!0}},"remote-redux-devtools>rn-host-detect":{globals:{__DEV__:!0,__fbBatchedBridgeConfig:!0,console:!0}},"wait-on>rxjs":{globals:{clearTimeout:!0,"setTimeout.apply":!0},packages:{tslib:!0}},"mockttp>express>safe-buffer":{packages:{buffer:!0}},"crypto-browserify>browserify-sign>readable-stream>safe-buffer":{packages:{buffer:!0}},"crypto-browserify>browserify-sign>readable-stream>string_decoder>safe-buffer":{packages:{buffer:!0}},"string.prototype.matchall>es-abstract>safe-regex-test":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>es-abstract>is-regex":!0}},"remote-redux-devtools>socketcluster-client>sc-channel":{packages:{"remote-redux-devtools>socketcluster-client>component-emitter":!0}},"remote-redux-devtools>socketcluster-client>sc-formatter":{globals:{Buffer:!0}},"react-dom>scheduler":{globals:{MessageChannel:!0,cancelAnimationFrame:!0,clearTimeout:!0,console:!0,performance:!0,requestAnimationFrame:!0,setTimeout:!0,SharedArrayBuffer:!0}},"ethers>@ethersproject/json-wallets>scrypt-js":{globals:{define:!0,setImmediate:!0,setTimeout:!0},packages:{"core-js-pure":!0}},"ethereumjs-util>ethereum-cryptography>secp256k1":{packages:{"@toruslabs/eccrypto>elliptic":!0}},semver:{globals:{"console.error":!0,process:!0},packages:{process:!0}},"@ledgerhq/hw-transport-webhid>@ledgerhq/devices>semver":{globals:{"console.error":!0,process:!0},packages:{process:!0}},"string.prototype.matchall>call-bind>set-function-length":{packages:{"string.prototype.matchall>define-properties>define-data-property":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>get-intrinsic":!0,"string.prototype.matchall>gopd":!0,"eslint-plugin-react>es-iterator-helpers>has-property-descriptors":!0}},"string.prototype.matchall>set-function-name":{packages:{"string.prototype.matchall>define-properties>define-data-property":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>set-function-name>functions-have-names":!0,"eslint-plugin-react>es-iterator-helpers>has-property-descriptors":!0}},"eth-method-registry>@metamask/ethjs-query>promise-to-callback>set-immediate-shim":{globals:{setImmediate:!0,"setTimeout.apply":!0},packages:{"core-js-pure":!0}},"@ngraveio/bc-ur>sha.js":{packages:{"pumpify>inherits":!0,"mockttp>express>safe-buffer":!0,"@ngraveio/bc-ur>sha.js>to-buffer":!0}},"string.prototype.matchall>side-channel>side-channel-list":{packages:{"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>es-abstract>object-inspect":!0}},"string.prototype.matchall>side-channel>side-channel-map":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>get-intrinsic":!0,"string.prototype.matchall>es-abstract>object-inspect":!0}},"string.prototype.matchall>side-channel>side-channel-weakmap":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>get-intrinsic":!0,"string.prototype.matchall>es-abstract>object-inspect":!0,"string.prototype.matchall>side-channel>side-channel-map":!0}},"string.prototype.matchall>side-channel":{packages:{"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>es-abstract>object-inspect":!0,"string.prototype.matchall>side-channel>side-channel-list":!0,"string.prototype.matchall>side-channel>side-channel-map":!0,"string.prototype.matchall>side-channel>side-channel-weakmap":!0}},"remote-redux-devtools>socketcluster-client":{globals:{WebSocket:!0,WorkerGlobalScope:!0,addEventListener:!0,clearTimeout:!0,localStorage:!0,location:!0,removeEventListener:!0,setTimeout:!0},packages:{"remote-redux-devtools>socketcluster-client>buffer":!0,"remote-redux-devtools>socketcluster-client>clone":!0,"remote-redux-devtools>socketcluster-client>component-emitter":!0,"remote-redux-devtools>socketcluster-client>linked-list":!0,"remote-redux-devtools>socketcluster-client>querystring":!0,"remote-redux-devtools>socketcluster-client>sc-channel":!0,"remote-redux-devtools>socketcluster-client>sc-errors":!0,"remote-redux-devtools>socketcluster-client>sc-formatter":!0,"remote-redux-devtools>socketcluster-client>uuid":!0}},"string.prototype.matchall>es-abstract>stop-iteration-iterator":{globals:{StopIteration:!0},packages:{"string.prototype.matchall>es-errors":!0,"string.prototype.matchall>internal-slot":!0}},"stream-browserify":{packages:{"webpack>events":!0,"pumpify>inherits":!0,"stream-browserify>readable-stream":!0}},"stream-http":{globals:{AbortController:!0,Blob:!0,"Buffer.alloc":!0,"Buffer.from":!0,MSStreamReader:!0,ReadableStream:!0,WritableStream:!0,XDomainRequest:!0,XMLHttpRequest:!0,clearTimeout:!0,fetch:!0,"location.protocol.search":!0,"process.nextTick":!0,setTimeout:!0},packages:{buffer:!0,"stream-http>builtin-status-codes":!0,"pumpify>inherits":!0,process:!0,"stream-http>readable-stream":!0,"browserify>url":!0,"watchify>xtend":!0}},"browserify>string_decoder":{packages:{"mockttp>express>safe-buffer":!0}},"crypto-browserify>browserify-sign>readable-stream>string_decoder":{packages:{"crypto-browserify>browserify-sign>readable-stream>string_decoder>safe-buffer":!0}},"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>strip-hex-prefix":{packages:{"eth-method-registry>@metamask/ethjs-query>@metamask/ethjs-format>is-hex-prefixed":!0}},"react-markdown>style-to-object":{packages:{"react-markdown>style-to-object>inline-style-parser":!0}},"mockttp>@httptoolkit/subscriptions-transport-ws>symbol-observable":{globals:{module:!0}},"@ngraveio/bc-ur>sha.js>to-buffer":{packages:{"@lavamoat/webpack>json-stable-stringify>isarray":!0,"mockttp>express>safe-buffer":!0,"string.prototype.matchall>es-abstract>typed-array-buffer":!0}},"copy-to-clipboard>toggle-selection":{globals:{"document.activeElement":!0,"document.getSelection":!0}},tslib:{globals:{SuppressedError:!0}},tweetnacl:{globals:{crypto:!0,msCrypto:!0,nacl:"write"}},"string.prototype.matchall>es-abstract>typed-array-buffer":{packages:{"string.prototype.matchall>call-bound":!0,"string.prototype.matchall>es-errors":!0,"browserify>util>is-typed-array":!0}},"@trezor/connect-web>@trezor/connect-common>@trezor/env-utils>ua-parser-js":{globals:{define:!0,"navigator.userAgentData":!0}},"@metamask/keyring-controller>ulid":{globals:{"console.error":!0,require:!0,crypto:!0}},"react-markdown>unified":{packages:{"react-markdown>unified>bail":!0,"react-markdown>unified>extend":!0,"react-markdown>unified>is-buffer":!0,"mocha>yargs-unparser>is-plain-obj":!0,"react-markdown>unified>trough":!0,"react-markdown>vfile":!0}},"react-markdown>unist-util-visit>unist-util-visit-parents":{packages:{"react-markdown>unist-util-visit>unist-util-is":!0}},"react-markdown>unist-util-visit":{packages:{"react-markdown>unist-util-visit>unist-util-visit-parents":!0}},"uri-js":{globals:{define:!0}},"browserify>url":{packages:{"browserify>url>punycode":!0,"mockttp>express>qs":!0}},"react-focus-lock>use-callback-ref":{packages:{react:!0}},"react-beautiful-dnd>use-memo-one":{packages:{react:!0}},"react-focus-lock>use-sidecar":{packages:{tslib:!0}},"@tanstack/react-query>use-sync-external-store":{globals:{document:!1,__REACT_DEVTOOLS_GLOBAL_HOOK__:!1,"document.createElement":!0},packages:{react:!0}},"@storybook/react>util-deprecate":{globals:{"console.trace":!0,"console.warn":!0,localStorage:!0}},"browserify>util":{globals:{"console.error":!0,"console.log":!0,"console.trace":!0,process:!0,SharedArrayBuffer:!0},packages:{"pumpify>inherits":!0,"browserify>util>is-arguments":!0,"browserify>util>is-generator-function":!0,"browserify>util>is-typed-array":!0,process:!0,"browserify>util>which-typed-array":!0}},uuid:{globals:{crypto:!0,msCrypto:!0}},"@metamask/eth-qr-keyring>@keystonehq/bc-ur-registry-eth>uuid":{globals:{crypto:!0,msCrypto:!0}},"@metamask/eth-qr-keyring>uuid":{globals:{crypto:!0}},"@metamask/eth-hd-keyring>@metamask/keyring-sdk>uuid":{globals:{crypto:!0}},"@metamask/keyring-snap-client>uuid":{globals:{crypto:!0}},"remote-redux-devtools>socketcluster-client>uuid":{globals:{crypto:!0,msCrypto:!0}},"@metamask/snaps-utils>validate-npm-package-name":{packages:{"@metamask/snaps-utils>validate-npm-package-name>builtins":!0}},"react-markdown>vfile>vfile-message":{packages:{"react-markdown>vfile>unist-util-stringify-position":!0}},"react-markdown>vfile":{globals:{"process.cwd":!0},packages:{"react-markdown>vfile>is-buffer":!0,"path-browserify":!0,process:!0,"react-markdown>vfile>replace-ext":!0,"react-markdown>vfile>vfile-message":!0}},"web-vitals":{globals:{"PerformanceEventTiming.prototype":!0,PerformanceObserver:!0,addEventListener:!0,"document.addEventListener":!0,"document.prerendering":!0,"document.readyState":!0,"document.visibilityState":!0,"document.wasDiscarded":!0,performance:!0,removeEventListener:!0,requestAnimationFrame:!0,requestIdleCallback:!0,setTimeout:!0}},"webextension-polyfill":{globals:{browser:!0,chrome:!0,"console.error":!0,"console.warn":!0,define:!0}},"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive":{packages:{"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-bigint":!0,"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-boolean-object":!0,"@metamask/eth-token-tracker>deep-equal>which-boxed-primitive>is-number-object":!0,"eslint-plugin-react>array-includes>is-string":!0,"string.prototype.matchall>es-abstract>es-to-primitive>is-symbol":!0}},"@metamask/eth-token-tracker>deep-equal>which-collection":{packages:{"@metamask/eth-token-tracker>deep-equal>es-get-iterator>is-map":!0,"string.prototype.matchall>es-abstract>is-set":!0,"@metamask/eth-token-tracker>deep-equal>which-collection>is-weakmap":!0,"@metamask/eth-token-tracker>deep-equal>which-collection>is-weakset":!0}},"browserify>util>which-typed-array":{packages:{"string.prototype.matchall>es-abstract>available-typed-arrays":!0,"string.prototype.matchall>call-bind":!0,"string.prototype.matchall>call-bound":!0,"browserify>util>which-typed-array>for-each":!0,"string.prototype.matchall>es-abstract>get-proto":!0,"string.prototype.matchall>gopd":!0,"jsdom>form-data>es-set-tostringtag>has-tostringtag":!0}},"@open-rpc/test-coverage>isomorphic-fetch>whatwg-fetch":{globals:{DOMException:!0,fetch:!0}}}},e.ENUM={NAME_globalThis:"G",NAME_scopeTerminator:"ST",NAME_runtimeHandler:"RH",RUNTIME_KEY:"_LM_"},(()=>{let t={exports:{}};function r(e,t){return e&&0!==e.length?`${e}.${t}`:t}function a(e,t,a){let s=Reflect.getOwnPropertyDescriptor(t,e[0])?.enumerable,o=a,n="";for(let t=0;t<e.length-1;t++){n=r(n,e[t]);let a=e[t];if(Reflect.getOwnPropertyDescriptor(o,a)?.get)throw Error(`LavaMoat - "${e[0]}" is writeable elsewhere and both "${n}" and "${e.join(".")}" are allowed for one package. One of these entries is redundant.`);"object"!=typeof o[a]&&(o[a]={}),o=o[a]}Reflect.defineProperty(o,e[e.length-1],{get:()=>{let r=t[e[0]],a=t;for(let t=1;t<e.length;t++)a=r,r=r[e[t]];return"function"==typeof r&&(r=r.bind(a)),r},writeable:!1,enumerable:s,configurable:!1})}function s(e,t,r){let a=function(){return new.target?Reflect.construct(e,arguments,new.target):Reflect.apply(e,t(this)?r:this,arguments)};return Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)),Reflect.getPrototypeOf(a)!==Reflect.getPrototypeOf(e)&&Object.setPrototypeOf(a,Reflect.getPrototypeOf(e)),a}t.exports,t.exports=function({createFunctionWrapper:e=s,handleGlobalWrite:t=!1,knownWritableFields:o=new Set}={}){return{getEndowmentsForConfig:function(e,r,a,s){if(!r.globals)return{};let o=[],l=new Set,c=[];return Object.entries(r.globals).forEach(([e,r])=>{let a=e.split(".");if(a.some(e=>"__proto__"===e))throw Error(`Lavamoat - "__proto__" disallowed when creating minimal view. saw "${e}"`);if(!1===r)return void c.push(e);if("write"===r){if(!t)return;if(a.length>1)throw Error(`LavaMoat - write access is only allowed at the top level, saw "${e}"`);l.add(e),o.push(e);return}if(!0!==r)throw Error(`LavaMoat - unrecognizable policy value (${typeof r}) for path "${e}"`);o.push(e)}),o.sort((e,t)=>e.length-t.length),n(e,o,a,s,c,l)},copyWrappedGlobals:function(e,t,r=["globalThis"]){let a=function(e){let t=[],r=e;for(;r&&("object"==typeof r||"function"==typeof r);)t.push(r),r=Reflect.getPrototypeOf(r);return t}(e),s=a.findIndex(e=>e===Object.prototype),o=-1===s;o&&(s=a.length);let n=a.slice(0,s);n.forEach(t=>{Object.values(Object.getOwnPropertyDescriptors(t)).forEach(t=>{if("get"in t&&t.get)try{Reflect.apply(t.get,e,[])}catch{}})});let l=n.map((e,t)=>{let r=Object.getOwnPropertyDescriptors(e);return o&&t===n.length-1?Object.fromEntries(Object.entries(r).filter(([e])=>!(e in Object.prototype))):r});for(let a of(Object.entries(Object.assign(Object.create(null),...l.reverse())).filter(([e])=>!(e in t)).filter(([e])=>!r.includes(e)).forEach(([r,a])=>{let s=i(a,t,e);Reflect.defineProperty(t,r,s)}),r))a in t||(t[a]=t);return t},getBuiltinForConfig:function(e,t,r){let a=[],s=[];return Object.entries(r).forEach(([e,r])=>{let o=e.split(".");if(t===o[0]){let e=o.slice(1).join(".");!0===r?a.push(e):!1===r&&s.push(e)}}),l(e,a,s)},createFunctionWrapper:e,attenuateBuiltin:l,makeMinimalViewOfRef:n,copyValueAtPath:c,applyGetSetPropDescTransforms:m,applyEndowmentPropDescTransforms:i};function n(e,t,r,s,l=[],i=new Set){let m={};return t.forEach(t=>{let n=t.split(".");o.has(n[0])?i.has(n[0])?function(e,t,r){let a=Reflect.getOwnPropertyDescriptor(t,e)?.enumerable;Reflect.defineProperty(r,e,{configurable:!1,enumerable:a,set(r){t[e]=r},get:()=>t[e]})}(n[0],e,m):a(n,e,m):c("",n,l,e,m,r,s)}),m}function l(e,t,r=[]){return n(e,t.sort(),void 0,void 0,r)}function c(t,a,s,o,n,l=o,i=n){if(0===a.length)throw Error("unable to copy, must have pathParts, was empty");let[p,...u]=a,h=r(t,p),{prop:g}=function(e,t){let r=e;for(;;){if(!r)return{prop:null,receiver:null};let e=typeof r;if("object"===e||"function"===e){let e=Reflect.getOwnPropertyDescriptor(r,t);if(e)return{receiver:r,prop:e};r=Reflect.getPrototypeOf(r)}else r=r.__proto__}}(o,p);if(!g)return;let d=Reflect.getOwnPropertyDescriptor(n,p);if(d){if(!("value"in d))throw Error(`unable to copy on to targetRef, targetRef has a getter at "${h}"`);let e=typeof d.value;if("object"!==e&&"function"!==e)throw Error(`unable to copy on to targetRef, targetRef value is not an obj or func at "${h}"`)}if(u.length>0){let e,{sourceValue:t,sourceWritable:r}=y(g);if(d&&!s.includes(h))e=d.value;else{let t={};Reflect.defineProperty(n,p,{value:t,writable:r,enumerable:g.enumerable,configurable:g.configurable}),e=t}c(h,u,s,t,e);return}if(s.includes(h))return void console.warn(`LavaMoat - conflicting rules exist for "${h}"`);if(!("value"in g))return void Reflect.defineProperty(n,p,m(g,i,l));let{sourceValue:b,sourceWritable:k}=y(g);if("function"!=typeof b)return void Reflect.defineProperty(n,p,g);function y(e){let t,r;if("value"in e)t=e.value,r=e.writable;else if("get"in e&&e.get)t=e.get.call(l),r="set"in e;else throw Error("getEndowmentsForConfig - property descriptor missing a getter");return{sourceValue:t,sourceWritable:r}}Reflect.defineProperty(n,p,{value:e(b,e=>e===i,l),writable:k,enumerable:g.enumerable,configurable:g.configurable})}function i(t,r,a){let s=t;return m(s=function(t,r,a){if(!("value"in t&&"function"==typeof t.value))return t;let s=e(t.value,e=>e===r,a);return{...t,value:s}}(s,r,a),r,a)}function m(t,r,a){let s={...t};return t.get&&(s.get=function(){let s=Reflect.apply(t.get,this===r?a:this,[]);return"function"==typeof s?e(s,e=>e===r,a):s}),t.set&&(s.set=function(e){let s=this===r?a:this;return Reflect.apply(t.set,s,[e])}),s}},t.exports.defaultCreateFunctionWrapper=s,t.exports._test={instrumentDynamicValueAtPath:a},e.endowmentsToolkit=t.exports})(),(()=>{let t={exports:{}},r=t.exports,{defineProperty:a}=Object,{call:s}=Function.prototype,o=new WeakMap,n=globalThis,l=MessageEvent.prototype,c=new Compartment().globalThis,i=Object.getOwnPropertyDescriptor(l,"source");if(i&&i.get){let e=s.bind(i.get);a(l,"source",{...i,get(){let t=e(this);return t===n||t===n.window?o.get(this)||c:t}})}r.MessageEvent=(e,t,r)=>{let a=e.MessageEvent;a&&(e.MessageEvent=function(e,t){let s=new a(e,t);return o.set(s,r),s},e.MessageEvent.prototype=a.prototype)},r.addEventListener=(e,t,r)=>{let a=e.addEventListener;a&&(e.addEventListener=(e,s,n)=>"message"===e?a.call(t,e,e=>(o.set(e,r),s.call(r,e)),n):a.call(r,e,s,n))},"event"in globalThis&&(globalThis.event=void 0);let{getOwnPropertyNames:m}=Object;function p(e){let t=[],r=e;for(;r&&("object"==typeof r||"function"==typeof r);)t.push(r),r=Reflect.getPrototypeOf(r);return t}!function(e){if("window"in e&&"object"==typeof e.window&&e!==e.window){let t=e.window,r=p(t),a=p(e);r.pop();let s=r.flatMap(e=>m(e)),o=new Set(a.flatMap(e=>m(e)));for(let r of s)if(!o.has(r)&&r in globalThis&&void 0!==t[r])try{e[r]=e[r]}catch{}}}(globalThis),e.repairs=t.exports})(),(()=>{let t,r={exports:{}};r.exports;let{repairIntrinsics:a}=globalThis,s="object"==typeof console?console.warn:()=>{},o=void 0!==a;o?(a(e.options.lockdown),l.forEach(e=>{e()}),hardenIntrinsics()):s("LavaMoatPlugin: runtime execution started without SES present, switching to no-op.");let{keys:n,create:c,freeze:i,assign:m,defineProperty:p,defineProperties:u,getOwnPropertyDescriptors:h,fromEntries:g,entries:d,values:b}=Object,{Proxy:k,Math:y,Date:f}=globalThis,{harden:j}=globalThis,w=new Set;b(e.policy.resources).forEach(e=>{e.globals&&"object"==typeof e.globals&&d(e.globals).forEach(([e,t])=>{"write"===t&&w.add(e)})});let{getEndowmentsForConfig:v,copyWrappedGlobals:x,getBuiltinForConfig:E}=e.endowmentsToolkit({handleGlobalWrite:!0,knownWritableFields:w}),{NAME_globalThis:T,NAME_scopeTerminator:O,NAME_runtimeHandler:_}=e.ENUM,q=i(new k(i(c(null)),i({has:i(()=>!0)}))),R=globalThis,L=["window","self","global","globalThis","frames"],S=n(e.repairs||{}),D=new Map,M=t=>{let r=e.idmap.find(([,e])=>e.includes(t));if(r)return r[0]};e.defaultExport=i((r,a)=>{if(!o)return c(null);if(!D.has(r)){let a=new Compartment({Math:y,Date:f});((r,a)=>{if(r===e.root)x(R,t=a,L),e?.scuttling?.scuttle(R,e.options?.scuttleGlobalThis);else{let s=e.policy.resources[r]||{},o=v(t,s,globalThis,a);S.length>0&&s.globals&&n(s.globals).length>0&&S.forEach(t=>{if(o[t]){let r=e.repairs[t];r&&r(o,R,a)}}),u(a,{...h(o),...g(L.map(e=>[e,{value:a}]))}),e.debug&&e.debug.debugProxy(a,t,r)}})(r,a.globalThis),D.set(r,a)}let l=c(null),{__webpack_require__:d}=a,{module:b}=a;if(d){let t=function(t,...a){"number"!=typeof t&&(t=`${t}`);let s=d.bind(this,t,...a);var o=t;if(void 0===o)throw Error("Requested specifier is undefined");if(e.unenforceable.includes(o)||r===e.root)return s();let l=e.policy.resources[r]||{};if(e.externals[o]){let t=e.externals[o];if(l.builtin){if(l.builtin[t])return s();if(t&&!t.includes(".")&&n(l.builtin).some(e=>e.startsWith(`${t}.`)))return E(s(),t,l.builtin)}if(l.packages){let e=M(t);if(e&&l.packages[e])return s()}}let c=M(o);if(!c){if(e.ctxm.includes(o))throw Error(`'${r}' is trying to load a module dynamically from a dependency it has not been allowed using the following Webpack Context Module: '${o}'`);throw Error(`Requested specifier '${o}' is not allowed as a builtin and is not a known dependency of '${r}'; regenerate policy or add it to policy-override.json.`)}if(c===r||l.packages?.[c])return s();throw Error(`Policy does not allow importing ${c} from ${r}`)};for(let a of(t.e=t=>{if(!e.kch.includes(t))throw Error(`Attempt to load a chunk that was not known at compile time: ${t} from ${r}`);return d.e(t)},["O","n","d","o","r","s","t","b","j"]))t[a]=j(d[a]);t.m=new k({},{has:(e,t)=>(s(`A module attempted to read ${String(t)} directly from webpack's module cache`),!1)}),t.g=D.get(r).globalThis,t.nmd=e=>e===b?d.nmd(b):e,t.hmd=e=>e===b?d.hmd(b):e,l.__webpack_require__=t}let w=m(c(null),a,l);p(w,"module",{get:()=>b,set:()=>{}});let C=w.exports;return p(w,"exports",{get:()=>C,set:e=>{C=e}}),i(w),i(m(c(null),{[O]:q,[_]:w,[T]:D.get(r).globalThis}))}),e.runtime=r.exports})(),r._LM_=e.defaultExport,"undefined"!=typeof harden&&harden(r._LM_)})()})();
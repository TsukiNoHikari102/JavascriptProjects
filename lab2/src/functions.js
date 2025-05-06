(function() {
    const globalObject = (function() { return this || (typeof window !== 'undefined' ? window : global); })();
  
    Function.prototype.myCall = function(context, ...args) 
    {
        context = context == null ? globalObject : Object(context);
        const fnSymbol = Symbol('fn');
        context[fnSymbol] = this;
        const result = context[fnSymbol](...args);
        delete context[fnSymbol];
        return result;
    };
  
    Function.prototype.myApply = function(context, argsArray) 
    {
        context = context == null ? globalObject : Object(context);
        const fnSymbol = Symbol('fn');
        context[fnSymbol] = this;
        let result;
        if (argsArray == null) 
        {
            result = context[fnSymbol]();
        } 
        else 
        {
            if (!Array.isArray(argsArray) && typeof argsArray !== 'object' && typeof argsArray[Symbol.iterator] !== 'function') 
            {
                throw new TypeError('CreateListFromArrayLike called on non-object');
            }
            result = context[fnSymbol](...argsArray);
        }
        delete context[fnSymbol];
        return result;
    };
  
    Function.prototype.myBind = function(context, ...boundArgs) 
    {
        if (typeof this !== 'function') {
          throw new TypeError('Function.prototype.myBind - what is trying to be bound is not callable');
        }
      
        const originalFunc = this;
      
        function boundFunction(...args) 
        {
          const isNew = this instanceof boundFunction;
          const thisArg = isNew ? this : context;
          return originalFunc.myApply(thisArg, boundArgs.concat(args));
        }

        if (originalFunc.prototype)
        {
          boundFunction.prototype = Object.create(originalFunc.prototype);
        }
      
        return boundFunction;
      };

  })();

  if (originalFunc.prototype) {
    boundFunction.prototype = Object.create(originalFunc.prototype);
    Object.defineProperty(boundFunction.prototype, 'constructor', {
      value: boundFunction,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }

  const originalLength = Math.max(0, originalFunc.length - boundArgs.length);
  Object.defineProperty(boundFunction, 'length', {
    value: originalLength,
    writable: false,
    configurable: true
  });

  const boundName = originalFunc.name ? 'bound ' + originalFunc.name : 'bound';
  Object.defineProperty(boundFunction, 'name', {
    value: boundName,
    writable: false,
    configurable: true
  });
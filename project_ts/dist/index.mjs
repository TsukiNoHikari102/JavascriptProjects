// src/utils/deepClone.ts
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// src/utils/debounce.ts
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

// src/utils/memorize.ts
function memorize(fn) {
  const cache = /* @__PURE__ */ new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// src/utils/groupBy.ts
function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);
    return groups;
  }, {});
}

// src/utils/mergeDeep.ts
function mergeDeep(a, b) {
  const result = { ...a };
  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      const bValue = b[key];
      const aValue = a[key];
      if (key in a && typeof aValue === "object" && aValue !== null && typeof bValue === "object" && bValue !== null) {
        result[key] = mergeDeep(
          aValue,
          bValue
        );
      } else {
        result[key] = bValue;
      }
    }
  }
  return result;
}

// src/utils/once.ts
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// src/utils/isEqual.ts
function isEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => isEqual(item, b[index]));
  }
  if (typeof a === "object" && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => isEqual(a[key], b[key]));
  }
  return false;
}

// src/utils/createEventEmitter.ts
function createEventEmitter() {
  const listeners = {};
  return {
    on(event, listener) {
      listeners[event] = listeners[event] || [];
      listeners[event].push(listener);
    },
    emit(event, data) {
      if (listeners[event]) {
        listeners[event].forEach((listener) => listener(data));
      }
    },
    off(event, listener) {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter((l) => l !== listener);
      }
    }
  };
}

// src/assertions.ts
function assertNotNull(value) {
  if (value == null) {
    throw new Error("Value is null or undefined");
  }
}

// src/functionUtils.ts
function pipe(...fns) {
  return (arg) => fns.reduce((value, fn) => fn(value), arg);
}
export {
  assertNotNull,
  createEventEmitter,
  debounce,
  deepClone,
  groupBy,
  isEqual,
  memorize,
  mergeDeep,
  once,
  pipe
};

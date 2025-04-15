function deepEqual(a, b) 
{
  if (a === b) return true;
  
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') 
  {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) 
  {
    return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) 
  {
    if (a.length !== b.length) 
    {
      return false;
    }
    
    for (let i = 0; i < a.length; i++) 
    {
      if (!deepEqual(a[i], b[i])) 
      {
        return false;
      }
    }

    return true;
  }
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) 
  {
    return false;
  }
  
  for (let key of keysA) 
  {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
    {
      return false;
    }
  }
  
  return true;
}
  
module.exports = deepEqual;
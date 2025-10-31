// export const Sum = () => ();
import React from 'react';

// Named export (NOT default)
export function Sum({ a = 0, b = 0 }) {
  return <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>;
}

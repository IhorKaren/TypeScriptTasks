/*
  You need to implement the KeyValuePair interface, which describes a key-value pair.
  Use generics so that this interface can work with all key and value types.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

export {};

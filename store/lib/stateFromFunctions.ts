export type StateFromFunctions<T extends [...any]> = T extends [
  infer F,
  ...infer R
]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown

// https://codesandbox.io/s/nostalgic-voice-3knvd?file=/src/store/useStore.ts

// type State = StateFromFunctions<[
//   typeof createBearSlice,
//   typeof createFishSlice
// ]>;

// const useStore = create<MyState>((set, get) => ({
//   ...createBearSlice(set, get),
//   ...createFishSlice(set, get)
// }));

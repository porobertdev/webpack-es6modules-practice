// Practicing "re-exporting" aka. "aggregating"

export {default as defVar} from '../test.js';

// export all named exports from that module, except default export
export * from '../constructors.js';


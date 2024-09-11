/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

const { state } = store("counter-block", {
  state: {},
  actions: {
    increment: () => {
      const context = getContext();
      context.count++;
    },
    decrement: () => {
      const context = getContext();
      context.count--;
    }
  },
  callbacks: {
    logCount: () => {
      const { count } = getContext();
      // Log the value of `isOpen` each time it changes.
      console.log(`Count: ${count}`);
    }
  }
});

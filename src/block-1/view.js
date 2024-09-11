/**
 * WordPress dependencies
 */
import { store, getContext } from "@wordpress/interactivity";

const { state } = store("create-block", {
  state: {},
  actions: {
    toggle: () => {
      const context = getContext();
      context.isOpen = !context.isOpen;
      context.btnText = context.btnText === "Open" ? "Close" : "Open";
    }
  },
  callbacks: {
    logIsOpen: () => {
      const { isOpen } = getContext();
      // Log the value of `isOpen` each time it changes.
      console.log(`Is open: ${isOpen}`);
    }
  }
});

/**
 * WordPress dependencies
 */
import { store } from "@wordpress/interactivity";

store("link-block", {
  actions: {
    *navigate(e) {
      e.preventDefault();
      const { actions } = yield import("@wordpress/interactivity-router");
      yield actions.navigate(e.target.href);
    }
  }
});

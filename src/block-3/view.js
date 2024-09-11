/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";

const { state } = store("form-block", {
  state: {},
  actions: {
    submit: () => {
      // const context = getContext();
      alert(`Hello ${state.name}!`);
      // Submit ajax request
      // try {
      //   const context = getContext();
      //   const formData = new FormData();
      //   formData.append("action", "safw_place_offer");
      //   formData.append("nonce", state.nonce);
      //   formData.append("offer", context.offerPrice);
      //   formData.append("uid", state.uid);
      //   formData.append("pid", state.pid);
      //   const data = yield fetch(state.ajax_url, {
      //     method: "POST",
      //     body: formData
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log(data.status, data.data);
      //       if (data.status === "success") {
      //         context.offers.unshift(data.data);
      //       }
      //     });
      //   // console.log("Server data!", data);
      // } catch (e) {
      //   // Something went wrong!
      // }
    }
  },
  callbacks: {
    setName: () => {
      // const context = getContext();
      const { ref } = getElement();
      state.name = ref.value;
      console.log(ref.value);
    },
    logForm: () => {
      // const { name } = getContext();
      const { name } = state;
      console.log(`Name: ${name}`);
    }
  }
});

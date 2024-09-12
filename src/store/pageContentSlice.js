import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {
    "/": "Welcome to the home page. Navigate through the site using the menu or voice commands.",
    "/products":
      "Explore our diverse range of products, carefully curated for your needs.",
    "/about":
      "Learn more about our mission, values, and the story behind our company.",
    "/cart":
      "This is your cart. Here, you can review the items you've selected.",
  },
};

const pageContentSlice = createSlice({
  name: "pageContent",
  initialState,
  reducers: {
    updatePageContent: (state, action) => {
      const { path, content } = action.payload;
      state.content[path] = content;
    },
  },
});

export const { updatePageContent } = pageContentSlice.actions;
export default pageContentSlice.reducer;

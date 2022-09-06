import { PHOTO_POST } from "../Api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
    name: "photoPost",
    fetchConfig: ({ formData, token }) => PHOTO_POST({ formData, token }),
});

export const photoPost = slice.asyncAction;
export const { resetState: resetPhotoState } = slice.actions;

export default slice.reducer;

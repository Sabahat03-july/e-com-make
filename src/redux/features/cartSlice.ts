import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
}

const initialState: Array<IProduct> = []; 

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IProduct>) {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index === -1) {
                state.push(action.payload);
            } else {
                state[index].quantity += 1; // Increment quantity directly
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload; // Corrected 'payLoad' to 'payload'
            return state.filter(item => item.id !== id);
        },
    },
});

// Export the actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;

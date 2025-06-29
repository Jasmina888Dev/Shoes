import { createStore } from "redux";
import { Reducer } from "./reducer";

export const ShoesStore = createStore(Reducer)
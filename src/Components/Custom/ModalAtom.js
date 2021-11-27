import { atom } from "recoil";

let modalState = atom({
	key: "modalKey",
	default: 3,
});

export default modalState;

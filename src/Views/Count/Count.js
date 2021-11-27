import countState from "./Atom";
import {
	// useRecoilState,
	useRecoilValue,
	useSetRecoilState,
	useResetRecoilState,
} from "recoil";

const Count = () => {
	// const [counter, setCounter] = useRecoilState(countState)
	const currentCount = useRecoilValue(countState);
	const counterHandler = useSetRecoilState(countState);
	const resetCounter = useResetRecoilState(countState);

	return (
		<div>
			<h1>This is Count Page</h1>
			<h2>{currentCount}</h2>
			<button onClick={() => counterHandler((prev) => prev + 1)} type="button">
				+
			</button>
			<button onClick={() => counterHandler((prev) => prev - 1)} type="button">
				-
			</button>
			<button onClick={resetCounter} type="button">
				reset
			</button>
		</div>
	);
};

export default Count;

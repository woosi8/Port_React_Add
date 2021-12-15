import { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";
// import { AnnoReact, AnnoImage } from "react-image-annotorious";
import "@recogito/annotorious/dist/annotorious.min.css";
import weld from "./weld.png";
import cat from "Assets/Images/cat.jpg";
import "./annotorious.css";
import BetterPolygon from "@recogito/annotorious-better-polygon";
import SelectorPack from "@recogito/annotorious-selector-pack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// import "./App.css";
function Anno() {
	// Ref to the image DOM element
	const imgEl = useRef();

	// The current Annotorious instance
	const [anno, setAnno] = useState();
	// Current drawing tool name
	const [tool, setTool] = useState("rect");

	const [alignment, setAlignment] = useState("poly");

	// const getContextSource = () => {
	// 	return ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
	// };
	// Init Annotorious when the component
	// mounts, and keep the current 'anno'
	// instance in the application state

	var formatter = function (annotation) {
		console.log(annotation.bodies);
		var longComments = annotation.bodies.filter(function (body) {
			var isComment =
				body.type === "TextualBody" &&
				(body.purpose === "tagging" || body.purpose === "tagging");
			// (body.purpose === "commenting" || body.purpose === "replying");

			var isLong = body.value.length > 100;

			return isComment && isLong;
		});

		if (longComments.length > 0) {
			// This annotation contains long comments - add CSS class
			return "long";
		}
	};

	useEffect(() => {
		let annotorious = null;

		if (imgEl.current) {
			// Init

			annotorious = new Annotorious({
				image: imgEl.current,
				widgets: [
					{
						widget: "TAG",
						vocabulary: [
							{ label: "Red" },
							{ label: "Blue" },
							{ label: "Green" },
							{ label: "Orange" },
						],
					},
				],
				formatter: formatter,
			});

			BetterPolygon(annotorious);
			SelectorPack(annotorious);

			annotorious.allowEmpty = !annotorious.allowEmpty;

			// annotorious.allowEmpty = !annotorious.allowEmpty; // toggles state
			annotorious.on("clickAnnotation", function (annotation, event) {});

			// Read만 가능하게 하기  annotorious.readOnly = !annotorious.readOnly;
			// default points setting
			annotorious.setAnnotations([
				{
					// "@context": "http://www.w3.org/ns/anno.jsonld",
					id: "1",
					type: "Annotation",
					body: [
						{
							type: "TextualBody",
							value: "Red",
							purpose: "tagging",
						},
					],
					target: {
						selector: [
							{
								type: "SvgSelector",
								value: `<svg><polygon points="${data}"></polygon></svg>`,
							},
						],
					},
				},
				{
					// "@context": "http://www.w3.org/ns/anno.jsonld",
					id: "2",
					type: "Annotation",
					body: [
						{
							type: "TextualBody",
							value: "Blue",
							purpose: "tagging",
						},
					],
					target: {
						selector: [
							{
								type: "SvgSelector",
								value: `<svg><polygon points="${data2}"></polygon></svg>`,
							},
						],
					},
				},
				{
					// "@context": "http://www.w3.org/ns/anno.jsonld",
					id: "3",
					type: "Annotation",
					body: [
						{
							type: "TextualBody",
							value: "Blue",
							purpose: "tagging",
						},
					],
					target: {
						selector: [
							{
								type: "SvgSelector",
								value: `<svg><polygon points="${data3}"></polygon></svg>`,
							},
						],
					},
				},
			]);
			annotorious.on("changeSelectionTarget", function (target) {});
			// Attach event handlers here
			annotorious.on("createAnnotation", (annotation) => {
				console.log(annotation);
			});

			annotorious.on("updateAnnotation", (annotation, previous) => {});
			// const string="194.39999389648438,108,619.1999816894531,420";
			// string.split(',');
			annotorious.on("deleteAnnotation", (annotation) => {});
		}

		// Keep current Annotorious instance in state
		setAnno(annotorious);
		annotorious.setDrawingTool("polygon");
		// Cleanup: destroy current instance
		return () => annotorious.destroy();
	}, []);

	// Toggles current tool + button label
	// [ 'rect', 'polygon', 'circle', 'ellipse', 'freehand' ]
	const polyTool = () => {
		setTool("polygon");
		anno.setDrawingTool("polygon");
		// console.log(anno);
	};
	const rectTool = () => {
		setTool("rect");
		anno.setDrawingTool("rect");
	};
	const circleTool = () => {
		setTool("circle");
		anno.setDrawingTool("circle");
	};
	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<div className="container">
			<div>
				<ToggleButtonGroup
					color="primary"
					value={alignment}
					exclusive
					onChange={handleChange}
				>
					<ToggleButton onClick={polyTool} value="poly">
						polygon
					</ToggleButton>
					<ToggleButton onClick={rectTool} value="rect">
						rectangle
					</ToggleButton>
					<ToggleButton onClick={circleTool} value="circle">
						circle
					</ToggleButton>
				</ToggleButtonGroup>
			</div>

			<img
				className="img"
				ref={imgEl}
				// width="80%"
				src={cat}
				alt="Hallstatt Town Square"
			/>
			{/* <div>
        <AnnoReact contextSource={getContextSource()} />
        <AnnoImage
          imageSource="https://st2.depositphotos.com/1915171/8651/v/950/depositphotos_86518008-stock-illustration-transport-icons-car-bike-bus.jpg"
          imageid="0"
        ></AnnoImage>
      </div> */}
		</div>
	);
}

const data =
	"671.0679321289062,691.7799072265625 635.8576049804688,700.064697265625 635.8576049804688,720.7766723632812 654.4983520507812,731.1326904296875 671.0679321289062,764.2718505859375 695.9223022460938,778.7702026367188 720.7766723632812,784.9838256835938 726.9902954101562,753.9158325195312 751.8446655273438,731.1326904296875 772.556640625,714.5631103515625 745.6310424804688,685.5663452148438";

const data2 =
	"427.3291931152344,162.9813690185547 415.4037170410156,168.944091796875 393.5403747558594,208.69564819335938 397.5155334472656,262.3602600097656 409.44097900390625,329.9378967285156 425.34161376953125,391.55279541015625 441.24224853515625,441.24224853515625 443.2298278808594,492.91925048828125 459.13043212890625,536.6459350585938 486.9565124511719,526.7080688476562 522.73291015625,459.13043212890625 612.1738891601562,407.45343017578125 651.9254760742188,367.7018737792969 647.9503173828125,318.0124206542969 590.310546875,248.44720458984375 534.6583862304688,194.78260803222656 469.0683288574219,162.9813690185547";

const data3 =
	"1055.4036865234375,87.45341491699219 1025.590087890625,103.35403442382812 969.9378662109375,168.944091796875 932.1738891601562,244.4720458984375 890.4347534179688,294.1614990234375 890.4347534179688,325.9627380371094 960,369.689453125 1053.4161376953125,441.24224853515625 1136.8944091796875,465.0931701660156 1168.6956787109375,443.2298278808594 1172.6707763671875,391.55279541015625 1164.720458984375,314.0372619628906 1164.720458984375,236.52174377441406 1142.857177734375,139.13043212890625 1120.9937744140625,93.41614532470703";

export default Anno;

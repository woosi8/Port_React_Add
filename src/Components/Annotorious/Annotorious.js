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
							{ label: "Porosity" },
							{ label: "Crack" },
							{ label: "Spatter" },
							{ label: "Bead" },
						],
					},
				],
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
					"@context": "http://www.w3.org/ns/anno.jsonld",
					id: "#218d01ff-f077-4cc3-992d-1c81c426e51d",
					type: "Annotation",
					body: [
						{
							type: "TextualBody",
							value: "Porosity",
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
		console.log(anno);
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

export default Anno;

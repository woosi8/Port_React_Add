import { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";
// import { AnnoReact, AnnoImage } from "react-image-annotorious";
import "@recogito/annotorious/dist/annotorious.min.css";
import weld from "./weld.png";
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

	const getContextSource = () => {
		return ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
	};
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
								value: `<svg><polygon points="${dd}"></polygon></svg>`,
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
				src={weld}
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

const dd =
	"627.0 476.5 626.5 476.0 626.0 475.5 625.0 475.5 624.0 475.5 623.0 475.5 622.0 475.5 621.0 475.5 620.0 475.5 619.0 475.5 618.0 475.5 617.0 475.5 616.0 475.5 615.0 475.5 614.0 475.5 613.0 475.5 612.0 475.5 611.0 475.5 610.5 475.0 610.0 474.5 609.0 474.5 608.0 474.5 607.5 474.0 607.0 473.5 606.0 473.5 605.5 473.0 605.0 472.5 604.0 472.5 603.0 472.5 602.0 472.5 601.5 472.0 601.0 471.5 600.0 471.5 599.0 471.5 598.0 471.5 597.5 471.0 597.0 470.5 596.0 470.5 595.0 470.5 594.0 470.5 593.5 470.0 593.0 469.5 592.0 469.5 591.0 469.5 590.0 469.5 589.5 469.0 589.0 468.5 588.0 468.5 587.0 468.5 586.5 468.0 586.0 467.5 585.0 467.5 584.0 467.5 583.0 467.5 582.5 467.0 582.0 466.5 581.0 466.5 580.0 466.5 579.5 466.0 579.0 465.5 578.0 465.5 577.0 465.5 576.5 465.0 576.0 464.5 575.0 464.5 574.0 464.5 573.5 464.0 573.0 463.5 572.0 463.5 571.0 463.5 570.5 463.0 570.0 462.5 569.0 462.5 568.5 462.0 568.0 461.5 567.0 461.5 566.0 461.5 565.5 461.0 565.0 460.5 564.0 460.5 563.0 460.5 562.5 460.0 562.0 459.5 561.0 459.5 560.0 459.5 559.5 459.0 559.0 458.5 558.0 458.5 557.0 458.5 556.5 458.0 556.0 457.5 555.0 457.5 554.0 457.5 553.5 457.0 553.0 456.5 552.0 456.5 551.0 456.5 550.5 456.0 550.0 455.5 549.0 455.5 548.5 455.0 548.0 454.5 547.0 454.5 546.5 454.0 546.0 453.5 545.0 453.5 544.5 453.0 544.0 452.5 543.0 452.5 542.5 452.0 542.0 451.5 541.0 451.5 540.5 451.0 540.0 450.5 539.0 450.5 538.0 450.5 537.5 450.0 537.0 449.5 536.0 449.5 535.0 449.5 534.5 449.0 534.0 448.5 533.5 448.0 533.0 447.5 532.0 447.5 531.5 447.0 531.0 446.5 530.0 446.5 529.0 446.5 528.5 446.0 528.0 445.5 527.0 445.5 526.5 445.0 526.0 444.5 525.0 444.5 524.0 444.5 523.5 444.0 523.0 443.5 522.0 443.5 521.5 443.0 521.0 442.5 520.0 442.5 519.5 442.0 519.0 441.5 518.0 441.5 517.5 441.0 517.0 440.5 516.0 440.5 515.0 440.5 514.5 440.0 514.0 439.5 513.0 439.5 512.0 439.5 511.5 439.0 511.0 438.5 510.0 438.5 509.0 438.5 508.5 438.0 508.0 437.5 507.0 437.5 506.5 437.0 506.0 436.5 505.0 436.5 504.5 436.0 504.0 435.5 503.0 435.5 502.5 435.0 502.0 434.5 501.0 434.5 500.5 434.0 500.0 433.5 499.0 433.5 498.5 433.0 498.0 432.5 497.0 432.5 496.5 432.0 496.0 431.5 495.0 431.5 494.5 431.0 494.0 430.5 493.0 430.5 492.0 430.5 491.5 430.0 491.0 429.5 490.0 429.5 489.5 429.0 489.0 428.5 488.0 428.5 487.5 428.0 487.0 427.5 486.0 427.5 485.0 427.5 484.5 427.0 484.0 426.5 483.0 426.5 482.0 426.5 481.5 426.0 481.0 425.5 480.0 425.5 479.0 425.5 478.5 425.0 478.0 424.5 477.0 424.5 476.0 424.5 475.5 424.0 475.0 423.5 474.0 423.5 473.5 423.0 473.0 422.5 472.0 422.5 471.5 422.0 471.0 421.5 470.0 421.5 469.0 421.5 468.5 421.0 468.0 420.5 467.0 420.5 466.0 420.5 465.5 420.0 465.0 419.5 464.0 419.5 463.0 419.5 462.0 419.5 461.5 419.0 461.0 418.5 460.0 418.5 459.5 418.0 459.0 417.5 458.0 417.5 457.5 417.0 457.0 416.5 456.0 416.5 455.5 416.0 455.0 415.5 454.0 415.5 453.5 415.0 453.0 414.5 452.0 414.5 451.0 414.5 450.5 414.0 450.0 413.5 449.0 413.5 448.0 413.5 447.0 413.5 446.5 413.0 446.0 412.5 445.0 412.5 444.5 412.0 444.0 411.5 443.0 411.5 442.5 411.0 442.0 410.5 441.5 410.0 441.0 409.5 440.0 409.5 439.5 409.0 439.0 408.5 438.0 408.5 437.0 408.5 436.5 408.0 436.0 407.5 435.0 407.5 434.0 407.5 433.5 407.0 433.0 406.5 432.0 406.5 431.0 406.5 430.5 406.0 430.0 405.5 429.0 405.5 428.5 405.0 428.0 404.5 427.5 404.0 427.0 403.5 426.5 403.0 426.0 402.5 425.0 402.5 424.5 402.0 424.0 401.5 423.5 401.0 423.0 400.5 422.0 400.5 421.5 400.0 421.0 399.5 420.0 399.5 419.5 399.0 419.0 398.5 418.0 398.5 417.5 398.0 417.0 397.5 416.0 397.5 415.5 397.0 415.0 396.5 414.0 396.5 413.5 396.0 413.0 395.5 412.0 395.5 411.5 395.0 411.0 394.5 410.0 394.5 409.5 394.0 409.0 393.5 408.5 393.0 408.0 392.5 407.0 392.5 406.5 392.0 406.0 391.5 405.0 391.5 404.5 391.0 404.0 390.5 403.0 390.5 402.0 390.5 401.5 390.0 401.0 389.5 400.0 389.5 399.5 389.0 399.0 388.5 398.0 388.5 397.5 388.0 397.0 387.5 396.0 387.5 395.5 387.0 395.0 386.5 394.5 386.0 394.0 385.5 393.0 385.5 392.5 385.0 392.0 384.5 391.0 384.5 390.5 384.0 390.0 383.5 389.0 383.5 388.0 383.5 387.5 383.0 387.0 382.5 386.0 382.5 385.5 382.0 385.0 381.5 384.0 381.5 383.5 381.0 383.0 380.5 382.5 380.0 382.0 379.5 381.5 379.0 381.0 378.5 380.5 378.0 380.0 377.5 379.5 377.0 379.0 376.5 378.5 376.0 378.0 375.5 377.0 375.5 376.5 375.0 376.0 374.5 375.5 374.0 375.0 373.5 374.0 373.5 373.5 373.0 373.0 372.5 372.0 372.5 371.0 372.5 370.5 372.0 370.0 371.5 369.0 371.5 368.5 371.0 368.0 370.5 367.0 370.5 366.5 370.0 366.0 369.5 365.0 369.5 364.0 369.5 363.5 369.0 363.0 368.5 362.0 368.5 361.5 368.0 361.0 367.5 360.0 367.5 359.0 367.5 358.5 367.0 358.0 366.5 357.0 366.5 356.5 366.0 356.0 365.5 355.0 365.5 354.0 365.5 353.0 365.5 352.5 365.0 352.0 364.5 351.0 364.5 350.0 364.5 349.5 364.0 349.0 363.5 348.0 363.5 347.0 363.5 346.0 363.5 345.0 363.5 344.5 363.0 344.0 362.5 343.0 362.5 342.0 362.5 341.0 362.5 340.0 362.5 339.5 362.0 339.0 361.5 338.0 361.5 337.0 361.5 336.5 361.0 336.0 360.5 335.0 360.5 334.0 360.5 333.0 360.5 332.5 360.0 332.0 359.5 331.0 359.5 330.0 359.5 329.0 359.5 328.5 359.0 328.0 358.5 327.0 358.5 326.0 358.5 325.0 358.5 324.0 358.5 323.0 358.5 322.0 358.5 321.0 358.5 320.0 358.5 319.5 358.0 319.0 357.5 318.0 357.5 317.0 357.5 316.0 357.5 315.0 357.5 314.0 357.5 313.0 357.5 312.0 357.5 311.0 357.5 310.5 357.0 310.0 356.5 309.0 356.5 308.0 356.5 307.0 356.5 306.0 356.5 305.0 356.5 304.0 356.5 303.5 356.0 303.0 355.5 302.0 355.5 301.0 355.5 300.0 355.5 299.5 355.0 299.0 354.5 298.0 354.5 297.0 354.5 296.5 354.0 296.0 353.5 295.0 353.5 294.5 353.0 294.0 352.5 293.5 352.0 293.0 351.5 292.5 351.0 292.0 350.5 291.5 350.0 291.0 349.5 290.5 349.0 290.5 348.0 290.5 347.0 290.5 346.0 291.0 345.5 291.5 345.0 291.5 344.0 292.0 343.5 292.5 343.0 292.5 342.0 292.5 341.0 292.5 340.0 292.5 339.0 292.5 338.0 292.5 337.0 292.5 336.0 292.5 335.0 292.5 334.0 292.5 333.0 292.5 332.0 292.5 331.0 292.5 330.0 292.5 329.0 292.5 328.0 292.5 327.0 292.5 326.0 292.5 325.0 292.5 324.0 292.5 323.0 292.5 322.0 292.5 321.0 292.5 320.0 292.5 319.0 292.5 318.0 292.5 317.0 293.0 316.5 293.5 316.0 293.5 315.0 293.5 314.0 294.0 313.5 294.5 313.0 294.5 312.0 295.0 311.5 295.5 311.0 296.0 310.5 296.5 310.0 296.5 309.0 296.5 308.0 297.0 307.5 297.5 307.0 297.5 306.0 298.0 305.5 298.5 305.0 298.5 304.0 299.0 303.5 300.0 303.5 301.0 303.5 302.0 303.5 302.5 303.0 303.0 302.5 304.0 302.5 305.0 302.5 306.0 302.5 307.0 302.5 308.0 302.5 309.0 302.5 310.0 302.5 311.0 302.5 311.5 302.0 312.0 301.5 313.0 301.5 314.0 301.5 315.0 301.5 316.0 301.5 317.0 301.5 318.0 301.5 319.0 301.5 320.0 301.5 321.0 301.5 322.0 301.5 323.0 301.5 324.0 301.5 325.0 301.5 326.0 301.5 327.0 301.5 328.0 301.5 329.0 301.5 330.0 301.5 330.5 302.0 331.0 302.5 332.0 302.5 333.0 302.5 334.0 302.5 335.0 302.5 336.0 302.5 336.5 303.0 337.0 303.5 338.0 303.5 339.0 303.5 340.0 303.5 340.5 304.0 341.0 304.5 342.0 304.5 342.5 305.0 343.0 305.5 344.0 305.5 344.5 306.0 345.0 306.5 346.0 306.5 347.0 306.5 348.0 306.5 348.5 307.0 349.0 307.5 350.0 307.5 351.0 307.5 352.0 307.5 352.5 308.0 353.0 308.5 354.0 308.5 355.0 308.5 356.0 308.5 357.0 308.5 357.5 309.0 358.0 309.5 359.0 309.5 360.0 309.5 360.5 310.0 361.0 310.5 362.0 310.5 363.0 310.5 363.5 311.0 364.0 311.5 365.0 311.5 366.0 311.5 366.5 312.0 367.0 312.5 368.0 312.5 369.0 312.5 369.5 313.0 370.0 313.5 371.0 313.5 371.5 314.0 372.0 314.5 373.0 314.5 374.0 314.5 374.5 315.0 375.0 315.5 376.0 315.5 377.0 315.5 377.5 316.0 378.0 316.5 379.0 316.5 380.0 316.5 380.5 317.0 381.0 317.5 382.0 317.5 383.0 317.5 384.0 317.5 384.5 318.0 385.0 318.5 386.0 318.5 387.0 318.5 388.0 318.5 389.0 318.5 389.5 319.0 390.0 319.5 391.0 319.5 392.0 319.5 392.5 320.0 393.0 320.5 394.0 320.5 395.0 320.5 395.5 321.0 396.0 321.5 397.0 321.5 398.0 321.5 398.5 322.0 399.0 322.5 400.0 322.5 401.0 322.5 401.5 323.0 402.0 323.5 403.0 323.5 403.5 324.0 404.0 324.5 405.0 324.5 406.0 324.5 406.5 325.0 407.0 325.5 408.0 325.5 409.0 325.5 409.5 326.0 410.0 326.5 411.0 326.5 412.0 326.5 412.5 327.0 413.0 327.5 414.0 327.5 414.5 328.0 415.0 328.5 416.0 328.5 417.0 328.5 417.5 329.0 418.0 329.5 419.0 329.5 420.0 329.5 420.5 330.0 421.0 330.5 422.0 330.5 423.0 330.5 423.5 331.0 424.0 331.5 425.0 331.5 426.0 331.5 427.0 331.5 428.0 331.5 428.5 332.0 429.0 332.5 430.0 332.5 431.0 332.5 432.0 332.5 432.5 333.0 433.0 333.5 434.0 333.5 435.0 333.5 436.0 333.5 436.5 334.0 437.0 334.5 438.0 334.5 438.5 335.0 439.0 335.5 440.0 335.5 440.5 336.0 441.0 336.5 442.0 336.5 442.5 337.0 443.0 337.5 444.0 337.5 444.5 338.0 445.0 338.5 446.0 338.5 447.0 338.5 447.5 339.0 448.0 339.5 449.0 339.5 450.0 339.5 450.5 340.0 451.0 340.5 452.0 340.5 452.5 341.0 453.0 341.5 454.0 341.5 454.5 342.0 455.0 342.5 456.0 342.5 456.5 343.0 457.0 343.5 458.0 343.5 459.0 343.5 459.5 344.0 460.0 344.5 461.0 344.5 462.0 344.5 463.0 344.5 463.5 345.0 464.0 345.5 465.0 345.5 466.0 345.5 466.5 346.0 467.0 346.5 468.0 346.5 469.0 346.5 469.5 347.0 470.0 347.5 470.5 348.0 471.0 348.5 471.5 349.0 472.0 349.5 473.0 349.5 473.5 350.0 474.0 350.5 474.5 351.0 475.0 351.5 476.0 351.5 477.0 351.5 477.5 352.0 478.0 352.5 479.0 352.5 479.5 353.0 480.0 353.5 481.0 353.5 481.5 354.0 482.0 354.5 483.0 354.5 483.5 355.0 484.0 355.5 484.5 356.0 485.0 356.5 486.0 356.5 487.0 356.5 487.5 357.0 488.0 357.5 489.0 357.5 489.5 358.0 490.0 358.5 491.0 358.5 492.0 358.5 492.5 359.0 493.0 359.5 494.0 359.5 495.0 359.5 495.5 360.0 496.0 360.5 497.0 360.5 497.5 361.0 498.0 361.5 498.5 362.0 499.0 362.5 500.0 362.5 500.5 363.0 501.0 363.5 502.0 363.5 502.5 364.0 503.0 364.5 504.0 364.5 504.5 365.0 505.0 365.5 506.0 365.5 506.5 366.0 507.0 366.5 508.0 366.5 508.5 367.0 509.0 367.5 510.0 367.5 511.0 367.5 511.5 368.0 512.0 368.5 513.0 368.5 513.5 369.0 514.0 369.5 515.0 369.5 516.0 369.5 516.5 370.0 517.0 370.5 518.0 370.5 519.0 370.5 519.5 371.0 520.0 371.5 521.0 371.5 522.0 371.5 523.0 371.5 523.5 372.0 524.0 372.5 525.0 372.5 525.5 373.0 526.0 373.5 527.0 373.5 527.5 374.0 528.0 374.5 529.0 374.5 529.5 375.0 530.0 375.5 531.0 375.5 531.5 376.0 532.0 376.5 533.0 376.5 534.0 376.5 534.5 377.0 535.0 377.5 536.0 377.5 537.0 377.5 537.5 378.0 538.0 378.5 539.0 378.5 540.0 378.5 540.5 379.0 541.0 379.5 542.0 379.5 542.5 380.0 543.0 380.5 544.0 380.5 544.5 381.0 545.0 381.5 546.0 381.5 547.0 381.5 548.0 381.5 548.5 382.0 549.0 382.5 550.0 382.5 551.0 382.5 552.0 382.5 552.5 383.0 553.0 383.5 554.0 383.5 555.0 383.5 556.0 383.5 556.5 384.0 557.0 384.5 558.0 384.5 559.0 384.5 559.5 385.0 560.0 385.5 561.0 385.5 561.5 386.0 562.0 386.5 563.0 386.5 563.5 387.0 564.0 387.5 565.0 387.5 566.0 387.5 566.5 388.0 567.0 388.5 568.0 388.5 569.0 388.5 570.0 388.5 571.0 388.5 572.0 388.5 573.0 388.5 573.5 389.0 574.0 389.5 575.0 389.5 576.0 389.5 577.0 389.5 578.0 389.5 579.0 389.5 580.0 389.5 580.5 390.0 581.0 390.5 582.0 390.5 583.0 390.5 584.0 390.5 584.5 391.0 585.0 391.5 586.0 391.5 587.0 391.5 587.5 392.0 588.0 392.5 589.0 392.5 589.5 393.0 590.0 393.5 591.0 393.5 592.0 393.5 592.5 394.0 593.0 394.5 594.0 394.5 595.0 394.5 596.0 394.5 597.0 394.5 597.5 395.0 598.0 395.5 599.0 395.5 600.0 395.5 601.0 395.5 602.0 395.5 603.0 395.5 604.0 395.5 605.0 395.5 605.5 396.0 606.0 396.5 607.0 396.5 608.0 396.5 609.0 396.5 610.0 396.5 611.0 396.5 611.5 397.0 612.0 397.5 613.0 397.5 614.0 397.5 614.5 398.0 615.0 398.5 616.0 398.5 616.5 399.0 617.0 399.5 618.0 399.5 618.5 400.0 619.0 400.5 620.0 400.5 620.5 401.0 621.0 401.5 621.5 402.0 622.0 402.5 623.0 402.5 623.5 403.0 624.0 403.5 625.0 403.5 625.5 404.0 626.0 404.5 626.5 405.0 627.0 405.5 628.0 405.5 629.0 405.5 629.5 406.0 630.0 406.5 631.0 406.5 631.5 407.0 632.0 407.5 633.0 407.5 633.5 408.0 634.0 408.5 635.0 408.5 635.5 409.0 636.0 409.5 636.5 410.0 637.0 410.5 638.0 410.5 638.5 411.0 638.5 412.0 639.0 412.5 640.0 412.5 640.5 413.0 641.0 413.5 641.5 414.0 642.0 414.5 643.0 414.5 643.5 415.0 644.0 415.5 644.5 416.0 645.0 416.5 646.0 416.5 646.5 417.0 647.0 417.5 647.5 418.0 648.0 418.5 648.5 419.0 649.0 419.5 649.5 420.0 649.5 421.0 650.0 421.5 650.5 422.0 650.5 423.0 651.0 423.5 651.5 424.0 651.5 425.0 651.0 425.5 650.5 426.0 650.5 427.0 650.0 427.5 649.5 428.0 649.5 429.0 649.5 430.0 649.5 431.0 650.0 431.5 650.5 432.0 650.5 433.0 650.5 434.0 651.0 434.5 651.5 435.0 651.5 436.0 652.0 436.5 652.5 437.0 652.5 438.0 652.5 439.0 653.0 439.5 653.5 440.0 653.5 441.0 654.0 441.5 654.5 442.0 654.5 443.0 655.0 443.5 655.5 444.0 656.0 444.5 656.5 445.0 657.0 445.5 657.5 446.0 658.0 446.5 658.5 447.0 658.5 448.0 659.0 448.5 659.5 449.0 660.0 449.5 661.0 449.5 661.5 450.0 662.0 450.5 662.5 451.0 663.0 451.5 664.0 451.5 664.5 452.0 665.0 452.5 665.5 453.0 666.0 453.5 667.0 453.5 667.5 454.0 668.0 454.5 668.5 455.0 669.0 455.5 669.5 456.0 669.0 456.5 668.5 457.0 668.5 458.0 668.0 458.5 667.5 459.0 667.5 460.0 667.5 461.0 667.0 461.5 666.5 462.0 666.5 463.0 666.0 463.5 665.5 464.0 665.5 465.0 665.5 466.0 665.0 466.5 664.5 467.0 664.5 468.0 664.0 468.5 663.5 469.0 663.0 469.5 662.5 470.0 662.0 470.5 661.0 470.5 660.5 471.0 660.0 471.5 659.5 472.0 659.0 472.5 658.5 473.0 658.0 473.5 657.0 473.5 656.5 474.0 656.0 474.5 655.0 474.5 654.0 474.5 653.0 474.5 652.0 474.5 651.5 475.0 651.0 475.5 650.0 475.5 649.0 475.5 648.0 475.5 647.0 475.5 646.0 475.5 645.0 475.5 644.0 475.5 643.0 475.5 642.0 475.5 641.0 475.5 640.0 475.5 639.0 475.5 638.0 475.5 637.0 475.5 636.0 475.5 635.0 475.5 634.0 475.5 633.0 475.5 632.0 475.5 631.0 475.5 630.0 475.5 629.0 475.5 628.0 475.5 627.5 476.0 627.0 476.5";

export default Anno;

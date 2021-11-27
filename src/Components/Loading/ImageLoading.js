import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AddchartIcon from "@mui/icons-material/Addchart";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import request from "../../axios";
import Resizer from "react-image-file-resizer";

import Annotation from "react-image-annotation";
import {
	PointSelector,
	RectangleSelector,
	OvalSelector,
} from "react-image-annotation/lib/selectors";

export default function ImageLoading(props) {
	const [imgSrc, setImgSrc] = useState(null);

	const [file, setFile] = useState(null);
	// const [score, setScore] = useState(null)
	const [loading, setLoading] = useState(false);
	const [baseImage, setBaseImage] = useState();
	const [count, setCount] = useState([]);
	// const [detected, setdetected] = useState(null)
	const [imgResult, setImgResult] = useState(null);

	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});
	const [cknumber, updateCKNumber] = useState(0);
	const [spnumber, updateSPNumber] = useState(0);
	const [prnumber, updatePRNumber] = useState(0);
	const [type, setType] = useState({
		type: RectangleSelector.TYPE,
	});

	useEffect(() => {
		setImgResult(null);
		setBaseImage(null);
		setImgResult(null);
		setAnnotations([]);
	}, []);

	const onFileChange = async (e) => {
		// setResult(null)
		// setScore(null)
		setImgSrc(null);
		setBaseImage(null);
		setImgResult(null);

		if (e.target.files[0] === undefined) {
			return;
		}

		let fileReader = new FileReader();
		fileReader.readAsDataURL(e.target.files[0]);
		fileReader.onload = function(e) {
			setImgSrc(e.target.result);
		};

		const file = e.target.files[0];
		const image = await resizeFile(file);

		setFile(image);
	};

	const resizeFile = (file) =>
		new Promise((resolve) => {
			Resizer.imageFileResizer(
				file,
				512,
				512,
				"JPEG",
				100,
				0,
				(uri) => {
					resolve(uri);
				},
				"file"
			);
		});

	const onFileUpload = async () => {
		if (imgSrc) {
			setLoading(true);
			const formData = new FormData();
			formData.append("file", file);

			try {
				const response = await request(
					"post",
					"/weld_api/bead_ai/bead_predict/",
					formData,
					{
						"Content-Type": "multipart/form-data",
						"Access-Control-Allow-Origin": "*",
					}
				);
				if (response.result === true) {
					// setScore(response.score)
					setBaseImage(response.base64);
					setImgResult(`data:image/jpeg;base64,${response.base64}`);

					setCount(response.count);
					// setdetected(response.detected_array)

					setLoading(false);
				} else {
					alert("비드가 인식되지 않았습니다.");
					return;
				}
			} catch (err) {
				alert(err);
			}
		} else {
			alert("사진을 등록해주세요");
		}
	};

	function renderEditor(props) {
		const { geometry } = props.annotation;
		if (!geometry) return null;

		return (
			<Box
				style={{
					background: "white",
					borderRadius: 3,
					position: "absolute",
					left: `${geometry.x}%`,
					top: `${geometry.y + geometry.height}%`,
					zIndex: 1,
				}}
			>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						padding: ".5rem",
						margin: ".5rem",
						gap: ".3rem",
					}}
				>
					<label>
						<input
							type="radio"
							name="defect_type"
							value="crack"
							onChange={(e) =>
								props.onChange({
									...props.annotation,
									data: {
										...props.annotation.data,
										text: e.target.value,
									},
								})
							}
						/>
						크랙
					</label>
					<label>
						<input
							type="radio"
							name="defect_type"
							value="spatter"
							onChange={(e) =>
								props.onChange({
									...props.annotation,
									data: {
										...props.annotation.data,
										text: e.target.value,
									},
								})
							}
						/>
						스패터
					</label>
					<label>
						<input
							type="radio"
							name="defect_type"
							value="porosity"
							onChange={(e) =>
								props.onChange({
									...props.annotation,
									data: {
										...props.annotation.data,
										text: e.target.value,
									},
								})
							}
						/>
						기공
					</label>
					<button
						style={{
							border: 0,
							margin: ".6rem 0 .2rem",
							padding: ".3rem",
							color: "#fff",
							background: "#3979ba",
						}}
						onClick={props.onSubmit}
					>
						제출
					</button>
				</Box>
			</Box>
		);
	}

	const onChange = (annotation) => {
		setAnnotation(annotation);
	};

	const onSubmit = (annotation) => {
		const { geometry, data } = annotation;
		if (data !== undefined) {
			setAnnotations(
				annotations.concat({
					geometry,
					data: {
						...data,
					},
				})
			);
			setAnnotation({});
			console.log(annotations);
			console.log(annotation);

			if (annotation.data.text === "crack") {
				updateCKNumber(cknumber + 1);
			} else if (annotation.data.text === "spatter") {
				updateSPNumber(spnumber + 1);
			} else if (annotation.data.text === "porosity") {
				updatePRNumber(prnumber + 1);
			}
		} else {
			alert("결함선택 후 제출해주세요");
		}
	};

	const onChangeType = (type) => {
		setType({ type: type });
		setAnnotation({});
	};

	function createData(name, defect_count, feedback_count) {
		return { name, defect_count, feedback_count };
	}

	const rows = [
		createData("비드", count[0], count[0]),
		createData("스패터", count[1], count[1] + spnumber),
		createData("기공", count[2], count[2] + prnumber),
		createData("크랙", count[3], count[3] + cknumber),
	];

	const dataURLtoFile = (dataurl, fileName) => {
		var arr = dataurl.split(","),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);

		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}

		return new File([u8arr], fileName, { type: mime });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// var or_file = dataURLtoFile(imgSrc, 'imagename.JPG')
		var ms_file = dataURLtoFile(imgResult, "imagename.JPG");
		// var fd_file = dataURLtoFile(imgResult, 'imagename.JPG')
		const formData = new FormData();
		formData.append("original_image", file);
		formData.append("masked_image", ms_file);
		// formData.append("feedback_image", fd_file)
		formData.append("annotations", JSON.stringify(annotations));

		try {
			const response = await request(
				"post",
				"/api/go/weld/save_inspection",
				formData,
				{
					"Content-Type": "multipart/form-data",
					"Access-Control-Allow-Origin": "*",
				}
			);
			// alert(response.data.status)
			if (response.status === "ok") {
				let sort_array = [];

				annotations.map((annotate) => {
					let anno_json = {
						ins_id: response.uuid,
						type: annotate.geometry.type,
						x: annotate.geometry.x,
						y: annotate.geometry.y,
						width: annotate.geometry.width,
						height: annotate.geometry.height,
						text: annotate.data.text,
					};
					sort_array.push(anno_json);
					return null;
				});

				let no_point = null;
				for (var key in props.weldpoints) {
					if (props.weldpoints[key].step === "검사대기") {
						no_point = props.weldpoints[key].ID;
					}
				}

				const date = new Date().toDateString();

				const record = {
					uuid: response.uuid,
					w_id: no_point,
					annotations: sort_array,
					image_path: response.filepath,
					masked_image_path: response.maskedpath,
					inspector_id: window.sessionStorage.getItem("ID"),
					date_string: date.replace(" 2021", ", 2021"),
				};

				try {
					const response = await request(
						"post",
						"/api/go/weld/create_inspection",
						record
					);
					if (response.status === "ok") {
						// alert(JSON.stringify(response.result))
						alert("저장되었습니다.");
					}
					// history.push('/home')
					window.location.replace("/home");
				} catch (err) {
					alert(err);
				}
			}

			// alert('성공적으로 반영되었습니다')
			// history.push('/')
		} catch (err) {
			alert(err);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "50%",
			}}
		>
			<Stack direction="column" spacing={2}>
				<Box>
					<Stack direction="column" spacing={2}>
						<Button
							component="label"
							variant="outlined"
							sx={{ height: "8vh", fontSize: "1.5rem" }}
							startIcon={<UploadFileIcon />}
						>
							파일 업로드
							<input
								accept="image/*"
								type="file"
								onChange={onFileChange}
								hidden
							/>
						</Button>
						<Button
							onClick={onFileUpload}
							variant="contained"
							sx={{ height: "8vh", fontSize: "1.5rem" }}
							startIcon={loading ? "" : <FactCheckIcon />}
						>
							{loading ? <CircularProgress color="inherit" /> : "외관 검사"}
						</Button>
					</Stack>
				</Box>
				<Divider light />
				{baseImage ? (
					<Annotation
						style={{
							borderRadius: "10px",
							maxWidth: "100%",
							maxHeight: "100%",
						}}
						src={imgResult || null}
						alt=""
						annotations={annotations}
						renderEditor={renderEditor}
						type={type.type}
						value={annotation}
						onChange={onChange}
						onSubmit={onSubmit}
						allowTouch
					/>
				) : imgSrc ? (
					<Box
						component="img"
						sx={{
							borderRadius: "10px",
							maxWidth: "100%",
							maxHeight: "100%",
						}}
						src={imgSrc}
						alt="uploaded file"
					/>
				) : null}
				{imgResult && (
					<>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								"& > *": {
									m: 1,
								},
							}}
						>
							<ButtonGroup variant="text" aria-label="text button group">
								<Button onClick={() => onChangeType("RECTANGLE")}>
									{RectangleSelector.TYPE}
								</Button>
								<Button onClick={() => onChangeType("POINT")}>
									{PointSelector.TYPE}
								</Button>
								<Button onClick={() => onChangeType("OVAL")}>
									{OvalSelector.TYPE}
								</Button>
							</ButtonGroup>
						</Box>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: "100%" }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>검사결과</TableCell>
										<TableCell align="right">AI</TableCell>
										<TableCell align="right">피드백</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow
											key={row.name}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="right">{row.defect_count}</TableCell>
											<TableCell align="right">{row.feedback_count}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				)}
				<Divider light />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column-reverse",
					}}
				>
					{/* <Button onClick={handleMake} variant="outlined" sx={{ height: '8vh', fontSize: '1.5rem' }} startIcon={<AddchartIcon />}>피드백</Button> */}
					{imgResult ? (
						<Button
							onClick={handleSubmit}
							variant="outlined"
							sx={{ height: "8vh", fontSize: "1.5rem" }}
							startIcon={<AddchartIcon />}
						>
							제출
						</Button>
					) : (
						<Button
							variant="outlined"
							sx={{ height: "8vh", fontSize: "1.5rem" }}
							startIcon={<AddchartIcon />}
							disabled
						>
							제출
						</Button>
					)}
				</Box>
			</Stack>
		</Box>
	);
}

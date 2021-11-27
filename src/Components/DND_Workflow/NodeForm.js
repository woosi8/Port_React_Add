import NodeModel from "./NodeModel";
import { useState } from "react";
import { Box, Button, Typography, TextField, Stack } from "@mui/material";
import AppList from "./AppList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { X } from "react-feather";

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const NodeForm = ({ title }) => {
	const [showApp, setShowApp] = useState(false);

	const handleShowApp = () => setShowApp(true);
	const handleCloseApp = () => setShowApp(false);

	const [items, setItems] = useState([{ id: "item01", content: "Node 1" }]);

	function onDragEnd(result) {
		if (!result.destination) {
			return;
		}
		const chitems = reorder(
			items,
			result.source.index,
			result.destination.index
		);
		setItems(chitems);
		console.log(result);
	}

	//
	const [selectApp, setSelectApp] = useState("");

	const handleApp = (app) => {
		console.log(app);
		setSelectApp(app);
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable" direction="horizontal">
					{(provided, snapshot) => (
						<Stack ref={provided.innerRef}>
							{items.map((item, idx) => (
								<Draggable key={item.id} draggableId={item.id} index={idx}>
									{(provided) => (
										<NodeModel
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<Box sx={{ p: 2.25 }}>
												<Stack direction="column" spacing={2}>
													<Typography sx={{ textAlign: "center" }}>
														{title}
													</Typography>
													<TextField label="Node Name" focused />
													<Typography variant="body2">Subject to:</Typography>
													<Stack direction="row" spacing={2}>
														<Button
															sx={{ borderRadius: "25px", width: "90px" }}
															variant="contained"
														>
															관리자
														</Button>
														<Button
															sx={{ borderRadius: "25px", width: "90px" }}
															variant="outlined"
														>
															작업자
														</Button>
													</Stack>
												</Stack>
											</Box>
											<Box>
												<Stack direction="column">
													<Box
														sx={{
															p: 1.6,
															borderLeft: "3px solid blue",
															borderTop: "1px solid #dadce0",
														}}
													>
														<Typography
															component="span"
															variant="body2"
															sx={{ color: "#9c9c9c", paddingRight: 2 }}
														>
															App
														</Typography>
														{selectApp ? (
															<>
																<Button
																	sx={{ padding: 0, margin: 0, width: "5px" }}
																>
																	<X onClick={(e) => console.log(e)} />
																</Button>
																<Typography component="span">
																	{selectApp}
																</Typography>
															</>
														) : (
															<Button
																disableElevation
																className="app"
																variant="outlined"
																onClick={handleShowApp}
															>
																<Typography>선택하기</Typography>
															</Button>
														)}
													</Box>
													<Box
														sx={{
															p: 1.6,
															borderLeft: "3px solid red",
															borderTop: "1px solid #dadce0",
														}}
													>
														<Stack direction="row" alignItems="center">
															<Typography
																component="span"
																variant="body2"
																sx={{ color: "#9c9c9c", paddingRight: 2 }}
															>
																Tool
															</Typography>
															<Button variant="outlined">
																<Typography>선택하기</Typography>
															</Button>
														</Stack>
													</Box>
												</Stack>
											</Box>
										</NodeModel>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</Stack>
					)}
				</Droppable>
			</DragDropContext>

			{showApp && (
				<AppList handleCloseApp={handleCloseApp} handleApp={handleApp} />
			)}
		</>
	);
};

export default NodeForm;

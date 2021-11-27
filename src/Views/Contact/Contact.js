const Contact = (props) => {
	const handleCreate = async () => {
		try {
			const result = await props.request("post", "/api/go/test/create_title", {
				content: "asdf",
			});
			alert(result.result);
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	return (
		<div>
			<h1>This is Contact Page</h1>
			<button onClick={handleCreate} type="button">
				요청하기
			</button>
		</div>
	);
};

export default Contact;

import React, { useState, useCallback } from 'react';
import { Box, Stack, Button, OutlinedInput } from '@mui/material';
import NodeForm from './NodeForm';

const NodeItem = ({ title }) => <NodeForm title={title} />;

const NodeList = React.memo(({ nodes }) => (
  <>
    <Stack direction="row" spacing={2}>
      {nodes.map((title) => (
        <NodeItem key={title} title={title} />
      ))}
    </Stack>
  </>
));

const CreateWorkFlow = () => {
  const [input, setInput] = useState('');
  const [nodes, setNodes] = useState([]);

  const onChange = useCallback((e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }, []);

  const insertNode = (node) => {
    if (!node) return;
    const nextNode = [...nodes, node];
    setNodes(nextNode);
    console.log(nodes);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    insertNode(input);
    setInput('');
  };

  return (
    <>
      <Box component="span">
        <Stack direction="column" sx={{ maxWidth: '250px' }}>
          <OutlinedInput
            placeholder="Node title"
            value={input}
            onChange={onChange}
          />
          <Button
            variant="outlined"
            onClick={onSubmit}
            sx={{ marginBottom: 5 }}
          >
            노드 추가하기
          </Button>
        </Stack>
        <NodeList nodes={nodes} />
      </Box>
    </>
  );
};

export default CreateWorkFlow;

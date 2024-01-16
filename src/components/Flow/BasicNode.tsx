import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState
} from "reactflow";


import TipTapNode from "./TipTapNode"

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "tiptap",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 }
  },
  {
    id: "4",
    type: "tiptap",
    data: { label: "Custom Node" },
    position: { x: 400, y: 200 }
  }
];


const nodeTypes = {
  
  tiptap: TipTapNode
};

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);


  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;

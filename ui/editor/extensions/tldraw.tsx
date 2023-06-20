import { Node, mergeAttributes } from "@tiptap/core";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import { Tldraw } from "@tldraw/tldraw"; // use @tldraw/tldraw@canary
import "@tldraw/tldraw/tldraw.css";

function Component() {
  return (
    <NodeViewWrapper className="react-component">
      <div style={{ width: "100%", height: 500 }}>
        <Tldraw />
      </div>
    </NodeViewWrapper>
  );
}

export const TldrawNode = Node.create({
  name: "tldraw",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      lines: {
        default: [],
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="tldraw"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-type": "tldraw" })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

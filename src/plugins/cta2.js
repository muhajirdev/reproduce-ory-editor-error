import React from "react"
import { v4 } from "uuid"
import slate from "ory-editor-plugins-slate"

import CropSquare from "@material-ui/icons/star"

const A = ({ children }) => (
  <div style={{ border: "1px solid black", padding: "16px" }}>{children}</div>
)
export default {
  Component: A,
  IconComponent: <CropSquare />,
  name: "3",
  version: "0.0.3",
  text: "3",
  createInitialChildren: () => ({
    id: v4(),
    rows: [
      {
        id: v4(),
        cells: [
          {
            content: {
              plugin: slate(),
              state: slate().createInitialState(),
            },
            id: v4(),
          },
        ],
      },
    ],
  }),
}

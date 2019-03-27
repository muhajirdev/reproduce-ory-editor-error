import React from "react"
import { v4 } from "uuid"
import slate from "ory-editor-plugins-slate"

import CropSquare from "@material-ui/icons/star"

const BlackBorderPlugin = ({ children }) => (
  <div style={{ border: "1px solid black", padding: "16px" }}>{children}</div>
)
export default {
  Component: BlackBorderPlugin,
  IconComponent: <CropSquare />,
  name: "2",
  version: "0.0.2",
  text: "2",
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

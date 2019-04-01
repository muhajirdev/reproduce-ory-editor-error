import React, { Component } from "react"

// The editor core
import Editor, { Editable, createEmptyState } from "ory-editor-core"
import "ory-editor-core/lib/index.css" // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui"
import "ory-editor-ui/lib/index.css"

// Load some exemplary plugins:
import slate from "ory-editor-plugins-slate" // The rich text area plugin
import "ory-editor-plugins-slate/lib/index.css" // Stylesheets for the rich text area plugin
import parallax from "ory-editor-plugins-parallax-background" // A plugin for parallax background images
import "ory-editor-plugins-parallax-background/lib/index.css" // Stylesheets for parallax background images

import layout from '../plugins/layout-plugin'
import cta from '../plugins/cta'

import { imagePlugin } from 'ory-editor-plugins-image';


// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate(),imagePlugin()], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [parallax({ defaultPlugin: slate() }),cta,layout] // Define plugins for layout cells
}



class App extends Component {

  componentWillMount() {
    this.editorState = this.props.content || createEmptyState();
     this.editor = new Editor({
      plugins,
      // pass the content state - you can add multiple editables here
      editables: [this.editorState],
    })
  }
  render() {
    return (
      <div>
        <div>
        <button title="press" onClick ={
          ()=> alert(JSON.stringify(this.editorState))
        }> show json</button>
      </div>
      <div>        
        
        <Editable editor={this.editor} id={this.editorState.id} onChange={state => (this.editorState = state)} />
          {/*  Default user interface  */}
          <Trash editor={this.editor} />
          <DisplayModeToggle editor={this.editor} />
          <Toolbar editor={this.editor} />
        </div>
        </div>
    )
  }
}

export default App

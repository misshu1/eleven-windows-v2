export const demo = `
import React from "react"
import Prism from "prismjs"
export class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }

  render() {
    const { code, plugins, language } = this.props

    return (
      <pre className={!plugins ? "something" : plugins.join(" ")}>
        <code ref={this.ref} >
          {code.trim()}
        </code>
      </pre>
    )
  }
}
`.trim();

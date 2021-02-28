import React from 'react'
import PropTypes from 'prop-types'

/*!
 * codepen-react v1.0.1
 * (c) 2021 Leedom
 * Released under the MIT License.
 */
class CodePen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * when type is embed, load embed/ei.js first.
   */
  componentDidMount() {
    if (this.props.type === 'embed') {
      const EMBED_JS = 'https://static.codepen.io/assets/embed/ei.js'
      const loadEmbed = () => {
        const script = document.createElement('script');
        script.src = EMBED_JS;
        script.async = 1;
        document.body.appendChild(script);
      }
      loadEmbed();
    }
  }

  render() {
    const UserLink = `https://codepen.io/${this.props.user}`
    const CodeSrc = `https://codepen.io/${this.props.user}/embed/${this.props.preview ? 'preview/' : ''}${this.props.hash}?theme-id=${this.props.theme}&editable=${this.props.editable}&height=${this.props.height}&default-tab=${this.props.tab}&user=${this.props.user}&slug-hash=${this.props.hash}&pen-title=${this.props.title || ''}`
    const PenLink = `${UserLink}/pen/${this.props.hash}`

    if (this.props.type === 'iframe') {
      return (
        <iframe
          width={this.props.width}
          height={this.props.height}
          style={{ width: this.props.width, height: this.props.height }}
          title={this.props.title || ''}
          src={CodeSrc}
          allowFullScreen={true}
          scrolling="no"
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
        >
          See the Pen <a href={PenLink}>{this.props.title || ''}</a> by {this.props.user} (<a href={UserLink}>@{this.props.user}</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      )
    }

    return (
      <p
        className="codepen"
        data-height={this.props.height}
        data-theme-id={this.props.theme}
        data-default-tab={this.props.tab}
        data-user={this.props.user}
        data-slug-hash={this.props.hash}
        data-editable={this.props.editable}
        data-preview={this.props.preview}
        style={{ width: this.props.width }}
      >
        See the Pen <a href={PenLink}>{this.props.title || ''}</a> by {this.props.user} (<a href={UserLink}>@{this.props.user}</a>) on <a href='https://codepen.io'>CodePen</a>.
      </p>
    )
  }
}

CodePen.propTypes = {
  type: PropTypes.oneOf(['iframe', 'embed']),
  user: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  editable: PropTypes.bool,
  preview: PropTypes.bool,
  tab: PropTypes.oneOf(['html,result', 'css,result', 'js,result', 'result'])
}

CodePen.defaultProps = {
  type: 'iframe',
  width: '100%',
  height: '400',
  theme: 'light', 
  editable: true,
  preview: false,
  tab: 'result'
}

export default CodePen

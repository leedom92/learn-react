import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const CodePen = props => {
  const UserLink = `https://codepen.io/${props.user}`
  const CodeSrc = `https://codepen.io/${props.user}/embed/${props.hash}?theme-id=${props.theme}&editable=${props.editable}&height=${props.height}&default-tab=${props.tab}&user=${props.user}&slug-hash=${props.hash}&pen-title=${props.title || ''}`
  const PenLink = `${UserLink}/pen/${props.hash}`

  /**
   * when type is embed, load embed/ei.js first.
   */
  const EMBED_JS = 'https://static.codepen.io/assets/embed/ei.js'
  const loadEmbed = () => {
    const script = document.createElement('script');
    script.src = EMBED_JS;
    script.async = 1;
    document.body.appendChild(script);
  }
  useEffect(() => {
    if(props.type === 'embed') loadEmbed();
  }, [props])

  if (props.type === 'embed') {
    return (
      <p
        className="codepen"
        data-height={props.height}
        data-theme-id={props.theme}
        data-default-tab={props.tab}
        data-user={props.user}
        data-slug-hash={props.hash}
        data-editable={props.editable}
        style={{ width: props.width }}
      >
        See the Pen <a href={PenLink}>{props.title || ''}</a> by Leedom (<a href={UserLink}>@{props.user}</a>) on <a href='https://codepen.io'>CodePen</a>.
      </p>
    )
  }

  return (
    <iframe
      width={props.width}
      height={props.height}
      style={{ width: props.width, height: props.height }}
      title={props.title || ''}
      src={CodeSrc}
      allowFullScreen={true}
      scrolling="no"
      frameBorder="no"
      loading="lazy"
      allowtransparency="true"
    >
      See the Pen <a href={PenLink}>{props.title || ''}</a> by Leedom (<a href={UserLink}>@{props.user}</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
  )
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
  tab: PropTypes.oneOf(['html,result', 'css,result', 'js,result', 'result'])
}

CodePen.defaultProps = {
  type: 'iframe',
  width: '100%',
  height: '400',
  theme: 'light',
  editable: true,
  tab: 'result'
}

export default CodePen

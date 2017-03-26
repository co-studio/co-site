import React, { Component } from 'react'

// Press
import bg from '../../assets/images/press/press-boston-globe.svg'
import bi from '../../assets/images/press/press-business-insider.svg'
import gizmodo from '../../assets/images/press/press-gizmodo.svg'
import hp from '../../assets/images/press/press-huffington-post.svg'
import lifehacker from '../../assets/images/press/press-lifehacker.svg'
import mashable from '../../assets/images/press/press-mashable.svg'
import politico from '../../assets/images/press/press-politico.svg'
import guardian from '../../assets/images/press/press-the-guardian.svg'
import tnw from '../../assets/images/press/press-tnw.svg'
import vice from '../../assets/images/press/press-vice.svg'
import adweek from '../../assets/images/press/press-adweek.svg'
import nowthis from '../../assets/images/press/press-nowthis.svg'

class IconList extends Component {
  constructor(props) {
    super(props)
    this.renderIcon = this.renderIcon.bind(this)
  }

  renderIcon({ icon, href }, index) {
    return (
      <a className="icon-list-item"
         href={href}
         target="_blank"
         key={index}>
        <img className="icon-list-image"
             src={icon}
             alt={href} />
      </a>
    )
  }

  render() {
    let { icons, background } = this.props

    if (!icons) {
      icons = [
        { icon: bg, href: 'https://www.bostonglobe.com/business/2014/09/12/new-app-makes-job-hunting-social-experience/0a0GHZxxRjPscJaRmgdc3O/story.html' },
        { icon: hp, href: 'http://www.huffingtonpost.com/melanie-curtin/the-coolest-networking-ap_b_5730554.html' },
        { icon: gizmodo, href: 'http://gizmodo.com/our-favorite-android-ios-and-windows-phone-apps-of-th-1721133864' },
        { icon: lifehacker, href: 'http://lifehacker.com/lrn-helps-you-learn-to-code-at-your-convenience-1721210656' },
        { icon: tnw, href: 'https://thenextweb.com/apps/2015/07/28/want-a-javascript-joke-i-will-callback-later/#.tnw_eEcXKYX8' },
        { icon: bi, href: 'http://www.businessinsider.com/lrn-coding-app-2015-7' },
        { icon: guardian, href: 'https://www.theguardian.com/tv-and-radio/2016/oct/23/global-election-whoisneil-rich-halls-us-election-breakdown' },
        { icon: politico, href: 'http://www.politico.com/story/2016/09/donald-trump-twitter-army-228923' },
        { icon: vice, href: 'https://news.vice.com/story/alt-right-racists-twitter-bot' },
        { icon: adweek, href: 'http://www.adweek.com/digital/sherry-gray-guest-post-webot/' },
        { icon: nowthis, href: 'https://www.facebook.com/NowThisPolitics/videos/1454064204625065/' },
        { icon: mashable, href: 'http://mashable.com/2017/02/08/facebook-bot-trump-protests-webot' },
      ]
    }

    return (
      <div className="icon-list-container" style={{ background: background }}>
        <label className="icon-list-label">

        </label>
        <span className="list-shortener">
          <div className="icon-list">
            {icons.length > 0 && icons.map(this.renderIcon)}
          </div>
        </span>
      </div>
    )
  }
}

export default IconList

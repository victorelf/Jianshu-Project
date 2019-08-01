import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style.js';

class Writer extends PureComponent {
	render() {
		return (
			
			<WriterWrapper>
				<a className='link' href='https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'>
				    <img className='qrcode' alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
				    <div className='title'>下载简书手机App ></div>
				    <p className='description'>随时随地发现和创作内容</p>
			    </a>
			</WriterWrapper>

		)
	}
}

export default Writer;
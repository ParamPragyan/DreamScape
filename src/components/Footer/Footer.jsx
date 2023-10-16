import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div>
            
			<section className="footer">
				<div className="footer__socials">
					<a href="/" target='_blank'>
						<img
							src="./ln.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.youtube.com/@ashishyadav8729" target='_blank'>
						<img
							src="./youtube.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.facebook.com/profile.php?id=61552206961419" target='_blank'>
						<img
							src="./fb.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.instagram.com/dreamscapestudio7/" target='_blank'>
						<img
							src="./insta.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://dreamscapestudio-blog1.blogspot.com/2023/10/" target='_blank'>
						<img
							src="./blogger.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
				</div>
				<p className="footer__copyrights-text">Copyright © 2023 DreamScape STUDIO. All Rights Reserved.</p>
			</section>
        </div>
    );
}

export default Footer;
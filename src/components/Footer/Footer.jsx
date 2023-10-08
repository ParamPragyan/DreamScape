import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div>
            
			<section className="footer">
				<div className="footer__socials">
					<a href="https://twitter.com" target='_blank'>
						<img
							src="./ln.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.youtube.com" target='_blank'>
						<img
							src="./youtube.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://discord.com" target='_blank'>
						<img
							src="./fb.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://discord.com" target='_blank'>
						<img
							src="./insta.png"
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
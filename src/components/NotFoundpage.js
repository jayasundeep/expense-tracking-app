import React from 'react';

const NotFoundpage = () => (
    <div>
        <div id="error" class="error_code_404">
            <div class="error_message">
                The request could not be understood.
                <a href="/">Go to the homepage</a> »
            </div>
            <div class="error_bubble">
                <div class="error_code">404<br><span>ERROR</span></div>
                <div class="error_quote">Lord! It's a miracle! Webpage up and vanished like a fart in the wind!</div>
            </div>
            <div class="error_arrow"></div>
            <div class="error_attrib">
                <span>Warden Norton, </span><a href="/">The Shawshank Redemption (1994)</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
);

export default NotFoundpage;

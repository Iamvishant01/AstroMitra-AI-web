import React from 'react';
export default function Footer() {
  return (
    <>
    <div className="footer-main">
        <footer className="footer">
            <div className="footer-col">
                <h3 id='footer-heading'>Evergreen Writes</h3>
                <br/>
                <a href="https://iamvishant.blogspot.com/2025/02/vishant-netke-journey-of-innovation.html" target='about_blank'><p id='posts-footer'>Vishant Netke: The Journey of Innovation, Growth, and Storytelling</p></a>
                <a href="https://iamvishant.blogspot.com/2025/02/the-astrology-unveiling-effect-of-stars.html" target='about_blank'><p id="posts-footer">The Astrology : Unveiling the effect of Stars and Destiny</p></a>
                <a href="https://iamvishant.blogspot.com/2025/02/the-fruit-of-youth-message-for-teenagers.html" target='about_blank'><p id="posts-footer">The Fruit of Youth - A Message for Teenagers</p></a>
            </div>
            <div className="footer-col">
              <h3 id='footer-heading'>Stay in Touch on Wildr</h3>
              <br/>
              <a href="https://www.linkedin.com/in/iamvishant01/" target='about_blank'><p id="posts-footer"><i class="fa-brands fa-linkedin"></i> Linkedin</p></a>
              <a href="https://www.instagram.com/iamvishant01" target='about_blank'><p id="posts-footer"><i class="fa-brands fa-square-instagram"></i> Instagram</p></a>
              <a href="https://github.com/Iamvishant01" target='about_blank'><p id="posts-footer"><i class="fa-brands fa-github"></i> Github</p></a>
              <a href="https://www.reddit.com/user/Unique_Plastic_4202/" target='about_blank'><p id="posts-footer"><i class="fa-brands fa-reddit"></i> Reddit</p></a>
              <a href="mailto:iamvishant01@gmail.com"><p id="posts-footer"><i class="fa-solid fa-envelope"></i> Mail</p></a>
            </div>
            <div className="footer-col" >
              <iframe
                id='kothrud-map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.80071956922!2d73.78405980753173!3d18.507420981837626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb732af849d%3A0xd4078b48b3fe44f0!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1739171891350!5m2!1sen!2sin"
                title="Google Maps - Kothrud, Pune"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
        </footer>
    </div>
    </>
  );
}
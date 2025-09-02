import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="f-info">
                <div className="f-info-socials">
                    <FaFacebookSquare className="icon"/>
                    <FaSquareInstagram  className="icon insta" />
                    <FaLinkedin  className="icon"/>
                </div>
                <div className="f-info-brand">&copy; MariageHall Private Limited</div>
                <div className="f-info-links">
                    <a href="/privacy">Privacy &nbsp;</a>
                    <a href="/terms">Terms</a>
                </div>
            </div>
        </footer>
    );
}

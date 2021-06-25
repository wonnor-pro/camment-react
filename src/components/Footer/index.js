import * as ROUTES from '../../constants/routes';
const Footer = () => {
    return (
        <div className="footer">
          <p>Copyright &copy; 2021 ｜ <a href={ROUTES.REPORT}> Report an issue here</a> or contact us at <a href={"mailto:admin@camments.com"}>admin@camments.com</a></p>
        </div>
    );
}

export default Footer;
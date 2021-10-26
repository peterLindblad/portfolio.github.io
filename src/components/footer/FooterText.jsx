import SocialMediaButton from "./SocialMediaButtons";

const FooterHeading = {
    fontFamily: "Playfair Display",
    fontSize: "2em",
    fontWeight: "900",
};

const footerText = {
    fontFamily: "Playfair Display",
    fontSize: "1.2em",
    lineHeight: "2em",
    padding: "1em",
    backgroundColor: '#b8b8b6',

};

const iconsMenu = {
    display: "flex",
    flexWrap: "wrap"
};

export default function FooterText() {
  return (
    <div style={footerText}>
      <h3 style={FooterHeading}>Om Mig</h3>
      {/* TODO  ändra text till Peters egna text*/}
      <p>Hej jag heter Peter Lindblad och jag gillar foto. På min sida lägger jag upp all foton jag tagit. 
          Om ni vill kontakta mig så får ni gärna kika in på mina sociala medier. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat.
           <div style={iconsMenu}> 
           {/* TODO  ändra länkarna till riktiga*/}
           <SocialMediaButton img="https://img.icons8.com/dotty/80/000000/email.png" path="https://www.google.com/" />
           <SocialMediaButton img="https://img.icons8.com/dotty/80/000000/facebook-circled.png" path="https://www.google.com/"/>
           <SocialMediaButton img="https://img.icons8.com/dotty/80/000000/instagram-new.png" path="https://www.google.com/"/>
           </div>
      </p>
      </div>
  );
}

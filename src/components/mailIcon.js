import mailimg from '../img2.jpeg'

const estilomail = {
  width: '36px',
  height: '36px',
};

export default function MailIcon() {
  return (
    <img src={mailimg} style={estilomail} alt="icono-mail" />
  );
}
import utecimg from '../img1.jpeg'

const estiloUTEC = {
  width: '36px',
  height: '36px',
};

export default function UTECIcon() {
  return (
    <img src={utecimg} style={estiloUTEC} alt="icono-utec" />
  );
}
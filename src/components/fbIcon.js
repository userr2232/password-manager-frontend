import fbimg from '../fb.jpeg'

const estilofb = {
  width: '46px',
  height: '46px',
  borderRadius: '50%',
};

export default function FbIcon() {
  return (
    <img src={fbimg} style={estilofb} alt="icono-fb" />
  );
}
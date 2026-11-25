export default function Button({ action, contenu }) {
  return (
    <button onClick={action} type="button">
      {contenu}
    </button>
  );
}

export default function Button({ action, contenu, classe }) {
  return (
    <button onClick={action} type="button" className={classe}>
      {contenu}
    </button>
  );
}

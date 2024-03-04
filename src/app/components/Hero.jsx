export default function Hero({ data }) {
  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <button>{data.button}</button>
    </section>
  );
}

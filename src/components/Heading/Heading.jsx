import "./Heading.scss";

function Heading({ title, quotes, author = "" }) {
  return (
    <div className='section-heading text-center'>
      <h2>{title}</h2>
      <p className='quotes'>&quot;{quotes}&quot;</p>
      <p>{author !== "" ? `- ${author} -` : null}</p>
    </div>
  );
}

export default Heading;

const ArticleList = ({ items, error }) => {
  return (
    <>
      {error ? (
        <p style={{ color: "red" }}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      ) : (
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          {items.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ArticleList;

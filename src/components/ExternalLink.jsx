import VisuallyHidden from "./VisuallyHidden";

function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <VisuallyHidden> (opens in new tab)</VisuallyHidden>
    </a>
  );
}

export default ExternalLink;

import Container from "./Container";

const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;

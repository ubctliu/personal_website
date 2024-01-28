type ProjectProps = {
  projectName: string
};

const Project = ({ projectName } : ProjectProps) => {
  return (
    <article>
      <p>{projectName}</p>
    </article>
  );
};

export default Project;
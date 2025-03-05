import Project from '@/app/components/Project';
import odysseyImage from '../../../public/odyssey.png';
import photoLabsImage from '../../../public/photolabs.png';
import mPloyImage from '../../../public/mploy.png';

const Projects = () => {
  return (
    <section id={'projects'}>
      <a href={'#projects'} className={'no-underline inline-block'}>
        <div
          className={
            'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white'
          }
        >
          Projects
        </div>
      </a>
      <Project
        projectName={'mPloy'}
        projectLink={'https://mploy.ca/'}
        liveLink={'https://apps.apple.com/ca/app/mploy/id1395491737'}
        projectImage={mPloyImage}
        projectDescription={
          'mPloy is a mobile app for gig workers to help both workers and companies - built with React Native & scalable cloud services'
        }
      />
      <Project
        projectName={'Odyssey'}
        projectLink={'https://github.com/ubctliu/odyssey'}
        liveLink={'https://odyssey-delta-lac.vercel.app/'}
        projectImage={odysseyImage}
        projectDescription={
          'Odyssey is a web app that helps users plan their trips - built with NextJS'
        }
      />
      <Project
        projectName={'Photolabs'}
        projectLink={'https://github.com/ubctliu/photolabs-starter'}
        projectImage={photoLabsImage}
        projectDescription={''}
      />
      <Project
        projectName={'Lighthouse Marketplace'}
        projectLink={'https://github.com/ubctliu/lhl-marketplace'}
        projectDescription={''}
      />
    </section>
  );
};

export default Projects;

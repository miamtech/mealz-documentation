import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Import images as regular images instead of SVG components
import plugAndPlayImg from '@site/static/img/plugAndPlay.svg';
import iaBuildinImg from '@site/static/img/iaBuildin.svg';
import uiImg from '@site/static/img/UI.svg';

const FeatureList = [
  {
    title: 'Easy to Use',
    imgSrc: plugAndPlayImg,
    description: (
      <>
        Mealz provide native view that can be plugged in any configuration.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imgSrc: iaBuildinImg,
    description: (
      <>
        Mealz SDK embed pre build component design to your application needs
      </>
    ),
  },
  {
    title: 'Fit your Style',
    imgSrc: uiImg,
    description: (
      <>
        Mealz experience and design is fully customisable 
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

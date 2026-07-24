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
        MealzUIKit screens plug into Android, iOS and KMM apps via a WebView powered by Mealz SSR.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imgSrc: iaBuildinImg,
    description: (
      <>
        Catalog, planner and recipe journeys ship ready to inject — initialize once, then present the screens you need.
      </>
    ),
  },
  {
    title: 'Fit your Style',
    imgSrc: uiImg,
    description: (
      <>
        Brand the experience with CSS manifests and the same styling model as Web SSR.
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

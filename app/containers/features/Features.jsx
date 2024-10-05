import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';




// Can maybe make some of these collapsable

const featuresData = [
  {
    title: 'Fish and Habitat Monitoring',
    texts: [
      'Fish population monitoring',
      'Habitat monitoring and assessment',
      'Stream channel/sediment surveys',
      // 'Large woody debris (LWD) and riparian monitoring',
      // 'Macroinvertebrate/diatoms',
      // 'Temperature and water quality monitoring',
      // 'Electrofishing, snorkeling, trapping, tagging (PIT, CWT etc.)',
      // 'Radio and acoustic tracking',
      // 'Sampling platform',
      // 'Resistance board weirs'
    ],
  },
  {
    title: 'Fish Population and Life Cycle Modeling',
    texts: [
      'Life cycle and limiting factors modeling',
      'ESA viability and extinction risk',
      'Juvenile salmon habitat capacity (UCM)',
      // 'Growth and bioenergetics',
      // 'Salmon stock-recruitment',
      // 'Hydro, hatchery, harvest and habitat effects',
      // 'Climate change modeling'
    ],
  },
  // {
  //   title: 'Forests and Fish',
  //   texts: [
  //     'Forest management and restoration plans',
  //     'Riparian timber harvest',
  //     'Riparian modeling and restoration',
      // 'LWD recruitment',
      // 'Water typing (Fish/Non-fish)',
      // 'Fish passage Issues',
      // 'Forest pesticide use',
      // 'Livestock grazing',
      // 'Habitat restoration',
      // 'Monitoring and evaluation'
    // ],
  // },
  {
    title: 'Hatchery and Harvest Management',
    texts: [
      'Run size/harvest rate estimates',
      'Sustainable yield estimations',
      'Mixed stock analysis',
      // 'Regulation strategies',
  //     // 'Harvest monitoring',
  //     // 'Hatchery/wild interactions',
  //     // 'Genetic risk assessments',
  //     // 'Hatchery Master planning'
    ],
  },
  // {
  //   title: 'Statistical Analysis',
  //   texts: [
  //     'Experimental, monitoring and sampling design',
  //     'Data, time series, trend and other analyses',
  //     'Univariate/multivariate statistics',
  //     'Nonparametric methods',
  //     // 'Simulation modeling',
  //     // 'Data Dashboards with R Shiny',
  //     // 'Mark-recapture modeling',
  //     // 'Bayesian statistics',
  //     // 'Cluster/ordination analysis',
  //     // 'Maximum likelihood estimators',
  //     // 'Spatial analysis'
  //   ],
  // },
];


const Features = () => (
  <div className="cramer__features section__padding" id="features">
    <div className="cramer__features-heading">
      <h1 className="gradient__text">But What Are We Actually Doing?</h1>
      <p>

        At Cramer Fish Sciences, we help clients in California, Oregon, Idaho, Washington, Montana and Alaska find reliable and practical solutions to challenges with fish populations and riparian and aquatic ecology.

        We use science to help solve issues with salmon and trout populations along the entire West Coast.
      </p>
    </div>
    <div className="cramer__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} texts={item.texts} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { /*colors,*/ pieces, motion } from '../colors.js';
import Piece from '../components/Piece.js';
import './Portfolio.css';

class MapProject1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    var divElement = document.getElementById('viz1618340958603');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '80vw';
    vizElement.style.height = divElement.offsetWidth * 0.55 + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <h2>A GLIMPSE AT PHILDELPHIA HEALTH AND EDUCATION</h2>
        <div
          id='subprojectContainer'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className='mapAndLegend'>
            <div
              class='tableauPlaceholder'
              id='viz1618340958603'
              style={{ position: 'relative' }}
            >
              <noscript>
                <a href='#'>
                  <img
                    alt='Where are health and education resources in Philadelphia? '
                    src={
                      'https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;S9&#47;S9G2ZGB6Y&#47;1_rss.png'
                    }
                    style={{ border: 'none' }}
                  />
                </a>
              </noscript>
              <object class='tableauViz' style={{ display: 'none;' }}>
                <param
                  name='host_url'
                  value='https%3A%2F%2Fpublic.tableau.com%2F'
                />{' '}
                <param name='embed_code_version' value='3' />{' '}
                <param name='path' value='shared&#47;S9G2ZGB6Y' />{' '}
                <param name='toolbar' value='yes' />
                <param
                  name='static_image'
                  value={
                    'https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;S9&#47;S9G2ZGB6Y&#47;1.png'
                  }
                />{' '}
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en' />
                <param name='filter' value='publish=yes' />
              </object>
            </div>
            <img
              src='https://i.imgur.com/ngVXxeG.png'
              style={{ width: '14.6vw' }}
            />
          </div>
          <p className='subProjectDescription'>
            Using data from OpenDataPhilly.org, I wanted to get a look of the
            data surrounding available health resources provided by the
            Philadelphia Department of Public Health, seeing where ther were
            located, and discovering what this means in terms of the city's
            perception of need in different areas.
          </p>
          <p className='subProjectDescription emphasisLink'>
            View sources here:
            <ul>
              <li>
                <a href='https://www.opendataphilly.org/dataset/schools'>
                  School data:{' '}
                </a>
                includes public schools, charter schools, many private schools,
                school annexes, and athletic fields and facilities
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/philadelphia-universities-and-colleges'>
                  University and college data:{' '}
                </a>
                includes a list of all colleges and universities in Phildelphia
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/philadelphia-hospitals'>
                  Hospitals:{' '}
                </a>
                includes a list of all hospitals in Phildelphia
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/health-centers'>
                  Healthcare centers data:{' '}
                </a>
                includes a list of all primary care health centers in
                Phildelphia
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/sharps-drop-boxes'>
                  "Sharps" (needle) drop boxes data
                </a>
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/hiv-testing-sites'>
                  HIV Testing Sites
                </a>
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/prep-providers'>
                  PrEP Providers
                </a>
              </li>
              <li>
                <a href='https://www.opendataphilly.org/dataset/condom-distribution-sites'>
                  Condom distribution sites
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className='center'>
          <div className='threeRow'>
            <div className='individualCity flex-col'>
              <p>University City</p>
              <img src='https://i.imgur.com/88NXaqr.png' />
            </div>
            <div className='individualCity flex-col'>
              <p>Washington Square</p>
              <img src='https://i.imgur.com/j3Cdqt0.png' />
            </div>
            <div className='individualCity flex-col'>
              <p>Upper Kensington</p>
              <img src='https://i.imgur.com/W7Cyzna.png' />
            </div>
          </div>
          <p className='subProjectDescription'>
            {' '}
            A look at three different areas. The University City area has a
            significant amount of health-related resources, especially in
            comparison to areas in Kensington.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(MapProject1);

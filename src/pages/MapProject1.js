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
        <div
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
        </div>
      </div>
    );
  }
}

export default withRouter(MapProject1);

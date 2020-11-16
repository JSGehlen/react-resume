import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { client } from '../../client';
import { motion } from 'framer-motion';
import { pageTransitions } from '../transitions';

import { Button, Container, Navigation, Loading } from '../../components/';

export const About = () => {
  const history = useHistory();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'aboutMe',
        order: '-sys.id',
      })
      .then((response) => {
        setLoading(true);
        setEntries(response.items);
      });
    setLoading(false);
  }, []);

  return (
    <motion.div
      variants={pageTransitions}
      animate='in'
      initial='out'
      exit='out'
    >
      <Navigation title='About Me' color='purple' />
      <Container color='dark'>
        {loading ? (
          <>
            {entries.map((entry) => {
              return (
                <div
                  key={entry}
                  dangerouslySetInnerHTML={{ __html: entry.fields.description }}
                />
              );
            })}
          </>
        ) : (
          <Loading />
        )}
        <Button
          type='button'
          onClick={() => history.push('/skills')}
          buttonStyle='btn--purple--solid'
          buttonSize='btn--medium'
        >
          Next
        </Button>
      </Container>
    </motion.div>
  );
};

export default About;

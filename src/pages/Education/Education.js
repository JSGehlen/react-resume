import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { client } from '../../client';
import { motion } from 'framer-motion';
import { pageTransitions } from '../transitions';

import {
  Button,
  ButtonWrapper,
  Card,
  Container,
  LetterBox,
  Navigation,
  Loading,
  List,
  ListItem,
  Typography,
} from '../../components/';

export const Education = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'education',
        order: '-sys.id',
      })
      .then((response) => {
        setLoading(true);
        setEntries(response.items);
      });
    setLoading(false);
  }, []);

  const studyDate = (timestamp) =>
    new Date(timestamp).toLocaleDateString({
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

  const history = useHistory();

  return (
    <motion.div
      variants={pageTransitions}
      animate='in'
      initial='out'
      exit='out'
    >
      <Navigation title='Education' color='blue' />
      <br />
      <Container color='dark'>
        {loading ? (
          <>
            {entries.map((entry) => {
              return (
                <Card key={entry.fields.id} color='dark'>
                  <LetterBox color='blue'>
                    {entry.fields.title.slice(0, 1)}
                  </LetterBox>
                  <Typography variant='h1'>{entry.fields.title}</Typography>
                  <List>
                    <ListItem>
                      <Typography variant='h3'>
                        {studyDate(entry.fields.startDate)} -{' '}
                        {studyDate(entry.fields.endDate)}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='h2' color='blue'>
                        {entry.fields.shortDescription}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='body'>
                        {entry.fields.description}
                      </Typography>
                    </ListItem>
                  </List>
                </Card>
              );
            })}
          </>
        ) : (
          <Loading />
        )}
        <ButtonWrapper>
          <Button
            type='button'
            onClick={() => history.push('/skills')}
            buttonStyle='btn--yellow--solid'
            buttonSize='btn--flex--medium'
          >
            Previous
          </Button>
          <Button
            type='button'
            onClick={() => history.push('/workhistory')}
            buttonStyle='btn--blue--solid'
            buttonSize='btn--flex--medium'
          >
            Next
          </Button>
        </ButtonWrapper>
      </Container>
    </motion.div>
  );
};

export default Education;

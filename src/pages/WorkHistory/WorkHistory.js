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
  List,
  ListItem,
  Loading,
  Navigation,
  Typography,
} from '../../components/';

export const WorkHistory = () => {
  const [entries, setEntries] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'workHistory',
        order: 'fields.id',
      })
      .then((response) => {
        setLoading(true);
        setEntries(response.items);
      });
    setLoading(false);
  }, []);

  const workDate = (timestamp) => {
    if (!timestamp) {
        return "On going"
    }
    return new Date(timestamp).toLocaleDateString({
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
}

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const history = useHistory();

  return (
    <motion.div
      variants={pageTransitions}
      animate='in'
      initial='out'
      exit='out'
    >
      <Navigation title='Work History' color='red' />
      <br />

      <Container color='dark'>
        {loading ? (
          <>
            {entries.slice(0, visible).map((entry) => {
              return (
                <Card key={entry.fields.id} color='dark'>
                  <LetterBox color='red'>
                    {entry.fields.company.slice(0, 1)}
                  </LetterBox>
                  <Typography variant='h1'>{entry.fields.jobTitle}</Typography>
                  <List>
                    <ListItem>
                      <Typography variant='h3'>
                      {workDate(entry.fields.startDate)} - {workDate(entry.fields.endDate) && workDate(entry.fields.endDate)}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='h2' color='red'>
                        {entry.fields.company}
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

        {entries.length > visible ? (
          <Button
            type='button'
            onClick={showMoreItems}
            buttonSize='btn--flex--medium'
            buttonStyle='btn--red--solid'
          >
            Load more
          </Button>
        ) : (
          ''
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
            onClick={() => history.push('/contact')}
            buttonStyle='btn--green--solid'
            buttonSize='btn--flex--medium'
          >
            Next
          </Button>
        </ButtonWrapper>
      </Container>
    </motion.div>
  );
};

export default WorkHistory;

import React, { useState, useEffect } from 'react';
import { client } from '../../client';
import { motion } from 'framer-motion';
import {
  Card,
  Container,
  LetterBox,
  List,
  ListItem,
  Loading,
  Navigation,
  Typography,
} from '../../components/';
import { MdContactMail } from 'react-icons/md';
import { pageTransitions } from '../transitions';

export const Contact = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'contact',
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
      <Navigation title='Contact Me' color='green' />
      <br />
      <Container color='dark'>
        {loading ? (
          <>
            {entries.map((entry) => {
              return (
                <Card key={entry} color='dark'>
                  <LetterBox color='green'>
                    <MdContactMail />
                  </LetterBox>
                  <Typography variant='h1'>{entry.fields.title}</Typography>
                  <List>
                    <Typography variant='h2'>Get in touch</Typography>
                    <ListItem>
                      <Typography variant='body' color='green'>
                        <a href={entry.fields.email} alt='Email Address'>
                          {entry.fields.email.slice(7)}
                        </a>
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='body' color='green'>
                        <a href={entry.fields.phone} alt='Phone number'>
                          {entry.fields.phone.slice(4)}
                        </a>
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='body' color='green'>
                        <a
                          href={entry.fields.portfolio}
                          alt='Portfolio'
                          target='_blank'
                          rel='noreferrer'
                        >
                          {entry.fields.portfolio}
                        </a>
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant='body' color='green'>
                        <a
                          href={entry.fields.gitHub}
                          alt='gitHub'
                          target='_blank'
                          rel='noreferrer'
                        >
                          {entry.fields.gitHub}
                        </a>
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <br />
                      <Typography variant='h3'>
                        Check out the repo for this project here:
                        <Typography variant='body' color='green'>
                          <a
                            href={entry.fields.gitHubRepo}
                            alt='gitHub'
                            target='_blank'
                            rel='noreferrer'
                          >
                            {entry.fields.gitHubRepo}
                          </a>
                        </Typography>
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
      </Container>
    </motion.div>
  );
};

export default Contact;

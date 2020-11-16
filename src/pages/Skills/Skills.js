import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { client } from '../../client';

import { pageTransitions } from '../transitions';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

import {
  Button,
  ButtonWrapper,
  Container,
  Navigation,
  Loading,
  Typography,
} from '../../components/';

const SkillBox = styled(motion.div)`
  background-color: #232526;
  margin: 1rem;
  border-radius: 2rem;
  padding: 1rem;
  box-shadow: 0 16px 32px -16px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  h2 {
    text-align: center;
  }
`;

export const Skills = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'skills',
        order: 'sys.createdAt',
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
      <Navigation title='My Skills' color='yellow' />
      <br />
      <Container color='dark'>
        {loading ? (
          <>
            {entries.map((entry, i) => {
              const isOpen = open === i;
              return (
                <Fragment key={entry.fields.id}>
                  <AnimateSharedLayout>
                    <SkillBox>
                      <motion.header
                        layout
                        onClick={() => {
                          setOpen(isOpen ? false : i);
                        }}
                      >
                        <Typography variant='h2' color='yellow'>
                          {entry.fields.title}
                        </Typography>
                      </motion.header>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: entry.fields.description,
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </SkillBox>
                  </AnimateSharedLayout>
                </Fragment>
              );
            })}
          </>
        ) : (
          <Loading />
        )}

        <ButtonWrapper>
          <Button
            type='button'
            onClick={() => history.push('/about')}
            buttonStyle='btn--purple--solid'
            buttonSize='btn--flex--medium'
          >
            Previous
          </Button>
          <Button
            type='button'
            onClick={() => history.push('/education')}
            buttonStyle='btn--yellow--solid'
            buttonSize='btn--flex--medium'
          >
            Next
          </Button>
        </ButtonWrapper>
      </Container>
    </motion.div>
  );
};

export default Skills;

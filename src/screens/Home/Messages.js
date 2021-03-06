import React from 'react';
import { Box, Image } from 'grommet';
import Header from '../../components/Header';
import Section from './Section';
import Message from './Message';

const COMPANIES = ['HPE', 'Netflix', 'GE', 'IBM', 'MicroFocus', 'GitHub',
  'Samsung', 'Uber', 'Shopify', 'Twilio', 'Sony', 'HP',
  'Boeing'];

export default () => (
  <Section background='light-1' pad={{ top: 'xlarge' }}>
    <Header
      level={2}
      label='don’t take our word for it'
      summary={(
        <span>
          here&#39;s what our community of designers and developers have to
          say about grommet
        </span>
      )}
    />

    <Box
      direction='row'
      wrap
      justify='center'
      margin={{ vertical: 'xlarge' }}
      pad={{ bottom: 'large' }}
      border='bottom'
    >
      <Message
        imageSrc='/img/avatars/puppet_200x200.jpeg'
        name='@nikmd23'
        summary={(
          <span>
            Does Material Design feel too &quot;Googly&quot; for you?
            Check out @grommetux, the OSS UX framework
            http://bit.ly/1YWH7ea
          </span>
        )}
      />

      <Message
        imageSrc='/img/avatars/puppet_200x200.jpeg'
        name='@nikmd23'
        summary={(
          <span>
            this accessibility demo is
            {' '}
            <span role='img' aria-label='money'>💰💰💰</span>
            {' '}
            https://vimeo.com/187068246
            great work @grommetux!
          </span>
        )}
      />

      <Message
        imageSrc='/img/avatars/1nCCU4b3_200x200.jpg'
        name='@tomsthoughtfeed'
        summary={(
          <span>
            After two hours of playing with @grommetux, I can confidently
            say it is the best design tool I have ever used
          </span>
        )}
      />

      <Message
        imageSrc='/img/avatars/06IweXPF_200x200.jpg'
        name='@linghucong'
        summary={(
          <span>
            Grommet https://grommet.github.io/  great react - redux
            boilerplate with great user experience
          </span>
        )}
      />

      <Message
        imageSrc='/img/avatars/VQlHfV6m_200x200.jpg'
        name='@ravishtiwari'
        summary={(
          <span>
            looking for Accessible @reactjs UI components, check out
            https://grommet.github.io  @grommetux
          </span>
        )}
      />
    </Box>

    <Header
      level={2}
      label='grommet is used by folks at these fine companies'
      summary={(
        <span>
          if people from these fine establishments are using it,
          how can it be bad?
        </span>
      )}
    />

    <Box
      direction='row'
      wrap
      gap='large'
      justify='center'
      align='center'
      margin={{ vertical: 'xlarge' }}
    >
      {COMPANIES.map(name => (
        <Box
          key={name}
          basis='small'
          direction='row'
          justify='center'
          margin={{ bottom: 'large' }}
        >
          <Image
            alt={`${name} logo`}
            size='small'
            src={`img/logos/${name}-logo.svg`}
          />
        </Box>
      ))}
    </Box>
  </Section>
);

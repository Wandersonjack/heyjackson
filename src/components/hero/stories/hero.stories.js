import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from '../hero'

const stories = storiesOf('V1|Components/Hero', module)
stories.add('Hero', () => (
    <Hero />
))
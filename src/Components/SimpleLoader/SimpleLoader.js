import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import './SimpleLoader.css'

const SimpleLoader = ({active}) => (
  <div>
    { active ? 
    <div className="SimpleLoader">
      <Dimmer active={active}>
        <Loader />
      </Dimmer>
    </div>
  : null }
  </div>
)

export default SimpleLoader
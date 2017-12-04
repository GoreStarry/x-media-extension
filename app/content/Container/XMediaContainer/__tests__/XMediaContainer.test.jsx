import React from 'react'
import { shallow } from 'enzyme'

import XMediaContainer from '../XMediaContainer'

describe('XMediaContainer', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<XMediaContainer {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})
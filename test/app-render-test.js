
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Help from "../demo/components/Help";

describe('<Help />', () => {
  it('should render h1', () => {
    let data = {
      text: {
            msg: 'welcome to ctyloading`s website'
          }
    }
    const wrapper = shallow(
      <Help
        data={ data }
        className={ "help" }
        id={ 1 }
      />
    );
    expect(wrapper.find('.help'))
  })
})

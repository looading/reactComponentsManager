
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Help from "../demo/components/Help";

describe('<Help /> component test:', () => {
  let collection = {
      data: {
        msg: 'welcome to ctyloading`s website'
      }
  }

  it('should render h1', () => {
    const wrapper = shallow(
      <Help
        collection={ collection }
        className={ "help" }
        id={ 1 }
      />
    );
    expect(wrapper.find('.help')).to.be.ok;
  })

  it('should render a string', () => {
    const wrapper = shallow(
      <Help
        collection={ collection }
        className={ "help" }
        id={ 1 }
      />
    );
    expect(wrapper.find('.help').html()).to.equal(
      `<h1 class="help" id="1">welcome to ctyloading\`s website</h1>`
    )
  })
})
